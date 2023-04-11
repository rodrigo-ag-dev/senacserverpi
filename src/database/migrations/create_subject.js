exports.up = function (knex) {
    return knex.schema.createTable('subject', (table) => {
        table.string('id').notNullable()
        table.string('name').notNullable()
        table.string('idteacher').notNullable()
        table.integer('delivered').notNullable()
        table.integer('status').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('subject')
};
