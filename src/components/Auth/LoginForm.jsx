import axios from 'axios';
import React, { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import png from '../images/lock.png';
import SigninFormModal from './SigninFormModal';
import About from '../pages/About';
import PreLoader from '../layouts/PreLoader';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const LoginForm = () => {
  const [Username, setUsername] = useState('');
  const [Password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const authObject = {
      'Project-ID': '3c835762-2520-4fd6-bfdf-e6a3fb2296db',
      'User-Name': Username,
      'User-Secret': Password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', Username);
      localStorage.setItem('password', Password);

      window.location.reload();
    } catch (error) {
      console.log(error);
      M.toast({ html: 'Invalid Credentials...' });
      setpassword('');
    }
    setLoading(false);
  };

  return (
    <>
      <SigninFormModal />
      <About />
      <div className='wrapper'>
        <div className='login-nav'>
          <a
            href='#aboutModal'
            className='btn-floating btn-large red waves-effect waves-light pulse modal-trigger z-depth-3 tooltipped'
            data-position='bottom'
            data-tooltip='About Chatty'
          >
            <QuestionCircleOutlined className='center about-icon ' />
          </a>
          <a
            href='#signinModal'
            className=' modal-trigger waves-effect waves-light signin-btn z-depth-3'
          >
            {' '}
            SignIn{' '}
          </a>
        </div>
        <div className='form-box'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={png}
              alt='icon'
              style={{ width: '50px', height: '50px', textAlign: 'center' }}
            />
          </div>
          <div className='form-title'>Chatty Login</div>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              value={Username}
              placeholder='Enter username...'
              className='input-box'
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              value={Password}
              placeholder='Enter password...'
              className='input-box'
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <div align='center'>
              <button type='submit' className='login-button'>
                <span>Login</span> {loading && <PreLoader />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
