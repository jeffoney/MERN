const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api', PetController.index);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pet/:_id', PetController.getOne);
    app.put('/api/pet/:_id', PetController.updateObject);
    app.delete('/api/pet/:_id', PetController.deleteObject);
    app.put('/api/like/:_id', PetController.likePet);
}