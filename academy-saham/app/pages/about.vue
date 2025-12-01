<script setup lang="ts">
// SEO Configuration
useSEO({
  title: 'Tentang Kami - Academy Saham',
  description: 'Academy Saham adalah platform edukasi trading dan investasi saham terbaik untuk Gen-Z Indonesia. Bergabunglah dengan 10,000+ student yang sudah sukses belajar trading saham.',
  keywords: ['tentang academy saham', 'about academy saham', 'platform edukasi saham', 'kursus saham online'],
  type: 'website',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="about">
    <div class="container">
      <h1>Tentang Academy Saham</h1>
      <p>Platform edukasi trading dan investasi saham untuk Gen-Z Indonesia.</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: #ffffff;
  padding: 2rem;
}

.container {
  max-width: 800px;
  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #2979ff;
}

p {
  font-size: 1.25rem;
  color: #a0a0a0;
  line-height: 1.7;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
