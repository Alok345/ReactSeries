import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState("Hi there! How can I assist you?");
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3005/chatbot", {
        question: value,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error communicating with the server:", error);
      setResponse("Sorry, there was an error processing your request.");
    }
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Ask me anything..."
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Click me for answers!</button>
      </div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
    </div>
  );
}

export default App;
