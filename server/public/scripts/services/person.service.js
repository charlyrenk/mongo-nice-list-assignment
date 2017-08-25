myApp.service('PersonService', ['$http', function($http) {
    console.log('Person service loaded.');

    var self = this;
    self.gottenPeople = { list: [] };

    self.getPeople = function() {
        $http.get('/person').then(function(response) {
            self.gottenPeople.list = response.data;

            console.log('get response: ', self.gottenPeople);
        });
    };

    self.addPeople = function(newPerson) { 
        console.log('going to send this object to the server: ', newPerson);
               
        $http.post('/person', newPerson).then(function(response) {
            console.log('service post response: ', response);
            self.getPeople();            
        });
    };

    self.updatePerson = function (currentPerson) {
        console.log('service is going to send this object to the server: ', currentPerson);
        $http.put('/person/' + currentPerson._id, currentPerson).then(function(response) {
            console.log('service update response:', response);
            self.getPeople();            
        });
    };

    self.deletePerson = function(personId) {
        console.log('service to delete id: ', personId);
        
        $http.delete('/person/' + personId).then(function (response) {
            console.log('service delete response:', response);
            self.getPeople();
        });
        
    }

    
}]);