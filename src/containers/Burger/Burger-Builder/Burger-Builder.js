import React from 'react';
import BurgerIngredient from './Burger-Ingredients/Burger-Ingredients';
import classes from './Burger-Ingredients/Burger-Ingredients.css';

const burgerBuilder = (props) => {
    // const burgerArray = Object.keys(props.types).map((key, i) => {
    //     return <BurgerIngredient key={i} type={props.types[key]}/>
    // });
    // console.log(burgerArray)
    return (
        <div>
            <div className={classes.TopBun}>
                <div className={classes.Seed1}></div>
                <div className={classes.Seed2}></div>
                <div className={classes.Seed3}></div>
                <div className={classes.Seed4}></div>
                <div className={classes.Seed5}></div>
                <div className={classes.Seed6}></div>
            </div>
                <BurgerIngredient type = 'salad'/>
                <BurgerIngredient type= 'meat'/>
                <BurgerIngredient type= 'cheese'/> 
            <div className={classes.BottomBun}></div>
        </div>
    )
}

export default burgerBuilder;