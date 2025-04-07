export default function ClienBox() {
  return(`
    <div class="clientBox">
      <h2 class="title">Dados do cliente</h2>
      <div class="span">
        <i class="bi bi-person icon"></i>
        <span class="clientName">Moises Clemente</span>
      </div>
      <div class="span">
        <i class="bi bi-telephone icon"></i>
        <span class="clientPhone">+55 11 98765-4321</span>
      </div>
      <div class="span">
        <i class="bi bi-credit-card icon"></i>
        <span class="clientPayment">Cartão de Crédito</span>
      </div>
      <button class="button"><i class="bi bi-search buttonIcon"></i></button>
    </div>
  `);
}