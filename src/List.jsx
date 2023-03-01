// import React from "react";

// // Class
// // class List extends React.Component {

// //   state = {
// //     numbers: [1, 2, 3]
// //   };

// //   addRandomNumber = () => {
// //     const number = Math.random().toFixed(1) * 10;
// //     this.setState(
// //       {
// //         numbers: [...this.state.numbers, number]
// //       }
// //     )
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <ul>
// //            {this.state.numbers.map((num, index) => (
// //           <li key={index}>{num}</li>
// //         ))}
// //       </ul>
// //       <button onClick={this.addRandomNumber}>New number</button>
// //     </div>
// //     )
// //   }
// // }

// // Function
// const List = () => {
//   const [numbers, setNumbers] = React.useState([1, 2, 3]);
//   const addNumber = () => {
//     const number = Math.random().toFixed(1) * 10;
//     setNumbers([...numbers, number]);
//   };

//   // массив, переданным вторым аргументом, говрит за какими константами нужно следить
//   // возвращаемая функция будет выполняться только при удалении компонента
//   React.useEffect(() => {
//     console.log("did mount");
//     return () => {
//       console.log("will unmount")
//     }
//   }, [numbers]);

//   return (
//     <div>
//       <ul>
//         {numbers.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>
//       <button onClick={addNumber}>New number</button>
//     </div>
//   )
// }

// export default List;