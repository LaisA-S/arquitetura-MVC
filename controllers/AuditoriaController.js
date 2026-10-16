export class AuditoriaController{
   static gerarRepositorioGeral(){
    try{
     const equipamentos= EquipamentoModel.listarInventario();
     const tecnicos = TecnicoModel.listarEquipe();

      return{
        titulo: "Auditorio Geral",
        resumo:{
        totalEquipamento: equipamentos.length,
        totalTecnico: tecnicos.length,
        totalGeral: equipamentos.length + tecnicos.length,
      },
      equipamentos,
      tecnicos,
    };
    }   catch (erro) {
        return{
            menssagem: `falha ao gerar o relatório: ${erro.message}`,
        };
    }    
    }
    }

    
