import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../styles/AuthStyles.css'
import toast from 'react-hot-toast'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://backend-adkt.onrender.com/api/v1/auth/register', { name, email, password, phone, address, answer });
            console.log('server response', res);
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate('/login');
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    return (
        <Layout title={'Register Now'}>
            <div className='form-container'>
                <h1 className='title'>Register Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required />
                    </div>

                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder="Enter Your Phone" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder="Enter Your Address" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAddress" placeholder="What is your favorite food " required />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register