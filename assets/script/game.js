var you;
var opp;
var wins = 0;
var losses = 0;
var yourHealth = 0;
var oppHealth = 0;
var setup = true;
var goat = {
    health: 115,
    attack: 15,
    src: "assets/pictures/goat.png",
    attacking: function () {
        this.attack += 5;
    }//attacking()
};//goat properties

var cat = {
    health: 90,
    attack: 10,
    src: "assets/pictures/cat.png",
    attacking: function () {
        this.attack += 3;
    }//attacking()
};//cat properties

var snake = {
    health: 70,
    attack: 15,
    src: "assets/pictures/snake.png",
    attacking: function () {
        this.attack += 5;
    }//attacking()
};//snake properties

var beaver = {
    health: 100,
    attack: 7,
    src: "assets/pictures/beaver.png",
    attacking: function () {
        this.attack += 5;
    }//attacking()
};//beaver properties

function reset() {
    $("#your-health").html("");
    $("#opp-health").html("");
    $("#beaver").attr("src", beaver.src);
    $("#cat").attr("src", cat.src);
    $("#snake").attr("src", snake.src);
    $("#goat").attr("src", goat.src);

    $("#active-char, #opp-select, #attack-section,#active-opp").hide();

    $("#beaver").on("click", function () {
        $("#active-char, #opp-select").show();
        $("#char-select").hide();
        $("#you").attr("src", beaver.src);
        you = beaver;
        $("#opp-1").attr("src", cat.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", cat.src);
            opp = cat;
            setup = true;
            attackMode();
        });//beaver-cat
        $("#opp-2").attr("src", snake.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", snake.src);
            opp = snake;
            setup = true;
            attackMode();
        });//beaver-snake
        $("#opp-3").attr("src", goat.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", goat.src);
            opp = goat;
            setup = true;
            attackMode();
        });//beaver-goat
    });//beaver

    $("#cat").on("click", function () {
        $("#active-char, #opp-select").show();
        $("#char-select").hide();
        $("#you").attr("src", cat.src);
        you = cat;
        $("#opp-1").attr("src", beaver.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", beaver.src);
            opp = beaver;
            setup = true;
            attackMode();
        });//cat-beaver
        $("#opp-2").attr("src", snake.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", snake.src);
            opp = snake;
            setup = true;
            attackMode();
        });//cat-snake
        $("#opp-3").attr("src", goat.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", goat.src);
            opp = goat;
            setup = true;
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
            setup = true;
            attackMode();
        });//snake-beaver
        $("#opp-2").attr("src", cat.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", cat.src);
            opp = cat;
            setup = true;
            attackMode();
        });//snake-cat
        $("#opp-3").attr("src", goat.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", goat.src);
            opp = goat;
            setup = true;
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
            setup = true;
            attackMode();
        });//goat-beaver
        $("#opp-2").attr("src", cat.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", cat.src);
            opp = cat;
            setup = true;
            attackMode();
        });//goat-cat
        $("#opp-3").attr("src", snake.src).on("click", function () {
            $("#opp-select").hide();
            $("#attack-section, #active-opp").show();
            $("#opp").attr("src", snake.src);
            opp = snake;
            setup = true;
            attackMode();
        });//goat-snake
    });
};


function attackMode() {
    yourHealth = you.health;
    console.log(you.health);
    console.log(opp.health);
    $("#your-health").text(yourHealth+"HP");
    oppHealth = opp.health;
    $("#opp-health").text(oppHealth+"HP");

        $("#attack").on("click", function () {
            you.health = you.health - opp.attack;
            opp.health = opp.health - you.attack;
            opp.attacking();
            you.attacking();
            console.log(opp.health);
            $("#opp-health").text(opp.health+"HP");
            $("#your-health").text(opp.health+"HP");
            if (oppHealth <= 0) {
                setup = true;
                wins++;
            }//you win
            else if (yourHealth <= 0) {
                setup = true;
                losses++;
            }//opp wins
        });//attack click function
};//attackMode()

reset();

// if(!setup){
//     attackMode();
// }
// else{
//     reset();
// }