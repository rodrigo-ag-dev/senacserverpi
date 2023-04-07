exports.up = function (knex) {
    return knex.schema.createTable('subject', (table) => {
        table.string('id').notNullable()
        table.string('name').notNullable()
        table.string('state').notNullable()
        table.string('idteacher').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('subject')
};
