export class Tecnico{
    arrayTecnico=[]
    constructor(nomeCompleto,credencialAcesso, turnoTrabalho){
        this.nome= nomeCompleto;
        this.acesso=credencialAcesso;
        this.turno= turnoTrabalho;
    }
    contratarTecnico(credencialAcesso,turnoTrabalho){
        if(credencialAcesso.trim().length===" "){
            throw new Error("Preencher o espaço vazio!");
        }
       if(turnoTrabalho.trim().length===" "){
        throw new Error("Turno invalido!");
       }
        }
    listarEquipe(){
       this.contratarTecnico(this.nomeCompleto,this.credencialAcesso,this.turnoTrabalho);
       const novoTecnico={
        nomeCompleto: this.nomeCompleto,
        credencialAcesso: this.credencialAcesso,
        turnoTrabalho: this.turnoTrabalho
       };
       this.arrayTecnico.push(novoTecnico);
       console.log(`listar equipe: ${novoTecnico}`);
    }
}