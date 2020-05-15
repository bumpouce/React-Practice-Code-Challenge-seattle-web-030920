import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {img_url, name, price, id, eaten} = props.sushi

  return (
    <div className="sushi" key={id}>
      <div className="plate" onClick={() => {props.chooseSushi(id, price)}}>
      { 
        eaten ? null : <img src={img_url} width="100%" />
      }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
