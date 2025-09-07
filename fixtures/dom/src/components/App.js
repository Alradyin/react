import React from 'react';
import Header from './Header';
import Fixtures from './fixtures';
import '../style.css';

/**
 * Main App component for DOM fixtures.
 * 
 * This component demonstrates:
 * - Modern functional component syntax
 * - Clean component composition
 * - Simple and readable structure
 */
const App = () => {
  return (
    <div>
      <Header />
      <Fixtures />
    </div>
  );
};

export default App;
