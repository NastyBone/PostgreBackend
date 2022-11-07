/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE boards(
            id SERIAL PRIMARY KEY,
            name VARCHAR(20) NOT NULL,
            description VARCHAR(400) NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            bumped_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE boards;
    `)
};
