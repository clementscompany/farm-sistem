function PasswordInput(id) {
  return `
       <div class="loginContainer">
        <div class="contentLogin">
        <form action="#" class="formLogin" id="formLogin">
          <div class="topFormLogin">
            <h2>Farma Gestão</h2>
            <div class="textError" id="textError">
              <span>Defina a sua senha</span>
            </div>
            <input type="hidden" value="${id ? id : ""}">
            <div class="inputs">
              <div class="input">
                <input type="password" placeholder="Sua senha:" name="password">
              </div>
              <div class="input">
                <input type="password" placeholder="Confirme a sua senha:" name="confirmPassword">
              </div>
              <div class="input">
                <button>Entrar</button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    `;
}
export default PasswordInput;
