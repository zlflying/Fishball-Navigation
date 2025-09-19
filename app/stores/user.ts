import {acceptHMRUpdate, defineStore} from "pinia";

export const useUserStore = defineStore("user", () => {

    let name = ref("");


    return {
        name
    };
}, {
    persist: {
        storage: piniaPluginPersistedstate.sessionStorage(),
    },
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
