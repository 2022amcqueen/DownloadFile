var notationbox = document.getElementById("notationbox")

function format(){
    var number = notationbox.value
    var length = number.replace(".", "").length
    
    var exponet = length - 1
    
    alert(number/(10^exponet) + " * " + "10^" + exponet)
    //1526000000 to 1256 * 10^9
}
