/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    ALTER TABLE replies
    ADD COLUMN reply_id INTEGER REFERENCES replies(id) ON DELETE CASCADE DEFAULT NULL;
    `)
};

exports.down = pgm => {
    pgm.sql(`
    ALTER TABLE replies
    DROP CONSTRAINT replies_reply_id_fkey;
    `)
};
