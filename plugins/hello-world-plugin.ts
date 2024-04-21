import {type Plugin} from 'vite'

export function helloWorldPlugin(): Plugin {
  return {
    name: 'Hello World Vite Plugin',
    buildStart() {
      console.log('[Hello World Vite Plugin]: 🚀🚀🚀')
    },
    transform(code, id) {
      if (id.endsWith('/app.tsx')) {
        return code.replace(/__APP_TITLE__/g, 'Monaco Editor')
      }

      return null
    },
  }
}
