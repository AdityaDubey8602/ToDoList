var nodelist = document.getElementsByTagName("LI");
var i;

var textInput = document.getElementById("myInput");

textInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();

        document.getElementById("add").click();
    }
});


for(i=0; i<nodelist.length; i++){
    var span = document.createElement("SPAN");
    span.style.color = "white";
    var Txt = document.createTextNode("\u00D7");
    
    span.className = "close";
    
    span.appendChild(Txt);
    nodelist[i].appendChild(span);
    
}

var close = document.getElementsByClassName("close");

var i;

for(i=0;i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement(){
    var li = document.createElement("LI");
    var inputVal = document.getElementById("myInput").value;
    var t = document.createTextNode(inputVal);
    li.appendChild(t);
    
    if(inputVal === ""){
        alert("You must write something there.");
    }else{
        document.getElementById("myUL").appendChild(li);
        li.className = "list-group-item bg-dark";
    }
    
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    span.style.color = "white";
    var Text = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(Text);
    li.appendChild(span);

    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}






