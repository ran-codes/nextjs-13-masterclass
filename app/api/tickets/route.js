import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch('http://localhost:40000/tickets')

  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200
  })
}