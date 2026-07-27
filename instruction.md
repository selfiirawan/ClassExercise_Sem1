# Exercise 3: Flexbox Layout

**Filename:** `medium_flexbox_layout.html`

---

## Instructions

Create an HTML file that combines CSS selectors with Flexbox to build a simple page layout.

### 1. Reset

- Set `body` margin to `0` to remove default browser spacing
- Use the universal selector (`*`) to set `font-family` to `Arial, sans-serif`

### 2. Hero Banner

Create a `div` with the class `hero` containing:
- An `h1` with the ID `main-title`
- A `p` paragraph below it

Use CSS to:
- Give `.hero` a **steel blue background**, **60px top/bottom padding**, **40px left/right padding**, and **centered text**
- Style the `h1` with a **dark red** color and **48px** font size
- Style the `p` with a **green** color and **18px** font size

### 3. Card Row

Below the hero, create a `div` with the class `cards` containing **three card divs**.

Each card should have **two classes**: the shared `card` class, plus one color class (`card-red`, `card-yellow`, or `card-green`).

Each card should contain:
- An `h2` heading (white text)
- A `p` paragraph (white text, 16px)

Use CSS to:
- Give `.cards` a **black background**, `display: flex`, **20px gap**, and **40px padding**
- Give `.card` **rounded corners** (8px), **24px padding**, a **max-width of 300px**, and `cursor: pointer`
- Style `.card-red` with a red background (`#ff6b6b`) and darker red border (`#c0392b`)
- Style `.card-yellow` with a yellow background (`#f9ca24`) and gold border (`#e1b012`)
- Style `.card-green` with a green background (`#6ab04c`) and dark green border (`#4a7c32`)

### 4. Hover Effects

Use `:hover` to:
- Lift each `.card` upward by **6px** using `transform: translateY(-6px)`
- Darken each card to its border color on hover:
  - `.card-red:hover` → `#c0392b`
  - `.card-yellow:hover` → `#e1b012`
  - `.card-green:hover` → `#4a7c32`

---