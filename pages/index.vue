<script setup>
// const { sayHello } = useUtils();
// // console.log(useNuxtApp());
// const { $sayHelloPlug } = useNuxtApp();
// sayHello();
// $sayHelloPlug("whats up");
</script>

<template>
    <div class="Main bg-gray-500 rounded px-2 py-1 text-white mb-2">
        <!-- <img src="/favicon.ico" alt="this is a public image" /> -->
        <Alert />
        <Profile />
        <ProfileHeader /> <IconsPerson class="px-100"/>
        <img src="~/assets/kevin james.jpeg" alt="kevin james meme" />
    </div>
</template>