import "./App.css";
import React from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {
  //Création du tableau contenant les clients
  state = {
    //Table des clients par défaut
    clients: [
      { id: 1, name: "Trolais Benjamin" },
      { id: 2, name: "Charlier Themis" },
      { id: 3, name: "Delacre Paul" },
    ],
  };

  // Fonction de création d'un nouveau client
  handleAdd = (client) => {
    // On crée une copie de client au pluriel
    const clients = this.state.clients.slice();
    // On y ajoute le client
    clients.push(client);
    // On set state clients pour afficher le nouveau client et remettre l'input à vide
    this.setState({ clients });
  };

  // Fonction de suppression d'un client FONCTIONNE
  deleteClient = (id) => {
    // Copie du tableau
    const clients = this.state.clients.slice();
    // Index trouve le client qui correspond à l'id passé en paramètre
    const i = clients.findIndex((client) => client.id === id);
    // Splice permet de retirer des éléments à partir d'un index donnée dans un tableau
    clients.splice(i, 1);
    // Mise à jour du state
    this.setState({ clients: clients });
  };

  render() {
    // Titre
    const title = "Client List :";

    return (
      <div class="App">
        <h1 class="Title">{title}</h1>
        <ul class="List">
          {this.state.clients.map((client) => (
            // Cherche la classe Client et envoie lui un props details contenant client, et un autre props onDelete contenant
            //la fonction delete
            <Client details={client} onDelete={this.deleteClient} />
          ))}
        </ul>
        <div class="clientForm">
          <ClientForm onClientAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}

export default App;
