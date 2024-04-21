import {CodeEditor} from './code-editor'

export function App() {
  return (
    <div className="app">
      <header>
        <h1>{'__APP_TITLE__'}</h1>
        <hr />
      </header>
      <main>
        <CodeEditor />
      </main>
    </div>
  )
}
