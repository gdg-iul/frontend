// src/components/AddData.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Services/firebase.js";
;

function AddData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // For feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      setStatus("Please fill in both fields!");
      return;
    }

    try {
      const usersCollectionRef = collection(db, "users"); // ✅ correct
      const docRef = await addDoc(usersCollectionRef, {
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date()
      });

      setStatus(`User added with ID: ${docRef.id}`);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding document:", error);
      setStatus("Error adding user. Check console.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

export default AddData;
