import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class PracticeComponent1 extends Component{
    constructor(){
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({val: this.state.val +1})
    }
    render(){
        console.log('render');
        return <button onClick={this.update}> {this.state.val}</button>
    }
} 



export default PracticeComponent1;