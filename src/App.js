import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';

function App() {

	if(!localStorage.getItem('username')) return ( <LoginForm />)

  	return (
		<ChatEngine
			projectID='3ae1a91d-d661-450b-af7d-04dcba6b480a'
			userName='anant'
			userSecret='dhiman'
      		height='100vh'
			renderChatFeed = { (chatAppProps) => <ChatFeed { ...chatAppProps } /> }
		/>
	);
}

export default App;
