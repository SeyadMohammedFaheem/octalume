/** @type {import('tailwindcss').Config} */
import tokenData from './src/tokens/tokens.json';
import fontTokens from './src/tokens/font-tokens.json';

const resolveTokens = (tokens, map) => {
  const resolved = {};
  for (const [key, value] of Object.entries(tokens)) {
    resolved[key] =
      typeof value === 'string' && value.startsWith('{')
        ? map[value.slice(1, -1)] // Remove {curly braces} and resolve
        : value;
  }
  return resolved;
};

const globalTokens = tokenData.globalTokens;
const baseTokens = resolveTokens(tokenData.baseTokens, globalTokens);
const semanticTokens = resolveTokens(tokenData.semanticTokens, {
  ...globalTokens,
  ...baseTokens,
});

// Resolve font tokens
const resolveFontTokens = (fontTokens) => {
  const resolvedFonts = {};
  for (const [category, styles] of Object.entries(fontTokens.type)) {
    for (const [key, values] of Object.entries(styles)) {
      resolvedFonts[`${category}-${key}`] = {
        fontFamily: values.family,
        fontSize: values.sizeRem,
        fontWeight: values.weight,
        fontStyle: values.style,
      };
    }
  }
  return resolvedFonts;
};

const resolvedFontTokens = resolveFontTokens(fontTokens);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Lufga', 'sans-serif'],
      secondary: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        ...globalTokens,
        ...baseTokens,
        ...semanticTokens,
      },
      fontFamily: Object.fromEntries(
        Object.entries(resolvedFontTokens).map(([key, value]) => [key, value.fontFamily])
      ),
      fontSize: Object.fromEntries(
        Object.entries(resolvedFontTokens).map(([key, value]) => [key, value.fontSize])
      ),
      fontWeight: Object.fromEntries(
        Object.entries(resolvedFontTokens).map(([key, value]) => [key, value.fontWeight])
      ),
      fontStyle: Object.fromEntries(
        Object.entries(resolvedFontTokens).map(([key, value]) => [key, value.fontStyle])
      ),
    },
  },
  plugins: [],
};
