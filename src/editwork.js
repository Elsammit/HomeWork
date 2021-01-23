import React, { Component } from 'react'
import './editwork.css'

export default class editwork extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            x:0,
        };
    }
    componentDidMount(){
        this.setState({x:0});
    }

    componentWillUnmount() {
        
    }

    render () {
        return(
            <div>
                <p>Hello World</p>
            </div>
        )
    }
}