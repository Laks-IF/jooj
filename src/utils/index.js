const firstLetterUpper = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

const interpolate = (xInterval, yInterval) => {
  let [x0, x1] = xInterval;
  let [y0, y1] = yInterval;

  return function (xA) {
    if (xA > x1) xA = x1;
    else if (xA < x0) xA = x0;

    const yA = y0 + (y1 - y0) * ((xA - x0) / (x1 - x0));

    return yA;
  };
};

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function randomColor(userConfig = {}) {
  const defaultConfig = {
    r: [0, 255],
    g: [0, 255],
    b: [0, 255],
    a: [1, 1],
  };
  const config = Object.assign({}, defaultConfig, userConfig);

  let { r, g, b, a } = config;

  let [minR, maxR] = r;
  let [minG, maxG] = g;
  let [minB, maxB] = b;
  let [minA, maxA] = a;

  maxA *= 1000;
  minA *= 1000;

  r = randomInt(minR, maxR);
  g = randomInt(minG, maxG);
  b = randomInt(minB, maxB);
  a = randomInt(minA, maxA) / 1000;

  return {
    string: `rgba(${r}, ${g}, ${b}, ${a})`,
    color: {
      r,
      g,
      b,
      a,
    },
  };
}

const randomPalette = (userColor = {}, userVariant = {}) => {
  const getVariant = (userConfig = {}) => {
    const defaultConfig = {
      min: 0,
      max: 255,
      num: randomInt(0, 255),
      variant: 15,
    };
    const config = Object.assign({}, defaultConfig, userConfig);

    let { num, min, max, variant } = config;

    if (num + variant >= max) {
      num = [num - variant, max];
    } else if (num - variant < min) {
      num = [min, num + variant];
    } else {
      num = [num - variant, num + variant];
    }
    return num;
  };

  const { color: defaultColor } = randomColor();
  const defaultVariant = { vR: 15, vG: 15, vB: 15, vA: 200 };

  const color = Object.assign({}, defaultColor, userColor);
  const variant = Object.assign({}, defaultVariant, userVariant);

  const { r, g, b, a } = color;
  const { vR, vG, vB, vA } = variant;

  const palette = {
    r: getVariant({ variant: vR, num: r }),
    g: getVariant({ variant: vG, num: g }),
    b: getVariant({ variant: vB, num: b }),
    a: getVariant({ variant: vA, num: a * 1000, max: 1000, min: 0 }).map(
      (item) => item / 1000
    ),
  };

  return palette;
};

export { firstLetterUpper, randomInt, interpolate, randomColor, randomPalette };
