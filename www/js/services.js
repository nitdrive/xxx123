angular.module('starter.services', [])



.factory('Chats', function($http,$window) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 'ben10',
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    rating: 'img/1.png',
    progress: 50,
    semester: "Fall 2015",
    major: "Computer Science",
    undergraduateMajor: "Computer Science",
    baseURL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/ben10',
    GRE: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/0/0_g.jpg',
    TOEFL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/0/0_t.jpg'
  }, {
    id: 'maxlynx5',
    name: 'Max Lynx',
    lastText: 'I should buy a car',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    rating: 'img/2.png',
    progress: 60,
    semester: "Fall 2015",
    major: "Civil Engineering",
    undergraduateMajor: "Computer Science",
    baseURL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/ben10',
    GRE: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_g.jpg',
    TOEFL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_t.jpg'
  }, {
    id: 'adam123',
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    rating: 'img/3.png',
    progress: 40,
    semester: "Fall 2015",
    major: "Computer Science",
    undergraduateMajor: "Computer Science",
    baseURL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/ben10',
    GRE: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_g.jpg',
    TOEFL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_t.jpg'
  }, {
    id: 'perry10',
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png',
    rating: 'img/3.png',
    progress: 75,
    semester: "Fall 2015",
    major: "Mechanical Engineering",
    undergraduateMajor: "Industrial Engineering",
    baseURL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/ben10',
    GRE: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_g.jpg',
    TOEFL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_t.jpg'

  }, {
    id: 'mikeharris19',
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
    rating: 'img/5.png',
    progress: 90,
    semester: "Fall 2015",
    major: "Electrical Engineering",
    undergraduateMajor: "Electrical Engineering",
    baseURL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/ben10',
    GRE: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_g.jpg',
    TOEFL: 'http://192.168.0.100:3000/static/b859286ad04ff19c92f1d9a873bebf2c40dadbce/1/1_t.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === chatId) {
          return chats[i];
        }
      }
      return null;
    },
    upload: function(user){
	
	
       var file = {uname: username, password: pass};
       console.log("File Uploding...");
       return $http.post('http://192.168.0.100:3000/upload',file);

   }
  };
});
