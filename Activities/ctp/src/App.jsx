import { useState } from 'react'
import Child from './components/Child';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleSendMessage = (childData) => {
    setMessage(childData);
  }

  return (
  <div>
    <h1>Parent Component</h1>
    <p>Message: {message}</p>
    <Child
      onSendMessage={handleSendMessage}
    />
  </div>
 )
}

export default App;
