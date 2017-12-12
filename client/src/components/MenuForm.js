import React, { Component } from 'react';
import { Segment, Form, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MenuForm extends Component {
  state = { item: {name: '', description: '',  price: ''}};
  
  componentDidMount() {
    const match = this.props.match
    axios.get(`/api/menu_items/${match.params.id}`)
    .then( res => { 
      this.setState({ items: res.data });      
    })
    .catch( err => {
      console.log(err)
    })
  }

  handleSubmit = (e) => {
  e.preventDefault();
  let baseUrl = '/api/menu_items';
  const { id, name, description, price } = this.state.item;
  baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
  // strong params
  const params = { item: { name, description, price } }
  e.preventDefault();
  axios.put(baseUrl, params)
  .then(res => {
    this.props.history.push(`/menu_items/${id}`);
  })
  .catch( err => {
    console.log(err);
});
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ item: {...this.state.item, [id]: value } })
  }


  render() {
    const { name, price, description} = this.state.item;

    return(
      <Form onSubmit={this.handleSubmit}> 
        <Label> Menu Item </Label>
        <Form.Input value={name} id='name' onChange={this.handleChange} />
        <Label> Menu Item Price </Label>
        <Form.Input value={price} id='price' onChange={this.handleChange} />
        <Label> Menu Item Description </Label>
        <Form.Input value={description} id='description' onChange={this.handleChange} />
        <Button as={Link} to={`/menu_items`}>Cancel</Button>
        <Button primary type='submit'>Save</Button>
      </Form>

    )
  }
}

export default MenuForm;