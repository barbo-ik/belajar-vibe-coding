# Task: Inisialisasi Project Backend (Bun, ElysiaJS, Drizzle ORM, MySQL)

## 1. Ringkasan & Tujuan
Inisialisasi boilerplate/starter project backend baru di dalam direktori ini menggunakan runtime **Bun**, framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Proyek harus siap pakai, terstruktur rapi, dan memiliki koneksi database yang terverifikasi.

---

## 2. Tech Stack
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Web Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database Driver**: `mysql2`
- **Database**: MySQL
- **Developer Tools**: `drizzle-kit` (untuk migrasi & prototyping schema)

---

## 3. High-Level Action Plan

### Tahap 1: Inisialisasi Proyek & Instalasi Dependensi
- Inisialisasi proyek TypeScript berbasis Bun di root folder (`bun init`).
- Pasang dependensi utama:
  - `elysia`
  - `drizzle-orm`
  - `mysql2`
- Pasang dependensi pengembangan (dev dependencies):
  - `drizzle-kit`
  - Types pendukung yang relevan jika dibutuhkan.

### Tahap 2: Konfigurasi Environment & Project
- Siapkan file `.env.example` dan `.env` untuk konfigurasi:
  - Port aplikasi server.
  - Kredensial koneksi MySQL (`DATABASE_URL` atau host, user, password, database, port).
- Buat konfigurasi Drizzle (`drizzle.config.ts`):
  - Tentukan path schema, folder migrasi, dan dialect `mysql`.
- Pastikan `package.json` memiliki script standar (misal: `dev`, `build`, `db:generate`, `db:push`/`db:migrate`).

### Tahap 3: Struktur Folder Standar
Rancang struktur folder modular di dalam direktori `src/`, contohnya:
```text
src/
├── db/
│   ├── index.ts        # Inisialisasi koneksi MySQL & client Drizzle
│   └── schema/         # Definisi tabel / schema Drizzle
├── routes/             # Handler / routing endpoint Elysia
└── index.ts            # Entrypoint utama aplikasi server
```

### Tahap 4: Setup Database & Schema Sederhana
- Buat koneksi database menggunakan driver `mysql2` (connection pool disarankan) dan inisialisasi Drizzle instance.
- Buat setidaknya satu schema tabel sederhana (misalnya tabel `users` atau `health_checks`) untuk memvalidasi integrasi ORM.

### Tahap 5: Setup Server ElysiaJS
- Buat server entrypoint di `src/index.ts`.
- Tambahkan endpoint dasar:
  - `GET /` atau `GET /health`: Mengembalikan status aplikasi dan memverifikasi koneksi database aktif.
- Aktifkan fitur graceful shutdown atau logging dasar jika diperlukan.

---

## 4. Kriteria Keberhasilan (Acceptance Criteria)
1. **Server Berjalan Lancar**: Aplikasi dapat dijalankan dengan hot-reload melalui command `bun run dev` (atau `bun --watch src/index.ts`) tanpa error.
2. **Koneksi Database Berfungsi**: Server berhasil terhubung ke MySQL melalui Drizzle tanpa exception.
3. **Migrasi/Schema Tool Siap Pakai**: Script Drizzle Kit (`db:generate` / `db:push`) dapat dijalankan untuk mengelola schema database.
4. **Endpoint Health Check Valid**: Endpoint `/health` merespons request dengan status `200 OK`.
5. **Konfigurasi Rapi**: Tidak ada credential sensitif yang di-hardcode (semua melalui environment variables).

