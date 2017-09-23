app.controller('myCtrl', function($scope, $http){
$scope.myFunction = function(){
        $http({
		method: "GET",
		url: "info.json"
	}).then( function mySucces(response){
	$scope.info= response.data.records;
	//$scope.stext=response.statusText;
	},function myError(response){
	$scope.error="File Not Found";
	});
    }
});


reg.controller('RegisterCtrl',function($scope){
 $scope.reg = [
        {name:'Shruti',mobile:'988745612',email:'shruti@gmail.com'},
        {name:'Geeta',mobile:'981745612',email:'geeta@gmail.com'}
        ]
 
 
		 $scope.register = function () {
			 $scope.errorText="";
			 
			 
        $scope.reg.push({name:$scope.name, mobile:$scope.mobile, email:$scope.email});
			  
		$scope.name='';
		$scope.mobile='';
		$scope.email='';
		
		$scope.removeItem = function (x) {
        $scope.reg.splice(x, 1);
    }
    } 
	
});
