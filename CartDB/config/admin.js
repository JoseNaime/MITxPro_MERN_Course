module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65f895a34007247a4d9f001446a05b02'),
  },
});
