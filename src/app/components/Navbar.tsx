import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href={'/'}
        className="uppercase font-bold text-base h-12 flex items-center"
      >
        Next Store
      </Link>
      <div className='flex items-center gap-8'>
        <SignedIn>
          Usuario Logado
        </SignedIn>
        <SignedOut>
Fazer login
        </SignedOut>
      </div>
    </nav>
  )
}

export default Navbar
