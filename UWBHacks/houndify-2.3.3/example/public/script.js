    function func(arr){
		console.log("In func!!!!!");
        //var x = document.getElementById("textBox").value;
        this.hash = new hashMap();
		console.log("Creating Image: " + arr);
		this.hash.createImage(arr);
       // for(var i=0;i<arr.length;i++){
        //    hashMap.createImage(arr[i]);
        //}
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