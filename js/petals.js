/* =============================================
   FLOATING PETALS / PARTICLES ANIMATION
   Aesthetic falling petals for all pages
   ============================================= */

(function () {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, petals = [];

  // Detect if we're on the dark (surprise) page
  const isDark = document.body.classList.contains('page-surprise');

  const PETAL_COUNT = window.innerWidth < 600 ? 22 : 40;

  const SHAPES = ['🌸', '🌺', '✿', '❀', '🌷', '🍀'];
  const DARK_SHAPES = ['✦', '✧', '·', '★', '⋆', '˚'];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function createPetal() {
    const shapes = isDark ? DARK_SHAPES : SHAPES;
    return {
      x: randomBetween(0, W),
      y: randomBetween(-120, -10),
      size: randomBetween(isDark ? 6 : 14, isDark ? 18 : 28),
      speedY: randomBetween(0.4, 1.4),
      speedX: randomBetween(-0.6, 0.6),
      rotation: randomBetween(0, 360),
      rotSpeed: randomBetween(-1.5, 1.5),
      opacity: randomBetween(0.2, isDark ? 0.7 : 0.55),
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      sway: randomBetween(0.4, 1.2),
      swayOffset: randomBetween(0, Math.PI * 2),
    };
  }

  function init() {
    resize();
    petals = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      const p = createPetal();
      p.y = randomBetween(-H, H); // scatter initial
      petals.push(p);
    }
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.01;

    for (const p of petals) {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const swayX = Math.sin(t * p.sway + p.swayOffset) * 18;
      ctx.translate(p.x + swayX, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      if (isDark) {
        ctx.fillStyle = `hsl(${randomBetween(30, 50)}, 80%, 75%)`;
        ctx.fillText(p.shape, 0, 0);
      } else {
        ctx.fillText(p.shape, 0, 0);
      }

      ctx.restore();

      // Update
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > H + 40 || p.x < -80 || p.x > W + 80) {
        // Reset to top
        Object.assign(p, createPetal());
        p.y = -40;
        p.x = randomBetween(0, W);
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
  });

  init();
  draw();
})();
