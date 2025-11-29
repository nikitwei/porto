<script setup>
import {useSkillsStore} from "~/stores/skills.js";

const store = useSkillsStore();
const skills = computed(() => store.items);
</script>

<template>
  <section id="skills" class="max-w-5xl mx-auto py-20 px-6">
    <h2 class="text-3xl font-bold text-green-400 mb-6">Skills</h2>


    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-green-300">


      <div
          v-for="(skill, idx) in skills"
          :key=idx
          class="border border-green-400 p-4 flex flex-col items-center justify-center text-center"
      >
        <div class="text-4xl">
          <!-- your icon -->
          <img height="60" width="60" :src="`https://cdn.simpleicons.org/${skill.slug}/4ade80`"/>
        </div>

        <p class="mt-2 text-sm font-medium">
          {{ skill.title }}
        </p>


      </div>
    </div>
  </section>
</template>
