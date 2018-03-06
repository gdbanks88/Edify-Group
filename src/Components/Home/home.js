import React, { Component } from 'react';
import IpadMini from './ipadMini.js';
import DeskIphone from './MessagingApp';

const styles={
    container: {
        display: 'inline', 
    },
};

class Home extends Component {
    render(){
        return(
            <div style={styles.container}>
                <IpadMini /> 
                <DeskIphone />
            </div>
        );
    }
}

export default Home;