exports.up = function (knex) {
    return knex.schema.createTable('professor', (t) => {
        t.integer('codigo')
        t.string('nome', 100)
        t.integer('situacao')
        t.primary(['codigo'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('professor')
};
