import { useState, useEffect } from 'react';
import PrevIcon from './Icons/PrevIcon';
import NextIcon from './Icons/NextIcon';

const Slider = () => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

  const slides = [
	{
		url: 'https://theme.hstatic.net/1000340570/1000964732/14/slideshow_1.jpg?v=2096',
        alt: '1'
	},
	{
		url: 'https://theme.hstatic.net/1000340570/1000964732/14/slideshow_2.jpg?v=2096',
        alt: '2'
	},
	{
		url: 'https://theme.hstatic.net/1000340570/1000964732/14/slideshow_5.jpg?v=2096',
        alt: '3'
	},
];

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className='relative m-auto flex justify-center '>
        <img 
        src={`${slides[curr].url}`}
        
        alt={`${slides[curr].alt}`}
        
        className={`relative w-full block h-56 bg-cover md:h-96 transition duration-500 ease-in-out`}
        />
      
      <button
        onClick={prev}
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
      >
        <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <PrevIcon />
        </span>
      </button>
      <button
        onClick={next}
        className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
      >
        <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <NextIcon />
        </span>
      </button>
    </div>
  );
};

export default Slider;