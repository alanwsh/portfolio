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
  ExpandLess,
  ExpandMore,
  Preview,
} from "@mui/icons-material";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Switch, { SwitchProps } from "@mui/material/Switch";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppContext } from "@/context/app";
import classNames from "classnames";

export default function NavBar() {
  const router = useRouter();

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

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
    { title: "Mini Games", onClick: () => { setState(prev => ({...prev, comingSoon: true})) } },
  ]);
  const open = Boolean(anchorEl);

  const _handleClose = () => {
    setAnchorEl(null);
  };

  const _handleMenuClick = (index: number) => {
    if (routes[index].onClick){
      routes[index].onClick();
    }
    else if (routes[index].href) {
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

  const _handleDarkModeToggle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState((prev) => ({ ...prev, dark: event.target.checked }));
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
      style={{ position: "sticky", top: 0, zIndex: 9999 }}
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
                sx={{zIndex:10000}}
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
        <FormControlLabel
          label={state.dark ? "Dark" : "Light"}
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              onChange={_handleDarkModeToggle}
              checked={state.dark}
            />
          }
        />
      </div>
      <Drawer
        open={isMenuOpen}
        onClose={toggleMenu}
        anchor="right"
        hideBackdrop={true}
        disableScrollLock={true}
      >
        <Box
          onKeyDown={toggleMenu}
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm "
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                src="/logo.jpg"
                alt="Logo"
                className="h-20 w-auto"
                priority
                width={120}
                height={100}
              />
            </a>
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
                      toggleMenu();
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
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
