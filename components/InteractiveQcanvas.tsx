"use client"

import { useEffect, useRef, useState } from "react"

type Pixel = {
  x: number
  y: number
  vx: number
  vy: number
  color: [number, number, number]
  originalX: number
  originalY: number
}

export default function InteractiveQCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [isClient, setIsClient] = useState(false)

  const canvasWidth = 180
  const canvasHeight = 170
  const effectRadius = 51
  const forceStrength = 1.5
  const pixelGap = 1

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    // Create image inside useEffect to ensure we're in browser environment
    const image = new window.Image()
    image.src = "/logo-q-blue.png"
    image.crossOrigin = "anonymous"
    imageRef.current = image

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = -1000
    let mouseY = -1000

    const friction = 0.85
    const spring = 0.1

    let pixels: Pixel[] = []

    image.onload = () => {
      const tempCanvas = document.createElement("canvas")
      tempCanvas.width = 96
      tempCanvas.height = 96
      const tempCtx = tempCanvas.getContext("2d")!
      tempCtx.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height)
      const imgData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data

      for (let y = 0; y < tempCanvas.height; y += pixelGap) {
        for (let x = 0; x < tempCanvas.width; x += pixelGap) {
          const i = (y * tempCanvas.width + x) * 4
          const r = imgData[i]
          const g = imgData[i + 1]
          const b = imgData[i + 2]
          const a = imgData[i + 3]
          const brightness = (r + g + b) / 3

          if (a > 100 && brightness < 250) {
            const normX = (x / tempCanvas.width) * canvasWidth
            const normY = (y / tempCanvas.height) * canvasHeight
            pixels.push({
              x: normX,
              y: normY,
              vx: 0,
              vy: 0,
              originalX: normX,
              originalY: normY,
              color: [r, g, b], // ✅ Full vibrance
            })
          }
        }
      }

      animate()
    }

    function animate() {
      const ctx = canvasRef.current?.getContext("2d")
      if (!ctx) return
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      for (let p of pixels) {
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < effectRadius) {
          const angle = Math.atan2(dy, dx)
          const force = (1 - dist / effectRadius) * forceStrength
          p.vx += Math.cos(angle) * force
          p.vy += Math.sin(angle) * force
        }

        const ox = p.originalX - p.x
        const oy = p.originalY - p.y
        p.vx += ox * spring
        p.vy += oy * spring

        p.vx *= friction
        p.vy *= friction

        p.x += p.vx
        p.y += p.vy

        // ✅ Use exact image color — full vibrance, no dimming
        const [r, g, b] = p.color
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvasWidth / rect.width
      const scaleY = canvasHeight / rect.height
      mouseX = (e.clientX - rect.left) * scaleX
      mouseY = (e.clientY - rect.top) * scaleY
    }

    function handleMouseLeave() {
      mouseX = -1000
      mouseY = -1000
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isClient])

  // Only render canvas on client-side
  if (!isClient) {
    return (
      <div className="relative w-[180px] h-[170px] -ml-2">
        {/* Optional placeholder while loading */}
        <div className="absolute inset-0 bg-transparent" />
      </div>
    )
  }

  return (
    <div className="relative w-[180px] h-[170px] -ml-2">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="absolute inset-0 w-full h-full bg-transparent"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  )
}