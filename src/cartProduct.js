import React from 'react';

const Cart = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt={props.imageAlt} style={{ width: '100%', height: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        {/* <a href={props.link} className="btn btn-primary">{props.buttonText}</a> */}
      </div>
    </div>
  );
}

export default Cart;
