import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentFeature extends Component{
    constructor(props){
        super(props);
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }   
    update(){
        this.setState({val: this.state.val + 1})
    }
    
    componentWillMount(){
        this.setState({m: 2})
    }
    render(){
        return <button onClick={this.update}>{this.state.val * this.state.m}</button> 
    }
    componentDidMount(){
        this.inc = setInterval(this.update, 500)
    }
    componentWillUnmount(){
        clearInterval(this.inc)
    }
}

class Wrapper extends Component{
    mount(){
        ReactDOM.render(<ComponentFeature />, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }


    render(){
        return(
        <div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unmount.bind(this)}>UnMount</button>
            <div id="a"></div>
        </div> 
        );
    }
}

export default Wrapper;