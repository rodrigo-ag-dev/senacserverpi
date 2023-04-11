exports.up = function (knex) {
    return knex.schema.createTable('assessment_type', (table) => {
        table.string('id').notNullable()
        table.string('description').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('assessment_type')
};
