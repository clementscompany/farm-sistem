function popUp(message) {
  const {success, data} = message;
  return `
    <div class="popUpError">
      <div class="message">
        <span>
          ${
            success === true ?  data : "Erro, " + data
          }
        </span>
      </div>
      <div class="buttons">
        <button class="okButton" id="closeButton">ok</button>
        ${
          success === false ? 
          `
          <button class="reloadButton" id="reloadButton">
            <i class="bi bi-arrow-clockwise"></i> Reload
          </button>
          `
          :''
        }
      </div>
    </div>
  `;
}
export default popUp;
