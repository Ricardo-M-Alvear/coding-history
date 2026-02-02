import { useState} from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      message: "hello chatbot",
      sender: "user",
    },
    {
      id: "2",
      message: "hello user",
      sender: "robot",
    },
    {
      id: "3",
      message: "can you get me todays date?",
      sender: "user",
    },
    {
      id: "4",
      message: "Today is Janurary 27",
      sender: "robot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App
