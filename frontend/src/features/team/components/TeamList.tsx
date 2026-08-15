'use client'

import { EmptyState } from '@/components/shared/EmptyState'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { useAuth } from '@/hooks/useAuth';
import { TeamMember } from '@/types/firestore';

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
  const { loading }  = useAuth()
  if (loading) return <LoadingSpinner />

  const team = getTeam()

  if (team.length === 0) return <EmptyState title="No Team yet" />
  
  return (
    <div className="text-center">
    <p className=" gap-6 text-xl font-semibold text-center">Team 70</p>
    <p className="text-zinc-400">We are developing a GUI library for Python, for use by novices and advanced users alike. It will be easy to install, being a single importable module,
        and will display in the browser.
    </p>
    <ul className="flex flex-wrap justify-center gap-6">
      {team.map((member) => (
        <li key={member.name} className=" basis-[calc(25%-12px)] aspect-square rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <img src={`/team/${member.name}.jpg`} alt={member.name} className="h-50 w-50 rounded-full m-4 mx-auto" onError={(e) => e.currentTarget.src='team/default-profile.svg'}/>
          <h3 className="text-lg font-semibold" >{member.name}</h3>
          <p className="mt-1 text-sm text-zinc-400">Member role: {member.role}</p>
          <p className="mt-1 text-sm text-zinc-400">Contact details: {member.email}</p>
          <p className="mt-1 text-sm text-zinc-400">About me: {member.about}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}