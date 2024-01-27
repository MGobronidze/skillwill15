import React, { useEffect, useState } from 'react'

 const UseCopyToClipboard = () => {
      const [copy, setCopy] = useState(false)

      const makeCopy = (value) =>{
        if(typeof value === 'string' || typeof value === 'number'){
          navigator.clipboard.writeText(value)
          setCopy(true)
        }else{
          console.log('Invalid Value')
          setCopy(false)
        }
      }
    
    useEffect(()=>{
      let timeout
        if(copy){
         timeout = setTimeout(() => setCopy(false), 3000)
        }
        return () => clearTimeout(timeout)
    }, [copy])

    return {makeCopy, copy}
}

export default UseCopyToClipboard