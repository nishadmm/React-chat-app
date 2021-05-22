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

  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height='98vh'
      projectID='3c835762-2520-4fd6-bfdf-e6a3fb2296db'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
