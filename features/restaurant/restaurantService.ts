import Api from "../../api";

export const fetchRestaurants = async (payload: any) => {
  const api = new Api();
  const response = await api.getRestaurants(payload);
  // console.log(response);

  return response.data;
};

export const fetchTags = async (payload: any) => {
  const api = new Api();
  const response = await api.getTags(payload);
  // console.log(response);

  return response.data;
};

const restaurantService = {
  fetchRestaurants,
  fetchTags,
};

export default restaurantService;
