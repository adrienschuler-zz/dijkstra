/**
 * Class dCanvas
 * 
 * 
 */
(function (c) {
	
	
	c.screenHeight = screen.height;
	c.screenWidth = screen.width;
	c.canvas = null;
	c.height = 400;
	c.width = 500;
	c.padding = 30;
	
	c.init = function() {
		this.canvas = Raphael("graph");
	};
	
	c.drawSummits = function() {
		for (summit in dGraph.summits) {
			summit = dGraph.summits[summit];
			
			var circle = this.canvas
				.circle(summit.x, summit.y, 20)
				.attr( dAnimation.summitsCircle );
			var text = this.canvas
				.text( summit.x, summit.y, summit.label )
				.attr( dAnimation.summitsStyle );
			
			summit.circle = circle;
			summit.text = text;
			dAnimation.bindSummits(summit);
		}
	};
	
	c.drawEdges = function() {
		for (edge in dGraph.edges) {
			edge = dGraph.edges[edge];
			var pathString = 'M' + edge.source.x + ' ' + edge.source.y + 'L' + edge.target.x + ' ' + edge.target.y,
					path = this.canvas
						.path( pathString )
						.attr( dAnimation.edgesStyle );
			
			edge.path = path;
			dAnimation.bindEdges(edge);
		}
	};
	
	
	
}(window.dCanvas = window.dCanvas || {}));
