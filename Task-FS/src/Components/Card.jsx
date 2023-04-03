import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import axios from 'axios';
import { deleteTask } from '../API/Api';
import { useNavigate } from 'react-router-dom';
import { editTask } from '../API/Api';
import './card.css'

function Card({taskmap}) {
        const navigate = useNavigate()
      
        async function del() {
          await axios.delete(deleteTask + taskmap._id)
          window.location.replace("http://localhost:5173/alltask");
        }
      
        async function edit() {
          navigate("/edit", { state: taskmap }) 
      
        }
        async function check() {
          let res = await axios.patch(editTask + taskmap._id, { complete: true })
          console.log("completed", res);
          window.location.replace("http://localhost:5173/alltask");
        }
      
  return (
    <div className="card">
    <h2 className='task'>{taskmap.taskname}</h2>
    <h2 className='task'>{taskmap.description}</h2>
    <h2 className='task'>{taskmap.complete ? "completed" : <input type="checkbox" onClick={check} />}</h2>
    <div className="icon">
      <DeleteIcon onClick={del} />
      <DriveFileRenameOutlineIcon onClick={edit} />

    </div>
  </div>
  )
}

export default Card