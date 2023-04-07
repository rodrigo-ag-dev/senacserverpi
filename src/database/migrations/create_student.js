exports.up = function (knex) {
    return knex.schema.createTable('student', (table) => {
        table.string('id').notNullable()
        table.string('name').notNullable()
        table.string('state').notNullable()
        table.string('phone').notNullable()
        table.string('city').notNullable()
        table.string('uf').notNullable()
        table.string('image')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('student')
};
