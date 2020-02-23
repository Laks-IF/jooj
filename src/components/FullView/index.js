import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './styles.css';

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

export default function FullView() {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: 'block',
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2) {
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1,
          )),
        );
      }
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1) {
          return { display: 'none' };
        }
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: 'block' };
      });
    },
  );
  return (
    <div className="teste">
      {props.map(({ x, display, sc }, i) => (
        <animated.div
          {...bind()}
          key={i}
          style={{
            display,
            transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
          }}
        >
          <animated.div
            style={{
              transform: sc.interpolate((s) => `scale(${s})`),
              backgroundImage: `url(${pages[i]})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              width: '100%',
              height: '100%',
              willChange: 'transform',
              boxShadow:
                '0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)',
            }}
          />
        </animated.div>
      ))}
    </div>
  );
}
