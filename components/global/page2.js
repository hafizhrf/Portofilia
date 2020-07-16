import { animated } from 'react-spring'
import FadeIn from 'react-fade-in';

export default ({trail}) => {
    return (
        <FadeIn>
            <div className="firstBlack">
                {trail.map(({ x, height, ...rest }, index) => (
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
    )
}