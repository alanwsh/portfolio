"use client";

import React, { useState, ReactNode, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  KeyboardArrowDown,
  BusinessCenter,
  Apps,
  IntegrationInstructions,
  School,
} from "@mui/icons-material";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Link from "next/link";

export default function NavBar() {
  type MenuItemType = {
    icon: ReactNode,
    title: String;
    description?: String;
    href: string;
  };

  type MenuType = {
    title: String;
    href?: string;
    menu?: Array<MenuItemType>;
  };

  const _handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {


  }, )
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [routes, setRoutes] = useState<Array<MenuType>>([
    { title: "Home", href: "/" },
    { title: "About Me", href: "/about" },
    {
      title: "Portfolio",
      menu: [
        {
          icon: <BusinessCenter />,
          title: "Experiences",
          description: "My experience in industry",
          href: '/portfolio/experience',
        },
        {
          icon: <Apps />,
          title: "Projects",
          description:
            "Projects I ever worked on including full time and freelance",
          href: '/portfolio/project',
        },
        {
          icon: <IntegrationInstructions />,
          title: "Skills",
          description: "Languages & tools I use",
          href: '/portfolio/skills',
        },
        {
          icon: <School />,
          title: "Education",
          href: '',
        },
      ],
    },
    { title: "Mini Games", href: "/about" },
  ]);
  const open = Boolean(anchorEl);

  const _handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            className="h-20 w-auto"
            priority
            width={120}
            height={100}
          />
          <span className="text-gray-900 text-md font-semibold">ALAN</span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {routes.map((route, index) => {
          return route.href ? (
            <Link key={index} passHref href={route.href}>
              <Button
                className="text-md font-semibold leading-6 text-gray-900"
                style={{ textTransform: "none" }}
              >
                {route.title}
              </Button>
            </Link>
          ) : (
            <React.Fragment key={index}>
              <Button
                className="text-md font-semibold leading-6 text-gray-900"
                onClick={_handleClick}
                style={{ textTransform: "none" }}
                endIcon={<KeyboardArrowDown />}
              >
                {route.title}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={_handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {route.menu?.map((menu: MenuItemType, i: number) => (
                  <Link href={menu.href} passHref key={i}>
                    <MenuItem onClick={_handleClose}>
                      <div className="group relative flex items-center gap-x-6 p-4 text-sm">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            { menu.icon }
                        </div>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold text-gray-900"
                          >
                            {menu.title}
                            <span className="absolute inset-0"></span>
                          </a>
                          <p className="mt-1 text-gray-600 whitespace-normal">
                            {menu.description}
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </React.Fragment>
          );
        })}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
    </nav>
  );
}
