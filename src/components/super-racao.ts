import IRacao from "../interfaces/racao";

export default class SuperRacao implements IRacao {
    public getAcrescimoPeso(gramasRacao: number): number {
        return .5;
    }
}
