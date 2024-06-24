import { useEffect,useRef, useState }from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { signal } from "@preact/signals-react";
import PropTypes from 'prop-types';




function App() {
	const [state, stateFunction] = useState(0);
	useEffect(() => {
	
		const interval = setInterval(() => {
			stateFunction(e=>e+1);
		}, 500)

		return ()=>{
			console.log(state);
			clearInterval(interval);
		}
	}, []);


	useEffect(() => {
		const targetNode = document.getElementById('bug');
		const config = { attributes: true, childList: true, subtree: true };
	  
		const callback = function(mutationsList, observer) {
		  for(const mutation of mutationsList) {
			if (mutation.type === 'childList' && mutation?.target?.id==='bug') {
				debugger
			  console.log('A child node has been added or removed.');
			}
		  }
		};
	  
		const observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	  
		return () => observer.disconnect();
	  }, []);

  return (
    <div >
		<div>{state} val</div>
        <div id="bug">
          {state%2 ? <button>World</button>: <span>Hello</span>}
        </div>
    </div>
  )
}

export default App





setTimeout(()=>{
	// document.querySelector("#bug").innerHTML='all deleted';
},2000)


var textNode = document.createTextNode("This is a text node");

// // Attempt to append a new element to the text node
// try {
// 	var newElement = document.createElement("div");
// 	textNode.appendChild(newElement); // This will throw an error
// } catch (error) {
// 	console.error(error.message);
// }
