import React from "react";
//import components here
    /**
     * Import Design One  shows singular importation of components
     */
    // import Cards from './components/Cards/Cards';
    // import Charts from './components/Charts/Chart';
    // import CountryPicker from './components/CountryPicker/CountryPicker';
  /**
     * Import Design Two  shows grouped importation of components and is the preffered method of choice for me hence forth
     */
import {Cards, Chart, CountryPicker} from './components';
//import css styling here
import styles from './App.module.css';
//import our api here
import { fetchData } from './api';

class App extends React.Component{
    //declare state constructor
    state = {
        data: {},
    }


    async componentDidMount(){
        const fetchedData = await fetchData();
       this.setState({ data: fetchedData });
    }

    render() {

        const { data }= this.state;
        return(

            <div className={styles.container} >

                <Cards  data={data}/>
                
                <CountryPicker />

                <Chart />

            </div>
        )
    }
}


export default App;