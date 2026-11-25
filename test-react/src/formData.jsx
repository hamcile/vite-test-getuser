import { useState } from "react";

function GetUserData(){
    const [form, setForm] = useState({
        fname : "",
        lname : "",
        age: 0
    })

    const handleForm = (e) => {
        const {name, value, type} = e.target;
        setForm({...form, value});
    }
}

