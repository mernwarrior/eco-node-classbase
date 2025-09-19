import bookRepository from "../repositories/bookRepository.js";

class bookService {
  async createBook(data) {
    return await bookRepository.create(data);
  }
  async getBooks() {
    return await bookRepository.findall();
  }
  async getfindbyid(id) {
    return await bookRepository.findbyid(id);
  }
  async updatebook(id, data) {
    return await bookRepository.updateById(id, data);
  }

  async deletebook(id) {
    return await bookRepository.deleteById(id);
  }
}

export default new bookService();
