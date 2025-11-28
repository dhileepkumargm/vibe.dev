import React from 'react';

const HeroLabel = () => {
  return (
    <div className="text-green-400 text-sm flex items-center gap-3 mb-4 font-bold uppercase flex-col sm:flex-row">
      <span className="whitespace-nowrap flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 mr-2"
        >
          <path 
            d="M5.83087 18.1693L3.00261 20.9979M7.95219 20.2906L7.24508 20.9977M3.70955 16.0479L3.00244 16.755M11.3588 6.14844L6.98115 6.14844C6.65417 6.14844 6.43834 6.20823 6.15796 6.37645L4.34408 7.46478C3.91094 7.72466 3.69438 7.8546 3.63232 8.01389C3.5783 8.15256 3.58885 8.30808 3.66112 8.43818C3.74412 8.58763 3.97626 8.68711 4.44054 8.88609L7.91447 10.3749M11.3588 6.14844C10.7176 6.79012 10.1116 7.56433 9.18973 8.74215L8.32567 9.84608C8.16879 10.0465 8.0327 10.2204 7.91447 10.3749M11.3588 6.14844C11.6532 5.85384 11.955 5.58717 12.2982 5.32221C13.0456 4.7452 14.6119 3.90719 15.5067 3.6056C16.8125 3.16545 17.3933 3.12131 18.5548 3.03303C19.5534 2.95712 20.3717 3.01164 20.6801 3.32001C20.9885 3.62839 21.043 4.44669 20.9671 5.44536C20.8788 6.60685 20.8347 7.18759 20.3945 8.49341C20.0929 9.38818 19.2549 10.9545 18.6779 11.7019C18.413 12.0451 18.1463 12.3469 17.8517 12.6413M7.91447 10.3749C7.58676 10.8033 7.39618 11.0832 7.27999 11.3693C6.93821 12.2106 6.99595 13.1615 7.43702 13.9554C7.64105 14.3226 7.98047 14.662 8.6593 15.3408C9.33813 16.0197 9.67754 16.3591 10.0448 16.5631C10.8386 17.0042 11.7895 17.0619 12.6309 16.7201C12.9169 16.6039 13.1968 16.4134 13.6252 16.0857M13.6252 16.0857L15.114 19.5596C15.313 20.0239 15.4125 20.256 15.5619 20.339C15.692 20.4113 15.8476 20.4218 15.9862 20.3678C16.1455 20.3057 16.2755 20.0892 16.5353 19.656L17.6237 17.8422C17.7919 17.5618 17.8517 17.346 17.8517 17.019L17.8517 12.6413M13.6252 16.0857C13.7798 15.9674 13.9536 15.8313 14.154 15.6745L15.258 14.8104C16.4358 13.8885 17.21 13.2825 17.8517 12.6413" 
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <a 
          className="underline underline-offset-2 hover:text-green-300 mr-1" 
          data-discover="true" 
          href="/elements?orderBy=recent"
        >
          13 new elements
        </a>
        {' '}this week!
      </span>
      <div className="flex -space-x-2 ml-2">
        <a 
          className="rounded-full ring-2 ring-dark-900 bg-dark-900 w-7 h-7 overflow-hidden hover:ring-indigo-400 hover:scale-110 transition-all relative" 
          data-discover="true" 
          href="/profile/AatreyuShau"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded bg-black w-7 h-7">
            <img 
              className="aspect-square h-full w-full m-0" 
              alt="AatreyuShau" 
              src="https://avatars.githubusercontent.com/u/146244925?v=4&s=24" 
            />
          </span>
        </a>
        <a 
          className="rounded-full ring-2 ring-dark-900 bg-dark-900 w-7 h-7 overflow-hidden hover:ring-indigo-400 hover:scale-110 transition-all relative" 
          data-discover="true" 
          href="/profile/chandrasek_6406"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded bg-black w-7 h-7">
            <img 
              className="aspect-square h-full w-full m-0" 
              alt="chandrasek_6406" 
              src="https://lh3.googleusercontent.com/a/ACg8ocKhN4tI8kAbaEUxLly7EQycbj3t0jsjvKQ1AyFZxnvKWkA1sBA=s96-c" 
            />
          </span>
        </a>
        <a 
          className="rounded-full ring-2 ring-dark-900 bg-dark-900 w-7 h-7 overflow-hidden hover:ring-indigo-400 hover:scale-110 transition-all relative" 
          data-discover="true" 
          href="/profile/anand_4957"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded bg-black w-7 h-7">
            <img 
              className="aspect-square h-full w-full m-0" 
              alt="anand_4957" 
              src="https://lh3.googleusercontent.com/a/ACg8ocKvOxGAIpWTjHazk1MF3UZJxgH6ITB3NCM64wGelPCTx8BEjnOh=s96-c" 
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroLabel;
