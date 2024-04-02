var db = {};

    db.init = function(callback) {
        $.getJSON('db.json', function(data) {
            db.data = data;
            if(callback) {
                callback();
            }
        });
    }

    function initSelect() {
        var select = $('#option');
        $.each(db.data, function(index, item) {
            select.append($('<option>', {
                value: item.id,
                text: item.titulo
            }));
        });
    }

    $(document).ready(function() {
        db.init(initSelect);

        $('#option').change(function() {
            var id = $(this).val();
            var item = db.data.find(function(item) {
                return item.id == id;
            });
            $('#answer').val(item.descricao);
        });
    });