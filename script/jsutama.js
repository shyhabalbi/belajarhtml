
$(document).ready(function () {
    //   alert("Selamat datang")
    var strHtml = '<button type="button" id="idBtnPop" class="btn btn-warning">Pop Up</button>';
    var strHtml2 = '<form>' +
        '  <div class="form-group">' +
        '    <label for="exampleInputEmail1">Email address</label>' +
        '    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Username">' +
        '  </div>' +
        '  <div class="form-group">' +
        '    <label for="exampleInputPassword1">Password</label>' +
        '    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">' +
        '  </div>' +
        '  <div class="form-group">' +
        '    <label for="exampleInputFile">File input</label>' +
        '    <input type="file" id="exampleInputFile">' +
        '    <p class="help-block">Example block-level help text here.</p>' +
        '  </div>' +
        '  <div class="checkbox">' +
        '    <label>' +
        '      <input type="checkbox"> Check me out' +
        '    </label>' +
        '  </div>' +
        '  <button type="submit" class="btn btn-info">Submit</button>' +
        '</form>';

    $('#idBtnTest').click(function () {
        $('#idDivForm').append(strHtml);
        $('#idBtnPop').click(function () {
            $('#idModal').modal('show')
            $('#idMdlBody').append(strHtml2)
        });

    });


});