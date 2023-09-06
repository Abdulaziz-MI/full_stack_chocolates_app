import {useState} from "react";

const ChocolateForm = ({estates,postChocolate}) => { // capture the estates from the props and capture postCocolate function
    // handle state change
    const [stateChocolate,setStateChocolate] = useState(
        {
            name: "",
            cocoaPercentage: 0,
            estateId: null
        }
    )
    // loop through options tag to get the estates
    // having a key makes it more efficient as the code can jump straight to the element that it needs when a key is called
    const estateOptions = estates.map((estate) => {
        return <option key={estate.id} value={estate.id}>{estate.name}</option>
    })
    const handleChange = (event) => {
        let propertyName = event.target.name;
        let clonedChocolate = {...stateChocolate} // creates a copied chocolate - by cloning.
        clonedChocolate[propertyName] = event.target.value; // set the property name of current change is and set it to ... // your getting out what the user entered
        setStateChocolate(clonedChocolate);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault(); // when you do a form submit the first thing you should do is have this so it doesnt reload the app, there are cases where you dont need it
        postChocolate(stateChocolate); // this is what we want to pass in the new stateChocolate
        setStateChocolate({
            name: "",
            cocoaPercentage: 0,
            estateId: null
        })
    }
    return(
        <form id="chocolate-form" onSubmit={handleFormSubmit}>
            <h3>Add a new chocolate</h3>
            <label htmlFor="chocolate-name">Chocolate Name:</label>
            <input
                id="chocolate-name"
                name="name"
                type="text"
                placeholder="enter chocolate name"
                onChange={handleChange}
                value={stateChocolate.name}
            />
            <label htmlFor="cocoa-percentage">Cocoa Percentage:</label>
            <input
                id="cocoa-percentage"
                name="cocoaPercentage"
                type="number"
                min={1}
                max={100}
                onChange={handleChange}
                value={stateChocolate.cocoaPercentage}
            />
            <label htmlFor="estate">Estate</label>
            <select 
                id="estate" 
                name="estateId"
                defaultValue="select-estate"
                onChange={handleChange}
            >
                <option disabled-value="select-estate">Choose an estate</option>
                {/*below is where we call all the estate options*/}
                {estateOptions}
            </select>
            <input type="submit" value="Add Chocolate"/>          
        </form>
    )
}
export default ChocolateForm;