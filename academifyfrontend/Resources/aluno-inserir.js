

//Processar formulário
$('#form-inserir-membro').submit(function (event) {

    event.preventDefault();

    //Criar formData
    var formData = {
        'oponentesVencidos': $('#input-oponentesVencidos').val(),
        'nome': $('#input-nome').val()
    };

    alert(JSON.stringify(formData));

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           // 'Authorization': 'Beaver ' + $.cookie('jwt_token'),
        },
        type: 'POST',
        url: 'http://localhost:8080/api/guilda/cadastrar',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function (data) {
            location.href = 'listarGuerreiros.html';

        },
        error: function (data) {
            $('#div-alert-message').prepend(data.responseText);
            $('#div-alert-message').fadeIn();
        }
    });
});