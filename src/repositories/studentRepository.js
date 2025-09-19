import Student from "../models/StudentModel.js";

class StudentRepository {
  async create(data) {
    return await Student.create(data);
  }

  async findAll() {
    return await Student.find();
  }

  async findById(id) {
    return await Student.findById(id);
  }

  async updateById(id, data) {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await Student.findByIdAndDelete(id);
  }
}

export default new StudentRepository();
