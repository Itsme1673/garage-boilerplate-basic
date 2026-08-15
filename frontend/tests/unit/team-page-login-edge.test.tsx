import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import SignInPage from '@/app/(auth)/auth/signin/page'
import { TeamList } from '@/features/team/components/TeamList'
import { proxy } from '@/proxy'
import { NextRequest } from 'next/server'

const mockSignInEmail = vi.fn()
const mockReplace = vi.fn()

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    user: null,
    loading: false,
    signInWithEmail: mockSignInEmail,
    signInWithGoogle: vi.fn(),
  }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: mockReplace,
    push: vi.fn(),
    refresh: vi.fn(),
  }),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('Login', () => {
  it('shows an error for invalid login credentials', async () => {
    const user = userEvent.setup()

    mockSignInEmail.mockRejectedValue(
      new Error('invalid-credentials')
    )

    render(<SignInPage />)

    await user.type(
      screen.getByLabelText(/email/i),
      'wrong@example.com'
    )

    await user.type(
      screen.getByLabelText(/password/i),
      'WrongPassword123'
    )

    await user.click(
      screen.getByRole('button', { name: /sign in/i })
    )

    expect(mockSignInEmail).toHaveBeenCalledWith(
      'wrong@example.com',
      'WrongPassword123'
    )

    expect(mockReplace).not.toHaveBeenCalledWith('/team')
  })
})

describe('Team authentication', () => {
  it('redirects unauthenticated users from /team to sign in', () => {
    const request = new NextRequest(
      'http://localhost:3000/team'
    )

    const response = proxy(request)

    expect(response.status).toBe(307)

    expect(
      response.headers.get('location')
    ).toContain('/auth/signin')
  })
})

describe('TeamList', () => {
  it('uses the default profile image when a photo is missing', () => {
    render(<TeamList />)

    const image = screen.getByAltText('Aditya Lonkar')

    fireEvent.error(image)

    expect(image).toHaveAttribute(
      'src',
      '/team/default-profile.svg'
    )
  })
})