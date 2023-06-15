const Cards = ({name, image, action, description}) => {
    return (
        <div className="card"> 
            <h3 className="card-title"> {name} </h3>
            <div className="img-box">
            <img src={image} alt={name} />
            </div>
            {description}
            <button onClick={() => action(name)} className="btn">click</button>
        </div>)
}

export default Cards