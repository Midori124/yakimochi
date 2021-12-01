// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

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
	'lockdoor': 'lockdoor.mp3',
	'dooropen': 'dooropen.mp3',
	'doorunlock': 'doorunlock.mp3',
	'punch': 'punch.mp3',
});

monogatari.assets ('gallery', {
	'livingroom': '1128.jpg'
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
	"nvl Machida đang trên đường trở về nhà từ phim trường.",
	// "nvl Đã 11h đêm. Lại là một ngày anh phải về muộn.",
	// "nvl Thể nào cũng bị cậu người yêu nhỏ bé của anh càu nhàu một trận cho coi.",
	// "nvl Dạo gần đây, Akachan có vẻ hay giận dỗi anh vô cớ, thỉnh thoảng còn phớt lờ anh.",
	// "nvl Điển hình là sáng nay, cậu thậm chí còn không hôn anh khi thức dậy.<br/>Đến lúc anh rời nhà cũng không ôm anh lấy một cái.",
  // "nvl Ừ thì đúng là dạo này công việc của anh có hơi bận rộn, ít có thời gian dành cho cậu.",
	// "nvl Anh cũng thấy khổ tâm lắm chứ, nhưng biết sao được.",
	// 'nvl Machida thở dài... Thôi thì đợi mấy nữa thư thả, anh sẽ "đền bù" cho cậu sau vậy.',
	// "nvl Mải suy nghĩ, anh đã về đến căn hộ chung của hai người từ lúc nào không hay.",

	// "show scene room with fadeIn",
	// "Anh mở cửa bước vào, cả căn phòng bị bao trùm trong bóng tối.",
	// 'm "Akachan?"',
	// 'Anh cất tiếng gọi, nhưng không có ai trả lời.',
	// 'm "Em ấy ngủ rồi à?"',
	// "Anh với tay định mở đèn, nhưng trước khi chạm được vào công tắc...",
	// "show scene room with headShake",
	// "play music falling",
	// "Machida ngã xuống... Ai đó tấn công anh từ phía sau.",
	// "Trước khi rơi vào hôn mê, anh lờ mờ thấy bóng dáng của ai đó vô cùng quen thuộc...",

	"show scene #000 with fadeIn",
	"play music break",
	"Một tiếng động lớn đã đánh thức Machida.",
	// "Anh mở mắt, loạng choạng đứng dậy.",
	"show scene livingroom with fadeIn",
	'Anh nhìn quanh và nhận ra đây không phải phòng khách nhà mình.',
	// "m Đây là đâu? Sao mình lại ở đây?",
	// 'Anh với tay lục tìm điện thoại trong túi quần, nhưng có vẻ.',
	// "Còn đang chưa kịp hiểu chuyện gì đang xảy ra, thì bỗng trên một giọng nói vang lên...",

	// "play music laugh",
	// '"Fufufu. Cuối cùng anh cũng tỉnh lại rồi."',
	// 'm "Akachan??? Em ở đâu vậy???"',
	// "play music tvnoise",
	// "show image tv with flipInY",
	// // "play music sg",
	// 'Một màn hình trong suốt bỗng nhiên xuất hiện.',
	// 'aks "kaeri, Machida Keita-san."',
	// 'aks "Hôm nay anh lại về sớm quá nhỉ?"',
	// 'm "..."',
	// 'aks "Anh hẳn đang hoang mang tại sao mình lại ở đây đúng không?"',
	// 'aks "Nói ngắn gọn thì, anh đang ở trong một căn nhà cách xa trung tâm thành phố."',
	// 'aks "Còn lý do hả?"',
	// 'aks "LÀ VÌ TÔI MUỐN TRỪNG PHẠT ANH"',
	// "show image tv with headShake",
	// 'aks "Dạo này anh toàn đi sớm về muộn, không quan tâm gì đến tôi."',
	// 'aks "Đã vậy thì anh cưới công việc của anh luôn đi, đừng quan tâm đến tôi nữa!!!"',
	// 'm "Akachan, anh thực sự xin lỗi..."',
	// 'm "Mau lại đây đi, mình từ từ nói chuyện."',
	// 'm "Em biết anh yêu em nhiều thế nào mà..."',
	// 'aks "Tôi không tin!!! Muốn chứng minh điều đó thì anh phải chiến thắng trò chơi này."',
	// 'm "..."',
	// 'aks "Anh có đồng ý tham gia không?"',
	// 'm "..."',
	// 'm "Được... Chỉ cần em muốn, anh có thể làm bất cứ điều gì!"',
	// 'aks "Tốt lắm. Vậy thì nghe dây!"',
	// "hide image tv with flipOutY",

	// "show image ldktv with flipInY",
	// 'aks "Căn hộ này mô phỏng căn hộ đầu tiên mà chúng ta chung sống.',
	// 'aks "Luật chơi rất đơn giản. Anh sẽ phải tìm kiếm và giải mã bí ẩn trong từng căn phòng.',
	// "hide image ldktv with flipOutY",
	// "show image tv with flipInY",
	// 'aks "Giải được hết bí ẩn và tìm ra mật mã cuối cùng, tôi sẽ suy nghĩ về việc tha thứ cho anh."',
	// 'aks "Còn nếu thua cuộc thì... "',
	// "play music laugh",
	// 'aks "Thì anh cứ liệu hồn đó!"',
	// 'aks "Nhiệm vụ đầu tiên của anh: mở cánh cửa dẫn sang phòng bên cạnh."',
	// 'aks "Giờ thì... Game, start~~~"',
	// "hide image tv with flipOutY",
	// 'm "Khoan đã..."',
	// 'Machida chưa kịp nói hết câu thì màn hình đã vụt tắt, Akaso biến mất.',
	// 'Machida thở dài... Hoá ra Akachan của anh "ghen" với công việc của anh đến mức này cỡ à.',
	// 'Anh bất giác mỉm cười.',
	// 'Thật đáng yêu, Akachan của anh làm gì cũng đáng yêu hết...',
	// 'aks "Anh còn đứng đờ người ra đó làm gì!!!"',
	// 'Âm thanh lớn phát ra từ chiếc loa lôi anh về thực tại',
	// 'm "À... Anh..."',
	// 'aks "Còn ờ à gì nữa! Nhanh bắt đầu đi. Tôi lúc nào cũng theo dõi anh đó!"',
	// 'Không còn cách nào khác, anh bắt đầu quá trình tìm kiếm bí ẩn trong căn nhà.',
	// "Tấm bản đồ được để sẵn trên kệ để tv.",
	// "show image map",
	// 'Căn phòng anh đang ở hiện tại là phòng khách. Theo bản đồ thì kế bên là phòng ăn và phòng ngủ.',
	// "hide image map",
	// 'Quả thực là rất giống căn hộ đầu tiên hai người ở chung.',
	// 'Anh mỉm cười, bao nhiêu kỷ niệm ùa về.',
	// 'm Nào thì tìm. Xem em bày trò gì với tôi nào, Akachan.',
	// 'Anh bắt đầu đi xung quanh căn phòng này để tìm manh mối.',
	
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
				"Do": 'm Mình không tìm được gì ở đây cả.',
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
		"show image pw1 with fadeIn",
		'm Có vẻ như đây là manh mối gì đó.',
		"hide image pw1 with fadeOut",
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
		"m:happy Hehehe...",
		"Machida đã tìm thấy một thứ thú vị trong tủ kéo.",
		'<i><span class="redText">Đã nhận được vật phẩm bí mật!',
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
		"m Thử nhập bừa xem sao.",
		{'Input': {
			'Text': 'Nhập mật khẩu (8 ký tự):',
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
				return monogatari.storage().inputTerm == "09012021"
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
		"gallery unlock livingroom",
		'<i><span class="redText">Đã unlock 1 bức ảnh trong Gallery.',
		'<i>Bạn có thể Save tiến trình, Quit game và check ảnh tại Gallery.',
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
		"Mật khẩu sai!",
		"m Không được rồi! Chắc là sẽ có manh mối gì đó đâu đây.",
		'jump choiceLoop1',
	],

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
		'aks "Nhiệm vụ ở phòng này rất đơn giản."',
		'aks "Trong căn phòng này có một điểm bất thường."',
		'aks "Anh chỉ cần tìm điểm bất thường đó, và hoàn thành nhiệm vụ được giao."',
		'aks "Chúc may mắn... Ahahaha..."',
		"hide image tv with flipOutY",
		"jump choiceLoop2",
	],

	// bed room
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
	"drawerBed": [
		"m:happy Bắt được em rồi, Akachan. Hehehe...",
		'<i><span class="redText">Đã nhận được vật phẩm bí mật!',
		{'Function':{
			'Apply': function(){
				this.storage().haveHandcuff = true;
				return true;
			},
			'Reverse': function(){
				this.storage().haveHandcuff = false;
			}
		}},
		"jump choiceLoop2",
	],
	"pillow": [
		"Machida tìm thấy thứ gì đó dưới gối.",
		"m:happy Hehehe... Em muốn cả thứ này ở đây nữa à.",
		'<i><span class="redText">Đã nhận được vật phẩm bí mật!',
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
		{'Choice': {
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
		"jump choiceLoop",
	],
	"correctHanger": [
	  'aks "Phải thế chứ ehehe... Giỏi lắm chồ..."',
		'aks "À không có gì, anh tiếp tục đi!"',
		'm:happy ...',
		"m:happy Em ấy vừa định gọi mình là chồng đúng không? Hehe!",
		"gallery unlock bedroom",
		'<i><span class="redText">Đã unlock 1 bức ảnh trong Gallery.',
		'<i>Bạn có thể Save tiến trình, Quit game và check ảnh tại Gallery.',
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
		'jump choiceLoop2',
	],

	// bathroom
	"choiceLoop":[
		"show scene vtfront with clickable",
		{'Choice':
		{
			"Class": "clickscreen vtfront",

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