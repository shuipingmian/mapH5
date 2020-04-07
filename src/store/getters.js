const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roleName: state => state.user.roleName,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  getSceneId: state => state.sceneId
}
export default getters
