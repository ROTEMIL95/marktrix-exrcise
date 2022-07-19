import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./Store";
import {GetName} from "./actions/NameActions";


function App() {
  const dispatch = useDispatch();
  const [NameUser, setNameUser] = useState("");
  const NameState = useSelector((state: RootStore) => state.Name);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setNameUser(event.target.value);
  const handleSubmit = () => dispatch(GetName(NameUser))
  console.log("Name state:", NameState);



  return (
  <div className="App container">
        <h1> likely Gender and Nationality of name</h1>
      <label>Enter name:</label>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {NameState.Name && (            
    <table id="customers">
      <tr>
        <th>Gender: </th>
        <th>Country: </th>
        <th>Name: </th>
      </tr>
      <tr>
        <td>{NameState.Name.Gender}</td>
        <td>{NameState.Name.Country}</td>
        <td>{NameState.Name.Name}</td>
      </tr>
    </table>
      )}
  </div>
  );
}


export default App;
