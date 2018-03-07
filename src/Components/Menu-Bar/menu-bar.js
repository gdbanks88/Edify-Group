import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   StaticRouter, // for server rendering
//   Route,
//   Link
//   // etc.
// } from 'react-router-dom';

import Courses from './courses.js';



const styles = {
    container: {
        height: '50px',
        width: '100%',
        backgroundColor: '#FFE669',
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        height: '50px',
    },
    categories: {
        height: '50px',
        width: '30%',
        backgroundColor: '#2A37FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        height: '35px',
        width: '20%',
        padding: '5px',

    }, 
    // courses: {
    //     height: '50px',
    //     width: '30%',
    //     backgroundColor: 'white',
    //     color: 'black',
    // },
};

class MenuBar extends Component {
    constructor(){
        super();
        this.state = {
            txt: ''
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({txt: e.target.value})
    }

    onClick = () => {
        console.log("clicked bitch")
    }
    
    render(){
        let txt = this.state.txt
        return(
            <div style={styles.container}>
                <img src='../images/coffee.jpg' alt='icon' style={styles.icon} onClick={this.onClick}/>
                <Courses />
                <input type="text" onChange={this.update} />
                <div style={styles.categories}> Categories</div> 
                {/* <input style={styles.searchBar} /> */}
                <div>{txt}</div>  
                {/* <RouteComponent /> */}

                

            </div> 
  );
 }
}



export default MenuBar