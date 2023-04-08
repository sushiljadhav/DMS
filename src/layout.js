import React from 'react'
import SideBar from './components/sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import { Container, Stack, Box} from '@mui/material'
import Header from './components/header/header'

function Layout() {
  return (
    <>
        <header>
            <Header></Header>
        </header>
        <main>
            <Stack direction="row">
                <aside>
                    <SideBar></SideBar>
                </aside>
                <Box component="div" className="content">
                    <Outlet></Outlet>
                </Box>
            </Stack>    
        </main>
        
    </>
  )
}

export default Layout