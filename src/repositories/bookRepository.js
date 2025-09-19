import Book from "../models/bookModel.js";

class bookRepository {
  async create(data) {
    return await Book.create(data);
  }

  async findall() {
    return await Book.find();
  }
  async findbyid(id) {
    return await Book.findById(id);
  }
  async updateById(id, data) {
    return await Book.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await Book.findByIdAndDelete(id);
  }
}

export default new bookRepository();
