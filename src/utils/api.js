import axios from "axios";

const rosellysApi = axios.create({
  // Alternate between these two for testing
  // baseURL: "https://rosellys-app.herokuapp.com/api",
  baseURL: "http://localhost:9090/api",
});

//SHOWS

export const getShows = async () => {
  const { data } = await rosellysApi.get("/shows");
  return data;
};

export const deleteShow = async (id) => {
  const { data } = await rosellysApi.delete(`/shows/${id}`);
};

export const getSingleShow = async (id) => {
  const { data } = await rosellysApi.get(`/shows/${id}`);
  return data;
};

export const addShow = (show) => {
  return rosellysApi
    .post(`/shows`, show, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      return data;
    });
};

export const editShow = (id, newShow) => {
  return rosellysApi
    .put(`/shows/${id}`, newShow, {
      headers: { "Content-Type": "application/json" },
    })
    .then(({ data }) => {
      return data;
    });
};

//SONGS

export const getSongs = async () => {
  const { data } = await rosellysApi.get("/songs");
  return data;
};

export const getSingleSong = async (id) => {
  const { data } = await rosellysApi.get(`/songs/${id}`);
  return data;
};

export const addSong = (song) => {
  return rosellysApi
    .post(`/songs`, song, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      return data;
    });
};

export const editSong = (id, newSong) => {
  return rosellysApi
    .put(`/songs/${id}`, newSong, {
      headers: { "Content-Type": "application/json" },
    })
    .then(({ data }) => {
      return data;
    });
};

//SET LISTS

export const getSetlists = async () => {
  const { data } = await rosellysApi.get("/set-lists");
  return data;
};

export const getSingleSetlist = async (id) => {
  const { data } = await rosellysApi.get(`/set-lists/${id}`);
  return data;
};
