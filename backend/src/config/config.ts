
export default () => ({
    jwt_secret: process.env.JWT_SECRET,
    mongo_uri: process.env.MONGO_URI,
});
  