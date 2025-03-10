import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Consumer} from '../../context';
import axios from 'axios';



class Contact extends React.Component {
  state={
    showContactInfo : false
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    dispatch({ type:'DELETE_CONTACT', payload: id})
  };


  render(){
  const {id, name, email, phone} = this.props.contact;
  const{ showContactInfo } = this.state;

  return (  
      <Consumer>
        {value => {
          const{ dispatch} = value
            return (
              <div className="card card-body mb-3">
              <h4>{name} <i onClick={() => this.setState({showContactInfo:!showContactInfo})} className="fa fa-sort-down" style={{ cursor : 'pointer'}}></i>
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times" style={{float: 'right', cursor: 'pointer', color:'red'}}></i>
                <Link to={`/contact/edit/${id}`}><i  className="fa fa-edit" style={{float: 'right', cursor: 'pointer', color:'black', marginRight:'1rem'}}></i></Link>
               
              </h4>
              
              {
                showContactInfo ? 
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
              : null
              }

            </div>
            )}}
      </Consumer>
  );  
 }
}


Contact.propTypes ={
  contact:PropTypes.object.isRequired,

}


export default Contact;
