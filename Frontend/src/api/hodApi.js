import axiosInstance from "./axiosInstance";

export const getAllFaculty = () => axiosInstance.get("/hod/faculties");

export const getFacultySessions = (id) =>
  axiosInstance.get(`/hod/faculty/${id}/sessions`);
