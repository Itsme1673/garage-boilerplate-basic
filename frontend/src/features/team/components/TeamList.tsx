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
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {team.map((member) => (
        <li key={member.name} className="rounded-lg border p-4">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <img src={member.photoURL || 'default-profile.svg'} alt={member.name} className="h-50 w-50 rounded-full m-4" />
          <p>Role: {member.role}</p>
          <p>Email: {member.email}</p>
          <p>About Me: {member.about}</p>
          
        </li>
      ))}
    </ul>
  )
}