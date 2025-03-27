import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import md5 from 'md5'

const Login = () => {
  const [form, setForm] = useState({ email: "", phone: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (form.password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }
      const res = await api.post("/user/login", { ...form, password: md5(form.password) });
      if (res.status === 200) {
        localStorage.setItem("userId", res.data.data._id);
        alert("Login successful");
        navigate("/home2");
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email or Phone"
            value={form.emailOrPhone}
            onChange={(e) => setForm({ ...form, emailOrPhone: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>

      </form>
      <div class="d-flex justify-content-center mt-5">
        <button class="btn btn-secondary" onClick={() => navigate('/signup')} >Signup ?</button>
      </div>

    </div>

  )
}

export default Login
