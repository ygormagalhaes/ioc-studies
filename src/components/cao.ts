import Container from "../container/container";
import IRacao from "../interfaces/racao";

export default class Cao {
    /**
     * FIXME: Verificar se essa forma de obtenção do 'componente' não se comporta como um Service Locator.
     * Já que o desenvolvedor precisa pedir explicitamente o tipo de dado que deseja, contrariando assim o conceito
     * de inversão de controle.
     * "The important difference between the two patterns is about how that implementation is provided
     * to the application class. With service locator the application class asks for it explicitly by
     * a message to the locator. With injection there is no explicit request, the service appears in
     * the application class - hence the inversion of control." - Martin Fowler
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
