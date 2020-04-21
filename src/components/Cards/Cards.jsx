import React from "react";
//import material ui
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
//import css
import styles from './Cards.module.css';
import cx from "classnames";
//import count
import CountUp from 'react-countup';


const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate}} ) =>{

    if(!confirmed){
        return 'Loading Data Please wait...';
    }

    return  (
        
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>

                        <Typography color="textSecondary" gutterBottom> Infected Cases </Typography> {/* Typography */}
                        <Typography variant="h5">  
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                        </Typography> {/* Typography */}
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}  </Typography> {/* Typography */}
                        <Typography variant="body2"> Number of Active Cases of COVID-19 </Typography> {/* Typography */}

                    </CardContent>
                    {/* endCardContent Infected Cases */}
                </Grid>  {/* endGridItem */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>

                        <Typography color="textSecondary" gutterBottom> Recovered Cases</Typography> {/* Typography */}
                        <Typography variant="h5">  
                            <CountUp start={0} end={recovered.value} duration={3} separator="," />
                        </Typography> {/* Typography */}
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}  </Typography> {/* Typography */}
                        <Typography variant="body2"> Number of Recovered Cases of COVID-19 </Typography> {/* Typography */}

                    </CardContent> 
                    {/* endCardContent Recovered Cases*/}
                </Grid>  {/* endGridItem */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Death Cases</Typography> {/* Typography */}
                        <Typography variant="h5">  
                            <CountUp start={0} end={deaths.value} duration={3} separator="," />
                        </Typography> {/* Typography */}
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}  </Typography> {/* Typography */}
                        <Typography variant="body2"> Number of Death Cases from COVID-19 </Typography> {/* Typography */}

                    </CardContent> 
                    {/* endCardContent Deaths Cases*/}
                </Grid>  {/* endGridItem */}

            </Grid> {/* end GridContainer */}
        </div>
    )
}



export default Cards;