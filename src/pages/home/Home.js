import Analitics from "../../components/analitics/Analitic.js";
import HomeComponent from "../../components/comecomponent/HomeComponent.js";
class Home {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    this.Tabs().dashBoard(mainContainer);
  }

  Tabs() {
    const dashBoard = (mainContainer) => {
      mainContainer.innerHTML = HomeComponent({ analitic: Analitics() });
      const menuList = mainContainer.querySelectorAll("#menu > ul > li > a");
      menuList.forEach((list) => list.classList.remove("avtive"));
      menuList[0].classList.add("active");
    };
    const produtos = () => {
      console.log("Produtos tab selected.");
    };

    return { dashBoard, produtos };
  }

  Functions() {
    console.log("Functions executed.");
  }
}
export default Home;
