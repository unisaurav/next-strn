import { Button } from '@/components/ui/button'
import Image from 'next/image'
import PasswordCard from './PasswordCard'

export default function Home() {
  return (
    <main className="flex flex-row justify-center py-16">
      <PasswordCard />
    </main>
  )
}
