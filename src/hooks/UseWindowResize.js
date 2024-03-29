import React, { useEffect, useState } from 'react'

const UseWindowResize = () => {
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])


    return {width, height}
}

export default UseWindowResize