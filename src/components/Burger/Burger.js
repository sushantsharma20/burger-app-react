import React from 'react'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.module.css';

const Burger = (props)=>{

    let transformedIngredient = Object.keys(props.ingredients).map((item)=>{
        return [...Array(props.ingredients[item])].map((_, index)=>{

            return <BurgerIngredient key={item+index} type={item} />

        })
    })
    .reduce((acc,currItem)=>{
        return acc.concat(currItem)
    },[])

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding the ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {transformedIngredient}
        <BurgerIngredient type='bread-bottom' />
        </div>

    )
}

export default Burger;