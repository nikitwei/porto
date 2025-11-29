<script setup>
import {useHeroStore} from "~/stores/hero.js";

const hero = useHeroStore();
</script>
<template>
  <section id="hero" class="h-screen flex flex-col justify-center items-center text-center p-6">
    <h2 class="text-4xl md:text-6xl font-bold text-green-400">
      Hi, I'm {{ hero.name }} 👋
    </h2>
    <p class="text-green-300 mt-4 max-w-xl">
      {{ hero.tagline }}
    </p>


    <a
        href="#projects"
        class="mt-6 px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition rounded"
    >
      View My Work
    </a>
  </section>
</template>
