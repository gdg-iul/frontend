// src/App.jsx

// REMOVED: import "./Styles/App.css"; (If you are using Tailwind, this file is likely unnecessary or redundant)
// REMOVED: import AddData from "./Components/AddData"; 

// ADDED: Import the HomePage component you created
import HomePage from "./pages/HomePage"; 

function App() {
  return (
    // The App component should now primarily render the HomePage
    // The main styling for the whole page (dark background) is in src/styles/index.css
    <div className="App">
      <HomePage />
    </div>
    // If you plan to use React Router for multiple pages, this App.jsx would manage the routes.
  );
}

export default App;