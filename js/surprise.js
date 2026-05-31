/* =============================================
   SURPRISE PAGE INTERACTIONS
   Gift box open, carousel, candles, flip cards
   ============================================= */

(function () {

  // ─── GIFT BOX ───────────────────────────────
  const giftBox = document.getElementById('gift-box');
  const revealContent = document.getElementById('reveal-content');
  const surpriseIntro = document.getElementById('surprise-intro');

  if (giftBox) {
    giftBox.addEventListener('click', () => {
      giftBox.classList.add('opened');

      // Launch some confetti on open
      if (typeof launchConfetti === 'function') {
        setTimeout(launchConfetti, 300);
      }

      // Show reveal after animation
      setTimeout(() => {
        surpriseIntro.style.display = 'none';
        revealContent.classList.remove('hidden');
        revealContent.classList.add('fade-in');

        // Init carousel
        initCarousel();
        buildDots();
      }, 1000);
    });
  }

  // ─── CANDLE BLOW ─────────────────────────────
  const blowBtn = document.getElementById('blow-btn');
  let blown = false;

  if (blowBtn) {
    blowBtn.addEventListener('click', () => {
      if (blown) return;
      blown = true;

      const candles = document.querySelectorAll('.candle');
      candles.forEach((c, i) => {
        setTimeout(() => {
          c.classList.add('blown');
        }, i * 200);
      });

      blowBtn.textContent = '🎉 Wish granted!';
      blowBtn.disabled = true;
      blowBtn.style.opacity = '0.7';

      // Small confetti burst
      if (typeof launchConfetti === 'function') {
        setTimeout(launchConfetti, 600);
      }
    });
  }

  // ─── REASONS CAROUSEL ────────────────────────
  const slides = document.querySelectorAll('.reason-slide');
  const prevBtn = document.getElementById('prev-reason');
  const nextBtn = document.getElementById('next-reason');
  const dotsContainer = document.getElementById('reason-dots');
  let current = 0;

  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');

    // Update dots
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function initCarousel() {
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    // Auto-advance
    setInterval(() => goTo(current + 1), 4000);
  }

  // ─── VIRTUAL GIFT CARDS ──────────────────────
  window.openGift = function (card) {
    card.classList.toggle('flipped');
  };

})();
