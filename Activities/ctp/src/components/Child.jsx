import { useState } from 'react';

function Child(props) {
  const [text, setText] = useState('');

  const handleClick = () => {
    props.onSendMessage(text) 
  }

  return (
  <div>
    <h3>Child Component</h3>
    <input 
      type="text" 
      onChange={(e) => setText(e.target.value)}
    />
      <button onClick={handleClick}>Send to Parent</button>
  </div>
  )
}

export default Child;
