import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div>
        <h1>Error: Seite nicht gefunden !!!</h1>
        <p>Die angeforderte Seite konnte nicht gefunden werden</p>
      </div>
    </div>
  );
};

export default NotFound;
