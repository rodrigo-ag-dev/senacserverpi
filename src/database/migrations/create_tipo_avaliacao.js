exports.up = function (knex) {
    return knex.schema.createTable('tipo_avaliacao', (t) => {
        t.integer('codigo')
        t.string('descricao', 100)
        t.integer('peso')
        t.primary(['codigo'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tipo_avaliacao')
};
