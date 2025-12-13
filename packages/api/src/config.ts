type Config = {
  port: string;
  mongoUrl: string;
};

export const config: Config = {
  port: process.env.PORT || "3000",
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017",
};
