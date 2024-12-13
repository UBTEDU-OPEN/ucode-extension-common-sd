import { GeneratorDefinition } from '../../../../types/register';
export declare enum DataGeneratorKeys {
    data_itemoflist = "data_itemoflist",
    data_itemnumoflist = "data_itemnumoflist",
    data_addtolist = "data_addtolist",
    data_lengthoflist = "data_lengthoflist",
    data_listcontainsitem = "data_listcontainsitem",
    data_setvariableto = "data_setvariableto",
    data_changevariableby = "data_changevariableby",
    data_listcontents = "data_listcontents",
    data_deleteoflist = "data_deleteoflist",
    data_deletealloflist = "data_deletealloflist",
    data_insertatlist = "data_insertatlist",
    data_replaceitemoflist = "data_replaceitemoflist",
    data_variable = "data_variable"
}
export declare const DataGenerators: {
    [key in DataGeneratorKeys]: GeneratorDefinition.BlockGenerator;
};
