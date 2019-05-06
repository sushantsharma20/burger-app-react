import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

import classes from './BurgerBuilder.module.css'

const INITIAL_PRICE={
    salad:0.7,
    meat:1.0,
    bacon:0.8,
    cheese:0.5
}

class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad: 0,
            cheese:0,
            bacon:0,
            meat:0
        },
        price:3,
        purchaseable:false
    }

    updatePurchaseable(ingredients){
       
        const sum = Object.keys(ingredients).map((item)=>{
            return ingredients[item]
        })
        .reduce((acc,i)=>{
            return acc+=i;
        })
        this.setState({
            purchaseable:sum>0
        })
    }

    addIngredientHandler = (type)=>{
        
        const newQuantity = this.state.ingredients[type]+1;
        const newPrice = this.state.price + INITIAL_PRICE[type];

        const Ingredients = {
            ...this.state.ingredients
        }

        Ingredients[type] = newQuantity;

        this.setState({
            ingredients:
                Ingredients,
            price:newPrice
        })
        this.updatePurchaseable(Ingredients)
    }
    removeIngredientHandler = (type)=>{
        if(this.state.ingredients[type]===0) {
            return;
        }
            const newQuantity = this.state.ingredients[type]-1;
        const newPrice = this.state.price - INITIAL_PRICE[type];

        const Ingredients = {
            ...this.state.ingredients
        }

        Ingredients[type] = newQuantity;

        this.setState({
            ingredients:
                Ingredients,
            price:newPrice
        })
        
        this.updatePurchaseable(Ingredients)

    }

    render(){
        return (
            <div className={classes.setContent}>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
                addIngredient = {this.addIngredientHandler}
                removeIngredient = {this.removeIngredientHandler} 
                ingredientCount = {this.state.ingredients}
                price={this.state.price}
                purchase={this.state.purchaseable}
                />
            </div>
        );
    }

}

export default BurgerBuilder;