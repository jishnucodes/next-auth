import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const AuthProvider = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);

  // ⛔ Not logged in → redirect to /
  if (!session) {
    redirect('/');
  }

  // ✅ Logged in → allow access
  return <>{children}</>;
};

export default AuthProvider;
