import React, {Component} from 'react';

class Practice extends React.Component{
    constructor(){
        super();
        this.state = {a: '', b: ''}
        // this.state = {currentEvent: '---'}
    //     this.update = this.update.bind(this)
        this.update = this.update.bind(this)

    }
    update(e){
        // this.setState({currentEvent: e.type})
        this.setState({a: this.refs.a.value, b: this.refs.b.value})
    }
    render(){
        return(
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update} 
                    />{this.state.a}
                <hr /> 
                <input
                    ref="b"
                    type="text"
                    onChange={this.update}
                    />{this.state.b}
             {/* <textarea 
                 onKeyPress={this.update}
                 onCopy={this.update}
                 onCut={this.update}
                 onPaste={this.update}
                 onClick={this.update}
                 cols="30"
                 rows="10"/>
                <h1>{this.state.currentEvent}</h1> */}
            </div>
        )
    }
}

export default Practice; 