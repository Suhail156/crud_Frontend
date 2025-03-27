import React, { useState } from 'react'
import api from '../api'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
const ItemsList = () => {
  const [form, setForm] = useState({ title: "", description: "", category: "", price: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('/item/create', { ...form })
      if (response.status === 201) {
        alert(" successfully Added ");
        navigate("/itemform");
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>
      <Home />
      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Product Add</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="type"
              placeholder="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="type"
              placeholder="price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default ItemsList
