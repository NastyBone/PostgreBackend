/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`CREATE TABLE threads(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        content VARCHAR (1000) NOT NULL,
        created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        bumped_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        board_id INTEGER REFERENCES boards(id) ON DELETE CASCADE,
        password_delete VARCHAR(16) NOT NULL,
        reported BOOLEAN DEFAULT FALSE
    );`)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE threads
    `)
};
