import { useEffect, useState } from "react";

class User{
    constructor(fname, lname, age, country){
        this.fname = fname;
        this.lname = lname;
        this.age = Number(age);
        this.country = country
        this.email = this.fname.slice(0, 3) + this.lname.slice(-2) + this.age+ `@gamil.com`
    }

    greetings (){
        const name = this.fname + ' ' + this.lname
        const eligible = this.age >= 18 ? "eligible" : "not eligible"

        return `Hi, my name is ${name}, I am from ${this.country} and i am ${eligible} to vote.` 
    }
}

const p1 = new User('Michael', 'Humphrey', 46, 'Nigeria')


function GetUser(){
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [person, setPerson] = useState(null);
    const [count, setCount] = useState(0)
    

    const handlesubmit = (e) => {
        setPerson([fname, lname, age, country]);
        setFname("");
        setLname("");
        setAge("");
        setCountry("");
    }

    const updateCount = ()=>{
        setCount(next => next + 1)
        setCount(next => next + 1) 
    }

    return(
        <>
            <div>
                <label htmlFor="">First Name : </label>
                <input type="text" onChange={(e) => {setFname(e.target.value)}} value = {fname} placeholder="First Name" />
            </div>
            <div>
                <label htmlFor="">Last Name : </label>
                <input type="text" onChange={(e) => {setLname(e.target.value)}} value = {lname} placeholder="Last Name"/>
            </div>
            <div>
                <label htmlFor="">Age : </label>
                <input type="text" onChange={(e) => {setAge(e.target.value)}} value={age} placeholder="0"/>
            </div>
            <div>
                <label htmlFor="">Country : </label>
                <input type="text" onChange={(e) => {setCountry(e.target.value)}} value = {country} placeholder="Country"/>
            </div>
            <button onClick={handlesubmit}>Submit</button>
            <p>{p1.greetings()}</p>
            <p>{p1.email}</p>
            {person && <>
            <p>{person[0]}</p>
            <p>{person[1]}</p>
            <p>{person[2]}</p>
            <p>{person[3]}</p>
            </>}
            {!!count && <p>Count : {count}</p>}
            <button onClick={updateCount}>add count</button>
            <button onClick={(e)=>{setCount(0)}}>reset</button>
            <DrinkList/>
            {person && <>
                {person.map((person, index) => (
                    <p key={index}>{person}</p>
                ))}
            </>}
            <WelcomeMessage/>
        </>
    )
};


function DrinkList() {
    const drinks = ['Latte', 'Mocha', 'Cappuccino'];

    return (
        <ul>
            {drinks.map((drink, index) => (
                <li key={index}>{drink}</li>
            ))}
        </ul>
    );
}


function WelcomeMessage({ name, defaultName }) {
    name = "michael"
    defaultName = "visitor"
    const displayName = name || defaultName || "Guest";
    return <h1>Welcome, {displayName}!</h1>;
}

export default GetUser