function hashMap(){
    this.crying = [];
    this.brain = [];
    this.spiderman = [];
    this.spongebob = [];
    this.grandma = [];
    this.drinking = [];
    this.gavin = [];
    this.pikachu = [];
    this.theresaMay = [];
    this.pokemon = [];
    this.frogs = [];
    this.animals=[];
    this.dogs = [];
    this.freeRealEstate = [];
    this.spiderman.push("memes/tearymaguire.jpg");
    this.brain.push("memes/waterExpandingBrain.jpg");
    this.brain.push("memes/whomst.jpg");
    this.brain.push("memes/yalldve.jpg");
    this.brain.push("memes/yesnt.jpg");
    this.brain.push("memes/youre-fired-jobnt.jpg");
    this.brain.push("memes/expanding-brain-cereal-and-milk.jpg");
    this.brain.push("memes/great-depression-smallnt-happynt.jpg");
    this.pikachu.push("memes/surprised-pikachu-code-works.png");
    this.pikachu.push("memes/doesnt-write-something-down-forgets.png");
    this.pikachu.push("memes/surprised-pikachu-black-hole.png");
    this.theresaMay.push("memes/theresa-may-spiders-while-you-sleep.jpg");
    this.theresaMay.push("memes/theresa-may-steam-running.jpg");
    this.theresaMay.push("memes/theresa-may-tiktok.jpg");
    this.crying.push("memes/crying.jpg");
    this.crying.push("memes/tearymaguire.jpg");
    this.brain.push("memes/brain.jpg");
    this.brain.push("memes/communism-capitalisnt.jpg");
    this.spongebob.push("memes/spongebobChicken.jpg");
    this.crying.push("memes/iHaveDecidedIWantToDie.jpg");
    this.spiderman.push("memes/spidermanPointing.jpg");
    this.pokemon.push("memes/surprised-pikachu-code-works.png");
    this.pokemon.push("memes/doesnt-write-something-down-forgets.png");
    this.pokemon.push("memes/surprised-pikachu-black-hole.png");
    this.pokemon.push("memes/snakemeup.jpg");
    this.frogs.push("memes/But-Thats-None-Of-My-Business.jpg");
    this.frogs.push("memes/datboi.jpg");
    this.frogs.push("memes/pepe.png");
    this.frogs.push("memes/normies.jpg");
    this.gavin.push("memes/gavin.jpg");
    this.gavin.push("memes/gavin2.jpg");
    this.gavin.push("memes/gavin3.jpg");
    this.gavin.push("memes/gavinscreaming.jpg");
    this.drinking.push("memes/But-Thats-None-Of-My-Business.jpg");
    this.drinking.push("memes/drinkingjuice.png");
    this.drinking.push("memes/bonehurtinjuice.jpg");
    this.dogs.push("memes/bonehurtinjuice.jpg");
    this.dogs.push("memes/doge.jpeg");
    this.animals.push("memes/bonehurtinjuicejpg");
    this.animals.push("memes/doge.jpeg");
    this.animals.push("memes/CrowOfJudgement.jpeg");
    this.animals.push("memes/But-Thats-None-Of-My-Business.jpg");
    this.animals.push("memes/datboi.jpg");
    this.animals.push("memes/pepe.png");
    this.animals.push("memes/normies.jpg");
    this.freeRealEstate.push("memes/free-real-estate.jpg");
    this.freeRealEstate.push("memes/sibling-steal-chair-free-real-estate.png");
    this.freeRealEstate.push("memes/mars-free-real-estate.jpg");
    this.freeRealEstate.push("memes/mosquito-free-real-estate.jpeg");
}

hashMap.prototype.getPath = function(key){
    var arr = this._hash(key);
    if(arr.length!==0){
        num = this._random(arr.length);
        return arr[num];
    }else{
        return "NULL!!!";
    }
};

hashMap.prototype._random = function(length){
    return Math.floor(Math.random()*length);
};

hashMap.prototype._hash = function(key){
    if(key==="crying"||key==="sad"){
        return this.crying;
    }else if(key==="brain"){
        return this.brain;
    }else if(key==="spongebob"){
        return this.spongebob;
    }else if(key==="theresa"||key==="theresa may"||key==="may"){
        return this.theresaMay;
    }else if(key==="pikachu"){
        return this.pikachu;
    }else if(key==="frogs"){
        return this.frogs;
    }else if(key==="gavin"){
        return this.gavin;
    }else if(key==="doge"||key==="dog"){
        return this.dogs;
    }else if(key==="animals"||key==="animal"){
        return this.animals;
    }else if(key==="drinking"){
        return this.drinking;
    }else if(key==="free real estate"||key==="real estate"||key==="free"||key==="estate"){
	    return this.freeRealEstate;
    }else{
        return [];
    }
};

hashMap.prototype.createImage = function(key){
    var filepath = this.getPath(key);
    if(filepath!=="NULL!!!"){
        this.image = document.createElement("IMG");
        var left = Math.floor(Math.random()*100);
        var top = Math.floor(Math.random()*100);
        this.image.setAttribute("style","width:25%;position:absolute;margin-left:"+left+"%;margin-top:"+top+"%");
        var id = document.getElementById("body").childElementCount-1;
        this.image.setAttribute("id",id);
        document.body.appendChild(this.image);
        this.image.setAttribute("src",filepath);
    }
};
