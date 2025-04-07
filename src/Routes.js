import { mainContainer } from "../renderer.js";
import Home from "./pages/home/Home.js";
import LoginPage from "./pages/loginPage/LoginPage.js";
import Vendas from "./pages/vendas/Vendas.js";
export function Route() {
  const path = window.location.hash.substring(1);
  switch (path) {
    case "/":
      new Home(mainContainer);
      break;

      case "/home":
        new Home(mainContainer);
      break;
    

    case "/login":
      new LoginPage(mainContainer);
      break;

    case "/vendas":
      new Vendas(mainContainer);
      break;
    default:
      new LoginPage(mainContainer);
      break;
  }
}

export function Navigate(path) {
  window.location.hash = path;
}
