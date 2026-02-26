// app/layout.jsx
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

export const metadata = {
  title: 'YMCA La Paz - Asociación Cristiana de Jóvenes',
  description:
    'YMCA La Paz: formación en valores, liderazgo juvenil y servicio a la comunidad en Bolivia.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
