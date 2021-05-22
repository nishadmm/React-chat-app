import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const [message, setMessage] = useState('');

  const { chatID, creds } = props;

  const onSubmit = (e) => {
    e.preventDefault();

    const text = message.trim();
    if (text.length > 0) sendMessage(creds, chatID, { text });
    setMessage('');
  };

  const onChange = (e) => {
    setMessage(e.target.value);
    isTyping(props, chatID);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatID, { files: e.target.files, text: '' });
  };

  return (
    <form className='message-form' onSubmit={onSubmit}>
      <input
        placeholder='send a message...'
        className='message-input'
        value={message}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <label htmlFor='upload-button'>
        <span className='image-button'>
          <PictureOutlined className='picture-icon' />
        </span>
      </label>
      <input
        type='file'
        id='upload-button'
        multiple={false}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button type='submit' className='send-button'>
        <SendOutlined className='send-icon' />
      </button>
    </form>
  );
};

export default MessageForm;
