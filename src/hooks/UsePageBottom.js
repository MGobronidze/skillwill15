import React, { useEffect, useState } from 'react'

const UsePageBottom = () => {
    const [bottom, setBottom] = useState(false)

    useEffect(()=>{
        const handleScroll = () =>{
            if(document.documentElement.getBoundingClientRect().bottom <= window.innerHeight){
              setBottom(true)
            }else{
              setBottom(false)
            }
        }
        document.addEventListener('scroll' , handleScroll)
        return () => document.removeEventListener('scroll', handleScroll)
    },[])

    return bottom 
}

export default UsePageBottom