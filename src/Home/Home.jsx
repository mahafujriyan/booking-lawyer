import React from 'react';
import Banner from '../Components/Banner/Banner';
import Cards from '../Pages/Cards/Cards';
import { useLoaderData } from 'react-router';
import Service from '../Pages/Service/Service';

const Home = () => {
    const data=useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
            <Cards data={data} ></Cards>
            <Service></Service>
            
        </div>
    );
};

export default Home;