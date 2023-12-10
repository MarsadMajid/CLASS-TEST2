import React from 'react';
import BillList from '../(components)/BillList';
import CreateBillModal from '../(components)/CreateBillModal';
import Button from '../(components)/Button';
import { prisma } from '../../config/prisma';

// {
//   units:24,
//   consumerNumber:12,
//   address:"Saylani House",
//   status:"paid",
//   date: new Date()
// }

const fetchBills = async ()=>{
  try {

    const bills = await prisma.bills.findMany()
    return bills
  } catch (error) {
    console.log("error",error);
    
  }
}
const Home = async () => {
   const bills = await fetchBills()
   console.log(bills)

  return (
    <div>
      <Button/>
      <BillList bills={bills}/>
   
     
    </div>
  );
};

export default Home;