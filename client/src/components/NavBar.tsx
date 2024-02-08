"use client";

import Link from "next/link";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { FaConnectdevelop, FaMagnifyingGlass } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          {/* <MobileMenu menu={menu} /> */}
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              {/* <LogoSquare /> */}
              <FaConnectdevelop size={35} />
              <div className="ml-4 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {/* {SITE_NAME} */}
                CeylonTek
              </div>
            </Link>
            <ul className="ml-3 hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <Link
                  href={""}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="text-neutral-500  hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          Catalog
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  {/* <Icons.logo className="h-6 w-6" /> */}
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    shadcn/ui
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Beautifully designed components that you can
                                    copy and paste into your apps. Accessible.
                                    Customizable. Open Source.
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </li>
              <li>
                <Link
                  href={""}
                  className="mr-4 text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            {/* <Search /> */}
            <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
              <input
                type="text"
                name="search"
                placeholder="Search for products..."
                autoComplete="off"
                className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
              />
              <div className="absolute text-neutral-500 right-0 top-0 mr-3 flex h-full items-center">
                <FaMagnifyingGlass className="h-4" />
              </div>
            </form>
          </div>
          <div className="flex justify-end md:w-1/3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <FaRegSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
