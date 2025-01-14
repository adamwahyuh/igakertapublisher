class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="text-white pt-4">
            <div class="container">
                <div class="row">
                <div class="col-md-4">
                    <h5>Tentang kami</h5>
                    <p>Kami adalah publisher</p>
                </div>
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                    <li><a href="index.html" class="text-white">Home</a></li>
                    <li><a href="services.html" class="text-white">Services</a></li>
                    <li><a href="contact.html" class="text-white">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Kontak kami</h5>
                    <p>Email: igakertapublisher@example.com</p>
                    <p>Phone: +62 81234567891</p>
                </div>
                </div>
                <div class="text-center mt-3">
                <p>&copy; 2025 igakertapublisher. All rights reserved.</p>
                </div>
            </div>
        </footer>
      `;
    }
  }
  customElements.define('f-footer', Footer);
  