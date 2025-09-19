module.exports = {
    apps: [
        {
            name: 'NuxtApp',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            env: {
                PORT: 3001,
                NODE_ENV: "production"
            }
        }
    ]
}