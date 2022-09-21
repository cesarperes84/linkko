import axios from 'axios';

export const getCode =  () => // responseLoadData;
   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/codly`);
