import React, { Component } from 'react'

class Test extends Component {
  state = {
    name: '',
    username:'',
    email: '',
    phone:'',
    address:{},
    company:{}
  };

  
  // UNSAFE_componentWillMount() {
  //   console.log("Component will mount!");
  // }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => this.setState({
      name: data.name,
      username: data.username,
      email: data.email,
      address: data.address,
      company: data.company
    }));
  }

 
  render() {
    const {name, username, email,phone, company} = this.state;
    const{street, suite,city,zipcode} = this.state.address;
    return (
      <div>
        <h4>name: {name}</h4>
        <ul>
          <li>username: {username}</li>
          <li>email: {email}, phone:{phone}</li>
          <li>address:</li>
          <ul>
            <li>street: {street}</li>
            <li>suite: {suite}</li>
            <li>city: {city}</li>
            <li>postcode: {zipcode}</li>
          </ul>
          
          <li>company: {company.name}</li>
        </ul>
      </div>
    )
  }
}
export default  Test;