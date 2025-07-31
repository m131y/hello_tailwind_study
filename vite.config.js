import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"; //tailwindcss import까지해야 사용가능

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
