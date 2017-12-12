import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Segment, List, Header, Table } from 'semantic-ui-react';
import axios from 'axios';


class Menu extends Component { 
state = { items: [] }

componentDidMount() {
  axios.get(`/api/menu_items`)
  .then( res => {
    this.setState({ items: res.data});
  })
  .catch( err => {
    console.log(err);
});
}

displayItems = () => {
  return this.state.items.map( item => {
   return(
  <Table.Body> 
    <Table.Row> 
        <Table.Cell>
        <Link to={`/menu_items/${item.id}/edit`}> 
        {item.name}
        </Link> 
        <br />
       <i> {item.description} </i>
        </Table.Cell>
        <Table.Cell>
        ${item.price}
        </Table.Cell>
      </Table.Row>
      </Table.Body>
   )
  })
}
  render() {
    return( 
      <Segment basic>
      <Header as='h1'> Menu Items brought to you by Faker  </Header>
      <Table fixed> 
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
        {this.displayItems()}
      </Table> 
    </Segment>
    )
  }
}



export default Menu;