import auth from "../auth/Auth.js";
import User from "../database/offline/models/users.model.js";
class Login {
  async index(req, res) {
    try {
      const data = await User.list();
      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async Login(req, res){
    try {
      const data = await auth.login(req.body)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default new Login();
