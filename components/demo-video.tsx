"use client"

import { useRef, useState } from "react"

interface DemoVideoProps {
  src: string
  poster: string
  label: string
}

export function DemoVideo({ src, poster, label }: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <figure className="relative mx-auto mt-2 w-full rotate-[0.6deg] border-[1.5px] border-border-strong bg-bg-elevated p-2 pb-8 shadow-[4px_4px_0_0_var(--border-strong)] transition-transform hover:rotate-0">
      <span className="tape" aria-hidden />
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onClick={toggle}
        className="block aspect-video w-full cursor-pointer bg-bg-subtle object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`Play ${label}`}
          className="absolute left-1/2 top-[calc(50%-12px)] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[#1b1914] bg-highlight font-mono text-[18px] text-[#1b1914] shadow-[3px_3px_0_0_#1b1914] transition-transform hover:scale-105"
        >
          ▶
        </button>
      )}
      <figcaption className="hand absolute bottom-1 left-3 text-[17px] text-text-secondary">
        {playing ? "tap to pause" : `${label.toLowerCase()}, no audio, real footage`}
      </figcaption>
    </figure>
  )
}
