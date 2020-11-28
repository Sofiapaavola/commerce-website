import React, { Component } from 'react';
import Todos from '../Todos'; 
import AddTodo from '../AddTodo'; 
import Header from '../layout/Header';
import { Link } from 'react-router-dom'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'; 

export class Todo extends Component {

    state = { 
        todos: [], 
        title: "My Task List"
      }
    
      componentDidMount() { 
        axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=15')
        .then(res => this.setState({ todos: res.data }))
      }
    
      // Toggle Complete 
      markComplete = (id) => { 
        this.setState({ todos: this.state.todos.map(todo => { 
          if(todo.id === id) { 
            todo.completed = !todo.completed
          }
          return todo; 
        }) 
      });
      }

      // Delete Todo 
      delTodo = (id) => { 
        axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));  
      }
    
      // Add Todo
      addTodo = (title) => { 
        axios
        .post('https://jsonplaceholder.typicode.com/todos', 
        {title, 
        complete: false})
        .then(res => this.setState({ todos: [...this.state.todos, res.data]}));  
      }

    render() {
        return (
            <div >
                <Header title={this.state.title}/>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/> 
            </div>   
        )
    }
}

export default Todo;
