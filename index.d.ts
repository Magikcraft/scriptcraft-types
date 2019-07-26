declare const echo: (player: any, msg: string) => void;
declare const java: any;
declare const __plugin: Plugin;
declare const __dirname: string;
declare const __filename: string;
declare const org: any;
declare const refresh: () => void;
declare const __require: (filename: string) => any;
declare const require: (filename: string, options?: { cache?: boolean }) => any;
declare const console: { log: (msg: string) => void };
declare const isJavaObject: (obj: any) => boolean;
declare const config: any;
declare const scload: (file: any) => any;
declare const EventEmitter: any;
declare const self: any;
declare const Java: Java;
declare const setTimeout: (callbackFn, delay: any) => number;
declare const setInterval: (callbackFn, delay: any) => number;
declare const clearTimeout: (handle: any) => void;
declare const clearInterval: (handle: any) => void;
declare const engineUUID: String;

declare interface Java {
  type: (type: string) => any;
  from: (JavaScriptItem: any) => any;
}
interface Array<T> {
  includes(searchElement: T, fromIndex?: number): boolean;
}

declare interface events {
  playerJoin: (event) => void;
  playerCommandPreprocess: (evt) => void;
  serverCommand: (event) => void;
  playerQuit: (event) => void;
  playerInteract: (event) => void;
  1;
  entityDamageByEntity: (event) => void;
  entityDamage: (event) => void;
  projectileHit: (event) => void;
  entitySpawn: (event) => void;
  playerRespawn: (event) => void;
}

type NashornScriptEngine = any;

/**
 * As yet untyped
 */
type Statistic = any;
type EntityType = any;
type Particle = any;
type Material = any;
type Advancement = any;
type Plugin = any;
type ItemStack = any;
type Effect = any;
type SoundCategory = any;
type Sound = any;
type Instrument = any;
type Note = any;
type DyeColor = any;
type MapView = any;
type Entity = any;
type Scoreboard = any;
type WeatherType = any;
type BlockData = any;

interface BukkitPlayer {
  canSee(player: BukkitPlayer): boolean;
  /**Says a message (or runs a command). */
  chat(msg: string): void;
  decrementStatistic(statistic: Statistic);
  decrementStatistic(statistic: Statistic, amount: number);
  decrementStatistic(statistic: Statistic, entityType: EntityType);
  decrementStatistic(
    statistic: Statistic,
    entityType: EntityType,
    amount: number
  );
  decrementStatistic(statistic: Statistic, material: Material);
  decrementStatistic(statistic: Statistic, material: Material, amount: number);
  getAddress(): InetSocketAddress;
  getAdvancementProgress(advancement: Advancement): AdvancementProgress;
  getAllowFlight(): boolean;
  getClientViewDistance(): number;
  getCompassTarget(): BukkitLocation;
  getDisplayName(): string;
  getExhaustion(): number;
  getExp(): number;
  getFlySpeed(): number;
  getFoodLevel(): number;
  getHealthScale(): number;
  getLevel(): number;
  getLocale(): string;
  getName(): string;
  getPlayerListFooter(): string;
  getPlayerListHeader(): string;
  getPlayerListName(): string;
  getPlayerTime(): number;
  getPlayerTimeOffset(): number;
  getPlayerWeather(): WeatherType;
  getSaturation(): number;
  getScoreboard(): Scoreboard;
  getSpectatorTarget(): Entity;
  getStatistic(statistic: Statistic): number;
  getStatistic(statistic: Statistic, entityType: EntityType): number;
  getStatistic(statistic: Statistic, material: Material): number;
  getTotalExperience(): number;
  getWalkSpeed(): number;
  giveExp(amount: number);
  giveExpLevels(amount: number);
  hidePlayer(plugin: Plugin, player: BukkitPlayer);
  incrementStatistic(statistic: Statistic);
  incrementStatistic(statistic: Statistic, amount: number);
  incrementStatistic(statistic: Statistic, entityType): EntityType;
  incrementStatistic(
    statistic: Statistic,
    entityType: EntityType,
    amount: number
  );
  incrementStatistic(statistic: Statistic, material: Material);
  incrementStatistic(statistic: Statistic, material: Material, amount: number);
  isFlying(): boolean;
  isHealthScaled(): boolean;
  isPlayerTimeRelative(): boolean;
  isSleepingIgnored(): boolean;
  isSneaking(): boolean;
  isSprinting(): boolean;
  kickPlayer(message: string);
  /**Loads the players current location, health, inventory, motion, and other information from the username.dat file, in the world/player folder. */
  loadData();
  openBook(book: ItemStack);
  performCommand(command: string): boolean;
  playEffect(loc: BukkitLocation, effect: Effect, data: number);
  playEffect(loc: BukkitLocation, effect: Effect, data: any);
  playNote(loc: BukkitLocation, instrument: number, note: number);
  playNote(loc: BukkitLocation, instrument: Instrument, note: Note);
  playSound(
    location: BukkitLocation,
    sound: string,
    volume: number,
    pitch: number
  );
  playSound(
    location: BukkitLocation,
    sound: string,
    category: SoundCategory,
    volume: number,
    pitch: number
  );
  playSound(
    location: BukkitLocation,
    sound: Sound,
    volume: number,
    pitch: number
  );
  playSound(
    location: BukkitLocation,
    sound: Sound,
    category: SoundCategory,
    volume: number,
    pitch: number
  );

  resetPlayerTime();
  resetPlayerWeather();
  resetTitle();
  saveData();
  sendBlockChange(loc: BukkitLocation, block: BlockData);

  sendBlockChange(loc: BukkitLocation, material: Material, data: number);
  sendChunkChange(
    loc: BukkitLocation,
    sx: number,
    sy: number,
    sz: number,
    data: number[]
  ): boolean;
  sendMap(map: MapView);
  sendRawMessage(message: string);
  sendSignChange(loc: BukkitLocation, lines: string[]);
  sendSignChange(loc: BukkitLocation, lines: string[], dyeColor: DyeColor);
  sendTitle(title: string, subtitle: string);
  sendTitle(
    title: string,
    subtitle: string,
    fadeIn: number,
    stay: number,
    fadeOut: number
  );
  setAllowFlight(flight: boolean);
  setCompassTarget(loc: BukkitLocation);
  setDisplayName(name: string);
  setExhaustion(value: number);
  setExp(exp: number);
  setFlying(value: boolean);
  setFlySpeed(value: number);
  setFoodLevel(value: number);
  setHealthScale(scale: number);
  setHealthScaled(scale: boolean);
  setLevel(level: number);
  setPlayerListFooter(footer: string);
  setPlayerListHeader(header: string);
  setPlayerListHeaderFooter(header: string, footer: string);
  setPlayerListName(name: string);
  setPlayerTime(time: number, relative: boolean);
  setPlayerWeather(type: WeatherType);
  setResourcePack(url: string);
  setResourcePack(url: string, hash: number[]);
  setSaturation(value: number);
  setScoreboard(scoreboard: Scoreboard);
  setSleepingIgnored(isSleeping: boolean);
  setSneaking(sneak: boolean);
  setSpectatorTarget(entity: Entity);
  setSprinting(sprinting: boolean);
  setStatistic(statistic: Statistic, newValue: number);
  setStatistic(statistic: Statistic, entityType: EntityType, newValue: number);
  setStatistic(statistic: Statistic, material: Material, newValue: number);
  setTexturePack(url: string);
  setTotalExperience(exp: number);
  setWalkSpeed(value: number);
  showPlayer(player: BukkitPlayer);
  showPlayer(plugin: Plugin, player: BukkitPlayer);
  spawnParticle(
    particle: Particle,
    x: number,
    y: number,
    z: number,
    count: number
  );
  spawnParticle(
    particle: Particle,
    x: number,
    y: number,
    z: number,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  );
  spawnParticle(
    particle: Particle,
    x: number,
    y: number,
    z: number,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    extra: number
  );
  spawnParticle(
    particle: Particle,
    x: number,
    y: number,
    z: number,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    extra: number,
    data: any
  );
  spawnParticle(
    particle: Particle,
    x: number,
    y: number,
    z: number,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    data: any
  );
  spawnParticle(
    particle: Particle,
    x: number,
    y: number,
    z: number,
    count: number,
    data: any
  );
  spawnParticle(particle: Particle, location: BukkitLocation, count: number);
  spawnParticle(
    particle: Particle,
    location: BukkitLocation,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  );
  spawnParticle(
    particle: Particle,
    location: BukkitLocation,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    extra: number
  );
  spawnParticle(
    particle: Particle,
    location: BukkitLocation,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    extra: number,
    data: any
  );
  spawnParticle(
    particle: Particle,
    location: BukkitLocation,
    count: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    data: any
  );
  spawnParticle(
    particle: Particle,
    location: BukkitLocation,
    count: number,
    data: any
  );
  stopSound(sound: string);
  stopSound(sound: string, category: SoundCategory);
  stopSound(sound: Sound);
  stopSound(sound: Sound, category: SoundCategory);
  updateCommands();
  updateInventory();
}

/* declare const command: (name, func, options, intercepts) => () => void; */

interface String {
  includes(substring: string): boolean;
}

type callbackFn = (event: any) => void;

declare const global: {
  args: any;
  self: BukkitPlayer;
  require: (filename: string) => any;
  __engine_name__: string;
  __engine_id__: number;
  __plugin: any;
  __require: any;
  echo: (player: BukkitPlayer, message: string) => void;
  refresh: () => void;
  java: any;
  EventEmitter: any;
  setTimeout: (callbackFn, delay: number) => number;
  setInterval: (callbackFn, delay: number) => number;
  clearTimeout: (handle: number) => void;
  clearInterval: (handle: number) => void;
  engineUUID: String;
  magikcraft: any;
  magik: any;
};

type BukkitBlock = any;

interface BukkitWorld {
  getSpawnLocation(): BukkitLocation;
  regenerateChunk(x, z): void;
  [index: string]: any;
}

type BukkitVector = any;
type BukkitChunk = any;

interface BukkitLocation {
  world: BukkitWorld;
  chunk: BukkitChunk;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  block: BukkitBlock;
  getBlock: () => BukkitBlock;
  add: (x: number, y: number, z: number) => BukkitLocation;
  clone: () => BukkitLocation;
  distance: (location: BukkitLocation) => BukkitLocation;
  distanceSquared: (location: BukkitLocation) => BukkitLocation;
  equals: (location: BukkitLocation) => boolean;
  getBlockX: () => number;
  getBlockY: () => number;
  getBlockZ: () => number;
  getX: () => number;
  getY: () => number;
  getZ: () => number;
  setX: (x: number) => void;
  setY: (y: number) => void;
  setZ: (z: number) => void;
  getChunk: () => BukkitChunk;
  getDirection: () => BukkitVector;
  getPitch: () => number;
  getWorld: () => BukkitWorld;
  length: () => number;
  lengthSquared: () => number;
  locToBlock: () => number;
  multiple: () => BukkitLocation;
  setDirection: () => BukkitLocation;
}

/*
  GETTEXT
*/

interface ILocaleStrings {
  [key: string]: (string | null)[];
}

type msgarg = number | string;

/**
 * Items
 */
declare module "items";

/**
 * utils
 */

interface JSONLoc {
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  world: string;
}
declare module "utils" {
  /************************************************************************
### utils.player() function

The utils.player() function will return a [Player][cmpl] object
with the given name. This function takes a single parameter
`playerName` which can be either a String or a [Player][cmpl] object -
if it's a Player object, then the same object is returned. If it's a
String, then it tries to find the player with that name.

#### Parameters

 * playerName : A String or Player object. If no parameter is provided
   then player() will try to return the `self` variable . It is
   strongly recommended to provide a parameter.

#### Example

```javascript
var utils = require('utils');
var name = 'walterh';
var player = utils.player(name);
if ( player ) {
  echo(player, 'Got ' + name);
} else {
  console.log('No player named ' + name);
}
```

[bkpl]: http://jd.bukkit.org/dev/apidocs/org/bukkit/entity/Player.html
[cmpl]: https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/api/entity/living/humanoid/Player.html
[cmloc]: https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/api/world/position/Location.html
[bkloc]: http://jd.bukkit.org/dev/apidocs/org/bukkit/Location.html

***/
  function player(name: string | BukkitPlayer): BukkitPlayer;
  function players(fn?: any): BukkitPlayer[];
  function getWorld(world: any): BukkitWorld;
  /*************************************************************************
  ### utils.world( worldName ) function

  Returns a World object matching the given name. Returns the same object if passed a world.

  ***/
  function world(worldName: string | BukkitWorld): BukkitWorld;
  /*************************************************************************
  ### utils.locationToJSON() function

  utils.locationToJSON() returns a [Location][cmloc] object in JSON form...

      { world: 'world5',
        x: 56.9324,
        y: 103.9954,
        z: 43.1323,
        yaw: 0.0,
        pitch: 0.0
      }

  This can be useful if you write a plugin that needs to store location data since bukkit's Location object is a Java object which cannot be serialized to JSON by default.

  #### Parameters

   * location: An object of type [Location][cmloc]

  #### Returns

  A JSON object in the above form.

  ***/
  function locationToJSON(location: BukkitLocation): JSONLoc;
  /*************************************************************************
  ### utils.locationToString() function

  The utils.locationToString() function returns a
  [Location][cmloc] object in string form...

      '{"world":"world5",x:56.9324,y:103.9954,z:43.1323,yaw:0.0,pitch:0.0}'

  ... which can be useful if you write a plugin which uses Locations as
  keys in a lookup table.

  #### Example

  ```javascript
  var utils = require('utils');
  ...
  var key = utils.locationToString(player.location);
  lookupTable[key] = player.name;
  ```

  ***/
  function locationToString(location: BukkitLocation): string;
  /*************************************************************************
  ### utils.locationFromJSON() function

  This function reconstructs an [Location][cmloc] object from
  a JSON representation. This is the counterpart to the
  `locationToJSON()` function. It takes a JSON object of the form
  returned by locationToJSON() and reconstructs and returns a bukkit
  Location object.

  ***/
  function locationFromJSON(location: JSONLoc): BukkitLocation;
  /*************************************************************************
  ### utils.getPlayerPos() function

  This function returns the player's [Location][cmloc] (x, y, z, pitch
  and yaw) for a named player.  If the "player" is in fact a
  [BlockCommand][bkbcs] then the attached Block's location is returned.

  #### Parameters

   * player : A [org.bukkit.command.CommandSender][bkbcs] (Player or BlockCommandSender) or player name (String).

  #### Returns

  A [Location][cmloc] object.

  [bkbcs]: http://jd.bukkit.org/dev/apidocs/org/bukkit/command/BlockCommandSender.html
  [bksndr]: http://jd.bukkit.org/dev/apidocs/index.html?org/bukkit/command/CommandSender.html
  ***/
  function getPlayerPos(player: BukkitPlayer): BukkitLocation;

  /************************************************************************
  ### utils.getMousePos() function

  This function returns a [Location][cmloc] object (the
  x,y,z) of the current block being targeted by the named player. This
  is the location of the block the player is looking at (targeting).

  #### Parameters

   * player : The player whose targeted location you wish to get.

  #### Example

  The following code will strike lightning at the location the player is looking at...

  ```javascript
  var utils = require('utils');
  var playerName = 'walterh';
  var targetPos = utils.getMousePos(playerName);
  if (targetPos){
    if (__plugin.canary){
      targetPos.world.makeLightningBolt(targetPos);
    }
    if (__plugin.bukkit){
      targetPos.world.strikeLightning(targetPos);
    }
  }
  ```

  ***/
  function getMousePos(player: BukkitPlayer);

  function worlds(): BukkitWorld[];
  /*************************************************************************
  ### utils.blockAt( Location ) function

  Returns the Block at the given location.

  ***/
  function blockAt(location: BukkitLocation): BukkitBlock;
  /************************************************************************
  ### utils.foreach() function

  The utils.foreach() function is a utility function for iterating over
  an array of objects (or a java.util.Collection of objects) and
  processing each object in turn. Where utils.foreach() differs from
  other similar functions found in javascript libraries, is that
  utils.foreach can process the array immediately or can process it
  *nicely* by processing one item at a time then delaying processing of
  the next item for a given number of server ticks (there are 20 ticks
  per second on the minecraft main thread).  This method relies on
  Bukkit's [org.bukkit.scheduler][sched] package for scheduling
  processing of arrays.

  [sched]: http://jd.bukkit.org/beta/apidocs/org/bukkit/scheduler/package-summary.html

  #### Parameters

   * array : The array to be processed - It can be a javascript array, a java array or java.util.Collection
   * callback : The function to be called to process each item in the
     array. The callback function should have the following signature
     `callback(item, index, object, array)`. That is the callback will
     be called with the following parameters....

     - item : The item in the array
     - index : The index at which the item can be found in the array.
     - object : Additional (optional) information passed into the foreach method.
     - array : The entire array.

   * context (optional) : An object which may be used by the callback.
   * delayInMilliseconds (optional, numeric) : If a delay is specified then the processing will be scheduled so that
     each item will be processed in turn with a delay between the completion of each
     item and the start of the next. This is recommended for any CPU-intensive process.
   * onDone (optional, function) : A function to be executed when all processing
     is complete. This parameter is only used when the processing is delayed. (It's optional even if a
     delay parameter is supplied).

  If called with a delay parameter then foreach() will return
  immediately after processing just the first item in the array (all
  subsequent items are processed later). If your code relies on the
  completion of the array processing, then provide an `onDone` parameter
  and put the code there.

  #### Example

  The following example illustrates how to use foreach for immediate processing of an array...

  ```javascript
  var utils = require('utils');
  var players = utils.players();
  utils.foreach (players, function( player ) {
    echo( player , 'Hi ' + player);
  });
  ```

  ... The `utils.foreach()` function can work with Arrays or any
  Java-style collection. This is important because many objects in the
  CanaryMod and Bukkit APIs use Java-style collections.
  ***/
  function foreach<T, P>(
    array: T[],
    callback: (item: T, index: number, context: P, array: T[]) => void,
    context: P,
    delay?: number,
    onCompletion?: () => void
  );
  /************************************************************************
  ### utils.nicely() function

  The utils.nicely() function is for performing background processing. utils.nicely() lets you
  process with a specified delay between the completion of each `next()`
  function and the start of the next `next()` function.
  `utils.nicely()` is a recursive function - that is - it calls itself
  (schedules itself actually) repeatedly until `hasNext` returns false.

  #### Parameters

   * next : A function which will be called if processing is to be done.
   * hasNext : A function which is called to determine if the `next`
     callback should be invoked. This should return a boolean value -
     true if the `next` function should be called (processing is not
     complete), false otherwise.
   * onDone : A function which is to be called when all processing is complete (hasNext returned false).
   * delayInMilliseconds : The delay between each call.

  #### Example

  See the source code to utils.foreach for an example of how utils.nicely is used.

  ***/
  function nicely(
    next: () => void,
    hasNext: () => boolean,
    onDone: () => void,
    delay: number
  ): void;
  /*************************************************************************
  ### utils.time( world ) function

  Returns the timeofday (in minecraft ticks) for the given world. This function is necessary because
  canarymod and bukkit differ in how the timeofday is calculated.

  See http://minecraft.gamepedia.com/Day-night_cycle#Conversions

  ***/
  function getTime(world: BukkitWorld): number;
  /*************************************************************************
 ### utils.time24( world ) function

 Returns the timeofday for the given world using 24 hour notation. (number of minutes)

 See http://minecraft.gamepedia.com/Day-night_cycle#Conversions

 #### Parameters

  * world : the name of the world or world object for which you want to get time

 ***/
  function getTime24(world: BukkitWorld): number;
  /*************************************************************************
  ### utils.players() function

  This function returns a javascript array of all online players on the
  server.  You can optionally provide a function which will be invoked
  with each player as a parameter.  For example, to give each player the
  ability to shoot arrows which launch fireworks:

  ```javascript
  require('utils').players( arrows.firework )
  ```

  Any players with a bow will be able to launch fireworks by shooting.

  ### utils.playerNames() function

  This function returns a javascript array of player names (as javascript strings)

  ***/
  function players(): string[];
}

/**
 * teleport
 */

declare module "teleport";

/**
 * inventory
 */

declare module "inventory";

/**
 * http
 */
declare module "http" {
  type HttpVerb = "GET" | "POST" | "PUT" | "DELETE";
  /*************************************************************************
  ## Http Module

  For handling http requests. Not to be confused with the more robust
  and functional 'http' module bundled with Node.js.

  ### http.request() function

  The http.request() function will fetch a web address asynchronously (on a
  separate thread)and pass the URL's response to a callback function
  which will be executed synchronously (on the main thread).  In this
  way, http.request() can be used to fetch web content without blocking the
  main thread of execution.

  #### Parameters

   * request: The request details either a plain URL e.g. "http://scriptcraft.js/sample.json" or an object with the following properties...

     - url: The URL of the request.
     - method: Should be one of the standard HTTP methods, GET, POST, PUT, DELETE (defaults to GET).
     - params: A Javascript object with name-value pairs. This is for supplying parameters to the server.

   * callback: The function to be called when the Web request has completed. This function takes the following parameters...
     - responseCode: The numeric response code from the server. If the server did not respond with 200 OK then the response parameter will be undefined.
     - response: A string (if the response is of type text) or object containing the HTTP response body.

  #### Example

  The following example illustrates how to use http.request to make a request to a JSON web service and evaluate its response...

  ```javascript
  var jsResponse;
  var http = require('http');
  http.request('http://scriptcraftjs.org/sample.json',function(responseCode, responseBody){
    jsResponse = JSON.parse( responseBody );
  });
  ```
  The following example illustrates a more complex use-case POSTing parameters to a CGI process on a server...

  ```javascript
  var http = require('http');
  http.request( {
      url: 'http://pixenate.com/pixenate/pxn8.pl',
      method: 'POST',
      params: {script: '[]'}
    },
    function( responseCode, responseBody ) {
      var jsObj = JSON.parse( responseBody );
    });
  ```

  ***/
  function request(
    request: {
      url: string;
      method: HttpVerb;
      params: { [name: string]: string | number };
    },
    callback: (responseCode: number, responseBody: string | object) => void
  ): void;
}

/**
 * events
 */
// Based on lib/events-helper-bukkit

// tslint:disable

declare module "events" {
  function blockBreak(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockBurn()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBurnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockBurn(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockCanBuild()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockCanBuildEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockCanBuildEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockCanBuild(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockDamage()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockDamage(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockDispense()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockDispenseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDispenseEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockDispense(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockExp()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockExpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExpEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockExp(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockExplode()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExplodeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockExplode(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockFade()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockFadeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFadeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockFade(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockForm()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFormEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockForm(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockFromTo()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockFromToEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFromToEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockFromTo(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockGrow()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockGrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockGrow(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockIgnite()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockIgniteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockIgniteEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockIgnite(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockMultiPlace()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockMultiPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockMultiPlaceEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockMultiPlace(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockPhysics()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPhysicsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPhysicsEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockPhysics(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockPistonExtend()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPistonExtendEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonExtendEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockPistonExtend(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockPistonRetract()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPistonRetractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonRetractEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockPistonRetract(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockPlace()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPlaceEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockPlace(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockRedstone()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockRedstoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockRedstoneEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockRedstone(callback: callbackFn, priority?: any);

  /*********************
     ### events.blockSpread()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockSpreadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockSpreadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function blockSpread(callback: callbackFn, priority?: any);

  /*********************
     ### events.cauldronLevelChange()

     #### Parameters

      * callback - A function which is called whenever the [block.CauldronLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/CauldronLevelChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function cauldronLevelChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityBlockForm()

     #### Parameters

      * callback - A function which is called whenever the [block.EntityBlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/EntityBlockFormEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityBlockForm(callback: callbackFn, priority?: any);

  /*********************
     ### events.leavesDecay()

     #### Parameters

      * callback - A function which is called whenever the [block.LeavesDecayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/LeavesDecayEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function leavesDecay(callback: callbackFn, priority?: any);

  /*********************
     ### events.notePlay()

     #### Parameters

      * callback - A function which is called whenever the [block.NotePlayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/NotePlayEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function notePlay(callback: callbackFn, priority?: any);

  /*********************
     ### events.signChange()

     #### Parameters

      * callback - A function which is called whenever the [block.SignChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/SignChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function signChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.enchantItem()

     #### Parameters

      * callback - A function which is called whenever the [enchantment.EnchantItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/EnchantItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function enchantItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.prepareItemEnchant()

     #### Parameters

      * callback - A function which is called whenever the [enchantment.PrepareItemEnchantEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/PrepareItemEnchantEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function prepareItemEnchant(callback: callbackFn, priority?: any);

  /*********************
     ### events.areaEffectCloudApply()

     #### Parameters

      * callback - A function which is called whenever the [entity.AreaEffectCloudApplyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/AreaEffectCloudApplyEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function areaEffectCloudApply(callback: callbackFn, priority?: any);

  /*********************
     ### events.creatureSpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.CreatureSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreatureSpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function creatureSpawn(callback: callbackFn, priority?: any);

  /*********************
     ### events.creeperPower()

     #### Parameters

      * callback - A function which is called whenever the [entity.CreeperPowerEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreeperPowerEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function creeperPower(callback: callbackFn, priority?: any);

  /*********************
     ### events.enderDragonChangePhase()

     #### Parameters

      * callback - A function which is called whenever the [entity.EnderDragonChangePhaseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EnderDragonChangePhaseEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function enderDragonChangePhase(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityAirChange()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityAirChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityAirChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityAirChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityBreakDoor()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityBreakDoorEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreakDoorEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityBreakDoor(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityBreed()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityBreedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreedEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityBreed(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityChangeBlock()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityChangeBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityChangeBlockEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityChangeBlock(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityCombustByBlock()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCombustByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByBlockEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityCombustByBlock(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityCombustByEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCombustByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityCombustByEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityCombust()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCombustEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityCombust(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityCreatePortal()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCreatePortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCreatePortalEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityCreatePortal(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityDamageByBlock()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDamageByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByBlockEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityDamageByBlock(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityDamageByEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDamageByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityDamageByEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityDamage()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityDamage(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityDeath()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDeathEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityDeath(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityExplode()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityExplodeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityExplode(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityInteract()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityInteractEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityInteract(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityPickupItem()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPickupItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityPickupItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityPortalEnter()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPortalEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEnterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityPortalEnter(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityPortal()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityPortal(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityPortalExit()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPortalExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalExitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityPortalExit(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityRegainHealth()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityRegainHealthEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityRegainHealthEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityRegainHealth(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityResurrect()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityResurrectEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityResurrectEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityResurrect(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityShootBow()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityShootBowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityShootBowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityShootBow(callback: callbackFn, priority?: any);

  /*********************
     ### events.entitySpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntitySpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntitySpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entitySpawn(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityTame()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTameEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTameEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityTame(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityTarget()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTargetEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityTarget(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityTargetLivingEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTargetLivingEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetLivingEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityTargetLivingEntity(callback: callbackFn, priority?: any);
  /*********************
     ### events.entityTeleport()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTeleportEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityTeleport(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityToggleGlide()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityToggleGlideEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityToggleGlideEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityToggleGlide(callback: callbackFn, priority?: any);

  /*********************
     ### events.entityUnleash()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityUnleashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityUnleashEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function entityUnleash(callback: callbackFn, priority?: any);

  /*********************
     ### events.expBottle()

     #### Parameters

      * callback - A function which is called whenever the [entity.ExpBottleEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExpBottleEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function expBottle(callback: callbackFn, priority?: any);

  /*********************
     ### events.explosionPrime()

     #### Parameters

      * callback - A function which is called whenever the [entity.ExplosionPrimeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExplosionPrimeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function explosionPrime(callback: callbackFn, priority?: any);

  /*********************
     ### events.fireworkExplode()

     #### Parameters

      * callback - A function which is called whenever the [entity.FireworkExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FireworkExplodeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function fireworkExplode(callback: callbackFn, priority?: any);

  /*********************
     ### events.foodLevelChange()

     #### Parameters

      * callback - A function which is called whenever the [entity.FoodLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FoodLevelChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function foodLevelChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.horseJump()

     #### Parameters

      * callback - A function which is called whenever the [entity.HorseJumpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/HorseJumpEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function horseJump(callback: callbackFn, priority?: any);

  /*********************
     ### events.itemDespawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.ItemDespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemDespawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function itemDespawn(callback: callbackFn, priority?: any);

  /*********************
     ### events.itemMerge()

     #### Parameters

      * callback - A function which is called whenever the [entity.ItemMergeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemMergeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function itemMerge(callback: callbackFn, priority?: any);

  /*********************
     ### events.itemSpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.ItemSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemSpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function itemSpawn(callback: callbackFn, priority?: any);

  /*********************
     ### events.lingeringPotionSplash()

     #### Parameters

      * callback - A function which is called whenever the [entity.LingeringPotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/LingeringPotionSplashEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function lingeringPotionSplash(callback: callbackFn, priority?: any);

  /*********************
     ### events.pigZap()

     #### Parameters

      * callback - A function which is called whenever the [entity.PigZapEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PigZapEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function pigZap(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerDeath()

     #### Parameters

      * callback - A function which is called whenever the [entity.PlayerDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerDeathEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerDeath(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerLeashEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.PlayerLeashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerLeashEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerLeashEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.potionSplash()

     #### Parameters

      * callback - A function which is called whenever the [entity.PotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PotionSplashEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function potionSplash(callback: callbackFn, priority?: any);

  /*********************
     ### events.projectileHit()

     #### Parameters

      * callback - A function which is called whenever the [entity.ProjectileHitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileHitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function projectileHit(callback: callbackFn, priority?: any);

  /*********************
     ### events.projectileLaunch()

     #### Parameters

      * callback - A function which is called whenever the [entity.ProjectileLaunchEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileLaunchEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function projectileLaunch(callback: callbackFn, priority?: any);

  /*********************
     ### events.sheepDyeWool()

     #### Parameters

      * callback - A function which is called whenever the [entity.SheepDyeWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepDyeWoolEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function sheepDyeWool(callback: callbackFn, priority?: any);

  /*********************
     ### events.sheepRegrowWool()

     #### Parameters

      * callback - A function which is called whenever the [entity.SheepRegrowWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepRegrowWoolEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function sheepRegrowWool(callback: callbackFn, priority?: any);

  /*********************
     ### events.slimeSplit()

     #### Parameters

      * callback - A function which is called whenever the [entity.SlimeSplitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SlimeSplitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function slimeSplit(callback: callbackFn, priority?: any);

  /*********************
     ### events.spawnerSpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.SpawnerSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SpawnerSpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function spawnerSpawn(callback: callbackFn, priority?: any);

  /*********************
     ### events.villagerAcquireTrade()

     #### Parameters

      * callback - A function which is called whenever the [entity.VillagerAcquireTradeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/VillagerAcquireTradeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function villagerAcquireTrade(callback: callbackFn, priority?: any);

  /*********************
     ### events.villagerReplenishTrade()

     #### Parameters

      * callback - A function which is called whenever the [entity.VillagerReplenishTradeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/VillagerReplenishTradeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function villagerReplenishTrade(callback: callbackFn, priority?: any);

  /*********************
     ### events.hangingBreakByEntity()

     #### Parameters

      * callback - A function which is called whenever the [hanging.HangingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakByEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function hangingBreakByEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.hangingBreak()

     #### Parameters

      * callback - A function which is called whenever the [hanging.HangingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function hangingBreak(callback: callbackFn, priority?: any);

  /*********************
     ### events.hangingPlace()

     #### Parameters

      * callback - A function which is called whenever the [hanging.HangingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingPlaceEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function hangingPlace(callback: callbackFn, priority?: any);

  /*********************
     ### events.brew()

     #### Parameters

      * callback - A function which is called whenever the [inventory.BrewEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function brew(callback: callbackFn, priority?: any);

  /*********************
     ### events.brewingStandFuel()

     #### Parameters

      * callback - A function which is called whenever the [inventory.BrewingStandFuelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewingStandFuelEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function brewingStandFuel(callback: callbackFn, priority?: any);

  /*********************
     ### events.craftItem()

     #### Parameters

      * callback - A function which is called whenever the [inventory.CraftItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/CraftItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function craftItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.furnaceBurn()

     #### Parameters

      * callback - A function which is called whenever the [inventory.FurnaceBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceBurnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function furnaceBurn(callback: callbackFn, priority?: any);

  /*********************
     ### events.furnaceExtract()

     #### Parameters

      * callback - A function which is called whenever the [inventory.FurnaceExtractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceExtractEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function furnaceExtract(callback: callbackFn, priority?: any);

  /*********************
     ### events.furnaceSmelt()

     #### Parameters

      * callback - A function which is called whenever the [inventory.FurnaceSmeltEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceSmeltEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function furnaceSmelt(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryClick()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryClickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryClickEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryClick(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryClose()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryCloseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCloseEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryClose(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryCreative()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryCreativeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCreativeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryCreative(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryDrag()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryDragEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryDragEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryDrag(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventory()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventory(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryMoveItem()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryMoveItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryMoveItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryMoveItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryOpen()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryOpenEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryOpenEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryOpen(callback: callbackFn, priority?: any);

  /*********************
     ### events.inventoryPickupItem()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryPickupItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function inventoryPickupItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.prepareAnvil()

     #### Parameters

      * callback - A function which is called whenever the [inventory.PrepareAnvilEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareAnvilEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function prepareAnvil(callback: callbackFn, priority?: any);

  /*********************
     ### events.prepareItemCraft()

     #### Parameters

      * callback - A function which is called whenever the [inventory.PrepareItemCraftEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareItemCraftEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function prepareItemCraft(callback: callbackFn, priority?: any);

  /*********************
     ### events.asyncPlayerChat()

     #### Parameters

      * callback - A function which is called whenever the [player.AsyncPlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerChatEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function asyncPlayerChat(callback: callbackFn, priority?: any);

  /*********************
     ### events.asyncPlayerPreLogin()

     #### Parameters

      * callback - A function which is called whenever the [player.AsyncPlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerPreLoginEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function asyncPlayerPreLogin(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerAchievementAwarded()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerAchievementAwardedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAchievementAwardedEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerAchievementAwarded(callback: callbackFn, priority?: any);
  /*********************
     ### events.playerAdvancementDone()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerAdvancementDoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAdvancementDoneEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerAdvancementDone(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerAnimation()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerAnimationEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAnimationEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerAnimation(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerArmorStandManipulate()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerArmorStandManipulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerArmorStandManipulateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerArmorStandManipulate(callback: callbackFn, priority?: any);
  /*********************
     ### events.playerBedEnter()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBedEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedEnterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerBedEnter(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerBedLeave()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBedLeaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedLeaveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerBedLeave(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerBucketEmpty()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBucketEmptyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketEmptyEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerBucketEmpty(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerBucketFill()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBucketFillEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketFillEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerBucketFill(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerChangedMainHand()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChangedMainHandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedMainHandEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerChangedMainHand(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerChangedWorld()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChangedWorldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedWorldEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerChangedWorld(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerChat()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerChat(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerChatTabComplete()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChatTabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatTabCompleteEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerChatTabComplete(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerCommandPreprocess()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerCommandPreprocessEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerCommandPreprocessEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerCommandPreprocess(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerDropItem()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerDropItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerDropItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerDropItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerEditBook()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerEditBookEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEditBookEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerEditBook(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerEggThrow()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerEggThrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEggThrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerEggThrow(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerExpChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerExpChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerExpChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerExpChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerFish()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerFishEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerFishEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerFish(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerGameModeChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerGameModeChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerGameModeChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerGameModeChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerInteractAtEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerInteractAtEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractAtEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerInteractAtEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerInteractEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerInteractEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerInteractEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerInteract()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEvent.html) is fired

      * priority - optional -bi see events.on() for more information.

     ***/
  function playerInteract(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerItemBreak()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemBreakEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerItemBreak(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerItemConsume()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemConsumeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemConsumeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerItemConsume(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerItemDamage()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerItemDamage(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerItemHeld()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemHeldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemHeldEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerItemHeld(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerJoin()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerJoinEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerJoinEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerJoin(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerKick()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerKickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerKickEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerKick(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerLevelChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLevelChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerLevelChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerLocaleChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerLocaleChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLocaleChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerLocaleChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerLogin()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLoginEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerLogin(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerMove()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerMoveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerMove(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerPickupArrow()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPickupArrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupArrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerPickupArrow(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerPickupItem()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerPickupItem(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerPortal()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPortalEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerPortal(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerPreLogin()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPreLoginEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerPreLogin(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerQuit()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerQuitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerQuitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerQuit(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerRegisterChannel()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerRegisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRegisterChannelEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerRegisterChannel(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerResourcePackStatus()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerResourcePackStatusEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerResourcePackStatusEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerResourcePackStatus(callback: callbackFn, priority?: any);
  /*********************
     ### events.playerRespawn()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerRespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRespawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerRespawn(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerShearEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerShearEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerShearEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerShearEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerStatisticIncrement()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerStatisticIncrementEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerStatisticIncrementEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerStatisticIncrement(callback: callbackFn, priority?: any);
  /*********************
     ### events.playerSwapHandItems()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerSwapHandItemsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerSwapHandItemsEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerSwapHandItems(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerTeleport()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerTeleportEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerTeleport(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerToggleFlight()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerToggleFlightEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleFlightEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerToggleFlight(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerToggleSneak()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerToggleSneakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSneakEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerToggleSneak(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerToggleSprint()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerToggleSprintEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSprintEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerToggleSprint(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerUnleashEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerUnleashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnleashEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerUnleashEntity(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerUnregisterChannel()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerUnregisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnregisterChannelEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerUnregisterChannel(callback: callbackFn, priority?: any);

  /*********************
     ### events.playerVelocity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerVelocityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerVelocityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function playerVelocity(callback: callbackFn, priority?: any);

  /*********************
     ### events.broadcastMessage()

     #### Parameters

      * callback - A function which is called whenever the [server.BroadcastMessageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/BroadcastMessageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function broadcastMessage(callback: callbackFn, priority?: any);

  /*********************
     ### events.mapInitialize()

     #### Parameters

      * callback - A function which is called whenever the [server.MapInitializeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/MapInitializeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function mapInitialize(callback: callbackFn, priority?: any);

  /*********************
     ### events.pluginDisable()

     #### Parameters

      * callback - A function which is called whenever the [server.PluginDisableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginDisableEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function pluginDisable(callback: callbackFn, priority?: any);

  /*********************
     ### events.pluginEnable()

     #### Parameters

      * callback - A function which is called whenever the [server.PluginEnableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginEnableEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function pluginEnable(callback: callbackFn, priority?: any);

  /*********************
     ### events.remoteServerCommand()

     #### Parameters

      * callback - A function which is called whenever the [server.RemoteServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/RemoteServerCommandEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function remoteServerCommand(callback: callbackFn, priority?: any);

  /*********************
     ### events.serverCommand()

     #### Parameters

      * callback - A function which is called whenever the [server.ServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerCommandEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function serverCommand(callback: callbackFn, priority?: any);

  /*********************
     ### events.serverListPing()

     #### Parameters

      * callback - A function which is called whenever the [server.ServerListPingEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerListPingEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function serverListPing(callback: callbackFn, priority?: any);

  /*********************
     ### events.serviceRegister()

     #### Parameters

      * callback - A function which is called whenever the [server.ServiceRegisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function serviceRegister(callback: callbackFn, priority?: any);

  /*********************
     ### events.serviceUnregister()

     #### Parameters

      * callback - A function which is called whenever the [server.ServiceUnregisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function serviceUnregister(callback: callbackFn, priority?: any);

  /*********************
     ### events.tabComplete()

     #### Parameters

      * callback - A function which is called whenever the [server.TabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/TabCompleteEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function tabComplete(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleBlockCollision()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleBlockCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleBlockCollisionEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleBlockCollision(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleCreate()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleCreateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleCreate(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleDamage()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleDamage(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleDestroy()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleDestroyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDestroyEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleDestroy(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleEnter()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEnterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleEnter(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleEntityCollision()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleEntityCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEntityCollisionEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleEntityCollision(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleExit()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleExitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleExit(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleMove()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleMoveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleMove(callback: callbackFn, priority?: any);

  /*********************
     ### events.vehicleUpdate()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleUpdateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleUpdateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function vehicleUpdate(callback: callbackFn, priority?: any);

  /*********************
     ### events.lightningStrike()

     #### Parameters

      * callback - A function which is called whenever the [weather.LightningStrikeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/LightningStrikeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function lightningStrike(callback: callbackFn, priority?: any);

  /*********************
     ### events.thunderChange()

     #### Parameters

      * callback - A function which is called whenever the [weather.ThunderChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/ThunderChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function thunderChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.weatherChange()

     #### Parameters

      * callback - A function which is called whenever the [weather.WeatherChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/WeatherChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function weatherChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.chunkLoad()

     #### Parameters

      * callback - A function which is called whenever the [world.ChunkLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkLoadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function chunkLoad(callback: callbackFn, priority?: any);

  /*********************
     ### events.chunkPopulate()

     #### Parameters

      * callback - A function which is called whenever the [world.ChunkPopulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkPopulateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function chunkPopulate(callback: callbackFn, priority?: any);

  /*********************
     ### events.chunkUnload()

     #### Parameters

      * callback - A function which is called whenever the [world.ChunkUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkUnloadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function chunkUnload(callback: callbackFn, priority?: any);

  /*********************
     ### events.portalCreate()

     #### Parameters

      * callback - A function which is called whenever the [world.PortalCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/PortalCreateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function portalCreate(callback: callbackFn, priority?: any);

  /*********************
     ### events.spawnChange()

     #### Parameters

      * callback - A function which is called whenever the [world.SpawnChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/SpawnChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function spawnChange(callback: callbackFn, priority?: any);

  /*********************
     ### events.structureGrow()

     #### Parameters

      * callback - A function which is called whenever the [world.StructureGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/StructureGrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function structureGrow(callback: callbackFn, priority?: any);

  /*********************
     ### events.worldInit()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldInitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldInitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function worldInit(callback: callbackFn, priority?: any);

  /*********************
     ### events.worldLoad()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldLoadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function worldLoad(callback: callbackFn, priority?: any);

  /*********************
     ### events.worldSave()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldSaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldSaveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function worldSave(callback: callbackFn, priority?: any);

  /*********************
     ### events.worldUnload()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldUnloadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
  function worldUnload(callback: callbackFn, priority?: any);
}

/**
 * entities
 */

declare module "entities";

/**
 * blocks
 */
declare module "blocks";
