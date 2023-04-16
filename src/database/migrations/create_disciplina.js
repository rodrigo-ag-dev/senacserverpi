exports.up = function (knex) {
    return knex.schema.createTable('disciplina', (t) => {
        t.integer('codigo')
        t.string('descricao', 100)
        t.integer('codigo_professor')
        t.integer('situacao')
        t.primary(['codigo'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('disciplina')
};
