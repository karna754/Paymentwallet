'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QrCode, CreditCard, Smartphone, Gift } from 'lucide-react'

export default function Dashboard() {
  const [balance, setBalance] = useState(5000)

  const addMoney = (amount: number) => {
    setBalance(prevBalance => prevBalance + amount)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Available Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">₹{balance.toFixed(2)}</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="flex flex-col items-center justify-center h-24">
              <QrCode className="h-8 w-8 mb-2" />
              <span>Scan QR</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center justify-center h-24">
              <CreditCard className="h-8 w-8 mb-2" />
              <span>Pay by Card</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center justify-center h-24">
              <Smartphone className="h-8 w-8 mb-2" />
              <span>Mobile Recharge</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center justify-center h-24">
              <Gift className="h-8 w-8 mb-2" />
              <span>Rewards</span>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add Money</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button onClick={() => addMoney(500)} className="w-full">Add ₹500</Button>
            <Button onClick={() => addMoney(1000)} className="w-full">Add ₹1000</Button>
            <div className="flex space-x-2">
              <Input type="number" placeholder="Enter amount" />
              <Button onClick={() => addMoney(100)}>Add</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

