import React, { Component } from 'react';
import styled , {keyframes } from 'styled-components';

const Clickable = styled.span`
cursor: pointer;
float:right;
`;

const TodoText = styled.span`
color: ${(props) => {return props.color || 'black'}};
`;

const BlackTodoText = TodoText.extend`
color:black;
`;


const slideInFromRight = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

const TodoItem = styled.li`
border-bottom: 1px #777777 solid;
margin-bottom: 15px;
padding-bottom: 5px;
width:calc(33% - 80px);
margin:20px;
padding:20px;
display:inline-block;
animation: ${slideInFromRight} 0.4s linear 1;
&:hover {
  background-color:#FFCCEE;
}
@media (max-width: 700px) {
  background: palevioletred;
}
`;



class Todo extends Component {
  render() {
      return (
        <TodoItem>
            <Clickable
              onClick={() => {
                this.props.remove(this.props.todo);
              }}
            >
            X
            </Clickable>
            <BlackTodoText color='red' className='iamblack'>
              {this.props.todo.text}
            </BlackTodoText>
        </TodoItem>)
  }
}

export default Todo;
