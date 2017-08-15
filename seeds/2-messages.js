
exports.seed = function (knex) {
  return knex('messages').del()
    .then(function () {
      return knex('messages').insert([
        {
          sender_id: 1,
          recipient_id: 2,
          image_url: '/images/pikanyan.gif',
          date_time: '1502753984000'
        },
        {
          sender_id: 3,
          recipient_id: 4,
          image_url: '/images/meditation.gif',
          date_time: '1502754020000'
        },
        {
          sender_id: 5,
          recipient_id: 6,
          image_url: '/images/maui.gif',
          date_time: '1502754041000'
        }
      ])
    })
}