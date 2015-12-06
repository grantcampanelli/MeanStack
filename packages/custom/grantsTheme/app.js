'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var GrantsTheme = new Module('grantsTheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
GrantsTheme.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  GrantsTheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
/*
  GrantsTheme.menus.add({
    title: 'example',
    link: 'example',
    roles: ['authenticated'],
    menu: 'main'
  });
*/
  
  GrantsTheme.menus.add({
    title: 'Rosters',
    link: 'rosters',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  GrantsTheme.aggregateAsset('css', 'grantsTheme.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    GrantsTheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    GrantsTheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    GrantsTheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return GrantsTheme;
});
