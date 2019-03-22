declare const echo: (player: any, msg: string) => void;
declare const java: any;
declare const __plugin: any;
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
  entityDamageByEntity: (event) => void;
  entityDamage: (event) => void;
  projectileHit: (event) => void;
  entitySpawn: (event) => void;
  playerRespawn: (event) => void;
}

type NashornScriptEngine = any;
type BukkitPlayer = any;

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

/*
	Boss Bar API
*/

type TextComponent = any;
interface BossBarAPI {
  addBar(
    player: BukkitPlayer,
    text: TextComponent,
    color: BarsColor,
    stinterfaceyle: BarsStyle,
    progress: number
  ): BossBar;
  getBossBars(): BossBar[];
  addBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;
  removeBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;

  Color: BarsColor;
  Style: BarsStyle;
}

type BukkitBlock = any;
type BukkitWorld = any;
type BukkitVector = any;
type BukkitChunk = any;

/* interface BukkitWorld {

} */
interface BukkitLocation {
  world: BukkitWorld;
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
interface BossBar {
  addPlayer(player: BukkitPlayer): void;
  removePlayer(player: BukkitPlayer): void;
  getColor(): BarsColor;
  setColor(color: BarsColor): void;
  getStyle(): BarsStyle;
  setStyle(style: BarsStyle): void;
  setProperty(property: any, flag: boolean): void;
  getMessage(): string;
  setMessage(msg: string): void;
  setVisible(flag: boolean): void;
  isVisible(): boolean;
  getProgress(): number;
  setProgress(progress: number): void;
}
interface BarsColor {
  readonly PINK: any;
  readonly RED: any;
  readonly GREEN: any;
  readonly BLUE: any;
  readonly YELLOW: any;
  readonly PURPLE: any;
  readonly WHITE: any;
}

interface BarsStyle {
  readonly PROGRESS: any;
  readonly NOTCHED_6: any;
  readonly NOTCHED_10: any;
  readonly NOTCHED_12: any;
  readonly NOTCHED_20: any;
}

declare enum ChatColor {
  "AQUA",
  "BLACK",
  "BLUE",
  "BOLD",
  "DARK_AQUA",
  "DARK_BLUE",
  "DARK_GRAY",
  "DARK_GREEN",
  "DARK_PURPLE",
  "DARK_RED",
  "GOLD",
  "GRAY",
  "GREEN",
  "ITALIC",
  "LIGHT_PURPLE",
  "MAGIC",
  "RED",
  "RESET",
  "STRIKETHROUGH",
  "UNDERLINE",
  "WHITE",
  "YELLOW"
}

declare enum color {
  "BLUE",
  "GREEN",
  "PINK",
  "PURPLE",
  "RED",
  "WHITE",
  "YELLOW"
}

declare enum style {
  "NOTCHED_10",
  "NOTCHED_12",
  "NOTCHED_20"
}
interface IBar {
  show(): IBar;
  text(msg: string): IBar;
  textComponent(textComponent: TextComponent): IBar;
  color(color: color): IBar;
  style(style: style): IBar;
  progress(percentage: number): IBar;
  addPlayer(player: BukkitPlayer): IBar;
  removePlayer(player: BukkitPlayer): IBar;
  remove(): void;
  removeAllBars(player: BukkitPlayer): any;
}

interface _IBar extends IBar {
  _bar: BossBar;
  _msg: string | null;
  _color: BarsColor;
  _progress: number;
  _style: BarsStyle;
  _init: boolean;
  _textComponent: TextComponent | null;
  _hasTextComponent: boolean;
  removeAllBars: any;
}

interface IComponentBuilder {
  (text: string): IComponentBuilder;
  append(msg: string): IComponentBuilder;
  bold(bold: boolean): IComponentBuilder;
  color(color: ChatColor): IComponentBuilder;
  create(): TextComponent;
  italic(italic: boolean): IComponentBuilder;
  strikethrough(strikethrough: boolean): IComponentBuilder;
  underlined(underlined: boolean): IComponentBuilder;
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
  world: BukkitWorld;
}
declare module "utils" {
  function player(name: string): BukkitPlayer;
  function players(): BukkitPlayer[];
  function getWorld(world: any): BukkitWorld;
  function world(world: any): BukkitWorld;
  function locationToJSON(location: BukkitLocation): JSONLoc;
  function locationFromJSON(location: JSONLoc): BukkitLocation;
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
declare module "http";

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

      * priority - optional - see events.on() for more information.

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
