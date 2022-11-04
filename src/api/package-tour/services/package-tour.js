'use strict';

/**
 * package-tour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-tour.package-tour');
