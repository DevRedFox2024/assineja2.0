<!-- @format -->

<template>
  <footer class="footer">
    <v-container class="footer-container">
      <v-row class="footer-content">
        <v-col cols="12" md="4" class="logo-col">
          <div class="logo-wrapper">
            <img
              class="footer-logo"
              src="../../assets/logoFooter.webp"
              alt="RedFox Internet"
              loading="lazy" />
            <p class="tagline">Conectando você ao futuro</p>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="contact-col">
          <div class="contact-wrapper">
            <h3 class="section-title">Contato</h3>
            <ul class="contact-list">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5511986871731"
                  class="contact-link"
                  target="_blank"
                  aria-label="WhatsApp">
                  <svg
                    class="contact-icon"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16">
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  (11) 98687-1731
                </a>
              </li>
              <li>
                <a
                  href="tel:08007732656"
                  target="_blank"
                  class="contact-link"
                  aria-label="Telefone">
                  <svg
                    class="contact-icon"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16">
                    <path
                      fill="currentColor"
                      d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  0800-773-2656
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@redfox.com"
                  target="_blank"
                  class="contact-link"
                  aria-label="Email">
                  <svg
                    class="contact-icon"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16">
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>

                  vendas@redfoxtelecom.com.br
                </a>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- <div class="social-copyright">
      <div class="copyright"></div>
    </div> -->
    <v-container class="social-copyright">
      <div class="copyright">
        <p>&copy; 2025 RedFox Internet - Todos os direitos reservados</p>
        <p class="dev-credit">Desenvolvido com ❤️ pela equipe RedFox</p>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #222222;
  color: #fff;
  padding: 60px 0 20px;
  height: auto;
  width: 100%;
  font-family: "Roboto", sans-serif;
}

.footer-container {
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 30px;
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer-logo {
  width: 100%;
  max-width: 270px !important;
  height: auto;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.tagline {
  color: #aaa;
  font-size: 0.9rem;
  max-width: 200px;
  line-height: 1.4;
}

.section-title {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: #ff4d4d;
}

.contact-list,
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-link,
.footer-link {
  color: #bbb;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease, transform 0.2s ease;
}

.contact-link:hover,
.footer-link:hover {
  color: #fff;
  transform: translateX(5px);
}

.contact-icon {
  margin-right: 10px;
  color: #ff4d4d;
}

.footer-link {
  padding: 5px 0;
}

.social-copyright {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
}
@media (max-width: 959px) {
  .social-copyright {
    margin-bottom: 9%;
  }
}
.social-links {
  margin-bottom: 20px;
}

.social-link {
  color: #bbb;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #ff4d4d;
}

.copyright {
  color: #777;
  font-size: 0.9rem;
  line-height: 1.6;
}

.dev-credit {
  font-size: 0.8rem;
  margin-top: 5px;
  opacity: 0.7;
}

@media (min-width: 960px) {
  .footer-content {
    flex-wrap: nowrap;
  }

  .logo-col {
    margin-bottom: 0;
  }
}

@media (max-width: 959px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-wrapper {
    align-items: center;
    margin-bottom: 30px;
  }

  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-col,
  .links-col {
    text-align: center;
  }

  .contact-link,
  .footer-link {
    justify-content: center;
  }
}

@media (max-width: 599px) {
  .footer-logo {
    max-width: 150px;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .copyright p {
    font-size: 0.8rem;
  }
}
</style>
