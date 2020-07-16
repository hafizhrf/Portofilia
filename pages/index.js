import React, { useState,useEffect } from 'react'
import Head from 'next/head'
import { useTrail } from 'react-spring'
import Page1 from '../components/global/page1'
import Page2 from '../components/global/page2'

const config = { mass: 5, tension: 2000, friction: 200 }
const items = [
  'Hi',
  'There !',
  ':D'
]
export default function Home() {
  const [toggle, set] = useState(false)
  const [toggle2, set2] = useState(false)
  const [next1, setNext1] = useState(false)
  const [page, setPage] = useState(1)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  
  const trail2 = useTrail(1, {
    config,
    opacity: toggle2 ? 1 : 0,
    x: toggle2 ? 0 : 20,
    height: toggle2 ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  useEffect(() => {
    setTimeout(() => {
      set(true)
    }, 300);
    setTimeout(() => {
      setNext1(true)
    }, 12000);
  }, []);

  const goToPage2 = () => {
    setPage(2)
    setTimeout(() => {
      set2(true)
    }, 600);
  }

  return (
    <div>
      <Head>
        <title>H`</title>
      </Head>
      {page == 1 && <Page1 isNext={next1} nextPage={goToPage2} trail={trail} items={items} />}
      {page == 2 && <Page2 trail={trail2} />}
    </div>
  )
}
