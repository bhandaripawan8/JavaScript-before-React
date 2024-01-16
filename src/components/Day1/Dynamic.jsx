
// we connot outpot boolean and objects as dynamic values
// string, arrays and integers are ok for output but not boolean and object
// attributes value can be output as dynamic values in jsx like a href tag


function dynamics () {
    const name = 'Pawan'
    const age = 20
    const link = 'http://www.google.com'


    return (
        <div className="HeaderName">
        <h2>Hello {name}</h2>
        <p>he is {age} age old</p>

        <p>{"Hello Pawan"}</p>
        <p>{10}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}></a>
        </div>

    )
}