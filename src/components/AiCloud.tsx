import React, { useEffect, useRef } from 'react'

export const AiCloud: React.FC = () => {
  const cloudRef = useRef<HTMLDivElement>(null)
  const eyeLeftRef = useRef<HTMLDivElement>(null)
  const eyeRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cloud = cloudRef.current
    if (!cloud) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y

    const smooth = 0.07

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      x += (targetX - x) * smooth
      y += (targetY - y) * smooth
      cloud.style.transform = `translate(${x}px, ${y}px)`
      updateEyes(targetX, targetY)
      requestAnimationFrame(animate)
    }

    const updateEyes = (tx: number, ty: number) => {
      const moveEye = (eye: HTMLDivElement | null) => {
        if (!eye) return
        const rect = eye.getBoundingClientRect()
        const ex = rect.left + rect.width / 2
        const ey = rect.top + rect.height / 2
        const dx = (tx - ex) / 80
        const dy = (ty - ey) / 80
        eye.style.transform = `translate(${dx}px, ${dy}px)`
      }
      moveEye(eyeLeftRef.current)
      moveEye(eyeRightRef.current)
    }

    window.addEventListener('mousemove', handleMove)
    animate()
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={cloudRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 160,
        height: 100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00eaff55, #0077aa33, transparent)',
        filter: 'blur(3px)',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 35,
          left: 40,
          width: 25,
          height: 25,
          borderRadius: '50%',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 12px #00eaff',
        }}
      >
        <div
          ref={eyeLeftRef}
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#00eaff',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 35,
          right: 40,
          width: 25,
          height: 25,
          borderRadius: '50%',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 12px #00eaff',
        }}
      >
        <div
          ref={eyeRightRef}
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#00eaff',
          }}
        />
      </div>
    </div>
  )
}
