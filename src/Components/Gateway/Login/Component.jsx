import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function LoginContainer(props){
    const { username, password, onTextChange, onLoginClick } = props;
  return(
    <>
      <div className="w3-container w3-margin-bottom w3-center">
        <br />
        <img src="/img/Logo1Test.png" style={{width:"60%"}}/>
         <h2>MetYaApp</h2>
      </div>
      <hr className="w3-black"/>
      <br />
      <div className="w3-container">
       <div className="w3-white w3-container w3-round-xlarge">
       <h1><strong>Login</strong></h1>
        <p>
          <label> Username</label>
          <input className="w3-input" type="text" name="username" value={username} onChange={onTextChange}/>
        </p>
        <p>
          <label> Password</label>
          <input className="w3-input" type="password" name="password"value={password} onChange={onTextChange}/>
        </p>
        <p>
          <button className="w3-btn w3-green w3-block w3-margin-bottom" onClick={onLoginClick}>Login</button>
          <Link to="/register" className="w3-btn w3-light-grey w3-block">Sign up</Link>
        </p>
       </div>
      </div>
    <span className="w3-bottom w3-text-grey w3-center"><hr className="w3-black"/>V 1.0.1</span>

    </>
  )
}
