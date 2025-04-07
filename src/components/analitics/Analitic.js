function Analitics(data){
	return (`
	 <div class="contentDashboard">
	    <div class="cards">
	        <div class="cd">
	            <i class="bi bi-prescription2"></i>
	            <h4>Total de Produtos</h4>
	            <h1>2000</h1>
	        </div>
	        <div class="btcd">
	            <a href="#">Ver detalhes</a>
	        </div>
	    </div>

	    <div class="cards">
	        <div class="cd">
	            <i class="bi bi-clipboard-check"></i>
	            <h4>Medicamentos em Estoque</h4>
	            <h1>1500</h1>
	        </div>
	        <div class="btcd">
	            <a href="#">Ver detalhes</a>
	        </div>
	    </div>

	    <div class="cards">
	        <div class="cd">
	            <i class="bi bi-cart4"></i>
	            <h4>Vendas do Dia</h4>
	            <h1>320</h1>
	        </div>
	        <div class="btcd">
	            <a href="#">Ver detalhes</a>
	        </div>
	    </div>

	    <div class="cards">
	        <div class="cd">
	            <i class="bi bi-exclamation-triangle"></i>
	            <h4>Produtos em Vencimento</h4>
	            <h1>45</h1>
	        </div>
	        <div class="btcd">
	            <a href="#">Ver detalhes</a>
	        </div>
	    </div>
	</div>


  
      <div class="containerTable">
      <div class="top">  
        <h2>Lista de Vendas</h2>
        <button class="button">
          ver tudo
        </button>
      </div>  

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Usuário</th>
                    <th>Data da Venda</th>
                    <th>Total (Kz)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>João Silva</td>
                    <td>Ana Costa</td>
                    <td>2024-03-30 14:23:45</td>
                    <td>25,000.00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Santos</td>
                    <td>Carlos Almeida</td>
                    <td>2024-03-29 10:15:30</td>
                    <td>12,500.00</td>
                </tr>
            </tbody>
        </table>
    </div>
	`)
}
export default Analitics;