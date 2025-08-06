"use client"

import type React from "react"

import { Provider } from "react-redux"
import { store } from "@/lib/store"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  )
}
