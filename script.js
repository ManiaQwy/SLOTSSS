const SYMBOLS = ["💲","💎","🃏","🍀","💰","🍒","🍉","🍓","🍊","🍋","🍐"]
let slotMachine = [0,0,0];
let AllTimeStache = 20;
let StachCounter = document.getElementById("StacheCounter");
let SlotOne = document.getElementById("slot1");
let SlotTwo = document.getElementById("slot2");
let SlotThree = document.getElementById("slot3");
let symbOne = 0;
let symbTwo = 0;
let symbThree = 0;
function ItsGamblingTime(){
    if(AllTimeStache <= 0){
        location.reload()
    } else{
        AllTimeStache--;
    }
    StachCounter.innerHTML = AllTimeStache;
    symbOne = Math.floor((Math.random() * 10));
    symbTwo = Math.floor((Math.random() * 10));
    symbThree = Math.floor((Math.random() * 10));
    slotMachine[0] = symbOne;
    slotMachine[1] = symbTwo;
    slotMachine[2] = symbThree;
    SwitchPictures();
    PointCounter();
    StachCounter.innerHTML = AllTimeStache;
}

function SwitchPictures(){
        SlotOne.innerHTML = SYMBOLS[symbOne];
        SlotTwo.innerHTML = SYMBOLS[symbTwo];
        SlotThree.innerHTML = SYMBOLS[symbThree];
}

//im about to commit a if-else war crime

function PointCounter(){
    if(slotMachine[0] == slotMachine[1] && slotMachine[1] == slotMachine[2]){
        if(slotMachine[0] == 0){
            AllTimeStache = AllTimeStache + 100;
        } else if(slotMachine[0] == 1 || slotMachine[0] == 2 || slotMachine[0] == 3 || slotMachine[0] == 4){
            AllTimeStache = AllTimeStache + 75;
        } else if(slotMachine[0] == 5 || slotMachine[0] == 6 || slotMachine[0] == 7 || slotMachine[0] == 8 || slotMachine[0] == 9 || slotMachine[0] == 10){
            AllTimeStache = AllTimeStache + 50;
        }
    } else if(slotMachine[0] == slotMachine[1] || slotMachine[1] == slotMachine[2]){
        if(slotMachine[1] == 0){
            AllTimeStache = AllTimeStache + 15;
        } else if(slotMachine[1] == 1 || slotMachine[1] == 2 || slotMachine[1] == 3 || slotMachine[1] == 4){
            AllTimeStache = AllTimeStache + 10;
        } else if(slotMachine[1] == 5 || slotMachine[1] == 6 || slotMachine[1] == 7 || slotMachine[1] == 8 || slotMachine[1] == 9 || slotMachine[1] == 10){
            AllTimeStache = AllTimeStache + 5;
        }
    }
}
