"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Dashboard from "./Dashboard";

// Create a wrapper component to use `useAuth` inside `AuthProvider`
export function AuthWrapper({ children }: { children: React.ReactNode; }) {
  const { accessToken, login } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await fetch('/api/auth/refresh', {
          method: 'POST',
        });
        if (response.ok) {
          const { accessToken } = await response.json();
          login(accessToken);
        } else {
          router.push('/signin');
        }
      } catch (error) {
        console.error('Error refreshing token:', error);
      }
    };

    if (accessToken) {
      try {
        const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
        const isExpired = decodedToken.exp * 1000 < Date.now();
        if (isExpired) {
          refreshToken();
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        router.push('/signin');
      }
    }

  }, [accessToken, login, pathname, router]);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800">
        {Dashboard(accessToken)}
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );  
}
