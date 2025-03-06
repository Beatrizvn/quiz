import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/home"
      className={`place-self-center m-7 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200 ${className}`} // Adiciona a classe recebida
    >
      <Image
        src="/lamp.png"
        alt="Lamp Icon"
        width={50}
        height={50}
      />
      <span className="text-2xl font-extrabold tracking-wide text-gold-200">Quiz</span>
    </Link>
  );
}
