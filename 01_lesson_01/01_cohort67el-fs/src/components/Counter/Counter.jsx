import Button from '../Button/Button';

import './styles.css';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const decrease = () => setCount((prevValue) => prevValue - 1);
  const increase = () => setCount(count + 1);

  /*const [fullName, setFullName] = useState('John Johnson');
  const changeName = () => {
    setFullName('Brad Pitt');
  };*/

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={decrease} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={increase} />
      </div>
      {/*<p className="count">{fullName}</p>
        <div className="button_control">
            <Button name="Change name" onClick={changeName} />
        </div>*/}
    </div>
  );
}

export default Counter;
