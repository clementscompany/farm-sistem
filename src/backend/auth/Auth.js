import usersModel from "../database/offline/models/users.model.js";

class auth {
  async login(data) {
    try {
      const { username, password, defaultLogin } = data;
      const getDataUser = await usersModel.listBy(username);

      if (defaultLogin === true) {
        if (!getDataUser) {
          return { success: false, message: "Usuario ou senha incorrectos!" };
        }
        const { senha, id, nome, email, cargo } = getDataUser;
        if (senha !== password) {
          return { success: false, message: "Usuario ou senha incorrectos!" };
        }
        return {
          success: true,
          message: "Credenciais confirmadas com sucesso",
          token:{
            id: id,
            nome: nome,
            email: email,
            cargo: cargo,
          }
        };
      }
      // const getData
    } catch (error) {
      return Promise.reject(new Error(error).message);
    }
  }
}
export default new auth();
