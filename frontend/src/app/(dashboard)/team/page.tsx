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
        <PageHeader title="Project Team"/>
        <TeamList />
    </div>
  )
}