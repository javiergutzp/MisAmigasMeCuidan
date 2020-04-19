$('#login_button').on('click', function(){

    let id = $("#id")
    let id_empty = $("#id-empty")

    let password = $("#password")
    let password_empty = $("#password-empty")

    let credentials_incorrect = $('#credentials-incorrect')

    if(id.val() == ''){
        id_empty.removeClass('hidden')
    }

    if(password.val() == ''){
        password_empty.removeClass('hidden')
    }

    json_to_send = {
      "password" : password.val(),
      "id": id.val()
    };
  
    json_to_send = JSON.stringify(json_to_send);
  
    $.ajax({
      url: 'http://localhost:3000/login',
      headers: {
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        alert("Login successfull!");
        localStorage.setItem('token', data.token)
        window.location = '.html//home.html'
      },
      error: function(error_msg) {
        credentials_incorrect.removeClass('hidden')
        alert((error_msg['responseText']));
      }
    });
  });
