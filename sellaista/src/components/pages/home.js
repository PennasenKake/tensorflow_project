
import React from'react';

import { useState, useEffect } from'react';


export default function Home(){

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/test")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error("Virhe haettaessa API:sta", error));
    }, []);

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <p>API Viesti: {message}</p>

        </div>
    )
}