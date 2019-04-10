import Container from "../container/container";
import IRacao from "../interfaces/racao";

export default class Cao {
    private racao: IRacao = Container.get<IRacao>("Racao", "Cao");
    private peso: number = 3;

    public alimentar(gramasRacao: number): void {
        this.peso += this.racao.getAcrescimoPeso(gramasRacao);
    }

    public getPeso(): number {
        return this.peso;
    }
}
