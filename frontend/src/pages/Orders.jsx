import axios from 'axios';
import Title from '../components/Title';
import ShopContext from '../context/ShopContext';
import { useContext, useEffect, useState, useCallback } from 'react';

const Orders = () => {
  const { currency, token, backendUrl } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = useCallback(async () => {
    try {
      if (!token) {
        return null;
      } else {
        const response = await axios.post(
          backendUrl + '/api/order/userorders',
          {},
          { headers: { token } }
        );

        if (response.data.success) {
          let allOrderItem = [];
          response.data.orders.map((order) => {
            order.items.map((item) => {
              item['status'] = order.status;
              item['payment'] = order.payment;
              item['paymentMethod'] = order.paymentMethod;
              item['date'] = order.date;
              allOrderItem.push(item);
            });
          });
          setOrderData(allOrderItem);
        }
        // console.log('Orders List', response);
        // setOrderData(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }, [backendUrl, token]);

  useEffect(() => {
    loadOrderData();
  }, [loadOrderData]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div>
        {orderData.map((product, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={product.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{product.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p>
                    {currency}
                    {product.price}
                  </p>
                  <p>Quantity:{product.quantity}</p>
                  <p>Size:{product.size}</p>
                </div>
                <p className="mt-2">
                  Date:
                  <span className="text-gray-400">
                    {new Date(product.date).toDateString()}
                  </span>
                </p>
                <p className="mt-2">
                  Payment:
                  <span className="text-gray-400">{product.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{product.status}</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
