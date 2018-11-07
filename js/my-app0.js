// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
	swipeBackPage: false,
	swipePanelOnlyClose: true,
	pushState: true,
    template7Pages: true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: false,
});


$(document).ready(function() {
		$("#RegisterForm").validate();
		$("#LoginForm").validate();
		$("#ForgotForm").validate();
		$('.close-popup').on('click', function() {
			 $("label.error").hide();
		});
});

$$(document).on('pageInit', function (e) {
		$("#RegisterForm").validate();
		$("#LoginForm").validate();
		$("#ForgotForm").validate();
		$('.close-popup').on('click', function() {
			 $("label.error").hide();
		});	
		(function() {
			[].slice.call( document.querySelectorAll( 'select#selectoptions' ) ).forEach( function(el) {	
				new SelectFx(el, {
					stickyPlaceholder: false
				});
			} );
		})();
})
myApp.onPageInit('music', function (page) {
		  audiojs.events.ready(function() {
			var as = audiojs.createAll();
		  });
})
myApp.onPageInit('videos', function (page) {
		  $(".videocontainer").fitVids();
})
myApp.onPageInit('contact', function (page) {
		$("#ContactForm").validate({
		submitHandler: function(form) {
		ajaxContact(form);
		return false;
		}
		});	
})
myApp.onPageInit('blog', function (page) {
 
		$(".post_entry").hide();	
		size_li = $(".post_entry").size();
		x=4;
		$('.post_entry:lt('+x+')').show();
		$('#loadMore').on('click', function() {
			x= (x+1 <= size_li) ? x+1 : size_li;
			$('.post_entry:lt('+x+')').show();
			if(x === size_li){
				$('#loadMore').hide();
				$('#showLess').show();
			}
		});

})

myApp.onPageInit('shop', function (page) {
			
		$('.qntyplusshop').on('click', function(e) {
									  
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val(),10);
			if (!isNaN(currentVal)) {
				$('input[name='+fieldName+']').val(currentVal + 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
			
		});
		$(".qntyminusshop").on('click', function(e) {
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val(),10);
			if (!isNaN(currentVal) && currentVal > 0) {
				$('input[name='+fieldName+']').val(currentVal - 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
		});	
  
})
myApp.onPageInit('shopitem', function (page) {
		$(".swipebox").swipebox();	
		$('.qntyplusshop').on('click', function(e) {
									  
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val(),10);
			if (!isNaN(currentVal)) {
				$('input[name='+fieldName+']').val(currentVal + 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
			
		});
		$(".qntyminusshop").on('click', function(e) {
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val(),10);
			if (!isNaN(currentVal) && currentVal > 0) {
				$('input[name='+fieldName+']').val(currentVal - 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
		});	
  
})
myApp.onPageInit('cart', function (page) {
			
    $('.item_delete').on('click', function(e) {
        e.preventDefault();
        var currentVal = $(this).attr('id');
        $('div#'+currentVal).fadeOut('slow');
    });
  
})
myApp.onPageInit('photos', function (page) {
	$(".swipebox").swipebox();
	$("a.switcher").on("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = $("ul#photoslist");
		var classNames = $(this).attr('class').split(' ');
		
		
		if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid === "view13") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_13_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_12");
				theproducts.addClass("photo_gallery_13");

			}
			
			else if(theid === "view12") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_12_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_12");

			} 
			else if(theid === "view11") {
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_11_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_12");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_11");

			} 
			
		}

	});	
});


function initInfosPage() {
    var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
    DB.transaction(function (tx) {
        var req = "SELECT * FROM user;";
        tx.executeSql(req, [],
                function (tx, resultSet) {
                    if (resultSet.rows.item(0)) {
                        $('#userConnected').html(resultSet.rows.item(0).prenom + ' ' + resultSet.rows.item(0).nom);
                        $('#role').html(resultSet.rows.item(0).role);
                        $('#matricule').html(resultSet.rows.item(0).matricule);
                    } else {
                        alert('Utilisateur non défini');
                    }
                },
                function (error) {
                    window.plugins.toast.showLongCenter('Erreur d\'acces aux données utilisateurs');
                });
    });

    var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
    DB.transaction(function (tx) {
        var reqDelete = "SELECT * FROM terrains WHERE 1=1 ";
        tx.executeSql(reqDelete, [],
                function (tx, result) {
                    $('#nbTerrains').html(result.rows.length);
                },
                function (error) {
                    alert('erreur recup nombre terrains ' + error.message);
                });
    });

    var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
    DB.transaction(function (tx) {
        var reqDelete = "SELECT * FROM messages WHERE 1=1 ";
        tx.executeSql(reqDelete, [],
                function (tx, result) {
                    $('#nbMessages').html(result.rows.length);
                },
                function (error) {
                    alert('erreur recup nombre message ' + error.message);
                });
    });

    var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
    DB.transaction(function (tx) {
        var reqDelete = "SELECT * FROM documents WHERE 1=1 ";
        tx.executeSql(reqDelete, [],
                function (tx, result) {
                    $('#nbDocuments').html(result.rows.length);
                },
                function (error) {
                    alert('erreur recup nombre documents ' + error.message);
                });
    });

}

function quitter() {
    if (confirm("Voulez-vous vraiment quitter l'application ?")) {
        navigator.app.exitApp();
    }
}

function deconnexion() {
    var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
    DB.transaction(function (tx) {
        var reqInsert = "UPDATE user SET connecte=?";
        tx.executeSql(reqInsert, [0],
                function (tx, result) {
                    window.plugins.toast.showLongCenter('Déconnexion effectuée avec suucces ');
                    window.location = "index.html";
                },
                function (error) {
                    alert('erreur déconnexion utilisateur');
                });
    });
}


function updateFromServer() {
    loadversements();
    loadterrains();
    loaddocuments();
    loadmessages();
}

function loadterrains() {
    //$('#pageActu').hide();
    //$('#loading').show();
    //var matricule = $('#matricule').val();
    jQuery.ajax({
        url: "http://server.r2s-sonatel.com/liste.php?objet=terrains&matricule=" + $('#matricule').val(),
        dataType: 'JSON',
        success: function (resultat) {
            window.plugins.toast.showLongCenter(resultat.length + 'terrains recupérés ');
            $('#nbTerrains').html(resultat.length);
            var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
            DB.transaction(function (tx) {
                var reqDelete = "DELETE FROM terrains WHERE 1=1 ";
                tx.executeSql(reqDelete, [],
                        function (tx, result) {
                            window.plugins.toast.showLongCenter('terrains purgés avec succes');
                        },
                        function (error) {
                            alert('erreur purge terrains ' + error.message);
                        });
            });

            jQuery.each(resultat, function (i) {
                var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
                DB.transaction(function (tx) {
                    var reqInsert = "INSERT INTO terrains (numero,superficie,parcelles) VALUES (?,?,?);";
                    tx.executeSql(reqInsert, [resultat[i].numero, resultat[i].superficie, resultat[i].parcelles],
                            function (tx, result) {
                                window.plugins.toast.showLongCenter('Terrain  inséré ' + resultat[i].numero);
                                //  alert('Terrain  inséré ' + resultat[i].numero);
                            },
                            function (error) {
                                alert('erreur insertion terrain ' + error.message);
                            });
                });
            });
            //$('#loading').hide();
            //$('#pageActu').show();
        },
        error: function () {
            window.plugins.toast.showLongCenter('Terrains: serveur inaccessible.');
            //$('#loading').hide();
            //$('#pageActu').show();
        }
        // timeout: 15000
    });
}

function loadmessages() {
    //  $('#pageActu').hide();
    // $('#loading').show();
    //var matricule = $('#matricule').val();
    jQuery.ajax({
        url: "http://server.r2s-sonatel.com/liste.php?objet=alertes&matricule=" + $('#matricule').val(),
        dataType: 'JSON',
        success: function (resultat) {
            window.plugins.toast.showLongCenter(resultat.length + 'messages recupérés ');
            $('#nbMessages').html(resultat.length);
            var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
            DB.transaction(function (tx) {
                var reqDelete = "DELETE FROM messages WHERE 1=1 ";
                tx.executeSql(reqDelete, [],
                        function (tx, result) {
                            window.plugins.toast.showLongCenter('Messages purgés avec succes');
                        },
                        function (error) {
                            alert('erreur purge messages ' + error.message);
                        });
            });

            jQuery.each(resultat, function (i) {
                var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
                DB.transaction(function (tx) {
                    var reqInsert = "INSERT INTO messages (titre,message,lu,datemessage) VALUES (?,?,?,?);";
                    tx.executeSql(reqInsert, [resultat[i].titre, resultat[i].message, 0, resultat[i].created],
                            function (tx, result) {
                                window.plugins.toast.showLongCenter('Message  inséré ' + resultat[i].titre);
                                // alert('Message  inséré ' + resultat[i].titre);
                            },
                            function (error) {
                                alert('erreur insertion message ' + error.message);
                            });
                });
            });
            // $('#loading').hide();
            // $('#pageActu').show();
        },
        error: function () {
            window.plugins.toast.showLongCenter('Messages serveur inaccessible.');
            //  $('#loading').hide();
            //  $('#pageActu').show();
        },
        // timeout: 15000
    });
}

function loadversements() {
    // $('#pageActu').hide();
    // $('#loading').show();
    //var matricule = $('#matricule').val();
    //alert('Matricule ' + matricule);
    jQuery.ajax({
        url: "http://server.r2s-sonatel.com/liste.php?objet=versements&matricule=" + $('#matricule').val(),
        dataType: 'JSON',
        success: function (resultat) {
            window.plugins.toast.showLongCenter(resultat.length + ' versements recupérés ');
            var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
            DB.transaction(function (tx) {
                var reqDelete = "DELETE FROM versements WHERE 1=1 ";
                tx.executeSql(reqDelete, [],
                        function (tx, result) {
                            window.plugins.toast.showLongCenter('versements purgés avec succes');
                        },
                        function (error) {
                            alert('erreur purge versements ' + error.message);
                        });
            });
            jQuery.each(resultat, function (i) {
                var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
                DB.transaction(function (tx) {
                    var reqInsert = "INSERT INTO versements (libelle,montant) VALUES (?,?);";
                    tx.executeSql(reqInsert, [resultat[i].libelle, resultat[i].montant],
                            function (tx, result) {
                                window.plugins.toast.showLongCenter('Versement  inséré: ' + resultat[i].libelle);
                            },
                            function (error) {
                                alert('erreur insertion versement ' + error.message);
                            });
                });
            });
            //  $('#loading').hide();
            //  $('#pageActu').show();
        },
        error: function () {
            window.plugins.toast.showLongCenter('Versements serveur inaccessible.');
            // $('#loading').hide();
            //  $('#pageActu').show();
        },
        // timeout: 15000
    });
}

function loaddocuments() {
    // $('#pageActu').hide();
    // $('#loading').show();
    var matricule = $('#matricule').val();
    jQuery.ajax({
        url: "http://server.r2s-sonatel.com/liste.php?objet=documents&matricule=" + $('#matricule').val(),
        dataType: 'JSON',
        success: function (resultat) {
            window.plugins.toast.showLongCenter(resultat.length + ' documents recupérés ');
            $('#nbDocuments').html(resultat.length);
            var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
            DB.transaction(function (tx) {
                var reqDelete = "DELETE FROM documents WHERE 1=1 ";
                tx.executeSql(reqDelete, [],
                        function (tx, result) {
                            window.plugins.toast.showLongCenter('documents purgés avec succes');
                        },
                        function (error) {
                            alert('erreur purge documents ' + error.message);
                        });
            });

            jQuery.each(resultat, function (i) {
                var DB = window.sqlitePlugin.openDatabase({name: "my.db", location: 1});
                DB.transaction(function (tx) {
                    var reqInsert = "INSERT INTO documents (document,typedocument) VALUES (?,?);";
                    tx.executeSql(reqInsert, [resultat[i].document, resultat[i].typedocument],
                            function (tx, result) {
                                window.plugins.toast.showLongCenter('Message  inséré ' + resultat[i].typedocument);
                                //alert('Message  inséré ' + resultat[i].typedocument);
                            },
                            function (error) {
                                alert('erreur insertion document ' + error.message);
                            });
                });
            });
            //  $('#loading').hide();
            //  $('#pageActu').show();
        },
        error: function () {
            window.plugins.toast.showLongCenter('Documents: serveur inaccessible.');
            //$('#loading').hide();
            // $('#pageActu').show();
        },
        // timeout: 15000
    });
}