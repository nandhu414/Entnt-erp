import React, { useState } from 'react';
import './OrdersManagement.css';

const mockOrderData = [
  { id: 1, customerName: 'Kalidas', orderDate: '2024-03-01', status: 'Pending' },
  { id: 2, customerName: 'Kumar', orderDate: '2024-03-03', status: 'Shipped' },
  { id: 3, customerName: 'Teju', orderDate: '2024-03-05', status: 'Delivered' },
];

const OrdersManagement = () => {
  const [orders, setOrders] = useState(mockOrderData);
  const [editingOrder, setEditingOrder] = useState(null);
  const [updatedOrder, setUpdatedOrder] = useState({});
  const [newOrder, setNewOrder] = useState({ customerName: '', orderDate: '' });

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)));
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const handleEditOrder = (order) => {
    setEditingOrder(order);
    setUpdatedOrder({ ...order });
  };

  const handleUpdateOrder = () => {
    setOrders(orders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order)));
    setEditingOrder(null);
    setUpdatedOrder({});
  };

  const handleCancelUpdate = () => {
    setEditingOrder(null);
    setUpdatedOrder({});
  };

  const handleAddOrder = () => {
    const newOrderId = orders.length + 1;
    const orderToAdd = { ...newOrder, id: newOrderId, status: 'Pending' };
    setOrders([...orders, orderToAdd]);
    setNewOrder({ customerName: '', orderDate: '' });
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>
                <select value={order.status} onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleEditOrder(order)}>Edit</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Add Order</h3>
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.customerName}
          onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
        />
        <input
          type="date"
          placeholder="Order Date"
          value={newOrder.orderDate}
          onChange={(e) => setNewOrder({ ...newOrder, orderDate: e.target.value })}
        />
        <button onClick={handleAddOrder}>Add Order</button>
      </div>
      {editingOrder && (
        <div>
          <h3>Edit Order</h3>
          <input
            type="text"
            placeholder="Customer Name"
            value={updatedOrder.customerName}
            onChange={(e) => setUpdatedOrder({ ...updatedOrder, customerName: e.target.value })}
          />
          <input
            type="date"
            placeholder="Order Date"
            value={updatedOrder.orderDate}
            onChange={(e) => setUpdatedOrder({ ...updatedOrder, orderDate: e.target.value })}
          />
          <button onClick={handleUpdateOrder}>Update Order</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;