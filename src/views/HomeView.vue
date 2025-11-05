<script setup>
import { ref } from 'vue'

const features = [
  {
    icon: '📈',
    title: 'Analisis Teknikal',
    description: 'Pelajari cara membaca chart, pola, dan indikator untuk timing yang tepat'
  },
  {
    icon: '💰',
    title: 'Manajemen Risiko',
    description: 'Strategi protect modal dan maksimalkan profit dengan risk management yang solid'
  },
  {
    icon: '🎯',
    title: 'Stock Picking',
    description: 'Cara memilih saham fundamentally strong dengan potensi cuan maksimal'
  },
  {
    icon: '🧠',
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
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="badge">🚀 #1 Platform Edukasi Saham untuk Gen-Z</div>
        <h1 class="hero-title">
          Mulai Journey <span class="gradient-text">Trading Saham</span> dari Nol
        </h1>
        <p class="hero-subtitle">
          No gatekeeping, no ribet. Belajar invest & trading saham dengan cara yang fun,
          modern, dan actually bikin kamu cuan. From zero to hero!
        </p>
        <div class="cta-buttons">
          <button class="btn btn-primary">Mulai Belajar Gratis</button>
          <button class="btn btn-secondary">Lihat Testimoni</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">⭐️ 4.9/5</div>
          <div class="stat-item">👥 10,000+ Students</div>
          <div class="stat-item">🏆 Award Winning</div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="chart-mockup">
          <div class="chart-line"></div>
          <div class="floating-card card-1">
            <span class="emoji">📊</span>
            <div>
              <p class="card-title">Portfolio Growth</p>
              <p class="card-value positive">+47.5%</p>
            </div>
          </div>
          <div class="floating-card card-2">
            <span class="emoji">💎</span>
            <div>
              <p class="card-title">Smart Investment</p>
              <p class="card-value">Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Why Us?</span>
          <h2 class="section-title">Kenapa Harus Belajar Saham Sekarang?</h2>
          <p class="section-subtitle">
            Nabung doang ngga cukup! Inflasi makan value uang kamu.
            Saatnya uang kerja untuk kamu, bukan cuma kamu kerja untuk uang.
          </p>
        </div>
        <div class="about-grid">
          <div class="about-card">
            <div class="about-icon">⚡</div>
            <h3>Start dari Kecil</h3>
            <p>Mulai invest dari 100rb aja. No need modal gede. Step by step aja!</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🎓</div>
            <h3>Learn by Doing</h3>
            <p>Praktik langsung dengan live market simulation. Theory + practice = unstoppable!</p>
          </div>
          <div class="about-card">
            <div class="about-icon">🤝</div>
            <h3>Community Support</h3>
            <p>Join komunitas trader muda yang supportive. Share insights, grow together!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">What You'll Learn</span>
          <h2 class="section-title">Skill yang Bakal Kamu Master</h2>
        </div>
        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
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
          >
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Level Up Your Financial Game?</h2>
          <p class="cta-text">
            Jangan tunda lagi! Setiap hari yang terlewat adalah opportunity yang hilang.
            Start your journey sekarang dan transform your future.
          </p>
          <div class="cta-buttons">
            <button class="btn btn-primary btn-large">Daftar Sekarang - Gratis!</button>
          </div>
          <p class="cta-note">✨ No credit card required • Cancel anytime • 100% Free</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Academy Saham. All rights reserved.</p>
        <p class="footer-tagline">Built with 💚 for Indonesian young investors</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing-page {
  background: linear-gradient(to bottom, #0a0a0a, #111111);
  color: #ffffff;
  min-height: 100vh;
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
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #a78bfa;
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

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
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

.chart-mockup {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 500px;
}

.chart-line {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.floating-card {
  position: absolute;
  background: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: -10%;
  animation-delay: 0s;
}

.card-2 {
  bottom: 20%;
  right: -10%;
  animation-delay: 1.5s;
}

.floating-card .emoji {
  font-size: 2rem;
}

.card-title {
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 0.25rem;
}

.card-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.positive {
  color: #10b981;
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
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #a78bfa;
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
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.1);
}

.about-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.about-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about-card p {
  color: #a0a0a0;
  line-height: 1.7;
}

/* Features Section */
.features {
  padding: 8rem 0;
  background: linear-gradient(to bottom, #111111, #0a0a0a);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.feature-description {
  color: #a0a0a0;
  line-height: 1.7;
}

/* Stats Section */
.stats {
  padding: 8rem 0;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #888;
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
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
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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

  .chart-mockup {
    max-width: 400px;
    height: 400px;
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

  .floating-card {
    padding: 1rem;
  }

  .card-1 {
    left: 0;
    top: 10%;
  }

  .card-2 {
    right: 0;
    bottom: 10%;
  }

  .about-grid,
  .features-grid {
    grid-template-columns: 1fr;
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
