
const Upgrade = (props) => {
    return (
        <div className="upgrade">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button onClick={props.upgrade} id={props.id} className={props.className}>Buy for {props.cost}</button>
        </div>
    )
}

export default Upgrade