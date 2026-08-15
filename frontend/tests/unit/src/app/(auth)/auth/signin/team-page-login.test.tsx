import { beforeEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import SignInPage from '@/app/(auth)/auth/signin/page'


const mockReplace = vi.fn()
const mockSignInEmail = vi.fn()
const mockAuth =  vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: mockReplace,
    refresh: vi.fn(),
  }),
}))

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => mockAuth(),
}))

describe('SignInPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockAuth.mockReturnValue({
      user: null,
      loading: false,
      signInWithEmail: mockSignInEmail,
      signInWithGoogle: vi.fn(),
    })
  })

  it('logs the user in and redirects to the team page', async () => {
    mockSignInEmail.mockResolvedValue(undefined)

    const user = userEvent.setup()

    render(<SignInPage />)

    await user.type(
      screen.getByLabelText('Email'),
      'test@example.com'
    )

    await user.type(
      screen.getByLabelText('Password'),
      'Password123'
    )

    await user.click(
      screen.getByRole('button', { name: 'Sign in' })
    )

    // Check that the login function received the form values
    expect(mockSignInEmail).toHaveBeenCalledWith(
      'test@example.com',
      'Password123'
    )

    // Check that successful login redirects
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/team')
    })
  })
})