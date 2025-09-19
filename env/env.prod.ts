import type {Env} from "./env";

export default function prodEnv(): Env {
    return {
        baseUrl: '/Fishball-Navigation/',
        appName: 'Nuxt3-AppName',
        appDesc: 'Nuxt3-AppDesc',
        appKeywords: 'Nuxt3-AppKeywords',
    }
};