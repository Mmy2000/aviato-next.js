import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from "next/link";
import { buttonVariants } from './ui/button';


const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Aviato<span className="text-green-600 ms-1">shopper</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            <Link
              href="/api/auth/register"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Sign up
            </Link>
            <Link
              href="/api/auth/login"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Dashboard ✨
            </Link>
            <Link
              href="/api/auth/logout"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Sign out
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar