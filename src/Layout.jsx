import React from 'react'
import { Navbar } from "../src/components"
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
