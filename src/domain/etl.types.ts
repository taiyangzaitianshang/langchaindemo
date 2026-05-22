export type NodeId = string;

export type ETLNodeType =
  | "DataSource"
  | "Filter"
  | "Select"
  | "Join"
  | "GroupBy"
  | "Sort"
  | "Limit"
  | "TopN"
  | "CalculateField"
  | "DataSink";

export interface ETLNode {
  id: NodeId;
  type: ETLNodeType;
  name?: string;
  config: Record<string, unknown>;
}

export interface ETLEdge {
  from: NodeId;
  to: NodeId;
}

export interface ETLGraph {
  nodes: ETLNode[];
  edges: ETLEdge[];
}
