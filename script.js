$(document).ready(function() {

    $("#button").click(function() {
        var submission = $("#search").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + submission + "&format=json&callback=?";

        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log('error');
            }
        });






    });
});