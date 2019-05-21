import React, { Component } from 'react';
//ADD ITEM BUTTON COMPONENT
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'; // redux state inside component is called container
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';



class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // In react, when we type inside the input, we need a onchange property, and we need to set the state to w/e we typed in
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    // reprent the form from actual submitting
    e.preventDefault();

    const newItem = {
      name: this.state.name
    }

    // Add item via addItme action
    this.props.addItem(newItem);

    // Close Modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button 
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >Add Item</Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input 
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.onChange}
                  />
                  <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    block
                  >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);