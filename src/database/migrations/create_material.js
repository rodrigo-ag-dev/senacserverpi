exports.up = function (knex) {
    return knex.schema.createTable('material', (table) => {
        table.integer('codigo')
        table.integer('codigo_disciplina')
        table.string('arquivo', 255)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('material')
};
