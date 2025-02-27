import Link from "next/link";
import Image from "next/image";
import LogoutButton from "../logoutButton";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 border-r border-navy-900 bg-palette-black-1 text-white h-screen transition-transform -translate-x-full sm:translate-x-0 flex flex-col justify-between">
      {/* Logo e título */}
      <Link href="/home" className="place-self-center m-7 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200">
        <Image
          src="/lamp.png"
          alt="Lamp Icon"
          width={50}
          height={50}
        />
        <span className="text-2xl font-extrabold tracking-wide text-gold-200">Quiz</span>
      </Link>

      {/* Navigation menu */}
      <nav className="flex-grow px-6 py-4 overflow-y-auto">
        <ul className="space-y-2">
          <li className="border-b border-transparent hover:border-palette-lavender-1">
            <Link href="/home" className="flex items-center gap-2 p-2 hover:border-palette-lavender-1 hover:text-palette-lavender-1 transition-colors duration-200">
              <Image
                src="/assets/alt-left-layout.svg"
                alt="Home Icon"
                width={20}
                height={20}
              />
              <span className="font-semibold">Home</span>
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-palette-lavender-1">
            <Link href="/" className="flex items-center gap-2 p-2 hover:border-palette-lavender-1 hover:text-palette-lavender-1 transition-colors duration-200">
              <Image
                src="/assets/alt-user.svg" 
                alt="Profile Icon"
                width={20}
                height={20}
              />
              <span className="font-semibold">My Profile</span>
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-palette-lavender-1">
            <Link href="/" className="flex items-center gap-2 p-2 hover:border-palette-lavender-1 hover:text-palette-lavender-1 transition-colors duration-200">
              <Image
                src="/assets/alt-book.svg" 
                alt="Quizzes Icon"
                width={20}
                height={20}
              />
              <span className="font-semibold">My Quizzes</span>
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-palette-lavender-1">
            <Link href="/" className="flex items-center gap-2 p-2 hover:border-palette-lavender-1 hover:text-palette-lavender-1 transition-colors duration-200">
              <Image
                src="/assets/alt-bulb.svg" // Caminho para o SVG
                alt="Found Quizzes Icon"
                width={20}
                height={20}
              />
              <span className="font-semibold">Found Quizzes</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botão de Logout no final */}
      <div className="p-4 px-6 mt-auto place-content-center">
        <LogoutButton />
      </div>
    </aside>
  );
}
