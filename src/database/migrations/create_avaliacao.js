exports.up = function (knex) {
    return knex.schema.createTable('avaliacao', (t) => {
        t.integer('codigo')
        t.integer('codigo_aluno')
        t.integer('codigo_disciplina')
        t.integer('codigo_tipo_avaliacao')
        t.decimal('nota',15,2)
        t.primary(['codigo'])
        t.index(['codigo_disciplina', 'codigo_aluno'], 'analiacao_codigos_idx')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('avaliacao')
};
