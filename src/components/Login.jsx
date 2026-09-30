import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: email.split("@")[0], email, role: "customer" });
    navigate("/");
  };

  return (
    <form className="p-8 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        className="w-full p-3 border rounded mb-4"
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="w-full py-3 bg-primary text-white rounded font-semibold" type="submit">
        Sign In
      </button>
    </form>
  );
}