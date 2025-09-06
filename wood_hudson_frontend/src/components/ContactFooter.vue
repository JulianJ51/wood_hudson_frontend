<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3>Contact Us</h3>
        <p>Saint Example Hospital</p>
        <p>123 Charity Lane</p>
        <p>City, State ZIP</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.org</p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-social">
        <h3>Follow Us</h3>
        <a href="#" aria-label="Facebook">FB</a>
        <a href="#" aria-label="Twitter">TW</a>
        <a href="#" aria-label="Instagram">IG</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Saint Example Hospital. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ContactFooter",
};
</script>

<style scoped>
.site-footer {
  background-color: #222;
  color: #fff;
  padding: 2rem 1rem 1rem;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-info,
.footer-links,
.footer-social {
  flex: 1;
  min-width: 200px;
}

.footer-info h3,
.footer-links h3,
.footer-social h3 {
  margin-bottom: 0.5rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a,
.footer-social a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover,
.footer-social a:hover {
  text-decoration: underline;
}

.footer-social a {
  margin-right: 1rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-social a {
    margin-right: 0.5rem;
  }
}
</style>
