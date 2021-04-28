import React, { Component } from "react";
import FriendCard from "./components/EmployeeCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import API from "./"
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees:{},
    search: ""
  };

  filterEmployee= id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const API = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
