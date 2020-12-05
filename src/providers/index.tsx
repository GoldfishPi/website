import React, { FC, createContext, useContext, useState } from 'react';

interface SidebarState {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarState>({
    open: false,
    setOpen: () => {},
});

export const SidebarProvider: FC = ({ children }) => {
    const [open, setOpen] = useState(false);
    const state: SidebarState = {
        open,
        setOpen,
    };

    return <SidebarContext.Provider value={state}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => useContext(SidebarContext);
