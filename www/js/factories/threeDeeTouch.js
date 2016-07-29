angular.module('starter').factory('QuickActionService', ['$rootScope', '$q', QuickActionService]);

function QuickActionService($rootScope, $q) {

    function check3DTouchAvailability() {
        return $q(function(resolve, reject) {
            if (window.ThreeDeeTouch) {
                window.ThreeDeeTouch.isAvailable(function (available) {
                    resolve(available);
                });
            } else {
                reject();
            }
        });
    }

    function configure() {
        // Check if 3D Touch is supported on the device
        check3DTouchAvailability().then(function(available) {

                if (available) {    // Comment out this check if testing in simulator

                    // Configure Quick Actions
                    window.ThreeDeeTouch.configureQuickActions([
                        {
                            type: 'todaysReading',
                            title: 'Todays Reading',
                            subtitle: '',
                            iconType: 'bookmark'
                        }
                    ]);

                    // Set event handler to check which Quick Action was pressed
                    window.ThreeDeeTouch.onHomeIconPressed = function(payload) {
                        console.log("Icon pressed. Type: " + payload.type + ". Title: " + payload.title + ".");

                        if (payload.type == 'todaysReading') {
                            $rootScope.$broadcast('todaysReadingQuickAction');
                        }
                    };
                }
        })
    }

    return {
        configure: configure
    };
}
