```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... your other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // This is the line that might be causing the issue
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: []
};
```