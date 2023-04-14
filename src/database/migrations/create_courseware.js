exports.up = function (knex) {
    return knex.schema.createTable('courseware', (table) => {
        table.string('id').notNullable()
        table.string('idsubject').notNullable()
        table.decimal('file').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('courseware')
};
