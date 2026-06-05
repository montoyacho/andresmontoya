import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 shrink-0"
      aria-label="Andrés Montoya"
    >
      <Image
        src="/images/logos/logo.png"
        alt="Andrés Montoya"
        width={40}
        height={40}
      />

      <span className="text-2xl font-bold tracking-wide text-white">
        ANDRÉS <span className="text-cyan-400">MONTOYA</span>
      </span>
    </Link>
  );
}