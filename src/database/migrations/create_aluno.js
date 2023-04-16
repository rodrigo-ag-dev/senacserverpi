exports.up = function (knex) {
    return knex.schema.createTable('aluno', (t) => {
        t.integer('codigo')
        t.string('nome', 100)
        t.string('fone', 20)
        t.string('cidade', 10)
        t.string('uf', 2)
        t.string('imagem', 100)
        t.integer('situacao')
        t.primary(['codigo'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('aluno')
};
