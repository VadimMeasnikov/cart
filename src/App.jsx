
import Form from './Components/Form/Form'
import './style/App.scss'
import { useState } from 'react'
import data from './data.json'
import Product from './Components/Product/Product.jsx'


function App() {

  const [card, setCard] = useState([])
  console.log(data)

  const addInfo = (name, surname, tel, email, adress) => {
    let info = {
      name: name,
      surname: surname,
      tel: tel,
      email: email,
      adress: adress
    }
    console.log(info);

  }
  

  // function addCard(id){
  //   setCard(...card, {products})
  // }

  const products = card.map((card) => {
    // console.log(product.id, product.title, product.price, product.rating)
    return <Product title={card.title}   price={card.price} rating={card.rating} img={card.image} key={card.id} />
  })

  return (
    <>
      <Form  addInfo={addInfo} />

      <div className="card-line">{products}</div>

    </>
  )
}

export default App
