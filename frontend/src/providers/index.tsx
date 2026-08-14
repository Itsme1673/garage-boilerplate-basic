'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { AuthProvider } from './AuthProvider'
import { Toaster } from 'sonner'

/**
 * Compose all client-side providers here.
 * Import this in the root layout only.
 */
export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute = pathname?.startsWith('/auth')

  return (
    <AuthProvider>
      {children}
      <Toaster
        richColors
        position="top-right"
        offset={isAuthRoute ? { top: '390px', right: '575px' } : undefined}
      />
    </AuthProvider>
  )
}
