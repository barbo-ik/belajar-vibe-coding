# Belajar Vibe Coding - Backend API

Starter boilerplate backend menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Tech Stack
- **Runtime**: [Bun](https://bun.sh/) (v1.4.4+)
- **Framework**: [ElysiaJS](https://elysiajs.com/) (v2.0)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database Driver**: `mysql2`
- **Migration & Prototyping**: `drizzle-kit`

---

## Struktur Folder
```text
src/
├── db/
│   ├── index.ts        # Setup koneksi MySQL pool & Drizzle instance
│   └── schema/         # Definisi schema/tabel database
│       ├── users.ts    # Schema tabel users
│       └── index.ts    # Re-export schema
├── routes/
│   ├── health.ts       # Endpoint health check & status DB
│   └── users.ts        # Endpoint contoh CRUD users
└── index.ts            # Server entrypoint
drizzle/                # Generated SQL migration files
```

---

## Cara Menjalankan

### 1. Install Dependensi
```bash
bun install
```

### 2. Konfigurasi Environment
Salin file `.env.example` menjadi `.env` lalu sesuaikan kredensial MySQL Anda:
```bash
cp .env.example .env
```

Contoh konfigurasi di `.env`:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=belajar_vibe_coding
DATABASE_URL=mysql://root:@localhost:3306/belajar_vibe_coding
```

### 3. Migrasi Database (Drizzle Kit)
Generate migration file:
```bash
bun run db:generate
```

Push schema langsung ke database MySQL:
```bash
bun run db:push
```

Buka Drizzle Studio:
```bash
bun run db:studio
```

### 4. Menjalankan Server
Mode development (hot reload):
```bash
bun run dev
```

Mode production:
```bash
bun run start
```

### 5. Type Checking
```bash
bun run typecheck
```

---

## Endpoint API

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/` | Pesan selamat datang & info API |
| `GET` | `/health` | Status aplikasi, uptime, dan cek koneksi database MySQL |
| `GET` | `/api/users` | Mengambil daftar semua user |
| `POST` | `/api/users` | Membuat user baru (body: `{ "name": "...", "email": "..." }`) |
