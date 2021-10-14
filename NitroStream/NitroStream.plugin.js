/**
 * @name NitroStream
 * @version 1.0.0
 * @description allows you to stream in high quality without Nitro !
 * @author haxvzje#0901
 * @authorId 787936379199291392
 * @website https://hatomagi.website/
 * @source https://github.com/haxvzje/BetterDiscordAddons/NitroStream
 */



 module.exports = class NitroStream{
   load() {}
   start() {
      BdApi.alert("Nitro Stream", "Author: haxvzje, infAura\n\nHope u enjoy !");
      BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = 2;
   }
   stop(){}
}
