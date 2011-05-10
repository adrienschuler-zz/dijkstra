/**
 * Class dGraph
 * 
 * 
 */
(function(g) {

	g.summits = [];
	g.edges = [];
	
	
	g.init = function(datas) {
		this.summits = [];
		this.edges = [];
		
		for (element in datas) {
			var element = datas[element];
			if (element.name === "summit") {
				var source = element.value.substring(0, 1),
					target = element.value.substring(1, 2);
				
				//TODO check/create summits
				
				g.edges.push({
					"source": source,
					"target": target
				});
				
			} else if (element.name === "weight") {
				console.log(g.edges.length);
				g.edges[g.edges.length - 1].weight = element.value;
			}
		}
		console.log(g.edges);
	};
	
	g.size = function() { return this.edges.length; };
	
	g.getWeight = function(source, target) {
		for (edge in g.edges) {
			edge = g.edges[edge];
			if (source === edge.source && target === edge.target) {
				return edge.weight;
			}
		}
	};
	
	g.addSummit = function(label) {
		if (typeof label !== "string") {
			for (summit in label) {
				g.addSummit(label[summit]);
			}
		} else {
			this.summits.push({
				"label": label,
				"x": rand(dCanvas.padding, dCanvas.width - dCanvas.padding),
				"y": rand(dCanvas.padding, dCanvas.height - dCanvas.padding)
			})
		}
	};
	
	g.addEdge = function(source, target, weight) {
		this.edges.push({
			"source": dGraph.getSummit(source),
			"target": dGraph.getSummit(target),
			"weight": weight
		}); 
	};
	
	g.getSummit = function(label) {
		for (summit in g.summits) {
			summit = g.summits[summit];
			if (label === summit.label) {
				return summit;
			}
		}
		return false;
	};
	
	g.neighbors = function(vertex) {
		var neighbors = [],
				cpt = 0;
		for (edge in g.edges) {
			edge = g.edges[edge];
			if (dGraph.summits[vertex] === edge.source) {
				neighbors[cpt] = edge.target;
				cpt++;
			}
		}
		return neighbors;
	};
	
	g.getShortestPath = function() {
		var preceeding = dDijkstra.init(0);
		for (var n = 0; n < this.summits.length; n++) {
			dDijkstra.printPath(preceeding, 0, this.summits[n]);
		}
	};
	
}(window.dGraph = window.dGraph || {}));
