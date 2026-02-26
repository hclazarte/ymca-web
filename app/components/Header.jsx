// app/components/Header.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#programas', label: 'Programas' },
  { href: '#voluntariado', label: 'Voluntariado' },
  { href: '#contacto', label: 'Contacto' }
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-20 border-b bg-white/90 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4'>
        <Link href='/' className='flex items-center gap-2'>
          {/* Luego reemplazamos esto por el logo YMCA */}
          <img src='/ymca.svg' alt='YMCA Logo' className='h-8 w-auto' />
          <div className='leading-tight'>
            <div className='text-sm font-bold uppercase tracking-wide'>
              YMCA La Paz
            </div>
            <div className='text-[11px] text-slate-500'>
              Asociación Cristiana de Jóvenes
            </div>
          </div>
        </Link>

        {/* Navegación escritorio */}
        <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-slate-700 hover:text-blue-700'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className='md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-slate-700 hover:bg-slate-100'
          onClick={() => setOpen(!open)}
          aria-label='Abrir menú'
        >
          {/* Ícono hamburguesa */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <nav className='border-t bg-white px-4 py-2 text-sm md:hidden'>
          <div className='mx-auto flex max-w-6xl flex-col gap-2'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='py-1 text-slate-700 hover:text-blue-700'
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
