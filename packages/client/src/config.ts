type Config = {
  BASE_URL: string;
};

export const config: Config = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
};
