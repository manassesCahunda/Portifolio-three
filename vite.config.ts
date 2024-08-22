import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // para React
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
