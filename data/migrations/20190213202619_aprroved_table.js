
exports.up = function(knex, Promise) {
    return knex.schema.createTable('approved',table => {
        table.increments();
        table.string('story_title').notNullable();
        table.string('content');
        table.string('author').notNullable();
        table.string('location').notNullable();
        
  
    } )
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('approved');
  };