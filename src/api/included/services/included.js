'use strict';

/**
 * included service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::included.included');
