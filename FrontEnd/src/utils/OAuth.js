
export const naverClientId = 'vgMBTEKbl0WWjysaLriP';

export const naverRedirectURL = 'https://localhost:8080/ouath/callback/naver';

export const naverSecret = '8wvXGNJH1v';

export const kakaoClientId = '8f9c281f6d7d93b721aee98f9baf9f30';

export const kakaoRedirectURL = 'https://localhost:8080/ouath/callback/kakao';

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&state=STATE_STRING&redirect_uri=${naverRedirectURL}`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectURL}&response_type=code&prompt=login`;

export const KAKAO_ALL_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${kakaoClientId}&logout_redirect_uri=${kakaoRedirectURL}`;

export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${kakaoClientId}&logout_redirect_uri=${kakaoRedirectURL}`;