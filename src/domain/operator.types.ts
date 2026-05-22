import type { ETLNodeType } from "./etl.types";

export interface OperatorDefinition {
  type: ETLNodeType;
  displayName: string;
  description: string;
  useCases: string[];
  configSchema: Record<string, unknown>;
  examples: Array<{
    userIntent: string;
    config: Record<string, unknown>;
  }>;
  commonMistakes?: string[];
}
