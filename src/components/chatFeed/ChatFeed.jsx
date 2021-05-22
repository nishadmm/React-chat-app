import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import { LogoutOutlined } from '@ant-design/icons';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReciepts = (message, isMyMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`reciept_${index}`}
            className='read-receiptt'
            style={{
              float: isMyMessage ? 'right' : 'left',
              background: `url(${person.person.avatar}) no-repeat center center/cover`,
            }}
          />
        )
    );
  };

  const Logout = () => {
    confirmAlert({
      title: 'Logout',
      message: 'Are you sure to logout.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            localStorage.clear();
            window.location.reload();
          },
        },
        {
          label: 'No',
          onClick: () => {
            console.log('Logout cancelled');
          },
        },
      ],
    });
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${key}`} style={{ width: '100%' }}>
          <LogoutOutlined
            rotate='-90'
            onClick={Logout}
            className='logout-icon'
          />
          <div className='message-block'>
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0' : '60px',
            }}
          >
            {renderReadReciepts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat)
    return (
      <div className='no-chat-container'>
        <LogoutOutlined rotate='-90' onClick={Logout} className='logout-icon' />
        <h1>Lets enjoy with your friends and families...</h1>
        <p>create a chat group and add your friends</p>
      </div>
    );

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'> {chat?.title} </div>
        <div className='chat-subtitle'>
          {chat.people.map((person) => `${person.person.username} `)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className='message-form-container'>
        <MessageForm chatID={activeChat} {...props} />
      </div>
    </div>
  );
};

export default ChatFeed;
