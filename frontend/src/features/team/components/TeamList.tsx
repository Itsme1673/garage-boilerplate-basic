'use client'

import { where } from 'firebase/firestore'
import { useCollection } from '@/hooks/useFirestore'
import { useAuth } from '@/hooks/useAuth'
import { getTeamMembers } from '@/lib/firebase/firestore'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'

export function TeamList() {
  const { data: team, loading } = useCollection(getTeamMembers())

  if (loading) return <LoadingSpinner />
  if (team.length === 0) return <EmptyState title="No Team yet" />

  return (
    <div className="max-w-2xl space-y-6">
    <ul className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {team.map((member) => (
        <li key={member.name}>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <img src={member.photoURL || 'default-profile.svg'} alt={member.name} className="h-50 w-50 rounded-full m-4" />
          <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">ROLE </p>
          <p className="mt-1 text-sm">{member.role}</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">EMAIL</p>
          <p className="mt-1 text-sm">{member.email}</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">ABOUT</p>
          <p className="mt-1 text-sm">{member.about}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}