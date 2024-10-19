import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import '../../styles/AuthStyles.css'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/auth'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const location = useLocation();
    const [isToastShown, setIsToastShown] = useState(false); // To track if toast has been shown

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/auth/login', { email, password });
            if (res && res.data.success) {
                // Show success message only if it hasn't been shown
                if (!isToastShown) {
                    toast.success('Login Successful');
                    setIsToastShown(true); // Set flag to true so toast doesn't show twice
                } setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                // Delay the navigation to allow the toast to show
                setTimeout(() => {
                    navigate(location.state || '/');
                }, 1000);
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
    return (
        <Layout title={'Login Now'}>
            <div className='form-container'>
                <h1 className='title'>Login Now</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required />
                    </div>

                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgot-password') }}>Forgot Password</button>
                </form>
            </div>
        </Layout>)
}

export default Login