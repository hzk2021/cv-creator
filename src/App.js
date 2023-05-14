import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import React from 'react';

function App() {
  // component to pdf - robinwieruch.de/react-component-to-pdf/
  const printRef = React.useRef();

  return (
    <div className="App h-screen">
      <Header printRef={printRef}/>
      <Content printRef={printRef} />
      <Footer />
    </div>
  );
}

export default App;
