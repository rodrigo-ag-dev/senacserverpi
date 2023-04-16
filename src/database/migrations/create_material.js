exports.up = function (knex) {
    return knex.schema.createTable('material', (t) => {
        t.integer('codigo')
        t.integer('codigo_disciplina')
        t.string('arquivo', 255)
        t.primary(['codigo'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('material')
};
