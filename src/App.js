import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Detail from "./components/Detail";
import { Component } from "react";

class App extends Component {
  state = {
    selected: undefined,
  };

  changeSelected = (newValue) => {
    //newValue can be 'First' , 'Second', 'Third
    this.setState({
      selected: newValue,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selectedValue={this.state.selected}
                  changeSelected={this.changeSelected}
                  //you can pass anything as a prop!
                  //even a reference to a function
                />
              </Col>
              <Col className="my-auto">
                <Detail selectedValue={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
