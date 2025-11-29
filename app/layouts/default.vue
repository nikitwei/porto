<template>
  <div class="min-h-screen font-mono">
    <header class="fixed top-0 left-0 w-full bg-black/70 backdrop-blur z-50">
      <nav class="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 class="text-green-400 text-xl font-bold">ALVIN</h1>
        <div class="space-x-6 text-green-300">
          <a href="#hero" class="hover:text-green-500">Home</a>
          <a href="#about" class="hover:text-green-500">About</a>
          <a href="#skills" class="hover:text-green-500">Skills</a>
          <a href="#projects" class="hover:text-green-500">Projects</a>
          <a href="#contact" class="hover:text-green-500">Contact</a>
        </div>
      </nav>
    </header>


    <main class="pt-20">
      <slot />
    </main>


    <footer class="text-center p-6 text-green-500 opacity-70">
      © 2025 Alvin — Built with Nuxt
    </footer>
  </div>
</template>
