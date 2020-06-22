import React from 'react';
import './Box.css';
import Progress from '../Progress/Progress';

const Box = (props) =>{
    //MAX Will BE DEFINED AND THEN WILL BE REPLACED
    let maxbits=500;
    let maxfood=500;
    let maxmed=500;
    let maxtech = 100;

    // let max=100; // General Will change after Finalizing

    //THIS IF FOR CONVERSION OF VALUE IN PERCENTAGE TO FILL BAR
    //Add icons also in the if condition.
    let done=0;
    if(props.res==='MSC BITS')
    {   
        done=(props.val/maxbits)*100;
    }
    if(props.res==='FOOD RESOURCES')
    {
        done=(props.val/maxfood)*100;
    }
    if(props.res==='MEDICINES')
    {
        done=(props.val/maxmed)*100;
    }
    if(props.res==='TECHNOLOGY')
    {
        done=(props.val/maxtech)*100;
    }
    let color="#cf53f9";
    const style ={
        color:`${color}`
    }
    return(
        <div className='Box'>
            
        <p className="alignleft">{props.res}</p>
        <p className="alignright" style={style}>{props.val}</p>
        <div className="clear"></div>
        <Progress color={color} done={done}/>
        </div>
    )

}
export default Box;