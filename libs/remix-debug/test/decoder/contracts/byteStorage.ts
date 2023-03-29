'use strict'

module.exports = {
  contract: `
  contract byteStorage {
    enum enum1 { e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23, e24, e25, e26, e27, e28, e29, e30, e31, e32, e33, e34, e35, e36, e37, e38, e39, e40, e41, e42, e43, e44, e45, e46, e47, e48, e49, e50, e51, e52, e53, e54, e55, e56, e57, e58, e59, e60, e61, e62, e63, e64, e65, e66, e67, e68, e69, e70, e71, e72, e73, e74, e75, e76, e77, e78, e79, e80, e81, e82, e83, e84, e85, e86, e87, e88, e89, e90, e91, e92, e93, e94, e95, e96, e97, e98, e99, e100, e101, e102, e103, e104, e105, e106, e107, e108, e109, e110, e111, e112, e113, e114, e115, e116, e117, e118, e119, e120, e121, e122, e123, e124, e125, e126, e127, e128, e129, e130, e131, e132, e133, e134, e135, e136, e137, e138, e139, e140, e141, e142, e143, e144, e145, e146, e147, e148, e149, e150, e151, e152, e153, e154, e155, e156, e157, e158, e159, e160, e161, e162, e163, e164, e165, e166, e167, e168, e169, e170, e171, e172, e173, e174, e175, e176, e177, e178, e179, e180, e181, e182, e183, e184, e185, e186, e187, e188, e189, e190, e191, e192, e193, e194, e195, e196, e197, e198, e199, e200, e201, e202, e203, e204, e205, e206, e207, e208, e209, e210, e211, e212, e213, e214, e215, e216, e217, e218, e219, e220, e221, e222, e223, e224, e225, e226, e227, e228, e229, e230, e231, e232, e233, e234, e235, e236, e237, e238, e239, e240, e241, e242, e243, e244, e245, e246, e247, e248, e249, e250, e251, e252, e253, e254, e255, e256, e257, e258, e259, e260 }

    bool b1 = false;
    address a1 = 0xfE350f199F244ac9A79038d254400b632a633225;
    bool b2 = true;
    bytes dynb1 = "dynamicbytes";
    byte stab = 0x01;
    bytes1 stab1 = hex"12";
    bytes2 stab2 = hex"1579";
    bytes3 stab3 = hex"359356";
    bytes4 stab4 = hex"2375";
    bytes5 stab5 = hex"02357645";
    bytes6  stab6 = hex"324435";
    bytes7 stab7 = hex"004324";
    bytes8 stab8 = hex"324554645765";
    bytes9 stab9 = hex"03434543";
    bytes10 stab10 = hex"04543543654657";
    bytes11 stab11 = hex"54354654";
    bytes12 stab12 = hex"03";
    bytes13  stab13 = hex"03243242345435";
    bytes14 stab14 = hex"32454354354353";
    bytes15 stab15 = hex"032454434435";
    bytes16  stab16 = hex"3245435444";
    bytes17  stab17 = hex"032454343243243245";
    bytes18 stab18 = hex"0324534325435435";
    bytes19 stab19 = hex"0324543435435435";
    bytes20 stab20 = hex"032454543543AB35";
    bytes21 stab21 = hex"32454432423435";
    bytes22  stab22 = hex"324543AEF5";
    bytes23 stab23 = hex"3245435FFF";
    bytes24 stab24 = hex"3245435F";
    bytes25  stab25 = hex"3245435F";
    bytes26 stab26 = hex"3245435F";
    bytes27 stab27 = hex"03245FFFFFFF";
    bytes28 stab28 = hex"03241235";
    bytes29 stab29 = hex"0325213213";
    bytes30 stab30 = hex"03245435232423";
    bytes31 stab31 = hex"3245435123";
    bytes32 stab32 = hex"324324423432543543AB";
    enum1  enumDec = enum1.e240;
    string str1 = 'short';
    string str12 = unicode'шеллы';
    string str2 = 'long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long__long';
  }
`,
  storage: {
    '0x0000000000000000000000000000000000000000000000000000000000000000': '0x0000000000000000000001fe350f199f244ac9a79038d254400b632a63322500',
    '0x0000000000000000000000000000000000000000000000000000000000000001': '0x64796e616d696362797465730000000000000000000000000000000000000018',
    '0x0000000000000000000000000000000000000000000000000000000000000002': '0x0000000043240000000032443500000002357645002375000035935615791201',
    '0x0000000000000000000000000000000000000000000000000000000000000003': '0x0000000000045435436546570000000343454300000000003245546457650000',
    '0x0000000000000000000000000000000000000000000000000000000000000004': '0x0000000000000000000300000000000000000000005435465400000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000005': '0x0000000000324543543543530000000000000003243242345435000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000006': '0x0032454354440000000000000000000000032454434435000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000007': '0x0000000000000000000000000000000324543432432432450000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000008': '0x0000000000000000000000000000032453432543543500000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000009': '0x0000000000000000000000000003245434354354350000000000000000000000',
    '0x000000000000000000000000000000000000000000000000000000000000000a': '0x000000000000000000000000032454543543ab35000000000000000000000000',
    '0x000000000000000000000000000000000000000000000000000000000000000b': '0x0000000000000000000000324544324234350000000000000000000000000000',
    '0x000000000000000000000000000000000000000000000000000000000000000c': '0x00000000000000000000324543aef50000000000000000000000000000000000',
    '0x000000000000000000000000000000000000000000000000000000000000000d': '0x0000000000000000003245435fff000000000000000000000000000000000000',
    '0x000000000000000000000000000000000000000000000000000000000000000e': '0x00000000000000003245435f0000000000000000000000000000000000000000',
    '0x000000000000000000000000000000000000000000000000000000000000000f': '0x000000000000003245435f000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000010': '0x0000000000003245435f00000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000011': '0x000000000003245fffffff000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000012': '0x0000000003241235000000000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000013': '0x0000000325213213000000000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000014': '0x0000032454352324230000000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000015': '0x0032454351230000000000000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000016': '0x324324423432543543ab00000000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000000000000000000000000017': '0x00000000000000000000000000000000000000000000000000000000000000f0',
    '0x0000000000000000000000000000000000000000000000000000000000000018': '0x73686f727400000000000000000000000000000000000000000000000000000a',
    '0x0000000000000000000000000000000000000000000000000000000000000019': '0xd188d0b5d0bbd0bbd18b00000000000000000000000000000000000000000014',
    '0x000000000000000000000000000000000000000000000000000000000000001a': '0x000000000000000000000000000000000000000000000000000000000000023d',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff63e': '0x6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff63f': '0x6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e67',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff640': '0x5f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff641': '0x6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff642': '0x6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e67',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff643': '0x5f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff644': '0x6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff645': '0x6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e67',
    '0x057c384a7d1c54f3a1b2e5e67b2617b8224fdfd1ea7234eea573a6ff665ff646': '0x5f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e675f5f6c6f6e670000'
  }
}
