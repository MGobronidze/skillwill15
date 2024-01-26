import React, { useEffect, useState } from 'react'
import { json } from 'react-router';

const UseLocalStorage = (key, fallback) => {

const [value, setValue]= useState(JSON.parse(localStorage.getItem(key)) ?? fallback);

useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
}, [key, value])

return [value, setValue]
}

export default UseLocalStorage