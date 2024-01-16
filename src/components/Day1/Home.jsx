
// we donot want to envoke the funciton (e.x handleClick()) while passing it for click event, we would just want to pass the reference fuction we defined earlier
// what if we want to pass an argument in an function
// ans. it can be done through passing ananomous function
// if we put e in the handleclick function it can help us get access to all the events that we can use 

import state from "./state"

const Home = () => {

    const handleClick = (e) => {
        console.log("hello Pawan", e.target)
    }

    const clickMeAgain = (name) =>{
        console.log('hello ' + name)
    }

    return ( 
        <div>
            <h2>Home</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                clickMeAgain('Pawan')
            }}>Click me again</button>
        </div>
     );
}

export default Home;

 
