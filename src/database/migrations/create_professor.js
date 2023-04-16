exports.up = function (knex) {
    return knex.schema.createTable('professor', (table) => {
        table.integer('codigo')
        table.string('nome', 100)
        table.integer('situacao')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('professor')
};
