/*===========   Settings Service    ===========*/
angular.module('starter').factory('settingsService', function($localstorage)
{
	function isEmpty(ob)
	{
		for(var i in ob){ return false;}
			return true;
	}

	var settings = $localstorage.getObject('settingsKey');

	if (isEmpty(settings))
	{
		var settings = {'bibleVersion':'NIV', 'fontSize':'18', 'mediaType':'video', 'redText':'yes', 'notification':'off', 'notificationTime':'27000'};
		$localstorage.setObject('settingsKey', settings);
	}

	return {
		settings:settings,
		save: function(newSettings)
		{
			settings = newSettings;
			$localstorage.setObject('settingsKey', settings);
		}
	};
})

angular.module('starter').factory('connectSettingsService', function($localstorage)
{
	function isEmpty(ob)
	{
		for(var i in ob){ return false;}
			return true;
	}

	var settings = $localstorage.getObject('connectKey');

	if (isEmpty(settings))
	{
		var settings = {
			'fName':'',
			'lName':'',
			'gender':'m',
			'age':'2',
			'iAm':'0',
			'address':'address',
			'suburb':'suburb',
			'postCode':'5023',
			'homePhone':'',
			'mobile':'mobile',
			'email':'email'
		};

		$localstorage.setObject('connectKey', settings);
	}

	return {
		settings:settings,
		save: function(newSettings)
		{
			settings = newSettings;
			$localstorage.setObject('connectKey', settings);
		}
	};
})
