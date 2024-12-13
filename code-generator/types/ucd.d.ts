export declare namespace UcdBlock {
  interface SerializedMutation {
    tagName: 'mutation';
    children: SerializedBlockData[];
    hasNext?: BoolOrOptBoolString;
    proccode?: string;
    argumentids?: string;
    argumentnames?: string;
    argumentdefaults?: string;
    warp?: BoolOrOptBoolString;
  }

  type OptionalString = string | null;

  type BoolOrOptBoolString = 'true' | 'false' | 'null' | boolean;

  type StringOrNumber = string | number;

  type NumPrimitive = [4 | 5 | 6 | 7 | 8, StringOrNumber];

  type ColorPrimitive = [9, string];

  type TextPrimitive = [10, StringOrNumber];

  /**
   * 0 input type
   * 1 broadcast message
   * 2 broadcast message id
   */
  type BroadcastPrimitive = [11, string, string];

  /**
   * 0 input type
   * 1 variable name
   * 2 variable id
   */
  type VariablePrimitive = [12, string, string] | [12, string, string, number] | [12, string, string, number, number];

  /**
   * 0 input type
   * 1 List name
   * 2 List id
   */
  type ListPrimitive = [13, string, string] | [13, string, string, number] | [13, string, string, number, number];

  type InputPrimitive = NumPrimitive | ColorPrimitive | TextPrimitive | BroadcastPrimitive | VariablePrimitive | ListPrimitive;

  type TopLevelPrimitive = VariablePrimitive | ListPrimitive;

  /**
   * 1 = unobscured shadow, 2 = no shadow, 3 = obscured shadow
   */
  type UnobscuredShadowInput = [1, InputPrimitive | OptionalString];

  type NoShadowInput = [2, string];

  type ObscuredShadowInput = [3, string | VariablePrimitive, InputPrimitive | OptionalString];

  type SerializedInput = UnobscuredShadowInput | NoShadowInput | ObscuredShadowInput;

  type SerializedField = [string, OptionalString];

  interface NormalBlock {
    opcode: string;
    next: OptionalString;
    parent: OptionalString;
    inputs: { [key: string]: SerializedInput };
    fields: { [key: string]: SerializedField };
    shadow: boolean;
    disabled?: boolean;
    topLevel: boolean;
    deletable?: boolean;
    x?: number;
    y?: number;
    mutation?: SerializedMutation;
    comment?: string;
    collapsed?: boolean;
  }

  type SerializedBlockData = NormalBlock;
  type SerializedBlockDataWithId = NormalBlock & { id: string };

  // type SeriliazedBlockData = NormalBlock | TopLevelPrimitive;

  // type SeriliazedBlockDataWithId =
  //   | (NormalBlock & {
  //       id: string;
  //     })
  //   | [string, TopLevelPrimitive];

  type ScalarVal = StringOrNumber | boolean;

  /**
   * 0 name
   * 1 value
   * 2 isCloud
   */
  type SerializedVariableType = [string, ScalarVal];

  // type SerializedVariableTypeWithId = [];

  type SerializedListType = [string, ScalarVal[]];

  type CommentType = {
    blockId: string;
    x: number;
    y: number;
    width: number;
    height: number;
    minimized: boolean;
    text: string;
  };

  type SerializedData = {
    blocks: { [key: string]: SerializedBlockData };
    variables: { [key: string]: SerializedVariableType };
    lists: { [key: string]: SerializedListType };
    comments?: { [key: string]: CommentType };
  };
}
