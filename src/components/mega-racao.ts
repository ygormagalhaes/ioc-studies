import IRacao from "../interfaces/racao";

export default class MegaRacao implements IRacao {
    public getAcrescimoPeso(gramasRacao: number): number {
        return 1;
    }
}
