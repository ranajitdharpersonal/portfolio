/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // আপনার কালার প্যালেট (যদি আগে কিছু থাকে তবে তা এখানে থাকবে)
      colors: {
        'dark-bg': '#0D1117',
        'neon-blue': '#00FFFF',
        'neon-purple': '#FF00FF',
        'text-light': '#E0E6ED',
      },

      // ১. অ্যানিমেশন সেকশন (Animation)
      animation: {
        // টেক্সটের স্লো মোশন শাইন (৮ সেকেন্ড)
        'shimmer': 'shimmer 8s linear infinite',

        // কার্ডের অটোমেটিক শাইন (৬ সেকেন্ড) - নতুন যোগ করা হলো
        'card-shine': 'card-shine 6s ease-in-out infinite',

        // বর্ডার ঘোরানোর জন্য
        'border-spin': 'border-spin 8s linear infinite',
      },

      // ২. কী-ফ্রেমেস সেকশন (Keyframes)
      keyframes: {
        'shimmer': {
          '0%': { backgroundPosition: '250% 0' },
          '100%': { backgroundPosition: '-250% 0' },
        },
        'card-shine': {
          '0%': { left: '-150%' },
          '100%': { left: '150%' },
        },
        // 🔥 বর্ডার ঘোরার নিয়ম
        'border-spin': {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}