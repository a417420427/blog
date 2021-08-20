// import 'gitment/style/default.css'
// import Gitment from 'gitment'
// import { useCallback, useEffect, useRef } from 'react'

// const gitment = new Gitment({
//   owner: 'a417420427',
//   repo: 'blog',
//   oauth: {
//     client_id: 'c9a318172f0e14ae5d2d',
//     client_secret: '9d1933d7b87d1487d685414e43fe298dfc7df3c0',
//   },
// })

// export const Comment = () => {
//   const ref = useRef<HTMLDivElement>(null)

//   const initComment = useCallback(() => {
//     if (ref.current) {
//       gitment.render(ref.current)
//     }
//   }, [])
//   useEffect(() => {
//     initComment()
//   }, [initComment])
//   return <div ref={ref} className="comment"></div>
// }
