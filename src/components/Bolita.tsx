'use client'

import { useEffect, useRef } from 'react'

export default function Bolita() {
  const bolitaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bolitaRef.current
    if (!el) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let dx = 2
    let dy = 1.5

    const animate = () => {
      x += dx
      y += dy

      if (x > window.innerWidth - 30 || x < 0) dx *= -1
      if (y > window.innerHeight - 30 || y < 0) dy *= -1

      el.style.transform = `translate(${x}px, ${y}px)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div
      ref={bolitaRef}
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full opacity-70 pointer-events-none z-[9999] blur-md shadow-xl transition-transform duration-100"
    />
  )
}
