/* =============================================
   BIRTHDAY COUNTDOWN TO JUNE 23
   ============================================= */

(function () {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  const subEl = document.getElementById('countdown-sub');

  if (!daysEl) return;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function getNextBirthday() {
    const now = new Date();
    const year = now.getFullYear();

    // Birthday: June 23
    let bday = new Date(year, 5, 23, 0, 0, 0); // month 5 = June (0-indexed)

    // If birthday has already passed this year, target next year
    if (now > bday) {
      bday = new Date(year + 1, 5, 23, 0, 0, 0);
    }

    return bday;
  }

  function isBirthday() {
    const now = new Date();
    return now.getMonth() === 5 && now.getDate() === 23;
  }

  function tick() {
    if (isBirthday()) {
      daysEl.textContent = '🎂';
      hoursEl.textContent = '🌸';
      minsEl.textContent = '✨';
      secsEl.textContent = '🎉';
      if (subEl) {
        subEl.textContent = "🎊 IT'S SNIJA'S BIRTHDAY TODAY!! 🎊";
        subEl.style.color = 'var(--deep-rose)';
        subEl.style.fontSize = '1.1rem';
        subEl.style.fontFamily = 'var(--font-script)';
      }
      return;
    }

    const now = new Date();
    const target = getNextBirthday();
    const diff = target - now;

    if (diff <= 0) {
      tick(); return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent = pad(minutes);
    secsEl.textContent = pad(seconds);

    // Add a little scale pulse to seconds
    secsEl.style.transform = 'scale(1.08)';
    setTimeout(() => { secsEl.style.transform = 'scale(1)'; }, 200);
  }

  tick();
  setInterval(tick, 1000);
})();
