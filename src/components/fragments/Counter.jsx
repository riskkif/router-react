import React from "react";

class Counter extends React.Component {
    //SET STATE DATA BEFORE API
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        console.log('constructor')
    }

    //SET STATE DATA AFTER API
    componentDidMount(){
        this.setState({count : 1})
        console.log('this.state.count')
    }

    //MAKE STATE CHANGE
    componentDidUpdate(){
        console.log('componentDidUpdate')
        if (this.state.count === 10){
            this.setState({count : this.setState.count = 0})
        }else if(this.state.count === 5){
            console.log('angka berada di 5')
        }
    }

    //RENDERING
    render(){
        console.log('render')
        return (
        <div className="flex gap-x-2 items-center">
            <div className="mr-5">{this.state.count}</div>
            <button className="text-2xl bg-gray-900 text-white px-2" onClick={() => this.setState({count : this.state.count + 1})}>.</button>
        </div>
            
        )
    }
}

export default Counter