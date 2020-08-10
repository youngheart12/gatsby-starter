import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
     display: 'flex',
     flexDirection:'row',
     margin:0,
     padding:"15px"
    
    },
    child1:{
        padding:"25px",
        flexGrow:1
    },
    titleDivision:{
        backgroundColor:'#E8FFFF',
        color:'#011c26',
        
    }
  });
// import {Typography} from '@material-ui/core'
export default function Body() {
    const classes = useStyles();
    return (
        <>
       <div className={classes.root}>
           <div className={classes.child1}>
               <Typography variant="h2">
                This is new brand concept that we are working on
               </Typography>
               <br/>
             <Button variant="contained" color="primary" href="/blog/">Find out more</Button>
           </div>
           <div> 
            <img src={require('../../../../../static/cityscapes.png')} alt="creative"></img>
           </div>
       </div>
      
       </>
    )
}
