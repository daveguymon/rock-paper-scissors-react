import React from 'react';

export default function Throws (props) {
  return (
    <div className="throws">
      <h2>User threw: {props.userThrow}</h2>
      <h2>Computer threw: {props.compThrow}</h2>
    </div>
  )
}
