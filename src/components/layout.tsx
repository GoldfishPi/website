import React, {useState, useEffect, useRef} from "react"
import { Normalize } from "styled-normalize"
import styled from "styled-components"

import LassieStyles from '@lassiebug/styles';
import Header from "@lassiebug/header";
import { Link } from "gatsby";
import Logo from "./logo";
import Sidebar from "./Sidebar";
import {useSpring, animated, config} from "react-spring";
import {useSidebar} from "../providers";
import {useWindowWidth} from '@react-hook/window-size';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:var(--background);
  color:var(--foreground);
  font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;
  a {
      text-decoration:none;
      color:var(--text);
      font-weight: bold;
      border-bottom:2px solid var(--text);

      transition:color .5s, border-bottom-color .5s;

      &:hover {
          color:var(--magenta);
          border-bottom-color:var(--magenta);
      }
  }

  p {
      margin-bottom: var(--padding-05);
  }
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  position: relative;
  box-sizing:border-box;
`

const Layout = ({ children }: LayoutProps) => {

    const sidebar = useSidebar();
    const windowWidth = useWindowWidth();

    const sidebarRef = useRef<any>();

    const mobileBreak = windowWidth >= 1035;

    const openSpring = useSpring({
        position:mobileBreak ? 'relative':'fixed',
        transform: sidebar.open || mobileBreak ?  `translateX(0px)` : `translateX(-100%)`,
        zIndex:1
    });

    const blurSpring = useSpring({
        filter:!sidebar.open || mobileBreak ? 'blur(0px)' :'blur(5px)',
        display:'flex'
    });

    useEffect(() => {
        const handler = (e:any) => {
            if(!sidebarRef.current.contains(e.target)){
                sidebar.setOpen(false);
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler);
    }, [sidebar])

    return (
        <AppContainer>
            <Normalize />
            <Main>
                <animated.div style={openSpring} ref={sidebarRef}>
                    <div ref={sidebarRef}>
                        <Sidebar />
                    </div>
                </animated.div>
                <animated.div style={blurSpring}>
                    {children}
                </animated.div>
            </Main>
            <LassieStyles/>
        </AppContainer>
    )
}

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
