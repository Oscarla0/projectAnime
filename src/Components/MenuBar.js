import React, { useState } from 'react';
import Homepage from './Homepage';
import { Button, Space, DatePicker, version } from 'antd';


const MenuBar = () => {
  const [selectedOption, setSelectedOption] = useState('home');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        
                
      <ul>
        <Button path="/">HOLA</Button>
        <li onClick={() => handleOptionClick('home')}>Home</li>
        <li onClick={() => handleOptionClick('about')}>About</li>
        <li onClick={() => handleOptionClick('contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default MenuBar;