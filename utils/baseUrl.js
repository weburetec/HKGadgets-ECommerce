const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://hk-gadgets-e-commerce-coral.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
