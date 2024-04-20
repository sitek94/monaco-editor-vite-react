import './styles.css'

import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'

import './user-worker'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
