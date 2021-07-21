function getToken() {
  let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : '';
  return token;
}
export default getToken;
