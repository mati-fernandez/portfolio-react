import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tailwindcss from '@tailwindcss/vite';

dotenv.config();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // eslint-disable-next-line no-undef
  base: process.env.VERCEL ? '/' : '/portfolio-react/',
});
