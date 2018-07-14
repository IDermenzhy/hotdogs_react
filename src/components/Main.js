import React, {Component} from 'react';
import Intro from "./Intro";
import FoodSection from "./FoodSection";


class Main extends Component {

    render () {
        return (
            <main>
                <Intro/>
                <FoodSection items = {this.props.items}/>
            </main>
        )
    }
}
export default Main;
