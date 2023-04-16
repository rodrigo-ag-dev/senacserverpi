exports.up = function (knex) {
    return knex.schema.createTable('usuario', (t) => {
        t.integer('codigo')
        t.string('email', 255)
        t.string('password', 100)
        t.primary(['codigo'])
        t.index(['email'], 'usuario_email_idx')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuario')
};
