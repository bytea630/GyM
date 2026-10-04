import React, { useEffect, useRef } from 'react';

const LiquidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      tx: width * 0.5,
      ty: height * 0.5,
      radius: 220
    };

    const handleMouseMove = (event) => {
      mouse.tx = event.clientX;
      mouse.ty = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const palette = [
      'rgba(255, 98, 71, 0.9)',
      'rgba(255, 80, 125, 0.9)',
      'rgba(255, 112, 76, 0.8)',
      'rgba(96, 225, 255, 0.85)',
      'rgba(90, 177, 255, 0.8)',
      'rgba(110, 236, 222, 0.9)',
      'rgba(205, 154, 255, 0.7)'
    ];

    const particles = [];
    const particleCount = Math.min(Math.max(90, Math.floor((width * height) / 18)), 170);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2.4 + 1.5;
        this.baseRadius = this.radius;
        this.colour = palette[Math.floor(Math.random() * palette.length)];
        this.alpha = Math.random() * 0.7 + 0.25;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += 0.02;
        this.x += this.vx + Math.sin(this.phase) * 0.3;
        this.y += this.vy + Math.cos(this.phase) * 0.22;

        if (this.x < -20 || this.x > width + 20) this.vx *= -1;
        if (this.y < -20 || this.y > height + 20) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2.2;
          this.y -= Math.sin(angle) * force * 2.2;
          this.radius = this.baseRadius + force * 3;
        } else if (this.radius > this.baseRadius) {
          this.radius -= 0.08;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.colour.replace(/0\.\d+\)\)$/, '0.8)');
        ctx.shadowBlur = 14;
        ctx.shadowColor = this.colour;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const waveLines = [];
    for (let i = 0; i < 18; i++) {
      waveLines.push({
        amplitude: 18 + Math.random() * 55,
        speed: 0.4 + Math.random() * 1.2,
        baseY: height * (0.28 + i * 0.035),
        offset: Math.random() * 1000,
        hue: i % 2 === 0 ? '255, 105, 125' : '85, 208, 255'
      });
    }

    const render = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.03;
      mouse.y += (mouse.ty - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bg.addColorStop(0, 'rgba(11, 19, 34, 0.5)');
      bg.addColorStop(0.45, 'rgba(16, 24, 42, 0.84)');
      bg.addColorStop(1, 'rgba(5, 8, 15, 1)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const time = performance.now() * 0.001;

      waveLines.forEach((line, index) => {
        ctx.beginPath();
        ctx.moveTo(0, line.baseY + Math.sin(time * line.speed + line.offset) * 12);

        for (let x = 0; x <= width; x += 8) {
          const y =
            line.baseY +
            Math.sin(x * 0.016 + time * line.speed + line.offset) * line.amplitude +
            Math.cos(x * 0.008 - time * (0.7 + index * 0.04) + line.offset) * (line.amplitude * 0.42);
          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(0, line.baseY - 60, width, line.baseY + 60);
        gradient.addColorStop(0, `rgba(${line.hue}, 0.1)`);
        gradient.addColorStop(0.25, `rgba(255, 88, 118, 0.6)`);
        gradient.addColorStop(0.5, `rgba(216, 99, 255, 0.65)`);
        gradient.addColorStop(0.75, `rgba(78, 190, 255, 0.6)`);
        gradient.addColorStop(1, `rgba(${line.hue}, 0.1)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.15;
        ctx.shadowBlur = 12;
        ctx.shadowColor = index % 2 === 0 ? 'rgba(255, 65, 120, 0.3)' : 'rgba(73, 214, 255, 0.3)';
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      const maxDistance = 170;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
};

export default LiquidCanvas;
