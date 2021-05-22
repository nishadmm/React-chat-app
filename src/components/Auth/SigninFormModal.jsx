import React, { useState } from 'react';
import png from '../images/Register.png';

import 'material-icons/iconfont/material-icons.css';
import M from 'materialize-css/dist/js/materialize.min.js';
var axios = require('axios');

const SigninFormModal = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

   let privateKey = process.env.REACT_APP_PRIVATE_KEY

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      username === '' ||
      email === '' ||
      password1 === '' ||
      password2 === ''
    ) {
      M.toast({ html: 'Please fill all the fields...' });
    }else if(password1 !== password2) {
      M.toast({ html: 'Password does not match...' });
    } else {

      var data = {
        "username": username,
	      "secret": password1,
	      "email": email,
      };

      var config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
          'PRIVATE-KEY': privateKey
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password1);
      window.location.reload()
    }
    setUsername('');
    setEmail('');
    setPassword1('');
    setPassword2('');
  };

  return (
    <div
      id='signinModal'
      className='modal bottom-sheet'
      style={{ height: '100%' }}
    >
      <div className='modal-content'>
        <h4
          className='center card-panel '
          style={{ background: 'rgb(255, 12, 174)', color: '#fff' }}
        >
          <img
            src={png}
            style={{ width: '50px', height: '50px' }}
            className='right'
            alt='icon'
          />{' '}
          Chatty Registration
        </h4>
        <form onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field'>
              <input
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                className='validate'
                required
              />
              <label htmlFor='username'>User Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <input
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='validate'
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <input
                id='password1'
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                type='password'
                className='validate'
                required
              />
              <label htmlFor='password1'>Password</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <input
                id='password2'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                type='password'
                className='validate'
                required
              />
              <label htmlFor='password2'>Confirm Password</label>
            </div>
          </div>
        </form>
      </div>
      <div className='modal-footer' style={{ marginBottom: '2rem' }}>
        <button
          className=' modal-close btn waves-effect waves-light'
          style={{ marginRight: '2rem' }}
          type='submit'
          name='action'
          onClick={onSubmit}
        >
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </div>
    </div>
  );
};

export default SigninFormModal;
