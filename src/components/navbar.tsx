"use client";

import React, { useState, ReactNode } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  KeyboardArrowDown,
  BusinessCenter,
  Apps,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAppContext } from "@/context/app";
import classNames from "classnames";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const router = useRouter();

  type MenuItemType = {
    icon: ReactNode;
    title: String;
    description?: String;
    href: string;
  };

  type SubMenu = {
    open: boolean;
    list: Array<MenuItemType>;
  };

  type MenuType = {
    title: String;
    href?: string;
    menu?: SubMenu;
    onClick?: () => void;
  };

  const _handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, setState } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [routes, setRoutes] = useState<Array<MenuType>>([
    { title: "Home", href: "/" },
    {
      title: "Portfolio",
      menu: {
        open: false,
        list: [
          {
            icon: <BusinessCenter />,
            title: "Experiences",
            description: "My experience in industry",
            href: "/portfolio/experience",
          },
          {
            icon: <Apps />,
            title: "Projects",
            description:
              "Projects I ever worked on including full time and freelance",
            href: "/portfolio/project",
          },
        ],
      },
    },
    {
      title: "Mini Games",
      onClick: () => {
        setState((prev) => ({ ...prev, comingSoon: true }));
      },
    },
  ]);
  const open = Boolean(anchorEl);

  const _handleClose = () => {
    setAnchorEl(null);
  };

  const _handleMenuClick = (index: number) => {
    if (routes[index].onClick) {
      routes[index].onClick();
    } else if (routes[index].href) {
      router.push(routes[index].href);
    } else {
      setRoutes((prevRoutes) =>
        prevRoutes.map((route, i) =>
          i === index && route.menu
            ? { ...route, menu: { ...route.menu, open: !route.menu.open } }
            : route
        )
      );
    }
  };

  const _handleSubmenuClick = (href: string) => {
    router.push(href);
    toggleMenu();
  };

  return (
    <nav
      className={classNames(
        "mx-auto flex items-center justify-between p-1 pt-0 lg:px-8 w-full rounded-sm",
        {
          "bg-white": !state.dark,
          "bg-black text-white": state.dark, // Adjust classes for dark mode
        }
      )}
      aria-label="Global"
      style={{ position: "sticky", top: 0, zIndex: 99 }}
    >
      <div className="flex">
        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            className="h-[75%] w-auto rounded-full m-1"
            priority
            width={60}
            height={60}
          />
          <span className="text-md font-semibold pl-2">ALAN</span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white text-gray-700"
          onClick={toggleMenu}
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
      <div className="hidden lg:flex lg:gap-x-12 flex-1 justify-center">
        {routes.map((route, index) => {
          return route.href || route.onClick ? (
            <Button
              className="text-md font-semibold leading-6 text-gray-900 dark:text-white"
              style={{ textTransform: "none" }}
              onClick={() => {
                _handleMenuClick(index);
              }}
            >
              {route.title}
            </Button>
          ) : (
            <React.Fragment key={index}>
              <Button
                className="text-md font-semibold leading-6 text-gray-900 dark:text-white"
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
                sx={{ zIndex: 99 }}
                onClose={_handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {route.menu?.list.map((menu: MenuItemType, i: number) => (
                  <Link href={menu.href} passHref key={i}>
                    <MenuItem onClick={_handleClose}>
                      <div className="group relative flex items-center gap-x-6 p-4 text-sm">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:text-gray-900">
                          {menu.icon}
                        </div>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold text-gray-900 dark:text-white"
                          >
                            {menu.title}
                            <span className="absolute inset-0"></span>
                          </a>
                          <p className="mt-1 text-gray-600 whitespace-normal dark:text-gray-300">
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
      <div className="hidden lg:flex z-9999">
        <ThemeToggle />
      </div>
      <Drawer
        open={isMenuOpen}
        onClose={toggleMenu}
        anchor="right"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        style={{ zIndex: 99 }}
      >
        <Box
          onKeyDown={toggleMenu}
          className="bg-white dark:bg-black px-6 py-6 sm:max-w-sm"
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            maxWidth: "sm",
            overflowY: "auto",
          }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center justify-between">
              <Image
                src="/logo.jpg"
                alt="Logo"
                className="h-20 w-auto rounded-full"
                priority
                width={60}
                height={60}
              />
              <span className="text-md font-semibold pl-2">ALAN</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <List>
            {routes.map((route, index) => (
              <>
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      _handleMenuClick(index);
                      if (!route.menu) {
                        toggleMenu();
                      }
                    }}
                  >
                    <ListItemText primary={route.title} />
                    {route.menu &&
                      (route.menu.open ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {route.menu?.open && (
                  <Collapse in={route.menu.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {route.menu?.list.map((menu: MenuItemType, i: number) => (
                        <ListItemButton
                          key={i}
                          onClick={() => {
                            _handleSubmenuClick(menu.href);
                          }}
                        >
                          <ListItemIcon>{menu.icon}</ListItemIcon>
                          <ListItemText secondary={menu.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider />
              </>
            ))}
            <ListItem>
              <ThemeToggle />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
