var app = angular.module('app',[]);
app.controller('findSundays', function($scope){
    $scope.result = '';
    $scope.first = '';
    $scope.second = '';
    var count = 0;

    $scope.click = function(){
        if ($scope.first.getTime() > $scope.second){
            $scope.result = "Your first month must be earlier then second!"
        } else {
            $scope.result ="Months with 5 Sundays: " + countMonthsWithFiveSundays($scope.first, $scope.second);
        }
    };

    var daysInMonth = function (date) {
        return new Date(date.getYear(), date.getMonth()+1, 0).getDate();
    };

    var countSundays = function(date){
        var count = 0;
        var month = date.getMonth();
        var year = date.getFullYear()   ;
        var counter = daysInMonth(date);
        var newDate = date;

        for(var i = 2; i <= counter; i++){
            if(newDate.getDay() == 0 ){
                newDate = new Date(year, month, i);
                count++;
            } else {
                newDate = new Date(year, month, i);
            }
        }
        return count;
    };
    var countMonthsWithFiveSundays = function(firstDate, secondDate){

        while (firstDate.getTime() != secondDate.getTime()){
            if (countSundays(firstDate) == 5){
                count++;
            }
            firstDate = new Date(firstDate.getFullYear(), firstDate.getMonth()+1);
        }
        if (countSundays(secondDate) == 5){
            count++;
        }
        return count;
    };
});