import Modal from "../../components/loader/loader.js";
import LoginContainer from "../../components/login/login.js";
import { AppUrl } from "../../config/env/env.js";
import HttpRequests from "../../hooks/http.js";
import { Navigate } from "../../Routes.js";

class LoginPage {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.LogIn(this.mainContainer);
  }

  /// listar usuarios 
  async getUsers(mainContainer) {
    try {
      if (mainContainer) { Modal.loader(mainContainer); }
      const list = await HttpRequests.get(`${AppUrl.server}/users/list`);
      if (list) {
        Modal.close(mainContainer);
        return list;
      }
    } catch (error) {
      console.log(error);
      Modal.setError(mainContainer, {
        success: false,
        data: "Falha na comunicação com o servidor, por favor tente mais tarde: " 
        + new Error(error).message,
      });
    }
  }

  ////enviar os dados para a api
  async sendUsers(mainContainer, data) {
    try {
      if (mainContainer) { Modal.loader(mainContainer); }
      const list = await HttpRequests.post(`${AppUrl.server}/auth/login`, data);
      if (list) {
        Modal.close(mainContainer);
        return list;
      }
    } catch (error) {
      console.log(error);
      Modal.setError(mainContainer, {
        success: false,
        data: "Falha na comunicação com o servidor, por favor tente mais tarde: " 
        + new Error(error).message,
      });
    }
  }

  async checkPassword(mainContainer, id) {
    try {
      if (mainContainer) { Modal.loader(mainContainer); }
      const list = await HttpRequests.get(`${AppUrl.server}/sistema/getpassword`, id);
      if (list) {
        Modal.close(mainContainer);
        return list;
      }
    } catch (error) {
      console.log(error);
      Modal.setError(mainContainer, {
        success: false,
        data: "Falha na comunicação com o servidor, por favor tente mais tarde: " 
        + new Error(error).message,
      });
    }
  }

  async LogIn(mainContainer) {
    const data = await this.getUsers(mainContainer);
    if (data.success === false) {
      Modal.setError(mainContainer, {success:false, data:"Erro ou falha na requisição"})
      return;
    }    
    if (data.data.length == 0) {
      Modal.setWelcomeMessage(mainContainer);
      return;
    }
    if (mainContainer.innerHTML = LoginContainer(data?.data)) {
      this.FunctionsLogin(mainContainer)
    }
  }

  FunctionsLogin(mainContainer){
    this.select = mainContainer.querySelector("#selectUsername");
    const form = mainContainer.querySelector("#formLogin");
    if (this.select.value.trim() !== "") {
      this.select.addEventListener("change", async (e)=>{
      const getPassword  = await this.checkPassword(mainContainer, this.select.value);
       const { success } = getPassword;
       if (!success) {
        Modal.close(mainContainer);
        Modal.setPassword(mainContainer, this.select.value)
       }
      })
    }
    
    ////enviar os dados
    const sendFormData = (formData) => {      
      formData.addEventListener("submit", async (e) => {
        e.preventDefault();
        const inputs = formData.querySelectorAll("input, select");
        const textError = formData.querySelector("#textError");
        let isValid = true;

        inputs.forEach((input) => {
          if (input.value.trim() === "") {
            input.style = "border: 1px solid var(--error)";
            textError.classList.add("error");
            textError.querySelector("span").textContent ="Preencha todos os campos";
            isValid = false;
          } else {
            input.style = "border: ";
            textError.classList.remove("error");
            textError.querySelector("span").textContent = "Login";
          }
        });

        if (isValid) {
          const formValues = {};
          formData.querySelectorAll("input, select").forEach((data)=>{ formValues[data.name] = data.value; })
          formValues.defaultLogin = true;

          Modal.loader(mainContainer);
          const api = await this.sendUsers(mainContainer, formValues)
          console.log(api);
          const { message, success } = api;
          if (success === false) {
            Modal.setError(mainContainer, {success:false, data:message});
            return;
          }
          Modal.loader(mainContainer);
          setTimeout(() => {
            Navigate("/");
          }, 1000);
        }
      });
    }
    sendFormData(form);
  }

  setConfigPassword(){

  }
}
export default LoginPage;
