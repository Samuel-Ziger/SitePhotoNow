<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="contact-info">
        <div class="contact-item">
          <span class="material-icons">email</span>
          <span>contato@photonow.com.br</span>
        </div>
        <div class="contact-item">
          <span class="material-icons">phone</span>
          <span>(61) 99134-8242</span>
        </div>
        <div class="contact-item">
          <span class="material-icons">location_on</span>
          <span>Av. John Boyd Dunlop, 3900 - Jardim Ipaussurama, Campinas - SP, 13060-803</span>
        </div>
      </div>
      <div class="social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">photo_camera</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">facebook</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span class="material-icons">video_library</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Componente de rodapé
</script>

<style scoped>
.footer {
  background-color: var(--background-dark);
  color: var(--white);
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-item .material-icons {
  font-size: 24px;
  color: var(--primary-color);
}

.social-media {
  display: flex;
  gap: 1rem;
}

.social-media a {
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.social-media a:hover {
  color: var(--white);
}

.social-media .material-icons {
  font-size: 32px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}
</style> 