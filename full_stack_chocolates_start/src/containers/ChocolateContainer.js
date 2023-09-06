import {useEffect, useState} from "react";
import ChocolateList from "../components/ChocolateList";
import ChocolateForm from "../components/ChocolateForm";
const ChocolateContainer = () => {
    const [chocolates, setChocolates] = useState([]);
    const [estates, setEstates] = useState([]);
    const fetchChocolates = async () =>{
        const response = await fetch("http://localhost:8080/chocolates");
        const data = await response.json();
        // you can format data here - filter, removing unnecessary values etc.
        setChocolates(data);
    }
    const fetchEstates = async () =>{
        const response = await fetch("http://localhost:8080/estates");
        const data = await response.json();
        // you can format data here - filter, removing unnecessary values etc.
        setEstates(data);
    }
    useEffect(() => {
        // react app gets prepended, then mounted - that's when I want to load the default data.
        // where post takes some time to load in, and we want to do this when the React app is mounted (running)
        // use-effect uses state to call actions when there is a change; you give it a list of states to constantly keep an eye on.
        // when the estate values change, then it will do something.
        // when you pass in an empty array, it will only run in the beginning when the app first loads in we pass it in at the deps.
        fetchChocolates();
        fetchEstates();
    },[])

    const postChocolate = async (newChocolate) => {
        const response = await fetch("http://localhost:8080/chocolates", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newChocolate) // it will send new Chocolate as a json and put it in the body of the request and sends it as a post request
        })
        const savedChocolate = await response.json(); // you will have a savedChocolate object
        setChocolates([...chocolates,savedChocolate]) // this is how you add a new array to make react do changes.
    }

    const deleteChocolate = async (chocolateId) => {
        const response = 
        await fetch(`http://localhost:8080/chocolates/${chocolateId}`, 
            {
                method: "DELETE",
                headers:{"Content-Type" : "application/json"}
            })
        const keptChocolates = chocolates.filter((chocolate) => chocolate.id !== parseInt(chocolateId))
        setChocolates(keptChocolates)
        }


    return(
        <>
            <ChocolateForm estates={estates} postChocolate={postChocolate}/>
            <ChocolateList chocolates={chocolates} deleteChocolate={deleteChocolate}/>
        </>
    )
}
export default ChocolateContainer;