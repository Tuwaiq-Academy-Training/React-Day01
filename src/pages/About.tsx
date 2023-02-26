import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/contact');
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={onClick} type='button' className='btn btn-danger'>
        Go to contact
      </button>
    </div>
  );
};

export default About;
