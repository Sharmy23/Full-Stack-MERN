import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
export default function Update() {
 const navigate = useNavigate();
 const [formData,setFormData] = useState({
 name:'',
 mail:'',
 pass:'',
 })
 const param = useParams();
 useEffect(()=>{
 axios.get(`http://localhost:5000/users/${param.id}`)
 .then((res)=>{
 setFormData(res.data);
 })
 .catch((err)=>{
 console.log(err);
 })
 },[param.id])
 const handleChange = ((e)=>{
 setFormData(prev => ({
 ...prev,
 [e.target.name]: e.target.value
 }))
 })
 const handleSubmit = (e)=>{
 e.preventDefault();
 console.log(formData);
 axios.put(`http://localhost:5000/update/${param.id}`,{formData})
 .then((res)=>{
 alert(res.data.message);
 navigate('/');
 })
 .catch((err)=>{
 console.log(err);
 })
 }
 return (
 <div className='container mt-5'>
 <form onSubmit={handleSubmit}>
 <h1 className='text-center'>Update Form</h1>
 <div class="mb-3">
 <label for="exampleInputEmail1" class="form-label">Name :</label>
 <input type="text" name='name' value={formData.name} onChange={handleChange}
class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 </div>
 <div class="mb-3">
 <label for="exampleInputPassword1" class="form-label">Mail :</label>
 <input type="mail" name='mail' value={formData.mail} onChange={handleChange}
class="form-control" id="exampleInputPassword1"/>
 </div>
 <div class="mb-3">
 <label for="exampleInputPassword1" class="form-label">Pass :</label>
 <input type="password" name='pass' value={formData.pass} onChange={handleChange}
class="form-control" id="exampleInputPassword1"/>
 </div>
 <div>
 <Link to={'/'}><button class="btn btn-secondary w-50 ">Back</button></Link>
 <button type="submit" class="btn btn-primary w-50 ">Update</button>
 </div>
 </form>
 </div>
 )
}
