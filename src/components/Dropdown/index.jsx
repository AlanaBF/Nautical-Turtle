import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../assets/styles/components.css';

// Function to give credit for the background pictures used
const DropdownCredit = () => {
  return (
    <DropdownButton className="creditButton" id="dropdown-basic-button" title="Credits">
      <Dropdown.Item href="https://www.vecteezy.com/free-vector/holiday">Holiday Vectors by Vecteezy</Dropdown.Item>
      <Dropdown.Item href="https://www.vecteezy.com/free-vector/blue">Blue Vectors by Vecteezy</Dropdown.Item>
      <Dropdown.Item href="https://www.vecteezy.com/free-vector/sea-cartoon">Sea Cartoon Vectors by Vecteezy</Dropdown.Item>
      <Dropdown.Item href="https://pngtree.com/so/programmer">Programmer Image Link</Dropdown.Item>
      <Dropdown.Item href="https://www.vecteezy.com/free-vector/motivational">Motivational Vectors by Vecteezy</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownCredit;