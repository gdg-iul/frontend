// src/Components/AddData.jsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Services/firebase.js"; // ✅ corrected path


function AddData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      setStatus("⚠️ Please fill in both fields!");
      return;
    }

    try {
      const usersCollectionRef = collection(db, "users");
      const docRef = await addDoc(usersCollectionRef, {
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date(),
      });

      setStatus(`✅ User added (ID: ${docRef.id})`);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding document:", error);
      setStatus("❌ Error adding user.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Register User
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          ➕ Add User
        </button>
      </form>
      {status && <p className="text-sm mt-3 text-gray-600">{status}</p>}
    </div>
  );
}

export default AddData;
