import React, { Component } from 'react';

const styles = {
    courses: {
        height: '50px',
        width: '30%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

class Courses extends Component{
   constructor(props){
       super(props);
       this.handleClick = this.handleClick.bind(this);
       }
       handleClick(){
           console.log('Click happened')
       }
       render(){
       return <div style={styles.courses} onClick={this.handleClick}>Courses</div>
       }
   }




export default Courses;