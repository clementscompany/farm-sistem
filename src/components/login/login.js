export default function LoginContainer(data) {
  return(`
     <div class="loginContainer">
        <div class="contentLogin">
        <form action="#" class="formLogin" id="formLogin">
          <div class="topFormLogin">
            <div class="logoTop">
              <i class="bi bi-heart-pulse-fill"></i>
              <h2>Farma Soft</h2>
            </div>
            <div class="textError" id="textError">
              <span>login </span>
            </div>
            <div class="inputs">
              <div class="input">
                <select name="username" id="selectUsername">
                  <option value="">Selecione seu usuario</option>
                   ${
                    data.length > 0 ?
                      data.map((user)=>(
                        	` <option value="${user.id}">${user.nome}</option>`
                      )).join(''): ''
                   }
                </select>
              </div>
              <div class="input">
                <input type="password" placeholder="Sua senha:" name="password">
              </div>
              <div class="input">
                <button>Entrar</button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    `)
}