import React, {Component} from 'react';
import Header from "./Header";
import Nav from "./Navigation";
import Main from "./Main";
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/ContentActions";
import Footer from "./Footer";

class App extends Component {

    componentWillMount () {
        this.props.fetchData();
        }

    render() {
        // console.log(this.props.items, 'data');
        // console.log(this.props, 'render');
      return (
      <div className="App">
          <div className="black-line" />
          <Header/>
          <Nav/>
          <Main items = {this.props.items}/>
          <Footer />

      </div>
    );
  }
}


const mapStateToProps = (state) => {
        // console.log(state, 'mapState');
        return {
            items: state.getItems,
        };


};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(itemsFetchData())
    };
};




export default connect ( mapStateToProps, mapDispatchToProps)  (App) ;
