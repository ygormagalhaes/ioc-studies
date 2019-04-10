import MegaRacao from "../components/mega-racao";

export default class Container {

    public static get<T>(interfaceName: string, className: string): T {
        const key = interfaceName + className;
        const classType = this.map.get(key);

        if (classType) {
            return new classType();
        } else {
            throw new Error("Dependência não configurada no container!");
        }
    }

    public static configure(): void {
        this.map = new Map();
        this.map.set("Racao" + "Cao", MegaRacao);
    }

    private static map: Map<string, { new(): any }>; // TODO: Melhorar tipagem do Map.

}
