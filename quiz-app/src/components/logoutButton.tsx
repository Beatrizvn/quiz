"use client";

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Button from './ui/Button';
import Image from 'next/image';

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    logout();
    await fetch('/api/auth/signout', { method: 'POST' });
    router.push('/signin');
  };

  return (
    <Button
      label={
        <>
          <Image
            src="/assets/reply.svg"
            alt="Logout Icon"
            width={15}
            height={14}
            className='me-1'
          />
          Logout
        </>
      }
      color="secondary"
      size="small"
      onClick={handleLogout}
    />
  );
}  