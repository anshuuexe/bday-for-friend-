# 🌸 Happy Birthday Snija — Aesthetic Website

A beautiful, multi-page birthday website crafted for **Snija**, with a romantic dark botanical aesthetic — completely different from the original template. Birthday: **June 23rd**.

---

## 🎨 Design Theme

| Element | Value |
|---|---|
| Palette | Deep plum, dusty rose, warm cream, soft gold |
| Fonts | Great Vibes (script), Cormorant Garamond (serif), Josefin Sans (sans) |
| Vibe | Romantic · Moody · Elegant · Botanical |
| Animation | Floating petals, confetti burst, countdown timer |

---

## 📄 Pages

| File | Description |
|---|---|
| `index.html` | Main hero page with countdown timer + about cards |
| `wishes.html` | Clickable envelope letter + animated wish cards |
| `gallery.html` | Polaroid photo gallery + timeline + quote wall |
| `surprise.html` | Gift box reveal, birthday cake, reasons carousel, flip cards |

---

## ✅ Completed Features

- [x] **Hero page** — animated script name, heart pulse, date badge, countdown
- [x] **Countdown timer** — live countdown to June 23 (auto detects birthday)
- [x] **Floating petals** — canvas animation (flowers on light pages, stars on dark)
- [x] **Envelope letter** — click-to-open with flip animation + personal letter
- [x] **Wish cards** — animated 6-card grid
- [x] **Polaroid gallery** — with tilt rotation hover effect (replace placeholders with real photos)
- [x] **Timeline** — beautiful alternating story timeline
- [x] **Gift box reveal** — click to open, reveals surprise content
- [x] **Birthday cake** — CSS cake with animated flames + blow-out button
- [x] **Reasons carousel** — auto-advancing slideshow of "why you're amazing"
- [x] **Virtual flip gift cards** — hover/click to reveal messages
- [x] **Confetti burst** — colourful particle explosion
- [x] **Fully responsive** — works on mobile, tablet, desktop

---

## 📁 File Structure

```
index.html        → Main page
wishes.html       → Wishes & letter page
gallery.html      → Memories & photo gallery
surprise.html     → Surprise reveal page
css/
  style.css       → Complete aesthetic stylesheet
js/
  petals.js       → Floating petal/star canvas animation
  countdown.js    → Birthday countdown timer
  confetti.js     → Confetti burst on celebration
  surprise.js     → Gift box, carousel, candles, flip cards
images/           → Add photos here (photo1.jpg, photo2.jpg, etc.)
README.md
```

---

## 📷 Adding Real Photos (Gallery)

1. Add your images to the `images/` folder (e.g. `photo1.jpg`)
2. In `gallery.html`, replace `<div class="polaroid-placeholder">🌸</div>` with:
   ```html
   <img src="images/photo1.jpg" alt="memory" />
   ```

---

## 🚀 Next Steps / Ideas

- [ ] Add a background music player (soft lo-fi / birthday song)
- [ ] Add a "leave a message" guestbook using the Table API
- [ ] Replace polaroid placeholders with real photos
- [ ] Customize the letter text with personal memories
- [ ] Add more reasons to the carousel

---

*Made with 💛 for Snija · 23 · 06 · 🌸*
