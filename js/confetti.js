/* =============================================
   CONFETTI ANIMATION
   Launches a burst of colourful confetti
   ============================================= */

(function (global) {
  const COLORS = [
    '#e8a0b4', '#c9748f', '#8b2252', '#c9a96e',
    '#e8d5a3', '#f9d5e5', '#a78bfa', '#fbbf24',
    '#34d399', '#60a5fa', '#f87171', '#fff'
  ];

  const SHAPES = ['circle', 'rect', 'triangle'];

  let particles = [];
  let animId = null;

  function getCanvas() {
    return document.getElementById('confetti-canvas');
  }

  function createParticle(canvas) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    return {
      x: Math.random() * canvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 5 + 2,
      size: Math.random() * 10 + 5,
      color,
      shape,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      opacity: 1,
      gravity: 0.12,
    };
  }

  function drawParticle(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;

    if (p.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.shape === 'rect') {
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    } else {
      ctx.beginPath();
      ctx.moveTo(0, -p.size / 2);
      ctx.lineTo(p.size / 2, p.size / 2);
      ctx.lineTo(-p.size / 2, p.size / 2);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  function animate() {
    const canvas = getCanvas();
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    for (const p of particles) {
      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      if (p.y > H * 0.7) p.opacity -= 0.015;
      drawParticle(ctx, p);
    }

    particles = particles.filter(p => p.opacity > 0 && p.y < H + 60);

    if (particles.length > 0) {
      animId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, W, H);
      animId = null;
    }
  }

  global.launchConfetti = function () {
    const canvas = getCanvas();
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Burst multiple waves
    for (let wave = 0; wave < 3; wave++) {
      setTimeout(() => {
        for (let i = 0; i < 80; i++) {
          particles.push(createParticle(canvas));
        }
      }, wave * 300);
    }

    if (!animId) {
      animId = requestAnimationFrame(animate);
    }
  };
})(window);
