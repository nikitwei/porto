<template>
  <section id="contact" class="max-w-4xl mx-auto py-20 px-6">
    <h2 class="text-3xl font-bold text-green-400 mb-6">Contact</h2>


    <form class="grid gap-4 max-w-xl">
      <input
          type="text"
          placeholder="Your Name"
          class="p-3 bg-black border border-green-400 rounded"
      />


      <input
          type="email"
          placeholder="Your Email"
          class="p-3 bg-black border border-green-400 rounded"
      />


      <textarea
          placeholder="Message"
          rows="5"
          class="p-3 bg-black border border-green-400 rounded"
      ></textarea>


      <button
          class="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition rounded"
      >
        Send Message
      </button>
    </form>
  </section>
</template>
