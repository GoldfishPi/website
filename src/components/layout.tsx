import React from "react"
import { Normalize } from "styled-normalize"
import styled from "styled-components"

import { Colors, Typeography, Shadows, Borders, Padding } from '@lassiebug/styles';
import Footer from "./footer"
import Header from "./header"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:var(--background);
  color:var(--foreground);
  a {
      text-decoration:none;
      color:var(--foreground);
  }
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  position: relative;
  padding:var(--padding);
`

const Layout = ({ children }: LayoutProps) => (
    <AppContainer>
        <Normalize />
        <Header />
        <Main>{children}</Main>

        <Colors/>
        <Typeography/>
        <Shadows/>
        <Borders/>
        <Padding/>

        <Footer />
    </AppContainer>
)

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
