/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './application.route.config';
import runBlock from './application.run';

import ServiceModule from './shared_components/services/services.module';
import DirectiveModule from './shared_components/directives/directives.module';

import DashboardModule from './dashboard/dashboard.module';

/**
 * App Module: It is the root module of the application. It includes other modules for routing, UI components,
 * services and views of the app.
 * 
 * config: It defines root route of the application.
 *
 * run: During the start of the application, user is redirected to initial view of the application, that is
 *      showing list of builds and firewalls and their related information.
 */

let application;

application = angular.module('App', [ 
        'ui.router',
        ServiceModule.name, 
        DirectiveModule.name,
        DashboardModule.name
    ])
    .config(routeConfig)
    .run(runBlock);

export default application;
