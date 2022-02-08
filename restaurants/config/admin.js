module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d4b3d7022278d21b17e2c03ee99f977'),
  },
});
