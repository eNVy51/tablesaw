/*
* tablesaw: A set of plugins for responsive tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/

;(function( $ ) {

	// Cut the mustard
	if( !( 'querySelector' in document ) ||
			( window.blackberry && !window.WebKitPoint ) ||
			window.operamini ) {
		return;
	} else {
		$( document.documentElement ).addClass( 'tablesaw-enhanced' );

		// DOM-ready auto-init of plugins.
		// Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
		$( function(){
			$( document ).trigger( "enhance.tablesaw" );
		});
	}

})( jQuery );