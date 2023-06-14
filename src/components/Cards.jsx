const Cards = ({name, image, action}) => {
    return (
        <div className="card">
            <h1 className="card-title"> {name} </h1>
            <div className="img-box">
            <img src={image} alt={name} />
            </div>
            <button onClick={() => action(name)} className="btn">click</button>
        </div>)
}

export default Cards