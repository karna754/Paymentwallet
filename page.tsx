'use client'

import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import SendMoney from './components/SendMoney'
import Transactions from './components/Transactions'
import Settings from './components/Settings'
import { Button } from "@/components/ui/button"

export default function AdvancedPaytmWallet() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'send':
        return <SendMoney />
      case 'transactions':
        return <Transactions />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar setActivePage={setActivePage} />
          <main className="flex-1 p-4">
            {renderPage()}
          </main>
        </div>
        <Button
          className="fixed bottom-4 right-4 bg-primary text-primary-foreground"
          onClick={() => setActivePage('settings')}
        >
          AI Financial Advisor
        </Button>
      </div>
    </ThemeProvider>
  )
}

