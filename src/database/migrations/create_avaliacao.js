exports.up = function (knex) {
    return knex.schema.createTable('avaliacao', (table) => {
        table.integer('codigo')
        table.integer('codigo_aluno')
        table.integer('codigo_disciplina')
        table.integer('codigo_tipo_avaliacao')
        table.decimal('nota')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('avaliacao')
};
