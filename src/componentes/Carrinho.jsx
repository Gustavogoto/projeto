import React, { useState } from 'react';

function carrinho() {
    const [itemCount, setItemCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
  
    const addItemToCart = () => {
      if (itemName.trim() !== '') {
        const newItem = `${itemQuantity}x ${itemName}`;
        setItemCount(itemCount + 1);
        setCartItems([...cartItems, newItem]);
        setItemName('');
        setItemQuantity(1);
      }
    };
  
    return (
      <div className="container mt-5">
        <h1>Carrinho de Compras</h1>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">
            Nome do Item:
          </label>
          <input
            type="text"
            id="itemName"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemQuantity" className="form-label">
            Quantidade:
          </label>
          <input
            type="number"
            id="itemQuantity"
            className="form-control"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value, 10))}
          />
        </div>
        <button className="btn btn-primary" onClick={addItemToCart}>
          Adicionar ao Carrinho
        </button>
        <div className="mt-3">
          <h2>Itens no Carrinho</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
export default carrinho;
