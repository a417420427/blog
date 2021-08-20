import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import {
  Schema,
  DOMParser as PmDOMParser,
  Node as PmNode,
  DOMSerializer,
} from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

export const nodeToHtml = (node: PmNode<Schema>) => {
  const serializer = DOMSerializer.fromSchema(schema)
  if (node.type === schema.nodes.doc) {
    const fragment = serializer.serializeFragment(node.content)
    return Array.from(fragment.children)
      .map((v: Element) => v.innerHTML)
      .join('')
  } else {
    const domNode = serializer.serializeNode(node)
    return domNode instanceof Element ? domNode.innerHTML : ''
  }
}

export const htmlToNode = (html: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  return PmDOMParser.fromSchema(schema).parse(doc.body)
}

export function sterilize(html: string) {
  return nodeToHtml(htmlToNode(html))
}

export const ProseMirrorNode = (props: { children: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const initEditor = useCallback(() => {
    if (!containerRef.current || !contentRef.current) {
      return
    }

    new EditorView(containerRef.current, {
      state: EditorState.create({
        doc: htmlToNode(props.children),
      }),
    })
  }, [contentRef, containerRef])

  useEffect(() => {
    initEditor()
  }, [])
  return (
    <div
      style={{
        width: '100%',
      }}
      ref={containerRef}
      className="ProseMirrorNode"
    >
      <div ref={contentRef}></div>
    </div>
  )
}
