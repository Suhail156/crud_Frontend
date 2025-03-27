import React, { useEffect, useState } from 'react';
import api from '../api';
import Home from './Home';

const ItemForm = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    _id: null,
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get('/item/allitems');
        if (res.status === 200) {
          setItems(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateRes = await api.patch(`/item/update/${formData._id}`, formData);
      alert('Item updated successfully!');

      const refreshRes = await api.get('/item/allitems');
      setItems(refreshRes.data.data);

      setFormData({
        title: '',
        description: '',
        category: '',
        price: '',
        _id: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const editItem = async (id) => {
    try {
      const res = await api.get(`/item/getbyid/${id}`);

      setFormData({
        title: res.data.data.title ,
        description: res.data.data.description,
        category: res.data.data.category ,
        price: res.data.data.price,
        _id: res.data.data._id,
      });
    } catch (error) {
      console.error('Error fetching item for edit:', error);
    }
  };

  useEffect(() => {
    console.log('Form Data:', formData);
  }, [formData]);

  return (
    <div>
      <Home />
      <div className="container mt-5">
        <h2>Products</h2>
        <table className="table  mt-4">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => editItem(item._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {formData._id && (
        <div className="container mt-4">
          <h1>Edit Item</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Update Item
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemForm;