import { animated } from 'react-spring'
import FadeIn from 'react-fade-in';
import Typist from 'react-typist';


export default ({ trail, isNext, nextPage, items }) => {
  return (
    <div style={{ paddingLeft: '100px', paddingTop: '100px' }}>
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
        <FadeIn>
          <div style={{ marginTop: '40px' }}>
            <a className="button-black" onClick={nextPage}>next</a>
          </div>
        </FadeIn>
        {/* {isNext && (
            )} */}
      </div>
      <div class="floating1 circle-black-big"/>
      <div class="floating2 circle-black-medium"/>
      <div class="floating1 circle-black-small"/>
    </div>
  )
}