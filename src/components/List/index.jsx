import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
    render() {
        const { lists, changDone, deleteItem } = this.props
        return (
            <div className='todo-list'>
                <ul>
                    {
                        lists.map((list) => {
                            return <Item list={list} key={list.id} changDone={changDone} deleteItem={deleteItem}></Item>
                        })
                    }
                </ul>
            </div>
        )
    }
}
