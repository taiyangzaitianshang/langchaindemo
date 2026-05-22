import type { ETLGraph, NodeId } from "./etl.types";

export interface BuildFlowRequest {
  userRequirement: string;
  availableTables?: Array<{
    tableName: string;
    columns: string[];
  }>;
}

export interface BuildFlowResult {
  inferredIntent: string;
  graph: ETLGraph;
  explanation: string;
  warnings: string[];
}

export type GraphDiffOperation =
  | {
      op: "add_node";
      node: {
        id: NodeId;
        type: string;
        name?: string;
        config: Record<string, unknown>;
      };
    }
  | {
      op: "remove_node";
      nodeId: NodeId;
    }
  | {
      op: "update_node";
      nodeId: NodeId;
      config: Record<string, unknown>;
    }
  | {
      op: "add_edge";
      from: NodeId;
      to: NodeId;
    }
  | {
      op: "remove_edge";
      from: NodeId;
      to: NodeId;
    };

export interface OptimizeFlowRequest {
  graph: ETLGraph;
  goal?: string;
}

export interface OptimizeFlowResult {
  inferredIntent: string;
  problems: string[];
  suggestions: Array<{
    title: string;
    reason: string;
    benefit: string;
  }>;
  diff: GraphDiffOperation[];
  optimizedGraph: ETLGraph;
  explanation: string;
}
