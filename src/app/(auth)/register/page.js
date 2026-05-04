'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 simple validation
    if (!form.email || !form.password) {
      setError("Email & Password required!");
      return;
    }

    // 👉 fake success (later Firebase use korba)
    console.log(form);

    alert("Registration Successful ✅");

    // redirect to login
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        
        <h2 className="text-2xl font-bold text-center mb-4">
          Register
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-full mt-2">
            Register
          </button>
        </form>

        {/* 🔗 Login link */}
        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>

        {/* 🔥 Google Button */}
        <button className="btn btn-outline w-full mt-3">
          Continue with Google
        </button>

      </div>
    </div>
  );
}