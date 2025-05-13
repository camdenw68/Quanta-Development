"use client"
import InteractiveQCanvas from "@/components/InteractiveQcanvas"

export default function FloatingQ() {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
      <InteractiveQCanvas />
    </div>
  )
}
