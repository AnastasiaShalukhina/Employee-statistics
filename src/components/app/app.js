import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../empoyees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Sergej S.", salary: "800", increase: true, raise: true, id: 1 },
        { name: "Nastya S.", salary: "3000", increase: false, raise: false, id: 2 },
        { name: "Vasia S.", salary: "4500", increase: true, raise: false, id: 3 },
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      return {
        data: data.filter((elem) => elem.id !== id),
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      raise: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newData = [...data, newItem];
      return {
        data: newData
      }
    })
  }

  onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  render()  {
    return (
      <div className="app">
        <AppInfo data={this.state.data} />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;