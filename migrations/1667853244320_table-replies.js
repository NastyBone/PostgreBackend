/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE replies (
            id SERIAL PRIMARY KEY,
            content VARCHAR(1000) NOT NULL,
            created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            reported BOOLEAN DEFAULT FALSE,
            password_delete VARCHAR(16) NOT NULL,
            thread_id INTEGER REFERENCES threads(id)
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE replies;`)
};
