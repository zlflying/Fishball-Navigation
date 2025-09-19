import type {Env} from "./env";

export default function devEnv(): Env {
    return {
        baseUrl: '/',
        appName: 'Nuxt3-AppName',
        appDesc: 'Nuxt3-AppDesc',
        appKeywords: 'Nuxt3-AppKeywords',
    }
};