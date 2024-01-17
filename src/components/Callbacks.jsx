// is a function that is passed as an argument to another function and is intended to be executed after the completion of an asynchronous operation or a certain event. used to handle tasks like handling responses from server requests, animations, or user input.

// function to make asynchronous request to an API
function fetchData(url, callBack) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                // if the request is successful, call the callback with the parse response
                var data = json.parse(xhr.responseText);
                callBack(null, data);
            } else{
                // if there's an error, call the callback with an error object
                callBack(new Error('Failed to fetch data'));
            }
        }
    };
    // open the request and sent it
    xhr.open('GET', url, tru);
    xhr.send();
}

// callback function to handle the fetched data
function handledata(error, data){
    if(error){
        console.log('Error:', error.message);
    } else{
        console.log('Data fetched successfully:', data)
    }
}

fetchData('https//api.example.com', handledata);

// in react
import React, { useState } from 'react';

// Parent component
function ParentComponent() {
  const [message, setMessage] = useState('');

  // Callback function to update the message state
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      
      {/* Child component with the callback */}
      <ChildComponent onUpdateMessage={updateMessage} />
    </div>
  );
}

// Child component
function ChildComponent({ onUpdateMessage }) {
  // Function to handle a button click and update the message using the callback
  const handleClick = () => {
    const newMessage = 'Hello from Child!';
    onUpdateMessage(newMessage);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Update Message</button>
    </div>
  );
}

export default ParentComponent;
