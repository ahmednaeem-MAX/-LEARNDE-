// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
	var x = document.getElementById("list-switch");
	if(i%2 == 0) {
		document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
		document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
	}else {
		document.getElementById("list-switch").style= "display: none;";
		document.getElementById("search-switch").style= "display: none;";
	}
	i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

// function google() {
//   	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
// }

// QUIZ Page
function quizt(frame) {
  document.getElementById('f1').style='display: none;';
  document.getElementById('f2').style='display: none;';
  document.getElementById('f3').style='display: none;';
  document.getElementById('f4').style='display: none;';
  document.getElementById('f5').style='display: none;';
  document.getElementById('f6').style='display: none;';
  document.getElementById('f7').style='display: none;';
  document.getElementById('f8').style='display: none;';
  document.getElementById('f9').style='display: none;';
  document.getElementById('f10').style='display: none;';
  document.getElementById('f11').style='display: none;';
  if(frame == 1) document.getElementById('f1').style = 'display: block';
  else if(frame == 2) document.getElementById('f2').style = 'display: block';
  else if(frame == 3) document.getElementById('f3').style = 'display: block';
  else if(frame == 4) document.getElementById('f4').style = 'display: block';
  else if(frame == 5) document.getElementById('f5').style = 'display: block';
  else if(frame == 6) document.getElementById('f6').style = 'display: block';
  else if(frame == 7) document.getElementById('f7').style = 'display: block';
  else if(frame == 8) document.getElementById('f8').style = 'display: block';
  else if(frame == 9) document.getElementById('f9').style = 'display: block';
  else if(frame == 10) document.getElementById('f10').style = 'display: block';
  else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
  else alert('error');
}

// function startquize() {
// 	let messages = ["Hello!", "Good morning!", "Have a great day!", "Take care!"];

// // Generate a random number between 0 and the length of the array
// let randomNumber = Math.floor(Math.random() * messages.length);

// // let mas =document.getElementById("massage");

// // mas = `${messages[randomNumber]}`;

// // document.write(`<p style="color:#fff">${messages[randomNumber]}</p`);
// // Print the message at the index of the random number
// document.write(`<p>${messages[randomNumber]}</p`);
// }



	let messages = ["حاسبوا أنفسكم قبل أن تحاسبوا", "﴿ٱلَّذِینَ إِذَاۤ أَصَـٰبَتۡهُم مُّصِیبَةࣱ قَالُوۤا۟ إِنَّا لِلَّهِ وَإِنَّاۤ إِلَیۡهِ رَ ٰ⁠جِعُونَ﴾ [البقرة 156].", 
  "﴿وَأَنَّ ٱلۡمَسَـٰجِدَ لِلَّهِ فَلَا تَدۡعُوا۟ مَعَ ٱللَّهِ أَحَدࣰا * وَأَنَّهُۥ لَمَّا قَامَ عَبۡدُ ٱللَّهِ یَدۡعُوهُ كَادُوا۟ یَكُونُونَ عَلَیۡهِ لِبَدࣰا  [الجن 18 ،19].",
   " {مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ} [ق:18].","{فَلَا تُزَكُّوا أَنفُسَكُمْ ۖ هُوَ أَعْلَمُ بِمَنِ اتَّقَىٰ} [النجم:32]","{إِنَّمَا يَخْشَى اللَّـهَ مِنْ عِبَادِهِ الْعُلَمَاءُ} [فاطر:28].",
  "{لَئِن شَكَرْ‌تُمْ لَأَزِيدَنَّكُمْ} [إبراهيم:7].","{فَاذْكُرُ‌ونِي أَذْكُرْ‌كُمْ} [البقرة:152].","إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجۡعَىٰۤ ﴿ العلق 8﴾","عذر أقبح من ذنب .",
"من شب على شئ شاب عليه .","لا تؤجل عمل اليوم إلى الغد","الدهر يومان يوم لك ويوم عليك .","العجلة من الشيطان .",
"رحم الله إمرء عرف قدر نفسه .","من تدخل فيما لا يعنيه لقى ما لا يرضيه .","من راقب الناس مات هما ."," أخوك من صَدَقك لا من صدّقك .",
"وإذا كانت النفوس كباراً تعبت في مرادها الأجسام .","اطلب من العلوم علماً ينفعك ينفي الأذى والعيب ثم يرفعك ."," التجارب ليست لها نهاية والمرء منها في زيادة .",
" العلم زين فكن للعلم مكتسباً وكن له طالبًا ما عشت مقتبسا ."];

// Generate a random number between 0 and the length of the array
let randomNumber = Math.floor(Math.random() * messages.length);


let tes ='';
tes=`<p style="color:#fff">${messages[randomNumber]}</p`;

document.getElementById('message').innerHTML = tes;
// Print the message at the index of the random number


// console.log(test);
//  `<p>${messages[randomNumber]}</p`;


// Toggle between hide and show for all <p> elements
// b=document.getElementById('bt');
// t=document.getElementById('test')
// console.log(g);
$('#bt').click(function(){
  $("#message").slideToggle();
  $("span").toggle();

});


