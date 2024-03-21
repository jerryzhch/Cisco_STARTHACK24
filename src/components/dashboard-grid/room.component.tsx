import React from 'react';

const Room = ({ name, bigger = false }) => {
  return (
    <div
      style={{
        width: bigger ? '200px' : '150px',
        height: '150px',
        background: 'lightgreen',
        border: '2px solid black',
      }}
    >
      <div className="room-label">{name}</div>
    </div>
  );
};

export default Room;
