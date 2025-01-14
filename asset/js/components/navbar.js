class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <a class="navbar-brand" href="index.html"><img src="asset/img/logo with word.png" width="40%" alt="Logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto gap-3">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="services.html">Layanan</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="about.html" id="analyticsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tentang Kami
                </a>
                <ul class="dropdown-menu" aria-labelledby="analyticsDropdown">
                  <li><a class="dropdown-item" href="faq.html">Tentang Kami</a></li>
                  <li><a class="dropdown-item" href="faq.html">FAQ</a></li>
                  <li><a class="dropdown-item" href="testimoni.html">Testimoni</a></li>
                  <li><a class="dropdown-item" href="contact.html">Contact</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="panduan-penulis.html" id="usersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Panduan Penulis
                </a>
                <ul class="dropdown-menu" aria-labelledby="usersDropdown">
                  <li><a class="dropdown-item" href="panduan-penulis.html">Panduan</a></li>
                  <li><a class="dropdown-item" href="portofolio.html">Portofolio</a></li>
                </ul>
              </li>
    
            </ul>
          </div>
        </div>
      </nav>
      `;
    }
  }
  customElements.define('h-navbar', Navbar);
  