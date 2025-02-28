import axios from "axios";
export const BASE_URL = "http://127.0.0.1:8000";
export const getThumbnail = (thumbnail) => {
  return `${BASE_URL}/storage/contents/${thumbnail}`;
};
export const getWatchLater = (watchlater) => {
  return `${BASE_URL}/storage/watchlater/${watchlater}`;
};
const useAxios = axios.create({
  baseURL: `${BASE_URL}/api/registter`,
});
export default useAxios;
