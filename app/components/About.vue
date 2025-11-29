<script setup>
import { useAboutStore } from "~/stores/about.js";

const about = useAboutStore();
</script>

<template>
  <section id="about" class="max-w-4xl mx-auto py-20 px-6">
    <h2 class="text-3xl font-bold mb-4 text-green-400">{{about.title}}</h2>
    <p class="text-green-300 leading-relaxed">{{about.desc}}</p>
  </section>
</template>
