angular.module('starter.controllers', ['lr.upload'])




 // Define our main app
   

   

    
   

  
.controller('DashCtrl', function($scope,$timeout) {

      $scope.onComplete = function (response) {
        console.log('Request Sent/ Response Received', response);
        //$scope.responseData = ;
       
	var showMessage = true;
        if(response.data[0].message)
	{
	    $scope.responseData = response.data[0].message;
	   
            if(response.data[0].mname === 'profilePic')
	    {
	       $scope.showprofilePIC = showMessage;
	       $scope.filedataprofilePIC = response.data[0].fileName;
	    }
	    else if(response.data[0].mname === 'GRE')
	    {
		$scope.showGRE = showMessage;
		$scope.filedataGRE = response.data[0].fileName;
	    }
	    else if(response.data[0].mname === 'TOEFL')
	    {
		$scope.showTOEFL = showMessage;
		$scope.filedataTOEFL = response.data[0].fileName;
	    }
	    else if(response.data[0].mname === 'SEM1')
	    {
		$scope.showSEM1 = showMessage;
		$scope.filedataSEM1 = response.data[0].fileName;
	    }
	    else if(response.data[0].mname === 'SEM2')
	    {
		$scope.showSEM2 = showMessage;
		$scope.filedataSEM2 = response.data[0].fileName;
	    }
	   else if(response.data[0].mname === 'SEM3')
	    {
		$scope.showSEM3 = showMessage;
		$scope.filedataSEM3 = response.data[0].fileName;
	    }
	   else if(response.data[0].mname === 'SEM4')
	    {
		$scope.showSEM4 = showMessage;
		$scope.filedataSEM4 = response.data[0].fileName;
	    }
           else if(response.data[0].mname === 'SEM5')
	    {
		$scope.showSEM5 = showMessage;
		$scope.filedataSEM5 = response.data[0].fileName;
	    }
	   else if(response.data[0].mname === 'SEM6')
	    {
		$scope.showSEM6 = showMessage;
		$scope.filedataSEM6 = response.data[0].fileName;
	    }
	   else if(response.data[0].mname === 'SEM7')
	    {
		$scope.showSEM7 = showMessage;
		$scope.filedataSEM7 = response.data[0].fileName;
	    }
	   else if(response.data[0].mname === 'SEM8')
	    {
		$scope.showSEM8 = showMessage;
		$scope.filedataSEM8 = response.data[0].fileName;
	    }
	   else if(response.data[0].mname === 'CMM')
	    {
		$scope.showCMM = showMessage;
		$scope.filedataCMM = response.data[0].fileName;
	    }
		
	}
       
       /* $timeout(function() {
                showMessage = false;
		$scope.show = showMessage;
         }, 10000);*/
      };

     
    
     /*$scope.onGlobalSuccess = function (response) {
        console.log('AppCtrl.onSuccess', response);
        $scope.responseData = response.data;
        //$scope.uploads = $scope.uploads.concat(response.data.files);
      };*/
   




})


.controller('SimpleCtrl', function($scope) {

    
    




})

.controller('ChatsCtrl', function($scope, $ionicPopup, $timeout, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

 
})

.controller('ChatDetailCtrl', function($scope, $ionicPopup, $timeout, $stateParams, Chats,$http) {
  $scope.chat = Chats.get($stateParams.chatId);
    // Triggered on a button click, or some other target
var myPopup;
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   myPopup = $ionicPopup.show({
     templateUrl: 'templates/email-form.html',
     title: 'Forward profile via email',
     subTitle: 'Please fill in the details',
     scope: $scope,
     buttons: [
       { text: 'Cancel' }]
       
   });
   
   
   myPopup.then(function(res) {
     console.log('Tapped!', res);
     
     
   });
   $scope.popup = myPopup;
  /* $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 5000);*/
  };
   
   
    
     $scope.showAlert = function(x) {
     
    alert(x);
   
       
     
   };

   
   $scope.sendEmail = function ()
   {
	var userdata = Chats.get($stateParams.chatId);
        
	if($scope.email.to!="")
	{
		var mailTo = $scope.email.to;
		var mailSubject = $scope.email.subject;
		var mailContent = $scope.email.content;
                var baseURL = "http://192.168.0.100:3000/static/";
                var userId = $stateParams.chatId;
                var data = userdata;
		var emailData = {to:mailTo,subject:mailSubject,content:mailContent,baseURL:baseURL,userId:userId,data:data};
                var status;
			$http.post("http://192.168.0.100:3000/send",emailData)
			.success(function (response) {
		                 
                                $scope.popup.close();
				var res = response;
				$scope.sentStatus = res.message;
                                $scope.showAlert(""+res.message);
				
				console.log("Response:"+res.message);
                              
                                

			});
		

	       return;
	}
	else{

		alert("To field cannot be empty");
		return;
	}
         
   }

})
.controller('FileViewCtrl', function($scope,$stateParams) {
  $scope.userId = $stateParams.userId;
  $scope.filename = $stateParams.filename; 
  $scope.ftype = $stateParams.ftype;

})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

