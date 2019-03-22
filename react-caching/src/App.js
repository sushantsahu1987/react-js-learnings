import React from 'react';
import './App.css';

function App(props) {

    const caching = (fn) => {
      return fn.then(res => 
       { 
         console.log('caching');
         res.clone().json().then(r => {
           console.log(r);
         });
         return res
       }
      );
    }

    const api = () => {

      caching(
        fetch('http://5c94d665498269001487f150.mockapi.io/test/people')
      ).then(data => data.json())
      .then(resp => console.log(resp));
    } 

    return (
      <div>
          {
            api()
          }
          Test
      </div>
    );
}

export default App;
