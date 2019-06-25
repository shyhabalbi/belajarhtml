$(document).ready(function () {
    //   alert("Selamat datang")
    var strHtml = '<button type="button" id="idBtnPop" class="btn btn-warning">Pop Up</button>';
    var strHtml2 = '<form>' +
        '  <div class="form-group">' +
        '    <label for="Nama">Nama</label>' +
        '    <input type="text" class="form-control" id="idNama" placeholder="Masukan Nama ...">' +
        '  </div>' +
        '  <div class="form-group">' +
        '    <label for="Alamat">Alamat</label>' +
        '    <input type="text" class="form-control" id="idAlamat" placeholder="Masukan Alamat">' +
        '  </div>' +
        '<div class="form-group">' +
        '<label for="Jns">Jenis Kelamin</label>' +
        '<label class="radio-inline">' +
        '    <div class="radio">' +
        '      <label>' +
        '        <input type="radio" name="optionRadio" id="idLaki" value="true" checked>' +
        '        Laki-Laki' +
        '      </label>' +
        '    </div>' +
        '    <div class="radio">' +
        '      <label>' +
        '        <input type="radio" name="optionRadio" id="idPerempuan" value="false">' +
        '        Perempuan' +
        '      </label>' +
        '    </div>' +
        '</div>' +
        '<div class="form_group">'+
        '    <label for="Kota">Kota</label>'+
        '    <select class="form-control">'+
        '        <option>Bekasi</option>'+
        '        <option>Luar Bekasi</option>'+
        '    </select>'+
        '</div>'+
        '  <div class="form-group">' +
        '    <label for="exampleInputEmail1">Email address</label>' +
        '    <input type="email" class="form-control" id="idEmail" for="Email" placeholder="example@email.com">' +
        ' </div>' +
        '<div>'+
        '  <button type="submit" class="btn btn-info">Submit</button>' +
        '</div>'+
        '</form>';

       

    $('#idBtnCreateNew').click(function () {
        $('#idModal').modal('show')
        $('#idMdlBody').append(strHtml2)



    });

});