'use strict';

/**
 * excluded router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::excluded.excluded');
