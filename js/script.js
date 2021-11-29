// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"vtfront": "vtfront.png",
	"vtsearchwrong": "vtSearchPageWrong.png",
	"vtsearchright": "vtSearchPage.png",
	"driving": "driving.jpg",
	"darkroom": "darkroom.jpg",
	"livingroom": "livingroom.jpg"
});

monogatari.assets ('music', {
	'falling': 'bodythud.mp3',
	'break': "break.wav",
});

// Define the Characters
monogatari.characters ({
	'm': {
		name: 'Machida',
		color: '#5bcaff',
		directory: 'machida', 
		expressions: {
			angry: 'expressions/normal.png',
			happy: 'expressions/happy.jpeg',
			normal: 'normal.png',
			sad: 'sad.png',
			surprised: 'surprised.png'
	  }
	},
	'a': {
		name: 'Akaso',
		color: '#5bcaff',
		directory: 'akaso', 
		expressions: {
			angry: 'expressions/normal.png',
			happy: 'expressions/happy.jpeg',
			normal: 'normal.png',
			sad: 'sad.png',
			surprised: 'surprised.png'
	  }
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
	"show scene driving with fadeIn",
	"nvl Machida đang trên đường về nhà từ phim trường.",
	"wait 1000",
	"nvl Tiếng nhạc êm ái trong xe, nhưng anh không còn tâm trí đâu mà thưởng thức.",
	"wait 1000",
	"nvl Anh đang không ngừng suy nghĩ về Akaso, cậu bạn trai bé nhỏ của anh.",
	"wait 1000",
	"nvl Dạo gần đây hình như cậu ấy đang giận dỗi anh thì phải.",
	"wait 500",
	"nvl Điển hình như sáng nay, cậu ấy thậm chí còn không hôn anh khi thức dậy...",
	"wait 500",
	"nvl Lúc anh rời nhà cũng không ôm anh lấy một cái.",
	"wait 500",
	"nvl Nói chung là hoàn toàn phớt lờ anh, thi thoảng còn .",
	"wait 500",
	"nvl Ừ thì đúng là dạo này công việc của anh có hơi bận rộn, ít có thời gian dành cho cậu.",
	"nvl Anh cũng thấy áy náy lắm chứ, nhưng biết sao được.",
	'nvl Machida thở dài... Thôi thì đợi mấy nữa thư thả, anh sẽ "đền bù" cho cậu sau vậy...',
	"nvl Mải suy nghĩ, Machida đã về đến căn hộ chung của hai người lúc nào không hay.",

	"show scene room with fadeIn",
	"nvl Anh mở cửa bước vào, cả căn phòng bị bao trùm trong bóng tối.",
	"nvl Anh với tay mở đèn, thì bỗng nhiên...",
	"play music falling",
	"nvl Machida ngã xuống...",
	"nvl Trước khi rơi vào hôn mê, anh lờ mờ nhận ra trong bóng tối...",
	"nvl Bóng dáng quen thuộc của ai đó...",
	"wait 3000",

	"show scene livingroom with fadeIn",
	"play music breaking",
	"nvl Một tiếng động lớn đã đánh thức Machida.",
	"nvl Anh hoang mang nhìn quanh và nhận thấy mình đang ở trong 1 căn phòng kỳ lạ, không giống với phòng khách nhà anh.",
	"m Đây là đâu? Sao mình lại ở đây?",
	"Còn chưa kịp .",

	'nvl Machida tỉnh dậy và nhận ra mình đang ở trong một căn phòng kỳ lạ.',
	'nvl Hình như là phòng ngủ? Nhìn tổng thể cấu trúc căn phòng có vẻ giống phòng ngủ nhà anh.',
	'nvl Anh thử bước ra ngoài và tiến đến phía của chính.',
	"show scene vtfront with clickable",
	"m:happy Mình phải",
	"jump choiceLoop",],
	"choiceLoop":[
	{'Choice':
	{
		"Class": "clickscreen vtfrontpage",
		"Dialog": "",

		"shower": {
			"Text": "shower",
			"Class": "shower",
			"Do": "jump searchBox",
		},
		"curtains": {
			"Text": "curtains",
			"Class": "curtains",
			"Do": "m Chỉ là tấm rèm thôi mà.",
			"Condition": function(){
				return !monogatari.storage().clickedCurtains;
			},
			"onChosen": function(){
				monogatari.storage().clickedCurtains = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedCurtains = false;
			},
		},
		"bathtub": {
			"Text": "bathtub",
			"Class": "bathtub",
			"Do": "m 123",
			"Condition": function(){
				return !monogatari.storage().clickedBathtub;
			},
			"onChosen": function(){
				monogatari.storage().clickedBathtub = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedBathtub = false;
			},
		},
		"hanger": {
			"Text": "hanger",
			"Class": "hanger",
			"Do": "Phải rồi, mình còn quên đặt mua cái giá treo mới gãy nữa. Nhưng có lẽ đó cũng không phải vấn đề.",
			"Condition": function(){
				return !monogatari.storage().clickedHanger;
			},
			"onChosen": function(){
				monogatari.storage().clickedHanger = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedHanger = false;
			},
		},
		"mirror": {
			"Text": "mirror",
			"Class": "mirror",
			"Do": "m Đúng là đôi lúc mình có làm em ấy xấu hổ khi nhìn vào gương nhưng... Mình không nghĩ đó là vấn đề.",
			"Condition": function(){
				return !monogatari.storage().clickedMirror;
			},
			"onChosen": function(){
				monogatari.storage().clickedMirror = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedMirror = false;
			},
		},
		"splash": {
			"Text": "splash",
			"Class": "vtsplash",
			"Do": "jump splash",
		},
		"machine": {
			"Text": "machine",
			"Class": "machine",
			"Do": "m Mình không nghĩ vấn đề là ở máy giặt.",
			"Condition": function(){
				return !monogatari.storage().clickedMachine;
			},
			"onChosen": function(){
				monogatari.storage().clickedMachine = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedMachine = false;
			},
		},
	}
	},

	"jump choiceLoop",
	],

	"splash": [
		"m Hoài niệm ghê... ",
		"m Tuy là lần đó mình đã hơi quá nhiệt tình...",
		"m Và không may làm vỡ bồn rửa. ",
		"m Nhưng mình không nghĩ em ấy giận chuyện đó... Em ấy còn nói là đã rất vui mà.",
		{
			"Condition": function(){
				return !monogatari.storage().clickedSplash;
			},
			"onChosen": function(){
				monogatari.storage().clickedSplash = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedSplash = false;
			}
		},
	],
	"searchBox": [
		"m Đúng rồi, là vòi sen đó.",
		"m Mình nhớ là em ấy đã từng rất giận mình về vụ vòi sen này...",
		"m Đúng rồi, là vòi sen đó.",
		{'Input': {
			'Text': 'Enter your Search Terms',
			'Validation': function(input) {
				return input.trim().length > 0;
			},
			'Save': function(input) {
				monogatari.storage().searchTerm = input;
			},
			'Warning': 'Enter something to search, please.',
		}},
		{'Conditional':{
		'Condition': function() {
			return monogatari.storage().searchTerm == "Remi Autor"
		},
		'True': "jump correctName",
		'False': "jump wrongName",
		}},
	],
	"correctName": [
		"show scene vtsearchright with clickable",
		"m There they are!! I have successfully stalked a stranger!!",
		"YOU WIIIIIIIIIIIIIIIN!",
		"end",
	],
	"wrongName": [
	"show scene vtsearchwrong with clickable",
	"m Oh noooo! I don't see them!",
	"m Oh wait, I didn't type Remi Autor, I typed {{searchTerm}}.",
	"m Let's try that again.",
	"jump wrongSearchLoop",
	],
	"wrongSearchLoop": [
	{'Choice':{
		"Class": "clickscreen vtwrongsearch",
		"Dialog": "a Yui looked at the search page and clicked something.",
		"wrongPerson": {
			"Text": "wrongperson",
			"Class": "wrongperson",
			"Do": "m This is not Remi Autor. I am not looking to visit this person. I also don't want Remi Autor to get a surprise unexpected friend request from this person because I visited both their page and Remi's page in the same session. Remi might suspect something!",
			"Condition": function(){
				return !monogatari.storage().clickedWrongPerson;
			},
			"onChosen": function(){
				monogatari.storage().clickedWrongPerson = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedWrongPerson = false;
			},
		},
		"searchbox": {
			"Text": "searchbox",
			"Class": "searchbox",
			"Do": "jump searchBox",
		},
		"machine": {
			"Text": "machine",
			"Class": "machine",
			"Do": "m I'm so glad I have an washing achine. If I didn't have one, that click I just made would have resulted in some other company that isn't VisageTome getting even more of my data than they already had sold to them by VisageTome.",
			"Condition": function(){
				return !monogatari.storage().clickedMachine;
			},
			"onChosen": function(){
				monogatari.storage().clickedMachine = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedMachine = false;
			},
		},
		"mirror": {
			"Text": "mirror",
			"Class": "mirror",
			"Do": "m Ah VisageTome. You sure are a fun tome full of visages! Who would have thought that giving a private corporation data on lots of living humans would be so useful to so many people with nefarious intent resulting in it receiving so much funding so that it could become so tremendously powerful and convenient!",
			"Condition": function(){
				return !monogatari.storage().clickedMirror;
			},
			"onChosen": function(){
				monogatari.storage().clickedMirror = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedMirror = false;
			},
		},
	}},
	"jump wrongSearchLoop",
	],
});