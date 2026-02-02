import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages, isLoading, setIsLoading }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  async function sendMessage() {
    if (inputText === "") return setInputText("");
    else if (isLoading) return setInputText("");
    else {
      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID(),
        },
      ];

      setChatMessages(newChatMessages);

      const response = await Chatbot.getResponseAsync(inputText);

      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);

      setInputText("");
    }
  }

  function pressedEnter(event) {
    if (event.key === "Enter") {
      if (inputText === "") return;
      else if (isLoading) return;
      else sendMessage();
      setInputText("");
    }
    if (event.key === "Escape") setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={pressedEnter}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}