function refreshPage(){
    window.location.reload();
} 

document.getElementById("inputButton").onclick  = function() {

    var node = document.createElement("li");
    var text = document.getElementById("inputField").value.toLowerCase(); 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("listItems").appendChild(node);
}

document.getElementById("searchWordButton").onclick  = function() {
    $(".message-successful-inquiry").css("visibility", "hidden");
    $(".message-insuccessful-inquiry").css("visibility", "hidden");
    var text = document.getElementById("searchWordBar").value.toLowerCase(); 
    $("#searchedWord").text(text);
    var ul = document.getElementById("listItems");
    var words = ul.getElementsByTagName("li");
    for (var i = 0; i < words.length; ++i) {
        if (words[i].innerHTML === text) {
            return $(".message-successful-inquiry").css("visibility", "visible");
        }
    }
    return $(".message-insuccessful-inquiry").css("visibility", "visible");
}
