const TheirMessage = ({ lastMessage, message }) => {
  const isfirstMessageByThatUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className='message-row'>
      {isfirstMessageByThatUser && (
        <div
          className='message-avatar'
          style={{
            background: `url(${message.sender.avatar}) no-repeat center center/cover `,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt='img-message'
          className='message-image'
          style={{ marginLeft: `${isfirstMessageByThatUser ? '4px' : '48px'}` }}
        />
      ) : (
        <div
          className='message'
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: `${isfirstMessageByThatUser ? '4px' : '48px'}`,
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
