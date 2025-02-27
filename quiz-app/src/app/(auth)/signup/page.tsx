"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/InputAuth";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push("/signin");
    } else {
      alert(data.error || "Sign-up failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center w-96 h-100 bg-white rounded-lg shadow-lg">
        <Logo className="mb-7" /> 
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-72">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label='Username'
            id="name"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label='Email'
            id="email"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label='Password'
          />
          <Button label="Sign-up" color="primary" />

          <div className="mt-6 pb-5 text-center text-sm">
            <p className="text-gray-600 inline">If you already have an account</p>
            <a href="/signin" className="text-blue-500 hover:underline inline ml-1">Sign in</a>
          </div>

        </form>
      </div>
    </div>
  );
}
