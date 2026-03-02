import axiosInstance from "./axiosInstance";

export const getTimetable = () => axiosInstance.get("/faculty/timetable");

export const getSessions = () => axiosInstance.get("/faculty/sessions");

export const addSession = (data) =>
  axiosInstance.post("/faculty/sessions", data);

export const deleteSession = (id) =>
  axiosInstance.delete(`/faculty/sessions/${id}`);
