import React, { useState,useEffect } from 'react'
import Head from 'next/head'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import ScrollTrigger from 'react-scroll-trigger';
import FadeIn from 'react-fade-in';
import Typist from 'react-typist';

const items = [
  'Hi',
  'There !',
  ':D'
]
const config = { mass: 5, tension: 2000, friction: 200 }

export default function Home() {
  const [toggle, set] = useState(false)
  const [toggle2, set2] = useState(false)
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
      setPage(2)
      setTimeout(() => {
        set2(true)
      }, 600);
    }, 6600);
  }, []);

  return (
    <div>
      <Head>
        <title>H`</title>
      </Head>
      {page == 1 && (
        <div style={{paddingLeft: '100px', paddingTop: '100px'}}>
          <div className="trails-main">
            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={items[index]}
                  className="trails-text"
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                  <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
              ))}
            </div> 
          </div>
          <div className="firstHeading">
            <Typist startDelay="800"> 
              Vtubers Enthusiast & Degenerate Weeb
              <Typist.Backspace count={4} delay={200} />
              Normie here!
            </Typist>
          </div>
        </div>
      )}
      {page == 2 && (
        <FadeIn>
        <div className="firstBlack">
            {trail2.map(({ x, height, ...rest }, index) => (
                <animated.div
                  className="trails-text-black"
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                  <animated.div style={{ height }}>Projects</animated.div>
                </animated.div>
              ))}
              <FadeIn delay="600">
                <div className="firstHeading">
                  <Typist startDelay="800"> 
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </Typist>
                </div>
              </FadeIn>
        </div>
        </FadeIn>
      )}
    </div>
  )
}
