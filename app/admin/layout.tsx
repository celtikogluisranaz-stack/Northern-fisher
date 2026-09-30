import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const ADMIN_EMAIL = 'celtikogluisranaz@gmail.com' // replace with your real email

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser()

  const email = user?.emailAddresses[0]?.emailAddress

  if (email !== ADMIN_EMAIL) {
    redirect('/')
  }

  return <>{children}</>
}