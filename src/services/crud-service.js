class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Somethign wrong on the service layer");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.repository.update(modelId, data);
      return response;
    } catch (error) {
      console.log("Somethign wrong on the service layer");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const response = await this.repository.get(modelId);
      return response;
    } catch (error) {
      console.log("Somethign wrong on the service layer");
      throw { error };
    }
  }

  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("Somethign wrong on the service layer");
      throw { error };
    }
  }

  async delete(modelId) {
    try {
      const res = await this.repository.delete(modelId);
      return res;
    } catch (error) {
      console.log("Somethign wrong on the service layer");
      throw { error };
    }
  }
}

module.exports = CrudService;
