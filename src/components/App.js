import React, {Component} from 'react';
import Header from "./Header";
import Nav from "./Navigation";
import Main from "./Main";
import {connect} from "react-redux";
import {fetchData} from "../actions/contentActions";
import Footer from "./Footer";

class App extends Component {

    componentDidMount () {
        this.props.fetchData();
        }

    render() {
      return (
      <div className="App">
          <div className="black-line"></div>
          <Header/>
          <Nav/>
          <Main items = {this.props.items}/>
          <Footer />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
        return {
            items: state.getItems,
        };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    };
};

export default connect ( mapStateToProps, mapDispatchToProps )(App) ;
