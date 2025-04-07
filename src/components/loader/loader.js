import { AppUrl } from "../../config/env/env.js";
import http from "../../hooks/http.js";
import PasswordInput from "../password/passwordInput.js";
import popUp from "../popup/popup.js";
import Spinner from "../spinner/spinner.js";
import wellcameMessage from "../welcome/welcome.js";
class Modal {

  ///loader 
  loader(mainContainer) {
    const modal = document.createElement("section");
    const getModal = mainContainer.querySelector(".modalContainer");
    if (getModal) {
      getModal.innerHTML = Spinner();
      return;
    }
    modal.classList.add("modalContainer");
    modal.innerHTML = Spinner();
    mainContainer.appendChild(modal);
  }

  /// fechar o modal
  close(mainContainer) {
    const modal = mainContainer.querySelector(".modalContainer");
    if (modal) {
      modal.remove();
    }
  }
  // Mensagem de erro
  setError(mainContainer, message) {
    const errorContainer = document.createElement("section");
    const check = mainContainer.querySelector(".modalContainer");
    const closeError = () => {
      mainContainer.querySelector("#closeButton").addEventListener("click", () => {
        mainContainer.querySelector(".modalContainer").remove();
      });
      if (mainContainer.querySelector("#reloadButton")) {
        mainContainer.querySelector("#reloadButton").addEventListener("click", () => {
          window.location.reload();
        });
      }
    };
    if (check) {
      check.innerHTML = popUp(message);
      closeError();
      return;
    }
    errorContainer.innerHTML = popUp(message);
    errorContainer.classList.add("modalContainer");
    mainContainer.appendChild(errorContainer);
    closeError();
  }


  setPassword(mainContainer, id) {
    const passwordContainer = document.createElement("section");
    const check = mainContainer.querySelector(".modalContainer");
   
    if (check) {
      check.innerHTML = PasswordInput(id);
      return;
    }
    passwordContainer.innerHTML = PasswordInput(id);
    passwordContainer.classList.add("modalContainer");
    mainContainer.appendChild(passwordContainer);
  }


  /// mensagens de boas vindas 
  setWelcomeMessage(mainContainer) {
    const newSection = document.createElement("section");
    const modalContain = mainContainer.querySelector(".modalContainer");
    const getStarted = () => {
      mainContainer.querySelector("#okButton").addEventListener("click", async () => {
        try {
          this.loader(mainContainer);
          const sendConfig = await http.post(`${AppUrl.server}/sistema/getstarted`, { start: true});
          console.log(sendConfig);
          const {success, message} = sendConfig;
          if (!success) {
            this.close(mainContainer);
            this.setError(mainContainer, {success:false, data:message})
            return;
          }
          this.close(mainContainer);
          this.loader(mainContainer);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error) {
          this.close(mainContainer);
          this.setError(mainContainer, { success: false, data: "Falha na chamada: " + error});
          console.log(error);
        }
      });
    };
    if (modalContain) {
      modalContain.innerHTML = wellcameMessage();
      return;
    }
    newSection.innerHTML = wellcameMessage();
    newSection.classList.add("modalContainer");
    mainContainer.appendChild(newSection);
    getStarted();
  }
}
export default new Modal();
