import React from 'react';
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'


const ingredientLabels = [
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Salad',type:'salad'}
]


const BuildControls =(props)=>{

    return(
        <div className={classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
          {ingredientLabels.map(item=> <BuildControl 
          label={item.label}
          key={item.type} 
          added={()=>props.addIngredient(item.type)}
          removed={()=>props.removeIngredient(item.type)}
          isDisabled={props.ingredientCount[item.type]===0?true:false}
          />)}
          <button className={classes.OrderButton} disabled={!props.purchase}>Order</button>
        </div>
    )
}

export default BuildControls;