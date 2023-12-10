// components/BillList.js
import React from 'react';
 // Import your CSS file

const BillList = ({ bills }) => {
  return (
    <div>
      <h2>Bill List</h2>
      <table>
        <thead>
          <tr >
            <th>Consumer</th>
            <th>Units</th>
            <th>Address</th>
            <th >Status</th>
          </tr>
        </thead>
        <tbody>
          {bills?.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.consumerNumber}</td>
              <td>{bill.units}</td>
              <td>{bill.address}</td>
              <td>{bill.status ? "Paid" : "Not Paid"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillList;
