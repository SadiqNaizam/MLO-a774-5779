import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: {
					DEFAULT: 'hsl(var(--input))', // Border color for input
					background: 'hsl(var(--input-background))'
        },
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
          lightBlue: 'hsl(var(--primary-light-blue))',
          darkBlue: 'hsl(var(--primary-dark-blue))',
          tsbBlue: 'hsl(var(--primary-tsb-blue))' // explicit alias
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
          tealEsavings: 'hsl(var(--accent-teal-esavings))',
          main: 'hsl(var(--accent-main))' // explicit alias
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Direct color names from design spec for convenience
        'tsb-blue': 'hsl(var(--primary-tsb-blue))',
        'light-blue': 'hsl(var(--primary-light-blue))',
        'dark-blue': 'hsl(var(--primary-dark-blue))',
        'neutral-white': 'hsl(var(--neutral-white))',
        'neutral-grey-bg': 'hsl(var(--neutral-grey-bg))',
        'neutral-grey-divider': 'hsl(var(--neutral-grey-divider))',
        'text-dark': 'hsl(var(--text-dark))',
        'text-subtext-grey': 'hsl(var(--text-subtext-grey))',
        'accent-teal': 'hsl(var(--accent-teal-esavings))', // for e-savings card
        'accent-blue-main': 'hsl(var(--accent-main))', // for general accent use like accordion icon
			},
			borderRadius: {
				lg: 'var(--radius-lg)', // 16px
				md: 'var(--radius-md)', // 12px
				sm: 'var(--radius-sm)', // 8px
        pill: 'var(--radius-pill)' // 50px
			},
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;