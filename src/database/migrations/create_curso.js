exports.up = function (knex) {
    return knex.schema
        .createTable('curso', (t) => {
            t.integer('codigo')
            t.string('descricao', 100)
            t.integer('semestres')
            t.primary(['codigo'])
        })
        .createTable('curso_disciplina', (t) => {
            t.integer('codigo')
            t.integer('codigo_disciplina')
            t.integer('semestre')
            t.primary(['codigo', 'codigo_disciplina'])
            t.index(['codigo_disciplina', 'semestre'], 'curso_disciplina_semestre')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('curso_disciplina')
        .dropTable('curso')
};
