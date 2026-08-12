import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { NotesList } from '@/features/notes/components/NotesList'
import { TeamList } from '@/features/team/components/TeamList';

export const metadata: Metadata = { title: 'Notes' }

export default async function NotesPage() {
  await requireAuth()
  return (
    <div className="space-y-6">
        <PageHeader title="Our Team" description="GUI Library for Python" />
        <TeamList />
    </div>
  )
}