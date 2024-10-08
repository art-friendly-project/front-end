/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
    },
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
      backgroundImage: {
        'memo-pad': 'url(assets/images/etc/memoPad.svg)',
        gallery: 'url(assets/images/etc/galleryBackground.svg)',
      },
      height: {
        18: '4.5rem',
        21: '5.25rem',
        22.8: '5.7rem',
        34.4: '8.6rem',
        76: '19rem',
        84: '21rem',
        92: '23rem',
        108: '27rem',
        140: '35rem',
        '1/10': '10%',
        '2/25': '8%',
        '23/25': '92%',
        '41/50': '82%',
        '7/10': '70%',
        '9/12': '75%',
        '9/10': '90%',
      },
      width: {
        18: '4.5rem',
        21: '5.25rem',
        34.4: '8.6rem',
        78: '19.5rem',
        84: '21rem',
        88: '22rem',
        91.2: '22.8rem',
        92: '23rem',
        100: '25rem',
        '1/12': '8.3%',
        '2/12': '16.6%',
        '3/12': '25%',
        '3/10': '30%',
        '4/12': '33.3%',
        '5/12': '41.6%',
        '43/100': '43%',
        '9/20': '45%',
        '23/50': '46%',
        '6/12': '50%',
        '7/12': '58.3%',
        '8/12': '66.6%',
        '7/10': '70%',
        '9/12': '75%',
        '19/25': '76%',
        '10/12': '83.3%',
        '17/20': '85%',
        '9/10': '90%',
        '11/12': '91.6%',
        '12/12': '100%',
      },
      colors: {
        'orange-dark-100': '#E68650',
        'orange-100': '#FF955A',
        'orange-90': '#FFA469',
        'orange-70': '#FFC287',
        'orange-50': '#FFD195',
        'orange-30': '#FFFEC3',
        'orange-20': '#FFEDD6',
        'orange-10': '#FFFFE1',
        'orange-00': '#FFFFEF',
        kakaoYellow: '#F8D548',
        kakaoDarkYellow: '#E8C94C',
        kakaoBrown: '#47292B',
        'gray-110': '#111111',
        'gray-100': '#252525',
        'gray-90': '#393939',
        'gray-80': '#616161',
        'gray-70': '#757575',
        'gray-50': '#9D9D9D',
        'gray-60': '#888888',
        'gray-40': '#B1B1B1',
        'gray-30': '#C5C5C5',
        'gray-20': '#D9D9D9',
        'gray-10': '#EDEDED',
        'gray-00': '#F7F7F7',
        'gray-acitve-100': '#EDEDED',
        'purple-10': '#F1DBFF',
        'purple-90': '#AC5AFF',
        'purple-100': '#7D3DBD',
      },
      animation: {
        'spin-slow': 'spin-custom 2s linear infinite',
        'appear-fast': 'appear-fast 0.5s',
        'appear-slow': 'appear-slow 2s ease-in-out',
        'appear-little': 'appear-little 0.5s linear',
        'appear-toast': 'appear-toast 2.2s',
        disappear: 'disappear 2s',
        'move-top': 'move-top 2.5s linear',
        'move-top-mini': 'move-top-mini 2s linear',
        'move-top-regular': 'move-top-regular 0.5s',
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
        'move-top-regular': {
          from: {
            transform: 'translateY(100%)',
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
        'appear-little': {
          from: { opacity: 0, transform: 'translateY(15px)' },
          to: {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        'appear-fast': {
          from: { opacity: 0 },
          to: {
            opacity: 0.9,
          },
        },
        'appear-slow': {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
        'appear-toast': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.9 },
          '100%': { opacity: 0 },
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
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        custom2:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        custom3:
          'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        inside: '0px 1px 2px 1px rgba(60, 64, 67, 0.3) inset',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
