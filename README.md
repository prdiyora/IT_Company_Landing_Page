# RadhaVision Landing Page

This project is a modern, responsive landing page for an IT company named **RadhaVision**. 

## 🎨 CSS Architecture & Styling (`style.css`)

The styling for this landing page is written in vanilla CSS and focuses on modern layout techniques, clean code, and responsiveness. Here is a simple breakdown of how the `style.css` file is structured:

### 1. CSS Variables (Design Tokens)
At the very top, we use `:root` to define CSS variables. This acts as the "theme" for the website. By storing our colors (like our primary `#6C5CE7` purple and secondary `#00B894` green), spacing, and fonts in variables, it makes the code much easier to update and maintain.

### 2. Base Styles & Typography
* **Box-Sizing:** We apply `box-sizing: border-box` to all elements so padding and borders don't unexpectedly increase element widths.
* **Body:** The page uses a dark, fixed gradient background with light text (`#e6eef8`) for a modern "dark mode" aesthetic. We use system fonts for fast loading and crisp rendering.

### 3. Modern Layouts (Flexbox & Grid)
* **Flexbox:** Used heavily for one-dimensional layouts, such as aligning items in the sticky header (`.header-inner`), centering the hero section, and organizing the About and Contact sections.
* **CSS Grid:** Used specifically for the Services section (`.services-grid`). It makes it incredibly simple to create a 3-column layout that evenly distributes the service cards.

### 4. Reusable Components
Instead of writing new CSS for every element, we use reusable component classes:
* **Buttons (`.btn`, `.btn-primary`, `.btn-secondary`):** Standardized button shapes with smooth hover effects.
* **Cards (`.card`):** Used in the services section. They feature a soft glass-like background, subtle borders, and a beautiful lift-up shadow effect when hovered over.

### 5. Responsive Design (Media Queries)
The site looks great on all devices thanks to media queries at the bottom of the file:
* **Desktop (1024px+):** 3-column service grid, side-by-side contact form.
* **Tablet (768px - 1023px):** The service grid drops to 2 columns to give the cards more breathing room.
* **Mobile (< 768px):** The layout stacks vertically (1 column grid), and the standard navigation bar hides itself, revealing a hamburger menu toggle.

### 6. Animations & Effects
* **Transitions:** Almost all interactive elements (buttons, links, cards) use a `0.3s ease` transition for smooth visual feedback on hover.
* **Keyframes:** A simple `@keyframes fadeInUp` animation is used via the `.fade-in` class to gently slide and fade elements into view when the page loads.

---

## 🚀 How to Run
Simply open the `index.html` file in your web browser. No build tools or servers are required!