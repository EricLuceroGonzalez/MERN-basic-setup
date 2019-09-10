import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class CrearArticulo extends Component {
  state = {
    name: "",
    price: "",
    onExistence: ""
  };

  componentDidMount() {
    console.log(this.state);
  }

  // onHandleChange Function =>
  handleFormInputs = data => {
    switch (data.target.name) {
      case "articleName":
        console.log(this.state);
        this.setState({ name: data.target.value });
        break;
      case "articlePrice":
        console.log(this.state);
        this.setState({ price: data.target.value });
        break;
      case "articleExistence":
        console.log(this.state);
        this.setState({ onExistence: data.target.value });
        break;
      default:
        console.log("Default");
        break;
    }
  };

  // sendData() => Axios.post(0)
  sendFormData = () => {
    console.log("inside sendFormData()");
    axios
      .post("http://localhost:3001/api/v1/articulo", this.state)
      .then(res => {
        console.log({
          mensaje: "Post exitoso",
          response: res.data
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Post Fallido",
          response: err.data
        });
      });
  };

  render() {
    return (
      <div>
        <p>jjj</p>
        <Form
          className="col-xs-6 col-md-8 col-xl-4"
          style={{
            background: "rgba(25,250,50,0.75)",
            padding: "20px 12px",
            borderRadius: "14px",
            boxShadow: "2px 6px 8px gray",
            margin: "30px auto"
          }}
        >
          <FormGroup>
            <Label for="exampleEmail">Nombre:</Label>
            <Input
              onChange={this.handleFormInputs}
              type="textarea"
              name="articleName"
              id="articleNameInput"
              placeholder="Nombre del articulo"
            />
          </FormGroup>
          <FormGroup>
            <Label for="articlePrecio">Precio</Label>
            <Input
              onChange={this.handleFormInputs}
              type="number"
              name="articlePrice"
              id="articlePriceInput"
              placeholder="Precio del articulo"
            />
          </FormGroup>
          <FormGroup>
            <Label for="articlePrecio">Existencias</Label>
            <Input
              onChange={this.handleFormInputs}
              type="number"
              name="articleExistence"
              id="articleExistenceInput"
              placeholder="On Existence"
            />
          </FormGroup>

          <Button onClick={this.sendFormData}>Enviar</Button>
        </Form>
      </div>
    );
  }
}

export default CrearArticulo;
