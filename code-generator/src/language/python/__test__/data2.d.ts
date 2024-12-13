import { UcdBlock } from '../../../../types/ucd';
export declare const EXAMPLE_DATA2: UcdBlock.SerializedData;
export declare const EXPECT_RESULT2 = "from mini.apis.base_api import MiniApiResultType\nfrom mini.apis.api_sound import StartPlayTTS\nimport time\nimport asyncio\nfrom mini import mini_sdk as MiniSdk\n\n\nasync def on_start_event():\n  await StartPlayTTS(is_serial=True, text=str(\"\u4F60\u597D\")).execute()\n  time.sleep((1 + 1) / 1)\n  await StartPlayTTS(is_serial=True, text=str(\"\u6211\u662F\u609F\u7A7A\")).execute()\n";
