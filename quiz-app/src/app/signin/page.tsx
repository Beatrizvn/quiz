"use client"; // Adicione esta linha no topo do arquivo para usar hooks e eventos do cliente

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      if (response.ok) {
        router.push('/'); 
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" type="email" required autoComplete="email" />
        <input name="password" placeholder="Password" type="password" required autoComplete="current-password" />
        <button className="w-full" type="submit">
          Sign In
        </button>
      </form>

      <div className="text-center">
        <a href="/signup">
          <button type="button">Don&apos;t have an account? Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default SignIn;