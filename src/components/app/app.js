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
        { name: "Sergej S.", salary: "800", promotion: true, id: 1 },
        { name: "Nastya S.", salary: "3000", promotion: false, id: 2 },
        { name: "Vasia S.", salary: "4500", promotion: true, id: 3 },
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
      promotion: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newData = [...data, newItem];
      return {
        data: newData
      }
    })
  }

  render()  {
    return (
      <div className="app">
        <AppInfo />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;