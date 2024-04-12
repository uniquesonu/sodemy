"use client";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import SearchBar from "./search";
import { Button } from "../ui/button";
import { ModeToggle } from "../util/theme-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 shadow-sm shadow-foreground-muted dark:shadow-neutral-500 bg-background z-50">
      <h1 className="text-2xl font-semibold">
      <Link href="/">
      sodemy
    </Link>
      </h1>
      <ul className="flex-1 items-center gap-4 pr-4 pl-16 hidden md:flex">
        <li>Categories</li>
        <SearchBar />
        <li>Sodemy Business</li>
        <li>Teach on Sodemy</li>
        <li>My learning</li>
        <ShoppingCart className="ml-auto" />
        <ModeToggle />
        <div className="space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Get Started</Button>
            </DialogTrigger>
            <DialogContent className="w-min">
              <DialogHeader>
                <DialogTitle>Start your Journey</DialogTitle>
                <DialogDescription>
                  Connect with your account for better experience.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="sign-up" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                  <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="sign-up">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sign up and start learning today</CardTitle>
                      <CardDescription>
                        Create your account today and track your status.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="sonu" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="password">Email</Label>
                        <Input id="email" placeholder="its.sonu832@gmail.com" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Create Account</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle>Welcome back, Login your account</CardTitle>
                      <CardDescription>
                        Login your account and track your status.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="password">Email</Label>
                        <Input id="email" placeholder="its.sonu832@gmail.com" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Login</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
