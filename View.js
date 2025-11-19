import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function View() {
 const [Data,setData] = useState([]);
 useEffect(()=>{
 axios.get('http://localhost:5000/users')
 .then((res)=>{
 setData(res.data);
 })
 .catch((err)=>{
 console.log(err);
 })
 })
 const handleDelete = (userid)=>{
 axios.delete(`http://localhost:5000/delete/${userid}`)
 .then((res)=>{
 alert(res.data.message);
 })
 .catch((err)=>{
 console.log(err);
 })
 }
 return (
 <div className='container '>
 <Link to={'/add'}><button type="button" class="btn btn-primary mt-5 mb-4">Add 
User</button></Link>
 <table class="table">
 <thead>
 <tr>
 <th scope="col">Name</th>
 <th scope="col">Mail</th>
 <th scope="col">Pass</th>
 <th scope="col">Actions</th>
 </tr>
 </thead>
 <tbody>
 {Data.map((value,index)=>(
 <tr key={index}>
 <td>{value.name}</td>
 <td>{value.mail}</td>
 <td>{value.pass}</td>
 <td>
 <Link to={`/update/${value._id}`}><button type="button" class="btn btn-warning 
ms-2">Edit</button></Link>
 <button onClick={()=>{window.confirm("Are you sure you want to delete this 
User?") && handleDelete(value._id)}}
 type="button" class="btn btn-danger ms-3">delete</button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )
}
