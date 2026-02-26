// app/components/Footer.jsx

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='border-t bg-white'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row'>
        <span>© {year} YMCA La Paz. Todos los derechos reservados.</span>
        <span>Parte del movimiento YMCA en América Latina y el Caribe.</span>
      </div>
    </footer>
  )
}
