export class EquipamentoModel{
    arrayAtivos = [];

    constructor(tagPatrimonio, tipoEquipamento, capacidadeRam){
        this.tagPatrimonio = tagPatrimonio;
        this.tipoEquipamento = tipoEquipamento;
        this.capacidadeRam = capacidadeRam;
    }

    registrarAtivo(tagPatrimonio, capacidadeRam){
        if(tagPatrimonio.trim().length === " "){
            throw new Error("ERRO: O campo deve ser preenchido.");
        }

        if(capacidadeRam < 8){
            throw new Error("ERRO: O equipamento deve conter mamis de 8GB");
        }
    }

    listarInventario()
}