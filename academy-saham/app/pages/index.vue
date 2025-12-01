<script setup lang="ts">
// SEO Configuration
useSEO({
  title: 'Belajar Saham & Trading untuk Pemula 2025 | Kursus Investasi Saham Gratis - Academy Saham',
  description: 'GRATIS sampai Januari 2026! Belajar trading saham dari nol untuk pemula. Kursus investasi saham online terbaik 2025 dengan mentor berpengalaman. Cara main saham, analisis teknikal, strategi trading harian. Komunitas trader Indonesia terbesar. Daftar sekarang!',
  keywords: [
    'belajar saham',
    'belajar trading',
    'trading saham',
    'investasi saham',
    'saham pemula',
    'cara main saham',
    'belajar saham pemula',
    'kursus saham',
    'kursus trading',
    'belajar investasi saham',
    'cara trading saham',
    'trading saham pemula',
    'belajar trading saham',
    'investasi saham pemula',
    'cara belajar saham',
    'trading harian',
    'analisis teknikal saham',
    'strategi trading saham',
    'komunitas trader indonesia',
    'edukasi saham',
    'kursus saham gratis',
    'belajar saham online',
    'trading saham online',
    'cara investasi saham',
    'belajar saham dari nol',
    'academy saham'
  ],
  image: 'https://academysaham.com/og-image.jpg',
  type: 'website',
  twitterCard: 'summary_large_image'
})

// Structured Data - Organization
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Academy Saham',
        url: 'https://academysaham.com',
        logo: 'https://academysaham.com/logo.png',
        description: 'Platform belajar trading saham dan investasi saham online terbaik untuk pemula dan Gen-Z Indonesia 2025',
        sameAs: [
          'https://www.facebook.com/academysaham',
          'https://www.instagram.com/academysaham',
          'https://www.youtube.com/@academysaham'
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Academy Saham',
        url: 'https://academysaham.com',
        description: 'Belajar trading saham dan investasi saham online untuk pemula. Kursus saham gratis dengan mentor berpengalaman. Komunitas trader Indonesia terbesar 2025.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://academysaham.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})

const features = [
  {
    title: 'Analisis Teknikal Saham',
    description: 'Belajar cara baca chart, pola candlestick, dan indikator trading buat timing yang pas. Gak bakal sus lagi!'
  },
  {
    title: 'Manajemen Risiko Trading',
    description: 'Strategi protect modal dan maksimalin profit. Risk management yang proper biar gak boncos!'
  },
  {
    title: 'Cara Pilih Saham Cuan',
    description: 'Teknik stock picking yang bener. Pilih saham fundamental kuat dengan potensi profit maksimal!'
  },
  {
    title: 'Mental Trading yang Kuat',
    description: 'Kontrol emosi, hindari FOMO dan panic selling. Build mental trader yang solid!'
  },
  {
    title: 'Strategi Trading Harian',
    description: 'Teknik day trading dan swing trading yang profitable. Belajar kapan entry dan exit yang tepat!'
  },
  {
    title: 'Analisis Fundamental',
    description: 'Cara riset perusahaan, baca laporan keuangan, dan valuasi saham. Invest smart, bukan asal!'
  }
]

const stats = [
  { number: '10K+', label: 'Student Aktif' },
  { number: '95%', label: 'Success Rate' },
  { number: '2.5M+', label: 'Total Profit' },
  { number: '24/7', label: 'Support' }
]

const testimonials = [
  { image: 'https://akademicrypto.com/wp-content/uploads/2025/10/Frame-654037122-Compressify.io_.webp' },
  { image: 'https://akademicrypto.com/wp-content/uploads/2025/10/Frame-654037650-Compressify.io_.webp' },
  { image: 'https://akademicrypto.com/wp-content/uploads/2025/10/Frame-654037651-Compressify.io_.webp' },
  { image: 'https://akademicrypto.com/wp-content/uploads/2025/10/Frame-654037652-Compressify.io_.webp' },
  { image: 'https://akademicrypto.com/wp-content/uploads/2025/10/Frame-654037654-Compressify.io_.webp' },
  { image: 'https://akademicrypto.com/wp-content/uploads/2025/10/Frame-654037655-Compressify.io_.webp' }
]
</script>

<template>
  <div class="landing-page">
    <!-- Promo Banner -->
    <div class="promo-banner" data-aos="fade-down">
      <div class="promo-content">
        <span class="promo-text">
          <strong>PROMO SPESIAL!</strong> Akses Gratis Sampai Januari 2026
        </span>
        <span class="promo-badge">Limited Time</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="badge" data-aos="fade-up" data-aos-delay="0">#1 Platform Belajar Saham & Trading untuk Gen-Z</div>
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          Belajar <span class="highlight-text">Trading Saham</span> dari Nol Sampai Cuan
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Gak pake ribet, gak pake gatekeeping. Belajar investasi saham & trading dengan cara yang santuy tapi serius. 
          Dari pemula sampai jago, semua bisa. Let's get that bag!
        </p>
        <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
          <a href="https://wa.me/6282151409807?text=Halo%20Academy%20Saham%2C%20saya%20ingin%20daftar%20program%20gratis%20sampai%20Januari%202026" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Mulai Belajar Gratis
            <span class="btn-subtitle">Gratis s/d Januari 2026</span>
          </a>
          <button class="btn btn-secondary">Lihat Testimoni</button>
        </div>
        <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
          <div class="stat-item">4.9/5 Rating</div>
          <div class="stat-item">10,000+ Students</div>
          <div class="stat-item">Award Winning</div>
        </div>
      </div>
      <div class="hero-visual" data-aos="fade-left" data-aos-delay="200">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/VNoVoxYscNo"
            title="Video Motivasi Trading Saham - Hoki Datang ke Mereka yang Berani | Academy Saham"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Why Us?</span>
          <h2 class="section-title">Kenapa Harus Belajar Trading Saham di 2025?</h2>
          <p class="section-subtitle">
            Nabung doang? No cap, itu gak cukup! Inflasi ngabisin value duit kamu.
            Saatnya uang lo yang kerja, bukan cuma lo yang kerja buat duit. Real talk!
          </p>
        </div>
        <div class="about-grid">
          <div class="about-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Modal Receh Juga Bisa</h3>
            <p>Mulai investasi saham dari 100rb doang. Gak perlu modal gede-gede. Santuy aja, step by step pasti bisa!</p>
          </div>
          <div class="about-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Praktek Langsung</h3>
            <p>Belajar trading sambil praktek di live market. Teori + praktek = skill yang slay. No delulu, semua real!</p>
          </div>
          <div class="about-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Komunitas Solid</h3>
            <p>Gabung sama ribuan trader muda Indonesia. Share strategi, tips trading, dan grow bareng. We got your back!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">What You'll Learn</span>
          <h2 class="section-title">Skill Trading Saham yang Bakal Lo Kuasai</h2>
        </div>
        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
            data-aos="fade-up"
            :data-aos-delay="(index + 1) * 100"
          >
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="stat-card"
            data-aos="zoom-in"
            :data-aos-delay="(index + 1) * 100"
          >
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Success Stories</span>
          <h2 class="section-title">Mereka Udah Sukses Belajar Trading Saham</h2>
          <p class="section-subtitle">
            Ribuan member udah ngerasain hasil nyata dari belajar investasi saham. Sekarang giliran lo! No cap, ini legit!
          </p>
        </div>
        <div class="testimonials-grid">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
            data-aos="fade-up"
            :data-aos-delay="(index % 3) * 100"
          >
            <img
              :src="testimonial.image"
              :alt="`Testimoni student Academy Saham #${index + 1} - Sukses belajar trading dan investasi saham`"
              loading="lazy"
              :width="400"
              :height="400"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <div class="cta-promo-badge">PROMO SPESIAL 2025</div>
          <h2 class="cta-title">Siap Level Up Financial Game Lo?</h2>
          <p class="cta-text">
            Jangan skip kesempatan ini! Setiap hari yang kelewat itu opportunity yang ilang.
            Mulai belajar trading saham sekarang dan ubah masa depan lo. YOLO, but make it smart!
          </p>
          <div class="cta-button-wrapper">
            <a href="https://wa.me/6282151409807?text=Halo%20Academy%20Saham%2C%20saya%20ingin%20daftar%20program%20gratis%20sampai%20Januari%202026" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-large">
              Daftar Sekarang - Gratis s/d Januari 2026
            </a>
          </div>
          <p class="cta-note">Gak perlu kartu kredit • Bisa cancel kapan aja • Gratis sampai Januari 2026</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Academy Saham. All rights reserved.</p>
        <p class="footer-tagline">Platform belajar trading saham terbaik untuk investor muda Indonesia</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing-page {
  background: #000000;
  color: #ffffff;
  min-height: 100vh;
  transition: all 0.3s ease-out;
}

body.scrolling .landing-page {
  transition: all 0.2s ease-out;
}

/* Promo Banner */
.promo-banner {
  background: linear-gradient(135deg, #1565c0 0%, #2979ff 100%);
  padding: 1rem 2rem;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(21, 101, 192, 0.4);
  animation: slideDown 0.5s ease-out;
}

.promo-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.promo-text {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
}

.promo-text strong {
  font-weight: 800;
  color: #ffeb3b;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.promo-badge {
  background: #ffeb3b;
  color: #000000;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  animation: pulse 2s infinite;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.badge {
  display: inline-block;
  background: #1a237e;
  border: 1px solid #3949ab;
  color: #82b1ff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.highlight-text {
  color: #2979ff;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #a0a0a0;
  margin-bottom: 2rem;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
}

.btn-subtitle {
  font-size: 0.75rem;
  font-weight: 500;
  color: #ffeb3b;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.btn-primary {
  background: linear-gradient(135deg, #1565c0 0%, #2979ff 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(21, 101, 192, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.stat-item {
  font-size: 0.875rem;
  color: #888;
}

/* Hero Visual */
.hero-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: fadeInRight 0.8s ease-out 0.2s both;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #1565c0;
  box-shadow: 0 8px 32px rgba(21, 101, 192, 0.3);
  transition: all 0.3s ease;
}

.video-container:hover {
  box-shadow: 0 12px 48px rgba(21, 101, 192, 0.5);
  transform: translateY(-4px);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: auto;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  background: #1a237e;
  border: 1px solid #3949ab;
  color: #82b1ff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.about {
  padding: 8rem 0;
  background: #0a0a0a;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-card {
  background: #1a1a1a;
  border: 1px solid #1565c0;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  border-color: #2979ff;
  background: #1e1e1e;
  box-shadow: 0 10px 40px rgba(21, 101, 192, 0.3);
}

.about-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2979ff;
}

.about-card p {
  color: #a0a0a0;
  line-height: 1.7;
}

/* Features Section */
.features {
  padding: 8rem 0;
  background: #000000;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #1a1a1a;
  border: 1px solid #1565c0;
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #2979ff;
  background: #1e1e1e;
  box-shadow: 0 10px 40px rgba(21, 101, 192, 0.3);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2979ff;
}

.feature-description {
  color: #a0a0a0;
  line-height: 1.7;
}

/* Stats Section */
.stats {
  padding: 8rem 0;
  background: #0a0a0a;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
}

.stat-card {
  padding: 2rem;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: #2979ff;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #888;
}

/* Testimonials Section */
.testimonials {
  padding: 8rem 0;
  background: #000000;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.testimonial-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #1565c0;
  transition: all 0.3s ease;
  background: #0a0a0a;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  border-color: #2979ff;
  box-shadow: 0 12px 48px rgba(21, 101, 192, 0.4);
}

.testimonial-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: #000000;
  border-top: 1px solid #1565c0;
  border-bottom: 1px solid #1565c0;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-promo-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%);
  color: #000000;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  animation: pulse 2s infinite;
  box-shadow: 0 4px 15px rgba(255, 235, 59, 0.4);
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.cta-text {
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.cta-button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
}

.cta-note {
  margin-top: 1.5rem;
  color: #888;
  font-size: 0.875rem;
}

/* Footer */
.footer {
  padding: 3rem 0;
  text-align: center;
  background: #0a0a0a;
  border-top: 1px solid #1565c0;
}

.footer p {
  color: #666;
  margin: 0.5rem 0;
}

.footer-tagline {
  color: #888;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .cta-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .video-container {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }

  .video-container {
    max-width: 400px;
  }

  .about-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .promo-banner {
    padding: 0.75rem 1rem;
  }

  .promo-content {
    gap: 0.5rem;
  }

  .promo-text {
    font-size: 0.875rem;
  }

  .cta-promo-badge {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
}
</style>
