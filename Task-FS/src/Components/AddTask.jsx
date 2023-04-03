import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { addTask } from '../API/Api';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function  addtask() {
  let taskref=useRef()
  let descriptionRef=useRef()
  const navigate=useNavigate()

async function saveTask(){
  let task={
    taskname:taskref.current.value,
    description:descriptionRef.current.value
  }
  console.log(task)
  let response=await axios.post(addTask,task)
  console.log(response)
  if(response.data.success=true){
    navigate('/alltask')
  }else{
    alert("error")
  }

}
  return (
    <Box>
    <TextField id="standard-basic" label="Task Name" variant="standard" inputRef={taskref}/><br /><br />
    <TextField id="standard-basic" label="Description" variant="standard" inputRef={descriptionRef}/><br /><br />
    <Button variant="outlined" onClick={saveTask}>Save</Button>
    </Box>
  )
}

export default addtask