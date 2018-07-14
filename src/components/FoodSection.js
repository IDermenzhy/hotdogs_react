import React, { Component } from 'react';

class FoodSection extends Component {

    render () {
        let isReverse = true;
        let now = new Date();
        let currDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const content = this.props.items.map((item, index) => {
            isReverse = !isReverse;
            let date = item.expirationDate.split('-');
            let expDate = new Date(date[2], date[0], date[1]);
            if(expDate > currDate) {
                return (
                    <div className="food-section" key={index}>
                        <div className={isReverse ? 'image-first content' : 'content'}>
                            <div className="text">
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className="picture-container">
                            <img src={item.backgroundURL} alt={item.name} className='pict'/>
                        </div>
                    </div>
                )
            }
        });

        return (
            <div>{content}</div>
        )
    }
}


export default (FoodSection);