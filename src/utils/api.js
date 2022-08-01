import axios from "axios";

const rosellysApi = axios.create({
  baseURL: "http://localhost:9090/api",
});

//SHOWS
export const getShows = async () => {
  const { data } = await rosellysApi.get("/shows");
  return data;
};

// export const deleteShow = async (id) => {
//   const { data } = await rosellysApi.delete(`/shows/${id}`);
// };

export const getSingleShow = async (id) => {
  const { data } = await rosellysApi.get(`/shows/${id}`);
  console.log(data[0].venue_name);
  return data;
};

//SONGS
export const getSongs = async () => {
  const { data } = await rosellysApi.get("/songs");
  return data;
};

export const getSingleSong = async (id) => {
  const { data } = await rosellysApi.get(`/songs/${id}`);
  // console.log(data[0].venue_name);
  return data;
};
