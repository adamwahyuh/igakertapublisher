class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-purple text-white py-5">
            <div class="container-fluid">
                <div class="row">
                    <!-- Informasi -->
                    <div class="col-md-2">
                        <h5 class="fw-bold">INFORMASI</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white text-decoration-none">Tentang Kami</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5 class="fw-bold">BANTUAN</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white text-decoration-none">Kontak Kami</a></li>
                            <li><a href="#" class="text-white text-decoration-none">F.A.Q</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5 class="fw-bold">KATEGORI BUKU</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white text-decoration-none">Buku Ajar</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Buku Monograf</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Buku Referensi</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h5 class="fw-bold">TENTANG KAMI</h5>
                        <p>IGAKERTA BOOK Catalog menjual berbagai macam kategori buku dari komik hingga novel fiksi, serta buku ilmiah lain dengan harga yang bersaing dan kualitas terjamin.</p>
                    </div>
                    <div class="col-md-3">
                        <h5 class="fw-bold">KONTAK</h5>
                        <p>
                            Alamat: Jalan Palem Raya no 15 RT 05/RW 08<br>
                            Petukangan Utara Pesanggrahan Jakarta Selatan<br>
                            DKI Jakarta 12260<br>
                            No. HP: +62 857-8276-3529<br>
                            Email: <a href="mailto:igakertapublisher@gmail.com" class="text-white text-decoration-none">igakertapublisher@gmail.com</a>
                        </p>
                        <div>
                            <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-white me-3"><i class="bi bi-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      `;
    }
  }
  customElements.define('f-footer', Navbar);
  