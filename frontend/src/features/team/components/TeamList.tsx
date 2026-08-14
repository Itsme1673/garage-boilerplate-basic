'use client'

import { useCollection } from '@/hooks/useFirestore'
import { getTeamMembers } from '@/lib/firebase/firestore'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'
import { TeamMember } from '@/types';

function getTeam(): TeamMember[]{
    return [
        {
         name: "Grace Bigwood",
         role: "Project Manager",
         email: "s4097358@student.rmit.edu.au",
         about: "Project Manager. Developed the Team page",
        },
        {
         name: "Aditya Lonkar",
         role: "Developer",
         email: "S4090673@student.rmit.edu.au",
         about: "Developer. Styled the login page.",
        },
        {
         name: "Sovannchetra Hav",
         role: "Business Analyst",
         email: "s4009238@student.rmit.edu.au",
         about: "Business analyst. Got the requirements for us to build the page.",
        },
        {
         name: "Maheswara Abhinaya",
         role: "UX Designer",
         email: "S4044395@student.rmit.edu.au",
         about: "UX Desinger. Designed the look of this page.",
        },

    ]
}
export function TeamList() {

  const team = getTeam()

  if (team.length === 0) return <EmptyState title="No Team yet" />
  
  return (
    <ul className="flex gap-6 ">
      {team.map((member) => (
        <li key={member.name} className="space-y-6  rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <img src={`/team/${member.name}.jpg`} alt={member.name} className="h-50 w-50 rounded-full m-4" onError={(e) => e.currentTarget.src='team/default-profile.svg'}/>
          <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase">ROLE</p>
          <p className="mt-1 text-sm ">{member.role}</p>
          <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase">EMAIL</p>
          <p className="mt-1 text-sm">{member.email}</p>
          <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase">About</p>
          <p className="mt-1 text-sm">{member.about}</p>
        </li>
      ))}
    </ul>
  )
}