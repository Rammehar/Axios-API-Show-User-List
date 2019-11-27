import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UsersList from './UsersList';

export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        users:[]
      }
    }

    componentDidMount(){
        this.getUsers();
    }
    getUsers = () =>{
        axios.get("https://reqres.in/api/users")
        .then(response=>{
            //console.log(response);
            this.setState({users:response.data.data});

        })
        .catch(error=>console.log(error));
    }

    
  render() {
    return (
      <div className="App">
        <h2> Hello I am Home Component </h2>
        <p>List of Users</p>
        <hr/>
            <UsersList  users = {this.state.users}/>
       </div>
    )
  }



}

export default Home;



