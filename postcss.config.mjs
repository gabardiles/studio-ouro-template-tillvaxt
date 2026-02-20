/**
 * PostCSS config – used by Next.js to process CSS.
 * Tailwind v4 runs via the @tailwindcss/postcss plugin; no extra config needed for a basic setup.
 */

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
