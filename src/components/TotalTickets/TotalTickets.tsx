import "./TotalTickets.scss"


type TotalTicketProps = {
    count: number;

}
const TotalTickets = ({count}:TotalTicketProps) => {

    return(<div className="total">
        <section className="total__container">
            <h2 className="total__heading">Tickets to complete: </h2>
            <h2 className="total__number">{count}</h2>

        </section>
        </div>
    )

;}

export default TotalTickets;