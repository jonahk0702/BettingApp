import React from 'react';
import { Nav, NavDropdown, Form,Button, Dropdown, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

  const Navbar = () => {
    return(

     
        <div className='center'>
        <br/><br/>
          
          <ButtonToolbar>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="info">Info</Button>
              <Button variant="light">Light</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>
          </ButtonToolbar>   
          
        <h1 className='tc pa6'> Welcome to custom Betts! </h1>
      </div>
  );
}

export default Navbar;