import React, { useState } from 'react'
import './ProductManagement.css'


const mockProductData = [
  { id: 1, name: 'Product 1', category: 'Category 1', price: 10.99, stock: 20 },
  { id: 2, name: 'Product 2', category: 'Category 2', price: 15.99, stock: 30 },
  { id: 3, name: 'Product 3', category: 'Category 1', price: 7.99, stock: 15 },
];

const ProductsManagement = () => {
  const [products, setProducts] = useState(mockProductData);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stock: 0 });

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({ ...product });
  };

  const handleUpdateProduct = () => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
    setEditingProduct(null);
    setUpdatedProduct({});
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAddProduct = () => {
    const newProductId = products.length + 1;
    const productToAdd = { ...newProduct, id: newProductId };
    setProducts([...products, productToAdd]);
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
  };

  const handleCancelUpdate = () => {
    setEditingProduct(null);
    setUpdatedProduct({});
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      {editingProduct && (
        <div>
          <h3>Edit Product</h3>
          <input
            type="text"
            placeholder="Name"
            value={updatedProduct.name}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={updatedProduct.category}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Stock"
            value={updatedProduct.stock}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, stock: parseInt(e.target.value) })}
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductsManagement;