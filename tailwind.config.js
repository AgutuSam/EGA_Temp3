export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        athletic: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617'
        },
        energy: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407'
        },
        pulse: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49'
        },
        volt: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16'
        }
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'holographic': 'holographic 4s ease-in-out infinite',
        'reveal': 'reveal 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #00FFFF' },
          '100%': { boxShadow: '0 0 30px #00FFFF, 0 0 40px #00FFFF' }
        },
        neonPulse: {
          '0%': { 
            textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF',
            filter: 'brightness(1.2)'
          }
        },
        holographic: {
          '0%, 100%': { transform: 'perspective(400px) rotateY(-15deg) rotateX(2deg)' },
          '50%': { transform: 'perspective(400px) rotateY(15deg) rotateX(-2deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      boxShadow: {
        'neon': '0 0 20px #00FFFF',
        'neon-lg': '0 0 30px #00FFFF, 0 0 40px #00FFFF',
        'neon-xl': '0 0 40px #00FFFF, 0 0 60px #00FFFF, 0 0 80px #00FFFF',
        'electric': '0 0 20px #0FF',
        'gold': '0 0 20px #FFD700',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 16px 60px rgba(31, 38, 135, 0.37)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'athletic-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
        'energy-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
        'performance-gradient': 'linear-gradient(45deg, #38BDF8 0%, #0EA5E9 25%, #F97316 50%, #22C55E 75%, #0284C7 100%)'
      }
    }
  },
  plugins: []
}
