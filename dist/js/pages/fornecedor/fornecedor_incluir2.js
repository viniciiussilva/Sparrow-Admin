$(function(){
    'use strict'

    var tipoDocumento = $("#divTipoDocumento");
    var nomeRazaoSocial = $("#divRazaoSocial");
    var nomeFantasia = $("#divNomeFantasia");

    tipoDocumento.hide();
    nomeRazaoSocial.hide();
    nomeFantasia.hide();

    $(document).on('click', 'input[type=radio]', function() {
        var id = $(this).prop('id');
        mostrarInput(id);
    });

    function mostrarInput(id){
        switch (id) {
            case 'id':
                    $('#divTipoDocumento label').text('CPF');
                    $('#divTipoDocumento input').prop('for', 'cpf');
                    $('#divTipoDocumento input').prop('name', 'cpf');
                    tipoDocumento.show();
                    $('#divNomeRazaoSocial label').text('Nome');
                    $('#divNomeRazaoSocial label').prop('for','nome');
                    $('#divNomeRazaoSocial input').prop('name', 'nome');
                    $('#divNomeRazaoSocial input').prop('id', 'nome');
                    nomeRazaoSocial.show();               
                break;

                case 'pj':
                    $('#divTipoDocumento label').text('CNPJ');
                    $('#divTipoDocumento label').prop('name', 'cnpj');
                    $('#divTipoDocumento input').prop('id', 'cnpj');
                    $('#divTipoDocumento input').prop('id', 'cpf');
                    tipoDocumento.show();
                    $('#divNomeRazaoSocial label').text('Razao Social');
                    $('#divNomeRazaoSocial label').prop('for','razaoSocial');
                    $('#divNomeRazaoSocial input').prop('name', 'razaoSocial');
                    $('#divNomeRazaoSocial input').prop('id', 'razaoSocial');
                    nomeRazaoSocial.show();
                    nomeFantasia.show();               
                break;
        
            default:
                break;
        }
    }
})