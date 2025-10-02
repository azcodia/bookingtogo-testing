/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Ganti dengan env variable kamu
  readonly VITE_ANOTHER_KEY?: string;
  // Tambahkan variabel env lain di sini jika perlu
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
