import type {Config} from 'tailwindcss';
import colors from "tailwindcss/colors";

// 移除已重命名的颜色并使用新名称
const {lightBlue, warmGray, trueGray, coolGray, blueGray, ...newColors} = colors;

export default <Partial<Config>>{
    prefix: 'tw-',
    content: {
        files: [
            // all directories and extensions will correspond to your Nuxt config
            "~/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "~/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "~/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "~/plugins/**/*.{js,ts,mjs}",
            "~/composables/**/*.{js,ts,mjs}",
            "~/utils/**/*.{js,ts,mjs}",
            "~/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
            "~/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
            "~/app.config.{js,ts,mjs}",
            "~/app/spa-loading-template.html"
        ]
    },
    theme: {
        colors: {
            'primary': '#fa661f',
        },
        extend: {
            colors: {
                ...newColors
            },
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            }
        },
    },
    plugins: [],
}