import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    state = {
        value: ''
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    subMit = () => {
        this.props.addList(this.state.value)
        console.log(this.state.value);
        this.setState({ value: '' })

    }
    handleKeyUp = (event) => {
        if (event.keyCode !== 13) return
        this.subMit()
    }
    render() {
        return (
            <div className='todo-header'>
                <input value={this.state.value} onKeyUp={this.handleKeyUp} type="text" placeholder='请输入' onChange={this.handleChange} />
                <button onClick={this.subMit}>提交</button>
            </div>
        )
    }
}
