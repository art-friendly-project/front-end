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
      height: {
        '1/10': '10%',
        '2/25': '8%',
        '41/50': '82%',
        '7/10': '70%',
        '9/10': '90%',
      },
      width: {
        92: '23rem',
        '9/10': '90%',
        '3/10': '30%',
      },
      colors: {
        'orange-100': '#FF955A',
        'orange-90': '#FFA469',
        'orange-70': '#FFC287',
        'orange-50': '#FFD195',
        'orange-30': '#FFFEC3',
        'orange-10': '#FFFFE1',
        'orange-0': '#FFFFF0',
        kakaoYellow: '#F8D548',
        kakaoBrown: '#47292B',
        'gray-80': '#616161',
      },
      animation: {
        'spin-slow': 'spin-custom 2s linear infinite',
        appear: 'appear 0.5s linear',
        'appear-mid': 'appear-mid 0.5s',
        disappear: 'disappear 2s',
        'appear-slow': 'appear-slow 2.5s ease-in-out',
        'move-top': 'move-top 3s linear',
        'move-top-mini': 'move-top-mini 2s linear',
      },
      keyframes: {
        'move-top': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(-300px)',
          },
        },
        'move-top-mini': {
          from: {
            transform: 'translateY(50px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },

        'spin-custom': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(270deg)',
          },
        },
        appear: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
        'appear-mid': {
          from: { opacity: 0 },
          to: {
            opacity: 0.6,
          },
        },
        'appear-slow': {
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
      boxShadow: {
        custom:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
        custom2:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
