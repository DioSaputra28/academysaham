<script setup>
const features = [
  {
    title: 'Analisis Teknikal',
    description: 'Pelajari cara membaca chart, pola, dan indikator untuk timing yang tepat'
  },
  {
    title: 'Manajemen Risiko',
    description: 'Strategi protect modal dan maksimalkan profit dengan risk management yang solid'
  },
  {
    title: 'Stock Picking',
    description: 'Cara memilih saham fundamentally strong dengan potensi cuan maksimal'
  },
  {
    title: 'Trading Psychology',
    description: 'Kendalikan emosi, hindari FOMO, dan build mental trading yang winning'
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
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="badge" data-aos="fade-up" data-aos-delay="0">#1 Platform Edukasi Saham untuk Gen-Z</div>
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          Mulai Journey <span class="highlight-text">Trading Saham</span> dari Nol
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          No gatekeeping, no ribet. Belajar invest & trading saham dengan cara yang fun,
          modern, dan actually bikin kamu cuan. From zero to hero!
        </p>
        <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
          <button class="btn btn-primary">Mulai Belajar Gratis</button>
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
          <h2 class="section-title">Kenapa Harus Belajar Saham Sekarang?</h2>
          <p class="section-subtitle">
            Nabung doang ngga cukup! Inflasi makan value uang kamu.
            Saatnya uang kerja untuk kamu, bukan cuma kamu kerja untuk uang.
          </p>
        </div>
        <div class="about-grid">
          <div class="about-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Start dari Kecil</h3>
            <p>Mulai invest dari 100rb aja. No need modal gede. Step by step aja!</p>
          </div>
          <div class="about-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Learn by Doing</h3>
            <p>Praktik langsung dengan live market simulation. Theory + practice = unstoppable!</p>
          </div>
          <div class="about-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Community Support</h3>
            <p>Join komunitas trader muda yang supportive. Share insights, grow together!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">What You'll Learn</span>
          <h2 class="section-title">Skill yang Bakal Kamu Master</h2>
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
          <h2 class="section-title">Testimoni dari Para Student</h2>
          <p class="section-subtitle">
            Ribuan student sudah merasakan perubahan. Sekarang giliran kamu!
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
          <h2 class="cta-title">Ready to Level Up Your Financial Game?</h2>
          <p class="cta-text">
            Jangan tunda lagi! Setiap hari yang terlewat adalah opportunity yang hilang.
            Start your journey sekarang dan transform your future.
          </p>
          <div class="cta-buttons">
            <button class="btn btn-primary btn-large">Daftar Sekarang - Gratis!</button>
          </div>
          <p class="cta-note">No credit card required • Cancel anytime • 100% Free</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Academy Saham. All rights reserved.</p>
        <p class="footer-tagline">Built for Indonesian young investors</p>
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
}

.btn-primary {
  background: #1565c0;
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: #1976d2;
  box-shadow: 0 10px 30px rgba(21, 101, 192, 0.4);
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
}
</style>
