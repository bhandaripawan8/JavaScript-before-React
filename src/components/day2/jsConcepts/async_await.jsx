
// Build on top of promises, which simplifies working with asynchronous code. async is used to declare an asynchronous function, and the await keyword is used to pause the execution of the function until a promise is settled.

// syntax

async function fetchdata() {
    try{
        let response = await fetch("http://api.example.com/data")
        let data = await response.json();
        console.log("data fetched",data)
    }
    catch(error){
        console.error("error fetching data", error);
    }
}
fetchdata();

//with react
import react, {useState, useEffect} from 'react';

function datafetchingcomponent() {
    const[data, setdata] = useState(null);
    const[loading, setloading] = usestate(true);
    const[error, seterror] = usestate(null);

    useEffect(() =>{
        const fetchdata = async () =>{
            try{
                const response = await fetch("http://apiexample");
                const result = await response.json();
                setdata(result);
                console.log(result)
            }
            catch(error) {
                seterror(error);
            } finally{
                setloading(false);
            }
        };
        fetchdata();
    },[]);

    if(loading){
        return <p>Loading...</p>
    }
    if(error) {
        return <p>error: {error.message}</p>
    }

    return(
        <div>
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
export default datafetchingcomponent;