import type { ReactNode } from "react";

type SoftCardProps = {
  children: ReactNode;
  className?: string;
};

export function SoftCard({ children, className = "" }: SoftCardProps) {
  return (
    <article
      className={`rounded-[1.25rem] border border-[#c7b49b] bg-[#fff7eb]/88 p-5 shadow-[0_18px_48px_rgba(45,41,36,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#a89275] sm:rounded-[1.75rem] sm:p-6 sm:shadow-[0_22px_70px_rgba(45,41,36,0.1)] sm:hover:-translate-y-1 ${className}`}
    >
      {children}
    </article>
  );
}
