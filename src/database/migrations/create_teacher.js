exports.up = function (knex) {
    return knex.schema.createTable('teacher', (table) => {
        table.string('id').notNullable()
        table.string('name').notNullable()
        table.string('state').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('teacher')
};
