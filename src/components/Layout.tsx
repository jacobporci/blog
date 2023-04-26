import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  children: JSX.Element;
}

type Link = {
  label: string;
  href: string;
};

const LINKS: Array<Link> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Me",
    href: "/me",
  },
];

export default function Layout({ children }: Props) {
  const router = useRouter();
  const isDark = useMemo(() => router.asPath === "", [router.asPath]);

  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="p-3 flex justify-center sticky top-0"
        style={{
          backgroundColor: isDark ? "#161617cc" : "white",
        }}
      >
        {LINKS.map(({ href, label }) => (
          <Link
            key={label}
            className={`${isDark ? "text-white" : "text-black"}`}
            href={href}
          >
            <div className="px-5 text-xs font-light">{label}</div>
          </Link>
        ))}
      </div>
      {children}
    </main>
  );
}
