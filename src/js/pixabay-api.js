import axios from "axios";

const API_KEY = "56898199-01c5f5b99e8faa07dd762a3d2";

export async function getImagesByQuery(query, page) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}