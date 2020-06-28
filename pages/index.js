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
            <Typist startDelay={800}> 
              Hi i'm Hafizh!
              <Typist.Backspace count={14} delay={500} />
              Weeb & Vtubers Enthusiast
              <Typist.Backspace count={25} delay={500} />
              And I code for money :D
              <Typist.Backspace count={23} delay={500} />
              Nice to meet you!
            </Typist>
            {next1 && (
              <FadeIn>
                <div style={{marginTop: '40px'}}>
                  <a className="button-black" onClick={goToPage2}>next</a>
                </div>
              </FadeIn>
            )}
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
              <FadeIn delay={600}>
                <div className="firstHeading">
                  Check my GitHub
                  <div style={{marginTop: '40px'}}>
                    <a className="button-white" target="__blank" href="https://github.com/hafizhrf">here</a>
                  </div>
                </div>
              </FadeIn>
        </div>
        </FadeIn>
      )}
    </div>
  )
}
