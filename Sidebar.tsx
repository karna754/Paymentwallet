import { Home, Send, List, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Sidebar({ setActivePage }) {
  return (
    <nav className="w-64 bg-secondary p-4">
      <ul className="space-y-2">
        <li>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActivePage('dashboard')}>
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActivePage('send')}>
            <Send className="mr-2 h-4 w-4" />
            Send Money
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActivePage('transactions')}>
            <List className="mr-2 h-4 w-4" />
            Transactions
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActivePage('settings')}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </li>
      </ul>
    </nav>
  )
}

