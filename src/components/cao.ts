import Container from "../container/container";
import IRacao from "../interfaces/racao";

export default class Cao {
    /**
     * FIXME: Verificar se essa forma de obtenção do 'componente' não se comporta como um Service Locator.
     * Já que o desenvolvedor precisa pedir explicitamente o tipo de dado que deseja, contrariando assim o conceito
     * de inversão de controle.
     */
    private racao: IRacao = Container.get<IRacao>("Racao", "Cao");
    private peso: number = 3;

    public alimentar(gramasRacao: number): void {
        this.peso += this.racao.getAcrescimoPeso(gramasRacao);
    }

    public getPeso(): number {
        return this.peso;
    }
}
