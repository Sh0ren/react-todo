// eslint-disable-next-line no-unused-vars,import/order
import React, { Component, useState } from 'react';
// eslint-disable-next-line import/order
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './App.css';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';
import Input from './components/input';
import './index2.css';

export default function App() {
  const [todoList, changeTodoList] = useState([
    {
      status: true,
      label: 'Sobaka',
      id: 1,
      timeCreate: '5 min ago',
      timer: 120,
    },
    {
      status: true,
      label: 'Sobaka',
      id: 2,
      timeCreate: '5 min ago',
      timer: 120,
    },
    {
      status: true,
      label: undefined,
      id: 3,
      timeCreate: undefined,
      timer: 120,
    },
  ]);
  const [filtered, changeFiler] = useState(undefined);

  const onToggleImportant = (id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    const oldElem = todoList[idx];
    const newElem = { ...oldElem, status: !oldElem.status };
    const newArray = [
      ...todoList.slice(0, idx),
      newElem,
      ...todoList.slice(idx + 1),
    ];
    return changeTodoList(newArray);
  };

  let maxId = 10;

  const addItem = (text, min, sec) => {
    console.log(`text ${text} minutes ${min} seconds ${sec}`);
    const timer = min * 60 + sec;
    const newItem = {
      status: true,
      label: text,
      timer,
      // eslint-disable-next-line no-plusplus
      id: maxId++,
      timeCreate: formatDistanceToNow(new Date()),
    };

    const newArray = [...todoList, newItem];
    return changeTodoList(newArray);
  };

  const onFiltered = (filter) => {
    changeFiler(filter);
  };

  // eslint-disable-next-line class-methods-use-this
  const filterElements = (filter, array) => {
    switch (filter) {
      case true:
        return array.filter((elem) => elem.status === true);
      case false:
        return array.filter((elem) => elem.status === false);
      default:
        return array;
    }
  };

  const deleteItem = (id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    const newArray = [...todoList.slice(0, idx), ...todoList.slice(idx + 1)];
    changeFiler(newArray);
  };

  const clearCompleted = () => {
    // eslint-disable-next-line class-methods-use-this,react/destructuring-assignment
    const completedTasks = filterElements(false, todoList);
    const newArr = todoList
      .filter((x) => !completedTasks.includes(x))
      .concat(completedTasks.filter((x) => !todoList.includes(x)));
    return changeTodoList(newArr);
  };

  const currentList = filterElements(filtered, todoList);
  const uncompletedCount = filterElements(true, todoList).length;
  return (
    <div className='todoapp'>
      <Header />
      <Input onAdded={(text, min, sec) => addItem(text, min, sec)} />
      <section className='main'>
        <Todos
          todos={currentList}
          onDeleted={(id) => deleteItem(id)}
          onToggleImportant={(id) => onToggleImportant(id)}
        />
      </section>

      <Footer
        uncompletedCount={uncompletedCount}
        onFiltered={onFiltered}
        onComplete={clearCompleted}
      />
    </div>
  );
}

// eslint-disable-next-line react/sort-comp
