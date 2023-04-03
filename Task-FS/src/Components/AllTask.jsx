import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { allTask } from '../API/Api'
import Card from './Card'

function AllTask() {
    const [alltask,setallTask]=useState()

    async function getallTask(){
        let hereTasks=await axios.get(allTask)
        setallTask(hereTasks.data.alltask)
        console.log(hereTasks)
    }
    useEffect(()=>{getallTask()},[])
  return (
    <>
    {alltask && alltask.map((a)=>{
        return(
            <Card taskmap={a}/>
        )
    })}
    </>
  )
}

export default AllTask