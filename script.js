function refreshPage(){
    window.location.reload();
} 

var words = [];

function addWord() {
    var node = document.createElement("li");
    var text = document.getElementById("inputField").value.toLowerCase(); 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("listItems").appendChild(node);
    words.push(text);
}

function searchWord() {
    $(".message-successful-inquiry").css("visibility", "hidden");
    $(".message-insuccessful-inquiry").css("visibility", "hidden");
    var query = document.getElementById("searchWordBar").value.toLowerCase(); 
    $("#searchedWord").text(query);
    const found = words.find((word) => word === query);
    if (found) {
        return $(".message-successful-inquiry").css("visibility", "visible");
    }
    return $(".message-insuccessful-inquiry").css("visibility", "visible");
}
