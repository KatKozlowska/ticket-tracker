import TicketCounter from "../TicketCounter/Counter";
import "./EmployeeCard.scss";
import Team from "../../data/types";

type EmployeeCardProps = {
    team: Team; 
    increaseCount: () => void;
    decreaseCount: () => void;
}

const EmployeeCard = ({team, increaseCount,decreaseCount}:EmployeeCardProps) => {
    

return (
    <div className="card">
        <div className="card__div">
        <h2 className="card__name">{team.name}</h2>
        <h2 className="card__role">{team.role}</h2>
        </div>
        <TicketCounter 
        increaseCount={increaseCount} 
        decreaseCount={decreaseCount}/>
    </div>
)
};

export default EmployeeCard;