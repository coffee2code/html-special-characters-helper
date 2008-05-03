tinyMCE.importPluginLanguagePack('htmlspecialcharactershelper', 'en');

var TinyMCE_htmlspecialcharactershelperPlugin = {
	getInfo : function() {
		return {
			longname : 'HTML Special Characters Helper Plugin',
			author : 'Scott Reilly',
			authorurl : 'http://www.coffee2code.com',
			infourl : 'http://www.coffee2code.com/wp-plugins',
			version : '1'
		};
	},

	getControlHTML : function(control_name) {
		switch (control_name) {
			case "htmlspecialcharactershelper":
				return tinyMCE.getButtonHTML(control_name, 'HTML Special Characters', '{$pluginurl}/images/amp.png', 'mcehtmlspecialcharactershelper');
		}
		return '';
	},

	execCommand : function(editor_id, element, command, user_interface, value) {
		switch (command) {
			case "mcespecialcharactershelper":
				var template = new Array();
				template['file'] = '../../../../../wp-content/plugins/html-special-characters-helper/html-special-characters.php?src=tinymce';
				template['width'] = 355;
				template['height'] = 295 + (tinyMCE.isMSIE ? 25 : 0);
				// Language specific width and height addons
				template['width'] += tinyMCE.getLang('lang_insert_image_delta_width', 0);
				template['height'] += tinyMCE.getLang('lang_insert_image_delta_height', 0);
				tinyMCE.openWindow(template, {inline : "yes"});
				return true;
		}

		// Pass to next handler in chain
		return false;
	}
};

tinyMCE.addPlugin("htmlspecialcharactershelper", TinyMCE_htmlspecialcharactershelperPlugin);