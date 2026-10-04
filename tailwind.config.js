/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          bg: '#08090C',
          card: '#10121A',
          cardLight: '#181C28',
          border: 'rgba(255, 255, 255, 0.08)',
          orange: '#FF5500',
          orangeGlow: '#FF7700',
          amber: '#FFAA00',
          textMuted: '#94A3B8',
          metallic: '#2A2E3D'
        }
      },
      fontFamily: {
        orbitron: ["'Times New Roman'", 'Times', 'serif'],
        rajdhani: ["'Times New Roman'", 'Times', 'serif'],
        sans: ["'Times New Roman'", 'Times', 'serif'],
        serif: ["'Times New Roman'", 'Times', 'serif']
      },
      boxShadow: {
        'neon-orange': '0 0 30px rgba(255, 85, 0, 0.45)',
        'neon-orange-sm': '0 0 15px rgba(255, 85, 0, 0.3)',
        'neon-orange-lg': '0 0 50px rgba(255, 85, 0, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'water-flow': 'waterFlow 10s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'cyber-scan': 'cyberScan 3s ease-in-out infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(255, 85, 0, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(255, 85, 0, 0.9))' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        cyberScan: {
          '0%': { top: '0%' },
          '50%': { top: '100%' },
          '100%': { top: '0%' }
        }
      }
    },
  },
  plugins: [],
}
