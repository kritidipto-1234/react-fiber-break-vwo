import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	react({
		babel: {
			"plugins": [["module:@preact/signals-react-transform"]],
			// "presets": ["@babel/preset-env", "@babel/preset-react"]
		  }
	  })
	  
  ],
  server: {
    port: 3001 // Specify your desired port here
  }})

