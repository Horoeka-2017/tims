exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('messages', function(table) {
        table.increments('id').primary()
        table.integer('sender_id')
        table.integer('recipient_id')
        table.string('image_url')
        table.string('date_time')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages')
}