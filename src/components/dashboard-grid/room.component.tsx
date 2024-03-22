import React from 'react';

const Room = ({ name, bigger = false }) => {
  return (
    <div
      style={{
        width: bigger ? '200px' : '150px',
        height: '150px',
        backgroundColor: 'lightcoral',
        borderRadius: '10px',
        display: 'flex',
        border: '2px solid black',
      }}
    >
      <span className="room-label" style={{ margin: 'auto' }}>
        {name}
      </span>
    </div>
  );
};

export default Room;
