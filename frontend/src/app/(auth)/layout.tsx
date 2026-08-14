import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white px-6 pt-24 pb-12 sm:px-12 md:grid md:grid-cols-3 md:justify-items-center">
      <div className="w-full max-w-sm md:ml-8">{children}</div>
    </div>
  )
}
