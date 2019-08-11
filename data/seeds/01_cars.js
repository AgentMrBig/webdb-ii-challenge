
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, vin: '1234565', make: 'ford', model: 'mustang', mileage: '1000' },
        { id: 2, vin: '1254745', make: 'chevy', model: 'chevelle', mileage: '23000' },
        { id: 3, vin: '3409494', make: 'ferrari', model: 'la ferrari', mileage: '10' }
      ]);
    });
};