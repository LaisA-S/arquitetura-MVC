 import{ TecnicoMode } from "../models/TecnicoMode.js";
 export class TecnicoController{
 processarAdmissao(nomeCompleto,credencialAcesso){
    try{
            const Tecnico= new Tecnico(nomeCompleto,credencialAcesso);
            Tecnico.validarCredencial(credencialAcesso);
            console.log("Cadastro concluido!");
        }
        catch{
            console.log("Acesso negado!");
            this.traduzirErro(errorMonitor.message)
        }
        finally{
            console.log("Operação concluida!");
        }
    }
    consultarEquipe(){
        this.cessarAdmissao(this.nomeCompleto,this.credencialAcesso);
        const novoequipe= {
            nomeCompleto: nomeCompleto,
            credencialAcesso: credencialAcesso
        };  
         this.arrayequipe.push(novoequipe)
        console.log(`Consultar Equipe: ${novoequipe}`); 
    }
}
 
 
 
 
 
 
 
