import "./employees-list-item.css";


const EmployeesListItem = (props) => {

  const { name, salary, onDelete, onToggleProp, increase, raise} = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (raise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleProp} data-toggle="raise">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="increase" >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm "
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}


// class EmployeesListItem extends Component {

//   render() {
//     const {name, salary, onDelete, onToggleIncrease, onToggleRise} = this.props;
//     const {increase, starred} = this.state;

//     let classNames = "list-group-item d-flex justify-content-between";
//     if (increase) {
//       classNames += " increase";
//     } else if(starred) {
//       classNames += " like";
//     }

//     return (
//       <li className={classNames}>
//         <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
//         <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
//         <div className='d-flex justify-content-center align-items-center'>
//           <button type="button"
//             className="btn-cookie btn-sm "
//             onClick={onToggleIncrease}
//             >
//             <i className="fas fa-cookie"></i>
//           </button>

//           <button type="button"
//             className="btn-trash btn-sm "
//             onClick={onDelete}>
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     )
//   }
// }



export default EmployeesListItem;