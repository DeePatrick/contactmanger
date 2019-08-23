import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
     name:'',
     email:'',
     phone:'',
     errors:{}
  }



  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const{ name, email, phone} = this.state;

    // Check for Errors   
    if(name === '') {
      this.setState({ errors:{ name: 'Name is required'
        }
      });
      return;
    }

    if(email === ''){
      this.setState({
        errors:{
          phone: 'Email is required'
        }
      });
      return;
    }

    if(phone === ''){
      this.setState({
        errors:{
          phone: 'Phone is required'
        }
      });
      return;
    }

    const newContact = {
      name, 
      email, 
      phone
    };
    
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    dispatch({type: 'ADD_CONTACT', payload: res.data});

   
  
    // Clear State
    this.setState({
      name:'',
      email:'',
      phone:'',
      errors:{}
    });

    // Redirect after submiting form
    this.props.history.push('/');
  }

  onChange = e =>{
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  render() {
    const{ name, email, phone, errors} = this.state;

    return(
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup 
                      label='Name' 
                      name='name' 
                      value={name}
                      placeholder='Enter name...' 
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup 
                      label='Email' 
                      name='email' 
                      value={email}
                      type='email'
                      placeholder='Enter email...' 
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup 
                      label='Phone' 
                      name='phone' 
                      value={phone}
                      placeholder='Enter phone...' 
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>   
                  </form>
                </div>
                </div>
            </div>
          )
        }}
      </Consumer>
    )
   
  }
}

export default  AddContact