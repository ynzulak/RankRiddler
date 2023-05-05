import React, { useState } from 'react';

function Login() {
	const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>

        <label className='form-label'>
          Username: <span style={{color: "#e34234"}}>*</span>
        </label>
          <input className="form-input" type="text" value={userName} onChange={handleUserNameChange} />
        <br />

        <label className='form-label'>
      		Password <span style={{color: "#e34234"}}>*</span>
        </label>
          <textarea value={password} onChange={handlePasswordChange} />
        <br />
				<p className="login-text">Don't have an account? <a className="signup-atag" href="/signup">Sign up</a></p>
				<br />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
	);
}


export default Login;
