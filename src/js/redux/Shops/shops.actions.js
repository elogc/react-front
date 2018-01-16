
export const FETCH_SHOPS_ASYNC = 'FETCH_SHOPS_ASYNC';
export const FETCH_SHOPS_SUCCESS = 'FETCH_SHOPS_SUCCESS';
export const FETCH_SHOPS_ERROR = 'FETCH_SHOPS_ERROR';

export function fetchShops() {
  return { type: FETCH_SHOPS_ASYNC };
}
export function fetchShopsSuccess(shops) {
  return { type: FETCH_SHOPS_SUCCESS, data: shops };
}
export function fetchShopsError(error) {
  return { type: FETCH_SHOPS_ERROR, data: error };
}
