// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import consola from "consola";
import {getEnvConfig} from "./env/env";
import {formatDate} from "compatx";

// 环境变量
const envConfig = getEnvConfig();

const envMode = process.env.NODE_ENV ?? '';
const envModeZh = {development: '[开发环境]', production: '[生产环境]'}[envMode] ?? '';
consola.info(`-------------------${envModeZh}-------------------`);
Object.keys(envConfig).map((key) => {
    const value = envConfig[key];
    consola.info(`${key}=${value}`);
});
consola.info(`-------------------${envModeZh}-------------------`);


export default defineNuxtConfig({

    compatibilityDate: formatDate(new Date()),

    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },

    devServer: {
        host: '0.0.0.0',
        port: 3000,
    },

    imports: {
        scan: true
    },

    piniaPluginPersistedstate: {
        storage: 'sessionStorage',
        // cookieOptions: {
        //     sameSite: 'lax',
        // },
        debug: true,
    },

    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/seo',
        '@element-plus/nuxt',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@formkit/auto-animate/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxt/icon'
    ],

    plugins: [
        '~/plugins/directive/my-directive'
    ],

    app: {
        baseURL: envConfig.baseUrl,
        head: {
            htmlAttrs: {
                lang: 'zh-cn',
            },
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: envConfig.appDesc},
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: envConfig.baseUrl + 'favicon.ico'}],
        },
        // 布局过渡
        layoutTransition: {name: 'layout', mode: 'out-in'},
        // 页面过渡
        pageTransition: {name: 'page', mode: 'out-in'},
    },

    site: {
        name: envConfig.appName,
        url: envConfig.baseUrl,
    },

    sitemap: {},

    robots:{
        robotsTxt: false,
    },

    runtimeConfig: {
        //私钥仅在服务器上可用
        apiSecret: 'secret',

        //向客户端公开的公钥
        public: {
            ...envConfig
        }
    },

    // css
    css: [
        '~/assets/scss/index.scss'
    ],

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },

    // colorMode
    colorMode: {
        classSuffix: '',
        storage: 'sessionStorage',
    },

    future: {
        compatibilityVersion: 4,
    },

    experimental: {
        // when using generate, payload js assets included in sw precache manifest
        // but missing on offline, disabling extraction it until fixed
        payloadExtraction: false,
        renderJsonPayloads: true,
        typedPages: true,
        defaults: {
            useFetch: {}
        }
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
                },
            },
        },
    },

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~~/tailwindcss.config.ts',
        exposeConfig: true,
        viewer: envMode === 'development',
        editorSupport: true,
    },

    elementPlus: {
        icon: 'ElIcon',
        defaultLocale: 'zh-cn',
        importStyle: 'scss',
        themes: ['dark'],
    },

    icon: {
        componentName: 'NuxtIcon',
        customCollections: [
            {
                prefix: 'icon',
                dir: './app/assets/icons'
            },
        ],
    }
})