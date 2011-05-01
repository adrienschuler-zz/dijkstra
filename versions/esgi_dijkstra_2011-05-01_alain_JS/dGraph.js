/**
 * Class dGraph
 * 
 * 
 */
(function(g) {

	g.summits = [];
	g.edges = [];
	
	
	g.size = function() { return this.edges.length; };
	g.getWeight =function(source, target)  {
		for (edge in g.edges) {
			edge = g.edges[edge];
			if (source == edge.source && target==edge.target) {
				return edge.weight;
			}
		}	
	}
	
	g.addSummit = function(label) {
		if (typeof label !== 'string') {
			for (summit in label) {
				g.addSummit(label[summit]);
			}
		} else {
			this.summits.push({
				'label': label,
				'x': rand(15, dCanvas.width - 15), // 15 pixels de marge pour éviter que le point dépasse du canvas
				'y': rand(15, dCanvas.height - 15)
			})
		}
	};
	
	g.addEdge = function(source, target, weight) {
		this.edges.push({
			'source': source,
			'target': target,
			'weight': weight
		}); 
	};
	
	g.getSummit = function(label) {
		for (summit in g.summits) {
			summit = g.summits[summit];
			if (label == summit.label) {
				return summit;
			}
		}
	};

	g.neighbors = function(vertex){
		var tab = new Array();
		var cpt=0;
		for (edge in g.edges) {
			edge = g.edges[edge];
			if (vertex == edge.source) {
				tab[cpt]=edge.target;
				cpt++;
			}
		}
		return tab;
	}


	
}(window.dGraph = window.dGraph || {}));
