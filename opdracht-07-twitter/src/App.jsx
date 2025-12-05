import { useState } from 'react';
import './App.css'
import CreateMessage from './components/CreateMessage'; 
import Message from './components/Message';
import MessageList from './components/MessageList';

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);
let name = 'rafiq';

  return (
    <>
      <CreateMessage setTextInput={setTextInput} setMessage={setMessage} message={message} textInput={textInput}/>
      <MessageList name={name} message={message}/>
    </>
  );
}

export default App