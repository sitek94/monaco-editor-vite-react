import {CodeEditor} from './code-editor'

export function App() {
  return (
    <div className="app">
      <header>
        <h1>Monaco Editor</h1>
        <hr />
      </header>
      <main>
        <CodeEditor />
      </main>
    </div>
  )
}
