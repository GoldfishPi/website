import React, {useState} from "react"
import { Normalize } from "styled-normalize"
import styled from "styled-components"

import LassieStyles from '@lassiebug/styles';
import Header from "@lassiebug/header";
import { Link } from "gatsby";
import Logo from "./logo";
import Sidebar from "./Sidebar";
import {useSpring, animated, config} from "react-spring";
import {useSidebar} from "../providers";


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
    const openSpring = useSpring({
        config: config.gentle,
        position:'fixed',
        transform: sidebar.open ?  `translateX(-10px)` : `translateX(-100%)`
    });
    return (
        <AppContainer>
            <Normalize />
            <Main>
                <animated.div style={openSpring}>
                    <Sidebar />
                </animated.div>
                {children}
            </Main>
            <LassieStyles/>
        </AppContainer>
    )
}

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
