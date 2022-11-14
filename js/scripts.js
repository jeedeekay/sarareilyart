$(function() {
    $("#gallery-tab").click(function() {
        $("#gallery-row").children().show();
    });
    $("#digital-tab").click(function() {
        $("#gallery-row").children("div:not(.digital)").hide();
        $("#gallery-row").children(".digital").show();
    });
    $("#acrylic-tab").click(function() {
        $("#gallery-row").children("div:not(.acrylic)").hide();
        $("#gallery-row").children(".acrylic").show();
    });
    $("#tattoos-tab").click(function() {
        $("#gallery-row").children("div:not(.tattoo)").hide();
        $("#gallery-row").children(".tattoo").show();
    });
    $("#doodles-tab").click(function() {
        $("#gallery-row").children("div:not(.doodle)").hide();
        $("#gallery-row").children(".doodle").show();
    });
});