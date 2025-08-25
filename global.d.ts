declare global {
  interface ImportMeta {
    env: {
      VITE_SUPABASE_URL: string;
      VITE_SUPABASE_PUBLISHABLE_KEY: string;
      TWILIO_AUTH_TOKEN: string;
      TWILIO_ACCOUNT_SID: string;
      RESEND_API_KEY: string;
    };
  }
}

export {};
