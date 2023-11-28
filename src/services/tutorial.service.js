import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/student/list");
  }

  get(id) {
    return http.get(`/student/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  

  update(id, data) {
    alert(id);
    alert(data);
    return http.put(`/student/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/student/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();