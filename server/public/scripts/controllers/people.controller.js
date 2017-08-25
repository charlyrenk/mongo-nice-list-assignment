myApp.controller('PeopleController', ['PersonService', 
function (PersonService) {
    console.log('People Controller loaded.');
    
    var self = this;
    self.newPerson = {
    };
    PersonService.getPeople();
    self.gottenPeople = PersonService.gottenPeople; 

    self.addPerson = function() {
        // have service send this to the server
        console.log('clicked to add new person');
        self.newPerson.internetPts = 1000; 
        PersonService.addPeople(self.newPerson);

    }


    self.updatePerson = function(currentPerson) {
        currentPerson.location = "Oz";
        PersonService.updatePerson(currentPerson);
    }

    self.deletePerson = function(personId) {
        PersonService.deletePerson(personId);
    }

    self.addPoints = function(currentPerson) {
        currentPerson.internetPts += 100;
        PersonService.updatePerson(currentPerson);
    }


}]);
