import React from 'react'
import './product.scss'

export default function Product(props) {
  return (
    <div className="card">
        <div className="logo"><img src={`./../../img/${props.image}`} alt="" /></div>
        <div className="info">
            <h4>{props.title}</h4>
            <h5>{props.price}</h5>
        </div>
        <div className="status">
            <div className="statusBox">
                Оформлен
            </div>
            <div className="rating">{props.rating}</div>
        </div>
    </div>
  )
}
