import React, {Component} from 'react';
import BurgerBuilder from './Burger-Builder/Burger-Builder';

class Burger extends Component {
    state = {
        burgerConfig: {
            salad: 1,
            meat: 1,
            cheese: 1
        }
    }
    render() {
        return (
           <div>
                <BurgerBuilder types = {this.state.burgerConfig}/>
                <div>Burger Maker</div>
           </div>     
        )
    }
}


export default Burger;