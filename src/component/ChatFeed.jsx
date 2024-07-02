import MesageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;
    let str = JSON.stringify(props, null, 4); // (Optional) beautiful indented output.
    console.log('chatfeed props === ' + str);

    const chat = chats && chats[activeChat];

    const renderReadReciepts = (message, isMyMessage) => {
        chat.people.map( (person, index ) =>  person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    backgroundImage : person.person.avatar && `url(${person.person.avatar})`,
                    float : isMyMessage ? 'right' : 'left'
                }}
            >
            </div>
        ))
    }

    const renderMessage = () => {
        const keys = Object.keys(messages);

        return keys.map ( (key, index ) => {
            const message = messages[key];
            const lastMessageKey = (index === 0) ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{width : '100%'}}>
                    <div className="message-block">
                        { isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastmessage={messages[lastMessageKey]} />
                        }
                    </div>

                    <div className="read-reciepts" style={{ marginRight : isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px'}}>
                        {renderReadReciepts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

  return (
    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">
                {chat?.title}
            </div>
            <div className="chat-subtitle">

            </div>

            { renderMessage() }

            <div style={{height : '100px'}}></div>
            <div className="message-form-container">
                <MesageForm activeChatId={activeChat} {...props} />
            </div>
        </div>
    </div>
  )
}

export default ChatFeed