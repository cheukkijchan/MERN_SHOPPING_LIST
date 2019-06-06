import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux"; //get state from redux into react
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types"; // validation of component proptype

export class ShoppingList extends Component {
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Eggs'},
  //     { id: uuid(), name: 'Milk'},
  //     { id: uuid(), name: 'Ham'},
  //     { id: uuid(), name: 'Drinks'},
  //   ]
  // }

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item; //destructuring to get item in state
    return (
      // button for add item and creating a list of items after additem which has transition fading effect with remove-btn
      <Container>
        {/* using ItemModal to replace add item button
        <Button
          color = "dark"
          style={{marginBottom: '2rem'}}
          onClick={()=> {
            const name = prompt('Enter Item')
            if (name) {
              this.setState(state => ({
                items: [...state.items, {id:uuid(), name}]
              }))
          }
        }}
        >
          Add Item
        </Button> */}

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={1000} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

// mapping redux state into item properties
const mapStateToProps = state => ({
  item: state.item
});

// different export when using connect
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
