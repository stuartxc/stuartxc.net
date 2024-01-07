// export default defineNuxtRouteMiddleware((to, from) => {
//     const isLoggedIn = false;
//     // to is the destination
//     if (isLoggedIn) {
//         // redirect to the page we want to go, which is in "to"
//         return navigateTo(to.fullPath);
//         // console.log(to);
//     } else {
//         // redirect to a login page
//         return navigateTo("/login");
//     }
//     // console.log(from);
// });

export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Hello from middleware auth");
});