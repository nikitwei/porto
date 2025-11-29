<script setup>
import {useProjectsStore} from "~/stores/projects.js";
import {useSkillsStore} from "~/stores/skills.js";

const store = useProjectsStore();
const projects = computed(() => store.items);
</script>



<template>
  <section id="projects" class="max-w-5xl mx-auto py-20 px-6">
    <h2 class="text-3xl font-bold text-green-400 mb-6">Projects</h2>


    <div class="grid gap-6 md:grid-cols-3">
      <div
          v-for="(project, idx) in projects"
          :key=idx
          class="border border-green-400 p-6 rounded hover:bg-green-400 hover:text-black transition"
      >
        <h3 class="font-bold text-xl mb-2">{{ project.title }}</h3>
        <p class="mb-4 opacity-80">{{ project.desc }}</p>
        <a :href="project.link" class="underline">Visit</a>
      </div>
    </div>
  </section>
</template>
