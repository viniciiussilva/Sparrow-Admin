$(function () {
    'use strict'

    var tipoDocumento = $("#divTipoDocumento");
    var nomeRazaoSocial = $("#divNomeRazaoSocial");
    var nomeFantasia = $("#divNomeFantasia");

    tipoDocumento.hide();
    nomeRazaoSocial.hide();
    nomeFantasia.hide();
    function mostrarInput(id) {
        switch (id) {
            case 'pf':
                $('#divTipoDocumento label').text('CPF');
                $('#divTipoDocumento label').prop('for', 'cpf');
                $('#divTipoDocumento input').prop('name', 'cpf')
                $('#divTipoDocumento input').prop('id','cpf')
                $('#divTipoDocumento input').mask('000.000.000-00');

                tipoDocumento.show();
                $('#divNomeRazaoSocial label').text('Nome');
                $('#divNomeRazaoSocial label').prop('for','nome');
                $('#divNomeRazaoSocial input').prop('name', 'nome');
                $('#divNomeRazaoSocial input').prop('id', 'nome');
                nomeRazaoSocial.show();

                break;
            case 'pj':
                $('#divTipoDocumento label').text('CNPJ');
                $('#divTipoDocumento input').prop('name', 'cnpj');
                $('#divTipoDocumento input').prop('id', 'cnpj');
                $('#divTipoDocumento input').prop('number', 'phone')
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

    $(document).on('click', 'input[type=radio]', function () {
        var id = $(this).prop('id');
        mostrarInput(id);
    });

})
