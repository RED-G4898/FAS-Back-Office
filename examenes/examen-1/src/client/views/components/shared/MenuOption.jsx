import React from 'react';

const MenuOption = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
        {props.icon}
        <h3>{props.text}</h3>
    </div>
  );
}

export default MenuOption;