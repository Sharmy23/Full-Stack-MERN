import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
export default function Add() {
 const [name, setName] = useState('');
 const [mail, setMail] = useState('');
 const [pass, setPass] = useState('');
 const navigate = useNavigate();
 const handleSubmit = async (e) => {
 e.preventDefault(); // ✅ stop page reload
 try {
 const res = await axios.post("http://localhost:5000/add", { name, mail, pass });
 alert(res.data.message);
 navigate('/');
 } catch (err) {
 console.error(err);
 alert("Error saving data");
 }
 };
 return (
 <div className='container-sm mt-5'>
 <h1 className='text-center'>Add Form</h1>
 <form onSubmit={handleSubmit}>
 <div className="mb-3">
 <label className="form-label">Name :</label>
 <input type="text" onChange={(e) => setName(e.target.value)} className="form-control"
required />
 </div>
 <div className="mb-3">
 <label className="form-label">Mail :</label>
 <input type="email" onChange={(e) => setMail(e.target.value)} className="form-control"
required />
 </div>
 <div className="mb-3">
 <label className="form-label">Pass :</label>
 <input type="password" onChange={(e) => setPass(e.target.value)} className="formcontrol" required />
 </div>
 <div>
 <Link to={'/'}><button type="button" className="btn btn-secondary w-
50">Back</button></Link>
 <button type="submit" className="btn btn-primary w-50">Submit</button>
 </div>
 </form>
 </div>
 );
}
