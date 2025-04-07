export default function HomeComponent({ data, analitic, vendas, clientBox }) {
  return `
    <section class="homeContainer" id="homeContainer">
    <div class="left">
      <div class="topLeft">
        <i class="bi bi-heart-pulse-fill"></i>
        <div class="text">
          <h3>Farma Soft</h3>
          <small>Gestão Comercial</small>
        </div>
      </div>
      <nav class="menu" id="menu">
        <ul>
            <li><a href="#/home" ><i class="bi bi-stack"></i> <span>Dashboard</span></a></li>
            <li><a href="#/vendas"><i class="bi bi-cash-coin"></i> <span>Vendas</span></a></li>
            <li><a href="#/home"><i class="bi bi-capsule"></i> <span>Medicamentos</span></a></li>
            <li><a href="#/home"><i class="bi bi-person-lines-fill"></i> <span>Clientes</span></a></li>
            <li><a href="#/home"><i class="bi bi-graph-up-arrow"></i> <span>Relatórios</span></a></li>
            <li><a href="#/home"><i class="bi bi-gear-fill"></i> <span>Configurações</span></a></li>
        </ul>
      </nav>
    </div>
    <!--  -->
    <div class="rigthContainer">
      <div class="topContainer">
        ${clientBox ? clientBox : `
          <div class="inputBox">
            <input type="search" placeholder="Pesquisar...">
            <i class="bi bi-search"></i>
          </div>
          `}
        <div class="dataTime">
          <i class="bi bi-cloud-sun-fill"></i>
          <div class="text">
            <h3>Bom dia</h3>
            <small>07/03/2025 Hora: 18:50</small>
          </div>
        </div>
        <div class="avatar">
           <div class="perfil">
            <i class="bi bi-person-circle"></i>
           </div>
          <button><i class="bi bi-chevron-down"></i></button>
        </div>
      </div>

      <div class="mainContent">
        ${ analitic ? analitic : "" }
        ${ vendas ? vendas : "" }
      </div>
    </div>
  </section>
    `;
}
