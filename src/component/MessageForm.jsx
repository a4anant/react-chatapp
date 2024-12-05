import { useState } from "react";
import { PictureOutlined, SendOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from "react-chat-engine";


const MesageForm = (props) => {

    const [value, setValue] = useState('');
    const { chatId, cred } = props;

    const hangleInputChange = (e) => {
        setValue(e.target.value);
        isTyping(props, chatId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if(text.length > 0) {
            sendMessage(cred, chatId , {text});
        }
        setValue('');
    }

    const handleUpload = (e) => {
        sendMessage(cred, chatId, {files: e.target.files, text: ' '});
    }

    return (
      <form className="message-form" onSubmit={handleSubmit}>
        <input
            className="message-input"
            placeholder="Send a message..."
            value={value}
            onChange={hangleInputChange}
            onSubmit={handleSubmit}
        />

        <label htmlFor="upload-button">
            <span className="upload-button-image">
                <PictureOutlined />
            </span>
        </label>

        <input 
            type="file"
            id="upload-button"
            multiple={false}
            style={{display : 'none'}}
            onChange={handleUpload.bind(this)}
        />

        <button type="submit">
            <SendOutlined />
        </button>
      </form>
    )
  }
  
  export default MesageForm