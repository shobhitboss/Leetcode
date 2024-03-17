package Apple;

import java.util.ArrayList;
import java.util.List;

public class CycleInUndirectedGraph {
    public static void main(String[] args) {
        int V = 5;
        Graph graph = new Graph(V);
        graph.addEdge(1, 0);
        graph.addEdge(0, 2);
        graph.addEdge(2, 1);
        graph.addEdge(3, 4);

        if (graph.isCyclic()) {
            System.out.println("Graph contains cycle");
        } else {
            System.out.println("Graph doesn't contain cycle");
        }
    }

    static class Graph {
        private int V;
        private List<List<Integer>> adj;

        public Graph(int V) {
            this.V = V;
            adj = new ArrayList<>();
            for (int i = 0; i < V; i++) {
                adj.add(new ArrayList<>());
            }
        }

        public void addEdge(int v, int w) {
            adj.get(v).add(w);
            adj.get(w).add(v); // Since it's undirected
        }

        public boolean isCyclicUtil(int v, boolean[] visited, int parent) {
            visited[v] = true;
            for (int neighbor : adj.get(v)) {
                if (!visited[neighbor]) {
                    if (isCyclicUtil(neighbor, visited, v)) {
                        return true;
                    }
                } else if (neighbor != parent) {
                    return true;
                }
            }
            return false;
        }

        public boolean isCyclic() {
            boolean[] visited = new boolean[V];
            for (int i = 0; i < V; i++) {
                if (!visited[i]) {
                    if (isCyclicUtil(i, visited, -1)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
