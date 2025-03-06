"use client";

import Button from '@/components/ui/Button';
import { useAuth } from '../../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/InputAuth';
import Logo from '@/components/ui/Logo';

export default function SignIn() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const identifier = formData.get('identifier') as string; // Pode ser email ou username
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      if (response.ok) {
        const { accessToken } = await response.json();
        login(accessToken);
        router.push('/');
      }
    } catch (error) {
      alert(`An error occurred: ${error}`);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-lg shadow-lg">
          <Logo className="mb-10" />
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-72">
            <Input name="identifier" type="text" placeholder="Email or Username" required label="Email or Username" id="identifier" />
            <Input name="password" type="password" placeholder="Password" required label="Password" id="password" />
            <Button label="Sign-in" color="primary" />

            <div className="mt-6 pb-5 text-center text-sm">
              <p className="text-gray-600 inline">If you don&apos;t have an account</p>
              <a href="/signup" className="text-blue-500 hover:underline"> Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
