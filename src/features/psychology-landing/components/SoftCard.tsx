import type { ReactNode } from "react";

type SoftCardProps = {
  children: ReactNode;
  className?: string;
};

export function SoftCard({ children, className = "" }: SoftCardProps) {
  return (
    <article
      className={`rounded-[1.75rem] border border-[#ded0bf] bg-[#fffaf2]/72 p-6 shadow-[0_22px_70px_rgba(45,41,36,0.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#c5b39d] ${className}`}
    >
      {children}
    </article>
  );
}
