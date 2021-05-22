import React from 'react';
import devdp from '../images/devdp.jpeg';

import 'material-icons/iconfont/material-icons.css';

const About = () => {
  return (
    <div id='aboutModal' className=' modal card'>
      <div className='card-content'>
        <p className='center red-text'>
          Chatty is developed By <strong>NISHAD</strong> for you to chatting
          with others with securely... Lets login and share your happy moments
          to your friend and families
        </p>
      </div>
      <div className='card-tabs'>
        <ul className='tabs tabs-fixed-width'>
          <li className='tab'>
            <a className='active' href='#test4'>Developer</a>
          </li>
          <li className='tab'>
            <a href='#test5'>
              About
            </a>
          </li>
          <li className='tab'>
            <a href='#test6'>Version</a>
          </li>
        </ul>
      </div>
      <div className='card-content grey lighten-4'>
        <div id='test4'>
          <div className='card'>
            <div className='card-image waves-effect waves-block waves-light'>
              <img
                className='activator responsive-img z-depth-4 '
                alt=''
                src={devdp}
                style={{
                  width: '50%',
                  height: '200px',
                  margin: '10px auto',
                  borderRadius: '50%',
                }}
              />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>
                NISHAD.M.M<i className='material-icons right'>more_vert</i>
              </span>
              <p>
                Hello guys, This is one of chatting app I developed for you to
                share anything with others...
              </p>
            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>
                Contact<i className='material-icons right'>close</i>
              </span>
              <ul className='collapsible'>
                <li>
                  <div className='collapsible-header'>
                    <i className='material-icons'>email</i>
                    Email
                  </div>
                  <div className='collapsible-body'>
                    <p className=''> nishadmminfo@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div className='collapsible-header'>
                    <i className='material-icons'>phone</i>
                    Phone
                  </div>
                  <div className='collapsible-body'>
                    <p>+91 7510818122</p>
                  </div>
                </li>
                <li>
                  <div className='collapsible-header'>
                    <i className='material-icons'>pending</i>
                    Social Medias
                  </div>
                  <div className='collapsible-body'>
                    <p className='collection'>
                      <a className='collection-item' href='#!'>
                        {' '}
                        Github
                      </a>
                      <a className='collection-item' href='#!'>
                        {' '}
                        Linkedin
                      </a>
                      <a className='collection-item' href='#!'>
                        {' '}
                        Instagram
                      </a>
                      <a className='collection-item' href='#!'>
                        {' '}
                        Twitter
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id='test5' style={{ padding: '1rem' }}>
          <p>
            Show you when someone is typing. Offer read receipts (show when
            someone has read or received your message, as well as showing your
            contact when you read their message) Send messages over mobile data
            and Wi-Fi. Lets you share files and high-resolution photos.
            Messages that are entered in the Chat window are sent to the destination via the chat server.
          </p>
        </div>
        <div id='test6' className='center new badge red lighten-2 white-text'>
          <code>Version : 12.5.1</code>
        </div>
      </div>
    </div>
  );
};

export default About;
