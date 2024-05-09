import React from 'react';

export default function Button(props) {
  const buttonStyle = {
    backgroundColor: '#6441a4',
    color: '#e2dbf0'
  };

  if (props?.variant === 'warning') {
    buttonStyle.backgroundColor = '#ff0080';
    buttonStyle.color = '#201c2b';
  } else if (props?.variant === 'success') {
    buttonStyle.backgroundColor = '#54595e';
    buttonStyle.color = '#e5e3e8';
  }

  return (
    <button className='nav-button' type={ props.type } onClick={ props?.onClick } style={ buttonStyle }>
      { props.children }
    </button>
  );
}
