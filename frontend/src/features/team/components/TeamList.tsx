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
    <ul className="space-y-2">
      {team.map((member) => (
        <li key={member.name} className="rounded-lg border p-4">
          <h3 className="font-medium">{member.name}</h3>
          <p className="text-sm text-zinc-500">{member.role}</p>
          <p className="text-sm text-zinc-500">{member.email}</p>
          <p className="text-sm text-zinc-500">{member.about}</p>
          
        </li>
      ))}
    </ul>
  )
}