import React from 'react'
import './ListToDo.scss'
import AddToDo from './AddToDo'
import {toast} from 'react-toastify'

class ListToDo extends React.Component {
    state = {
        listToDo: [
            {id: 'todo1', title:'Doing homework'},
            {id: 'todo2', title:'Making video'},
            {id: 'todo3', title:'Learning AWS'},
            {id: 'todo4', title:'Studying React'},
            {id: 'todo5', title:'Do English Exercises'},
        ],
        taskToEdit: {}
    }

    addNewToDo = (newTask) => {
        this.setState({
            listToDo: [...this.state.listToDo, newTask]
        })
        console.log('Nut add duoc bam va state duoc set')
        toast.warn('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    deleteTaskHandle = (task) => {
        let currentTasks = this.state.listToDo.filter(item => item.id !== task.id)
        this.setState({
            listToDo: currentTasks
        }) 
    } 

    handleOnEditClick = (task) => {
        this.setState({
            taskToEdit: task
        })
    }

    handleOnSaveClick = () => {
        let newTaskList = [...this.state.listToDo]
        newTaskList = newTaskList.map(item => item.id === this.state.taskToEdit.id ? this.state.taskToEdit : item)
        this.setState({
            listToDo: newTaskList,
            taskToEdit: {}
        }) 
    }

    handleOnchangeTitle = (event, item) => {
        this.setState({
            taskToEdit: {id: item.id, title: event.target.value}
        })
    }

    render() {
        let {listToDo, taskToEdit} = this.state
        let isEditedObjectEmpty = Object.keys(taskToEdit).length === 0  
        return (
            <div className='list-to-do-container'> 
            <AddToDo 
            addNewToDo={this.addNewToDo}/>
                <hr />
                <div className='list-to-do-content'>
                    {listToDo && listToDo.length > 0 &&
                    listToDo.map((item, index) => {
                        return (
                            <div className='to-do-list'>
                                <div className='to-do-item'>
                                    {isEditedObjectEmpty === true ?
                                        <span>Task {index + 1} : {item.title}</span>
                                        :
                                        <>
                                            { taskToEdit.id === item.id ?
                                                <>
                                                    Task {index + 1} : 
                                                    <input type='text' value={taskToEdit.title} onChange={(event) => this.handleOnchangeTitle(event, taskToEdit)} />
                                                </>
                                                :
                                                <span>Task {index + 1} : {item.title}</span>
                                            }
                                        </>
                                    }
                                </div>
                                <div className='to-do-item-navigation'>
                                    {isEditedObjectEmpty === true ?
                                        <button onClick={() => this.handleOnEditClick(item)}>Edit</button>
                                        :
                                        <>
                                            { taskToEdit.id === item.id ?
                                                <button onClick={() => this.handleOnSaveClick()}>Save</button>
                                                :
                                                <button onClick={() => this.handleOnEditClick(item)}>Edit</button>

                                            }
                                        </>
                                    }
                                    <button onClick={() => this.deleteTaskHandle(item)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                    }
                    
                </div>
            </div>
        )
    }
}

export default ListToDo