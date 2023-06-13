
export default () => ({
    jwt_secret: process.env.JWT_SECRET,
    mongo_uri: process.env.MONGO_URI,
    smtp_host: process.env.SMTP_HOST,
    smtp_port: process.env.SMTP_PORT,
    smtp_user: process.env.SMTP_USER,
    smtp_password: process.env.SMTP_PASSWORD,
});
  