'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/animation/progressLoading.flr": "96bbf887b365b26a0650e2895ae926f6",
"assets/assets/file/C_stock_data.csv": "9c6081b060129e9eae8af24f1e75c61c",
"assets/images/icon_google.png": "49e3d6508efd27de254f6ac3ae3160e3",
"assets/images/background-curve.png": "a6c05bec6edbbad1d3293bd861e3f90e",
"assets/images/unautorize.svg": "3dee1e89146d7bc596ee052079c7b68e",
"assets/images/logo-login.svg": "be7b383b78f0fccafc3494c6e3024ea7",
"assets/images/px-logo.png": "d4073c706299df42917acd392acb14f8",
"assets/images/ic-baseline-people@3x.png": "2b8286183b7e40b50846eb4631c3bc68",
"assets/images/ic-baseline-people.png": "0e3b33ed9e22b99e69d0bcf76474b51c",
"assets/images/no_data.png": "853506402c673f5f679cec3cd1a91c84",
"assets/images/Group.png": "2cf8ad92449d333b68d59b7e2b2f02a7",
"assets/images/Group52.png": "45913f72ddc0bb146f5c2fd45b692506",
"assets/images/failed.png": "c7f3a4ef41d03a1a40ccf67dd1c708d3",
"assets/images/no_task.png": "d4989da8e4c65979ce2d296eee12f762",
"assets/images/defaultTaskImage.jpg": "a8294b66bbc82d9fd268947d16f21df1",
"assets/images/undraw.png": "85c3a9d9778beea9b8d434e16881e8c2",
"assets/images/Group%2052@2x.png": "105d58c593b85d46004d7f632e3f20ca",
"assets/images/undraw_ideas_flow_cy7b%201.png": "e7a252d867014c776d2309f22a8cc926",
"assets/images/alert-dialog.png": "ed221f193c698e329e5d725c7dd9c600",
"assets/images/success.png": "a54d586ddea7157b3ad25a70463e0192",
"assets/images/background-curve.svg": "24970573cc95a70081d6511516fb5e96",
"assets/images/undraw_ideas_flow_cy7b%201@3x.png": "c83ae0035929ff553cd2551fc6f15646",
"assets/images/Group@2x.png": "1c33fd3a266e314c6f1e6bcae6aa439a",
"assets/images/ic-baseline-people@2x.png": "b1ffe718d3f3de590f729c9b9adfe4be",
"assets/images/Group%2052@3x.png": "70b6b063fe2afa2804f6db258769909d",
"assets/images/profile_pict.png": "4d496f3d8e0710f4a24f35be940a95ec",
"assets/images/Group@3x.png": "58997a32193f34479c8dfb7ec7f89b32",
"assets/images/new_task.png": "21ef24cbaea010d1b58fc70e5f4cc4c0",
"assets/images/validator.png": "bf3e09ca7ff8bb871b8e4e4d391c0898",
"assets/images/no_data_screen.png": "edc47a5bb2140356fc8ea2c957c5ece6",
"assets/images/fileupload/verify.flr": "0c3bfd28308e8c69d00b56b157062bbc",
"assets/images/fileupload/csv1purple.png": "be5527c380393a299c82f1d32e290761",
"assets/images/fileupload/Group821.png": "dbf0cd034d98886cf8adc16e2c6c087a",
"assets/images/fileupload/csv1.png": "f10a11d7d197f7b306323eb2573ad8a3",
"assets/images/loginPage.png": "fc1c94f35a98d334a2bcac462d258291",
"assets/fonts/TTCommons-Black.ttf": "a6bfd43bad654fc795fd6e02f58f2a21",
"assets/fonts/TTCommons-Light.eot": "106ad461af59136f9bdafefba29a9aaf",
"assets/fonts/demo.html": "92077b0e1f7360df5c998462dae39150",
"assets/fonts/TTCommons-ExtraBold.woff": "ea18a887d037e395303ddc9da893bfd8",
"assets/fonts/TTCommons-ThinItalic.eot": "07b855123a420f5f16e7253504cd9273",
"assets/fonts/TTCommons-ExtraBold.ttf": "7150dde21c8625b59455a09d0d555b37",
"assets/fonts/TTCommons-ExtraBold.eot": "45d15f7dff43d5b00030e3b44106cbde",
"assets/fonts/TTCommons-MediumItalic.woff": "c650d61bc868caaf61f96f9d9c65ab36",
"assets/fonts/TTCommons-ExtraLight.ttf": "dabce80713911c88605b741b9276df8d",
"assets/fonts/TTCommons-ExtraLightItalic.eot": "7515913fdd4acc82ebbc7fb63a405863",
"assets/fonts/TTCommons-BlackItalic.woff": "0f7daaca5b5346e0911e2ae8c5e139cf",
"assets/fonts/TTCommons-Medium.woff": "ab8b7452f25ba5da90f76264a2807fb3",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/stylesheet.css": "73a59f9019be9ca66ff03eb335245eac",
"assets/fonts/TTCommons-LightItalic.ttf": "501c825c1905564b7fbdc951c6968eb2",
"assets/fonts/TTCommons-Bold.ttf": "03428f670a1439505c4e1bce5a0b2d18",
"assets/fonts/TTCommons-DemiBold.woff": "f1048d2fad0322a1b553dddd16ac7b0b",
"assets/fonts/TTCommons-BlackItalic.ttf": "89eb26a95484169a952b3846b3d4a999",
"assets/fonts/TTCommons-ThinItalic.ttf": "80346ab067b5c0aa1462e76836017769",
"assets/fonts/TTCommons-ExtraBoldItalic.eot": "afac8ab1db392fa5d91b17faf9ddbc21",
"assets/fonts/PxHomePage.ttf": "61157dc01c4c17fed56a9a297425e394",
"assets/fonts/TTCommons-Black.woff": "31b1a4d5d3c32657cf3391c5a32a4175",
"assets/fonts/TTCommons-Black.eot": "0b63395217c33adbcfd37a35185ae2ab",
"assets/fonts/TTCommons-ExtraLightItalic.woff": "3f9b01a103132ba521990e6f85cce8bf",
"assets/fonts/TTCommons-Italic.woff": "7d1378f7d06112573287e31a16e3a389",
"assets/fonts/TTCommons-Thin.woff": "ada05c492ffe89fd74f3187297345d2f",
"assets/fonts/TTCommons-Regular.ttf": "fc6fbc1addf37a7f957715e41b20291d",
"assets/fonts/TTCommons-MediumItalic.eot": "99a0ecc12c6c45a458817e2e8c5e1d75",
"assets/fonts/TTCommons-LightItalic.eot": "7bbcfda083a28707a7f9f5ff2b880129",
"assets/fonts/TTCommons-ThinItalic.woff": "d8a140bc0f374f2f8dbf71c4ce373e31",
"assets/fonts/TTCommons-Regular.woff": "0ee53eef15363cd18b45ce6c3d22a73a",
"assets/fonts/TTCommons-ExtraBoldItalic.ttf": "709a8805408c5c9d93da1fc5d33f9980",
"assets/fonts/TTCommons-ExtraLightItalic.ttf": "d091d5cf55e8fe16346e49fe9a525560",
"assets/fonts/TTCommons-BoldItalic.eot": "2c063e9e3f3935940c49bd9f24541dc9",
"assets/fonts/TTCommons-MediumItalic.ttf": "25714981b86a7f92966cc64a67c332f5",
"assets/fonts/TTCommons-Italic.eot": "16bc3c36233ede241968f2420b90d0c7",
"assets/fonts/TTCommons-ExtraLight.woff": "84f01af6221317b20ad645704608daf2",
"assets/fonts/TTCommons-Medium.eot": "c37ab1446dfa7e8dddc04000a5fbd316",
"assets/fonts/TTCommons-Bold.eot": "70a9f3408ab38beda6c440ff6f8bc787",
"assets/fonts/TTCommons-DemiBoldItalic.eot": "bb0a6d8d2f9431c60d100824de9c51bc",
"assets/fonts/TTCommons-Italic.ttf": "34a89772d6fc9560ca1e8e61c77a23f7",
"assets/fonts/TTCommons-Thin.ttf": "b4bb13e45a82020f521a48377a4616dc",
"assets/fonts/TTCommons-Light.woff": "7a60fd0ab8bd7749e7b7281050e49661",
"assets/fonts/TTCommons-DemiBold.eot": "815785560542cf7144992775986f6b4d",
"assets/fonts/TTCommons-ExtraBoldItalic.woff": "60d879a473bbfe1314d73290f0047f27",
"assets/fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/fonts/TTCommons-Regular.eot": "e026266e4d31bdb9921fad7ff7588656",
"assets/fonts/TTCommons-DemiBoldItalic.woff": "a7576608412a827b117fe3a2b9b9b1ff",
"assets/fonts/TTCommons-ExtraLight.eot": "5808ce4ea6dc06d5a4120b165edd3960",
"assets/fonts/TTCommons-BoldItalic.ttf": "4fd2dc5100c2b9051cb30e013ebc07a9",
"assets/fonts/TTCommons-BlackItalic.eot": "cf45561a7ab9f960b43a2dc096d71d8a",
"assets/fonts/TTCommons-DemiBold.ttf": "2e6a293a70716ab24d1af2f7de14b226",
"assets/fonts/TTCommons-Bold.woff": "d9ce4561f1e42f9cb6616ae9ef6cd9e2",
"assets/fonts/TTCommons-Medium.ttf": "845a2536b68724a90b8a0aaaf2a8091a",
"assets/fonts/TTCommons-LightItalic.woff": "b1a27f2ce6ca9c81e0554036ec690e75",
"assets/fonts/TTCommons-DemiBoldItalic.ttf": "c212455024dd6680e0d087780ff3e5a1",
"assets/fonts/TTCommons-Thin.eot": "99ecd2eab5a0251a2d10d354091c6c0a",
"assets/fonts/TTCommons-BoldItalic.woff": "086e2f06815d4eb7a0d7535e5861e06a",
"assets/fonts/TTCommons-Light.ttf": "773357e5b76a8e7d52615b4aae62a170",
"assets/icons/home_icon.dart": "7567d2e11b9506843612b066a43d58ae",
"assets/icons/TaskCategory.ttf": "3622b4e31d0c046c07b2daf808a8b55e",
"assets/icons/SidebarMenuIcons.ttf": "fe4c05ae6cae8164ddaf536b3c4e9d95",
"assets/animations/loading.gif": "4618c4bd3f7a363e233787513d7ef2bf",
"assets/web/assets/images/icon_google.png": "49e3d6508efd27de254f6ac3ae3160e3",
"assets/web/assets/images/background-curve.png": "a6c05bec6edbbad1d3293bd861e3f90e",
"assets/web/assets/images/unautorize.svg": "3dee1e89146d7bc596ee052079c7b68e",
"assets/web/assets/images/logo-login.svg": "be7b383b78f0fccafc3494c6e3024ea7",
"assets/web/assets/images/px-logo.png": "d4073c706299df42917acd392acb14f8",
"assets/web/assets/images/ic-baseline-people@3x.png": "2b8286183b7e40b50846eb4631c3bc68",
"assets/web/assets/images/ic-baseline-people.png": "0e3b33ed9e22b99e69d0bcf76474b51c",
"assets/web/assets/images/Group%252052@2x.png": "105d58c593b85d46004d7f632e3f20ca",
"assets/web/assets/images/no_data.png": "853506402c673f5f679cec3cd1a91c84",
"assets/web/assets/images/Group.png": "2cf8ad92449d333b68d59b7e2b2f02a7",
"assets/web/assets/images/Group52.png": "45913f72ddc0bb146f5c2fd45b692506",
"assets/web/assets/images/failed.png": "c7f3a4ef41d03a1a40ccf67dd1c708d3",
"assets/web/assets/images/Group%252052@3x.png": "70b6b063fe2afa2804f6db258769909d",
"assets/web/assets/images/no_task.png": "d4989da8e4c65979ce2d296eee12f762",
"assets/web/assets/images/defaultTaskImage.jpg": "a8294b66bbc82d9fd268947d16f21df1",
"assets/web/assets/images/undraw_ideas_flow_cy7b%25201.png": "e7a252d867014c776d2309f22a8cc926",
"assets/web/assets/images/undraw.png": "85c3a9d9778beea9b8d434e16881e8c2",
"assets/web/assets/images/undraw_ideas_flow_cy7b%25201@3x.png": "c83ae0035929ff553cd2551fc6f15646",
"assets/web/assets/images/alert-dialog.png": "ed221f193c698e329e5d725c7dd9c600",
"assets/web/assets/images/success.png": "a54d586ddea7157b3ad25a70463e0192",
"assets/web/assets/images/background-curve.svg": "24970573cc95a70081d6511516fb5e96",
"assets/web/assets/images/Group@2x.png": "1c33fd3a266e314c6f1e6bcae6aa439a",
"assets/web/assets/images/ic-baseline-people@2x.png": "b1ffe718d3f3de590f729c9b9adfe4be",
"assets/web/assets/images/profile_pict.png": "4d496f3d8e0710f4a24f35be940a95ec",
"assets/web/assets/images/Group@3x.png": "58997a32193f34479c8dfb7ec7f89b32",
"assets/web/assets/images/new_task.png": "21ef24cbaea010d1b58fc70e5f4cc4c0",
"assets/web/assets/images/validator.png": "bf3e09ca7ff8bb871b8e4e4d391c0898",
"assets/web/assets/images/no_data_screen.png": "edc47a5bb2140356fc8ea2c957c5ece6",
"assets/web/assets/images/fileupload/verify.flr": "0c3bfd28308e8c69d00b56b157062bbc",
"assets/web/assets/images/fileupload/csv1purple.png": "be5527c380393a299c82f1d32e290761",
"assets/web/assets/images/fileupload/Group821.png": "dbf0cd034d98886cf8adc16e2c6c087a",
"assets/web/assets/images/fileupload/csv1.png": "f10a11d7d197f7b306323eb2573ad8a3",
"assets/web/assets/images/loginPage.png": "fc1c94f35a98d334a2bcac462d258291",
"assets/web/assets/fonts/TTCommons-Black.ttf": "a6bfd43bad654fc795fd6e02f58f2a21",
"assets/web/assets/fonts/TTCommons-Light.eot": "106ad461af59136f9bdafefba29a9aaf",
"assets/web/assets/fonts/demo.html": "92077b0e1f7360df5c998462dae39150",
"assets/web/assets/fonts/TTCommons-ExtraBold.woff": "ea18a887d037e395303ddc9da893bfd8",
"assets/web/assets/fonts/TTCommons-ThinItalic.eot": "07b855123a420f5f16e7253504cd9273",
"assets/web/assets/fonts/TTCommons-ExtraBold.ttf": "7150dde21c8625b59455a09d0d555b37",
"assets/web/assets/fonts/TTCommons-ExtraBold.eot": "45d15f7dff43d5b00030e3b44106cbde",
"assets/web/assets/fonts/TTCommons-MediumItalic.woff": "c650d61bc868caaf61f96f9d9c65ab36",
"assets/web/assets/fonts/TTCommons-ExtraLight.ttf": "dabce80713911c88605b741b9276df8d",
"assets/web/assets/fonts/TTCommons-ExtraLightItalic.eot": "7515913fdd4acc82ebbc7fb63a405863",
"assets/web/assets/fonts/TTCommons-BlackItalic.woff": "0f7daaca5b5346e0911e2ae8c5e139cf",
"assets/web/assets/fonts/TTCommons-Medium.woff": "ab8b7452f25ba5da90f76264a2807fb3",
"assets/web/assets/fonts/stylesheet.css": "73a59f9019be9ca66ff03eb335245eac",
"assets/web/assets/fonts/TTCommons-LightItalic.ttf": "501c825c1905564b7fbdc951c6968eb2",
"assets/web/assets/fonts/TTCommons-Bold.ttf": "03428f670a1439505c4e1bce5a0b2d18",
"assets/web/assets/fonts/TTCommons-DemiBold.woff": "f1048d2fad0322a1b553dddd16ac7b0b",
"assets/web/assets/fonts/TTCommons-BlackItalic.ttf": "89eb26a95484169a952b3846b3d4a999",
"assets/web/assets/fonts/TTCommons-ThinItalic.ttf": "80346ab067b5c0aa1462e76836017769",
"assets/web/assets/fonts/TTCommons-ExtraBoldItalic.eot": "afac8ab1db392fa5d91b17faf9ddbc21",
"assets/web/assets/fonts/PxHomePage.ttf": "61157dc01c4c17fed56a9a297425e394",
"assets/web/assets/fonts/TTCommons-Black.woff": "31b1a4d5d3c32657cf3391c5a32a4175",
"assets/web/assets/fonts/TTCommons-Black.eot": "0b63395217c33adbcfd37a35185ae2ab",
"assets/web/assets/fonts/TTCommons-ExtraLightItalic.woff": "3f9b01a103132ba521990e6f85cce8bf",
"assets/web/assets/fonts/TTCommons-Italic.woff": "7d1378f7d06112573287e31a16e3a389",
"assets/web/assets/fonts/TTCommons-Thin.woff": "ada05c492ffe89fd74f3187297345d2f",
"assets/web/assets/fonts/TTCommons-Regular.ttf": "fc6fbc1addf37a7f957715e41b20291d",
"assets/web/assets/fonts/TTCommons-MediumItalic.eot": "99a0ecc12c6c45a458817e2e8c5e1d75",
"assets/web/assets/fonts/TTCommons-LightItalic.eot": "7bbcfda083a28707a7f9f5ff2b880129",
"assets/web/assets/fonts/TTCommons-ThinItalic.woff": "d8a140bc0f374f2f8dbf71c4ce373e31",
"assets/web/assets/fonts/TTCommons-Regular.woff": "0ee53eef15363cd18b45ce6c3d22a73a",
"assets/web/assets/fonts/TTCommons-ExtraBoldItalic.ttf": "709a8805408c5c9d93da1fc5d33f9980",
"assets/web/assets/fonts/TTCommons-ExtraLightItalic.ttf": "d091d5cf55e8fe16346e49fe9a525560",
"assets/web/assets/fonts/TTCommons-BoldItalic.eot": "2c063e9e3f3935940c49bd9f24541dc9",
"assets/web/assets/fonts/TTCommons-MediumItalic.ttf": "25714981b86a7f92966cc64a67c332f5",
"assets/web/assets/fonts/TTCommons-Italic.eot": "16bc3c36233ede241968f2420b90d0c7",
"assets/web/assets/fonts/TTCommons-ExtraLight.woff": "84f01af6221317b20ad645704608daf2",
"assets/web/assets/fonts/TTCommons-Medium.eot": "c37ab1446dfa7e8dddc04000a5fbd316",
"assets/web/assets/fonts/TTCommons-Bold.eot": "70a9f3408ab38beda6c440ff6f8bc787",
"assets/web/assets/fonts/TTCommons-DemiBoldItalic.eot": "bb0a6d8d2f9431c60d100824de9c51bc",
"assets/web/assets/fonts/TTCommons-Italic.ttf": "34a89772d6fc9560ca1e8e61c77a23f7",
"assets/web/assets/fonts/TTCommons-Thin.ttf": "b4bb13e45a82020f521a48377a4616dc",
"assets/web/assets/fonts/TTCommons-Light.woff": "7a60fd0ab8bd7749e7b7281050e49661",
"assets/web/assets/fonts/TTCommons-DemiBold.eot": "815785560542cf7144992775986f6b4d",
"assets/web/assets/fonts/TTCommons-ExtraBoldItalic.woff": "60d879a473bbfe1314d73290f0047f27",
"assets/web/assets/fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/web/assets/fonts/TTCommons-Regular.eot": "e026266e4d31bdb9921fad7ff7588656",
"assets/web/assets/fonts/TTCommons-DemiBoldItalic.woff": "a7576608412a827b117fe3a2b9b9b1ff",
"assets/web/assets/fonts/TTCommons-ExtraLight.eot": "5808ce4ea6dc06d5a4120b165edd3960",
"assets/web/assets/fonts/TTCommons-BoldItalic.ttf": "4fd2dc5100c2b9051cb30e013ebc07a9",
"assets/web/assets/fonts/TTCommons-BlackItalic.eot": "cf45561a7ab9f960b43a2dc096d71d8a",
"assets/web/assets/fonts/TTCommons-DemiBold.ttf": "2e6a293a70716ab24d1af2f7de14b226",
"assets/web/assets/fonts/TTCommons-Bold.woff": "d9ce4561f1e42f9cb6616ae9ef6cd9e2",
"assets/web/assets/fonts/TTCommons-Medium.ttf": "845a2536b68724a90b8a0aaaf2a8091a",
"assets/web/assets/fonts/TTCommons-LightItalic.woff": "b1a27f2ce6ca9c81e0554036ec690e75",
"assets/web/assets/fonts/TTCommons-DemiBoldItalic.ttf": "c212455024dd6680e0d087780ff3e5a1",
"assets/web/assets/fonts/TTCommons-Thin.eot": "99ecd2eab5a0251a2d10d354091c6c0a",
"assets/web/assets/fonts/TTCommons-BoldItalic.woff": "086e2f06815d4eb7a0d7535e5861e06a",
"assets/web/assets/fonts/TTCommons-Light.ttf": "773357e5b76a8e7d52615b4aae62a170",
"assets/web/assets/icons/TaskCategory.ttf": "3622b4e31d0c046c07b2daf808a8b55e",
"assets/web/assets/icons/SidebarMenuIcons.ttf": "fe4c05ae6cae8164ddaf536b3c4e9d95",
"assets/web/assets/animations/loading.gif": "4618c4bd3f7a363e233787513d7ef2bf",
"assets/AssetManifest.json": "c20d14e9f9a99c83ddefdd54d3e5a5d8",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "f9e38dca9abf79c1b41c5d46727c3ab4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/NOTICES": "3759ab1c9a5ed7f3c96de580c796c284",
"assets/FontManifest.json": "d932e9bc6e16fae6795ba019cadb12f5",
"index.html": "06d53b4274e3eff641c7564958a16bb2",
"/": "06d53b4274e3eff641c7564958a16bb2",
"config.js": "cd5ea3ff9c9245d8dbf51572d126707b",
"manifest.json": "7e588ed42e73ff9b7b1c8f21d9561f4a",
"main.dart.js": "a727fc86a1534a40bee45ddada889320",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
