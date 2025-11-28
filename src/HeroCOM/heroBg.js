import React, { useEffect, useRef } from "react"


export function ProjectBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      // Fixed: use innerWidth instead of undefined window.a
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Conversation bubbles data
    const bubbles = []
    const maxBubbles = 15
    
    // Create conversation bubble
    class ConversationBubble {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 80 + 40
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.3 + 0.1
        this.pulse = Math.random() * Math.PI * 2
        this.type = Math.random() > 0.5 ? 'user' : 'ai'
        this.dots = []
        
        // Create typing dots for some bubbles
        if (Math.random() > 0.7) {
          for (let i = 0; i < 3; i++) {
            this.dots.push({
              delay: i * 200,
              opacity: 0
            })
          }
        }
      }
      
      update(time) {
        this.x += this.speedX
        this.y += this.speedY
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
        
        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
        
        // Update pulse
        this.pulse += 0.02
        
        // Update typing dots
        this.dots.forEach((dot, index) => {
          const dotTime = (time + dot.delay) % 2000
          dot.opacity = Math.sin(dotTime * 0.003) * 0.5 + 0.5
        })
      }
      
      draw(ctx, time) {
        ctx.save()
        
        // Bubble glow
        const glowSize = this.size + Math.sin(this.pulse) * 10
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, glowSize
        )
        
        if (this.type === 'ai') {
          gradient.addColorStop(0, `rgba(0, 245, 255, ${this.opacity * 0.4})`)
          gradient.addColorStop(0.5, `rgba(0, 123, 255, ${this.opacity * 0.2})`)
          gradient.addColorStop(1, 'rgba(0, 123, 255, 0)')
        } else {
          gradient.addColorStop(0, `rgba(255, 242, 0, ${this.opacity * 0.3})`)
          gradient.addColorStop(0.5, `rgba(255, 165, 0, ${this.opacity * 0.15})`)
          gradient.addColorStop(1, 'rgba(255, 165, 0, 0)')
        }
        
        ctx.fillStyle = gradient
        ctx.fillRect(this.x - glowSize, this.y - glowSize, glowSize * 2, glowSize * 2)
        
        // Main bubble
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.type === 'ai' 
          ? `rgba(0, 123, 255, ${this.opacity * 0.1})` 
          : `rgba(255, 242, 0, ${this.opacity * 0.08})`
        ctx.fill()
        
        // Bubble border
        ctx.strokeStyle = this.type === 'ai' 
          ? `rgba(0, 245, 255, ${this.opacity * 0.3})` 
          : `rgba(255, 242, 0, ${this.opacity * 0.25})`
        ctx.lineWidth = 1
        ctx.stroke()
        
        // Draw typing dots if present
        if (this.dots.length > 0) {
          this.dots.forEach((dot, index) => {
            const dotX = this.x - 15 + (index * 10)
            const dotY = this.y
            
            ctx.beginPath()
            ctx.arc(dotX, dotY, 2, 0, Math.PI * 2)
            ctx.fillStyle = this.type === 'ai' 
              ? `rgba(0, 245, 255, ${dot.opacity * 0.8})` 
              : `rgba(255, 242, 0, ${dot.opacity * 0.8})`
            ctx.fill()
          })
        }
        
        ctx.restore()
      }
    }
    
    // Initialize bubbles
    for (let i = 0; i < maxBubbles; i++) {
      bubbles.push(new ConversationBubble())
    }
    
    // Animation loop
    const animate = (time) => {
      // Clear with dark gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, '#000011')
      bgGradient.addColorStop(0.5, '#000008')
      bgGradient.addColorStop(1, '#000000')
      
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw bubbles
      bubbles.forEach(bubble => {
        bubble.update(time)
        bubble.draw(ctx, time)
      })
      
      // Draw connecting lines between nearby bubbles
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x
          const dy = bubbles[i].y - bubbles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 200) {
            const opacity = (200 - distance) / 200 * 0.1
            ctx.beginPath()
            ctx.moveTo(bubbles[i].x, bubbles[i].y)
            ctx.lineTo(bubbles[j].x, bubbles[j].y)
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      
      // Add floating particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time * 0.001 + i) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.0008 + i * 0.1) * 0.5 + 0.5) * canvas.height
        const size = Math.sin(time * 0.002 + i * 0.2) * 1 + 1
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate(0)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full block"
        style={{ zIndex: -1 }}
      />
    </>
  )
}

export default ProjectBackground
