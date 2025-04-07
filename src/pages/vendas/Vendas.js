import ClienBox from "../../components/ClientBox/ClientBox.js";
import HomeComponent from "../../components/comecomponent/HomeComponent.js";
import VendasComponent from "../../components/VendasComponent/VendasComponent.js";

class Vendas{
  constructor(mainContainer){
    this.Init(mainContainer);
  }
   
  Init(mainContainer){
    this.Tabs().index(mainContainer);
  }

  Tabs(){
    const index = (mainContainer)=>{
      mainContainer.innerHTML = HomeComponent({vendas:VendasComponent(), clientBox:ClienBox()})
    }

    return {index};
  }

}
export default Vendas;