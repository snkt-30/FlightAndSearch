class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("something wrong in CrudRepository");
      throw { error };
    }
  }

  async delete(modelId) {
    try {
      await this.model.destroy(modelId);
    } catch (error) {
      console.log("something wrong in CrudRepository");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const object = await this.model.findByPk(modelId);
      return object;
    } catch (error) {
      console.log("something wrong in CrudRepository");
      throw { error };
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log("something wrong in CrudRepository");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
    } catch (error) {
      console.log("something wrong in CrudRepository");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
