import { useState } from "react";
import "./Counter.scss";

type CounterProps = {
  increaseCount: () => void;
  decreaseCount: () => void;
}

const TicketCounter = ({increaseCount, decreaseCount}:CounterProps) => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => {
      increaseCount();
      setCounter(counter => counter + 1);
    };

    const handleDecrement = () => {
      decreaseCount();
        if (counter > 0){
        setCounter(counter => counter - 1);
        }
    };


 return (
    <div className="counter">
            <h3>Tickets Completed</h3>
            <div className="counter__container">
             <button className="counter__button"
             onClick={handleDecrement}>-</button>
             <span className="counter__output">{counter}</span>
            <button className="counter__button"
             onClick={handleIncrement}>+</button>
             </div>
     </div>
  )
};

export default TicketCounter ;