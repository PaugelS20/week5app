import React from 'react'

export const Greeting = ({ name, favoriteNumber }) => {
  return (
    <>
    <h1>
        Hello React!!!
    </h1>
    <h2>
        Hello {name}!!!
    </h2>
    <h2>
        {name}'s favorite number is {favoriteNumber}
    </h2>
    <h2>
        Hello Amy
    </h2>
    </>
  );
};
