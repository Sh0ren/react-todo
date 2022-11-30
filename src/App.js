// eslint-disable-next-line no-unused-vars,import/order
import React, { Component } from 'react';
// eslint-disable-next-line import/order
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './App.css';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';
import Input from './components/input';
import './index2.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { status: true, label: 'Sobaka', id: 1, timeCreate: '5 min ago' },
        { status: true, label: 'Sobaka', id: 2, timeCreate: '5 min ago' },
        { status: true, label: undefined, id: 3, timeCreate: undefined },
      ],
      filter: undefined,
    };
  }

  onToggleImportant = (id) => {
    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const oldElem = todoList[idx];
      const newElem = { ...oldElem, status: !oldElem.status };
      const newArray = [
        ...todoList.slice(0, idx),
        newElem,
        ...todoList.slice(idx + 1),
      ];
      return { todoList: newArray };
    });
  };

  // eslint-disable-next-line react/sort-comp
  maxId = 10;

  addItem = (text) => {
    const newItem = {
      status: true,
      label: text,
      // eslint-disable-next-line no-plusplus
      id: this.maxId++,
      timeCreate: formatDistanceToNow(new Date()),
    };

    this.setState(({ todoList }) => {
      const newArray = [...todoList, newItem];
      return { todoList: newArray };
    });
  };

  onFiltered = (filter) => {
    this.setState(() => ({ filter }));
  };

  // eslint-disable-next-line class-methods-use-this
  filterElements = (filter, array) => {
    switch (filter) {
      case true:
        return array.filter((elem) => elem.status === true);
      case false:
        return array.filter((elem) => elem.status === false);
      default:
        return array;
    }
  };

  deleteItem = (id) => {
    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArray = [...todoList.slice(0, idx), ...todoList.slice(idx + 1)];
      return { todoList: newArray };
    });
  };

  clearCompleted = () => {
    // eslint-disable-next-line class-methods-use-this,react/destructuring-assignment
    const completedTasks = this.filterElements(false, this.state.todoList);
    this.setState(({ todoList }) => {
      const newArr = todoList
        .filter((x) => !completedTasks.includes(x))
        .concat(completedTasks.filter((x) => !todoList.includes(x)));
      return { todoList: newArr };
    });
  };

  render() {
    const currentList = this.filterElements(
      // eslint-disable-next-line react/destructuring-assignment
      this.state.filter,
      // eslint-disable-next-line react/destructuring-assignment
      this.state.todoList
    );
    const uncompletedCount = this.filterElements(
      true,
      // eslint-disable-next-line react/destructuring-assignment
      this.state.todoList
    ).length;
    return (
      <div className='todoapp'>
        <Header />
        <Input onAdded={(text) => this.addItem(text)} />
        <section className='main'>
          <Todos
            todos={currentList}
            onDeleted={(id) => this.deleteItem(id)}
            onToggleImportant={(id) => this.onToggleImportant(id)}
          />
        </section>

        <Footer
          uncompletedCount={uncompletedCount}
          onFiltered={this.onFiltered}
          onComplete={this.clearCompleted}
        />
      </div>
    );
  }
}
