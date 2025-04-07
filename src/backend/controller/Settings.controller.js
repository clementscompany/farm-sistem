import Configurations from "../database/offline/models/configDatabase.js";
import usersModel from "../database/offline/models/users.model.js";
class Settings {
  async getStarted(req, res) {
    try {
      const { start } = req.body;
      if (start === true) {
        const config = Configurations.Admin();
        const setconfig = await config.initialize();
        const { success, message } = setconfig;
        if (!success) {
          return res.status(200).json({ success: false, message: message });
        }

        return res.status(200).json({ success: true, message: message });
      }
      res.status(404).json({
        success: false,
        message: "Erro, não foi identificado nenhum parâmetro de configuração!",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Erro ao configurar o banco de dados, por favor tente novamente mais tarde :" +
          new Error(error).message,
      });
    }
  }

  async CheckPassword(req, res){
    try {
      const {id} = req.params
      const userData = await usersModel.listBy(id);
      if (!userData.senha) {
        return res.status(200).json({success:false, data:"Defina uma senha para iniciar"})
      }

      res.status(200).json({success:true, data:"Usuario possui uma senha"})
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Erro no servoidor, tente mais tarde: " +
          new Error(error).message,
      });
    }
  }
}
export default new Settings();
