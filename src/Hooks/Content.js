// import React from 'react'
// import { useEffect, useState } from 'react'

// export function useScreenWidth (): number {
//   const [width, setWidth] = useState(window.innerWidth)

//   useEffect(() => {
//     const handler = (event: any) => {
//       setWidth(event.target.innerWidth)
//     }

//     window.addEventListener('resize', handler)

//     return () => {
//       window.removeEventListener('resize', handler)
//     }
//   }, [])

//   return width
// }

// export const withHooksHOC = (Component: any) => {
//   return (props: any) => {
//     const screenWidth = useScreenWidth()

//     return <Component width={screenWidth} {...props} />
//   }
// }
