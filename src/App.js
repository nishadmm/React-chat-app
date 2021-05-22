import { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatFeed/ChatFeed';
import LoginForm from './components/Auth/LoginForm';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
    // eslint-disable-next-line
  }, []);

  let projectID = process.env.REACT_APP_PROJECT_ID

  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height='98vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
