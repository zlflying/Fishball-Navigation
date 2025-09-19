import type {Env} from "./env";

export default function prodEnv(): Env {
    return {
        baseUrl: '/Fishball-Navigation/',
        appName: '鱼丸导航',
        appDesc: 'Nuxt3-AppDesc',
        appKeywords: 'Nuxt3-AppKeywords',
    }
};