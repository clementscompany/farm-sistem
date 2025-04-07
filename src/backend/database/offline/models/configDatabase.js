import usersModel from "./users.model.js";
class Configurations {
  Admin() {
    const Permission = () => {
      change = async (id, permission) => {
        const result = await usersModel.updatePermission(id, permission);
        return result;
      };
      return change;
    };
    const initialize = async () => {
      const result = await usersModel.index();
      if (!result === true) {
        return {
          success: false,
          message: "Erro ao cinfigurar o banco de dados",
        };
      }
      return {
        success: true,
        message: "Banco de dados configurado com sucesso!",
      };
    };
    return { Permission, initialize };
  }
}
export default new Configurations();
