// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

monogatari.component ('main-screen').template (() => {
	return `
			<h1>Ghen</h1>
	`;
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"room": "room.png",
	"vtfront": "vtfront.png", //bathroom
	"vtsearchwrong": "vtSearchPageWrong.png",
	"vtsearchright": "vtSearchPage.png",
	"driving": "driving.jpg",
	"darkroom": "darkroom.jpg",
	"livingroom": "livingroom2.png",
	"bedroom": "bedroom2.png",
	"lastdoor": "lastdoor.jpg",
	"703": "703.png",
	"704": "704.png",
	"shower": "shower.png",
	"last": "last.png",
	"machida": "machida.png",
	"akaso": "akaso.png",
	"scary": "scary.png",
	"noRope": "noRope.png",
	"noBall": "noBall.png",
	"noHand": "noHand.png",
	'hourse': 'hourse.jpg',
	"cook": "cook.png",
	'laugh': 'laugh.png',
	"smile": "smile.png",
	'sad': 'sad.png',
	'aks': 'aks.png',
});

// Define the images used in the game.
monogatari.assets ('images', {
  "map": "ldkvn.png",
	"tv": "tv2.png",
  "ldktv": "ldktv.png",
  "backpack": "backpack.png",
  "pw0": "pw0.png",
	'pw1': 'pw1.png',
	'pw2': 'pw2.png',
	'pw3': 'pw3.png',
});

monogatari.assets ('music', {
	'falling': 'bodythud.mp3',
	'break': "break.wav",
	'tvnoise': 'tvnoise.mp3',
	'sg': 'sg.mp3',
	'laugh': 'laugh.mp3',
	'lockdoor': 'lockdoor.mp3',
	'dooropen': 'dooropen.mp3',
	'doorunlock': 'doorunlock.mp3',
	'punch': 'punch.mp3',
	'punchs': 'punchs.mp3',
	'deathnote': 'deathnote.mp3',
	'car': 'car.mp3',
	'puzzle': 'puzzle.mp3',
	'break2': 'break.mp3',
	'search': 'search.mp3',
	'theme': 'theme.mp3',
	'weather': 'weather.mp3',
	'cook': 'cook.mp3',
	'happy': 'happy.mp3',
	'eating': 'eating.mp3',
	'glass': 'glass.mp3',
});

monogatari.assets ('gallery', {
	'pw1': 'pw1.png',
	'pw2': 'pw2.png',
	'pw3': 'pw3.png',
});

// monogatari.action ('notification').notifications ({
// 	'livingroom':{
// 			title: 'Unlock gallery',
// 			body:''
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
			happy: 'expressions/happy.jpg',
			normal: 'normal.png',
			sad: 'sad.png',
			surprised: 'surprised.png'
	  }
	},
	'aks': {
		name: 'Akaso',
		color: '#d2000f',
		directory: 'akaso', 
		expressions: {
			angry: 'expressions/normal.png',
			happy: 'expressions/happy.jpeg',
			normal: 'normal.png',
			sad: 'sad.png',
			surprised: 'surprised.png'
	  }
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		"Vài ngày trước...",
		"play music eating",
		"Ở một nơi nào đó, một cậu trai đang vừa ngấu nghiến bỏng ngô, vừa xem bộ phim mới lên sóng của anh người yêu.",
		'"Ái chà chà, hôn cũng giỏi đấy nhỉ."',
		"play music glass",
		'Cậu tức giận, ném ly thuỷ tinh đang cầm trên tay.',
		'"Anh giỏi lắm, xem tôi xử lý anh như nào..."',
		'...',
		"Thời điểm hiện tại...",
		"Ở một diễn biến khác...",
		"play music car with loop",
		"show scene driving with fadeIn",
		'show notification SampleNotification 5000',
		"nvl Machida đang trên đường trở về nhà từ phim trường.",
		"nvl Đã 11h đêm. Lại là một ngày anh phải về muộn.",
		"nvl Thể nào cũng bị cậu người yêu nhỏ bé của anh càu nhàu một trận cho coi.",
		"nvl Mấy ngày nay, Akachan có vẻ hay giận dỗi anh vô cớ, thỉnh thoảng còn phớt lờ anh.",
		"nvl Điển hình là sáng nay, cậu thậm chí còn không hôn anh khi thức dậy.<br/>Đến lúc anh rời nhà cũng không ôm anh lấy một cái.",
		'nvl Machida thở dài... Anh còn chưa hiểu cậu giận vì chuyện gì nữa.',
		"stop music car",

		"show scene #000 with fadeIn",
		"Mải suy nghĩ, anh đã về đến căn hộ chung của hai người từ lúc nào không hay.",
		"play music dooropen",
		"show scene room with fadeIn",
		"Anh mở cửa bước vào, cả căn phòng bị bao trùm trong bóng tối.",
		'm "Akachan?"',
		'Anh cất tiếng gọi, nhưng không có ai trả lời.',
		'm Em ấy ngủ rồi à?',
		"Anh với tay định mở đèn, nhưng trước khi chạm được vào công tắc...",
		"show scene room with headShake",
		"play music falling",
		"Machida ngã xuống... Ai đó tấn công anh từ phía sau.",
		"Trước khi rơi vào hôn mê, anh lờ mờ thấy bóng dáng của ai đó vô cùng quen thuộc...",

		"show scene #000 with fadeIn",
		'',
		"play music break",
		"Một tiếng động lớn đã đánh thức Machida.",
		"Anh mở mắt, loạng choạng đứng dậy.",
		"show scene livingroom with fadeIn",
		'Anh nhìn quanh và nhận ra đây không phải phòng khách nhà mình.',
		"m Đây là đâu? Sao mình lại ở đây?",
		'Anh lục tìm điện thoại trong túi quần, nhưng nó đã biến đi đâu mất rồi.',
		"Còn đang chưa kịp hiểu chuyện gì đang xảy ra, thì bỗng trên một giọng nói vang lên...",

		'"Cuối cùng anh cũng tỉnh lại rồi."',
		"m ...",
		'm "Akachan??? Em ở đâu vậy???"',
		"play music tvnoise",
		"show image tv with flipInY",
		'Một màn hình trong suốt bỗng nhiên xuất hiện.',
		'aks "Okaeri, Machida Keita-san."',
		'aks "Hôm nay anh lại về sớm quá nhỉ?"',
		'm "..."',
		'aks "Bộ phim mới ra mắt của anh..."',
		'aks "Hôn cũng giỏi đấy. Tôi có lời khen."',
		'm "..."',
		'm "Cái đó... Chỉ là phim thôi mà, với lại..."',
		"show image tv with headShake",
		'aks "TÔI KHÔNG CẦN BIẾT!!!',
		'aks "Nhìn anh cũng có vẻ tận hưởng nụ hôn lắm cơ mà!',
		'm "Không... Akachan, anh... Anh cũng đâu muốn..."',
		'm "Em qua đây đi, mình từ từ nói chuyện."',
		'aks "Không có chuyện trò gì hết!!!"',
		"show image tv with headShake",
		'aks "Nếu muốn gặp lại tôi, trước hết anh phải thoát khỏi căn phòng này đã."',
		'aks "Còn không thì ở đó mà sám hối những việc anh đã làm đi!"',
		// 'aks "Một là anh tham gia, hai là đừng bao giờ mong được gặp tôi nữa!"',
		// 'm "..."',
		// 'aks "Thế anh tham gia không?"',
		// 'm "..."',
		// 'm "Được... Chỉ cần em muốn, anh có thể làm bất cứ điều gì!"',
		// 'aks "Tốt lắm. Vậy thì nghe đây!"',
		// "hide image tv with flipOutY",

		// "show image ldktv with flipInY",
		// 'aks "Căn hộ này mô phỏng căn hộ đầu tiên mà chúng ta chung sống.',
		// 'aks "Bài test rất đơn giản. Anh sẽ phải tìm kiếm và giải mã bí ẩn trong từng căn phòng.',
		// "hide image ldktv with flipOutY",
		// "show image tv with flipInY",
		// 'aks "Nếu anh vượt qua bài test, tôi sẽ suy nghĩ về việc tha thứ cho anh."',
		'aks "Vậy thôi, chúc anh may mắn... Ahahaha"',
		// 'aks "Anh cứ liệu hồn đó!"',
		'm "..."',
		// 'aks "Giờ thì... Game, start~~~"',
		"hide image tv with flipOutY",
		'm "Khoan đã..."',
		'Machida chưa kịp nói hết câu thì màn hình đã vụt tắt, Akaso biến mất.',
		'Machida thở dài...',
		'Hoá ra Akachan của anh đang "ghen".',
		'Anh mỉm cười.',
		'Thật đáng yêu, Akachan của anh làm gì cũng đáng yêu hết...',
		"show scene livingroom with headShake",
		'aks "Anh còn đứng đờ người ra đó làm gì!!!"',
		'Âm thanh lớn phát ra từ chiếc loa đưa anh về thực tại.',
		'm "À... Anh..."',
		'aks "Còn ờ à gì nữa! Nhanh bắt đầu đi. Tôi lúc nào cũng theo dõi anh đó!"',
		'Không còn cách nào khác, anh bắt đầu tìm cách thoát ra khỏi đây,',
		"Có một tấm bản đồ căn nhà để sẵn trên kệ để tv, có vẻ như là bản đồ căn nhà này.",
		"show image map",
		'Căn phòng anh đang ở hiện tại là phòng khách. Theo bản đồ thì kế bên là phòng ăn và phòng ngủ.',
		"hide image map",
		'Thực sự là rất giống căn hộ đầu tiên hai người ở chung.',
		'm Nào thì tìm. Xem em bày trò gì với tôi nào, Akachan.',
		'Anh bắt đầu đi xung quanh căn phòng này để tìm manh mối.',
		"m Bắt đầu từ đâu được nhỉ...",

		"play music search with volume 70 loop",
		'jump choiceLoop1',
	// "jump map",
],

	// "openMap": [
	// 	{'Choice':
	// 	{
	// 		"Class": "clickscreen map",
	// 		"Dialog": "Mở bản đồ",
	// 		"Do": "jump map",
	// 	}
	// 	}
	// ],

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

	// living room
	"choiceLoop1":[
		"show scene livingroom with clickable",
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveKey;
			},
			'False': "next",
			'True': "<i>Đã mở khoá. Click vào mũi tên để sang phòng bên cạnh.",
		}},
		{'Choice':
		{
			"Class": "clickscreen livingroom",

			"photo": {
				"Text": "photo",
				"Class": "photo",
				"Do": 'jump photo',
				'Condition': function(){return !this.storage().haveKey},
			},
			"photoRight": {
				"Text": "photoRight",
				"Class": "photoRight",
				"Do": 'm Chỉ là một bức tranh bình thường.',
				'Condition': function(){return !this.storage().haveKey},
			},
			"book": {
				"Text": "book",
				"Class": "book",
				"Do": 'm Mình không tìm được gì trên giá sách cả.',
				'Condition': function(){return !this.storage().haveKey},
			},
			"sofa": {
				"Text": "sofa",
				"Class": "sofa",
				"Do": 'jump sofa',
				'Condition': function(){return !this.storage().haveKey},
			},
			"tv": {
				"Text": "tv",
				"Class": "tv",
				"Do": "jump tv",
				'Condition': function(){return !this.storage().haveKey},
			},
			"doorClose": {
				"Text": "doorClose",
				"Class": "door",
				'Condition': function(){return !this.storage().haveKey},
				"Do": 'jump doorClose',
			},
			"doorOpen": {
				"Text": "doorOpen",
				"Class": "turnRightButton",
				"Do": 'jump doorOpen',
				'Condition': function(){return this.storage().haveKey},
			},
			"drawer": {
				"Text": "drawer",
				"Class": "drawer",
				"Do": 'jump Drawer',
				"Condition": function(){
					return !monogatari.storage().clickedDrawer;
				},
				"onChosen": function(){
					monogatari.storage().clickedDrawer = true;
				},
				"onRevert": function(){
					monogatari.storage().clickedDrawer = false;
				},
			},
		}},
		"jump choiceLoop1",
	],

	//label livingroom
	"photo": [
		"Có thứ gì đó đằng sau bức tranh.",
		"show image pw0 with fadeIn",
		'm Có vẻ như đây là manh mối gì đó.',
		'm Mật khẩu cánh cửa đằng kia chăng?',
		'm Mà thôi, cứ để tạm ở đây, mình có thể xem lại sau.',
		"hide image pw0 with fadeOut",
		"jump choiceLoop1",
	],
	"sofa" : [
		"m Chiếc sofa này...",
		"m Rất giống với chiếc sofa cũ to đùng ở nhà Akaso.",
		"m Tụi mình đã từng tranh cãi về việc vất nó đi hay để lại.",
		"m Cuối cùng vẫn là giữ lại theo ý em ấy. Haiz... Em thích là được.",
		"m Nhưng mà... Trông nó không có gì khả nghi cả.",
		"m Có lẽ mình nên tìm manh mối chỗ khác.",
		"jump choiceLoop1",
	],
	"tv" : [
		"m TV... À phải rồi, lần đó... Khi tụi mình mới dọn về ở chung.",
		"m Akaso đã mời một tiền bối về cùng xem trước bản bluray Cherry Maho.",
		"m Quả thực hôm đó mình đã không kiềm chế được cơn ghen.",
		"m Và có chút nổi nóng với em ấy...",
		"m Giờ nghĩ lại... Sao hồi đó mình nhỏ nhen thế nhỉ!",
		"m Nhưng mình không nghĩ em ấy còn để bụng chuyện đó.",
		"m Có lẽ mình nên tìm manh mối chỗ khác.",
		"jump choiceLoop1",
	],
	"Drawer": [
		"m Hình như có thứ gì trong tủ kéo!",
		"m:happy Hehehe... Thú vị đó, Akachan.",
		"m:happy Em cố ý để nó ở đây phải không. Hehehe...",
		'<i>Tìm thấy vật phẩm mới: <span class="redText">Dây thừng.',
		{'Function':{
			'Apply': function(){
				this.storage().haveRope = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveRope = false;
			}
		}},
		"jump choiceLoop1",
	],
	"doorClose": [
		"play music lockdoor",
		"m Có mật khẩu à?",
		"m Thử nhập xem sao.",
		{'Input': {
			'Text': 'Nhập mật khẩu (8 ký tự số):',
			'Validation': function(input) {
				return input.trim().length > 0;
			},
			'Save': function(input) {
				monogatari.storage().inputTerm = input;
			},
			'Warning': 'Vui lòng nhập mật khẩu để mở khoá!',
		}},
		{'Conditional': {
			'Condition': function() {
				return monogatari.storage().inputTerm == "02042021"
		  },
			'True': "jump correct",
			'False': "jump wrong",
		}},
		"jump choiceLoop1",
	],
	"doorOpen": [
		"play music dooropen",
		"jump bedroom",
	],
	"correct": [
		"play music doorunlock",
		"m Thành công rồi!",
		"show image pw1 ",
		"gallery unlock pw1",
		'<i><span class="redText">Bạn đã nhận được mảnh ghép đầu tiên.',
		'<i><span class="redText">Hãy nhớ ghi lại để giải mật mã cuối cùng.',
		'<i>Bạn có thể xem lại các mảnh ghép trong Gallery (ở menu chính).',
		{'Function':{
			'Apply': function(){
				this.storage().haveKey = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveKey = false;
			}
		}},
		"jump choiceLoop1",
	],
	"wrong": [
		"Mật khẩu sai! Thử lại lần sau.",
		"m Không được rồi! Chắc là sẽ có manh mối gì đó đâu đây.",
		'jump choiceLoop1',
	],

	// bed room
	"bedroom": [
		{'Conditional':{
			'Condition': function(){
				return this.storage().intoBedroom;
			  },
			'False': "next",
			'True': "jump choiceLoop2",
	  }},
		"show scene bedroom with fadeIn",
		"play music tvnoise",
		"show image tv with flipInY",
		'Màn hình trong suốt một lần nữa xuất hiện.',
		'aks "Chúc mừng anh đã vượt qua căn phòng đầu tiên."',
		'aks "Tôi có một gợi ý cho căn phòng thứ hai này."',
		'aks "Trong căn phòng này có một điểm bất thường."',
		'aks "Anh chỉ cần tìm điểm bất thường đó, và hoàn thành nhiệm vụ được giao."',
		'aks "Chúc may mắn... Ahahaha..."',
		"hide image tv with flipOutY",
		"jump choiceLoop2",
	],

	"choiceLoop2":[
		"show scene bedroom with clickable",
		{'Function':{
			'Apply': function(){
				this.storage().intoBedroom = true;
				return true;
			},
			'Reverse': function(){
				this.storage().intoBedroom = false;
			}
		}},
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveKeybed;
			  },
			'False': "next",
			'True': "<i>Đã mở khoá. Click vào mũi tên để sang phòng bên cạnh.",
	  }},
		
		{'Choice':
		{
			"Class": "clickscreen bedroom",
			// "Dialog": '<i>Hoàn thành nhiệm vụ trong phòng ngủ.',
			'turnLeft': {
				'Text': 'back to living room',
				'Do': 'jump choiceLoop1',
				'Class': 'turnLeftButton',
			},
			"picture": {
				"Text": "picture",
				"Class": "picture",
				"Do": 'm Chỉ là một bức tranh bình thường.',
				'Condition': function(){return !this.storage().haveKeybed},
			},
			// "picture": {
			// 	"Text": "picture",
			// 	"Class": "picture",
			// 	"Do": 'm Chỉ là một bức tranh bình thường.',
			// 	'Condition': function(){return !this.storage().haveKeybed},
			// },

			"drawerBed": {
				"Text": "drawerBed",
				"Class": "drawerBed",
				"Do": 'jump drawerBed',
				"Condition": function(){
					return !monogatari.storage().clickedDrawerBed;
				},
				"onChosen": function(){
					monogatari.storage().clickedDrawerBed = true;
				},
				"onRevert": function(){
					monogatari.storage().clickedDrawerBed = false;
				},
			},
			"pillow": {
				"Text": "pillow",
				"Class": "pillow",
				"Do": "jump pillow",
				"Condition": function(){
					return !monogatari.storage().clickedPillow;
				},
				"onChosen": function(){
					monogatari.storage().clickedPillow = true;
				},
				"onRevert": function(){
					monogatari.storage().clickedPillow = false;
				},
			},
			"bed": {
				"Text": "bed",
				"Class": "bed",
				"Do": 'jump bed',
				'Condition': function(){return !this.storage().haveKeybed},
			},
			"hangerClose": {
				"Text": "hangerClose",
				"Class": "hanger",
				'Condition': function(){return !this.storage().haveKeybed},
				"Do": 'jump hangerClose',
			},
			"hangerOpen": {
				"Text": "hangerOpen",
				"Class": "turnRightButton",
				"Do": 'jump hangerOpen',
				'Condition': function(){return this.storage().haveKeybed},
			},
		}
		},
		"jump choiceLoop2",
	],

	// label bedroom
	"bed": [
		"m Chiếc giường này có vẻ đã cũ...",
		"m Xem nào... Gầm giường... Dưới ga giường... Chẳng có gì cả!",
		"jump choiceLoop2",
	],
	"drawerBed": [
		"m ...",
		"m:happy Hehehe... Anh cũng thích thứ này lắm, Akachan.",
		'<i>Tìm thấy vật phẩm mới: <span class="redText">Ball gag.',
		{'Function':{
			'Apply': function(){
				this.storage().haveBallgag = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveBallgag = false;
			}
		}},
		"jump choiceLoop2",
	],
	"pillow": [
		"m Hình như có thứ gì đó dưới gối...",
		"m:happy Hehehe...",
		'<i>Tìm thấy vật phẩm mới: <span class="redText">Lube.',
		{'Function':{
			'Apply': function(){
				this.storage().haveBlindfold = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveBlindfold = false;
			}
		}},
		"jump choiceLoop2",
	],
	"hangerClose": [
		'aks "Cuối cùng thì anh cũng tìm ra."',
		'aks "Giờ thì anh biết phải làm gì rồi đó!"',
		"jump choose"
	],
	"choose":[
		"stop music search with loop",
		{'Choice': {
			"Dialog":'Chọn cách phơi đồ',
			'Outside': {
					'Text': 'Phơi đồ bên ngoài',
					'Do': 'jump wrongHanger'
			},
			'Inside': {
					'Text': 'Phơi đồ trong phòng',
					'Do': 'jump correctHanger'
			},
	  }},
		"jump choiceLoop2",
	],
	"hangerOpen": [
		"play music dooropen",
		"jump bathroom",
	],
	"correctHanger": [
		"play music search with loop",
	  'aks "Phải thế chứ ehehe... Giỏi lắm chồ..."',
		'aks "À không có gì, anh tiếp tục đi!"',
		'm:happy ...',
		"m:happy Em ấy vừa định gọi mình là chồng đúng không? Hehe!",
		"show image pw2 with fadeIn",
		"gallery unlock pw2",
		'<i><span class="redText">Bạn đã nhận được mảnh ghép thứ hai.',
		'<i><span class="redText">Hãy nhớ ghi lại để giải mật mã cuối cùng.',
		'<i>Bạn có thể xem lại các mảnh ghép trong Gallery (ở menu chính).',
		{'Function':{
			'Apply': function(){
				this.storage().haveKeybed = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveKeybed = false;
			}
		}},
		"jump choiceLoop2",
	],
	"wrongHanger": [
		"m Cho dù có phải ngủ sofa!!!",
		"show scene bedroom with clickable headShake",
    "play music punch",
		"Một chiếc dép từ đâu phi thẳng vào người Machida.",
		'm "Ui da!"',
		'aks "Anh giỏi lắm!"',
		'aks "Giờ phút này mà anh vẫn còn cố làm trái ý tôi hả???"',
		'aks "Còn không chọn lại?"',
		'jump choose',
	],



	// bathroom
	"bathroom": [
		{'Conditional':{
			'Condition': function(){
				return this.storage().intoBathroom;
			  },
			'False': "next",
			'True': "jump choiceLoop",
	  }},
		"show scene vtfront with fadeIn",
		"play music tvnoise",
		"show image tv with flipInY",
		'aks "Có vẻ như cuối cùng anh cũng đến được căn phòng cuối cùng này nhỉ."',
		'aks "Được rồi, gợi ý cho căn phòng này..."',
		'aks <span class="redText">"Tìm ra thứ đã khiến tôi nổi giận."',
		'aks "Để xem anh có còn nhớ không. Ahahaha..."',
		"hide image tv with flipOutY",
		"jump choiceLoop",
	],

	"choiceLoop":[
		"show scene vtfront with clickable",
		{'Function':{
			'Apply': function(){
				this.storage().intoBathroom = true;
				return true;
			},
			'Reverse': function(){
				this.storage().intoBathroom = false;
			}
		}},
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveKeybath;
			  },
			'False': "next",
			'True': "<i>Đã mở khoá. Click vào mũi tên để sang phòng bên cạnh.",
	  }},
		{'Choice':
		{
			"Class": "clickscreen vtfront",

			'turnLeft': {
				'Text': 'back to living room',
				'Do': 'jump choiceLoop2',
				'Class': 'turnLeftButton',
			},
			"shower": {
				"Text": "shower",
				"Class": "shower",
				"Do": "jump shower",
				'Condition': function(){return !this.storage().haveKeybath},
			},
			"bathtub": {
				"Text": "bathtub",
				"Class": "bathtub",
				"Do": "jump bathtub",
				'Condition': function(){return !this.storage().haveKeybath},
			},
			"hanger": {
				"Text": "hanger",
				"Class": "hanger",
				"Do": "m Không nghĩ em ấy giận mình chuyện gì với cái giá treo đồ...",
				'Condition': function(){return !this.storage().haveKeybath},
			},
			"mirror": {
				"Text": "mirror",
				"Class": "mirror",
				"Do": "jump mirror",
				'Condition': function(){return !this.storage().haveKeybath},
			},
			"drawerBathroom": {
				"Text": "drawerBathroom",
				"Class": "drawerBathroom",
				"Do": "jump drawerBathroom",
				"Condition": function(){
					return !monogatari.storage().clickedDrawerBath;
				},
				"onChosen": function(){
					monogatari.storage().clickedDrawerBath = true;
				},
				"onRevert": function(){
					monogatari.storage().clickedDrawerBath = false;
				},
			},
			"splash": {
				"Text": "splash",
				"Class": "vtsplash",
				"Do": "jump splash",
				'Condition': function(){return !this.storage().haveKeybath},
			},
			"machine": {
				"Text": "machine",
				"Class": "machine",
				"Do": "jump machine",
				'Condition': function(){return !this.storage().haveKeybath},
			},
			"bathOpen": {
				"Text": "bathOpen",
				"Class": "turnRightButton",
				"Do": 'jump bathOpen',
				'Condition': function(){return this.storage().haveKeybath},
			},
		}
		},
	"jump choiceLoop",
	],

	// label bathroom
	"drawerBathroom": [
		"m:happy Hehehe...",
		'<i>Tìm thấy vật phẩm mới: <span class="redText">Còng tay!',
		{'Function':{
			'Apply': function(){
				this.storage().haveHandcuff = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveHandcuff = false;
			}
		}},
		"jump choiceLoop",
	],

	"splash": [
		"m Bồn rửa... ",
		"m Tuy là lần nào mình cũng hơi nhiệt tình quá mức...",
		"m Và có lần không may làm vỡ cả bồn rửa...",
		"m Nhưng mình không nghĩ em ấy giận chuyện đó... Em ấy còn nói là đã rất vui mà.",
		"jump choiceLoop",
	],
	"mirror": [
		"m Gương...",
		"m Dáng vẻ em ấy khóc thét khi nhìn qua gương... Thực sự rất quyến rũ... ",
		"m Và đúng là em ấy vô cùng xấu hổ mỗi khi xong chuyện...",
		"m Nhưng mình không nghĩ em ấy giận chuyện đó...",
		"jump choiceLoop",
	],
	"machine": [
	  "m Hay là em ấy tức giận chuyện phải thường xuyên giặt ga giường?",
		"m Không, chắc không phải đâu...",
		"jump choiceLoop",
	],
	"bathtub": [
		"m Có chuyện gì liên quan đến bồn tắm không nhỉ?",
		"m Lần đó... Lần đó... Hay là lần đó chăng?",
		"m Mà chắc không phải đâu.",
		"jump choiceLoop",
	],
	"bathOpen": [
		"play music dooropen",
		"jump lastDoor"
	],

	"shower": [
		"m Mình nhớ ra rồi, là vụ vòi sen...",
		"m Mình vốn quen hướng vòi sen ra ngoài thay vì hướng vào bồn tắm...",
		"m Lần đó đã làm ướt bộ đồ yêu thích của ẻm...",
		"Nghĩ rồi Machida tiến đến phía cửa nhà tắm và bấm mật khẩu.",
		"jump input"
	],
	"input": [
		{'Input': {
			'Text': 'Akaso bị vòi sen làm ướt đồ vào dịp nào?<br/>(tiếng Anh, viết hoa chữ đầu)',
			'Validation': function(input) {
				return input.trim().length > 0;
			},
			'Save': function(input) {
				monogatari.storage().searchTerm = input;
			},
			'Warning': 'Vui lòng nhập password.',
		}},
		{'Conditional':{
		'Condition': function() {
			return monogatari.storage().searchTerm == "Noel" || monogatari.storage().searchTerm == "Christmas"
		},
		'True': "jump correctName",
		'False': "jump wrongName",
		}},
	],
	"correctName": [
		"play music doorunlock",
		"m Thành công rồi!",
		// "play music happy",
		"show image pw3 with fadeIn",
		"gallery unlock pw3",
		'<i><span class="redText">Bạn đã nhận được mảnh ghép cuối cùng.',
		'<i><span class="redText">Hãy nhớ ghi lại để giải mật mã cuối cùng.',
		'<i>Bạn có thể xem lại các mảnh ghép trong Gallery (ở menu chính).',
		// "stop music happy",
		{'Function':{
			'Apply': function(){
				this.storage().haveKeybath = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveKeybath = false;
			}
		}},
		'jump choiceLoop'
	],
	"wrongName": [
		"Mật khẩu sai! Thử lại lần sau.",
		"m Hmmm... Vậy là gì nhỉ?",
		"m Thử lại xem.",
		"jump input",
	],

	'lastDoor':[
		// "stop music search with volume 70 loop",
		"show scene lastdoor with clickable",
		// "play music deathnote with loop",
		"Machida tiến đến cửa căn hộ.",
		"Đây là cánh cửa cuối cùng rồi.",
		"Chỉ cần nhập đúng mật khẩu, anh sẽ thoát ra khỏi căn phòng này.",
		'm <i><br/><span class="redText">Để xem nào... Có lẽ mật khẩu liên quan đến 3 mảnh giấy mình nhận được khi nãy.',
		'<i>Click vào cánh cửa để nhập mật khẩu, hoặc mũi tên để quay về các phòng trước và tìm các vật phẩm có thể bạn đã bỏ lỡ.',
		{'Choice':
		{
			"Class": "clickscreen lastdoor",
			'turnLeft': {
				'Text': 'back to living room',
				'Do': 'jump choiceLoop',
				'Class': 'turnLeftButton',
			},
			"door": {
				"Text": "door",
				"Class": "door",
				"Do": "jump confirm",
			},
		},
    },
	],

	"confirm":[
		{'Choice': {
			"Dialog": "Bạn sẽ không thể quay lại màn trước. Bạn chắc chắn muốn đi tiếp?",
			'Yes': {
					'Text': 'Đi tiếp',
					'Do': 'jump input2'
			},
			'No': {
					'Text': 'Quay lại',
					'Do': 'jump lastDoor'
			},
	  }}
	],

	"input2": [
		"stop music search",
		{'Input': {
			'Text': 'Nhập mật khẩu (6 ký tự số)',
			'Validation': function(input) {
				return input.trim().length > 0;
			},
			'Save': function(input) {
				monogatari.storage().lastTerm = input;
			},
			'Warning': 'Vui lòng nhập password.',
		}},
		{'Conditional':{
		'Condition': function() {
			return monogatari.storage().lastTerm == "220408" || monogatari.storage().lastTerm == "2248" 
		},
		'True': "jump correctPW",
		'False': "jump Ending1",
		}},
	],

	"correctPW":[
		// "play music deathnote with loop",
		"show scene #000",
		"play music break2",
		"Machida lao ra khỏi căn phòng.",
		"show scene 703",
		"Anh nhìn biển số phòng, rồi lập tức chạy sang phòng bên cạnh.",
		"Nhất định là Akaso đang ở phòng bên cạnh!",
		{'Conditional':{
			'Condition': function(){
			// 	return this.storage().haveHandcuff;
			//   },
			// 'False': "jump noHandcuff",
			// 'True': "jump hasHandcuff",
				if(this.storage().haveHandcuff && this.storage().haveRope && this.storage().haveBallgag && this.storage().haveBlindfold) {
					return "All";
				} else {
					return '0';
				}
				},
				'All': 'jump all',
				'0': 'jump notAll',
	  }},
	],

	"all": [
		"play music theme with loop",
		"show scene #000 with fadeIn",
		"play music break2",
		"Anh đạp cửa, xông vào phòng.",
		"show scene 704 with fadeIn",
		"Và thấy Akaso đang hoảng hốt nhìn về phía mình.",
		"Chắc cậu cũng không nghĩ là anh có thể nhanh chóng đoán trúng mật khẩu như thế.",
	  'm "Akachan, anh đến rồi đây."',
		'Anh tiến đến gần Akaso và ôm lấy cậu.',
		'Cậu cố gắng phản kháng, nhưng anh đã nhanh chóng khoá tay cậu bằng <span class="redText">chiếc còng tay tìm thấy trong phòng tắm</span> khi nãy.',
		'm "Ngoan nào, anh sắp đền bù cho em đây, Akachan."',
		'm "Đây rồi..."',
		'Machida trói cậu lại bằng <span class="redText">cuộn dây thừng anh tìm được từ tủ kéo phòng khách.</span>',
		"show scene scary with fadeIn",
		"Akaso cố sức giãy giụa, nhưng làm thế nào đấu lại anh, nhất là trong tình trạng bị trói thế này?.",
		'm "À suýt quên, còn cái này nữa..."',
		'Machida nhét <span class="redText">chiếc ball gag tìm được từ tủ kéo trong phòng ngủ</span> vào miệng cậu.',
		"Akaso vùng vẫy, nhưng vô ích.",
		'Cậu đành để mặc cho Machida vác vác cậu lên vai, hướng về phía nhà tắm phòng 703.',
		"show scene shower with fadeIn",
		'Anh xả vòi sen và bắt đầu "hành sự"',
		"show scene last with fadeIn",
		'm "Cưng à, anh tới đây..."',
		"jump Ending3"
	],

  "notAll": [
		// "play music puzzle with loop",
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveHandcuff;
			  },
			'False': "jump noHandcuff",
			'True': "jump hasHandcuff",
		}},
	],

	"noHandcuff":[
		"show scene #000 with fadeIn",
		"play music break2",
		"Anh đạp cửa, xông vào phòng.",
		// "play music theme with loop",
		"show scene 704 with fadeIn",
		"Và thấy Akaso đang hoảng hốt nhìn về phía mình.",
		"Chắc cậu cũng không nghĩ là anh có thể nhanh chóng đoán trúng mật khẩu như thế.",
	  'm:scary "Akachan, anh đến rồi đây."',
		'Anh tiến đến gần Akaso và ôm lấy cậu, tính vác cậu lên vai.',
		'Tuy nhiên, anh đã coi thường sức mạnh của người đã tập gym cả năm nay.',
		"show scene noHand with fadeIn",
		"play music punch",
		'Cậu đẩy thật mạnh khiến anh ngã lăn ra, rơi vào hôn mê...',
		"jump Ending2"
	],

	"hasHandcuff":[
		"show scene #000 with fadeIn",
		"play music break2",
		"Anh đạp cửa, xông vào phòng.",
		"show scene 704 with fadeIn",
		"Và thấy Akaso đang hoảng hốt nhìn về phía mình.",
		"Chắc cậu cũng không nghĩ là anh có thể nhanh chóng đoán trúng mật khẩu như thế.",
	  'm "Akachan, anh đến rồi đây."',
		'Anh tiến đến gần Akaso và ôm lấy cậu.',
		'Cậu cố gắng phản kháng, nhưng anh đã nhanh chóng khoá tay cậu bằng <span class="redText">chiếc còng tay tìm thấy trong phòng tắm</span> khi nãy.',
		'm "Ngoan nào, anh sắp đền bù cho em đây, Akachan."',
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveRope;
			  },
			'False': "jump noRope",
			'True': "jump hasRope",
	  }},
	],
	"noRope": [
		"show scene scary with fadeIn",
		"Akaso giãy giụa, lấy hết sức đạp anh ngã xuống sàn.",
		"play music punch",
		"show scene noRope with fadeIn",
		"Anh cố gắng bò dậy, nhưng lại bị cậu bồi thêm một cú đạp.",
		"play music punch",
		"Cú đạp thứ hai đã khiến Machida bất tỉnh nhân sự...",
		"jump Ending2",
	],

	"hasRope": [
		'm "Đây rồi..."',
		'Machida trói cậu lại bằng <span class="redText">cuộn dây thừng anh tìm được từ tủ kéo phòng khách.</span>',
		"show scene scary with fadeIn",
		"Akaso cố sức giãy giụa, nhưng làm thế nào đấu lại anh, nhất là trong tình trạng bị trói thế này?.",
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveBallgag;
			  },
			'False': "jump noBallgag",
			'True': "jump hasBallgag",
	  }},
	],

	"noBallgag": [
		"Không chịu bỏ cuộc, cậu cắn thật mạnh vào tai anh.",
		"show scene noBall with fadeIn",
		"Machida đau đớn, buông Akaso xuống và ôm lấy tai.",
		"show scene #000 with fadeIn",
		"Akaso cố sức bò về phía bàn làm việc và bấm một cái nút trên bàn.",
		"play music falling",
		"Sàn nhà nơi Machida đang nằm bỗng mở ra một mật địa bên dưới, và anh rơi xuống...",
		"jump Ending2",
	],

	"hasBallgag": [
		'm "À suýt quên, còn cái này nữa..."',
		'Machida nhét <span class="redText">chiếc ball gag tìm được từ tủ kéo trong phòng ngủ</span> vào miệng cậu.',
		"Akaso vùng vẫy, nhưng vô ích.",
		'Cậu đành để mặc cho Machida vác vác cậu lên vai, hướng về phía nhà tắm phòng 703.',
		"show scene shower with fadeIn",
		'Anh xả vòi sen và bắt đầu "công chuyện".',
		"show scene last with fadeIn",
		'm "Cưng à, anh tới đây..."',
		{'Conditional':{
			'Condition': function(){
				return this.storage().haveBlindfold;
			  },
			'False': "jump Ending2",
			'True': "jump Ending3",
	  }},
	],

	"Ending3": [
		'Anh lôi ra từ trong túi <span class="redText">lọ dầu bôi trơn tìm được trong phòng ngủ ban nãy.</span>',
		"show scene aks with fadeIn",
		'm Để xem ai là người trừng phạt ai.',
		"show scene machida with fadeIn",
		'',
		"show scene akaso with fadeIn",
		'',
		"show scene #000 with fadeIn",
		'centered <span class="redText ending">Ending 3. Ai là kẻ trừng phạt',
		'centered <span class="redText ending">THANK FOR PLAYING!',
		'end',
	],

	"Ending2": [
		"show scene #000000",
		"...",
		"play music weather",
		'',
		'"Macchi!!! Macchi!!!"',
		'"Dậy đi anh! Sao anh lại ngủ ở đây?"',

		// "play music search with loop",
		'Machida dụi mắt.',
		"show scene hourse with fadeIn",
		"Ánh sáng lập loè từ chiếc tv đang bật khiến anh chói mắt.",
		'Anh ngồi dậy và nhận ra mình đang nằm trên sofa trong phòng khách nhà mình.',
		'aks "Macchi~~"',
		"Anh ngước nhìn cậu người yêu đang lo lắng nhìn mình.",
		'aks "Sao anh lại ngủ ở đây?"',
		'm ...',
		'm "Anh về đến nhà nhưng không thấy em..."',
		'aks "Nãy giờ em đi tắm mà."',
		'aks "Anh mệt lắm hả? Ngủ quên ở đây luôn."',
		'aks "Anh ăn gì chưa?"',
		'aks "Em hâm lại đồ ăn cho anh nhé?"',
		"stop music weather",
		"Nói rồi Akaso tắt tv, và tiến về phía bếp, bắt đầu chuẩn bị đồ ăn.",
		"show scene cook with fadeIn",
		'aks "Hôm nay có gì vui không anh?"',
		"play music cook",
		'aks "À đúng rồi!"',
		'aks "Em mới phát hiện gần phim trường có quán bánh ngọt rất ngon..."',
		'aks "Em ăn thử một lần đã thấy mê luôn..."',
		'aks "Hôm nào tụi mình..."',
		"m ...",
		"Machida không thể tập trung vào câu chuyện của Akaso.",
		"Anh vẫn còn cảm thấy hoang mang.",
		'Hoá ra nãy giờ chỉ là một giấc mơ thôi sao?',
		'Nhưng sao anh lại có cảm giác chân thật đến vậy?',
		'm "Akachan..."',
		'aks "Dạ?"',
		"stop music cook",
		"show scene #000 with fadeIn",
		'm "Lại đây đi, anh có chuyện muốn nói..."',
		"aks ...",
		'm "Anh vừa có một giấc mơ rất kỳ lạ..."',
		'm "......."',
		"show scene laugh with fadeIn",
		'aks "Hahaha... Macchi-kun mệt quá mơ sảng rồi đó."',
		"Nghe xong giấc mơ của Machida, Akaso phá lên cười.",
		"show scene sad with fadeIn",
		'aks "Thì... Đúng là em không thích anh diễn mấy cảnh hôn..."',
		"show scene smile with fadeIn",
		'aks "Nhưng em không phải kiểu người vì ghen mà có thể bày ra mấy trò vớ vẩn đó đâu."',
		'aks "Thôi, anh vào ngâm bồn đi cho đỡ mệt, em mới mua loại muối tắm mới đó!"',
		'm "..."',
		'm "Ừ, vậy anh đi tắm đây."',
		"Nói rồi Machida đi về phía nhà tắm, trong lòng vẫn không khỏi hoang mang.",
		"show scene #000 with fadeIn",
		'Vừa nghe thấy tiếng nhà tắm đóng lại, Akaso nở một nụ cười "tinh nghịch"...',
		'centered <span class="redText ending">Ending 2. Chỉ là một giấc mơ?',
		'centered <span class="redText ending">THANK FOR PLAYING!',
		"end",
	],

	"Ending1": [
		"play music punchs with loop",
		"Mật khẩu sai!",
		"show scene lastdoor with headShake",
		'Một cơn mưa dép bay vào người Machida.',
		"show image tv with flipInY",
		"stop music punchs",
		"play music tvnoise",
		'aks "Giỏi lắm, Machida-san!"',
		'aks "Có thế mà anh cũng không đoán được???"',
		'aks "Vậy thôi, tôi đi đây! Anh cứ ở đó mà sám hối đi nhé!"',
		"hide image tv with flipInY",
		"m Chờ... Chờ đã... Akachan!!! ĐỪNG BỎ ANH!!!",
		"Machida dần chìm trong biển dép...",
		"stop music punchs",
		"show scene #000",
		"...",
		"play music car with loop",
		'"Này!!!"',
		'"Dậy, dậy đi Machida! Về đến nhà cậu rồi."',
		"show scene driving with fadeIn",
		'Tiếng anh quản lý vang lên bên tai.',
		'Machida bừng tỉnh, nhận thấy mình vẫn đang ở trên oto.',
		'Thì ra nãy giờ chỉ là một giấc mơ thôi sao?',
		'Anh rùng mình...',
		'Không biết Akachan của anh khi ghen có đáng sợ không nhỉ?',
		'm Khi nào phải thử mới được. Hehehe...',
		"show scene #000",
		'centered <span class="redText ending">Ending 1. Chỉ là một giấc mơ',
		'centered <span class="redText ending">THANK FOR PLAYING!',
		"end",
	]
});