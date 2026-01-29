import React from 'react';

function App() {
  return (
    <div style={{minHeight: '100vh', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{color: 'white', textAlign: 'center', padding: '2rem'}}>
        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#60a5fa'}}>Test React</h1>
        <p style={{fontSize: '1.25rem', marginBottom: '2rem'}}>Si vous voyez ceci, React fonctionne correctement</p>
        <div style={{backgroundColor: '#374151', padding: '1rem', borderRadius: '0.5rem'}}>
          <p style={{margin: 0}}>✅ Composant React rendu avec succès</p>
        </div>
      </div>
    </div>
  );
}

export default App;