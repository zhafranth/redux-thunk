import * as actionName from "../types";
import Axios from "axios";

// export const actionUser = () => {
//   return (dispatch) => {
//     Axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((data) => {
//         const result = data.data;
//         dispatch({
//           type: "SET_USER",
//           payload: result,
//         });
//       })
//       .catch((err) => console.log(err));
//     };
//   };

// Atau

export const actionUser = () => (dispatch) => {
  Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      const result = data.data;
      dispatch({
        type: "SET_USER",
        payload: result,
      });
    })
    .catch((err) => console.log(err));
};
