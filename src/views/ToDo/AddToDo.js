import React from "react";

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }
    
    handleOnClickAdd() {
        if (!this.state.title) {
            alert('missing title')
            return
        } 
        let task = {
            id: Math.floor(Math.random() * 100000).toString(),
            title: this.state.title
        }
        this.props.addNewToDo(task)
        this.setState({
            title: ''
        })
        console.log(this.state.title)
    }

    render() {
        return (
            <div className='add-to-do'>
                <input type='text' value={this.state.title}
                onChange={(event) => this.handleOnChangeTitle(event)}></input>
                <button type='button'onClick={() => this.handleOnClickAdd()}>Add</button>
            </div>
        )
    }
}

export default AddToDo