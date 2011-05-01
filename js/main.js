$(document).ready(function() {
	
	var summits = ['A', 'B', 'C', 'D', 'E', 'F'];
	
	dGraph.addSummit(summits);
	
	dGraph.addEdge('A', 'B', 2);
	dGraph.addEdge('A', 'F', 9);
	dGraph.addEdge('B', 'C', 8);
	dGraph.addEdge('B', 'D', 15);
	dGraph.addEdge('B', 'F', 6);
	dGraph.addEdge('C', 'D', 1);
	dGraph.addEdge('E', 'C', 3);
	dGraph.addEdge('E', 'B', 7);
	dGraph.addEdge('F', 'D', 3);

	dCanvas.init();
	dCanvas.drawEdges();
	dCanvas.drawSummits();
	
	dGraph.getShortestPath();
	
});