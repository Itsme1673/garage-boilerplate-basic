import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { NotesList } from '@/features/notes/components/NotesList'
import { TeamList } from '@/features/team/components/TeamList';

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()
  return (
    <div className="space-y-6">
        <PageHeader title="Team 70" description="Creating a GUI Library for Python that renders in the browser, used by novice to advanced programmers alike" />
        <TeamList />
    </div>
  )
}