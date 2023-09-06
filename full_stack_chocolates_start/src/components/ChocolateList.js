import Chocolate from "./Chocolate";

const ChocolateList = ({chocolates, deleteChocolate}) => {

    const chocolateComponents = chocolates.map(chocolate => {
        return <Chocolate 
            key={chocolate.id} 
            chocolate={chocolate}
            deleteChocolate={deleteChocolate}
            />
    });

    return(
        <div id="chocolate-list">
            {chocolateComponents}
        </div>
    )
}

export default ChocolateList;