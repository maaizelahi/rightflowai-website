"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-600 hover:text-gray-900 transition-colors",
        isActive && "text-[#2A4494] font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
}