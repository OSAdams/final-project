import React from 'react';

export default function LoadingModal(props) {
  const { className } = props;
  const loadingModal = 'https://i.imgur.com/crcBUbV.gif';
  return (
    <div className='loading-modal'>
      <div>
        {
          !className
            ? <img src={ loadingModal } alt='Loading' />
            : <img src={ loadingModal } alt='Loading' className={ className } />
        }
      </div>
      <div>
        <p>Loading</p>
      </div>
    </div>
  );
}
