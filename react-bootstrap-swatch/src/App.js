import React, { Component } from 'react';
import {
  Header, Table, Pagination,
  ListGroup, SimpleCard, LinkedCard,
  ListGroupHeading, Jumbotron, ComplexCard,
  LoginForm, Upload
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>

          <div className="ml-3 mr-3">
            <Table />
          </div>
          <div className="ml-3 mr-3">
            <Pagination />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Table />
                <Pagination />
              </div>
              <div className="col">
                <Table />
                <Pagination />
              </div>
            </div>
          </div>

          <div className="alert alert-dismissible alert-warning mx-3">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">Warning!</h4>
            <p className="mb-0">Best check yo self, you\'re not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
          </div>

          <div class="progress mx-3 my-4">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
              style={
                { width: "75%" }
              }>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <ListGroup />
              </div>
              <div className="col">
                <ListGroup />
              </div>
            </div>
          </div>

          <div className="container-fluid my-4">
            <div className="row">
              <div className="col">
                <SimpleCard />
              </div>
              <div className="col">
                <SimpleCard />
              </div>
              <div className="col">
                <SimpleCard />
              </div>
              <div className="col">
                <SimpleCard />
              </div>
            </div>
          </div>

          <div className="container-fluid my-4">
            <div className="row">
              <div className="col">
                <LinkedCard />
              </div>
              <div className="col">
                <LinkedCard />
              </div>
              <div className="col">
                <LinkedCard />
              </div>
            </div>
          </div>

          <div className="container-fluid my-4">
            <div className="row">
              <div className="col">
                <ListGroupHeading />
              </div>
              <div className="col">
                <ListGroupHeading />
              </div>
            </div>
          </div>

          <Jumbotron />

          <div className="container-fluid my-4">
            <div className="row">
              <div className="col">
                <ComplexCard />
              </div>
              <div className="col">
                <ComplexCard />
              </div>
              <div className="col">
                <ComplexCard />
              </div>
            </div>
          </div>

          <div className="mx-3 my-4" style={{
            width: "40%"
          }}>
            <LoginForm />
          </div>

          <div className="mx-3 my-4" style={{
            width: "40%"
          }}>
            <Upload/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
