import "./App.css";
import React, { Component } from "react";
import contacts from "./contacts.json";

let copyContacts = [...contacts];
copyContacts = copyContacts.splice(0, 5);

class App extends Component {
  state = {
    allContacts: [...contacts],
    filteredContacts: copyContacts,
  };

  addContact = () => {
    let copy = [...this.state.filteredContacts];
    copy.push(contacts[Math.floor(Math.random() * 50)]);
    this.setState({
      filteredContacts: copy,
    });
  };

  sortName = () => {
    let copy = [...this.state.filteredContacts];
    console.log("sort", copy);
    copy.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    console.log("sort", copy);

    this.setState({
      filteredContacts: copy,
    });
  };

  sortPop = () => {
    let copy = [...this.state.filteredContacts];
    console.log("sort", copy);
    copy.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    console.log("sort", copy);

    this.setState({
      filteredContacts: copy,
    });
  };

  delete = (event) => {
    console.log(event.target.id);
    let copy = [...this.state.filteredContacts];
    copy.splice(event.target.id, 1);

    this.setState({
      filteredContacts: copy,
    });
  };

  render() {
    return (
      <div>
        <table>
          <button onClick={this.addContact}>Add</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Popularity</button>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>

          {this.state.filteredContacts.map((item, i) => {
            return (
              <tr>
                <td>
                  <img src={item.pictureUrl} alt="" style={{ width: 50 }}></img>{" "}
                </td>
                <td>{item.name} </td>
                <td>{item.popularity.toFixed(2)} </td>
                <td>
                  <button id={i} onClick={this.delete}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
