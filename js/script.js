// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"room": "room.png",
	"vtfront": "vtfront.png",
	"vtsearchwrong": "vtSearchPageWrong.png",
	"vtsearchright": "vtSearchPage.png",
	"driving": "driving.jpg",
	"darkroom": "darkroom.jpg",
	"livingroom": "livingroom.png",
});

// Define the images used in the game.
monogatari.assets ('images', {
  "map": "ldkvn.png",
	"tv": "tv2.png",
  "ldktv": "ldktv.png",
  "backpack": "backpack.png",
  "pw1": "pw1.png",
});

monogatari.assets ('music', {
	'falling': 'bodythud.mp3',
	'break': "break.wav",
	'tvnoise': 'tvnoise.mp3',
	'sg': 'sg.mp3',
	'laugh': 'laugh.mp3',
});

monogatari.assets ('gallery', {
	'livingroom': '1128.jpg'
});

// Monogatari.action ('Notification').notifications ({
// 	'SampleNotification':{
// 			title: 'Hey!',
// 			body: 'This is a notification',
// 			icon: 'assets/images/notification.png'
// 	},
// });

// monogatari.action ('notification').notifications ({
// 	'livingroom':{
// 			title: 'Unlock gallery',
// 			body:'Bạn đã mở khoá thành công livingroom. Save game và mở Gallery để kiểm tra.'
// 	}
// });
monogatari.action ('notification').notifications ({
	'SampleNotification':{
			title: 'Hey!',
			body: 'This is a notification',
			icon: ''
	},
});

monogatari.action ('message').messages ({
	'gameover':{
			title: 'GAME OVER!',
			subtitle: 'From Hien with love <3',
			body:'Rất tiếc, bạn đã phải dừng cuộc chơi tại đây. Cố gắng lần sau nhé!'
	}
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
	},
	'k': {
		name: 'Hitsuji',
		color: '#5bcaff',
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
	"show scene driving with fadeIn",
	
	'show notification SampleNotification 5000',
	"nvl Machida đang trên đường về nhà từ phim trường.",
	// "nvl Tiếng nhạc êm ái trong xe, nhưng anh không còn tâm trí đâu mà thưởng thức.",
	// "nvl Anh đang suy nghĩ về Akaso, cậu bạn trai bé nhỏ của anh.",
	// "nvl Dạo gần đây, cậu ấy có vẻ hay giận dỗi anh vô cớ, thỉnh thoảng còn phớt lờ anh.",
	// "nvl Điển hình là sáng nay, cậu ấy thậm chí còn không hôn anh khi thức dậy.<br/>Lúc anh rời nhà cũng không ôm anh lấy một cái.",
	// 'nvl Nói ra thì bảo nói vớ nói vẩn, chứ kiểu này là lại đang "ghen" với công việc của anh.<br/>Hôm trước còn nhắn tin cho anh "Anh đi mà kết hôn với công việc luôn đi"...',
	// "nvl Ừ thì đúng là dạo này công việc của anh có hơi bận rộn, ít có thời gian dành cho cậu.",
	// "nvl Anh cũng thấy áy náy lắm chứ, nhưng biết sao được.",
	// 'nvl Machida thở dài... Thôi thì đợi mấy nữa thư thả, anh sẽ "đền bù" cho cậu sau vậy.',
	// "nvl Mải suy nghĩ, anh đã về đến căn hộ chung của hai người từ lúc nào không hay.",

	// "show scene room with fadeIn",
	// "Anh mở cửa bước vào, cả căn phòng bị bao trùm trong bóng tối.",
	// 'm "Akachan?"',
	// 'Anh cất tiếng gọi, nhưng không có ai trả lời.',
	// 'm "Em ấy ra ngoài chăng?"',
	// "Anh với tay định mở đèn, nhưng trước khi chạm được vào công tắc...",
	// "show scene room with headShake",
	// "play music falling",
	// "Machida ngã xuống... Ai đó tấn công anh từ phía sau.",
	// "Trước khi rơi vào hôn mê, anh lờ mờ thấy bóng dáng của ai đó vô cùng quen thuộc...",

	"show scene #000 with fadeIn",
	"play music break",
	// "Một tiếng động lớn đã đánh thức Machida.",
	// "Anh mở mắt, loạng choạng đứng dậy.",
	"show scene livingroom with fadeIn",
	// 'Anh nhìn quanh và nhận ra đây không phải phòng khách nhà mình.',
	// "m Đây là đâu? Sao mình lại ở đây?",
	// 'Anh với tay tìm điện thoại trong túi quần.<br/>Điện thoại không có sóng.',
	// "Còn đang chưa kịp hiểu chuyện gì đang xảy ra, thì bỗng trên một giọng nói vang lên...",

	// "play music laugh",
	// '"Fufufu. Cuối cùng anh cũng tỉnh lại rồi."',
	// 'm "Ai đang nói thế? Mau ra mặt đi!"',
	// // "play music laugh",
	// '"Fufufu. Thử nhìn vào TV xem."',
	// 'm "TV?"',
	// "play music tvnoise",
	// "show image tv with flipInY",
	// // "play music sg",
	// "play music laugh",
	// '',
	// 'k "Fufufu. Xin chào, Machida Keita-san. Ta là Cừu vui vẻ đáng yêu dễ thương chăm chỉ tràn ngập năng lượng Hitsuji."',
	// 'k "Chào mừng đến với "Căn hộ chết chóc"."',
	// 'm "..."',
	// 'k "Hẳn là ngươi đang thắc mắc tại sao mình lại ở đây đúng không?"',
	// 'k "Nói một cách ngắn gọn, ta được lệnh của Akaso-sama bắt giữ cậu về đây..."',
	// 'm "Khoan đã. Cậu vừa nói cái gì? Akachan??"',
	// "show image tv with headShake",
	// 'k "Ai cho ngươi gọi chủ nhân của ta như thế hả?"',
	// 'k "Nói tóm lại, cậu chủ rất tức giận về thái độ của ngươi dạo gần đây, và nghĩ phải chăng ngươi đã hết thương cậu ấy rồi..."',
	// 'm "Làm gì có chuyện đó!!!"',
	// 'k "Cái đó ta không cần biết. Muốn chứng minh điều đó, ngươi phải chiến thắng trò chơi này."',
	// 'm "..."',
	// 'm "Được rồi, giờ thì im lặng để ta phổ biến luật chơi."',
	// "hide image tv with flipOutY",

	// "show image ldktv with flipInY",
	// 'k "Căn hộ này mô phỏng căn hộ đầu tiên mà hai người sống chung.',
	// 'k "Luật chơi rất đơn giản. Ngươi sẽ phải tìm kiếm và giải mã bí ẩn trong các căn phòng.',
	// "hide image ldktv with flipOutY",
	// "show image tv with flipInY",
	// 'k "Giải được hết bí ẩn và tìm ra mật mã cửa, ngươi sẽ thoát khỏi đây một cách an toàn."',
	// 'k "Còn nếu thua cuộc thì... "',
	// "play music laugh",
	// 'k "Fufufu... Ta cũng không biết điều gì sẽ đến với người đâu."',
	// 'k "Cậu chủ đã chuẩn bị cho người một hình phạt vô cùng thú vị đó... Fufufu."',
	// 'k "Ta có một gợi ý cho ngươi."',
	// 'k "Bí ẩn trong mỗi căn phòng liên quan đến một người vô cùng quan trọng với ngươi."',
	// 'k "Giờ thì... Fufufu... Game, start~~~"',
	// "hide image tv with flipOutY",
	// 'm "Khoan đã..."',
	// 'Machida chưa kịp nói hết câu thì màn hình đã vụt tắt mất rồi.',
	// 'Anh vội vàng tiến đến đập đập chiếc tv, nhưng vô ích.',

	// 'Bất lực, anh bắt đầu quá trình tìm kiếm bí ẩn trong căn nhà.',
	"Tấm bản đồ được để sẵn trên kệ để tv.",
	// "show image map",
	// 'Căn phòng anh đang ở hiện tại là phòng khách. Theo bản đồ thì kế bên là phòng ăn và phòng ngủ.',
	// 'm Được rồi. Tạm cất nó đi đã.',
	// "hide image map",
	// 'm Để xem nào...',
	
	"show scene livingroom with clickable",
	'jump choiceLoop1',
	// "jump map",
],

"openMap": [
	{'Choice':
	{
		"Class": "clickscreen map",
		"Dialog": "Mở bản đồ",
		"Do": "jump map",
	}
	}
],

// 'map': [
// 	'show image ldktv with clickable',
// 	{'Choice':
// 	{
// 		"livingroom": {
// 			"Text": "livingroom",
// 			"Class": "clickscreen livingroom",
// 			"Do": 'jump choiceLoop1',
// 		},
// 		"bathroom": {
// 			"Text": "bathroom",
// 			"Class": "clickscreen bathroom",
// 			"Do": 'jump choiceLoop1',
// 		},
//   },
// 	}
// ],

"choiceLoop1":[
	// "show image backpack with clickable",
	// 'jump openMap',
	{'Choice':
	{
		"Class": "clickscreen livingroom",
		"Dialog": "Tìm kiếm bí ẩn trong phòng khách!",

		"sofa": {
			"Text": "sofa",
			"Class": "sofa",
			"Do": 'm Thật giống với chiếc sofa to đùng ở nhà cũ của Akaso. Nhưng mình không nghĩ nó có gì bí ẩn.',
			"Condition": function(){
				return !monogatari.storage().clickedSofa;
			},
			"onChosen": function(){
				monogatari.storage().clickedSofa = true;
			},
			"onRevert": function(){
				monogatari.storage().clickedSofa = false;
			},
		},
		"tv": {
			"Text": "tv",
			"Class": "tv",
			"Do": "jump tv",
		},
		"door": {
			"Text": "door",
			"Class": "door turnRightButton",
			"Do": 'jump Door',
		},
		"drawer": {
			"Text": "drawer",
			"Class": "drawer",
			"Do": 'jump Drawer',
		},
	}
	},

	// "m:happy Mình phải",
	"jump choiceLoop1",
],

// bathroom
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


	//label livingroom
	"tv" : [
		"m TV... À phải rồi, lần đó... Khi tụi mình mới dọn về ở chung.",
		"m Có lần Akaso đã mời một tiền bối về xem trước bản bluray Cherry Maho.",
		"m Quả thực là hôm đó mình đã không kiềm chế được cơn ghen.",
		"m Và cũng có chút nổi nóng với em ấy...",
		"m Nhưng mình không nghĩ em ấy vẫn giận chuyện đó.",
		"jump choiceLoop1",
	],
	"Door": [
		{'Input': {
			'Text': 'Nhập mật khẩu:',
			'Validation': function(input) {
				return input.trim().length > 0;
			},
			'Save': function(input) {
				monogatari.storage().inputTerm = input;
			},
			'Warning': 'Vui lòng nhập mật khẩu để mở khoá!',
		}},
		{'Conditional':{
		'Condition': function() {
			return monogatari.storage().inputTerm == "24032021"
		},
		'True': "jump correct",
		'False': "jump wrong",
		}},
		"jump choiceLoop1",
	],

	"Drawer": [
		"Machida tìm thấy trong ngăn kéo một chiếc đĩa CD có vẻ cũ kỹ.",
		"m Một chiếc đĩa CD? Thử mở nó lên xem nào.",
		'play music tvnoise',
		"show image pw1 with flipInY",
		'Đây rồi! Có lẽ đây chính là mật khẩu cánh cửa?',
		"hide image pw1 with flipOutY",
		"jump choiceLoop1",
	],
	"correct": [
		"gallery unlock livingroom",
		"m Có lẽ mình nên di chuyển sang phòng tiếp theo.",
		"show scene vtfront with clickable",
		"jump choiceLoop",
	],
	"wrong": [
		"Mật khẩu sai!",
		"Có lẽ gợi ý mật khẩu nằm đâu đó trong phòng khách.",
		'jump choiceLoop1',
	],



	// label bathroom
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
		"m Hồi mới ",
		"m Mình nhớ là em ấy đã từng rất giận mình về vụ vòi sen này...",
		"m Đúng rồi, là vòi sen đó.",
		{'Input': {
			'Text': 'Nhập ngày phát ',
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