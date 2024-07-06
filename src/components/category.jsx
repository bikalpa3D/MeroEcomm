import React, { useState } from 'react'

const category = () => {
    const [category ,setCategory] = useState()
    async function getCategory(){
        try {
            const response = await fetch(``)
            if(response.status===200){
            const data =  await response.json()
                setCategory(data)
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>category</div>
  )
}

export default category