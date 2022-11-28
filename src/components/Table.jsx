import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  checkSelected = (value) =>
    value === this.props.selectedValue ? "selected" : "";

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected("First")}
            className={this.checkSelected("First")}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected("Second")}
            className={this.checkSelected("Second")}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected("Third")}
            className={this.checkSelected("Third")}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Local state is {this.props.selectedValue || "undefined"}
        </p>
      </>
    );
  }
}

export default Table;
