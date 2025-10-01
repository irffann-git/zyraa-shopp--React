import React from 'react'
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

function Error() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>
      <Button className='mb-5' variant='dark'><Link to='/'>back to home</Link></Button>
      
    </div>
  );
}

export default Error
