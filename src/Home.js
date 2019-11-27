import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './Users';

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

    //get the users from api database 
    getUsers = () =>{
        axios.get("https://reqres.in/api/users")
        .then(response=>{
            //console.log(response.data.data);
            this.setState({users:response.data.data});

        })
        .catch(error=>console.log(error));
    }

    //show the users
    showUsers = () =>{
        return (
            <div>
                {this.state.users.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    //here we call the child component
                    <Users users={this.state.users} />
                )}
            </div>
        );
    }

  render() {
    return (
      <div className="App">
        <h2> Hello I am Home Component </h2>
        <p>List of Users</p>
        <hr/>
            {this.showUsers()}
       </div>
    )
  }



}

export default Home;



