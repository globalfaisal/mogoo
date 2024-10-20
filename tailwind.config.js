/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ['Jakarta', 'sans-serif'],
        JakartaBold: ['Jakarta-Bold', 'sans-serif'],
        JakartaExtraBold: ['Jakarta-ExtraBold', 'sans-serif'],
        JakartaExtraLight: ['Jakarta-ExtraLight', 'sans-serif'],
        JakartaLight: ['Jakarta-Light', 'sans-serif'],
        JakartaMedium: ['Jakarta-Medium', 'sans-serif'],
        JakartaSemiBold: ['Jakarta-SemiBold', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EAEDFA',
          100: '#D1D6F5',
          200: '#A7B1EC',
          300: '#7989E2',
          400: '#4B60D8',
          500: '#2A42C2',
          600: '#22349B',
          700: '#192775',
          800: '#111B50',
          900: '#080D26',
        },
        secondary: {
          100: '#FCFDFD',
          200: '#F8FCFC',
          300: '#EEF6F6',
          400: '#E7F3F3',
          500: '#E0F0F0',
          600: '#D7EBEB',
          700: '#9CCECE',
          800: '#5FAFAF',
          900: '#3C7777',
        },
        success: {
          100: '#F0FFF4',
          200: '#C6F6D5',
          300: '#9AE6B4',
          400: '#68D391',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532',
        },
        danger: {
          100: '#FFF5F5',
          200: '#FED7D7',
          300: '#FEB2B2',
          400: '#FC8181',
          500: '#F56565',
          600: '#E53E3E',
          700: '#C53030',
          800: '#9B2C2C',
          900: '#742A2A',
        },
        warning: {
          100: '#FFFBEB',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },
        general: {
          100: '#CED1DD',
          200: '#858585',
          300: '#EEEEEE',
          400: '#0CC25F',
          500: '#F6F8FA',
          600: '#E6F3FF',
          700: '#e5e2e5',
          800: '#ADADAD',
        },
      },
    },
  },
  plugins: [],
};
