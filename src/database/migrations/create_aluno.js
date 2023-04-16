exports.up = function (knex) {
    return knex.schema.createTable('aluno', (table) => {
        table.integer('codigo')
        table.string('nome', 100)
        table.string('fone', 20)
        table.string('cidade', 10)
        table.string('uf', 2)
        table.string('imagem', 100)
        table.integer('situacao')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('aluno')
};
