import { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
class App extends Component {
  componentDidMount() {
    this.setState({ id: this.state.lists.length })
    this.listChange()
  }
  state = {
    lists: [{ id: '1', msg: '吃饭', done: true }, { id: '2', msg: '睡觉', done: false }, { id: '3', msg: '打豆豆', done: true }],
    isDone: 0,
    isCheckedAll: false,
    id: 0
  }
  addList = (value) => {
    const list = { id: this.state.id + 1, msg: value, done: false }
    this.state.lists.unshift(list)
    this.listChange()
    this.setState({ id: this.state.id + 1 })
  }
  listChange = () => {
    let num = 0
    this.state.lists.map((list) => {
      if (list.done) num++
    })
    this.setState({ isDone: num })
    if (num === this.state.lists.length && this.state.lists.length !== 0) {
      this.setState({ isCheckedAll: true })
    } else this.setState({ isCheckedAll: false })
  }
  changDone = (key, done) => {
    const { lists } = this.state
    const newList = lists.map((list) => {
      if (list.id === key) return { ...list, done }
      else return list
    })
    this.setState({ lists: newList }, () => {
      this.listChange()
      console.log(this.state.lists);
    })
  }
  deleteItem = (id) => {
    const { lists } = this.state
    lists.map((list, index) => {
      if (list.id === id) {
        lists.splice(index, 1)
        this.setState({ lists: lists })
      }
    })
    this.listChange()
  }
  checkedAll = (done) => {
    const { lists } = this.state
    const newLists = lists.map((list) => {
      return { ...list, done }
    })
    this.setState({ lists: newLists }, () => {
      this.listChange()
    })
  }
  deleteCkecked = () => {
    const { lists } = this.state
    lists.forEach((list, index) => {
      console.log(list);
      if (list.done)
        delete lists[index]
      // mlist.splice(index, 1)
    })
    this.setState({ lists: lists.filter(res => res != 'undefined') }, () => {
      this.listChange()
    })
  }
  render() {
    const { lists, isDone, isCheckedAll } = this.state
    return (
      <div className="App" >
        <Header addList={this.addList}></Header>
        <List lists={lists} changDone={this.changDone} deleteItem={this.deleteItem}></List>
        <Footer isCheckedAll={isCheckedAll} isDone={isDone} total={lists.length} checkedAll={this.checkedAll} deleteCkecked={this.deleteCkecked}></Footer>
      </div>
    );
  }

}

export default App;
