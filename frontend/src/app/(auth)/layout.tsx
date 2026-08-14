import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white px-6 py-12 sm:px-12">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )
}
