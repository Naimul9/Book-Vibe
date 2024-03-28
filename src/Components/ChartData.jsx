import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomChart from "../Components/CustomChart";

const ChartData = () => {
 const data = useLoaderData()

 console.log(data)

    return (
        <div>
            
            {
                data.map(item=>  <CustomChart item={item} key={item.id}></CustomChart>    )
                
            }
        </div>
    );
};

export default ChartData;