    function func(){
        var x = document.getElementById("textBox").value;
        this.hash = new hashMap();
        this.hash.createImage(x);
        document.getElementById("text").innerHTML = "# OF MEMES: "+(document.getElementById("body").childElementCount-1);
    }
    
    function remove(){
        var id = document.getElementById("body").childElementCount-2;
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
        document.getElementById("text").innerHTML = "# OF MEMES: "+(document.getElementById("body").childElementCount-1);
    }
    
    function clearMemes(){
        var id = document.getElementById("body").childElementCount-2;
        for(id;id>-1;id--){
            var element = document.getElementById(id);
            element.parentNode.removeChild(element);
        }
        document.getElementById("text").innerHTML = "# OF MEMES: "+(document.getElementById("body").childElementCount-1);
    }