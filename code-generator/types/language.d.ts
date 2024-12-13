import { UcdBlock } from './ucd';
import { GeneratorDefinition } from './register';

export interface LanguageGenerator {
  toCode(serializedData: UcdBlock.SerializedData): string;
  injectGenerators(generators: { [key: string]: GeneratorDefinition.BlockGenerator }): void;
}
