'use strict';

/**
 * excluded service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::excluded.excluded');
