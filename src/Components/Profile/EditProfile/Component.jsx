import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function EditProfileComponent(props){
  const { user_f_name, user_l_name, user_descrip, f_link, t_link, i_link, s_link, onTextChange, onSubmitClick} = props;

  return(
    <>
      <div className="w3-row">
        <div className="w3-col s4 w3-container w3-padding">
        </div>
        <div className="w3-col s4 w3-container w3-center">
            <h4><strong>Edit </strong></h4>
        </div>
        <div className="w3-col s4 w3-container w3-padding">
        </div>
      </div>
        <hr className="w3-black"/>

        <div className="w3-container">
         <div className="w3-white w3-container w3-round-xlarge">
         <br />
         <h5><strong>Profile </strong></h5>
          <p>
            <label>First Name</label>
            <input className="w3-input" type="text" name="user_f_name" value={user_f_name} onChange={onTextChange}/>
          </p>
          <p>
            <label>Last Name</label>
            <input className="w3-input" type="text" name="user_l_name" value={user_l_name} onChange={onTextChange}/>
          </p>
          <p>
            <label> User Description</label>
               <textarea className="w3-input" type="text" name="user_descrip" rows={10} user_descrip></textarea>
          </p>
         </div>
        </div>

        <hr className="w3-black"/>

          <div className="w3-container">
           <div className="w3-white w3-container w3-round-xlarge">
           <br />
           <h5><strong>Social Media </strong></h5><br />
           <label>Please fill the blanks with the links of ur social media profile.</label>
            <p>
              <label>Facebook</label>
              <input className="w3-input" type="text" name="f_link" value={f_link} onChange={onTextChange}/>
            </p>
            <p>
              <label>Twitter</label>
              <input className="w3-input" type="text" name="t_link" value={t_link} onChange={onTextChange}/>
            </p>
            <p>
              <label>Instagram</label>
              <input className="w3-input" type="text" name="i_link" value={i_link} onChange={onTextChange}/>
            </p>
            <p>
              <label>snapchat</label>
              <input className="w3-input" type="text" name="s_link" value={s_link} onChange={onTextChange}/>
            </p>
           </div>
          </div>

            <hr className="w3-black"/>

                  <hr className="w3-black"/>

          <div className="w3-container">
              <button className="w3-btn w3-round-large w3-black w3-block w3-margin-bottom" onClick={onSubmitClick}>Update Profile</button>
              <Link to="/profile" className="w3-btn w3-round-large w3-red w3-block">Cancel</Link>
          </div>
            <br /><br /><br /><br />
    </>
  )
}
