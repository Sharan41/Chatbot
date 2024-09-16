import React, { useState } from 'react';
import './App.css';

function newapp() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="App">
      <h1>Customer Support Chatbot</h1>
      <textarea
        placeholder="Ask your question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuery}>Ask</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default newapp;
