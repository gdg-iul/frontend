// src/App.jsx
import "./Styles/App.css";
import AddData from "./Components/AddData";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Community GDG 🧖🏻‍♀️
        </h1>
        <AddData />
      </div>
    </div>
  );
}

export default App;
