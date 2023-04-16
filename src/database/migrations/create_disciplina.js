exports.up = function (knex) {
    return knex.schema.createTable('disciplina', (table) => {
        table.integer('codigo')
        table.string('descricao', 100)
        table.integer('codigo_professor')
        table.integer('situacao')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('disciplina')
};
