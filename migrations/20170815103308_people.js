exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('People', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('photo')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('people')
}