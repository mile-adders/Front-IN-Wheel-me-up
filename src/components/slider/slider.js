import React from 'react';

import defaultSlides from './defaultSlides.js';
import './slider.scss';

const Slider = ({ slides }) => {
  const [curr, setCurr] = React.useState(0);
  const { length } = slides;

  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };
  React.useEffect(() => {
    setTimeout(goToNext, 4000);
    return function () {
      clearTimeout(goToNext);
    };
  });

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div className='slideDiv'>
      <section className="slider">
        {slides.map((s, i) => (
          <div
            className={i === curr ? 'slide active' : 'slide'}
            key={s.title}
            aria-hidden={i !== curr}
          >
            <div className='title'>
              <h1>{s.title}</h1>
              <h2>{s.subtitle}</h2>
            </div>
            {i === curr && (
              <img className="image" src={s.image} alt={`Image for ${s.title}`} />
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

const SliderMain = () => {
  return (
    // Pretending I'm using dynamic slides as props
    <main>
      <Slider slides={defaultSlides} />
    </main>
  );
};

export default SliderMain;