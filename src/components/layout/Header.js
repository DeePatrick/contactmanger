import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


 const Header = (props) => {
  const {branding } = props;
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
           <div className="container">
             <Link to="/" className="navbar-brand">{branding}</Link>
             <div>
               <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                   <Link to ="/" className="nav-link">
                     <i className="fa fa-home"></i> Home</Link>
                 </li>
                 <li className="nav-item">
                   <Link to ="/contact/add" className="nav-link"><i className="fa fa-plus"></i> Add</Link>
                 </li>
                 <li className="nav-item">
                   <Link to ="/about" className="nav-link"><i className="fa fa-question"></i> About</Link>
                 </li>
               </ul>
               </div>
          </div>
      </nav>
     
  )
}

Header.defaultProps ={
  branding:'My App'
};

Header.propTypes = {
  branding : PropTypes.string.isRequired
};

export default Header;
