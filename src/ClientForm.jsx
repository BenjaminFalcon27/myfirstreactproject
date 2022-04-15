import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    newClient: "",
  };

  handleChange = (event) => {
    //Constante qui prend la valeur du input
    const value = event.currentTarget.value;
    //La valeur de newClient prend la valeur value
    this.setState({ newClient: value });
  };

  // Cette fonction permet d'ajouter à la liste state lors d'une saisie dans l'input
  handleSubmit = (event) => {
    event.preventDefault();

    // Constantes id (date de saisie pour avoir id unique) et name qui prend le newClient dans state
    const id = new Date().getTime();
    const name = this.state.newClient;

    this.props.onClientAdd({ id, name });

    this.setState({ newClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newClient}
          placeholder="add a client"
          onChange={this.handleChange}
        ></input>
        <button>Add</button>
      </form>
    );
  }
}

export default ClientForm;
