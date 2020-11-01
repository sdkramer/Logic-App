
exports.up = async function(knex) {
  await knex.schema.createTable('kinds', (table) =>{
    table.increments('id')
    table.text('kind').notNull().unique()
    table.text('definition').notNull().unique()
  })
  await knex.schema.createTable('simple_examples', (table) => {
table.increments('id')
table.text('argument')
table.text('untying')
table.integer('kind_id').references('id').inTable('kinds').notNull()
  })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('simple_examples')
  await knex.schema.dropTableIfExists('kinds')
};
