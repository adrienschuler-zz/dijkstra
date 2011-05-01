/**
 * Class dAnimation
 * 
 * Handles graph animations & styles.
 */
(function(a) {
	
	a.summitsStyle = {
		'font-size': 30,
		fill: 'white',
		cursor: 'pointer'
	};
	
	a.edgesStyle = {
		stroke: 'blue',
		'stroke-width': 3
	};
	
	a.edgesStyleHover = {
		stroke: 'red',
		cursor: 'pointer',
	};

	a.summitsCircle = {
		fill: 'blue',
		cursor: 'pointer'
	};
	
	a.summitsCirleHover = {
		fill: 'red'
	};

	a.bindEdges = function(edge) {
		path = edge.path;
		
		path.hover(function(event) {
    	a.edgesHover(edge, this, true);
    }, function (event) {
    	a.edgesHover(edge, this, false);
		});
	};
	
	a.bindSummits = function(summit) {
		var circle = summit.circle,
				text = summit.text;
		
		circle.hover(function(event) {
			a.summitHover(summit, this, true, true);
    }, function (event) {
	    a.summitHover(summit, this, true, false);
		});
		
		text.hover(function(event) {
			a.summitHover(summit, this, false, true);
    }, function (event) {
	    a.summitHover(summit, this, false, false);
		});
	};
	
	a.edgesHover = function(edge, source, isHover) {
		var sourceColor = isHover ? 'green' : 'blue',
				targetColor = isHover ? 'red' 	: 'blue';
	
		if (isHover) {
			source.attr( a.edgesStyleHover );
			source.attr( 'title', 'weight: ' + edge.weight );
		} else {
			source.attr( a.edgesStyle );
		}
		
		edge.source.circle
  		.attr({ fill: sourceColor });
  	edge.target.circle
  		.attr({ fill: targetColor });
	};
	
	a.summitHover = function(summit, source, isCircle, isHover) {
		var sourceColor = isHover ? 'green' : 'blue',
				targetColor = isHover ? 'red' 	: 'blue',
				edgeColor = 	isHover ? 'red' 	: 'blue';
		
		if (isCircle) { 
			source.attr({ fill: sourceColor });
		} else {
			summit.circle.attr({ fill: sourceColor });
		}
		for (edge in dGraph.edges) {
			edge = dGraph.edges[edge];
			if (edge.source.label === summit.label) {
				edge.path.attr('stroke', targetColor);
				edge.target.circle
					.attr({ fill: edgeColor });
			}
		}
	};
	
	
}(window.dAnimation = window.dAnimation || {}));
