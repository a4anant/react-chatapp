import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
		<ChatEngine
			projectID='3ae1a91d-d661-450b-af7d-04dcba6b480a'
			userName='anant'
			userSecret='dhiman'
      height='100vh'
		/>
	);
}

export default App;
