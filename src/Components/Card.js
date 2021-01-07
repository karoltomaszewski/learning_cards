const Card = props =>{
    let polishPart = null;
    if(props.done === "yes" || props.done === "shown"){
        polishPart = <h3>{props.polish}</h3>
    }else if(props.done === "no"){
        polishPart = (
        <div>
            <input onChange={props.change} placeholder="Enter in Polish what it is"></input>
            <button onClick={props.click}>Show me solution</button>
         </div>
        )
    }

    console.log(props.done)

    return(
        <div className={"Card done_"+props.done}>
            <img src={props.img} alt={props.english}/>
            {polishPart}
        </div>
    );
}

export default Card;