import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrdersCalendar = () => {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [ordersForDate, setOrdersForDate] = useState([]);

  useEffect(() => {
    
    const fetchedOrders = [
      { id: 1, deliveryDate: '2024-03-15', customer: 'Kalidas' },
      { id: 2, deliveryDate: '2024-03-20', customer: 'Kumar' },
      { id: 3, deliveryDate: '2024-03-13', customer: 'Teju' },
    ];
    setOrders(fetchedOrders);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const ordersForSelectedDate = orders.filter(
      (order) =>
        new Date(order.deliveryDate).toDateString() === date.toDateString()
    );
    setOrdersForDate(ordersForSelectedDate);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        calendarType="US"
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Orders for {selectedDate.toDateString()}</h2>
            {ordersForDate.map((order) => (
              <div key={order.id}>
                <h3>Order {order.id}</h3>
                <p>Customer: {order.customer}</p>
                <p>Delivery Date: {order.deliveryDate}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendar;