import Link from "next/link";
import { UserNav } from "@/components/shared/user-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Sodemy</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
} 