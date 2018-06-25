$(document).ready(function(){
    $("#submit").click(function(){
        var newtask = {
            name: $("#newtask").val()
        };
        console.log(newtask);
        $.ajax({
            type: "POST",
            data: newtask,
            url: "/api/tasks",    
        }).then(function(data){
            console.log(data);
            location.reload();
        })
    });

    $(".delete").click(function(){
        var id = $(this).attr("data-id");
        console.log(id);
        $.ajax({
            type: "DELETE",
            //data: {id: id},
            url: "/api/tasks/" + id
        }).then(function(data){
            console.log(data);
            location.reload();
        });
    });

    $(".done").click(function(){
        var id = $(this).attr("data-id");
        console.log(id);
        $.ajax({
            type: "PUT",
            //data: {id: id},
            url: "/api/tasks/" + id
        }).then(function(data){
            console.log(data);
            location.reload();
        });
    });
    
});