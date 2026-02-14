import Button from '../../components/Button/Button';
import './styles.css';
import { useState } from 'react';
import { v4 } from 'uuid';

function Lesson_05() {
  const [order, setOrder] = useState([]);

  const addItem = (itemName) => {
    setOrder((prevValue) => {
      return [...prevValue, itemName];
    });
  };

  console.log(order);

  const finalOrder = order.map((item, index) => {
    return <li key={v4()}>{item}</li>;
  });

  console.log(finalOrder);

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          <div className="button_control">
            <Button name="Burger" onClick={() => addItem('Burger')} />
          </div>
          <div className="button_control">
            <Button
              name="Fries"
              onClick={(event) => addItem(event.target.innerText)}
            />
          </div>
          <div className="button_control">
            <Button name="Cola" onClick={() => addItem('Cola')} />
          </div>
          <div className="button_control">
            <Button name="Salad" onClick={() => addItem('Salad')} />
          </div>
          <div className="button_control">
            <Button name="Ketchup" onClick={() => addItem('Ketchup')} />
          </div>
          <div className="button_control">
            <Button name="Ice-cream" onClick={() => addItem('Ice-cream')} />
          </div>
        </div>
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">
          {finalOrder}
          {/*order.map((item) => (
            <li>{item}</li>
          ))*/}
        </ol>
      </div>
    </div>
  );
}

export default Lesson_05;
