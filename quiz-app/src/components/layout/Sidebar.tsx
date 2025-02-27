import Link from "next/link";
import Image from "next/image";
import LogoutButton from "../logoutButton";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 border-r border-gold-100 bg-navy-700 text-white h-screen p-4 flex flex-col items-center">
      <Link href="/home" className="mb-6 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
        <Image 
          src="/lamp.png" 
          alt="Lamp Icon" 
          width={50} 
          height={50} 
        />
        <span className="text-2xl font-extrabold tracking-wide text-gold-200">Quiz</span>
      </Link>

      {/* Navigation menu */}
      <nav className="w-full">
        <ul className="space-y-2">
          <li>
            <Link href="/home" className="block p-2 hover:border-b hover:bg-navy-800 hover:border-gold-100 hover:text-gold-100 transition-colors duration-200 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="block p-2 hover:border-b hover:bg-navy-800 hover:border-gold-100 hover:text-gold-100 transition-colors duration-200 rounded">
              My Profile
            </Link>
          </li>
          <li>
            <Link href="/" className="block p-2 hover:border-b hover:bg-navy-800 hover:border-gold-100 hover:text-gold-100 transition-colors duration-200 rounded">
              My Quizzes
            </Link>
          </li>
          <li>
            <Link href="/" className="block p-2 hover:border-b hover:bg-navy-800 hover:border-gold-100 hover:text-gold-100 transition-colors duration-200 rounded">
              Found Quizzes
            </Link>
          </li>
          <LogoutButton />
        </ul>
      </nav>
    </aside>
  );
}
