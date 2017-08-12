$(document).ready(function () {

    $("#button").click(function () {
        var submission = $("#search").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + submission + "&format=json&callback=?";

        $.ajax({
            url: url,
            type: "GET",
            dataType: "json", //needed to add this
            success: function (response) {
                console.log(response[1].length);
                // console.log(response[1][0]);
                // console.log(response[2][0]);
                // console.log(response[3][0]);
                // $("#results").html(response[1][0]);
                var keyWords = response[1];
                var description = response[2];
                var anchor = response[3];
                var html = "<ul class='list-group'style='list-style: none;'>";
                $.each(response[1], function (i, element) {
                    console.log(keyWords[i]);
                    console.log(description[i]);
                    console.log(anchor[i]);
                    html += "<li class='list-item'><a style='text-decoration:none; color:inherit;' href=" + anchor[i] + ">" + "<em>" + keyWords[i] + "</em>" + "</a>" + "<br>" + description[i] + "</li>";
                });
                html += "</ul>";

                $("#results").html(html);
                $("#search").val('');

            },
            error: function (error) {
                console.log('error');
            }
        });
    });
});