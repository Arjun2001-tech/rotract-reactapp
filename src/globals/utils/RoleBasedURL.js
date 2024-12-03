const roleUrl = {
  admin: '/programmanager/home',
  'Program manager': '/programmanager',
};

export const getRoleUrl = (role) => roleUrl[role] || '/';

export default getRoleUrl;
