import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    deleteCkecked = () => {
        this.props.deleteCkecked()
    }

    checkedAll = (event) => {
        this.props.checkedAll(event.target.checked)
    }
    render() {
        const { isCheckedAll, isDone, total } = this.props
        return (
            <div className='todo-footer'>
                <input type="checkbox" checked={isCheckedAll} onChange={this.checkedAll} />
                <p>已完成{isDone}/全部{total}</p>
                <button onClick={this.deleteCkecked}>删除选中</button>
            </div>
        )
    }
}
