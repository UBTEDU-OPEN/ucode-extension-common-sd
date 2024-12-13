import { UcdBlock } from '../../../../types/ucd';
export declare const EXAMPLE_DATA: UcdBlock.SerializedData;
export declare const EXPECT_RESULT = "import time\nimport asyncio\nfrom mini import mini_sdk as MiniSdk\n\n# Define Variable: [bbb]\nbbb = 0\n\naaa = []\n\n\nasync def on_start_event():\n  bbb = aaa[1 - 1]\n  aaa.append(100)\n  time.sleep(aaa[1 - 1] / 1)\n";
