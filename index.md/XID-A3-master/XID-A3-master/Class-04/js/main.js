console.log("are we working?")


$(".menu").click(function(){
//alert ("menu clicked");
	$('.menu').toggleClass("open")
})

$(".double").mouseover(function(){
	$(".square").addClass("shapeShift")
})

$(".double").mouseout(function(){
	$(".square").removeClass("shapeShift")

})

$(document).scroll(function(){
	var ssf = parseInt($(document).scrollTop());
	$(".menu").html("Thus far I have scrolled" + ssf + "pixels")
})

var classList = ["Usman Abdullah","Parya Bafti","Emily Bosschaart", "Madeline Cogen", "Aira Harutyunyan", "Chris Ho", "Che Huang", "Salisa Jatuweerapong", "Beth Jessup", "Junye Jiang", "Dayna Konopelny", "Davis Ladouceur", "Francine Larsen","Mei Li","Justine Ly","Colin Lynch","Austin Mercieca","Max Minuzzo","Grant Novak","Jiin Park","Calum Ralston","Vermont Urbanovich","Tyler Vienneau","Lisa Weber","Yueyun Wu"]
var r = Math.floor(Math.random()*classList.length);
console.log(r)

console.log(classList[15]);