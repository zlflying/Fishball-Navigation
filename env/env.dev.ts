import type {Env} from "./env";

export default function devEnv(): Env {
    return {
        baseUrl: '/',
        appName: '鱼丸导航',
        appDesc: 'Nuxt3-AppDesc',
        appKeywords: 'Nuxt3-AppKeywords',
    }
};