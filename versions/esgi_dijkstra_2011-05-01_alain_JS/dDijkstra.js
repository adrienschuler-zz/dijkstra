/**
 * Class dDijkstra
 * 
 * Implements Dijkstra's algorithm.
 */
(function(d) {


	d.minVertex = function(dist, visited) {
		var x = 99999999;
		var y = -1;   // graph not connected, or no unvisited vertices
		for (var i=0; i<dist.length; i++) {
			if (!visited[i] && dist[i]<x) {
				y=i; 
				x=dist[i];
			}
		}
		return y;
	}

	d.init = function(graph, start) {
		var dist = new Array(graph.size());  // shortest known distance from "s"
		var pred = new Array(graph.size());  // preceeding node in path
		var visited = new Array(graph.size()); // all false initially

		for (var i=0; i<dist.length; i++) {
			dist[i] = 99999999;
		}
		dist[start] = 0;

		for (var i=0; i<dist.length; i++) {
			var next = minVertex (dist, visited);
			visited[next] = true;

			// The shortest path to next is dist[next] and via pred[next].

			var n = graph.neighbors (next);
			for (var j=0; j<n.length; j++) {
				var v = n[j];
				var d = dist[next] + graph.getWeight(next,v);
				if (dist[v] > d) {
					dist[v] = d;
					pred[v] = next;
				}
			}
		}
		return pred;  // (ignore pred[s]==0!)
		
	};
	
	
	
	
		
		
	
}(window.dDijkstra = window.dDijkstra || {}));
