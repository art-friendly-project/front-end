/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      Display3: [
        '38px',
        {
          lineHeight: '55px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      Display2: [
        '30px',
        {
          lineHeight: '45px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      Display1: [
        '24px',
        {
          lineHeight: '29px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      'Display1-M': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
      Headline: [
        '20px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      'Headline-M': [
        '20px',
        {
          lineHeight: '34px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
      Subhead: [
        '18px',
        {
          lineHeight: '27px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      'Subhead-M': [
        '18px',
        {
          lineHeight: '27px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
      Body3: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      'Body3-M': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
      'Body3-120': [
        '16px',
        {
          lineHeight: '18px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
      Body2: [
        '14px',
        {
          lineHeight: '21px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      'Body2-M': [
        '14px',
        {
          lineHeight: '21px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
      Body1: [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '-0.6px',
          fontWeight: '700',
        },
      ],
      'Body1-M': [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '-0.6px',
          fontWeight: '500',
        },
      ],
    },
    extend: {
      colors: {
        'orange-100': '#FF8645',
        'orange-50': '#FFD195',
      },
      animation: {
        'spin-slow': 'spin-custom 2.5s ease-in-out',
        appear: 'appear 0.5s linear',
        disappear: 'disappear 2s',
      },
      keyframes: {
        'spin-custom': {
          from: { transform: 'rotate(0deg) translateY(0px)' },
          to: {
            transform: 'rotate(180deg) translateY(100px)',
          },
        },
        appear: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
        disappear: {
          from: { opacity: 1 },
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
