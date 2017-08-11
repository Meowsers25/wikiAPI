$(document).ready(function() {

    $("#button").click(function() {
        var submission = $("#search").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + submission + "&format=json&callback=?";

        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(response){
                // console.log(response[1][0]);
                // console.log(response[2][0]);
                // console.log(response[3][0]);
                // $("#results").html(response[1][0]);
                var keyWord = response[1];
                var description = response[2];
                var html = "<ul class='list-group'style='list-style: none;'>";
                $.each(keyWord, function (index, keyWord) {
                    html += "<li class='list-item'>" + "<em>" + keyWord + "</em>" + "<br>" + description + "</li>";
                });
                html += "</ul>";
                $("#results").html(html);

            },
            error: function(error){
                console.log('error');
            }
        });






    });
});