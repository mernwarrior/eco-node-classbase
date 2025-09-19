import studentRepo from "../repositories/studentRepository.js";

class StudentService {
  async createStudent(data) {
    return await studentRepo.create(data);
  }

  async getStudents() {
    return await studentRepo.findAll();
  }

  async getStudentById(id) {
    return await studentRepo.findById(id);
  }

  async updateStudent(id, data) {
    return await studentRepo.updateById(id, data);
  }

  async deleteStudent(id) {
    return await studentRepo.deleteById(id);
  }
}

export default new StudentService();
