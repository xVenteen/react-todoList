import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    handleClick = (id) => {
        return (event) => this.props.changDone(id, event.target.checked)
    }
    deleteItem = (id) => {
        return () => { this.props.deleteItem(id) }
    }
    render() {
        const { list } = this.props
        return (
            <li className='list-item'>
                <input type='checkbox' checked={list.done} onChange={this.handleClick(list.id)}>
                </input>
                <p>{list.msg}</p>
                <button onClick={this.deleteItem(list.id)}>删除</button>
            </li>
        )
    }
}
