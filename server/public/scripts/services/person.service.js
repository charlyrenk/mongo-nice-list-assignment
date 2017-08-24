myApp.service('PersonService', ['$http', function($http) {
    console.log('Person service loaded.');

    var self = this;

    self.addPeople = function(newPerson) { 
        console.log('going to send this object to the server: ', newPerson);
               
        $http.post('/person', newPerson).then(function(response) {
            console.log('service post response: ', response);            
        });
    };

    
}]);