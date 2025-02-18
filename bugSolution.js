```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... your other configurations ...
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    // Add any other directories containing components here
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: []
};
```