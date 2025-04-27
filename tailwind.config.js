/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            animation: {
                shine: "shine 2s linear infinite",
                "text-gradient": "text-gradient 1.5s linear infinite",
                orbit: "orbit calc(var(--duration)*1s) linear infinite",
                meteor: "meteor 5s linear infinite",
                "shine-pulse": "shine-pulse 2s infinite",
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
              },
              keyframes: {
                "shine-pulse": {
                  "0%": {
                    "background-position": "0% 0%",
                  },
                  "50%": {
                    "background-position": "100% 100%",
                  },
                  to: {
                    "background-position": "0% 0%",
                  },
                },
                shine: {
                  from: { backgroundPosition: "0 0" },
                  to: { backgroundPosition: "-200% 0" },
                },
                "text-gradient": {
                  to: {
                    backgroundPosition: "200% center",
                  },
                },

                orbit: {
                  "0%": {
                    transform:
                      "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
                  },
                  "100%": {
                    transform:
                      "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
                  },
                },
                
                meteor: {
                  "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
                  "70%": { opacity: 1 },
                  "100%": {
                    transform: "rotate(215deg) translateX(-500px)",
                    opacity: 0,
                  },
                },
                
                marquee: {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                  from: { transform: "translateY(0)" },
                  to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },

              },
        }
    },

    plugins: []
};