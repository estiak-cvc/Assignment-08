'use client'
import { error } from 'better-auth/api';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLoginFunc = (data) => { 
    console.log(data, "data");
  };

  console.log(errors, "errors");

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
  <div className="p-6 rounded-xl bg-white w-full max-w-md shadow">
    <h2 className="font-bold text-3xl text-center mb-6">Login Your Account</h2>

    <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Email</legend>
        <input type="email" className="input w-full" {...register("email", {required: "Email field is required"})} placeholder="Type your email" />
     {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Password</legend>
        <input type="password" className="input" {...register("password", { required: "Password required" })}  placeholder="Type your password" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </fieldset>

      <button className="btn w-full bg-amber-200 text-black">Login</button>
    </form>

    <p className="mt-4 text-center">
      Don't have an account?{" "}
      <Link href="/register" className="text-blue-500">
        Register
      </Link>
    </p>
  </div>
</div>
  );
};

export default LoginPage;