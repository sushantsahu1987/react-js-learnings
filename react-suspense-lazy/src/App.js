import React, { Component, Suspense } from 'react';
import './App.css';

const LazyProfile = React.lazy(()=> import('./Image'));

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyProfile/>
        </Suspense>
      </div>
    );
  }
}

export default App;
