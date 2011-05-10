/**
 * Class dUserInput
 * 
 * Handles user interactions.
 */
(function(ui, undefined) {
	
	ui.forms = $("#forms");
	ui.graph = $("#graph");

	ui.init = function() {
		
	};
	
	ui.bindEvents = function() {
		$('#edges_form_button').click(function() {
			ui.generateTable();
		});
		$("#generate").click(function() {
			dGraph.init($("#summits_form").serializeArray());
		});
	};
	
	ui.generateTable = function() {
		var edges_count = $("#edges_count").val(),
			form = $("#summits_form table tbody"),
			content = "",
			i = 1;
	
		while (edges_count > 0) {
			content += '<tr><td>' + i + '</td>';
			content += '<td><input type="text" name="summit" size="5" id="summit"></td>';
			content += '<td><input type="number" min="1" name="weight" size="5" id="weight"></td></tr>';
			edges_count--;
			i++;
		}
		
		form.html(content);
		ui.toggleGraph();
	};
	
	ui.toggleGraph = function() {
		$("#graph").css("height", $("#forms").height());
		if ( ! ui.graph.is(":visible") ) {
			$("#graph").toggle();
		}
	};
	
}(window.dUserInput = window.dUserInput || {}));
