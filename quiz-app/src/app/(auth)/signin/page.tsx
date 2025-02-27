"use client";

import Button from '@/components/ui/Button';
import { useAuth } from '../../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/InputAuth';

export default function SignIn() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { accessToken } = await response.json();
        login(accessToken);
        router.push('/');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex items-center justify-center w-96 h-96 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-72">
          <Input name="email" type="email" placeholder="Email" required label='Email' id='email'/>
          <Input name="password" type="password" placeholder="Password" required label='Password' id='password' />
          <Button label="Sign-in" color="primary" />

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 inline">If you dont have an account</p>
            <a href="/signup" className="text-blue-500 hover:underline"> Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
