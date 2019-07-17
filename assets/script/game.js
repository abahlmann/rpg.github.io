var you=goat;
var opp=goat;
var wins = 0;
var losses = 0;
var outcome="";
var yourHealth = 100;
var oppHealth = 100;
var needSetup = true;
var goat = {
    health: 115,
    attack: 15,
    src: "assets/pictures/goat.png",
    name:"Dennis",
    attacking: function () {
        this.attack = this.attack+ 5;
    }//attacking()
};//goat properties

var cat = {
    health: 90,
    attack: 10,
    src: "assets/pictures/cat.png",
    name:"Gertrude",
    attacking: function () {
        this.attack = this.attack+ 3;
    },//attacking()
};//cat properties

var snake = {
    health: 70,
    attack: 15,
    src: "assets/pictures/snake.png",
    name:"Snowden",
    attacking: function () {
        this.attack =this.attack+ 5;
    }//attacking()
};//snake properties

var beaver = {
    health: 100,
    attack: 7,
    src: "assets/pictures/beaver.png",
    name:"Mr. Beaver",
    attacking: function () {
        this.attack =this.attack+ 5;
    }//attacking()
};//beaver properties
$("#beaver").attr("src", beaver.src);
$("#beaver-stats").html("<p>NAME: "+beaver.name+"</p><p>HEALTH: "+beaver.health+"HP</p><p>BASE ATTACK: "+beaver.attack+"</p>");
$("#cat").attr("src", cat.src);
$("#cat-stats").html("<p>NAME: "+cat.name+"</p><p>HEALTH: "+cat.health+"HP</p><p>BASE ATTACK: "+cat.attack+"</p>");
$("#snake").attr("src", snake.src);
$("#snake-stats").html("<p>NAME: "+snake.name+"</p><p>HEALTH: "+snake.health+"HP</p><p>BASE ATTACK: "+snake.attack+"</p>");
$("#goat").attr("src", goat.src);
$("#goat-stats").html("<p>NAME: "+goat.name+"</p><p>HEALTH: "+goat.health+"HP</p><p>BASE ATTACK: "+goat.attack+"</p>");
$("#your-health").html("");
$("#opp-health").html("");

function reset() {
    $("#wins").text("WINS: "+wins);
    $("#losses").text("LOSSES: "+losses);
    $("#char-select").show();
    $("#active-char, #opp-select, #attack-section,#active-opp").hide();
    yourHealth=100;
    oppHealth=100;
    needSetup=false;
    beaver.attack=7;
    snake.attack=15;
    cat.attack=10;
    goat.attack=15;
};


function attackMode() {
    yourHealth = you.health;
    console.log(you.health);
    console.log(opp.health);
    $("#your-health").text(yourHealth+"HP");
    oppHealth = opp.health;
    $("#opp-health").text(oppHealth+"HP");
};//attackMode()

function characterSelect(){
$("#beaver").on("click", function () {
    $("#active-char, #opp-select").show();
    $("#char-select").hide();
    $("#you").attr("src", beaver.src);
    you = beaver;
    $("#opp1-stats").html("<p>NAME: "+cat.name+"</p><p>HEALTH: "+cat.health+"HP</p><p>BASE ATTACK: "+cat.attack+"</p>");
    $("#opp2-stats").html("<p>NAME: "+snake.name+"</p><p>HEALTH: "+snake.health+"HP</p><p>BASE ATTACK: "+snake.attack+"</p>");
    $("#opp3-stats").html("<p>NAME: "+goat.name+"</p><p>HEALTH: "+goat.health+"HP</p><p>BASE ATTACK: "+goat.attack+"</p>");
    $("#opp-1").attr("src", cat.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", cat.src);
        opp = cat;
        attackMode();
    });//beaver-cat
    $("#opp-2").attr("src", snake.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", snake.src);
        opp = snake;
        attackMode();
    });//beaver-snake
    $("#opp-3").attr("src", goat.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", goat.src);
        opp = goat;
        attackMode();
    });//beaver-goat
});//beaver

$("#cat").on("click", function () {
    $("#active-char, #opp-select").show();
    $("#char-select").hide();
    $("#you").attr("src", cat.src);
    you = cat;
    $("#opp1-stats").html("<p>NAME: "+beaver.name+"</p><p>HEALTH: "+beaver.health+"HP</p><p>BASE ATTACK: "+beaver.attack+"</p>");
    $("#opp2-stats").html("<p>NAME: "+snake.name+"</p><p>HEALTH: "+snake.health+"HP</p><p>BASE ATTACK: "+snake.attack+"</p>");
    $("#opp3-stats").html("<p>NAME: "+goat.name+"</p><p>HEALTH: "+goat.health+"HP</p><p>BASE ATTACK: "+goat.attack+"</p>");
    $("#opp-1").attr("src", beaver.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", beaver.src);
        opp = beaver;
        attackMode();
    });//cat-beaver
    $("#opp-2").attr("src", snake.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", snake.src);
        opp = snake;
        attackMode();
    });//cat-snake
    $("#opp-3").attr("src", goat.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", goat.src);
        opp = goat;
        attackMode();
    });//cat-snake
});//cat

$("#snake").on("click", function () {
    $("#active-char, #opp-select").show();
    $("#char-select").hide();
    $("#you").attr("src", snake.src);
    you = snake;
    $("#opp-1").attr("src", beaver.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", beaver.src);
        opp = beaver;
        attackMode();
    });//snake-beaver
    $("#opp-2").attr("src", cat.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", cat.src);
        opp = cat;
        attackMode();
    });//snake-cat
    $("#opp-3").attr("src", goat.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", goat.src);
        opp = goat;
        attackMode();
    });//snake-goat
});//snake
$("#goat").on("click", function () {
    $("#active-char, #opp-select").show();
    $("#char-select").hide();
    $("#you").attr("src", goat.src);
    you = goat;
    $("#opp-1").attr("src", beaver.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", beaver.src);
        opp = beaver;
        attackMode();
    });//goat-beaver
    $("#opp-2").attr("src", cat.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", cat.src);
        opp = cat;
        attackMode();
    });//goat-cat
    $("#opp-3").attr("src", snake.src).on("click", function () {
        $("#opp-select").hide();
        $("#attack-section, #active-opp").show();
        $("#opp").attr("src", snake.src);
        opp = snake;
        attackMode();
    });//goat-snake
});
}

$("#attack").on("click", function () {
    yourHealth = yourHealth - opp.attack;
    oppHealth = oppHealth - you.attack;
    opp.attacking();
    you.attacking();
    $("#opp-health").text(oppHealth+"HP");
    $("#your-health").text(yourHealth+"HP");
    if (oppHealth<=0){
        $("#opp-health").text("0HP");
        wins++;
        needSetup=true;
        reset();
    }
    else if (yourHealth<=0){
        $("#your-health").text("0HP");
        losses++;
        needSetup=true;
        reset();
    }
});

reset();
characterSelect();


