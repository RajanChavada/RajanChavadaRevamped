"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  t: number
}

const LIFETIME_MS = 900

export function PencilTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const points: Point[] = []
    let frame = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = parent.clientWidth * dpr
      canvas.height = parent.clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect()
      points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t: performance.now() })
      if (!frame) frame = requestAnimationFrame(draw)
    }

    const draw = () => {
      const now = performance.now()
      while (points.length && now - points[0].t > LIFETIME_MS) points.shift()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.strokeStyle = color || "#e8501a"
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1]
        const b = points[i]
        ctx.globalAlpha = Math.max(0, 1 - (now - b.t) / LIFETIME_MS) * 0.55
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
      frame = points.length ? requestAnimationFrame(draw) : 0
    }

    resize()
    window.addEventListener("resize", resize)
    parent.addEventListener("pointermove", onMove)
    return () => {
      window.removeEventListener("resize", resize)
      parent.removeEventListener("pointermove", onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />
}
