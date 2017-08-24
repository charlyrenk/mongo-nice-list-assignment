myApp.controller('PeopleController', ['PersonService', 
function (PersonService) {
    console.log('People Controller loaded.');
    
    var self = this;
    self.newPerson = {};

    self.addPerson = function() {
        // have service send this to the server
        console.log('clicked to add new person');
        PersonService.addPeople(self.newPerson);
    }


}]);
