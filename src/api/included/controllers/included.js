'use strict';

/**
 * included controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::included.included');
