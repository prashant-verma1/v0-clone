"use client";

import React from "react";

import { Button } from "@/components/ui/button.jsx";
import { ModeToggle } from "@/components/ui/toggle-mode.jsx";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">

        <img src="logo.svg" className="w-20 h-20" />
        <ModeToggle />

        {!isSignedIn && (
          <div className="flex gap-2">
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">Sign In</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button size="sm">Sign Up</Button>
            </SignUpButton>
          </div>
        )}

        {isSignedIn && <UserButton />}

      </div>
    </nav>
  );
};

export default Navbar;