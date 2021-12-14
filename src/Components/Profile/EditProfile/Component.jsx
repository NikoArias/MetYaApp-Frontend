export default function EditProfileComponent(props){
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
            <label>Name</label>
            <input className="w3-input" type="text" name="Name"/>
          </p>
          <p>
            <label>Last Name</label>
            <input className="w3-input" type="text" name="Last_Name"/>
          </p>
          <p>
            <label> User Description</label>
               <textarea className="w3-input" type="text" name="User_Description" rows={10}></textarea>
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
              <input className="w3-input" type="text" name="Facebook"/>
            </p>
            <p>
              <label>Twitter</label>
              <input className="w3-input" type="text" name="Twitter"/>
            </p>
            <p>
              <label>Instagram</label>
              <input className="w3-input" type="text" name="Instagram"/>
            </p>
            <p>
              <label>snapchat</label>
              <input className="w3-input" type="text" name="Instagram"/>
            </p>
           </div>
          </div>

            <hr className="w3-black"/><br /><br />
    </>
  )
}
