// up describes the changes that will be applied to teh database
exports.up = function(knex) {
    // create the vegetables table
    // remember to return
    return knex.schema.createTable('vegetables', tbl => { 
        // a primary key, name id, type integer, autoincrement
        tbl.increments();

        // chainable in the knex docs --> .string(), .unique(), index(), etc.
        tbl
            .string('name', 255)
            .notNullable()
            .unique()
            .index();
        tbl.boolean('favorite').defaultTo(false);
    })
};


// down describes hot to undo the changes from the up function 
exports.down = function(knex) {
    // remove (drop) the vegetables table
    // drop is the keyword for objects, whereas delete is for data
    return knex.schema.dropTableIfExists('vegetables');
};
