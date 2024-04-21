import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {helloWorldPlugin} from './plugins/hello-world-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), helloWorldPlugin()],
})
