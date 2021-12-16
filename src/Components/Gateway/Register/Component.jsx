import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RegisterComponent(props){
    const { first_name, last_name, username, email, password, onTextChange, onSubmitClick } = props;
  return(
    <>
    <div className="w3-container w3-margin-bottom w3-center">
      <br />
       <h2>MetYaApp</h2>
    </div>
    <br />
    <div className="w3-container">
     <div className="w3-white w3-container w3-round-xlarge">
     <h1><strong>Register</strong></h1>
     <hr className="w3-black"/>
     <p>The fields with the (*) are required.</p>
     <br />
     <p>
       <label> First Name (*)</label>
       <input className="w3-input" type="text" name="first_name" value={first_name} onChange={onTextChange}/>
     </p>
     <p>
       <label> Second Name (*)</label>
       <input className="w3-input" type="text" name="last_name" value={last_name} onChange={onTextChange}/>
     </p>
     <p>
       <label> Username (*)</label>
       <input className="w3-input" type="text" name="username" value={username} onChange={onTextChange}/>
     </p>
      <p>
        <label> Email (*)</label>
        <input className="w3-input" type="text" name="email" value={email} onChange={onTextChange}/>
      </p>
      <p>
        <label> Password (*)</label>
        <input className="w3-input" type="password" name="password" value={password} onChange={onTextChange}/>
      </p>
      <p>
        <button className="w3-btn w3-green w3-block w3-margin-bottom" onClick={onSubmitClick}>Register</button>
        <Link to="/login" className="w3-btn w3-light-grey w3-block">Log in</Link>
      </p>
     </div>
    </div>

    </>
  )
}
