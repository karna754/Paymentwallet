'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SendMoney() {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')

  const handleSend = (method: string) => {
    console.log(`Sending ${amount} to ${recipient} via ${method}`)
    // Here you would typically call an API to process the payment
    setAmount('')
    setRecipient('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Money</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upi">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upi">UPI</TabsTrigger>
            <TabsTrigger value="account">Bank Account</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="qr">QR Code</TabsTrigger>
          </TabsList>
          <TabsContent value="upi" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="upi-id">UPI ID</Label>
              <Input id="upi-id" placeholder="Enter UPI ID" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="upi-amount">Amount</Label>
              <Input id="upi-amount" type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <Button onClick={() => handleSend('UPI')} className="w-full">Send via UPI</Button>
          </TabsContent>
          <TabsContent value="account" className="space-y-4">
            {/* Similar structure for bank account transfer */}
          </TabsContent>
          <TabsContent value="contact" className="space-y-4">
            {/* Similar structure for contact transfer */}
          </TabsContent>
          <TabsContent value="qr" className="space-y-4">
            {/* QR code scanner component would go here */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

