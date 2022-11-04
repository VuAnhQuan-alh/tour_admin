'use strict';

/**
 * excluded controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::excluded.excluded');
