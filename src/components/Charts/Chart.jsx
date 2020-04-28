import React, { useState, useEffect } from "react";
//import the api
import { fetchDailyData } from '../../api';
//import chartjs here
import { Line, Bar } from 'react-chartjs-2';
//import css code here
import styles from './Charts.module.css';

//getters and setters
const Chart = ()  => {
    const [dailyData, setDailyData] = useState({});

    //useEffect method which effects a call back
    useEffect(() => {
        const fetchAPI = async () =>{
            // Method 1 ==> // const dailyData = await fetchDailyData();
            //Method 2 ==>
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);

        fetchAPI();
    }, []);

    // CHARTS GO HERE
    //     LINE CHARTS ==> Will be responsible to show the gobal chart representation
    //     console.log();

    const lineChart = (
        //if statement goes here
        
        dailyData.length!==0
        ?(
            <Line 
                //make the data an object
                data={{
                    //data poperties
                    labels: dailyData.map(({ date}) => date),
                    datasets: [
                    //Array 1
                    {
                        data:dailyData.map(({ confirmed}) => confirmed),
                        label:'Infected Cases',
                        borderColor: '#3333FF',
                        fill: true,
                    },
                    //Array 2
                    {
                        data:dailyData.map(({ deaths}) => deaths),
                        label:'Death Cases',
                        // borderColor: 'red',
                        borderColor: 'rgba( 255, 0, 0, 0.5 )',
                        fill: true,
                    }],
                }}
            />) :null
    );

        //BAR CHARTS ==> Will be responsible to show the chart representation for each country


    return  (
        
        <div className={styles.container}>
            
            {lineChart}

        </div>
    );
    
    }

export default Chart;