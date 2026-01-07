window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          chala: {
            black: '#0B0B0E',
            magenta: '#D5006C', // Fucsia Rebelde
            green: '#008E4A',   // Verde Esmeralda/Exito
            gold: '#FFB300',    // Dorado Mandala
            blue: '#1A237E',    // Azul Profundidad
            white: '#F5F5F5',
            darkgray: '#1A1A1D',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out',
          'slide-up': 'slideUp 0.5s ease-out',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          }
        }
      }
    }
  };
