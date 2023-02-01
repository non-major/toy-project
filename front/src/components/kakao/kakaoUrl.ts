export const REST_API_KEY = "1c4d85a37e36d212f01a1cff25f2780e";
const REDIRECT_URI = "http://localhost:3232/api/auth/kakao/login";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
