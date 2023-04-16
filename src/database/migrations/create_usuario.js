exports.up = function (knex) {
    return knex.schema.createTable('usuario', (table) => {
        table.integer('codigo')
        table.string('email', 255)
        table.string('password', 100)
        table.primary(['codigo'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuario')
};
