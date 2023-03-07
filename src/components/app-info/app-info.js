import "./app-info.css";

const AppInfo = ({data}) => {

  const totalEmployeeAmount = data.length;
  const increasedEmployee = data.filter(item => item.increase).length

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {totalEmployeeAmount}</h2>
      <h2>Премию получат: {increasedEmployee}</h2>
    </div>
  )
}

export default AppInfo;