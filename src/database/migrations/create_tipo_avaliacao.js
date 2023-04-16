exports.up = function (knex) {
    return knex.schema.createTable('tipo_avaliacao', (table) => {
        table.integer('codigo')
        table.string('descricao', 100)
        table.integer('peso')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tipo_avaliacao')
};
