'use client'

import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
  // This is the client-side provider for NextAuth.js
  return <SessionProvider>{children}</SessionProvider>
}