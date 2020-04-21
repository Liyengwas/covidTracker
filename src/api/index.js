//api calls happen here

import axios from 'axios';

//import public api url here

const url = 'https://covid19.mathdro.id/api';

//function to fecth api data

export const fetchData = async () => {
    //asynchronous fn goes here

    //try and catch block
    try {  
    /*Method 1 for structured data*/
    // const {data} = await axios.get(url);
        // //fetch specific data from the api using another funcion => modifiedData
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        // }
        // return modifiedData;
    /*Method 2 for unstructured data*/

    const {data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
         //fetch specific data from the api using another funcion => modifiedData
    
        return { confirmed, recovered, deaths, lastUpdate, };
    } catch (error) {
        
    }

}