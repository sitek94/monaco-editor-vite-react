import {useRef, useState, useEffect, FC} from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export const CodeEditor: FC = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEl = useRef(null)

  useEffect(() => {
    if (monacoEl) {
      console.log(`[useEffect: monacoEl]`)

      setEditor(editor => {
        if (editor) return editor

        return monaco.editor.create(monacoEl.current!, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
            '\n',
          ),
          language: 'typescript',
        })
      })
    }

    return () => editor?.dispose()
  }, [monacoEl.current])

  return <div className="code-editor" ref={monacoEl} />
}
