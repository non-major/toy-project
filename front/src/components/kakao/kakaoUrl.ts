import { config } from "../../config";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${config.kakao.REST_API_KEY}&redirect_uri=${config.kakao.REDIRECT_URI}&response_type=code`;
