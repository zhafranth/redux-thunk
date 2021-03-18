import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actionUser } from "./store/action/ActionUser";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(actionUser());
  }, []);

  console.log(user);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Apps</h1>
    </div>
  );
}

export default App;
