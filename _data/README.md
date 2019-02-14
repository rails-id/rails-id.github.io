# Data

## Companies (`companies.yml`)

  ##### Cara Menambahkan Startup / Perusahaan di `companies.yml`
  - Tambahkan file logo di folder `assets/showcase/companies/images/` dengan format `logo_{nama}`.
  - Ekstensi logo bisa apa saja yang penting tipe gambar / image.
  - Perbarui file `_data/companies.yml`.
  - Tambahkan Startup / Perusahaan yang akan di masukkan.
  - Tambahkan deskripsi sesingkat mungkin, berikut penjelasan singkat bagaimana Rails digunakan di perusahaan / startup / organisasi.
  - Buat pull request (tidak berlaku untuk member organisasi Ruby on Rails Indonesia).
  - Tunggu di review dan di merge.
  - Perlu di ingat, pastikan Startup / Perusahaan yang akan dimasukkan belum ada di laman [Pengguna Ruby dan Rails di Indonesia](https://rails.id/company-use-rails/).

  ##### Contoh Penulisan
  ``` yaml
  - name: nama-startup.com
    url: https://www.nama-startup.com
    image_url: images/logo_namastartup.png
    description: nama-startup.com adalah aplikasi ter-keren No. 1 di Indonesia.
  ```
