function welcomeMessage(){
  return (
    `
      <div class="modalContent">
        <h2>Bem-vindo ao Sistema de Gestão de Farmácia</h2>
        <p>Este é um aplicativo desktop desenvolvido para ajudar na gestão de farmácias, facilitando o controle de estoque, vendas e muito mais.</p>
        <button id="okButton">
          Toque para iniciar
          <i class="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    `
  );
}
export default welcomeMessage;