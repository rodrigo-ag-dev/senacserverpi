exports.up = function (knex) {
    return knex.schema.createTable('assessment', (table) => {
        table.string('id').notNullable()
        table.string('idstudent').notNullable()
        table.string('idsubject').notNullable()
        table.decimal('value').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('assessment')
};
