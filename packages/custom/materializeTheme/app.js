'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MaterializeTheme = new Module('materializeTheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MaterializeTheme.register(function(app, auth, database) {

   //app.set('views', __dirname + '/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  MaterializeTheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
/*
  MaterializeTheme.menus.add({
    title: 'materializeTheme example page',
    link: 'materializeTheme example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
*/
  MaterializeTheme.aggregateAsset('css', 'materializeTheme.css');
  MaterializeTheme.aggregateAsset('js', '../lib/materialize/bin/materialize.js');
  MaterializeTheme.aggregateAsset('css', '../lib/materialize/bin/materialize.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    MaterializeTheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MaterializeTheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    MaterializeTheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return MaterializeTheme;
});
