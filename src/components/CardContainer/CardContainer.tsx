
import EmployeeCard from "../EmpolyeeCard/EmployeeCard";
import { useState } from "react";
import Team from "../../data/types";
import TotalTickets from "../TotalTickets/TotalTickets";
import "../CardContainer/CardContainer.scss"



type CardProps = {
    team: Team[];
}


const CardContainer = ({team}:CardProps) => {

    const [count, setCount] = useState<number>(0);
const increaseCount = () => {
  setCount(count + 1)
}

const decreaseCount = () => {
  if(count > 0){
   setCount(count - 1)
 }
 
} 
    return(<div>
        <div className="card__container">
        {team.map(member => 
        <EmployeeCard 
        increaseCount={increaseCount} 
        decreaseCount={decreaseCount}
        team={member} />)}
        </div>
        <TotalTickets count={count}/>
        </div>
    )

 
   }

   export default CardContainer;