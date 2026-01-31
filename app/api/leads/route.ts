import { NextResponse } from 'next/server'

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzNkaCJSqjJJfTSoaS_twEA-zlmjcJoojn8BobZ6INO2Rpgzbn6n3wWkT6uDLd9kw133g/exec'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Send to Google Sheets
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        source: data.source || 'telegram_join',
      }),
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    )
  }
}
