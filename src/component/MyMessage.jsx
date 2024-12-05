
const MyMessage = ({ message }) => {

    if(message.attachments && message.attachments.length > 0) {
        return (
            <img src={message.attachment[0].file} alt="" />
        )
    }


    return (
        <div className="message" style={{ float : 'right', marginRight : '16px' }} >
            {message.text}
        </div>
    )
  }
  
  export default MyMessage