import React from 'react'

export const Greeting = ({ props }) => {
  return (
    <>
    <h1>
        Hello {props.name}!!!
    </h1>
    <h2>
        Hello {props.name}!!!
    </h2>
    <h2>
        {props.name}'s favorite number is {props.favoriteNumber}
    </h2>
    <h2>
        {props.name}'s favorite number plus 10 is {}
    </h2>
    <h2>
        {props.name}'s favorite colors are {props.favoriteColors}
    </h2>
    <h2>
        Hello {props.name}!!!
    </h2>
    </>
  );
};
