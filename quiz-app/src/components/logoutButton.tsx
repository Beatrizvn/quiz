"use client";

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    logout();
    await fetch('/api/auth/signout', { method: 'POST' });
    router.push('/signin'); 
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}