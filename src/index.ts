import Cao from "./components/cao";
import Container from "./container/container";

Container.configure();
const cao = new Cao();
cao.alimentar(10);
console.log(cao.getPeso());
