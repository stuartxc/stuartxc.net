export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            sayHelloPlug: (msg: string) => console.log(`Hello, ${msg}!`)
        },
    };
});