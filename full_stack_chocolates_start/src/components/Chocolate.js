const Chocolate = ({chocolate, deleteChocolate}) => {

const handleDelete = () => {
    deleteChocolate(chocolate.id)
}

    return(
        <div className="chocolate">
            <h4>{chocolate.name}</h4>
            <p>Estate: {chocolate.estate.name}</p>
            <p>Cocoa %: {chocolate.cocoaPercentage}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default Chocolate;