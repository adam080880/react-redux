import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {Modal, ModalBody} from 'reactstrap'

import {
  addTodo,
  updateTodo
} from '../redux/actions/todos'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenModal: false,
      task: '',
      success: false
    }
  }

  changeToSuccess = (id) => {
    this.props.updateTodo(id)
  }

  todoList = (val, index) => (
    <li title="Click to toggle" key={index} className="list-group-item border-left-0 border-right-0 border-top-0 align-items-center justify-content-between d-flex" onClick={e => this.changeToSuccess(`${val.id}`)}>
      <span>{val.task}</span>
      {val.success && <div className="badge badge-success">Success</div>}
    </li>
  )

  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo({ task: this.state.task })
    this.setState({task: '', isOpenModal: false})
  }

  render() {
    return (
      <>
        <div className="body bg-light vh-100 pt-3">
          <Modal isOpen={this.state.isOpenModal} toggle={() => {this.setState({isOpenModal: !this.state.isOpenModal})}}>
            <ModalBody>
              <form onSubmit={this.onSubmit} className="post">
                <div className="form-group">
                  <h2 className="font-weight-bold">New Task</h2>
                </div>
                <div className="form-group my-4">
                  <label htmlFor="" className="label-control">Task</label>
                  <input type="text" value={this.state.task} onChange={e => this.setState({task: e.target.value})} className="form-control" placeholder="Your task today (Ex: Eating sugar)"/>
                </div>
                <div className="control">
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </ModalBody>
          </Modal>
          <div className="container shadow-sm px-0 d-flex flex-column" style={{height: "650px", width: '800px', borderRadius: "5px"}}>
            <div className="jumbotron rounded-0 px-5 pb-4 mb-0 s" style={{height: "250px"}}>
              <div className="d-flex align-items-end flex-row justify-content-between h-100">
                <div className="title-date">
                  <h2>My Day</h2>
                  <h5 style={{opacity: 0.70}}>{new Date().toLocaleString()}</h5>
                </div>
                <div className="control d-flex flex-row align-items-center justify-content-center">
                  <button className="btn btn-success" onClick={e => this.setState({success: !this.state.success})}>Toggle Success</button>
                </div>
              </div>
            </div>
            <div className="task-list flex-grow-1 bg-white container px-5 py-4" style={{overflowY: 'auto'}}>
              <ul className="list-group">
                {this.props.todos.datas.filter((val) => val.success === this.state.success).map(this.todoList)}
              </ul>
              <div className="mt-3">
                <Link to="#" onClick={e => {e.preventDefault(); this.setState({isOpenModal: true})}}>+ Add a task</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({todos: state.todos})
const mapDispatchToProps = { addTodo, updateTodo }
export default connect(mapStateToProps, mapDispatchToProps)(Todo)