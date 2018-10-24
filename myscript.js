var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
	$scope.master = {name: "", password: ""};

    $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
    };
    $scope.check = function(name,password) {
    	if(name==="Yunfei Xu"&&password==="#allthebuzz")
        window.location.href='b.html';
        else if(name===""||name===null||name===undefined)
        alert("Name and password are required");
        else if(password===""||password===null||password===undefined)
        alert("Name and password are required");
        else
        {
    	alert("Wrong name or password, please input again ");
    	$scope.reset();
        }
    
    };

});

function myDate(){ 
    document.getElementById("time").innerHTML=new Date().toLocaleString(); 
} 
setInterval(myDate,1000); 