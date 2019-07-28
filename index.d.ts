declare const echo: (player: any, msg: string) => void
declare const java: any
declare const __plugin: Plugin
declare const __dirname: string
declare const __filename: string
declare const org: any
declare const refresh: () => void
declare const __require: (filename: string) => any
declare const require: (filename: string, options?: { cache?: boolean }) => any
declare const console: { log: (msg: string) => void }
declare const isJavaObject: (obj: any) => boolean
declare const config: any
declare const scload: (file: any) => any
declare const EventEmitter: any
declare const self: any
declare const Java: Java
declare const setTimeout: (callbackFn, delay: any) => number
declare const setInterval: (callbackFn, delay: any) => number
declare const clearTimeout: (handle: any) => void
declare const clearInterval: (handle: any) => void
declare const engineUUID: string

interface Java {
    type(type: 'org.bukkit.block.BlockFace'): BlockFaces
    type(type: 'org.bukkit.boss.BarColor'): BarColors
    type(type: 'org.bukkit.boss.BarFlag'): BarFlags
    type(type: 'org.bukkit.boss.BarStyle'): BarStyles
    type(type: 'org.bukkit.event.inventory.InventoryType'): InventoryTypes
    type(type: string): any
    from: (JavaScriptItem: any) => any
}

interface TabExecutor extends TabCompleter, CommandExecutor {

}

interface Java{
   type(type: 'org.bukkit.configuration.MemoryConfiguration'):  MemoryConfigurationConstructor
}

type Configuration = any
type MemorySection = any
type ConfigurationSection = any
type MemoryConfigurationOptions= any
type FileConfigurationOptions = any

interface  MemoryConfigurationConstructor {
   new():  MemoryConfiguration
   new(defaults: Configuration):  MemoryConfiguration
}

interface  MemoryConfiguration extends MemorySection, Configuration {

   /**  */
   defaults: Configuration
   /**  */
   // options: MemoryConfigurationOptions

   /** Sets the default value in the root at the given path as provided. */
   addDefault​(path: string, value: Object): void
   /** Sets the default values of the given paths as provided. */
   addDefaults​(defaults: Map<string, Object>): void
   /** Sets the default values of the given paths as provided. */
   addDefaults​(defaults: Configuration): void
   /** Gets the source Configuration for this configuration. */
   getDefaults​(): Configuration
   /** Gets the parent ConfigurationSection that directly containsthis ConfigurationSection. */
   getParent​(): ConfigurationSection
   /** Gets the ConfigurationOptions for this Configuration. */
   options​(): MemoryConfigurationOptions
   /** Sets the source of all default values for this Configuration. */
   setDefaults​(defaults: Configuration): void
}

interface Java{
   type(type: 'org.bukkit.configuration.file.FileConfiguration'):  FileConfigurationConstructor
}

interface  FileConfigurationConstructor {
   new():  FileConfiguration
   new(defaults: Configuration):  FileConfiguration
}

interface  FileConfiguration extends MemoryConfiguration {

   /** Compiles the header for this FileConfiguration and returns theresult. */
   buildHeader​(): string
   /** Loads this FileConfiguration from the specified location. */
   load​(file: File): void
   /** Loads this FileConfiguration from the specified reader. */
   load​(reader: Reader): void
   /** Loads this FileConfiguration from the specified location. */
   load​(file: string): void
   /** Loads this FileConfiguration from the specified string, asopposed to from file. */
   loadFromString​(contents: string): void
   /** Gets the ConfigurationOptions for this Configuration. */
   options​(): FileConfigurationOptions
   /** Saves this FileConfiguration to the specified location. */
   save​(file: File): void
   /** Saves this FileConfiguration to the specified location. */
   save​(file: string): void
   /** Saves this FileConfiguration to a string, and returns it. */
   saveToString​(): string
}


interface Plugin extends TabExecutor {

   /** Gets a FileConfiguration for this plugin, read through"config.yml" */
   getConfig​(): FileConfiguration
   /** Returns the folder that the plugin data's files are located in. */
   getDataFolder​(): File
   /** Gets a ChunkGenerator for use in a default world, as specifiedin the server configuration */
   getDefaultWorldGenerator​(worldName: string, id: string): ChunkGenerator
   /** Returns the plugin.yaml file containing the details for this plugin */
   getDescription​(): PluginDescriptionFile
   /** Returns the plugin logger associated with this server's logger. */
   getLogger​(): Logger
   /** Returns the name of the plugin. */
   getName​(): string
   /** Gets the associated PluginLoader responsible for this plugin */
   getPluginLoader​(): PluginLoader
   /** Gets an embedded resource in this plugin */
   getResource​(filename: string): InputStream
   /** Returns the Server instance currently running this plugin */
   getServer​(): Server
   /** Returns a value indicating whether or not this plugin is currentlyenabled */
   isEnabled​(): boolean
   /** Simple boolean if we can still nag to the logs about things */
   isNaggable​(): boolean
   /** Called when this plugin is disabled */
   onDisable​(): void
   /** Called when this plugin is enabled */
   onEnable​(): void
   /** Called after a plugin is loaded but before it has been enabled. */
   onLoad​(): void
   /** Discards any data in getConfig() and reloads from disk. */
   reloadConfig​(): void
   /** Saves the FileConfiguration retrievable by getConfig(). */
   saveConfig​(): void
   /** Saves the raw contents of the default config.yml file to the locationretrievable by getConfig(). */
   saveDefaultConfig​(): void
   /** Saves the raw contents of any resource embedded with a plugin's .jarfile assuming it can be found using getResource(String). */
   saveResource​(resourcePath: string, replace: boolean): void
   /** Set naggable state */
   setNaggable​(canNag: boolean): void
}

interface BlockFace {
    /**    Gets the normal vector corresponding to this block face.
     */
    getDirection(): Vector
    /**   Get the amount of X-coordinates to modify to get the represented block
     */
    getModX(): number
    /**   Get the amount of Y-coordinates to modify to get the represented block
     */
    getModY(): number
    /**    Get the amount of Z-coordinates to modify to get the represented block
     */
    getModZ(): number
    getOppositeFace(): BlockFace
}

interface BarFlag {}
interface BarFlags {
    /** Creates fog around the world.
     */
    CREATE_FOG: BarFlag
    /** Darkens the sky like during fighting a wither.
     */
    DARKEN_SKY: BarFlag
    /**Tells the client to play the Ender Dragon boss music. */
    PLAY_BOSS_MUSIC: BarFlag
}
interface BarColor {}
interface BarColors {
    BLUE: BarColor
    GREEN: BarColor
    PINK: BarColor
    PURPLE: BarColor
    RED: BarColor
    WHITE: BarColor
    YELLOW: BarColor
}
interface BarStyle {}
interface BarStyles {
    SEGMENTED_10: BarStyle
    SEGMENTED_12: BarStyle
    SEGMENTED_20: BarStyle
    SEGMENTED_6: BarStyle
    SOLID: BarStyle
}
interface BlockFaces {
    DOWN: BlockFace
    EAST: BlockFace
    EAST_NORTH_EAST: BlockFace
    EAST_SOUTH_EAST: BlockFace
    NORTH: BlockFace
    NORTH_EAST: BlockFace
    NORTH_NORTH_EAST: BlockFace
    NORTH_NORTH_WEST: BlockFace
    NORTH_WEST: BlockFace
    SELF: BlockFace
    SOUTH: BlockFace
    SOUTH_EAST: BlockFace
    SOUTH_SOUTH_EAST: BlockFace
    SOUTH_SOUTH_WEST: BlockFace
    SOUTH_WEST: BlockFace
    UP: BlockFace
    WEST: BlockFace
    WEST_NORTH_WEST: BlockFace
    WEST_SOUTH_WEST: BlockFace
}

interface InventoryTypes {
    /**   An anvil inventory, with 2 CRAFTING slots and 1 RESULT slot
     */
    ANVIL: InventoryType
    /**   A barrel box inventory, with 27 slots of type CONTAINER.
     */
    BARREL: InventoryType
    /**    A beacon inventory, with 1 CRAFTING slot
     */
    BEACON: InventoryType
    /**   A blast furnace inventory, with a RESULT slot, a CRAFTING slot, and a FUEL slot.
     */
    BLAST_FURNACE: InventoryType
    /**    A brewing stand inventory, with one FUEL slot and four CRAFTING slots.
     */
    BREWING: InventoryType
    /**   Cartography inventory with 2 CRAFTING slots, and 1 RESULT slot.
     */
    CARTOGRAPHY: InventoryType
    /**    A chest inventory, with 0, 9, 18, 27, 36, 45, or 54 slots of type CONTAINER.
     */
    CHEST: InventoryType
    /**   A player's crafting inventory, with 4 CRAFTING slots and a RESULT slot.
     */
    CRAFTING: InventoryType
    /**    The creative mode inventory, with only 9 QUICKBAR slots and nothing else.
     */
    CREATIVE: InventoryType
    /**   A dispenser inventory, with 9 slots of type CONTAINER.
     */
    DISPENSER: InventoryType
    /**   A dropper inventory, with 9 slots of type CONTAINER.
     */
    DROPPER: InventoryType
    /**    An enchantment table inventory, with two CRAFTING slots and three enchanting buttons.
     */
    ENCHANTING: InventoryType
    /**    The ender chest inventory, with 27 slots.
     */
    ENDER_CHEST: InventoryType
    /**   A furnace inventory, with a RESULT slot, a CRAFTING slot, and a FUEL slot.
     */
    FURNACE: InventoryType
    /**    Grindstone inventory with 2 CRAFTING slots, and 1 RESULT slot.
     */
    GRINDSTONE: InventoryType
    /**    A hopper inventory, with 5 slots of type CONTAINER.
     */
    HOPPER: InventoryType
    /**    A lectern inventory, with 1 BOOK slot.
     */
    LECTERN: InventoryType
    /**    Loom inventory, with 3 CRAFTING slots, and 1 RESULT slot.
     */
    LOOM: InventoryType
    /**    The merchant inventory, with 2 CRAFTING slots, and 1 RESULT slot.
     */
    MERCHANT: InventoryType
    /**    A player's inventory, with 9 QUICKBAR slots, 27 CONTAINER slots, 4 ARMOR slots and 1 offhand slot.
     */
    PLAYER: InventoryType
    /**    A shulker box inventory, with 27 slots of type CONTAINER.
     */
    SHULKER_BOX: InventoryType

    /**   A smoker inventory, with a RESULT slot, a CRAFTING slot, and a FUEL slot.
     */
    SMOKER: InventoryType
    /**    Stonecutter inventory with 1 CRAFTING slot, and 1 RESULT slot.
     */
    STONECUTTER: InventoryType
    /**    A workbench inventory, with 9 CRAFTING slots and a RESULT slot.
     */
    WORKBENCH: InventoryType
}

interface InventoryType {
    /**   */
    getDefaultSize(): number
    /**   */
    getDefaultTitle(): string
    /** Denotes that this InventoryType can be created via the normalBukkit.createInventory(org.bukkit.inventory.InventoryHolder, org.bukkit.event.inventory.InventoryType) methods. */
    isCreatable(): boolean
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): InventoryType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): InventoryType[]
}

interface Array<T> {
    includes(searchElement: T, fromIndex?: number): boolean
}

// declare interface events {
//     playerJoin: (event) => void
//     playerCommandPreprocess: (evt) => void
//     serverCommand: (event) => void
//     playerQuit: (event) => void
//     playerInteract: (event) => void
//     entityDamageByEntity: (event) => void
//     entityDamage: (event) => void
//     projectileHit: (event) => void
//     entitySpawn: (event) => void
//     playerRespawn: (event) => void
// }

type NashornScriptEngine = any

/**
 * As yet untyped
 */
type Statistic = any
type Particle = any
type Advancement = any
type Effect = any
type SoundCategory = any
type Sound = any
type Instrument = any
type Note = any
type DyeColor = any
type MapView = any
type WeatherType = any
type BlockData = any
type InetSocketAddress = any
type AdvancementProgress = any
type BlockVector = any

interface Java{
   type(type: 'org.bukkit.inventory.ItemStack'):  ItemStackConstructor
}

interface  ItemStackConstructor {
   new():  ItemStack
   new(stack: ItemStack):  ItemStack
   new(type: Material):  ItemStack
   new(type: Material, amount: number):  ItemStack
   new(type: Material, amount: number, damage: number):  ItemStack
   new(type: Material, amount: number, damage: number, data: number):  ItemStack
}

interface ItemStack extends Object, Cloneable<ItemStack> {

   /** Adds the specified Enchantment to this item stack. */
   addEnchantment​(ench: Enchantment, level: number): void
   /** Adds the specified enchantments to this item stack. */
   addEnchantments​(enchantments: Map<Enchantment, number>): void
   /** Adds the specified Enchantment to this item stack. */
   addUnsafeEnchantment​(ench: Enchantment, level: number): void
   /** Adds the specified enchantments to this item stack in an unsafe manner. */
   addUnsafeEnchantments​(enchantments: Map<Enchantment, number>): void
   /**   */
   clone​(): ItemStack
   /** Checks if this ItemStack contains the given Enchantment */
   containsEnchantment​(ench: Enchantment): boolean
   /** Required method for configuration serialization */
   deserialize​(args: Map<string, Object>): ItemStack
   /**   */
   equals​(obj: Object): boolean
   /** Gets the amount of items in this stack */
   getAmount​(): number
   /** Gets the MaterialData for this stack of items */
   getData​(): MaterialData
   /** Deprecated. see setDurability(short) */
   getDurability​(): number
   /** Gets the level of the specified enchantment on this item stack */
   getEnchantmentLevel​(ench: Enchantment): number
   /** Gets a map containing all enchantments and their levels on this item. */
   getEnchantments​(): Map<Enchantment, number>
   /** Get a copy of this ItemStack's ItemMeta. */
   getItemMeta​(): ItemMeta
   /** Get the maximum stacksize for the material hold in this ItemStack. */
   getMaxStackSize​(): number
   /** Gets the type of this item */
   getType​(): Material
   /**   */
   hashCode​(): number
   /** Checks to see if any meta data has been defined. */
   hasItemMeta​(): boolean
   /** This method is the same as equals, but does not consider stack size(amount). */
   isSimilar​(stack: ItemStack): boolean
   /** Removes the specified Enchantment if it exists on thisItemStack */
   removeEnchantment​(ench: Enchantment): number
   /** Creates a Map representation of this class. */
   serialize​(): Map<string, Object>
   /** Sets the amount of items in this stack */
   setAmount​(amount: number): void
   /** Sets the MaterialData for this stack of items */
   setData​(data: MaterialData): void
   /** Deprecated. durability is now part of ItemMeta. To avoid confusion andmisuse, getItemMeta(), setItemMeta(ItemMeta) andDamageable.setDamage(int) should be used instead. This is becauseany call to this method will be overwritten by subsequent setting ofItemMeta which was created before this call. */
   setDurability​(durability: number): void
   /** Set the ItemMeta of this ItemStack. */
   setItemMeta​(itemMeta: ItemMeta): boolean
   /** Sets the type of this item */
   setType​(type: Material): void
   /**   */
   toString​(): string
}


interface MetadataValue {
    /** Attempts to convert the value of this metadata item into a boolean. */
    asBoolean(): boolean
    /** Attempts to convert the value of this metadata item into a byte. */
    asByte(): number
    /** Attempts to convert the value of this metadata item into a double. */
    asDouble(): number
    /** Attempts to convert the value of this metadata item into a float. */
    asFloat(): number
    /** Attempts to convert the value of this metadata item into an int. */
    asInt(): number
    /** Attempts to convert the value of this metadata item into a long. */
    asLong(): number
    /** Attempts to convert the value of this metadata item into a short. */
    asShort(): number
    /** Attempts to convert the value of this metadata item into a string. */
    asString(): number
    /** Returns the Plugin that created this metadata item. */
    getOwningPlugin(): Plugin
    /** Invalidates this metadata item, forcing it to recompute when nextaccessed. */
    invalidate(): void
    /** Fetches the value of this metadata item. */
    value(): Object
}

interface Metadatable {
    /** Returns a list of previously set metadata values from the implementingobject's metadata store. */
    getMetadata(metadataKey: number): MetadataValue[]
    /** Tests to see whether the implementing object contains the givenmetadata value in its metadata store. */
    hasMetadata(metadataKey: number): boolean
    /** Removes the given metadata value from the implementing object'smetadata store. */
    removeMetadata(metadataKey: number, owningPlugin: Plugin): void
    /** Sets a metadata value in the implementing object's metadata store. */
    setMetadata(metadataKey: number, newMetadataValue: MetadataValue): void
}

type Permission = any
type PermissionRemovedExecutor = any
type PermissionAttachmentInfo = any
interface PermissionAttachment {
    /** Gets the Permissible that this is attached to */
    getPermissible(): Permissible
    /** Gets a copy of all set permissions and values contained within thisattachment. */
    getPermissions(): Map<String, Boolean>
    /** Gets the plugin responsible for this attachment */
    getPlugin(): Plugin
    /** Gets the class that was previously set to be called when thisattachment was removed from a Permissible. */
    getRemovalCallback(): PermissionRemovedExecutor
    /** Removes this attachment from its registered Permissible */
    remove(): boolean
    /** Sets a permission to the given value, by its fully qualified name */
    setPermission(name: number, value: boolean): void
    /** Sets a permission to the given value */
    setPermission(perm: Permission, value: boolean): void
    /** Sets an object to be called for when this attachment is removed from aPermissible. */
    setRemovalCallback(ex: PermissionRemovedExecutor): void
    /** Removes the specified permission from this attachment. */
    unsetPermission(name: number): void
    /** Removes the specified permission from this attachment. */
    unsetPermission(perm: Permission): void
}

interface ServerOperator {
    /** Checks if this object is a server operator */
    isOp(): boolean
    /** Sets the operator status of this object */
    setOp(value: boolean): void
}

interface Permissible extends ServerOperator {
    /** Adds a new empty PermissionAttachment to this object */
    addAttachment(plugin: Plugin): PermissionAttachment
    /** Temporarily adds a new empty PermissionAttachment to thisobject */
    addAttachment(plugin: Plugin, ticks: number): PermissionAttachment
    /** Adds a new PermissionAttachment with a single permission byname and value */
    addAttachment(
        plugin: Plugin,
        name: string,
        value: boolean
    ): PermissionAttachment
    /** Temporarily adds a new PermissionAttachment with a singlepermission by name and value */
    addAttachment(
        plugin: Plugin,
        name: string,
        value: boolean,
        ticks: number
    ): PermissionAttachment
    /** Gets a set containing all of the permissions currently in effect bythis object */
    getEffectivePermissions(): PermissionAttachmentInfo[]
    /** Gets the value of the specified permission, if set. */
    hasPermission(name: string): boolean
    /** Gets the value of the specified permission, if set. */
    hasPermission(perm: Permission): boolean
    /** Checks if this object contains an override for the specifiedpermission, by fully qualified name */
    isPermissionSet(name: string): boolean
    /** Checks if this object contains an override for the specified Permission */
    isPermissionSet(perm: Permission): boolean
    /** Recalculates the permissions for this object, if the attachments havechanged values. */
    recalculatePermissions(): void
    /** Removes the given PermissionAttachment from this object */
    removeAttachment(attachment: PermissionAttachment): void
}

interface PluginMessageRecipient {
    /** Gets a set containing all the Plugin Channels that this client islistening on. */
    getListeningPluginChannels(): string[]
    /** Sends this recipient a Plugin Message on the specified outgoingchannel. */
    sendPluginMessage(source: Plugin, channel: string, message: number[]): void
}

interface Recipe {
    /** Get the result of this recipe. */
    getResult(): ItemStack
}
interface Java{
   type(type: 'org.bukkit.NamespacedKey'):  NamespacedKeyConstructor
}

interface  NamespacedKeyConstructor {
   new(namespace: string, key: string):  NamespacedKey
   new(plugin: Plugin, key: string):  NamespacedKey
}

interface  NamespacedKey extends Object {

   /** The namespace representing all keys generated by Bukkit for backwardscompatibility measures.*/
   BUKKIT: string
   /** The namespace representing all inbuilt keys.*/
   MINECRAFT: string

   /**   */
   equals​(obj: Object): boolean
   /**   */
   getKey​(): string
   /**   */
   getNamespace​(): string
   /**   */
   hashCode​(): number
   /** Get a key in the Minecraft namespace. */
   minecraft​(key: string): NamespacedKey
   /** Deprecated. should never be used by plugins, for internal use only!! */
   randomKey​(): NamespacedKey
   /**   */
   toString​(): string
}

interface Keyed {
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
}

interface KeyedBossBar extends BossBar, Keyed {}

interface InventoryHolder {
    /** Get the object's inventory. */
    getInventory(): Inventory
}

interface Iterable<T> {
   forEach(consumer: (item: T) => void): void
}

interface Inventory extends Iterable<ItemStack> {
    /** Stores the given ItemStacks in the inventory. */
    addItem(...items: ItemStack[]): { [key: number]: ItemStack }
    /** Finds all slots in the inventory containing any ItemStacks with thegiven ItemStack. */
    all(item: ItemStack): { [key: number]: ItemStack }
    /** Returns a HashMap with all slots and ItemStacks in the inventory withthe given Material. */
    all(material: Material): { [key: number]: ItemStack }
    /** Clears out the whole Inventory. */
    clear(): void
    /** Clears out a particular slot in the index. */
    clear(index: number): void
    /** Checks if the inventory contains any ItemStacks matching the givenItemStack. */
    contains(item: ItemStack): boolean
    /** Checks if the inventory contains at least the minimum amount specifiedof exactly matching ItemStacks. */
    contains(item: ItemStack, amount: number): boolean
    /** Checks if the inventory contains any ItemStacks with the givenmaterial. */
    contains(material: Material): boolean
    /** Checks if the inventory contains any ItemStacks with the givenmaterial, adding to at least the minimum amount specified. */
    contains(material: Material, amount: number): boolean
    /** Checks if the inventory contains ItemStacks matching the givenItemStack whose amounts sum to at least the minimum amount specified. */
    containsAtLeast(item: ItemStack, amount: number): boolean
    /** Returns the first slot in the inventory containing an ItemStack withthe given stack. */
    first(item: ItemStack): number
    /** Finds the first slot in the inventory containing an ItemStack with thegiven material */
    first(material: Material): number
    /** Returns the first empty Slot. */
    firstEmpty(): number
    /** Returns all ItemStacks from the inventory */
    getContents(): ItemStack[]
    /** Gets the block or entity belonging to the open inventory */
    getHolder(): InventoryHolder
    /** Returns the ItemStack found in the slot at the given index */
    getItem(index: number): ItemStack
    /** Get the location of the block or entity which corresponds to this inventory. */
    getLocation(): Location
    /** Returns the maximum stack size for an ItemStack in this inventory. */
    getMaxStackSize(): number
    /** Returns the size of the inventory */
    getSize(): number
    /** Return the contents from the section of the inventory where items canreasonably be expected to be stored. */
    getStorageContents(): ItemStack[]
    /** Returns what type of inventory this is. */
    getType(): InventoryType
    /** Gets a list of players viewing the inventory. */
    getViewers(): HumanEntity[]
    /** Removes all stacks in the inventory matching the given stack. */
    remove(item: ItemStack): void
    /** Removes all stacks in the inventory matching the given material. */
    remove(material: Material): void
    /** Removes the given ItemStacks from the inventory. */
    removeItem(...items: ItemStack[]): { [key: number]: ItemStack }
    /** Completely replaces the inventory's contents. */
    setContents(items: ItemStack[]): void
    /** Stores the ItemStack at the given index of the inventory. */
    setItem(index: number, item: ItemStack): void
    /** This method allows you to change the maximum stack size for aninventory. */
    setMaxStackSize(size: number): void
    /** Put the given ItemStacks into the storage slots */
    setStorageContents(items: ItemStack[]): void
}

interface Java {
    type(type: 'org.bukkit.inventory.EquipmentSlot'): EquipmentSlot
}

interface EquipmentSlots {
    /**   */
    CHEST: EquipmentSlot
    /**   */
    FEET: EquipmentSlot
    /**   */
    HAND: EquipmentSlot
    /**   */
    HEAD: EquipmentSlot
    /**   */
    LEGS: EquipmentSlot
    /**   */
    OFF_HAND: EquipmentSlot
}

interface EquipmentSlot {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EquipmentSlot
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EquipmentSlot[]
}

interface UUID {
    toString(): string
    equals(uuid: UUID): boolean
}

interface AttributeModifier {
    /**   */
    deserialize(args: { [index: string]: Object }): AttributeModifier
    /**   */
    equals(other: Object): boolean
    /** Get the amount by which this modifier will apply its AttributeModifier.Operation. */
    getAmount(): number
    /** Get the name of this modifier. */
    getName(): string
    /** Get the operation this modifier will apply. */
    getOperation(): any // AttributeModifier.Operation
    /** Get the EquipmentSlot this AttributeModifier is active on,or null if this modifier is applicable for any slot. */
    getSlot(): EquipmentSlot
    /** Get the unique ID for this modifier. */
    getUniqueId(): UUID
    /**   */
    hashCode(): number
    /** Creates a Map representation of this class. */
    serialize(): { [index: string]: Object }
    /**   */
    toString(): string
}

interface AttributeInstance {
    /** Add a modifier to this instance. */
    addModifier(modifier: AttributeModifier): void
    /** The attribute pertaining to this instance. */
    getAttribute(): Attribute
    /** Base value of this instance before modifiers are applied. */
    getBaseValue(): number
    /** Gets the default value of the Attribute attached to this instance. */
    getDefaultValue(): number
    /** Get all modifiers present on this instance. */
    getModifiers(): AttributeModifier[]
    /** Get the value of this instance after all associated modifiers have beenapplied. */
    getValue(): number
    /** Remove a modifier from this instance. */
    removeModifier(modifier: AttributeModifier): void
    /** Set the base value of this instance. */
    setBaseValue(value: number): void
}

interface Attributable {
    /** Gets the specified attribute instance from the object. */
    getAttribute(attribute: Attribute): AttributeInstance
}

interface Java {
    type(type: 'org.bukkit.GameMode'): GameModes
}

interface GameModes {
    /** Adventure mode cannot break blocks without the correct tools. */
    ADVENTURE: GameMode
    /** Creative mode may fly, build instantly, become invulnerable and createfree items. */
    CREATIVE: GameMode
    /** Spectator mode cannot interact with the world in anyway and isinvisible to normal players. */
    SPECTATOR: GameMode
    /** Survival mode is the "normal" gameplay type, with no special features. */
    SURVIVAL: GameMode
}

interface GameMode {
    /** Deprecated. Magic value */
    getByValue(value: number): GameMode
    /** Deprecated. Magic value */
    getValue(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): GameMode
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): GameMode[]
}

interface PlayerInventory extends Inventory {
    /** Get all ItemStacks from the armor slots */
    getArmorContents(): ItemStack[]
    /** Return the ItemStack from the boots slot */
    getBoots(): ItemStack
    /** Return the ItemStack from the chestplate slot */
    getChestplate(): ItemStack
    /** Get all additional ItemStacks stored in this inventory. */
    getExtraContents(): ItemStack[]
    /** Get the slot number of the currently held item */
    getHeldItemSlot(): number
    /** Return the ItemStack from the helmet slot */
    getHelmet(): ItemStack
    /** Gets the block or entity belonging to the open inventory */
    getHolder(): HumanEntity
    /** Deprecated. players can duel wield now use the methods for thespecific hand instead */
    getItemInHand(): ItemStack
    /** Gets a copy of the item the player is currently holdingin their main hand. */
    getItemInMainHand(): ItemStack
    /** Gets a copy of the item the player is currently holdingin their off hand. */
    getItemInOffHand(): ItemStack
    /** Return the ItemStack from the leg slot */
    getLeggings(): ItemStack
    /** Put the given ItemStacks into the armor slots */
    setArmorContents(items: ItemStack[]): void
    /** Put the given ItemStack into the boots slot. */
    setBoots(boots: ItemStack): void
    /** Put the given ItemStack into the chestplate slot. */
    setChestplate(chestplate: ItemStack): void
    /** Put the given ItemStacks into the extra slotsSee getExtraContents() for an explanation of extra slots. */
    setExtraContents(items: ItemStack[]): void
    /** Set the slot number of the currently held item. */
    setHeldItemSlot(slot: number): void
    /** Put the given ItemStack into the helmet slot. */
    setHelmet(helmet: ItemStack): void
    /** Stores the ItemStack at the given index of the inventory. */
    setItem(index: number, item: ItemStack): void
    /** Deprecated. players can duel wield now use the methods for thespecific hand instead */
    setItemInHand(stack: ItemStack): void
    /** Sets the item the player is holding in their main hand. */
    setItemInMainHand(item: ItemStack): void
    /** Sets the item the player is holding in their off hand. */
    setItemInOffHand(item: ItemStack): void
    /** Put the given ItemStack into the leg slot. */
    setLeggings(leggings: ItemStack): void
}

interface Java {
    type(
        type: 'org.bukkit.event.inventory.InventoryType.SlotType'
    ): InventoryTypeSlotTypes
}

interface InventoryTypeSlotTypes {
    /** An armour slot in the player's inventory. */
    ARMOR: InventoryTypeSlotType
    /** A regular slot in the container or the player's inventory; anythingnot covered by the other enum values. */
    CONTAINER: InventoryTypeSlotType
    /** A slot in the crafting matrix, or an 'input' slot. */
    CRAFTING: InventoryTypeSlotType
    /** The fuel slot in a furnace inventory, or the ingredient slot in abrewing stand inventory. */
    FUEL: InventoryTypeSlotType
    /** A pseudo-slot representing the area outside the inventory window. */
    OUTSIDE: InventoryTypeSlotType
    /** A slot in the bottom row or quickbar. */
    QUICKBAR: InventoryTypeSlotType
    /** A result slot in a furnace or crafting inventory. */
    RESULT: InventoryTypeSlotType
}

interface InventoryTypeSlotType {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): InventoryTypeSlotType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): InventoryTypeSlotType[]
}

interface InventoryView {
    /** Closes the inventory view. */
    close(): void
    /** Converts a raw slot ID into its local slot ID into whichever of the twoinventories the slot points to. */
    convertSlot(rawSlot: number): number
    /** Check the total number of slots in this view, combining the upper andlower inventories. */
    countSlots(): number
    /** Get the lower inventory involved in this transaction. */
    getBottomInventory(): Inventory
    /** Get the item on the cursor of one of the viewing players. */
    getCursor(): ItemStack
    /** Gets the inventory corresponding to the given raw slot ID. */
    getInventory(rawSlot: number): Inventory
    /** Gets one item in this inventory view by its raw slot ID. */
    getItem(slot: number): ItemStack
    /** Get the player viewing. */
    getPlayer(): HumanEntity
    /** Determine the type of the slot by its raw slot ID. */
    getSlotType(slot: number): InventoryTypeSlotType
    /** Get the title of this inventory window. */
    getTitle(): string
    /** Get the upper inventory involved in this transaction. */
    getTopInventory(): Inventory
    /** Determine the type of inventory involved in the transaction. */
    getType(): InventoryType
    /** Sets the item on the cursor of one of the viewing players. */
    setCursor(item: ItemStack): void
    /** Sets one item in this inventory view by its raw slot ID. */
    setItem(slot: number, item: ItemStack): void
    /** Sets an extra property of this inventory if supported by thatinventory, for example the state of a progress bar. */
    setProperty(prop: InventoryViewProperty, value: number): boolean
}

interface Java {
    type(
        type: 'org.bukkit.inventory.InventoryView.Property'
    ): InventoryViewPropertys
}

interface InventoryViewPropertys {
    /** The lectern's current open book page */
    BOOK_PAGE: InventoryViewProperty
    /** The progress of the down-pointing arrow in a brewing inventory. */
    BREW_TIME: InventoryViewProperty
    /** The progress of the flame in a furnace inventory. */
    BURN_TIME: InventoryViewProperty
    /** The progress of the right-pointing arrow in a furnace inventory. */
    COOK_TIME: InventoryViewProperty
    /** In an enchanting inventory, the top button's experience levelvalue. */
    ENCHANT_BUTTON1: InventoryViewProperty
    /** In an enchanting inventory, the middle button's experience levelvalue. */
    ENCHANT_BUTTON2: InventoryViewProperty
    /** In an enchanting inventory, the bottom button's experience levelvalue. */
    ENCHANT_BUTTON3: InventoryViewProperty
    /** In an enchanting inventory, the top button's enchantment's id */
    ENCHANT_ID1: InventoryViewProperty
    /** In an enchanting inventory, the middle button's enchantment's id */
    ENCHANT_ID2: InventoryViewProperty
    /** In an enchanting inventory, the bottom button's enchantment's id */
    ENCHANT_ID3: InventoryViewProperty
    /** In an enchanting inventory, the top button's level value. */
    ENCHANT_LEVEL1: InventoryViewProperty
    /** In an enchanting inventory, the middle button's level value. */
    ENCHANT_LEVEL2: InventoryViewProperty
    /** In an enchanting inventory, the bottom button's level value. */
    ENCHANT_LEVEL3: InventoryViewProperty
    /** In an enchanting inventory, the first four bits of the player's xpSeed. */
    ENCHANT_XP_SEED: InventoryViewProperty
    /** In an beacon inventory, the levels of the beacon */
    LEVELS: InventoryViewProperty
    /** In an beacon inventory, the primary potion effect */
    PRIMARY_EFFECT: InventoryViewProperty
    /** The repair's cost in xp levels */
    REPAIR_COST: InventoryViewProperty
    /** In an beacon inventory, the secondary potion effect */
    SECONDARY_EFFECT: InventoryViewProperty
    /** How many total ticks the current fuel should last. */
    TICKS_FOR_CURRENT_FUEL: InventoryViewProperty
    /** How many total ticks the current smelting should last. */
    TICKS_FOR_CURRENT_SMELTING: InventoryViewProperty
}

interface InventoryViewProperty {
    /** Deprecated. Magic value */
    getId(): number
    /**   */
    getType(): InventoryType
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): InventoryViewProperty
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): InventoryViewProperty[]
}

interface Java {
    type(type: 'org.bukkit.entity.Villager.Profession'): VillagerProfession
}

interface VillagerProfessions {
    /** Armorer profession. */
    ARMORER: VillagerProfession
    /** Butcher profession. */
    BUTCHER: VillagerProfession
    /** Cartographer profession. */
    CARTOGRAPHER: VillagerProfession
    /** Cleric profession. */
    CLERIC: VillagerProfession
    /** Farmer profession. */
    FARMER: VillagerProfession
    /** Fisherman profession. */
    FISHERMAN: VillagerProfession
    /** Fletcher profession. */
    FLETCHER: VillagerProfession
    /** Leatherworker profession. */
    LEATHERWORKER: VillagerProfession
    /** Librarian profession. */
    LIBRARIAN: VillagerProfession
    /** Mason profession. */
    MASON: VillagerProfession
    /** Nitwit profession. */
    NITWIT: VillagerProfession
    /**   */
    NONE: VillagerProfession
    /** Sheperd profession. */
    SHEPHERD: VillagerProfession
    /** Toolsmith profession. */
    TOOLSMITH: VillagerProfession
    /** Weaponsmith profession. */
    WEAPONSMITH: VillagerProfession
}

interface VillagerProfession extends Keyed {
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): VillagerProfession
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): VillagerProfession[]
}

interface Java {
    type(type: 'org.bukkit.entity.Villager.Type'): VillagerType
}

interface VillagerTypes {
    /**   */
    DESERT: VillagerType
    /**   */
    JUNGLE: VillagerType
    /**   */
    PLAINS: VillagerType
    /**   */
    SAVANNA: VillagerType
    /**   */
    SNOW: VillagerType
    /**   */
    SWAMP: VillagerType
    /**   */
    TAIGA: VillagerType
}

interface VillagerType extends Keyed {
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): VillagerType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): VillagerType[]
}

interface Java {
    type(type: 'java.util.Random'): Random
}

interface Random {}

interface LootContext {
    /** Get the HumanEntity who killed the getLootedEntity(). */
    getKiller(): HumanEntity
    /** The Location to store where the loot will be generated. */
    getLocation(): Location
    /** Get the Entity that was killed. */
    getLootedEntity(): Entity
    /** Represents theEnchantment.LOOT_BONUS_MOBS thegetKiller() entity has on their equipped item. */
    getLootingModifier(): number
    /** Represents the PotionEffectType.LUCK that anentity can have. */
    getLuck(): number
}

interface LootTable extends Keyed {
    /** Attempt to fill an inventory with this LootTable's loot. */
    fillInventory(
        inventory: Inventory,
        random: Random,
        context: LootContext
    ): void
    /** Returns a mutable list of loot generated by this LootTable. */
    populateLoot(random: Random, context: LootContext): ItemStack[]
}

interface Lootable {
    /** Gets the Loot Table attached to this block or entity. */
    getLootTable(): LootTable
    /** Get the Loot Table's seed. */
    getSeed(): number
    /** Set the loot table for a container or entity. */
    setLootTable(table: LootTable): void
    /** Set the seed used when this Loot Table generates loot. */
    setSeed(seed: number): void
}

interface Mob extends LivingEntity, Lootable {
    /** Gets the current target of this Mob */
    getTarget(): LivingEntity
    /** Instructs this Mob to set the specified LivingEntity as its target. */
    setTarget(target: LivingEntity): void
}

interface Creature extends Mob {}

interface Ageable extends Creature {
    /** Return the ability to breed of the animal. */
    canBreed(): boolean
    /** Gets the age of this animal. */
    getAge(): number
    /** Gets the current agelock. */
    getAgeLock(): boolean
    /** Returns true if the animal is an adult. */
    isAdult(): boolean
    /** Sets the age of the animal to an adult */
    setAdult(): void
    /** Sets the age of this animal. */
    setAge(age: number): void
    /** Lock the age of the animal, setting this will prevent the animal frommaturing or getting ready for mating. */
    setAgeLock(lock: boolean): void
    /** Sets the age of the animal to a baby */
    setBaby(): void
    /** Set breedability of the animal, if the animal is a baby and set tobreed it will instantly grow up. */
    setBreed(breed: boolean): void
}

interface NPC extends Creature {}

interface Java {
    type(type: 'org.bukkit.inventory.MerchantRecipe'): MerchantRecipeConstructor
}

interface MerchantRecipeConstructor {
    new (result: ItemStack, maxUses: number): MerchantRecipe
    new (
        result: ItemStack,
        maxUses: number,
        experienceReward: boolean
    ): MerchantRecipe
    new (
        result: ItemStack,
        maxUses: number,
        experienceReward: boolean,
        villagerExperience: number,
        priceMultiplier: number
    ): MerchantRecipe
}

interface MerchantRecipe extends Recipe {
    /**   */
    addIngredient(item: ItemStack): void
    /**   */
    getIngredients(): ItemStack[]
    /** Get the maximum number of uses this trade has. */
    getMaxUses(): number
    /** Gets the additive price multiplier for the cost of this trade. */
    getPriceMultiplier(): number
    /** Get the result of this recipe. */
    getResult(): ItemStack
    /** Get the number of times this trade has been used. */
    getUses(): number
    /** Gets the amount of experience the villager earns from this trade. */
    getVillagerExperience(): number
    /** Whether to reward experience to the player for the trade. */
    hasExperienceReward(): boolean
    /**   */
    removeIngredient(index: number): void
    /** Set whether to reward experience to the player for the trade. */
    setExperienceReward(flag: boolean): void
    /**   */
    setIngredients(ingredients: ItemStack[]): void
    /** Set the maximum number of uses this trade has. */
    setMaxUses(maxUses: number): void
    /** Sets the additive price multiplier for the cost of this trade. */
    setPriceMultiplier(priceMultiplier: number): void
    /** Set the number of times this trade has been used. */
    setUses(uses: number): void
    /** Sets the amount of experience the villager earns from this trade. */
    setVillagerExperience(villagerExperience: number): void
}

interface Merchant {
    /** Get the recipe at a certain index of this merchant's trade list. */
    getRecipe(i: number): MerchantRecipe
    /** Get the number of trades this merchant currently has available. */
    getRecipeCount(): number
    /** Get a list of trades currently available from this merchant. */
    getRecipes(): MerchantRecipe[]
    /** Gets the player this merchant is trading with, or null if it is notcurrently trading. */
    getTrader(): HumanEntity
    /** Gets whether this merchant is currently trading. */
    isTrading(): boolean
    /** Set the recipe at a certain index of this merchant's trade list. */
    setRecipe(i: number, recipe: MerchantRecipe): void
    /** Set the list of trades currently available from this merchant. */
    setRecipes(recipes: MerchantRecipe[]): void
}

interface AbstractVillager extends Ageable, NPC, InventoryHolder, Merchant {
    /** Gets this villager's inventory. */
    getInventory(): Inventory
}

interface Villager extends AbstractVillager {
    /** Gets the current profession of this villager */
    getProfession(): VillagerProfession
    /** Gets the trading experience of this villager */
    getVillagerExperience(): number
    /** Gets the level of this villager */
    getVillagerLevel(): number
    /** Gets the current type of this villager */
    getVillagerType(): VillagerType
    /** Sets the new profession of this villager */
    setProfession(profession: VillagerProfession): void
    /** Sets the trading experience of this villager */
    setVillagerExperience(experience: number): void
    /** Sets the level of this villager */
    setVillagerLevel(level: number): void
    /** Sets the new type of this villager */
    setVillagerType(type: VillagerType): void
    /** Attempts to make this villager sleep at the given location. */
    sleep(location: Location): boolean
    /** Causes this villager to wake up if he's currently sleeping. */
    wakeup(): void
}

interface Java {
    type(type: 'org.bukkit.inventory.MainHand'): MainHands
}

interface MainHands {
    /**   */
    LEFT: MainHand
    /**   */
    RIGHT: MainHand
}

interface MainHand {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): MainHand
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): MainHand[]
}

interface HumanEntity extends LivingEntity, InventoryHolder {
    /** Force-closes the currently open inventory view for this player, if any. */
    closeInventory(): void
    /** Discover a recipe for this player such that it has not already beendiscovered. */
    discoverRecipe(recipe: NamespacedKey): boolean
    /** Discover a collection of recipes for this player such that they have notalready been discovered. */
    discoverRecipes(recipes: NamespacedKey[]): number
    /** Gets the location of the bed the player is currently sleeping in */
    getBedLocation(): Location
    /** Gets the Location where the player will spawn at their bed, null ifthey have not slept in one or their current bed spawn is invalid. */
    getBedSpawnLocation(): Location
    /** Get the cooldown time in ticks remaining for the specified material. */
    getCooldown(material: Material): number
    /** Get the player's EnderChest inventory */
    getEnderChest(): Inventory
    /** Get the total amount of experience required for the player to level */
    getExpToLevel(): number
    /** Gets this human's current GameMode */
    getGameMode(): GameMode
    /** Get the player's inventory. */
    getInventory(): PlayerInventory
    /** Deprecated. Humans may now dual wield in their off hand, use explicitmethods in PlayerInventory. */
    getItemInHand(): ItemStack
    /** Returns the ItemStack currently on your cursor, can be empty. */
    getItemOnCursor(): ItemStack
    /** Gets the player's selected main hand */
    getMainHand(): MainHand
    /** Returns the name of this player */
    getName(): string
    name: string
    /** Gets the inventory view the player is currently viewing. */
    getOpenInventory(): InventoryView
    /** Deprecated. There are currently no well defined semantics regardingserialized entities in Bukkit. Use with care. */
    getShoulderEntityLeft(): Entity
    /** Deprecated. There are currently no well defined semantics regardingserialized entities in Bukkit. Use with care. */
    getShoulderEntityRight(): Entity
    /** Get the sleep ticks of the player. */
    getSleepTicks(): number
    /** Check whether a cooldown is active on the specified material. */
    hasCooldown(material: Material): boolean
    /** Check if the player is currently blocking (ie with a shield). */
    isBlocking(): boolean
    /** Check if the player currently has their hand raised (ie about to beginblocking). */
    isHandRaised(): boolean
    /** Opens an empty enchanting inventory window with the player's inventoryon the bottom. */
    openEnchanting(location: Location, force: boolean): InventoryView
    /** Opens an inventory window with the specified inventory on the top andthe player's inventory on the bottom. */
    openInventory(inventory: Inventory): InventoryView
    /** Opens an inventory window to the specified inventory view. */
    openInventory(inventory: InventoryView): void
    /** Starts a trade between the player and the villager */
    openMerchant(trader: Villager, force: boolean): InventoryView
    /** Starts a trade between the player and the merchant. */
    openMerchant(merchant: Merchant, force: boolean): InventoryView
    /** Opens an empty workbench inventory window with the player's inventoryon the bottom. */
    openWorkbench(location: Location, force: boolean): InventoryView
    /** Sets the Location where the player will spawn at their bed. */
    setBedSpawnLocation(location: Location): void
    /** Sets the Location where the player will spawn at their bed. */
    setBedSpawnLocation(location: Location, force: boolean): void
    /** Set a cooldown on the specified material for a certain amount of ticks. */
    setCooldown(material: Material, ticks: number): void
    /** Sets this human's current GameMode */
    setGameMode(mode: GameMode): void
    /** Deprecated. Humans may now dual wield in their off hand, use explicitmethods in PlayerInventory. */
    setItemInHand(item: ItemStack): void
    /** Sets the item to the given ItemStack, this will replace whatever theuser was moving. */
    setItemOnCursor(item: ItemStack): void
    /** Deprecated. There are currently no well defined semantics regardingserialized entities in Bukkit. Use with care. */
    setShoulderEntityLeft(entity: Entity): void
    /** Deprecated. There are currently no well defined semantics regardingserialized entities in Bukkit. Use with care. */
    setShoulderEntityRight(entity: Entity): void
    /** If the player currently has an inventory window open, this method willset a property of that window, such as the state of a progress bar. */
    setWindowProperty(prop: InventoryViewProperty, value: number): boolean
    /** Attempts to make the entity sleep at the given location. */
    sleep(location: Location, force: boolean): boolean
    /** Undiscover a recipe for this player such that it has already beendiscovered. */
    undiscoverRecipe(recipe: NamespacedKey): boolean
    /** Undiscover a collection of recipes for this player such that they havealready been discovered. */
    undiscoverRecipes(recipes: NamespacedKey[]): number
    /** Causes the player to wakeup if they are currently sleeping. */
    wakeup(setSpawnLocation: boolean): void
}

interface Projectile extends Entity {
    /** Determine if this projectile should bounce or not when it hits. */
    doesBounce(): boolean
    /** Retrieve the shooter of this projectile. */
    getShooter(): ProjectileSource
    /** Set whether or not this projectile should bounce or not when it hitssomething. */
    setBounce(doesBounce: boolean): void
    /** Set the shooter of this projectile. */
    setShooter(source: ProjectileSource): void
}

interface Java {
    type(type: 'org.bukkit.potion.PotionEffect'): PotionEffectConstructor
}

interface Java {
    type(
        type: 'org.bukkit.potion.PotionEffectType'
    ): PotionEffectTypeConstructor
}

interface PotionEffectTypeConstructor {
    new (id: number): PotionEffectType
}

interface PotionEffectType extends Object {
    /** Creates a PotionEffect from this PotionEffectType, applying durationmodifiers and checks. */
    createEffect(duration: number, amplifier: number): PotionEffect
    /**   */
    equals(obj: Object): boolean
    /** Deprecated. Magic value */
    getById(id: number): PotionEffectType
    /** Gets the effect type specified by the given name. */
    getByName(name: string): PotionEffectType
    /** Returns the color of this effect type. */
    getColor(): Color
    /** Deprecated. unused, always 1.0 */
    getDurationModifier(): number
    /** Deprecated. Magic value */
    getId(): number
    /** Returns the name of this effect type. */
    getName(): string
    /**   */
    hashCode(): number
    /** Returns whether the effect of this type happens once, immediately. */
    isInstant(): boolean
    /** Registers an effect type with the given object. */
    registerPotionEffectType(type: PotionEffectType): void
    /** Stops accepting any effect type registrations. */
    stopAcceptingRegistrations(): void
    /**   */
    toString(): string
    /** Returns an array of all the registered PotionEffectTypes. */
    values(): PotionEffectType[]
}

interface Color {
    /**   */
    asBGR(): number
    /**   */
    asRGB(): number
    /**   */
    deserialize(map: { [index: string]: Object }): Color
    /**   */
    equals(o: Object): boolean
    /** Creates a new color object from an integer that contains the blue,green, and red bytes in the lowest order 24 bits. */
    fromBGR(bgr: number): Color
    /** Creates a new Color object from a blue, green, and red */
    fromBGR(blue: number, green: number, red: number): Color
    /** Creates a new color object from an integer that contains the red,green, and blue bytes in the lowest order 24 bits. */
    fromRGB(rgb: number): Color
    /** Creates a new Color object from a red, green, and blue */
    fromRGB(red: number, green: number, blue: number): Color
    /** Gets the blue component */
    getBlue(): number
    /** Gets the green component */
    getGreen(): number
    /** Gets the red component */
    getRed(): number
    /**   */
    hashCode(): number
    /** Creates a new color with its RGB components changed as if it was dyedwith the colors passed in, replicating vanilla workbench dyeing */
    mixColors(...colors: Color[]): Color
    /** Creates a new color with its RGB components changed as if it was dyedwith the colors passed in, replicating vanilla workbench dyeing */
    mixDyes(...colors: DyeColor[]): Color
    /** Creates a Map representation of this class. */
    serialize(): { [index: string]: Object }
    /** Creates a new Color object with specified component */
    setBlue(blue: number): Color
    /** Creates a new Color object with specified component */
    setGreen(green: number): Color
    /** Creates a new Color object with specified component */
    setRed(red: number): Color
    /**   */
    toString(): string
}
interface PotionEffectConstructor {
    new (map: { [index: string]: Object }): PotionEffect
    new (
        type: PotionEffectType,
        duration: number,
        amplifier: number
    ): PotionEffect
    new (
        type: PotionEffectType,
        duration: number,
        amplifier: number,
        ambient: boolean
    ): PotionEffect
    new (
        type: PotionEffectType,
        duration: number,
        amplifier: number,
        ambient: boolean,
        particles: boolean
    ): PotionEffect
    new (
        type: PotionEffectType,
        duration: number,
        amplifier: number,
        ambient: boolean,
        particles: boolean,
        icon: boolean
    ): PotionEffect
}

interface PotionEffect {
    /** Attempts to add the effect represented by this object to the givenLivingEntity. */
    apply(entity: LivingEntity): boolean
    /**   */
    equals(obj: Object): boolean
    /** Returns the amplifier of this effect. */
    getAmplifier(): number
    /** Deprecated. color is not part of potion effects */
    getColor(): Color
    /** Returns the duration (in ticks) that this effect will run for whenapplied to a LivingEntity. */
    getDuration(): number
    /** Returns the PotionEffectType of this effect. */
    getType(): PotionEffectType
    /**   */
    hashCode(): number
    /**   */
    hasIcon(): boolean
    /**   */
    hasParticles(): boolean
    /** Makes potion effect produce more, translucent, particles. */
    isAmbient(): boolean
    /** Creates a Map representation of this class. */
    serialize(): { [index: string]: Object }
    /**   */
    toString(): string
}

interface EntityEquipment {
    /** Clears the entity of all armor and held items */
    clear(): void
    /** Gets a copy of all worn armor */
    getArmorContents(): ItemStack[]
    /** Gets a copy of the boots currently being worn by the entity */
    getBoots(): ItemStack
    /** Gets the chance of the boots being dropped upon this creature's death. */
    getBootsDropChance(): number
    /** Gets a copy of the chest plate currently being worn by the entity */
    getChestplate(): ItemStack
    /** Gets the chance of the chest plate being dropped upon this creature'sdeath. */
    getChestplateDropChance(): number
    /** Gets a copy of the helmet currently being worn by the entity */
    getHelmet(): ItemStack
    /** Gets the chance of the helmet being dropped upon this creature's death. */
    getHelmetDropChance(): number
    /** Get the entity this EntityEquipment belongs to */
    getHolder(): Entity
    /** Deprecated. entities can duel wield now use the methods for thespecific hand instead */
    getItemInHand(): ItemStack
    /** Deprecated. entities can duel wield now use the methods for the specifichand instead */
    getItemInHandDropChance(): number
    /** Gets a copy of the item the entity is currently holdingin their main hand. */
    getItemInMainHand(): ItemStack
    /** Gets the chance of the main hand item being dropped upon this creature'sdeath. */
    getItemInMainHandDropChance(): number
    /** Gets a copy of the item the entity is currently holdingin their off hand. */
    getItemInOffHand(): ItemStack
    /** Gets the chance of the off hand item being dropped upon this creature'sdeath. */
    getItemInOffHandDropChance(): number
    /** Gets a copy of the leggings currently being worn by the entity */
    getLeggings(): ItemStack
    /** Gets the chance of the leggings being dropped upon this creature'sdeath. */
    getLeggingsDropChance(): number
    /** Sets the entities armor to the provided array of ItemStacks */
    setArmorContents(items: ItemStack[]): void
    /** Sets the boots worn by the entity */
    setBoots(boots: ItemStack): void
    /** Sets the chance of the boots being dropped upon this creature's death. */
    setBootsDropChance(chance: number): void
    /** Sets the chest plate worn by the entity */
    setChestplate(chestplate: ItemStack): void
    /** Sets the chance of the chest plate being dropped upon this creature'sdeath. */
    setChestplateDropChance(chance: number): void
    /** Sets the helmet worn by the entity */
    setHelmet(helmet: ItemStack): void
    /** Sets the chance of the helmet being dropped upon this creature's death. */
    setHelmetDropChance(chance: number): void
    /** Deprecated. entities can duel wield now use the methods for thespecific hand instead */
    setItemInHand(stack: ItemStack): void
    /** Deprecated. entities can duel wield now use the methods for the specifichand instead */
    setItemInHandDropChance(chance: number): void
    /** Sets the item the entity is holding in their main hand. */
    setItemInMainHand(item: ItemStack): void
    /** Sets the chance of the item this creature is currently holding in theirmain hand being dropped upon this creature's death. */
    setItemInMainHandDropChance(chance: number): void
    /** Sets the item the entity is holding in their off hand. */
    setItemInOffHand(item: ItemStack): void
    /** Sets the chance of the off hand item being dropped upon this creature'sdeath. */
    setItemInOffHandDropChance(chance: number): void
    /** Sets the leggings worn by the entity */
    setLeggings(leggings: ItemStack): void
    /** Sets the chance of the leggings being dropped upon this creature'sdeath. */
    setLeggingsDropChance(chance: number): void
}

interface Java {
    type(type: 'org.bukkit.FluidCollisionMode'): FluidCollisionModes
}

interface FluidCollisionModes {
    /** Collide with all fluids. */
    ALWAYS: FluidCollisionMode
    /** Ignore fluids. */
    NEVER: FluidCollisionMode
    /** Only collide with source fluid blocks. */
    SOURCE_ONLY: FluidCollisionMode
}

interface FluidCollisionMode {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): FluidCollisionMode
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): FluidCollisionMode[]
}

interface ProjectileSource {
    /** Launches a Projectile from the ProjectileSource. */
    launchProjectile<T extends Projectile>(projectile: T): T
    /** Launches a Projectile from the ProjectileSource with aninitial velocity. */
    launchProjectile<T extends Projectile>(projectile: T, velocity: Vector): T
}

interface Java {
    type(type: 'org.bukkit.util.RayTraceResult'): RayTraceResultConstructor
}

interface RayTraceResultConstructor {
    new (hitPosition: Vector): RayTraceResult
    new (hitPosition: Vector, hitBlockFace: BlockFace): RayTraceResult
    new (
        hitPosition: Vector,
        hitBlock: Block,
        hitBlockFace: BlockFace
    ): RayTraceResult
    new (hitPosition: Vector, hitEntity: Entity): RayTraceResult
    new (
        hitPosition: Vector,
        hitEntity: Entity,
        hitBlockFace: BlockFace
    ): RayTraceResult
}

interface RayTraceResult extends Object {
    /**   */
    equals(obj: Object): boolean
    /** Gets the hit block. */
    getHitBlock(): Block
    /** Gets the hit block face. */
    getHitBlockFace(): BlockFace
    /** Gets the hit entity. */
    getHitEntity(): Entity
    /** Gets the exact position of the hit. */
    getHitPosition(): Vector
    /**   */
    hashCode(): number
    /**   */
    toString(): string
}

interface MemoryKey<T> extends Keyed {
    /** Returns a MemoryKey by a NamespacedKey. */
    getByKey(namespacedKey: NamespacedKey): MemoryKey<T>
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Gets the class of values associated with this memory. */
    getMemoryClass(): T
    /** Returns the set of all MemoryKeys. */
    values(): MemoryKey<T>[]
}

interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    /** Adds the given PotionEffect to the living entity. */
    addPotionEffect(effect: PotionEffect): boolean
    /** Adds the given PotionEffect to the living entity. */
    addPotionEffect(effect: PotionEffect, force: boolean): boolean
    /** Attempts to add all of the given PotionEffect to the livingentity. */
    addPotionEffects(effects: PotionEffect[]): boolean
    /** Returns all currently active PotionEffects on the livingentity. */
    getActivePotionEffects(): PotionEffect[]
    /** Gets if the living entity can pick up items. */
    getCanPickupItems(): boolean
    /** Gets the inventory with the equipment worn by the living entity. */
    getEquipment(): EntityEquipment
    /** Gets the height of the living entity's eyes above its Location. */
    getEyeHeight(): number
    /** Gets the height of the living entity's eyes above its Location. */
    getEyeHeight(ignorePose: boolean): number
    /** Get a Location detailing the current eye position of the living entity. */
    getEyeLocation(): Location
    /** Gets the player identified as the killer of the living entity. */
    getKiller(): Player
    /** Returns the living entity's last damage taken in the current no damageticks time. */
    getLastDamage(): number
    /** Gets the last two blocks along the living entity's line of sight. */
    getLastTwoTargetBlocks(
        transparent: Material[],
        maxDistance: number
    ): Block[]
    /** Gets the entity that is currently leading this entity. */
    getLeashHolder(): Entity
    /** Gets all blocks along the living entity's line of sight. */
    getLineOfSight(transparent: Material[], maxDistance: number): Block[]
    /** Returns the maximum amount of air the living entity can have, in ticks. */
    getMaximumAir(): number
    /** Returns the living entity's current maximum no damage ticks. */
    getMaximumNoDamageTicks(): number
    /** Returns the value of the memory specified. */
    getMemory<T>(memoryKey: MemoryKey<T>): T
    /** Returns the living entity's current no damage ticks. */
    getNoDamageTicks(): number
    /** Returns the active PotionEffect of the specified type. */
    getPotionEffect(type: PotionEffectType): PotionEffect
    /** Returns the amount of air that the living entity has remaining, inticks. */
    getRemainingAir(): number
    /** Returns if the living entity despawns when away from players or not. */
    getRemoveWhenFarAway(): boolean
    /** Gets the block that the living entity has targeted. */
    getTargetBlock(transparent: Material[], maxDistance: number): Block
    /** Gets the block that the living entity has targeted. */
    getTargetBlockExact(maxDistance: number): Block
    /** Gets the block that the living entity has targeted. */
    getTargetBlockExact(
        maxDistance: number,
        fluidCollisionMode: FluidCollisionMode
    ): Block
    /** Checks whether an entity has AI. */
    hasAI(): boolean
    /** Checks whether the living entity has block line of sight to another. */
    hasLineOfSight(other: Entity): boolean
    /** Returns whether the living entity already has an existing effect ofthe given PotionEffectType applied to it. */
    hasPotionEffect(type: PotionEffectType): boolean
    /** Gets if this entity is subject to collisions with other entities. */
    isCollidable(): boolean
    /** Checks to see if an entity is gliding, such as using an Elytra. */
    isGliding(): boolean
    /** Returns whether the entity is currently leashed. */
    isLeashed(): boolean
    /** Checks to see if an entity is currently using the Riptide enchantment. */
    isRiptiding(): boolean
    /** Returns whether this entity is slumbering. */
    isSleeping(): boolean
    /** Checks to see if an entity is swimming. */
    isSwimming(): boolean
    /** Performs a ray trace that provides information on the targeted block. */
    rayTraceBlocks(maxDistance: number): RayTraceResult
    /** Performs a ray trace that provides information on the targeted block. */
    rayTraceBlocks(
        maxDistance: number,
        fluidCollisionMode: FluidCollisionMode
    ): RayTraceResult
    /** Removes any effects present of the given PotionEffectType. */
    removePotionEffect(type: PotionEffectType): void
    /** Sets whether an entity will have AI. */
    setAI(ai: boolean): void
    /** Sets whether or not the living entity can pick up items. */
    setCanPickupItems(pickup: boolean): void
    /** Set if this entity will be subject to collisions other entities. */
    setCollidable(collidable: boolean): void
    /** Makes entity start or stop gliding. */
    setGliding(gliding: boolean): void
    /** Sets the damage dealt within the current no damage ticks time period. */
    setLastDamage(damage: number): void
    /** Sets the leash on this entity to be held by the supplied entity. */
    setLeashHolder(holder: Entity): boolean
    /** Sets the maximum amount of air the living entity can have, in ticks. */
    setMaximumAir(ticks: number): void
    /** Sets the living entity's current maximum no damage ticks. */
    setMaximumNoDamageTicks(ticks: number): void
    /** Sets the value of the memory specified. */
    setMemory<T>(memoryKey: MemoryKey<T>, memoryValue: T): void
    /** Sets the living entity's current no damage ticks. */
    setNoDamageTicks(ticks: number): void
    /** Sets the amount of air that the living entity has remaining, in ticks. */
    setRemainingAir(ticks: number): void
    /** Sets whether or not the living entity despawns when away from playersor not. */
    setRemoveWhenFarAway(remove: boolean): void
    /** Makes entity start or stop swimming. */
    setSwimming(swimming: boolean): void
}

interface Damageable extends Entity {
    /** Deals the given amount of damage to this entity. */
    damage(amount: number): void
    /** Deals the given amount of damage to this entity, from a specifiedentity. */
    damage(amount: number, source: Entity): void
    /** Gets the entity's health from 0 to getMaxHealth(), where 0 is dead. */
    getHealth(): number
    health: number
    /** Deprecated. use Attribute.GENERIC_MAX_HEALTH. */
    getMaxHealth(): number
    /** Deprecated. use Attribute.GENERIC_MAX_HEALTH. */
    resetMaxHealth(): void
    /** Sets the entity's health from 0 to getMaxHealth(), where 0 isdead. */
    setHealth(health: number): void
    /** Deprecated. use Attribute.GENERIC_MAX_HEALTH. */
    setMaxHealth(health: number): void
}

interface BossBar {
    /** Add an optional flag to this boss bar */
    addFlag(flag: BarFlag): void
    /** Adds the player to this boss bar causing it to display on their screen. */
    addPlayer(player: Player): void
    /** Returns the color of this boss bar */
    getColor(): BarColor
    /** Returns all players viewing this boss bar */
    getPlayers(): Player[]
    /** Returns the progress of the bar between 0.0 and 1.0 */
    getProgress(): number
    /** Returns the style of this boss bar */
    getStyle(): BarStyle
    /** Returns the title of this boss bar */
    getTitle(): string
    /** Returns whether this boss bar as the passed flag set */
    hasFlag(flag: BarFlag): boolean
    /** Deprecated. setVisible(boolean) */
    hide(): void
    /** Return if the boss bar is displayed to attached players. */
    isVisible(): boolean
    /** Removes all players from this boss bar */
    removeAll(): void
    /** Remove an existing flag on this boss bar */
    removeFlag(flag: BarFlag): void
    /** Removes the player from this boss bar causing it to be removed from theirscreen. */
    removePlayer(player: Player): void
    /** Sets the color of this boss bar. */
    setColor(color: BarColor): void
    /** Sets the progress of the bar. */
    setProgress(progress: number): void
    /** Sets the bar style of this boss bar */
    setStyle(style: BarStyle): void
    /** Sets the title of this boss bar */
    setTitle(title: string): void
    /** Set if the boss bar is displayed to attached players. */
    setVisible(visible: boolean): void
    /** Deprecated. setVisible(boolean) */
    show(): void
}

interface StructureType extends Object {
    /** Buried treasure consists of a single chest buried in the beach sand orgravel, with random loot in it.*/
    BURIED_TREASURE: StructureType
    /** Desert pyramids (also known as desert temples) are found in deserts.*/
    DESERT_PYRAMID: StructureType
    /** End Cities are tall castle-like structures that generate in the outerisland of the End dimension.*/
    END_CITY: StructureType
    /** Igloos are structures that generate in snowy biomes.*/
    IGLOO: StructureType
    /** Jungle pyramids (also known as jungle temples) are found in jungles.*/
    JUNGLE_PYRAMID: StructureType
    /** Mineshafts are underground structures which consist of branching miningtunnels with wooden supports and broken rails.*/
    MINESHAFT: StructureType
    /** Nether fortresses are very large complexes that mainly consist ofnetherbricks.*/
    NETHER_FORTRESS: StructureType
    /** Ocean monuments are underwater structures.*/
    OCEAN_MONUMENT: StructureType
    /** Ocean ruins are clusters of many different blocks that generateunderwater in ocean biomes (as well as on the surface of beaches).*/
    OCEAN_RUIN: StructureType
    /** Pillager outposts may contain crossbows.*/
    PILLAGER_OUTPOST: StructureType
    /** Shipwrecks are structures that generate on the floor of oceans orbeaches.*/
    SHIPWRECK: StructureType
    /** Strongholds are underground structures that consist of many rooms,libraries, and an end portal room.*/
    STRONGHOLD: StructureType
    /** Swamp huts (also known as witch huts) generate in swamp biomes and havethe ability to spawn witches.*/
    SWAMP_HUT: StructureType
    /** Villages are naturally generating structures that form above ground.*/
    VILLAGE: StructureType
    /** Mansions (also known as woodland mansions) are massive house structuresthat generate in dark forests, containing a wide variety of rooms.*/
    WOODLAND_MANSION: StructureType

    /**   */
    equals(other: Object): boolean
    /** Get the MapCursorType that this structure can use on maps. */
    getMapIcon(): MapCursorType
    /** Get the name of this structure. */
    getName(): string
    /** Get all registered StructureTypes. */
    getStructureTypes(): { [index: string]: StructureType }
    /**   */
    hashCode(): number
    /**   */
    toString(): string
}

interface Java {
    type(type: 'org.bukkit.map.MapCursor.Type'): MapCursorTypes
}

interface MapCursorTypes {
    /**   */
    BANNER_BLACK: MapCursorType
    /**   */
    BANNER_BLUE: MapCursorType
    /**   */
    BANNER_BROWN: MapCursorType
    /**   */
    BANNER_CYAN: MapCursorType
    /**   */
    BANNER_GRAY: MapCursorType
    /**   */
    BANNER_GREEN: MapCursorType
    /**   */
    BANNER_LIGHT_BLUE: MapCursorType
    /**   */
    BANNER_LIGHT_GRAY: MapCursorType
    /**   */
    BANNER_LIME: MapCursorType
    /**   */
    BANNER_MAGENTA: MapCursorType
    /**   */
    BANNER_ORANGE: MapCursorType
    /**   */
    BANNER_PINK: MapCursorType
    /**   */
    BANNER_PURPLE: MapCursorType
    /**   */
    BANNER_RED: MapCursorType
    /**   */
    BANNER_WHITE: MapCursorType
    /**   */
    BANNER_YELLOW: MapCursorType
    /**   */
    BLUE_POINTER: MapCursorType
    /**   */
    GREEN_POINTER: MapCursorType
    /**   */
    MANSION: MapCursorType
    /**   */
    RED_MARKER: MapCursorType
    /**   */
    RED_POINTER: MapCursorType
    /**   */
    RED_X: MapCursorType
    /**   */
    SMALL_WHITE_CIRCLE: MapCursorType
    /**   */
    TEMPLE: MapCursorType
    /**   */
    WHITE_CIRCLE: MapCursorType
    /**   */
    WHITE_CROSS: MapCursorType
    /**   */
    WHITE_POINTER: MapCursorType
}

interface MapCursorType {
    /** Deprecated. Magic value */
    byValue(value: number): MapCursorType
    /** Deprecated. Magic value */
    getValue(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): MapCursorType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): MapCursorType[]
}

interface ChunkGeneratorChunkData {
    /** Get the type and data of the block at x, y, z. */
    getBlockData(x: number, y: number, z: number): BlockData
    /** Deprecated. Uses magic values */
    getData(x: number, y: number, z: number): number
    /** Get the maximum height for the chunk. */
    getMaxHeight(): number
    /** Get the type of the block at x, y, z. */
    getType(x: number, y: number, z: number): Material
    /** Get the type and data of the block at x, y, z. */
    getTypeAndData(x: number, y: number, z: number): MaterialData
    /** Set the block at x,y,z in the chunk data to material. */
    setBlock(x: number, y: number, z: number, blockData: BlockData): void
    /** Set the block at x,y,z in the chunk data to material. */
    setBlock(x: number, y: number, z: number, material: Material): void
    /** Set the block at x,y,z in the chunk data to material. */
    setBlock(x: number, y: number, z: number, material: MaterialData): void
    /** Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax,yMax, zMax (exclusive) to material. */
    setRegion(
        xMin: number,
        yMin: number,
        zMin: number,
        xMax: number,
        yMax: number,
        zMax: number,
        blockData: BlockData
    ): void
    /** Set a region of this chunk from xMin, yMin, zMin (inclusive)to xMax, yMax, zMax (exclusive) to material. */
    setRegion(
        xMin: number,
        yMin: number,
        zMin: number,
        xMax: number,
        yMax: number,
        zMax: number,
        material: Material
    ): void
    /** Set a region of this chunk from xMin, yMin, zMin (inclusive)to xMax, yMax, zMax (exclusive) to material. */
    setRegion(
        xMin: number,
        yMin: number,
        zMin: number,
        xMax: number,
        yMax: number,
        zMax: number,
        material: MaterialData
    ): void
}

interface Java {
    type(type: 'org.bukkit.WorldCreator'): WorldCreatorConstructor
}

interface WorldCreatorConstructor {
    new (name: string): WorldCreator
}

interface Java {
    type(type: 'org.bukkit.World.Environment'): WorldEnvironments
}

interface WorldEnvironments {
    /** Represents a nether based map ("hell") */
    NETHER: WorldEnvironment
    /** Represents the "normal"/"surface world" map */
    NORMAL: WorldEnvironment
    /** Represents the "end" map */
    THE_END: WorldEnvironment
}

interface WorldEnvironment {
    /** Deprecated. Magic value */
    getEnvironment(id: number): WorldEnvironment
    /** Deprecated. Magic value */
    getId(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): WorldEnvironment
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): WorldEnvironment[]
}

interface ChunkGeneratorChunkData {
    /** Get the type and data of the block at x, y, z. */
    getBlockData(x: number, y: number, z: number): BlockData
    /** Deprecated. Uses magic values */
    getData(x: number, y: number, z: number): number
    /** Get the maximum height for the chunk. */
    getMaxHeight(): number
    /** Get the type of the block at x, y, z. */
    getType(x: number, y: number, z: number): Material
    /** Get the type and data of the block at x, y, z. */
    getTypeAndData(x: number, y: number, z: number): MaterialData
    /** Set the block at x,y,z in the chunk data to material. */
    setBlock(x: number, y: number, z: number, blockData: BlockData): void
    /** Set the block at x,y,z in the chunk data to material. */
    setBlock(x: number, y: number, z: number, material: Material): void
    /** Set the block at x,y,z in the chunk data to material. */
    setBlock(x: number, y: number, z: number, material: MaterialData): void
    /** Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax,yMax, zMax (exclusive) to material. */
    setRegion(
        xMin: number,
        yMin: number,
        zMin: number,
        xMax: number,
        yMax: number,
        zMax: number,
        blockData: BlockData
    ): void
    /** Set a region of this chunk from xMin, yMin, zMin (inclusive)to xMax, yMax, zMax (exclusive) to material. */
    setRegion(
        xMin: number,
        yMin: number,
        zMin: number,
        xMax: number,
        yMax: number,
        zMax: number,
        material: Material
    ): void
    /** Set a region of this chunk from xMin, yMin, zMin (inclusive)to xMax, yMax, zMax (exclusive) to material. */
    setRegion(
        xMin: number,
        yMin: number,
        zMin: number,
        xMax: number,
        yMax: number,
        zMax: number,
        material: MaterialData
    ): void
}
interface Java {
    type(type: 'org.bukkit.generator.ChunkGenerator'): ChunkGeneratorConstructor
}

interface Java {
    type(type: 'org.bukkit.generator.BlockPopulator'): BlockPopulatorConstructor
}

interface BlockPopulatorConstructor {
    new (): BlockPopulator
}

interface BlockPopulator extends Object {
    /** Populates an area of blocks at or around the given chunk. */
    populate(world: World, random: Random, source: Chunk): void
}

interface ChunkGeneratorConstructor {
    new (): ChunkGenerator
}

interface Java {
    type(type: 'org.bukkit.block.Biome'): Biomes
}

interface Biomes {
    /**   */
    BADLANDS: Biome
    /**   */
    BADLANDS_PLATEAU: Biome
    /**   */
    BAMBOO_JUNGLE: Biome
    /**   */
    BAMBOO_JUNGLE_HILLS: Biome
    /**   */
    BEACH: Biome
    /**   */
    BIRCH_FOREST: Biome
    /**   */
    BIRCH_FOREST_HILLS: Biome
    /**   */
    COLD_OCEAN: Biome
    /**   */
    DARK_FOREST: Biome
    /**   */
    DARK_FOREST_HILLS: Biome
    /**   */
    DEEP_COLD_OCEAN: Biome
    /**   */
    DEEP_FROZEN_OCEAN: Biome
    /**   */
    DEEP_LUKEWARM_OCEAN: Biome
    /**   */
    DEEP_OCEAN: Biome
    /**   */
    DEEP_WARM_OCEAN: Biome
    /**   */
    DESERT: Biome
    /**   */
    DESERT_HILLS: Biome
    /**   */
    DESERT_LAKES: Biome
    /**   */
    END_BARRENS: Biome
    /**   */
    END_HIGHLANDS: Biome
    /**   */
    END_MIDLANDS: Biome
    /**   */
    ERODED_BADLANDS: Biome
    /**   */
    FLOWER_FOREST: Biome
    /**   */
    FOREST: Biome
    /**   */
    FROZEN_OCEAN: Biome
    /**   */
    FROZEN_RIVER: Biome
    /**   */
    GIANT_SPRUCE_TAIGA: Biome
    /**   */
    GIANT_SPRUCE_TAIGA_HILLS: Biome
    /**   */
    GIANT_TREE_TAIGA: Biome
    /**   */
    GIANT_TREE_TAIGA_HILLS: Biome
    /**   */
    GRAVELLY_MOUNTAINS: Biome
    /**   */
    ICE_SPIKES: Biome
    /**   */
    JUNGLE: Biome
    /**   */
    JUNGLE_EDGE: Biome
    /**   */
    JUNGLE_HILLS: Biome
    /**   */
    LUKEWARM_OCEAN: Biome
    /**   */
    MODIFIED_BADLANDS_PLATEAU: Biome
    /**   */
    MODIFIED_GRAVELLY_MOUNTAINS: Biome
    /**   */
    MODIFIED_JUNGLE: Biome
    /**   */
    MODIFIED_JUNGLE_EDGE: Biome
    /**   */
    MODIFIED_WOODED_BADLANDS_PLATEAU: Biome
    /**   */
    MOUNTAIN_EDGE: Biome
    /**   */
    MOUNTAINS: Biome
    /**   */
    MUSHROOM_FIELD_SHORE: Biome
    /**   */
    MUSHROOM_FIELDS: Biome
    /**   */
    NETHER: Biome
    /**   */
    OCEAN: Biome
    /**   */
    PLAINS: Biome
    /**   */
    RIVER: Biome
    /**   */
    SAVANNA: Biome
    /**   */
    SAVANNA_PLATEAU: Biome
    /**   */
    SHATTERED_SAVANNA: Biome
    /**   */
    SHATTERED_SAVANNA_PLATEAU: Biome
    /**   */
    SMALL_END_ISLANDS: Biome
    /**   */
    SNOWY_BEACH: Biome
    /**   */
    SNOWY_MOUNTAINS: Biome
    /**   */
    SNOWY_TAIGA: Biome
    /**   */
    SNOWY_TAIGA_HILLS: Biome
    /**   */
    SNOWY_TAIGA_MOUNTAINS: Biome
    /**   */
    SNOWY_TUNDRA: Biome
    /**   */
    STONE_SHORE: Biome
    /**   */
    SUNFLOWER_PLAINS: Biome
    /**   */
    SWAMP: Biome
    /**   */
    SWAMP_HILLS: Biome
    /**   */
    TAIGA: Biome
    /**   */
    TAIGA_HILLS: Biome
    /**   */
    TAIGA_MOUNTAINS: Biome
    /**   */
    TALL_BIRCH_FOREST: Biome
    /**   */
    TALL_BIRCH_HILLS: Biome
    /**   */
    THE_END: Biome
    /**   */
    THE_VOID: Biome
    /**   */
    WARM_OCEAN: Biome
    /**   */
    WOODED_BADLANDS_PLATEAU: Biome
    /**   */
    WOODED_HILLS: Biome
    /**   */
    WOODED_MOUNTAINS: Biome
}

interface Biome extends Keyed {
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): Biome
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): Biome[]
}

interface ChunkGeneratorBiomeGrid {
    /** Get biome at x, z within chunk being generated */
    getBiome(x: number, z: number): Biome
    /** Set biome at x, z within chunk being generated */
    setBiome(x: number, z: number, bio: Biome): void
}

interface ChunkGenerator extends Object {
    /** Tests if the specified location is valid for a natural spawn position */
    canSpawn(world: World, x: number, z: number): boolean
    /** Create a ChunkData for a world. */
    createChunkData(world: World): ChunkGeneratorChunkData
    /** Shapes the chunk for the given coordinates. */
    generateChunkData(
        world: World,
        random: Random,
        x: number,
        z: number,
        biome: ChunkGeneratorBiomeGrid
    ): ChunkGeneratorChunkData
    /** Gets a list of default BlockPopulators to apply to a givenworld */
    getDefaultPopulators(world: World): BlockPopulator[]
    /** Gets a fixed spawn location to use for a given world. */
    getFixedSpawnLocation(world: World, random: Random): Location
    /** Gets if this ChunkGenerator is parallel capable. */
    isParallelCapable(): boolean
}

interface WorldCreator extends Object {
    /** Copies the options from the specified world */
    copy(world: World): WorldCreator
    /** Copies the options from the specified WorldCreator */
    copy(creator: WorldCreator): WorldCreator
    /** Creates a world with the specified options. */
    createWorld(): World
    /** Gets the environment that will be used to create or load the world */
    environment(): WorldEnvironment
    /** Sets the environment that will be used to create or load the world */
    environment(env: WorldEnvironment): WorldCreator
    /** Gets whether or not structures will be generated in the world. */
    generateStructures(): boolean
    /** Sets whether or not worlds created or loaded with this creator willhave structures. */
    generateStructures(generate: boolean): WorldCreator
    /** Gets the generator that will be used to create or load the world. */
    generator(): ChunkGenerator
    /** Sets the generator that will be used to create or load the world. */
    generator(generator: string): WorldCreator
    /** Sets the generator that will be used to create or load the world. */
    generator(generator: string, output: CommandSender): WorldCreator
    /** Sets the generator that will be used to create or load the world. */
    generator(generator: ChunkGenerator): WorldCreator
    /** Gets the generator settings of the world that will be created or loaded */
    generatorSettings(): string
    /** Sets the generator settings of the world that will be created or loaded */
    generatorSettings(generatorSettings: string): WorldCreator
    /** Attempts to get the ChunkGenerator with the given name. */
    getGeneratorForName(
        world: string,
        name: string,
        output: CommandSender
    ): ChunkGenerator
    /** Gets the name of the world that is to be loaded or created. */
    name(): string
    /** Creates a new WorldCreator for the given world name */
    name(name: string): WorldCreator
    /** Gets the seed that will be used to create this world */
    seed(): number
    /** Sets the seed that will be used to create this world */
    seed(seed: number): WorldCreator
    /** Gets the type of the world that will be created or loaded */
    type(): WorldType
    /** Sets the type of the world that will be created or loaded */
    type(type: WorldType): WorldCreator
}

interface Java {
    type(type: 'org.bukkit.WorldType'): WorldTypes
}

interface WorldTypes {
    /**   */
    AMPLIFIED: WorldType
    /**   */
    BUFFET: WorldType
    /**   */
    CUSTOMIZED: WorldType
    /**   */
    FLAT: WorldType
    /**   */
    LARGE_BIOMES: WorldType
    /**   */
    NORMAL: WorldType
    /**   */
    VERSION_1_1: WorldType
}

interface WorldType {
    /** Gets a WorldType by its name */
    getByName(name: string): WorldType
    /** Gets the name of this WorldType */
    getName(): string
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): WorldType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): WorldType[]
}

interface BanEntry {
    /** Gets the date this ban entry was created. */
    getCreated(): Date
    /** Gets the date this ban expires on, or null for no defined end date. */
    getExpiration(): Date
    /** Gets the reason for this ban. */
    getReason(): string
    /** Gets the source of this ban. */
    getSource(): string
    /** Gets the target involved. */
    getTarget(): string
    /** Saves the ban entry, overwriting any previous data in the ban list. */
    save(): void
    /** Sets the date this ban entry was created. */
    setCreated(created: Date): void
    /** Sets the date this ban expires on. */
    setExpiration(expiration: Date): void
    /** Sets the reason for this ban. */
    setReason(reason: string): void
    /** Sets the source of this ban. */
    setSource(source: string): void
}

interface BanList {
    /** Adds a ban to the this list. */
    addBan(
        target: string,
        reason: string,
        expires: Date,
        source: string
    ): BanEntry
    /** Gets a set containing every BanEntry in this list. */
    getBanEntries(): BanEntry[]
    /** Gets a BanEntry by target. */
    getBanEntry(target: string): BanEntry
    /** Gets if a BanEntry exists for the target, indicating an activeban status. */
    isBanned(target: string): boolean
    /** Removes the specified target from this list, therefore indicating a"not banned" status. */
    pardon(target: string): void
}

interface Java {
    type(type: 'org.bukkit.BanList.Type'): BanListTypes
}

interface BanListTypes {
    /** Banned player IP addresses */
    IP: BanListType
    /** Banned player names */
    NAME: BanListType
}

interface BanListType {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): BanListType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): BanListType[]
}

interface AnimalTamer {}

interface OfflinePlayer extends ServerOperator, AnimalTamer {
    /** Gets the Location where the player will spawn at their bed, null ifthey have not slept in one or their current bed spawn is invalid. */
    getBedSpawnLocation(): Location
    /** Gets the first date and time that this player was witnessed on thisserver. */
    getFirstPlayed(): number
    /** Gets the last date and time that this player was witnessed on thisserver. */
    getLastPlayed(): number
    /** Returns the name of this player */
    getName(): string
    /** Gets a Player object that this represents, if there is one */
    getPlayer(): Player
    /** Returns the UUID of this player */
    getUniqueId(): UUID
    /** Checks if this player has played on this server before. */
    hasPlayedBefore(): boolean
    /** Checks if this player is banned or not */
    isBanned(): boolean
    /** Checks if this player is currently online */
    isOnline(): boolean
    /** Checks if this player is whitelisted or not */
    isWhitelisted(): boolean
    /** Sets if this player is whitelisted or not */
    setWhitelisted(value: boolean): void
}

interface ConsoleCommandSender extends CommandSender, Conversable {}

interface Java {
    type(
        type: 'org.bukkit.conversations.ConversationContext'
    ): ConversationContextConstructor
}

interface ConversationContextConstructor {
    new (
        plugin: Plugin,
        forWhom: Conversable,
        initialSessionData: { [index: string]: Object }
    ): ConversationContext
}

interface ConversationContext extends Object {
    /** Gets the underlying sessionData map. */
    getAllSessionData(): { [index: string]: Object }
    /** Gets the subject of the conversation. */
    getForWhom(): Conversable
    /** Gets the plugin that owns this conversation. */
    getPlugin(): Plugin
    /** Gets session data shared between all Prompt invocations. */
    getSessionData(key: Object): Object
    /** Sets session data shared between all Prompt invocations. */
    setSessionData(key: Object, value: Object): void
}

interface Prompt extends Cloneable<Prompt> {
    /** A convenience constant for indicating the end of a conversation.*/
    END_OF_CONVERSATION: Prompt
    /** Accepts and processes input from the user. */
    acceptInput(context: ConversationContext, input: string): Prompt
    /** Checks to see if this prompt implementation should wait for user inputor immediately display the next prompt. */
    blocksForInput(context: ConversationContext): boolean
    /** Gets the text to display to the user when this prompt is firstpresented. */
    getPromptText(context: ConversationContext): string
}

interface Java {
    type(
        type: 'org.bukkit.conversations.ConversationAbandonedEvent'
    ): ConversationAbandonedEventConstructor
}

interface ConversationAbandonedEventConstructor {
    new (conversation: Conversation): ConversationAbandonedEvent
    new (
        conversation: Conversation,
        canceller: ConversationCanceller
    ): ConversationAbandonedEvent
}

interface EventObject {
    source: any
}

interface ConversationCanceller extends Cloneable<ConversationCanceller> {
    /** Cancels a conversation based on user input. */
    cancelBasedOnInput(context: ConversationContext, input: string): boolean
    /** Allows the ConversationFactory to duplicate thisConversationCanceller when creating a new Conversation. */
    clone(): ConversationCanceller
    /** Sets the conversation this ConversationCanceller can optionally cancel. */
    setConversation(conversation: Conversation): void
}

interface ConversationAbandonedEvent extends EventObject {
    /** Gets the object that caused the conversation to be abandoned. */
    getCanceller(): ConversationCanceller
    /** Gets the abandoned conversation's conversation context. */
    getContext(): ConversationContext
    /** Indicates how the conversation was abandoned - naturally as part of theprompt chain or prematurely via a ConversationCanceller. */
    gracefulExit(): boolean
}

interface EventListener {}
interface ConversationAbandonedListener extends EventListener {
    /** Called whenever a Conversation is abandoned. */
    conversationAbandoned(abandonedEvent: ConversationAbandonedEvent): void
}

interface ConversationPrefix {
    /** Gets the prefix to use before each message to the player. */
    getPrefix(context: ConversationContext): string
}

interface Java {
    type(type: 'org.bukkit.conversations.Conversation'): ConversationConstructor
}

interface ConversationConstructor {
    new (
        plugin: Plugin,
        forWhom: Conversable,
        firstPrompt: Prompt
    ): Conversation
    new (
        plugin: Plugin,
        forWhom: Conversable,
        firstPrompt: Prompt,
        initialSessionData: { [index: string]: Object }
    ): Conversation
}

interface Conversation extends Object {
    /**  */
    abandonedListeners: ConversationAbandonedListener[]
    /**  */
    cancellers: ConversationCanceller[]
    /**  */
    context: ConversationContext
    /**  */
    currentPrompt: Prompt
    /**  */
    localEchoEnabled: boolean
    /**  */
    modal: boolean
    /**  */
    prefix: ConversationPrefix

    /** Abandons and resets the current conversation. */
    abandon(): void
    /** Abandons and resets the current conversation. */
    abandon(details: ConversationAbandonedEvent): void
    /** Passes player input into the current prompt. */
    acceptInput(input: string): void
    /** Adds a ConversationAbandonedListener. */
    addConversationAbandonedListener(
        listener: ConversationAbandonedListener
    ): void
    /** Displays the first prompt of this conversation and begins redirectingthe user's chat responses. */
    begin(): void
    /** Gets the list of ConversationCancellers */
    getCancellers(): ConversationCanceller[]
    /** Returns the Conversation's ConversationContext. */
    getContext(): ConversationContext
    /** Gets the entity for whom this conversation is mediating. */
    getForWhom(): Conversable
    /** Gets the ConversationPrefix that prepends all output from thisconversation. */
    getPrefix(): ConversationPrefix
    /** Returns Returns the current state of the conversation. */
    getState(): ConversationConversationState
    /** Gets the status of local echo for this conversation. */
    isLocalEchoEnabled(): boolean
    /** Gets the modality of this conversation. */
    isModal(): boolean
    /** Displays the next user prompt and abandons the conversation if the nextprompt is null. */
    outputNextPrompt(): void
    /** Removes a ConversationAbandonedListener. */
    removeConversationAbandonedListener(
        listener: ConversationAbandonedListener
    ): void
    /** Sets the status of local echo for this conversation. */
    setLocalEchoEnabled(localEchoEnabled: boolean): void
}

interface Java {
    type(
        type: 'org.bukkit.conversations.Conversation.ConversationState'
    ): ConversationConversationStates
}

interface ConversationConversationStates {
    /**   */
    ABANDONED: ConversationConversationState
    /**   */
    STARTED: ConversationConversationState
    /**   */
    UNSTARTED: ConversationConversationState
}

interface ConversationConversationState {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): ConversationConversationState
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): ConversationConversationState[]
}
interface Conversable {
    /** Abandons an active conversation. */
    abandonConversation(conversation: Conversation): void
    /** Abandons an active conversation. */
    abandonConversation(
        conversation: Conversation,
        details: ConversationAbandonedEvent
    ): void
    /** Accepts input into the active conversation. */
    acceptConversationInput(input: string): void
    /** Enters into a dialog with a Conversation object. */
    beginConversation(conversation: Conversation): boolean
    /** Tests to see of a Conversable object is actively engaged in aconversation. */
    isConversing(): boolean
    /** Sends this sender a message raw */
    sendRawMessage(message: string): void
}

interface Java {
    type(type: 'org.bukkit.help.HelpTopic'): HelpTopicConstructor
}

interface HelpTopicConstructor {
    new (): HelpTopic
}

interface HelpTopic extends Object {
    /**  */
    amendedPermission: string
    /**  */
    fullText: string
    /**  */
    name: string
    /**  */
    shortText: string
    /** Allows the server administrator to override the permission required tosee a help topic. */
    amendCanSee(amendedPermission: string): void
    /** Allows the server admin (or another plugin) to add or replace thecontents of a help topic. */
    amendTopic(amendedShortText: string, amendedFullText: string): void
    /** Developers implementing their own custom HelpTopic implementations canuse this utility method to ensure their implementations comply with theexpected behavior of the amendTopic(String, String)method. */
    applyAmendment(baseText: string, amendment: string): string
    /** Determines if a Player is allowed to see this help topic. */
    canSee(player: CommandSender): boolean
    /** Returns the full description of this help topic that is displayed whenthe user requests this topic's details. */
    getFullText(forWho: CommandSender): string
    /** Returns the name of this help topic. */
    getName(): string
    /** Returns a brief description that will be displayed in the topic index. */
    getShortText(): string
}

interface Java {
    type(type: 'org.bukkit.command.Command'): CommandConstructor
}

interface CommandConstructor {
    new (name: string): Command
    new (
        name: string,
        description: string,
        usageMessage: string,
        aliases: string[]
    ): Command
}

interface CommandMap {
    /** Clears all registered commands. */
    clearCommands(): void
    /** Looks for the requested command and executes it if found. */
    dispatch(sender: CommandSender, cmdLine: string): boolean
    /** Gets the command registered to the specified name */
    getCommand(name: string): Command
    /** Registers a command. */
    register(label: string, fallbackPrefix: string, command: Command): boolean
    /** Registers a command. */
    register(fallbackPrefix: string, command: Command): boolean
    /** Registers all the commands belonging to a certain plugin. */
    registerAll(fallbackPrefix: string, commands: Command[]): void
    /** Looks for the requested command and executes an appropriatetab-completer if found. */
    tabComplete(sender: CommandSender, cmdLine: string): string[]
    /** Looks for the requested command and executes an appropriatetab-completer if found. */
    tabComplete(
        sender: CommandSender,
        cmdLine: string,
        location: Location
    ): string[]
}

interface Command extends Object {
    /**  */
    description: string
    /**  */
    usageMessage: string
    /**   */
    broadcastCommandMessage(source: CommandSender, message: string): void
    /**   */
    broadcastCommandMessage(
        source: CommandSender,
        message: string,
        sendToSource: boolean
    ): void
    /** Executes the command, returning its success */
    execute(
        sender: CommandSender,
        commandLabel: string,
        args: string[]
    ): boolean
    /** Returns a list of active aliases of this command */
    getAliases(): string[]
    /** Gets a brief description of this command */
    getDescription(): string
    /** Returns the label for this command */
    getLabel(): string
    /** Returns the name of this command */
    getName(): string
    /** Gets the permission required by users to be able to perform thiscommand */
    getPermission(): string
    /** Returns a message to be displayed on a failed permission check for thiscommand */
    getPermissionMessage(): string
    /** Gets an example usage of this command */
    getUsage(): string
    /** Returns the current registered state of this command */
    isRegistered(): boolean
    /** Registers this command to a CommandMap. */
    register(commandMap: CommandMap): boolean
    /** Sets the list of aliases to request on registration for this command. */
    setAliases(aliases: string[]): Command
    /** Sets a brief description of this command. */
    setDescription(description: string): Command
    /** Sets the label of this command. */
    setLabel(name: string): boolean
    /** Sets the name of this command. */
    setName(name: string): boolean
    /** Sets the permission required by users to be able to perform thiscommand */
    setPermission(permission: string): void
    /** Sets the message sent when a permission check fails */
    setPermissionMessage(permissionMessage: string): Command
    /** Sets the example usage of this command */
    setUsage(usage: string): Command
    /** Executed on tab completion for this command, returning a list ofoptions the player can tab through. */
    tabComplete(sender: CommandSender, alias: string, args: string[]): string[]
    /** Executed on tab completion for this command, returning a list ofoptions the player can tab through. */
    tabComplete(
        sender: CommandSender,
        alias: string,
        args: string[],
        location: Location
    ): string[]
    /** Tests the given CommandSender to see if they can perform thiscommand. */
    testPermission(target: CommandSender): boolean
    /** Tests the given CommandSender to see if they can perform thiscommand. */
    testPermissionSilent(target: CommandSender): boolean
    /**   */
    toString(): string
    /** Unregisters this command from the passed CommandMap applying anyoutstanding changes */
    unregister(commandMap: CommandMap): boolean
}

interface HelpTopicFactory<TCommand extends Command> {
    /** This method accepts a command deriving from a custom command base classand constructs a custom HelpTopic for it. */
    createTopic(command: TCommand): HelpTopic
}

interface HelpMap {
    /** Adds a topic to the server's help index. */
    addTopic(topic: HelpTopic): void
    /** Clears out the contents of the help index. */
    clear(): void
    /** Returns a help topic for a given topic name. */
    getHelpTopic(topicName: string): HelpTopic
    /** Returns a collection of all the registered help topics. */
    getHelpTopics(): HelpTopic[]
    /** Gets the list of plugins the server administrator has chosen to excludefrom the help index. */
    getIgnoredPlugins(): string[]
    /** Associates a HelpTopicFactory object with given command baseclass. */
    registerHelpTopicFactory<T>(
        commandClass: new (...args: any[]) => T,
        factory: HelpTopicFactory<any>
    ): void
}

interface Java {
    type(type: 'org.bukkit.enchantments.Enchantment'): EnchantmentConstructor
}

interface EnchantmentConstructor {
    new (key: NamespacedKey): Enchantment
}

interface Java {
    type(type: 'org.bukkit.enchantments.EnchantmentTarget'): EnchantmentTargets
}

interface EnchantmentTargets {
    /** Allows the Enchantment to be placed on all items */
    ALL: EnchantmentTarget
    /** Allows the Enchantment to be placed on armor */
    ARMOR: EnchantmentTarget
    /** Allows the Enchantment to be placed on feet slot armor */
    ARMOR_FEET: EnchantmentTarget
    /** Allows the Enchantment to be placed on head slot armor */
    ARMOR_HEAD: EnchantmentTarget
    /** Allows the Enchantment to be placed on leg slot armor */
    ARMOR_LEGS: EnchantmentTarget
    /** Allows the Enchantment to be placed on torso slot armor */
    ARMOR_TORSO: EnchantmentTarget
    /** Allows the Enchantment to be placed on bows. */
    BOW: EnchantmentTarget
    /** Allows the enchantment to be placed on items with durability. */
    BREAKABLE: EnchantmentTarget
    /** Allow the Enchantment to be placed on crossbows. */
    CROSSBOW: EnchantmentTarget
    /** Allows the Enchantment to be placed on fishing rods. */
    FISHING_ROD: EnchantmentTarget
    /** Allows the Enchantment to be placed on tools (spades, pickaxe, hoes,axes) */
    TOOL: EnchantmentTarget
    /** Allow the Enchantment to be placed on tridents. */
    TRIDENT: EnchantmentTarget
    /** Allows the Enchantment to be placed on weapons (swords) */
    WEAPON: EnchantmentTarget
    /** Allows the enchantment to be placed on wearable items. */
    WEARABLE: EnchantmentTarget
}

interface EnchantmentTarget {
    /** Check whether this target includes the specified item. */
    includes(item: ItemStack): boolean
    /** Check whether this target includes the specified item. */
    includes(item: Material): boolean
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EnchantmentTarget
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EnchantmentTarget[]
}

interface Enchantment extends Object, Keyed {
    /** Provides extra damage when shooting arrows from bows*/
    ARROW_DAMAGE: Enchantment
    /** Sets entities on fire when hit by arrows shot from a bow*/
    ARROW_FIRE: Enchantment
    /** Provides infinite arrows when shooting a bow*/
    ARROW_INFINITE: Enchantment
    /** Provides a knockback when an entity is hit by an arrow from a bow*/
    ARROW_KNOCKBACK: Enchantment
    /** Item cannot be removed*/
    BINDING_CURSE: Enchantment
    /** Strikes lightning when a mob is hit with a trident if conditions arestormy*/
    CHANNELING: Enchantment
    /** Increases damage against all targets*/
    DAMAGE_ALL: Enchantment
    /** Increases damage against arthropod targets*/
    DAMAGE_ARTHROPODS: Enchantment
    /** Increases damage against undead targets*/
    DAMAGE_UNDEAD: Enchantment
    /** Increases walking speed while in water*/
    DEPTH_STRIDER: Enchantment
    /** Increases the rate at which you mine/dig*/
    DIG_SPEED: Enchantment
    /** Decreases the rate at which a tool looses durability*/
    DURABILITY: Enchantment
    /** When attacking a target, has a chance to set them on fire*/
    FIRE_ASPECT: Enchantment
    /** Freezes any still water adjacent to ice / frost which player is walking on*/
    FROST_WALKER: Enchantment
    /** Deals more damage to mobs that live in the ocean*/
    IMPALING: Enchantment
    /** All damage to other targets will knock them back when hit*/
    KNOCKBACK: Enchantment
    /** Provides a chance of gaining extra loot when destroying blocks*/
    LOOT_BONUS_BLOCKS: Enchantment
    /** Provides a chance of gaining extra loot when killing monsters*/
    LOOT_BONUS_MOBS: Enchantment
    /** Causes a thrown trident to return to the player who threw it*/
    LOYALTY: Enchantment
    /** Decreases odds of catching worthless junk*/
    LUCK: Enchantment
    /** Increases rate of fish biting your hook*/
    LURE: Enchantment
    /** Allows mending the item using experience orbs*/
    MENDING: Enchantment
    /** Shoot multiple arrows from crossbows*/
    MULTISHOT: Enchantment
    /** Decreases the rate of air loss whilst underwater*/
    OXYGEN: Enchantment
    /** Crossbow projectiles pierce entities*/
    PIERCING: Enchantment
    /** Provides protection against environmental damage*/
    PROTECTION_ENVIRONMENTAL: Enchantment
    /** Provides protection against explosive damage*/
    PROTECTION_EXPLOSIONS: Enchantment
    /** Provides protection against fall damage*/
    PROTECTION_FALL: Enchantment
    /** Provides protection against fire damage*/
    PROTECTION_FIRE: Enchantment
    /** Provides protection against projectile damage*/
    PROTECTION_PROJECTILE: Enchantment
    /** Charges crossbows quickly*/
    QUICK_CHARGE: Enchantment
    /** When it is rainy, launches the player in the direction their trident is thrown*/
    RIPTIDE: Enchantment
    /** Allows blocks to drop themselves instead of fragments (for example,stone instead of cobblestone)*/
    SILK_TOUCH: Enchantment
    /** Increases damage against targets when using a sweep attack*/
    SWEEPING_EDGE: Enchantment
    /** Damages the attacker*/
    THORNS: Enchantment
    /** Item disappears instead of dropping*/
    VANISHING_CURSE: Enchantment
    /** Increases the speed at which a player may mine underwater*/
    WATER_WORKER: Enchantment

    /** Checks if this Enchantment may be applied to the given ItemStack. */
    canEnchantItem(item: ItemStack): boolean
    /** Check if this enchantment conflicts with another enchantment. */
    conflictsWith(other: Enchantment): boolean
    /**   */
    equals(obj: Object): boolean
    /** Gets the Enchantment at the specified key */
    getByKey(key: NamespacedKey): Enchantment
    /** Deprecated. enchantments are badly named, use getByKey(org.bukkit.NamespacedKey). */
    getByName(name: string): Enchantment
    /** Gets the type of ItemStack that may fit this Enchantment. */
    getItemTarget(): EnchantmentTarget
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Gets the maximum level that this Enchantment may become. */
    getMaxLevel(): number
    /** Deprecated. enchantments are badly named, use getKey(). */
    getName(): string
    /** Gets the level that this Enchantment should start at */
    getStartLevel(): number
    /**   */
    hashCode(): number
    /** Checks if this is accepting Enchantment registrations. */
    isAcceptingRegistrations(): boolean
    /** Deprecated. cursed enchantments are no longer special. Will return trueonly for BINDING_CURSE andVANISHING_CURSE. */
    isCursed(): boolean
    /** Checks if this enchantment is a treasure enchantment. */
    isTreasure(): boolean
    /** Registers an enchantment with the given ID and object. */
    registerEnchantment(enchantment: Enchantment): void
    /** Stops accepting any enchantment registrations */
    stopAcceptingRegistrations(): void
    /**   */
    toString(): string
    /** Gets an array of all the registered Enchantments */
    values(): Enchantment[]
}

interface Java {
    type(type: 'org.bukkit.inventory.ItemFlag'): ItemFlags
}

interface ItemFlags {
    /** Setting to show/hide Attributes like Damage */
    HIDE_ATTRIBUTES: ItemFlag
    /** Setting to show/hide what the ItemStack can break/destroy */
    HIDE_DESTROYS: ItemFlag
    /** Setting to show/hide enchants */
    HIDE_ENCHANTS: ItemFlag
    /** Setting to show/hide where this ItemStack can be build/placed on */
    HIDE_PLACED_ON: ItemFlag
    /** Setting to show/hide potion effects on this ItemStack */
    HIDE_POTION_EFFECTS: ItemFlag
    /** Setting to show/hide the unbreakable State */
    HIDE_UNBREAKABLE: ItemFlag
}

interface ItemFlag {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): ItemFlag
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): ItemFlag[]
}

interface ItemTagAdapterContext {
    /** Deprecated. Creates a new and empty tag container instance. */
    newTagContainer(): CustomItemTagContainer<any, any>
}

interface ItemTagType<T, Z> {
    /** Deprecated.  */
    BYTE: ItemTagType<number, number>
    /** Deprecated.  */
    BYTE_ARRAY: ItemTagType<number[], number[]>
    /** Deprecated.  */
    DOUBLE: ItemTagType<number, number>
    /** Deprecated.  */
    FLOAT: ItemTagType<number, number>
    /** Deprecated.  */
    INTEGER: ItemTagType<number, number>
    /** Deprecated.  */
    INTEGER_ARRAY: ItemTagType<number[], number[]>
    /** Deprecated.  */
    LONG: ItemTagType<number, number>
    /** Deprecated.  */
    LONG_ARRAY: ItemTagType<number[], number[]>
    /** Deprecated.  */
    SHORT: ItemTagType<number, number>
    /** Deprecated.  */
    STRING: ItemTagType<String, String>
    /** Deprecated.  */
    TAG_CONTAINER: ItemTagType<
        CustomItemTagContainer<any, any>,
        CustomItemTagContainer<any, any>
    >

    /** Deprecated. Creates a complex object based of the passed primitive value */
    fromPrimitive(primitive: any, context: ItemTagAdapterContext): Z
    /** Deprecated. Returns the complex object type the primitive value resembles. */
    getComplexType(): new (...args: any[]) => Z
    /** Deprecated. Returns the primitive data type of this tag. */
    getPrimitiveType(): new (...args: any[]) => T
    /** Deprecated. Returns the primitive data that resembles the complex object passed tothis method. */
    toPrimitive(complex: Z, context: ItemTagAdapterContext): any
}

interface CustomItemTagContainer<T, Z> {
    /** Deprecated. Returns the adapter context this tag container uses. */
    getAdapterContext(): ItemTagAdapterContext
    /** Deprecated. Returns the custom tag's value that is stored on the item. */
    getCustomTag(key: NamespacedKey, type: ItemTagType<T, Z>): Z
    /** Deprecated. Returns if the item meta has a custom tag registered matching theprovided parameters. */
    hasCustomTag(key: NamespacedKey, type: ItemTagType<T, Z>): boolean
    /** Deprecated. Returns if the container instance is empty, therefore has no entriesinside it. */
    isEmpty(): boolean
    /** Deprecated. Removes a custom key from the item meta. */
    removeCustomTag(key: NamespacedKey): void
    /** Deprecated. Stores a custom value on the ItemMeta. */
    setCustomTag(key: NamespacedKey, type: ItemTagType<T, Z>, value: Z): void
}

interface ItemMeta extends Cloneable<ItemMeta> {
    /** Add an Attribute and it's Modifier. */
    addAttributeModifier(
        attribute: Attribute,
        modifier: AttributeModifier
    ): boolean
    /** Adds the specified enchantment to this item meta. */
    addEnchant(
        ench: Enchantment,
        level: number,
        ignoreLevelRestriction: boolean
    ): boolean
    /** Set itemflags which should be ignored when rendering a ItemStack in the Client. */
    addItemFlags(...itemFlags: ItemFlag[]): void
    /**   */
    clone(): ItemMeta
    /** Return an immutable copy of all Attributes andtheir modifiers in this ItemMeta.Returns null if none exist. */
    getAttributeModifiers(): any // com.google.common.collect.Multimap<Attribute,AttributeModifier>
    /** Return an immutable copy of all AttributeModifiersfor a given Attribute */
    getAttributeModifiers(attribute: Attribute): AttributeModifier[]
    /** Return an immutable copy of all Attributes and theirAttributeModifiers for a given EquipmentSlot.Any AttributeModifier that does have have a givenEquipmentSlot will be returned. */
    getAttributeModifiers(slot: EquipmentSlot): any // com.google.common.collect.Multimap<Attribute,AttributeModifier>
    /** Gets the custom model data that is set. */
    getCustomModelData(): number
    /** Deprecated. this API part has been replaced by the PersistentDataHolder API.Please use PersistentDataHolder.getPersistentDataContainer() instead of this. */
    getCustomTagContainer(): CustomItemTagContainer<any, any>
    /** Gets the display name that is set. */
    getDisplayName(): string
    /** Checks for the level of the specified enchantment. */
    getEnchantLevel(ench: Enchantment): number
    /** Returns a copy the enchantments in this ItemMeta. */
    getEnchants(): Map<Enchantment, number>
    /** Get current set itemFlags. */
    getItemFlags(): ItemFlag[]
    /** Gets the localized display name that is set. */
    getLocalizedName(): string
    /** Gets the lore that is set. */
    getLore(): string[]
    /** Checks for the existence of any AttributeModifiers. */
    hasAttributeModifiers(): boolean
    /** Checks if the specified enchantment conflicts with any enchantments inthis ItemMeta. */
    hasConflictingEnchant(ench: Enchantment): boolean
    /** Checks for existence of custom model data. */
    hasCustomModelData(): boolean
    /** Checks for existence of a display name. */
    hasDisplayName(): boolean
    /** Checks for existence of the specified enchantment. */
    hasEnchant(ench: Enchantment): boolean
    /** Checks for the existence of any enchantments. */
    hasEnchants(): boolean
    /** Check if the specified flag is present on this item. */
    hasItemFlag(flag: ItemFlag): boolean
    /** Checks for existence of a localized name. */
    hasLocalizedName(): boolean
    /** Checks for existence of lore. */
    hasLore(): boolean
    /** Return if the unbreakable tag is true. */
    isUnbreakable(): boolean
    /** Remove all AttributeModifiers associated with the givenAttribute. */
    removeAttributeModifier(attribute: Attribute): boolean
    /** Remove a specific Attribute and AttributeModifier. */
    removeAttributeModifier(
        attribute: Attribute,
        modifier: AttributeModifier
    ): boolean
    /** Remove all Attributes and AttributeModifiers for agiven EquipmentSlot.If the given EquipmentSlot is null, this will remove allAttributeModifiers that do not have an EquipmentSlot set. */
    removeAttributeModifier(slot: EquipmentSlot): boolean
    /** Removes the specified enchantment from this item meta. */
    removeEnchant(ench: Enchantment): boolean
    /** Remove specific set of itemFlags. */
    removeItemFlags(...itemFlags: ItemFlag[]): void
    /** Set all Attributes and their AttributeModifiers. */
    setAttributeModifiers(
        attributeModifiers: any /** com.google.common.collect.Multimap<Attribute,AttributeModifier> */
    ): void
    /** Sets the custom model data. */
    setCustomModelData(data: number): void
    /** Sets the display name. */
    setDisplayName(name: string): void
    /** Sets the localized name. */
    setLocalizedName(name: string): void
    /** Sets the lore for this item. */
    setLore(lore: string[]): void
    /** Sets the unbreakable tag. */
    setUnbreakable(unbreakable: boolean): void
    /** Deprecated.   */
    setVersion(version: number): void
}

interface ItemFactory {
    /** Returns an appropriate item meta for the specified stack. */
    asMetaFor(meta: ItemMeta, stack: ItemStack): ItemMeta
    /** Returns an appropriate item meta for the specified material. */
    asMetaFor(meta: ItemMeta, material: Material): ItemMeta
    /** This method is used to compare two item meta data objects. */
    equals(meta1: ItemMeta, meta2: ItemMeta): boolean
    /** Returns the default color for all leather armor. */
    getDefaultLeatherColor(): Color
    /** This creates a new item meta for the material. */
    getItemMeta(material: Material): ItemMeta
    /** This method checks the item meta to confirm that it is applicable (nodata lost if applied) to the specified ItemStack. */
    isApplicable(meta: ItemMeta, stack: ItemStack): boolean
    /** This method checks the item meta to confirm that it is applicable (nodata lost if applied) to the specified Material. */
    isApplicable(meta: ItemMeta, material: Material): boolean
    /** Deprecated. for internal use only */
    updateMaterial(meta: ItemMeta, material: Material): Material
}

interface Java {
    type(type: 'org.util.logging.Level'): Levels
}

interface Level {}

interface Levels {
    INFO: Level
    SEVERE: Level
    WARNING: Level
}

interface Logger {
    log(level: Level, msg: string, ...obj: any[])
    info(msg: string)
    warning(msg: string)
    severe(msg: string)
}

interface PluginMessageListener {
    /** A method that will be thrown when a PluginMessageSource sends a pluginmessage on a registered channel. */
    onPluginMessageReceived(
        channel: string,
        player: Player,
        message: number[]
    ): void
}

interface Java {
    type(
        type: 'org.bukkit.plugin.messaging.PluginMessageListenerRegistration'
    ): PluginMessageListenerRegistrationConstructor
}

interface PluginMessageListenerRegistrationConstructor {
    new (
        messenger: Messenger,
        plugin: Plugin,
        channel: string,
        listener: PluginMessageListener
    ): PluginMessageListenerRegistration
}

interface PluginMessageListenerRegistration extends Object {
    /**   */
    equals(obj: Object): boolean
    /** Gets the plugin channel that this registration is about. */
    getChannel(): string
    /** Gets the registered listener described by this registration. */
    getListener(): PluginMessageListener
    /** Gets the plugin that this registration is for. */
    getPlugin(): Plugin
    /**   */
    hashCode(): number
    /** Checks if this registration is still valid. */
    isValid(): boolean
}

interface Messenger {
    /** Represents the largest size that a Plugin Channel may be.*/
    MAX_CHANNEL_SIZE: number
    /** Represents the largest size that an individual Plugin Message may be.*/
    MAX_MESSAGE_SIZE: number

    /** Dispatches the specified incoming message to any registered listeners. */
    dispatchIncomingMessage(
        source: Player,
        channel: string,
        message: number[]
    ): void
    /** Gets a set containing all the incoming plugin channel registrationsthat are on the requested channel. */
    getIncomingChannelRegistrations(
        channel: string
    ): PluginMessageListenerRegistration[]
    /** Gets a set containing all the incoming plugin channel registrationsthat the specified plugin has. */
    getIncomingChannelRegistrations(
        plugin: Plugin
    ): PluginMessageListenerRegistration[]
    /** Gets a set containing all the incoming plugin channel registrationsthat the specified plugin has on the requested channel. */
    getIncomingChannelRegistrations(
        plugin: Plugin,
        channel: string
    ): PluginMessageListenerRegistration[]
    /** Gets a set containing all the incoming plugin channels. */
    getIncomingChannels(): string[]
    /** Gets a set containing all the incoming plugin channels that thespecified plugin is registered for. */
    getIncomingChannels(plugin: Plugin): string[]
    /** Gets a set containing all the outgoing plugin channels. */
    getOutgoingChannels(): string[]
    /** Gets a set containing all the outgoing plugin channels that thespecified plugin is registered to. */
    getOutgoingChannels(plugin: Plugin): string[]
    /** Checks if the specified plugin has registered to receive incomingmessages through the requested channel. */
    isIncomingChannelRegistered(plugin: Plugin, channel: string): boolean
    /** Checks if the specified plugin has registered to send outgoing messagesthrough the requested channel. */
    isOutgoingChannelRegistered(plugin: Plugin, channel: string): boolean
    /** Checks if the specified plugin message listener registration is valid. */
    isRegistrationValid(
        registration: PluginMessageListenerRegistration
    ): boolean
    /** Checks if the specified channel is a reserved name. */
    isReservedChannel(channel: string): boolean
    /** Registers the specific plugin for listening on the requested incomingplugin channel, allowing it to act upon any plugin messages. */
    registerIncomingPluginChannel(
        plugin: Plugin,
        channel: string,
        listener: PluginMessageListener
    ): PluginMessageListenerRegistration
    /** Registers the specific plugin to the requested outgoing plugin channel,allowing it to send messages through that channel to any clients. */
    registerOutgoingPluginChannel(plugin: Plugin, channel: string): void
    /** Unregisters the specific plugin from listening on all plugin channelsthrough all listeners. */
    unregisterIncomingPluginChannel(plugin: Plugin): void
    /** Unregisters the specific plugin from listening on the requestedincoming plugin channel, no longer allowing it to act upon any pluginmessages. */
    unregisterIncomingPluginChannel(plugin: Plugin, channel: string): void
    /** Unregisters the specific plugin's listener from listening on therequested incoming plugin channel, no longer allowing it to act uponany plugin messages. */
    unregisterIncomingPluginChannel(
        plugin: Plugin,
        channel: string,
        listener: PluginMessageListener
    ): void
    /** Unregisters the specific plugin from all outgoing plugin channels, nolonger allowing it to send any plugin messages. */
    unregisterOutgoingPluginChannel(plugin: Plugin): void
    /** Unregisters the specific plugin from the requested outgoing pluginchannel, no longer allowing it to send messages through that channel toany clients. */
    unregisterOutgoingPluginChannel(plugin: Plugin, channel: string): void
}

interface CommandExecutor {
    /** Executes the given command, returning its success. */
    onCommand(
        sender: CommandSender,
        command: Command,
        label: string,
        args: string[]
    ): boolean
}

interface Java {
    type(type: 'org.bukkit.command.PluginCommand'): PluginCommandConstructor
}

interface PluginCommandConstructor {
    new (name: string, owner: Plugin): PluginCommand
}

interface PluginIdentifiableCommand {
    /** Gets the owner of this PluginIdentifiableCommand. */
    getPlugin(): Plugin
}

interface TabCompleter {
    /** Requests a list of possible completions for a command argument. */
    onTabComplete(
        sender: CommandSender,
        command: Command,
        alias: string,
        args: string[]
    ): string[]
}

interface PluginCommand extends Command, PluginIdentifiableCommand {
    /** Executes the command, returning its success */
    execute(
        sender: CommandSender,
        commandLabel: string,
        args: string[]
    ): boolean
    /** Gets the CommandExecutor associated with this command */
    getExecutor(): CommandExecutor
    /** Gets the owner of this PluginCommand */
    getPlugin(): Plugin
    /** Gets the TabCompleter associated with this command. */
    getTabCompleter(): TabCompleter
    /** Sets the CommandExecutor to run when parsing this command */
    setExecutor(executor: CommandExecutor): void
    /** Sets the TabCompleter to run when tab-completing this command. */
    setTabCompleter(completer: TabCompleter): void
    /** Executed on tab completion for this command, returning a list ofoptions the player can tab through. */
    tabComplete(sender: CommandSender, alias: string, args: string[]): string[]
    /**   */
    toString(): string
}

interface Java {
    type(type: 'org.bukkit.event.Event'): EventConstructor
}

interface EventConstructor {
    new (): Event
    new (isAsync: boolean): Event
}

interface Java {
    type(type: 'org.bukkit.event.HandlerList'): HandlerListConstructor
}

interface HandlerListConstructor {
    new (): HandlerList
}

interface Java {
    type(
        type: 'org.bukkit.plugin.RegisteredListener'
    ): RegisteredListenerConstructor
}

interface Listener {}

interface EventExecutor {
    /**   */
    execute(listener: Listener, event: Event): void
}

interface Java {
    type(type: 'org.bukkit.event.EventPriority'): EventPrioritys
}

interface EventPrioritys {
    /** Event call is of high importance */
    HIGH: EventPriority
    /** Event call is critical and must have the final say in what happensto the event */
    HIGHEST: EventPriority
    /** Event call is of low importance */
    LOW: EventPriority
    /** Event call is of very low importance and should be ran first, to allowother plugins to further customise the outcome */
    LOWEST: EventPriority
    /** Event is listened to purely for monitoring the outcome of an event. */
    MONITOR: EventPriority
    /** Event call is neither important nor unimportant, and may be rannormally */
    NORMAL: EventPriority
}

interface EventPriority {
    /**   */
    getSlot(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EventPriority
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EventPriority[]
}

interface RegisteredListenerConstructor {
    new (
        listener: Listener,
        executor: EventExecutor,
        priority: EventPriority,
        plugin: Plugin,
        ignoreCancelled: boolean
    ): RegisteredListener
}

interface RegisteredListener extends Object {
    /** Calls the event executor */
    callEvent(event: Event): void
    /** Gets the listener for this registration */
    getListener(): Listener
    /** Gets the plugin for this registration */
    getPlugin(): Plugin
    /** Gets the priority for this registration */
    getPriority(): EventPriority
    /** Whether this listener accepts cancelled events */
    isIgnoringCancelled(): boolean
}

interface HandlerList extends Object {
    /** Bake HashMap and ArrayLists to 2d array - does nothing if not necessary */
    bake(): void
    /** Bake all handler lists. */
    bakeAll(): void
    /** Get a list of all handler lists for every event type */
    getHandlerLists(): HandlerList[]
    /** Get the baked registered listeners associated with this handler list */
    getRegisteredListeners(): RegisteredListener[]
    /** Get a specific plugin's registered listeners associated with thishandler list */
    getRegisteredListeners(plugin: Plugin): RegisteredListener[]
    /** Register a new listener in this handler list */
    register(listener: RegisteredListener): void
    /** Register a collection of new listeners in this handler list */
    registerAll(listeners: RegisteredListener[]): void
    /** Remove a specific listener from this handler */
    unregister(listener: Listener): void
    /** Remove a specific plugin's listeners from this handler */
    unregister(plugin: Plugin): void
    /** Remove a listener from a specific order slot */
    unregister(listener: RegisteredListener): void
    /** Unregister all listeners from all handler lists. */
    unregisterAll(): void
    /** Unregister a specific listener from all handler lists. */
    unregisterAll(listener: Listener): void
    /** Unregister a specific plugin's listeners from all handler lists. */
    unregisterAll(plugin: Plugin): void
}

interface Event extends Object {
    /** Convenience method for providing a user-friendly identifier. */
    getEventName(): string
    /**   */
    getHandlers(): HandlerList
    /** Any custom event that should not by synchronized with other events mustuse the specific constructor. */
    isAsynchronous(): boolean
}

interface Java {
    type(
        type: 'org.bukkit.plugin.PluginDescriptionFile'
    ): PluginDescriptionFileConstructor
}

interface Java {
    type(type: 'java.io.InputStream'): InputStream
}

interface InputStream {}

interface Java {
    type(type: 'java.io.Reader'): Reader
}

interface Reader {}

interface Java {
    type(type: 'java.io.Writer'): Writer
}

interface Writer {}

interface PluginDescriptionFileConstructor {
    new (stream: InputStream): PluginDescriptionFile
    new (reader: Reader): PluginDescriptionFile
    new (
        pluginName: string,
        pluginVersion: string,
        mainClass: string
    ): PluginDescriptionFile
}

interface PluginAwareness {}

interface Java {
    type(type: 'org.bukkit.plugin.PluginLoadOrder'): PluginLoadOrders
}

interface PluginLoadOrders {
    /** Indicates that the plugin will be loaded after the first/default worldwas created */
    POSTWORLD: PluginLoadOrder
    /** Indicates that the plugin will be loaded at startup */
    STARTUP: PluginLoadOrder
}

interface PluginLoadOrder {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): PluginLoadOrder
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): PluginLoadOrder[]
}

interface Java {
    type(type: 'org.bukkit.permissions.PermissionDefault'): PermissionDefaults
}

interface PermissionDefaults {
    /**   */
    FALSE: PermissionDefault
    /**   */
    NOT_OP: PermissionDefault
    /**   */
    OP: PermissionDefault
    /**   */
    TRUE: PermissionDefault
}

interface PermissionDefault {
    /** Looks up a PermissionDefault by name */
    getByName(name: string): PermissionDefault
    /** Calculates the value of this PermissionDefault for the given operatorvalue */
    getValue(op: boolean): boolean
    /**   */
    toString(): string
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): PermissionDefault
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): PermissionDefault[]
}

interface PluginDescriptionFile extends Object {
    /** Gives the API version which this plugin is designed to support. */
    getAPIVersion(): string
    /** Gives the list of authors for the plugin. */
    getAuthors(): string[]
    /** Gives a set of every PluginAwareness for a plugin. */
    getAwareness(): PluginAwareness[]
    /** Deprecated. unused */
    getClassLoaderOf(): string
    /** Gives the map of command-name to command-properties. */
    getCommands(): { [index: string]: { [index: string]: any } }
    /** Gives a list of other plugins that the plugin requires. */
    getDepend(): string[]
    /** Gives a human-friendly description of the functionality the pluginprovides. */
    getDescription(): string
    /** Returns the name of a plugin, including the version. */
    getFullName(): string
    /** Gives the phase of server startup that the plugin should be loaded. */
    getLoad(): PluginLoadOrder
    /** Gets the list of plugins that should consider this plugin asoft-dependency. */
    getLoadBefore(): string[]
    /** Gives the fully qualified name of the main class for a plugin. */
    getMain(): string
    /** Gives the name of the plugin. */
    getName(): string
    /** Gives the default default state ofpermissions registered for the plugin. */
    getPermissionDefault(): PermissionDefault
    /** Gives the list of permissions the plugin will register at runtime,immediately proceding enabling. */
    getPermissions(): Permission[]
    /** Gives the token to prefix plugin-specific logging messages with. */
    getPrefix(): string
    /** Deprecated. Internal use */
    getRawName(): string
    /** Gives a list of other plugins that the plugin requires for fullfunctionality. */
    getSoftDepend(): string[]
    /** Gives the version of the plugin. */
    getVersion(): string
    /** Gives the plugin's or plugin's author's website. */
    getWebsite(): string
    /** Saves this PluginDescriptionFile to the given writer */
    save(writer: Writer): void
}

interface Java {
    type(type: 'java.io.File'): FileConstructor
}

interface FileConstructor {
    new (parent: File, child: string): File
    new (pathname: string): File
    new (parent: string, child: string): File
    createTempFile(prefix: string, suffix: string): File
    createTempFile(prefix: string, suffix: string, directory: File): File
}

interface File {
    canExecute(): boolean
    canRead(): boolean
    canWrite(): boolean
    createNewFile(): boolean
    delete(): boolean
    exists(): boolean
    getAbsoluteFile(): File
    getAbsolutePath(): string
    getCanonicalFile(): File
    getCanonicalPath(): string
    getFreeSpace(): number
    getName(): string
    getParent(): string | null
    getParentFile(): File | null
    getPath(): string
    getTotalSpace(): number
    getUsableSpace(): number
    hashCode(): number
    isAbsolute(): boolean
    isDirectory(): boolean
    isFile(): boolean
    isHidden(): boolean
    lastModified(): number
    length(): number
    list(): string[]
    listFiles(): File[]
    mkdir(): boolean
    mkdirs(): boolean
    renameTo(): boolean
}

interface PluginLoader {
    /** Creates and returns registered listeners for the event classes used inthis listener */
    createRegisteredListeners<T extends Event>(
        listener: Listener,
        plugin: Plugin
    ): Map<new (...args) => T, RegisteredListener[]>
    /** Disables the specified plugin */
    disablePlugin(plugin: Plugin): void
    /** Enables the specified plugin */
    enablePlugin(plugin: Plugin): void
    /** Loads a PluginDescriptionFile from the specified file */
    getPluginDescription(file: File): PluginDescriptionFile
    /** Returns a list of all filename filters expected by this PluginLoader */
    getPluginFileFilters(): any[] // Pattern[]
    /** Loads the plugin contained in the specified file */
    loadPlugin(file: File): Plugin
}

interface PluginManager {
    /** Adds a Permission to this plugin manager. */
    addPermission(perm: Permission): void
    /** Calls an event with the given details */
    callEvent(event: Event): void
    /** Disables and removes all plugins */
    clearPlugins(): void
    /** Disables the specified plugin */
    disablePlugin(plugin: Plugin): void
    /** Disables all the loaded plugins */
    disablePlugins(): void
    /** Enables the specified plugin */
    enablePlugin(plugin: Plugin): void
    /** Gets the default permissions for the given op status */
    getDefaultPermissions(op: boolean): Permission[]
    /** Gets a set containing all subscribed Permissibles to the givendefault list, by op status */
    getDefaultPermSubscriptions(op: boolean): Permissible[]
    /** Gets a Permission from its fully qualified name */
    getPermission(name: string): Permission
    /** Gets a set of all registered permissions. */
    getPermissions(): Permission[]
    /** Gets a set containing all subscribed Permissibles to the givenpermission, by name */
    getPermissionSubscriptions(permission: string): Permissible[]
    /** Checks if the given plugin is loaded and returns it when applicable */
    getPlugin(name: string): Plugin
    /** Gets a list of all currently loaded plugins */
    getPlugins(): Plugin[]
    /** Checks if the given plugin is enabled or not */
    isPluginEnabled(name: string): boolean
    /** Checks if the given plugin is enabled or not */
    isPluginEnabled(plugin: Plugin): boolean
    /** Loads the plugin in the specified file */
    loadPlugin(file: File): Plugin
    /** Loads the plugins contained within the specified directory */
    loadPlugins(directory: File): Plugin[]
    /** Recalculates the defaults for the given Permission. */
    recalculatePermissionDefaults(perm: Permission): void
    /** Registers the specified executor to the given event class */
    registerEvent<T extends Event>(
        event: new (...args: any[]) => T,
        listener: Listener,
        priority: EventPriority,
        executor: EventExecutor,
        plugin: Plugin
    ): void
    /** Registers the specified executor to the given event class */
    registerEvent<T extends Event>(
        event: new (...args: any[]) => T,
        listener: Listener,
        priority: EventPriority,
        executor: EventExecutor,
        plugin: Plugin,
        ignoreCancelled: boolean
    ): void
    /** Registers all the events in the given listener class */
    registerEvents(listener: Listener, plugin: Plugin): void
    /** Registers the specified plugin loader */
    registerInterface<T extends PluginLoader>(
        loader: new (...args: any[]) => T
    ): void
    /** Removes a Permission registration from this plugin manager. */
    removePermission(name: string): void
    /** Removes a Permission registration from this plugin manager. */
    removePermission(perm: Permission): void
    /** Subscribes to the given Default permissions by operator status */
    subscribeToDefaultPerms(op: boolean, permissible: Permissible): void
    /** Subscribes the given Permissible for information about the requestedPermission, by name. */
    subscribeToPermission(permission: string, permissible: Permissible): void
    /** Unsubscribes from the given Default permissions by operator status */
    unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void
    /** Unsubscribes the given Permissible for information about the requestedPermission, by name. */
    unsubscribeFromPermission(
        permission: string,
        permissible: Permissible
    ): void
    /** Returns whether or not timing code should be used for event calls */
    useTimings(): boolean
}

interface BukkitWorker {
    /** Returns the Plugin that owns this task. */
    getOwner(): Plugin
    /** Returns the taskId for the task being executed by this worker. */
    getTaskId(): number
    /** Returns the thread for the worker. */
    getThread(): any // Thread
}

interface Callable<T> {
    call: () => T
}

interface Runnable {
    run: () => void
}

interface Java {
    type(type: 'java.util.concurrent.TimeUnit'): TimeUnits
}

interface TimeUnits {
    DAYS: TimeUnit
    HOURS: TimeUnit
    MICROSECONDS: TimeUnit
    MILLISECONDS: TimeUnit
    MINUTES: TimeUnit
    NANOSECONDS: TimeUnit
    SECONDS: TimeUnit
}

interface TimeUnit {}
interface Future<T> {
    cancel(): boolean
    get(): T
    get(timeout: number, timeunit: TimeUnit)
    isCancelled(): boolean
    isDone(): boolean
}

interface Consumer<T> {
    (arg: T): any
}

interface BukkitTask {
    /** Will attempt to cancel this task. */
    cancel(): void
    /** Returns the Plugin that owns this task. */
    getOwner(): Plugin
    /** Returns the taskId for the task. */
    getTaskId(): number
    /** Returns true if this task has been cancelled. */
    isCancelled(): boolean
    /** Returns true if the Task is a sync task. */
    isSync(): boolean
}

interface Java {
    type(type: 'org.bukkit.scheduler.BukkitRunnable'): BukkitRunnableConstructor
}

interface BukkitRunnableConstructor {
    new (): BukkitRunnable
}

interface BukkitRunnable extends Object, Runnable {
    /** Attempts to cancel this task. */
    cancel(): void
    /** Gets the task id for this runnable. */
    getTaskId(): number
    /** Returns true if this task has been cancelled. */
    isCancelled(): boolean
    /** Schedules this in the Bukkit scheduler to run on next tick. */
    runTask(plugin: Plugin): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskAsynchronously(plugin: Plugin): BukkitTask
    /** Schedules this to run after the specified number of server ticks. */
    runTaskLater(plugin: Plugin, delay: number): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskLaterAsynchronously(plugin: Plugin, delay: number): BukkitTask
    /** Schedules this to repeatedly run until cancelled, starting after thespecified number of server ticks. */
    runTaskTimer(plugin: Plugin, delay: number, period: number): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskTimerAsynchronously(
        plugin: Plugin,
        delay: number,
        period: number
    ): BukkitTask
}

interface BukkitScheduler {
    /** Calls a method on the main thread and returns a Future object. */
    callSyncMethod<T>(plugin: Plugin, task: Callable<T>): Future<T>
    /** Removes task from scheduler. */
    cancelTask(taskId: number): void
    /** Removes all tasks associated with a particular plugin from thescheduler. */
    cancelTasks(plugin: Plugin): void
    /** Returns a list of all active workers. */
    getActiveWorkers(): BukkitWorker[]
    /** Returns a list of all pending tasks. */
    getPendingTasks(): BukkitTask[]
    /** Check if the task currently running. */
    isCurrentlyRunning(taskId: number): boolean
    /** Check if the task queued to be run later. */
    isQueued(taskId: number): boolean
    /** Returns a task that will run on the next server tick. */
    runTask(plugin: Plugin, task: Runnable): BukkitTask
    /** Returns a task that will run on the next server tick. */
    runTask(plugin: Plugin, task: Consumer<BukkitTask>): void
    /** Deprecated. Use BukkitRunnable.runTask(Plugin) */
    runTask(plugin: Plugin, task: BukkitRunnable): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskAsynchronously(plugin: Plugin, task: Runnable): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskAsynchronously(plugin: Plugin, task: Consumer<BukkitTask>): void
    /** Deprecated. Use BukkitRunnable.runTaskAsynchronously(Plugin) */
    runTaskAsynchronously(plugin: Plugin, task: BukkitRunnable): BukkitTask
    /** Returns a task that will run after the specified number of serverticks. */
    runTaskLater(plugin: Plugin, task: Runnable, delay: number): BukkitTask
    /** Returns a task that will run after the specified number of serverticks. */
    runTaskLater(
        plugin: Plugin,
        task: Consumer<BukkitTask>,
        delay: number
    ): void
    /** Deprecated. Use BukkitRunnable.runTaskLater(Plugin, long) */
    runTaskLater(
        plugin: Plugin,
        task: BukkitRunnable,
        delay: number
    ): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskLaterAsynchronously(
        plugin: Plugin,
        task: Runnable,
        delay: number
    ): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskLaterAsynchronously(
        plugin: Plugin,
        task: Consumer<BukkitTask>,
        delay: number
    ): void
    /** Deprecated. Use BukkitRunnable.runTaskLaterAsynchronously(Plugin, long) */
    runTaskLaterAsynchronously(
        plugin: Plugin,
        task: BukkitRunnable,
        delay: number
    ): BukkitTask
    /** Returns a task that will repeatedly run until cancelled, starting afterthe specified number of server ticks. */
    runTaskTimer(
        plugin: Plugin,
        task: Runnable,
        delay: number,
        period: number
    ): BukkitTask
    /** Returns a task that will repeatedly run until cancelled, starting afterthe specified number of server ticks. */
    runTaskTimer(
        plugin: Plugin,
        task: Consumer<BukkitTask>,
        delay: number,
        period: number
    ): void
    /** Deprecated. Use BukkitRunnable.runTaskTimer(Plugin, long, long) */
    runTaskTimer(
        plugin: Plugin,
        task: BukkitRunnable,
        delay: number,
        period: number
    ): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskTimerAsynchronously(
        plugin: Plugin,
        task: Runnable,
        delay: number,
        period: number
    ): BukkitTask
    /** Asynchronous tasks should never access any API in Bukkit. */
    runTaskTimerAsynchronously(
        plugin: Plugin,
        task: Consumer<BukkitTask>,
        delay: number,
        period: number
    ): void
    /** Deprecated. Use BukkitRunnable.runTaskTimerAsynchronously(Plugin, long, long) */
    runTaskTimerAsynchronously(
        plugin: Plugin,
        task: BukkitRunnable,
        delay: number,
        period: number
    ): BukkitTask
    /** Deprecated. This name is misleading, as it does not schedule "a sync"task, but rather, "an async" task */
    scheduleAsyncDelayedTask(plugin: Plugin, task: Runnable): number
    /** Deprecated. This name is misleading, as it does not schedule "a sync"task, but rather, "an async" task */
    scheduleAsyncDelayedTask(
        plugin: Plugin,
        task: Runnable,
        delay: number
    ): number
    /** Deprecated. This name is misleading, as it does not schedule "a sync"task, but rather, "an async" task */
    scheduleAsyncRepeatingTask(
        plugin: Plugin,
        task: Runnable,
        delay: number,
        period: number
    ): number
    /** Schedules a once off task to occur as soon as possible. */
    scheduleSyncDelayedTask(plugin: Plugin, task: Runnable): number
    /** Schedules a once off task to occur after a delay. */
    scheduleSyncDelayedTask(
        plugin: Plugin,
        task: Runnable,
        delay: number
    ): number
    /** Deprecated. Use BukkitRunnable.runTask(Plugin) */
    scheduleSyncDelayedTask(plugin: Plugin, task: BukkitRunnable): number
    /** Deprecated. Use BukkitRunnable.runTaskLater(Plugin, long) */
    scheduleSyncDelayedTask(
        plugin: Plugin,
        task: BukkitRunnable,
        delay: number
    ): number
    /** Schedules a repeating task. */
    scheduleSyncRepeatingTask(
        plugin: Plugin,
        task: Runnable,
        delay: number,
        period: number
    ): number
    /** Deprecated. Use BukkitRunnable.runTaskTimer(Plugin, long, long) */
    scheduleSyncRepeatingTask(
        plugin: Plugin,
        task: BukkitRunnable,
        delay: number,
        period: number
    ): number
}

interface Java {
    type(type: 'org.bukkit.ChatColor'): ChatColors
}

interface ChatColors {
    /** Represents aqua */
    AQUA: ChatColor
    /** Represents black */
    BLACK: ChatColor
    /** Represents blue */
    BLUE: ChatColor
    /** Makes the text bold. */
    BOLD: ChatColor
    /** Represents dark blue (aqua) */
    DARK_AQUA: ChatColor
    /** Represents dark blue */
    DARK_BLUE: ChatColor
    /** Represents dark gray */
    DARK_GRAY: ChatColor
    /** Represents dark green */
    DARK_GREEN: ChatColor
    /** Represents dark purple */
    DARK_PURPLE: ChatColor
    /** Represents dark red */
    DARK_RED: ChatColor
    /** Represents gold */
    GOLD: ChatColor
    /** Represents gray */
    GRAY: ChatColor
    /** Represents green */
    GREEN: ChatColor
    /** Makes the text italic. */
    ITALIC: ChatColor
    /** Represents light purple */
    LIGHT_PURPLE: ChatColor
    /** Represents magical characters that change around randomly */
    MAGIC: ChatColor
    /** Represents red */
    RED: ChatColor
    /** Resets all previous chat colors or formats. */
    RESET: ChatColor
    /** Makes a line appear through the text. */
    STRIKETHROUGH: ChatColor
    /** Makes the text appear underlined. */
    UNDERLINE: ChatColor
    /** Represents white */
    WHITE: ChatColor
    /** Represents yellow */
    YELLOW: ChatColor
}

interface ChatColor {
    /** The special character which prefixes all chat colour codes.*/
    COLOR_CHAR: string
    /** Gets the color represented by the specified color code */
    getByChar(code: string): ChatColor
    /** Gets the color represented by the specified color code */
    getByChar(code: string): ChatColor
    /** Gets the char value associated with this color */
    getChar(): string
    /** Gets the ChatColors used at the end of the given input string. */
    getLastColors(input: string): string
    /** Checks if this code is a color code as opposed to a format code. */
    isColor(): boolean
    /** Checks if this code is a format code as opposed to a color code. */
    isFormat(): boolean
    /** Strips the given message of all color codes */
    stripColor(input: string): string
    /**   */
    toString(): string
    /** Translates a string using an alternate color code character into astring that uses the internal ChatColor.COLOR_CODE color codecharacter. */
    translateAlternateColorCodes(
        altColorChar: string,
        textToTranslate: string
    ): string
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): ChatColor
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): ChatColor[]
}

interface Java {
    type(type: 'org.bukkit.scoreboard.NameTagVisibility'): NameTagVisibilitys
}

interface NameTagVisibilitys {
    /** Deprecated. Always show the player's nametag. */
    ALWAYS: NameTagVisibility
    /** Deprecated. Show the player's nametag only to his own team members. */
    HIDE_FOR_OTHER_TEAMS: NameTagVisibility
    /** Deprecated. Show the player's nametag only to members of other teams. */
    HIDE_FOR_OWN_TEAM: NameTagVisibility
    /** Deprecated. Never show the player's nametag. */
    NEVER: NameTagVisibility
}

interface NameTagVisibility {
    /** Deprecated. Returns the enum constant of this type with the specified name. */
    valueOf(name: string): NameTagVisibility
    /** Deprecated. Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): NameTagVisibility[]
}

interface Java {
    type(type: 'org.bukkit.scoreboard.Team.Option'): TeamOptions
}

interface TeamOptions {
    /** How players of this team collide with others. */
    COLLISION_RULE: TeamOption
    /** How to display the death messages for players on this team. */
    DEATH_MESSAGE_VISIBILITY: TeamOption
    /** How to display the name tags of players on this team. */
    NAME_TAG_VISIBILITY: TeamOption
}

interface TeamOption {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): TeamOption
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): TeamOption[]
}

interface Java {
    type(type: 'org.bukkit.scoreboard.Team.OptionStatus'): TeamOptionStatuss
}

interface TeamOptionStatuss {
    /** Apply this option to everyone. */
    ALWAYS: TeamOptionStatus
    /** Apply this option only for opposing teams. */
    FOR_OTHER_TEAMS: TeamOptionStatus
    /** Apply this option for only team members. */
    FOR_OWN_TEAM: TeamOptionStatus
    /** Never apply this option. */
    NEVER: TeamOptionStatus
}

interface TeamOptionStatus {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): TeamOptionStatus
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): TeamOptionStatus[]
}

interface Team {
    /** This puts the specified entry onto this team for the scoreboard. */
    addEntry(entry: string): void
    /** Deprecated. Teams can contain entries that aren't players */
    addPlayer(player: OfflinePlayer): void
    /** Gets the team friendly fire state */
    allowFriendlyFire(): boolean
    /** Gets the team's ability to see invisible teammates. */
    canSeeFriendlyInvisibles(): boolean
    /** Gets the color of the team. */
    getColor(): ChatColor
    /** Gets the name displayed to entries for this team */
    getDisplayName(): string
    /** Gets the Set of entries on the team */
    getEntries(): string[]
    /** Gets the name of this Team */
    getName(): string
    /** Deprecated. see getOption(org.bukkit.scoreboard.Team.Option) */
    getNameTagVisibility(): NameTagVisibility
    /** Get an option for this team */
    getOption(option: TeamOption): TeamOptionStatus
    /** Deprecated.  */
    getPlayers(): OfflinePlayer[]
    /** Gets the prefix prepended to the display of entries on this team. */
    getPrefix(): string
    /** Gets the Scoreboard to which this team is attached */
    getScoreboard(): Scoreboard
    /** Gets the size of the team */
    getSize(): number
    /** Gets the suffix appended to the display of entries on this team. */
    getSuffix(): string
    /** Checks to see if the specified entry is a member of this team. */
    hasEntry(entry: string): boolean
    /** Deprecated. Teams can contain entries that aren't players */
    hasPlayer(player: OfflinePlayer): boolean
    /** Removes the entry from this team. */
    removeEntry(entry: string): boolean
    /** Deprecated. Teams can contain entries that aren't players */
    removePlayer(player: OfflinePlayer): boolean
    /** Sets the team friendly fire state */
    setAllowFriendlyFire(enabled: boolean): void
    /** Sets the team's ability to see invisible teammates. */
    setCanSeeFriendlyInvisibles(enabled: boolean): void
    /** Sets the color of the team. */
    setColor(color: ChatColor): void
    /** Sets the name displayed to entries for this team */
    setDisplayName(displayName: string): void
    /** Deprecated. seesetOption(org.bukkit.scoreboard.Team.Option, org.bukkit.scoreboard.TeamOptionStatus) */
    setNameTagVisibility(visibility: NameTagVisibility): void
    /** Set an option for this team */
    setOption(option: TeamOption, status: TeamOptionStatus): void
    /** Sets the prefix prepended to the display of entries on this team. */
    setPrefix(prefix: string): void
    /** Sets the suffix appended to the display of entries on this team. */
    setSuffix(suffix: string): void
    /** Unregisters this team from the Scoreboard */
    unregister(): void
}

interface Java {
    type(type: 'org.bukkit.scoreboard.DisplaySlot'): DisplaySlots
}

interface DisplaySlots {
    /**   */
    BELOW_NAME: DisplaySlot
    /**   */
    PLAYER_LIST: DisplaySlot
    /**   */
    SIDEBAR: DisplaySlot
}

interface DisplaySlot {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): DisplaySlot
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): DisplaySlot[]
}

interface Java {
    type(type: 'org.bukkit.scoreboard.RenderType'): RenderTypes
}

interface RenderTypes {
    /** Display number of hearts corresponding to value. */
    HEARTS: RenderType
    /** Display integer value. */
    INTEGER: RenderType
}

interface RenderType {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): RenderType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): RenderType[]
}

interface Score {
    /** Gets the entry being tracked by this Score */
    getEntry(): string
    /** Gets the Objective being tracked by this Score */
    getObjective(): Objective
    /** Deprecated. Scoreboards can contain entries that aren't players */
    getPlayer(): OfflinePlayer
    /** Gets the current score */
    getScore(): number
    /** Gets the scoreboard for the associated objective. */
    getScoreboard(): Scoreboard
    /** Shows if this score has been set at any point in time. */
    isScoreSet(): boolean
    /** Sets the current score. */
    setScore(score: number): void
}

interface Objective {
    /** Gets the criteria this objective tracks. */
    getCriteria(): string
    /** Gets the name displayed to players for this objective */
    getDisplayName(): string
    /** Gets the display slot this objective is displayed at. */
    getDisplaySlot(): DisplaySlot
    /** Gets the name of this Objective */
    getName(): string
    /** Sets manner in which this objective will be rendered. */
    getRenderType(): RenderType
    /** Gets an entry's Score for an Objective on this Scoreboard. */
    getScore(entry: string): Score
    /** Deprecated. Scoreboards can contain entries that aren't players */
    getScore(player: OfflinePlayer): Score
    /** Gets the scoreboard to which this objective is attached. */
    getScoreboard(): Scoreboard
    /** Gets if the objective's scores can be modified directly by a plugin. */
    isModifiable(): boolean
    /** Sets the name displayed to players for this objective. */
    setDisplayName(displayName: string): void
    /** Sets this objective to display on the specified slot for thescoreboard, removing it from any other display slot. */
    setDisplaySlot(slot: DisplaySlot): void
    /** Sets manner in which this objective will be rendered. */
    setRenderType(renderType: RenderType): void
    /** Unregisters this objective from the scoreboard. */
    unregister(): void
}

interface Scoreboard {
    /** Clears any objective in the specified slot. */
    clearSlot(slot: DisplaySlot): void
    /** Gets all entries tracked by this Scoreboard */
    getEntries(): string[]
    /** Gets a entries Team on this Scoreboard */
    getEntryTeam(entry: string): Team
    /** Gets an Objective on this Scoreboard by name */
    getObjective(name: string): Objective
    /** Gets the Objective currently displayed in a DisplaySlot on thisScoreboard */
    getObjective(slot: DisplaySlot): Objective
    /** Gets all Objectives on this Scoreboard */
    getObjectives(): Objective[]
    /** Gets all Objectives of a Criteria on the Scoreboard */
    getObjectivesByCriteria(criteria: string): Objective[]
    /** Deprecated. Scoreboards can contain entries that aren't players */
    getPlayers(): OfflinePlayer[]
    /** Deprecated. Scoreboards can contain entries that aren't players */
    getPlayerTeam(player: OfflinePlayer): Team
    /** Gets all scores for an entry on this Scoreboard */
    getScores(entry: string): Score[]
    /** Deprecated. Scoreboards can contain entries that aren't players */
    getScores(player: OfflinePlayer): Score[]
    /** Gets a Team by name on this Scoreboard */
    getTeam(teamName: string): Team
    /** Gets all teams on this Scoreboard */
    getTeams(): Team[]
    /** Deprecated. a displayName should be explicitly specified */
    registerNewObjective(name: string, criteria: string): Objective
    /** Registers an Objective on this Scoreboard */
    registerNewObjective(
        name: string,
        criteria: string,
        displayName: string
    ): Objective
    /** Registers an Objective on this Scoreboard */
    registerNewObjective(
        name: string,
        criteria: string,
        displayName: string,
        renderType: RenderType
    ): Objective
    /** Registers a Team on this Scoreboard */
    registerNewTeam(name: string): Team
    /** Removes all scores for an entry on this Scoreboard */
    resetScores(entry: string): void
    /** Deprecated. Scoreboards can contain entries that aren't players */
    resetScores(player: OfflinePlayer): void
}

interface ScoreboardManager {
    /** Gets the primary Scoreboard controlled by the server. */
    getMainScoreboard(): Scoreboard
    /** Gets a new Scoreboard to be tracked by the server. */
    getNewScoreboard(): Scoreboard
}

interface Tag<T extends Keyed> extends Keyed {
    /** Vanilla block tag representing all acacia log and bark variants.*/
    ACACIA_LOGS: Tag<Material>
    /** Vanilla block tag representing all damaged and undamaged anvils.*/
    ANVIL: Tag<Material>
    /** Vanilla block tag denoting all blocks bamboo may be planted on.*/
    BAMBOO_PLANTABLE_ON: Tag<Material>
    /** Vanilla block tag representing all banner blocks.*/
    BANNERS: Tag<Material>
    /** Vanilla block tag representing all beds.*/
    BEDS: Tag<Material>
    /** Vanilla block tag representing all birch log and bark variants.*/
    BIRCH_LOGS: Tag<Material>
    /** Vanilla block tag representing all buttons (inherits fromWOODEN_BUTTONS.*/
    BUTTONS: Tag<Material>
    /** Vanilla block tag representing all colors of carpet.*/
    CARPETS: Tag<Material>
    /** Vanilla block tag representing all coral blocks.*/
    CORAL_BLOCKS: Tag<Material>
    /** Vanilla block tag representing all coral plants.*/
    CORAL_PLANTS: Tag<Material>
    /** Vanilla block tag representing all coral.*/
    CORALS: Tag<Material>
    /** Vanilla block tag representing all dark oak log and bark variants.*/
    DARK_OAK_LOGS: Tag<Material>
    /** Vanilla block tag denoting dirt like blocks.*/
    DIRT_LIKE: Tag<Material>
    /** Vanilla block tag representing all doors (inherits fromWOODEN_DOORS.*/
    DOORS: Tag<Material>
    /** Vanilla block tag denoting blocks that enderman may pick up and hold.*/
    ENDERMAN_HOLDABLE: Tag<Material>
    /** Vanilla block tag representing all fences.*/
    FENCES: Tag<Material>
    /** Vanilla block tag representing all empty and filled flower pots.*/
    FLOWER_POTS: Tag<Material>
    /** Vanilla block tag denoting ice blocks.*/
    ICE: Tag<Material>
    /** Vanilla block tag denoting impermeable blocks which do not drip fluids.*/
    IMPERMEABLE: Tag<Material>
    /** Vanilla item tag representing all arrow items.*/
    ITEMS_ARROWS: Tag<Material>
    /** Vanilla item tag representing all banner items.*/
    ITEMS_BANNERS: Tag<Material>
    /** Vanilla item tag representing all boat items.*/
    ITEMS_BOATS: Tag<Material>
    /** Vanilla item tag representing all coal items.*/
    ITEMS_COALS: Tag<Material>
    /** Vanilla item tag representing all fish items.*/
    ITEMS_FISHES: Tag<Material>
    /** Vanilla item tag representing all music disc items.*/
    ITEMS_MUSIC_DISCS: Tag<Material>
    /** Vanilla block tag representing all jungle log and bark variants.*/
    JUNGLE_LOGS: Tag<Material>
    /** Vanilla block tag representing all leaves fans.*/
    LEAVES: Tag<Material>
    /** Vanilla block tag representing all log and bark variants.*/
    LOGS: Tag<Material>
    /** Vanilla block tag representing all oak log and bark variants.*/
    OAK_LOGS: Tag<Material>
    /** Vanilla block tag representing all plank variants.*/
    PLANKS: Tag<Material>
    /** Vanilla block tag representing all Minecart rails.*/
    RAILS: Tag<Material>
    /** Key for the built in block registry.*/
    REGISTRY_BLOCKS: string
    /** Key for the built in item registry.*/
    REGISTRY_ITEMS: string
    /** Vanilla block tag representing all sand blocks.*/
    SAND: Tag<Material>
    /** Vanilla block tag representing all sapling variants.*/
    SAPLINGS: Tag<Material>
    /** Vanilla block tag representing all signs.*/
    SIGNS: Tag<Material>
    /** Vanilla block tag representing all slabs.*/
    SLABS: Tag<Material>
    /** Vanilla block tag representing all small flowers.*/
    SMALL_FLOWERS: Tag<Material>
    /** Vanilla block tag representing all spruce log and bark variants.*/
    SPRUCE_LOGS: Tag<Material>
    /** Vanilla block tag representing all stairs.*/
    STAIRS: Tag<Material>
    /** Vanilla block tag representing all standing signs.*/
    STANDING_SIGNS: Tag<Material>
    /** Vanilla block tag representing all regular/mossy/cracked/chiseled stonebricks.*/
    STONE_BRICKS: Tag<Material>
    /** Vanilla block tag representing all trapdoors (inherits fromWOODEN_TRAPDOORS.*/
    TRAPDOORS: Tag<Material>
    /** Vanilla block tag denoting all underwater blocks which may be bonemealed.*/
    UNDERWATER_BONEMEALS: Tag<Material>
    /** Vanilla block tag denoting all valid mob spawn positions.*/
    VALID_SPAWN: Tag<Material>
    /** Vanilla block tag representing all wall corals.*/
    WALL_CORALS: Tag<Material>
    /** Vanilla block tag representing all wall signs.*/
    WALL_SIGNS: Tag<Material>
    /** Vanilla block tag representing all walls.*/
    WALLS: Tag<Material>
    /** Vanilla block tag representing all wooden buttons.*/
    WOODEN_BUTTONS: Tag<Material>
    /** Vanilla block tag representing all wooden doors.*/
    WOODEN_DOORS: Tag<Material>
    /** Vanilla block tag representing all wooden fences.*/
    WOODEN_FENCES: Tag<Material>
    /** Vanilla block tag representing all wooden pressure plates.*/
    WOODEN_PRESSURE_PLATES: Tag<Material>
    /** Vanilla block tag representing all wooden slabs.*/
    WOODEN_SLABS: Tag<Material>
    /** Vanilla block tag representing all wooden stairs.*/
    WOODEN_STAIRS: Tag<Material>
    /** Vanilla block tag representing all wooden trapdoors.*/
    WOODEN_TRAPDOORS: Tag<Material>
    /** Vanilla block tag representing all colors of wool.*/
    WOOL: Tag<Material>

    /** Gets an immutable set of all tagged items. */
    getValues(): any[]
    /** Returns whether or not this tag has an entry for the specified item. */
    isTagged(item: any): boolean
}

interface Server extends PluginMessageRecipient {
    /** Adds a recipe to the crafting manager. */
    addRecipe(recipe: Recipe): boolean
    /** Get an iterator through all advancements. */
    advancementIterator(): Iterator<Advancement>
    /** Bans the specified address from the server. */
    banIP(address: string): void
    /** Broadcasts the specified message to every user with the givenpermission name. */
    broadcast(message: string, permission: string): number
    /** Broadcast a message to all players. */
    broadcastMessage(message: string): number
    /** Clears the list of crafting recipes. */
    clearRecipes(): void
    /** Creates a new BlockData instance with material and propertiesparsed from provided data. */
    createBlockData(data: string): BlockData
    /** Creates a new BlockData instance for the specified Material, withall properties initialized to unspecified defaults. */
    createBlockData(material: Material): BlockData
    /** Creates a new BlockData instance for the specified Material, withall properties initialized to unspecified defaults, except for thoseprovided in data. */
    createBlockData(material: Material, data: string): BlockData
    /** Creates a new BlockData instance for the specified Material, withall properties initialized to unspecified defaults. */
    createBlockData(
        material: Material,
        consumer: (BlockData) => void
    ): BlockData
    /** Creates a boss bar instance to display to players. */
    createBossBar(
        title: string,
        color: BarColor,
        style: BarStyle,
        ...flags: BarFlag[]
    ): BossBar
    /** Creates a boss bar instance to display to players. */
    createBossBar(
        key: NamespacedKey,
        title: string,
        color: BarColor,
        style: BarStyle,
        ...flags: BarFlag[]
    ): KeyedBossBar
    /** Create a ChunkData for use in a generator. */
    createChunkData(world: World): ChunkGeneratorChunkData
    /** Create a new explorer map targeting the closest nearby structure of agiven StructureType. */
    createExplorerMap(
        world: World,
        location: Location,
        structureType: StructureType
    ): ItemStack
    /** Create a new explorer map targeting the closest nearby structure of agiven StructureType. */
    createExplorerMap(
        world: World,
        location: Location,
        structureType: StructureType,
        radius: number,
        findUnexplored: boolean
    ): ItemStack
    /** Creates an empty inventory of type InventoryType.CHEST with thespecified size. */
    createInventory(owner: InventoryHolder, size: number): Inventory
    /** Creates an empty inventory of type InventoryType.CHEST with thespecified size and title. */
    createInventory(
        owner: InventoryHolder,
        size: number,
        title: string
    ): Inventory
    /** Creates an empty inventory with the specified type. */
    createInventory(owner: InventoryHolder, type: InventoryType): Inventory
    /** Creates an empty inventory with the specified type and title. */
    createInventory(
        owner: InventoryHolder,
        type: InventoryType,
        title: string
    ): Inventory
    /** Create a new map with an automatically assigned ID. */
    createMap(world: World): MapView
    /** Creates an empty merchant. */
    createMerchant(title: string): Merchant
    /** Creates or loads a world with the given name using the specifiedoptions. */
    createWorld(creator: WorldCreator): World
    /** Dispatches a command on this server, and executes it if found. */
    dispatchCommand(sender: CommandSender, commandLine: string): boolean
    /** Get the advancement specified by this key. */
    getAdvancement(key: NamespacedKey): Advancement
    /** Gets whether this server allows the End or not. */
    getAllowEnd(): boolean
    /** Gets whether this server allows flying or not. */
    getAllowFlight(): boolean
    /** Gets whether this server allows the Nether or not. */
    getAllowNether(): boolean
    /** Gets user-specified limit for number of ambient mobs that can spawn ina chunk. */
    getAmbientSpawnLimit(): number
    /** Gets user-specified limit for number of animals that can spawn in achunk. */
    getAnimalSpawnLimit(): number
    /** Gets a ban list for the supplied type. */
    getBanList(type: BanListType): BanList
    /** Gets a set containing all banned players. */
    getBannedPlayers(): OfflinePlayer[]
    /** Gets the KeyedBossBar specified by this key. */
    getBossBar(key: NamespacedKey): KeyedBossBar
    /** Gets an unmodifiable iterator through all persistent bossbars. */
    getBossBars(): Iterator<KeyedBossBar>
    /** Gets the Bukkit version that this server is running. */
    getBukkitVersion(): string
    /** Gets a list of command aliases defined in the server properties. */
    getCommandAliases(): { [index: string]: string[] }
    /** Gets the value of the connection throttle setting. */
    getConnectionThrottle(): number
    /** Gets a ConsoleCommandSender that may be used as an input sourcefor this server. */
    getConsoleSender(): ConsoleCommandSender
    /** Gets the default GameMode for new players. */
    getDefaultGameMode(): GameMode
    /** Gets an entity on the server by its UUID */
    getEntity(uuid: UUID): Entity
    /** Get generate-structures setting. */
    getGenerateStructures(): boolean
    /** Gets the HelpMap providing help topics for this server. */
    getHelpMap(): HelpMap
    /** Gets the idle kick timeout. */
    getIdleTimeout(): number
    /** Get the IP that this server is bound to, or empty string if notspecified. */
    getIp(): string
    /** Gets a set containing all current IPs that are banned. */
    getIPBans(): string[]
    /** Gets the instance of the item factory (for ItemMeta). */
    getItemFactory(): ItemFactory
    /** Returns the primary logger associated with this server instance. */
    getLogger(): Logger
    /** Gets the specified LootTable. */
    getLootTable(key: NamespacedKey): LootTable
    /** Deprecated. Magic value */
    getMap(id: number): MapView
    /** Get the maximum amount of players which can login to this server. */
    getMaxPlayers(): number
    /** Gets the Messenger responsible for this server. */
    getMessenger(): Messenger
    /** Gets user-specified limit for number of monsters that can spawn in achunk. */
    getMonsterSpawnLimit(): number
    /** Gets the message that is displayed on the server list. */
    getMotd(): string
    /** Gets the name of this server implementation. */
    getName(): string
    /** Deprecated. Persistent storage of users should be by UUID as names are no longerunique past a single session. */
    getOfflinePlayer(name: string): OfflinePlayer
    /** Gets the player by the given UUID, regardless if they are offline oronline. */
    getOfflinePlayer(id: UUID): OfflinePlayer
    /** Gets every player that has ever played on this server. */
    getOfflinePlayers(): OfflinePlayer[]
    /** Gets whether the Server is in online mode or not. */
    getOnlineMode(): boolean
    /** Gets a view of all currently logged in players. */
    getOnlinePlayers(): Player[]
    /** Gets a set containing all player operators. */
    getOperators(): OfflinePlayer[]
    /** Deprecated. Use getPlayer(UUID) as player names are no longerguaranteed to be unique */
    getPlayer(name: string): Player
    /** Gets the player with the given UUID. */
    getPlayer(id: UUID): Player
    /** Deprecated. Use getPlayer(UUID) as player names are no longerguaranteed to be unique */
    getPlayerExact(name: string): Player
    /** Gets a PluginCommand with the given name or alias. */
    getPluginCommand(name: string): PluginCommand
    /** Gets the plugin manager for interfacing with plugins. */
    getPluginManager(): PluginManager
    /** Get the game port that the server runs on. */
    getPort(): number
    /** Get a list of all recipes for a given item. */
    getRecipesFor(result: ItemStack): Recipe[]
    /** Gets the scheduler for managing scheduled events. */
    getScheduler(): BukkitScheduler
    /** Gets the instance of the scoreboard manager. */
    getScoreboardManager(): ScoreboardManager
    /** Gets an instance of the server's default server-icon. */
    getServerIcon(): any //CachedServerIcon
    /** Gets a services manager. */
    getServicesManager(): any //ServicesManager
    /** Gets the default message that is displayed when the server is stopped. */
    getShutdownMessage(): string
    /** Gets the radius, in blocks, around each worlds spawn point to protect. */
    getSpawnRadius(): number
    /** Gets a tag which has already been defined within the server. */
    getTag<T extends Keyed>(
        registry: string,
        tag: NamespacedKey,
        clazz: new (...args) => T
    ): Tag<T>
    /** Gets a all tags which have been defined within the server. */
    getTags<T extends Keyed>(
        registry: string,
        clazz: new (...args) => T
    ): Iterable<Tag<T>>
    /** Gets default ticks per animal spawns value. */
    getTicksPerAnimalSpawns(): number
    /** Gets the default ticks per monster spawns value. */
    getTicksPerMonsterSpawns(): number
    /** Gets the name of the update folder. */
    getUpdateFolder(): string
    /** Gets the update folder. */
    getUpdateFolderFile(): File
    /** Gets the version string of this server implementation. */
    getVersion(): string
    /** Get the view distance from this server. */
    getViewDistance(): number
    /** Gets the current warning state for the server. */
    getWarningState(): any //Warning.WarningState
    /** Gets user-specified limit for number of water animals that can spawn ina chunk. */
    getWaterAnimalSpawnLimit(): number
    /** Gets a list of whitelisted players. */
    getWhitelistedPlayers(): OfflinePlayer[]
    /** Gets the world with the given name. */
    getWorld(name: string): World
    world(name: string): World
    /** Gets the world from the given Unique ID. */
    getWorld(uid: UUID): World
    /** Gets the folder that contains all of the various Worlds. */
    getWorldContainer(): File
    /** Gets a list of all worlds on this server. */
    getWorlds(): World[]
    /** Get world type (level-type setting) for default world. */
    getWorldType(): string
    /** Gets whether this server has a whitelist or not. */
    hasWhitelist(): boolean
    /** Gets whether the server is in hardcore mode or not. */
    isHardcore(): boolean
    /** Checks the current thread against the expected primary thread for theserver. */
    isPrimaryThread(): boolean
    /** Creates a cached server-icon for the specific image. */
    // loadServerIcon​(image: BufferedImage): CachedServerIcon
    /** Loads an image from a file, and returns a cached image for the specificserver-icon. */
    // loadServerIcon​(file: File): CachedServerIcon
    /** Deprecated. Use getPlayer(UUID) as player names are no longerguaranteed to be unique */
    matchPlayer(name: string): Player[]
    /** Get an iterator through the list of crafting recipes. */
    recipeIterator(): Iterator<Recipe>
    /** Reloads the server, refreshing settings and plugin information. */
    reload(): void
    /** Reload only the Minecraft data for the server. */
    reloadData(): void
    /** Reloads the whitelist from disk. */
    reloadWhitelist(): void
    /** Removes a KeyedBossBar specified by this key. */
    removeBossBar(key: NamespacedKey): boolean
    /** Resets the list of crafting recipes to the default. */
    resetRecipes(): void
    /** Writes loaded players to disk. */
    savePlayers(): void
    /** Selects entities using the given Vanilla selector. */
    selectEntities(sender: CommandSender, selector: string): Entity[]
    /** Sets the default GameMode for new players. */
    setDefaultGameMode(mode: GameMode): void
    /** Set the idle kick timeout. */
    setIdleTimeout(threshold: number): void
    /** Sets the radius, in blocks, around each worlds spawn point to protect. */
    setSpawnRadius(value: number): void
    /** Sets if the server is whitelisted. */
    setWhitelist(value: boolean): void
    /** Shutdowns the server, stopping everything. */
    shutdown(): void
    /** Unbans the specified address from the server. */
    unbanIP(address: string): void
    /** Unloads a world with the given name. */
    unloadWorld(name: string, save: boolean): boolean
    /** Unloads the given world. */
    unloadWorld(world: World, save: boolean): boolean
}

interface CommandSender extends Permissible {
    /** Gets the name of this command sender */
    getName(): string
    /** Returns the server instance that this command is running on */
    getServer(): Server
    /** Sends this sender a message */
    sendMessage(message: string): void
    /** Sends this sender multiple messages */
    sendMessage(messages: string[]): void
}

interface Nameable {
    /** Gets the custom name on a mob or block. */
    getCustomName(): string
    /** Sets a custom name on a mob or block. */
    setCustomName(name: string): void
}

interface PersistentDataHolder {
    /** Returns a custom tag container capable of storing tags on the object. */
    getPersistentDataContainer(): any //PersistentDataContainer
}

// interface PersistentDataContainer {
//    /** Returns the metadata value that is stored on thePersistentDataHolder instance. */
//    get​<T, Z>(key: NamespacedKey, type: PersistentDataType<T,Z>): Z
//    /** Returns the adapter context this tag container uses. */
//    getAdapterContext​(): PersistentDataAdapterContext
//    /** Returns the metadata value that is stored on thePersistentDataHolder instance. */
//    getOrDefault​(key: NamespacedKey, type: PersistentDataType<T,Z>, defaultValue: Z): <T,Z> Z
//    /** Returns if the persistent metadata provider has metadata registeredmatching the provided parameters. */
//    has​(key: NamespacedKey, type: PersistentDataType<T,Z>): <T,Z> boolean
//    /** Returns if the container instance is empty, therefore has no entriesinside it. */
//    isEmpty​(): boolean
//    /** Removes a custom key from the PersistentDataHolder instance. */
//    remove​(key: NamespacedKey): void
//    /** Stores a metadata value on the PersistentDataHolder instance. */
//    set​(key: NamespacedKey, type: PersistentDataType<T,Z>, value: Z): void
// }

interface Java {
    type(type: 'org.bukkit.util.BoundingBox'): BoundingBoxConstructor
}

interface BoundingBoxConstructor {
    new (): BoundingBox
    new (
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number
    ): BoundingBox
}

interface BoundingBox extends Object, Cloneable<BoundingBox> {
    /** Creates a copy of this bounding box. */
    clone(): BoundingBox
    /** Checks if this bounding box contains the specified position. */
    contains(x: number, y: number, z: number): boolean
    /** Checks if this bounding box fully contains the given bounding box. */
    contains(other: BoundingBox): boolean
    /** Checks if this bounding box contains the specified position. */
    contains(position: Vector): boolean
    /** Checks if this bounding box fully contains the bounding box that isdefined by the given corners. */
    contains(min: Vector, max: Vector): boolean
    /** Copies another bounding box. */
    copy(other: BoundingBox): BoundingBox
    /**   */
    deserialize(args: { [index: string]: Object }): BoundingBox
    /**   */
    equals(obj: Object): boolean
    /** Expands this bounding box uniformly by the given value in all directions. */
    expand(expansion: number): BoundingBox
    /** Expands this bounding box uniformly by the given values in both positiveand negative directions. */
    expand(x: number, y: number, z: number): BoundingBox
    /** Expands this bounding box in the specified direction. */
    expand(
        dirX: number,
        dirY: number,
        dirZ: number,
        expansion: number
    ): BoundingBox
    /** Expands this bounding box by the given values in the correspondingdirections. */
    expand(
        negativeX: number,
        negativeY: number,
        negativeZ: number,
        positiveX: number,
        positiveY: number,
        positiveZ: number
    ): BoundingBox
    /** Expands this bounding box in the direction specified by the given blockface. */
    expand(blockFace: BlockFace, expansion: number): BoundingBox
    /** Expands this bounding box uniformly by the given values in both positiveand negative directions. */
    expand(expansion: Vector): BoundingBox
    /** Expands this bounding box in the specified direction. */
    expand(direction: Vector, expansion: number): BoundingBox
    /** Expands this bounding box in the specified direction. */
    expandDirectional(dirX: number, dirY: number, dirZ: number): BoundingBox
    /** Expands this bounding box in the specified direction. */
    expandDirectional(direction: Vector): BoundingBox
    /** Gets the center of the bounding box. */
    getCenter(): Vector
    /** Gets the x coordinate of the center of the bounding box. */
    getCenterX(): number
    /** Gets the y coordinate of the center of the bounding box. */
    getCenterY(): number
    /** Gets the z coordinate of the center of the bounding box. */
    getCenterZ(): number
    /** Gets the height of the bounding box. */
    getHeight(): number
    /** Gets the maximum corner as vector. */
    getMax(): Vector
    /** Gets the maximum x value. */
    getMaxX(): number
    /** Gets the maximum y value. */
    getMaxY(): number
    /** Gets the maximum z value. */
    getMaxZ(): number
    /** Gets the minimum corner as vector. */
    getMin(): Vector
    /** Gets the minimum x value. */
    getMinX(): number
    /** Gets the minimum y value. */
    getMinY(): number
    /** Gets the minimum z value. */
    getMinZ(): number
    /** Gets the volume of the bounding box. */
    getVolume(): number
    /** Gets the width of the bounding box in the x direction. */
    getWidthX(): number
    /** Gets the width of the bounding box in the z direction. */
    getWidthZ(): number
    /**   */
    hashCode(): number
    /** Resizes this bounding box to represent the intersection of this and thegiven bounding box. */
    intersection(other: BoundingBox): BoundingBox
    /** Creates a new 1x1x1 sized bounding box containing the given block. */
    of(block: Block): BoundingBox
    /** Creates a new bounding box using the coordinates of the given blocks ascorners. */
    of(corner1: Block, corner2: Block): BoundingBox
    /** Creates a new bounding box using the given center and extents. */
    of(center: Location, x: number, y: number, z: number): BoundingBox
    /** Creates a new bounding box using the coordinates of the given locationsas corners. */
    of(corner1: Location, corner2: Location): BoundingBox
    /** Creates a new bounding box using the given center and extents. */
    of(center: Vector, x: number, y: number, z: number): BoundingBox
    /** Creates a new bounding box using the coordinates of the given vectors ascorners. */
    of(corner1: Vector, corner2: Vector): BoundingBox
    /** Checks if this bounding box overlaps with the given bounding box. */
    overlaps(other: BoundingBox): boolean
    /** Checks if this bounding box overlaps with the bounding box that isdefined by the given corners. */
    overlaps(min: Vector, max: Vector): boolean
    /** Calculates the intersection of this bounding box with the specified linesegment. */
    rayTrace(
        start: Vector,
        direction: Vector,
        maxDistance: number
    ): RayTraceResult
    /** Resizes this bounding box. */
    resize(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number
    ): BoundingBox
    /** Creates a Map representation of this class. */
    serialize(): { [index: string]: Object }
    /** Shifts this bounding box by the given amounts. */
    shift(shiftX: number, shiftY: number, shiftZ: number): BoundingBox
    /** Shifts this bounding box by the given amounts. */
    shift(shift: Location): BoundingBox
    /** Shifts this bounding box by the given amounts. */
    shift(shift: Vector): BoundingBox
    /**   */
    toString(): string
    /** Expands this bounding box to contain (or border) the specified position. */
    union(posX: number, posY: number, posZ: number): BoundingBox
    /** Expands this bounding box to contain (or border) the specified position. */
    union(position: Location): BoundingBox
    /** Expands this bounding box to contain both this and the given boundingbox. */
    union(other: BoundingBox): BoundingBox
    /** Expands this bounding box to contain (or border) the specified position. */
    union(position: Vector): BoundingBox
}

interface Java {
    type(type: 'org.bukkit.EntityEffect'): EntityEffects
}

interface EntityEffects {
    /** Armor stand is hit. */
    ARMOR_STAND_HIT: EntityEffect
    /** Colored particles from a tipped arrow. */
    ARROW_PARTICLES: EntityEffect
    /** Deprecated. although this effect may trigger other events on non-livingentities, it's only supported usage is on living ones. */
    DEATH: EntityEffect
    /** Silverfish entering block, spawner spawning. */
    ENTITY_POOF: EntityEffect
    /** When a firework explodes. */
    FIREWORK_EXPLODE: EntityEffect
    /** Guardian sets laser target. */
    GUARDIAN_TARGET: EntityEffect
    /** When mobs get hurt. */
    HURT: EntityEffect
    /** Entity hurt due to drowning damage. */
    HURT_DROWN: EntityEffect
    /** Entity hurt due to explosion damage. */
    HURT_EXPLOSION: EntityEffect
    /** When an Iron Golem gives a rose. */
    IRON_GOLEM_ROSE: EntityEffect
    /** Iron golem puts away rose. */
    IRON_GOLEM_SHEATH: EntityEffect
    /** Hearts from a breeding entity. */
    LOVE_HEARTS: EntityEffect
    /** Rabbit jumping. */
    RABBIT_JUMP: EntityEffect
    /** Deprecated. although this effect may trigger other events on non-livingentities, it's only supported usage is on living ones. */
    SHEEP_EAT: EntityEffect
    /** Shield blocks attack. */
    SHIELD_BLOCK: EntityEffect
    /** Shield breaks. */
    SHIELD_BREAK: EntityEffect
    /** Resets squid rotation. */
    SQUID_ROTATE: EntityEffect
    /** Entity hurt by thorns attack. */
    THORNS_HURT: EntityEffect
    /** Totem prevents entity death. */
    TOTEM_RESURRECT: EntityEffect
    /** When a villager is angry. */
    VILLAGER_ANGRY: EntityEffect
    /** Happy particles from a villager. */
    VILLAGER_HAPPY: EntityEffect
    /** Hearts from a villager. */
    VILLAGER_HEART: EntityEffect
    /** Magic particles from a witch. */
    WITCH_MAGIC: EntityEffect
    /** The hearts when taming a wolf succeeds. */
    WOLF_HEARTS: EntityEffect
    /** When a wolf shakes (after being wet). */
    WOLF_SHAKE: EntityEffect
    /** The smoke when taming a wolf fails. */
    WOLF_SMOKE: EntityEffect
    /** When a zombie transforms into a villager by shaking violently. */
    ZOMBIE_TRANSFORM: EntityEffect
}

interface EntityEffect {
    /** Gets entity superclass which this affect is applicable to. */
    getApplicable<T extends Entity>(): new (...args) => T
    /** Deprecated. Magic value */
    getByData(data: number): EntityEffect
    /** Deprecated. Magic value */
    getData(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EntityEffect
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EntityEffect[]
}

interface Java {
    type(type: 'org.bukkit.entity.Pose'): Poses
}

interface Poses {
    /** Entity is dead. */
    DYING: Pose
    /** Entity is gliding. */
    FALL_FLYING: Pose
    /** Entity is sleeping. */
    SLEEPING: Pose
    /** Entity is sneaking. */
    SNEAKING: Pose
    /** Entity is riptiding with a trident. */
    SPIN_ATTACK: Pose
    /** Entity is standing normally. */
    STANDING: Pose
    /** Entity is swimming. */
    SWIMMING: Pose
}

interface Pose {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): Pose
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): Pose[]
}

interface Java {
    type(
        type: 'org.bukkit.event.player.PlayerTeleportEvent.TeleportCause'
    ): PlayerTeleportEventTeleportCauses
}

interface PlayerTeleportEventTeleportCauses {
    /** Indicates the teleportation was caused by a player consuming chorusfruit */
    CHORUS_FRUIT: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by a player executing acommand */
    COMMAND: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by a player entering an Endgateway */
    END_GATEWAY: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by a player entering an Endportal */
    END_PORTAL: PlayerTeleportEventTeleportCause
    /** Indicates the teleporation was caused by a player throwing an EnderPearl */
    ENDER_PEARL: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by a player entering aNether portal */
    NETHER_PORTAL: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by a plugin */
    PLUGIN: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by a player teleporting to aEntity/Player via the spectator menu */
    SPECTATE: PlayerTeleportEventTeleportCause
    /** Indicates the teleportation was caused by an event not covered bythis enum */
    UNKNOWN: PlayerTeleportEventTeleportCause
}

interface PlayerTeleportEventTeleportCause {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): PlayerTeleportEventTeleportCause
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): PlayerTeleportEventTeleportCause[]
}

interface Java {
    type(type: 'org.bukkit.entity.EntityType'): EntityTypes
}

interface EntityTypes {
    /**   */
    AREA_EFFECT_CLOUD: EntityType
    /** Mechanical entity with an inventory for placing weapons / armor into. */
    ARMOR_STAND: EntityType
    /** An arrow projectile; may get stuck in the ground. */
    ARROW: EntityType
    /**   */
    BAT: EntityType
    /**   */
    BLAZE: EntityType
    /** A placed boat. */
    BOAT: EntityType
    /**   */
    CAT: EntityType
    /**   */
    CAVE_SPIDER: EntityType
    /**   */
    CHICKEN: EntityType
    /**   */
    COD: EntityType
    /**   */
    COW: EntityType
    /**   */
    CREEPER: EntityType
    /**   */
    DOLPHIN: EntityType
    /**   */
    DONKEY: EntityType
    /** Like FIREBALL but with added effects. */
    DRAGON_FIREBALL: EntityType
    /** An item resting on the ground. */
    DROPPED_ITEM: EntityType
    /**   */
    DROWNED: EntityType
    /** A flying chicken egg. */
    EGG: EntityType
    /**   */
    ELDER_GUARDIAN: EntityType
    /**   */
    ENDER_CRYSTAL: EntityType
    /**   */
    ENDER_DRAGON: EntityType
    /** A flying ender pearl. */
    ENDER_PEARL: EntityType
    /** An ender eye signal. */
    ENDER_SIGNAL: EntityType
    /**   */
    ENDERMAN: EntityType
    /**   */
    ENDERMITE: EntityType
    /**   */
    EVOKER: EntityType
    /**   */
    EVOKER_FANGS: EntityType
    /** An experience orb. */
    EXPERIENCE_ORB: EntityType
    /** A block that is going to or is about to fall. */
    FALLING_BLOCK: EntityType
    /** A flying large fireball, as thrown by a Ghast for example. */
    FIREBALL: EntityType
    /** Internal representation of a Firework once it has been launched. */
    FIREWORK: EntityType
    /** A fishing line and bobber. */
    FISHING_HOOK: EntityType
    /**   */
    FOX: EntityType
    /**   */
    GHAST: EntityType
    /**   */
    GIANT: EntityType
    /**   */
    GUARDIAN: EntityType
    /**   */
    HORSE: EntityType
    /**   */
    HUSK: EntityType
    /**   */
    ILLUSIONER: EntityType
    /**   */
    IRON_GOLEM: EntityType
    /** An item frame on a wall. */
    ITEM_FRAME: EntityType
    /** A leash attached to a fencepost. */
    LEASH_HITCH: EntityType
    /** A bolt of lightning. */
    LIGHTNING: EntityType
    /**   */
    LLAMA: EntityType
    /**   */
    LLAMA_SPIT: EntityType
    /**   */
    MAGMA_CUBE: EntityType
    /**   */
    MINECART: EntityType
    /**   */
    MINECART_CHEST: EntityType
    /**   */
    MINECART_COMMAND: EntityType
    /**   */
    MINECART_FURNACE: EntityType
    /**   */
    MINECART_HOPPER: EntityType
    /**   */
    MINECART_MOB_SPAWNER: EntityType
    /**   */
    MINECART_TNT: EntityType
    /**   */
    MULE: EntityType
    /**   */
    MUSHROOM_COW: EntityType
    /**   */
    OCELOT: EntityType
    /** A painting on a wall. */
    PAINTING: EntityType
    /**   */
    PANDA: EntityType
    /**   */
    PARROT: EntityType
    /**   */
    PHANTOM: EntityType
    /**   */
    PIG: EntityType
    /**   */
    PIG_ZOMBIE: EntityType
    /**   */
    PILLAGER: EntityType
    /**   */
    PLAYER: EntityType
    /**   */
    POLAR_BEAR: EntityType
    /** Primed TNT that is about to explode. */
    PRIMED_TNT: EntityType
    /**   */
    PUFFERFISH: EntityType
    /**   */
    RABBIT: EntityType
    /**   */
    RAVAGER: EntityType
    /**   */
    SALMON: EntityType
    /**   */
    SHEEP: EntityType
    /**   */
    SHULKER: EntityType
    /** Bullet fired by SHULKER. */
    SHULKER_BULLET: EntityType
    /**   */
    SILVERFISH: EntityType
    /**   */
    SKELETON: EntityType
    /**   */
    SKELETON_HORSE: EntityType
    /**   */
    SLIME: EntityType
    /** A flying small fireball, such as thrown by a Blaze or player. */
    SMALL_FIREBALL: EntityType
    /** A flying snowball. */
    SNOWBALL: EntityType
    /**   */
    SNOWMAN: EntityType
    /** Like ARROW but causes the PotionEffectType.GLOWING effect on all team members. */
    SPECTRAL_ARROW: EntityType
    /**   */
    SPIDER: EntityType
    /** A flying splash potion. */
    SPLASH_POTION: EntityType
    /**   */
    SQUID: EntityType
    /**   */
    STRAY: EntityType
    /** A flying experience bottle. */
    THROWN_EXP_BOTTLE: EntityType
    /**   */
    TRADER_LLAMA: EntityType
    /**   */
    TRIDENT: EntityType
    /**   */
    TROPICAL_FISH: EntityType
    /**   */
    TURTLE: EntityType
    /** An unknown entity without an Entity Class */
    UNKNOWN: EntityType
    /**   */
    VEX: EntityType
    /**   */
    VILLAGER: EntityType
    /**   */
    VINDICATOR: EntityType
    /**   */
    WANDERING_TRADER: EntityType
    /**   */
    WITCH: EntityType
    /**   */
    WITHER: EntityType
    /**   */
    WITHER_SKELETON: EntityType
    /** A flying wither skull projectile. */
    WITHER_SKULL: EntityType
    /**   */
    WOLF: EntityType
    /**   */
    ZOMBIE: EntityType
    /**   */
    ZOMBIE_HORSE: EntityType
    /**   */
    ZOMBIE_VILLAGER: EntityType
}

interface EntityType extends Keyed {
    /** Deprecated. Magic value */
    fromId(id: number): EntityType
    /** Deprecated. Magic value */
    fromName(name: string): EntityType
    /**   */
    getEntityClass<T extends Entity>(): new (...args: any[]) => T
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Deprecated. Magic value */
    getName(): string
    /** Deprecated. Magic value */
    getTypeId(): number
    /**   */
    isAlive(): boolean
    /** Some entities cannot be spawned using World.spawnEntity(Location, EntityType) or World.spawn(Location, Class), usually because they require additionalinformation in order to spawn. */
    isSpawnable(): boolean
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EntityType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EntityType[]
}

interface Entity
    extends Metadatable,
        CommandSender,
        Nameable,
        PersistentDataHolder {
    /** Add a passenger to the vehicle. */
    addPassenger(passenger: Entity): boolean
    /** Add a tag to this entity. */
    addScoreboardTag(tag: string): boolean
    /** Eject any passenger. */
    eject(): boolean
    /** Gets the entity's current bounding box. */
    getBoundingBox(): BoundingBox
    /** Returns a unique id for this entity */
    getEntityId(): number
    /** Get the closest cardinal BlockFace direction an entity iscurrently facing. */
    getFacing(): BlockFace
    /** Returns the distance this entity has fallen */
    getFallDistance(): number
    /** Returns the entity's current fire ticks (ticks before the entity stopsbeing on fire). */
    getFireTicks(): number
    /** Gets the entity's height */
    getHeight(): number
    /** Retrieve the last EntityDamageEvent inflicted on this entity. */
    getLastDamageCause(): EntityDamageEvent
    /** Gets the entity's current position */
    getLocation(): Location
    location: Location
    /** Stores the entity's current position in the provided Location object. */
    getLocation(loc: Location): Location
    /** Returns the entity's maximum fire ticks. */
    getMaxFireTicks(): number
    /** Returns a list of entities within a bounding box centered around thisentity */
    getNearbyEntities(x: number, y: number, z: number): Entity[]
    /** Deprecated. entities may have multiple passengers, usegetPassengers() */
    getPassenger(): Entity
    /** Gets a list of passengers of this vehicle. */
    getPassengers(): Entity[]
    /** Returns the reaction of the entity when moved by a piston. */
    getPistonMoveReaction(): PistonMoveReaction
    /** Gets the period of time (in ticks) before this entity can use a portal. */
    getPortalCooldown(): number
    /** Gets the entity's current pose. */
    getPose(): Pose
    /** Returns a set of tags for this entity. */
    getScoreboardTags(): string[]
    /** Gets the Server that contains this Entity */
    getServer(): Server
    /** Gets the amount of ticks this entity has lived for. */
    getTicksLived(): number
    /** Get the type of the entity. */
    getType(): EntityType
    type: EntityType
    /** Returns a unique and persistent id for this entity */
    getUniqueId(): UUID
    /** Get the vehicle that this player is inside. */
    getVehicle(): Entity
    /** Gets this entity's current velocity */
    getVelocity(): Vector
    /** Gets the entity's width */
    getWidth(): number
    /** Gets the current world this entity resides in */
    getWorld(): World
    world: World
    /** Returns whether gravity applies to this entity. */
    hasGravity(): boolean
    /** Gets whether or not the mob's custom name is displayed client side. */
    isCustomNameVisible(): boolean
    /** Returns true if this entity has been marked for removal. */
    isDead(): boolean
    /** Check if a vehicle has passengers. */
    isEmpty(): boolean
    /** Gets whether the entity is glowing or not. */
    isGlowing(): boolean
    /** Returns whether this entity is inside a vehicle. */
    isInsideVehicle(): boolean
    /** Gets whether the entity is invulnerable or not. */
    isInvulnerable(): boolean
    /** Returns true if the entity is supported by a block. */
    isOnGround(): boolean
    /** Deprecated. draft API */
    isPersistent(): boolean
    /** Gets whether the entity is silent or not. */
    isSilent(): boolean
    /** Returns false if the entity has died or been despawned for some otherreason. */
    isValid(): boolean
    /** Leave the current vehicle. */
    leaveVehicle(): boolean
    /** Performs the specified EntityEffect for this entity. */
    playEffect(type: EntityEffect): void
    /** Mark the entity's removal. */
    remove(): void
    /** Remove a passenger from the vehicle. */
    removePassenger(passenger: Entity): boolean
    /** Removes a given tag from this entity. */
    removeScoreboardTag(tag: string): boolean
    /** Sets whether or not to display the mob's custom name client side. */
    setCustomNameVisible(flag: boolean): void
    /** Sets the fall distance for this entity */
    setFallDistance(distance: number): void
    /** Sets the entity's current fire ticks (ticks before the entity stopsbeing on fire). */
    setFireTicks(ticks: number): void
    /** Sets whether the entity has a team colored (default: white) glow. */
    setGlowing(flag: boolean): void
    /** Sets whether gravity applies to this entity. */
    setGravity(gravity: boolean): void
    /** Sets whether the entity is invulnerable or not. */
    setInvulnerable(flag: boolean): void
    /** Record the last EntityDamageEvent inflicted on this entity */
    setLastDamageCause(event: EntityDamageEvent): void
    /** Deprecated. entities may have multiple passengers, usegetPassengers() */
    setPassenger(passenger: Entity): boolean
    /** Deprecated. draft API */
    setPersistent(persistent: boolean): void
    /** Sets the period of time (in ticks) before this entity can use a portal. */
    setPortalCooldown(cooldown: number): void
    /** Deprecated. draft API */
    setRotation(yaw: number, pitch: number): void
    /** Sets whether the entity is silent or not. */
    setSilent(flag: boolean): void
    /** Sets the amount of ticks this entity has lived for. */
    setTicksLived(value: number): void
    /** Sets this entity's velocity */
    setVelocity(velocity: Vector): void
    /** Teleports this entity to the target Entity. */
    teleport(destination: Entity): boolean
    /** Teleports this entity to the target Entity. */
    teleport(
        destination: Entity,
        cause: PlayerTeleportEventTeleportCause
    ): boolean
    /** Teleports this entity to the given location. */
    teleport(location: Location): boolean
    /** Teleports this entity to the given location. */
    teleport(
        location: Location,
        cause: PlayerTeleportEventTeleportCause
    ): boolean
}

interface Java {
    type(
        type: 'org.bukkit.event.entity.EntityDamageEvent.DamageCause'
    ): EntityDamageEventDamageCauses
}

interface EntityDamageEventDamageCauses {
    /** Damage caused by being in the area when a block explodes. */
    BLOCK_EXPLOSION: EntityDamageEventDamageCause
    /** Damage caused when an entity contacts a block such as a Cactus. */
    CONTACT: EntityDamageEventDamageCause
    /** Damage caused when an entity is colliding with too many entities dueto the maxEntityCramming game rule. */
    CRAMMING: EntityDamageEventDamageCause
    /** Custom damage. */
    CUSTOM: EntityDamageEventDamageCause
    /** Damage caused by a dragon breathing fire. */
    DRAGON_BREATH: EntityDamageEventDamageCause
    /** Damage caused by running out of air while in water */
    DROWNING: EntityDamageEventDamageCause
    /** Damage caused when an entity that should be in water is not. */
    DRYOUT: EntityDamageEventDamageCause
    /** Damage caused when an entity attacks another entity. */
    ENTITY_ATTACK: EntityDamageEventDamageCause
    /** Damage caused by being in the area when an entity, such as aCreeper, explodes. */
    ENTITY_EXPLOSION: EntityDamageEventDamageCause
    /** Damage caused when an entity attacks another entity in a sweep attack. */
    ENTITY_SWEEP_ATTACK: EntityDamageEventDamageCause
    /** Damage caused when an entity falls a distance greater than 3 blocks */
    FALL: EntityDamageEventDamageCause
    /** Damage caused by being hit by a falling block which deals damage */
    FALLING_BLOCK: EntityDamageEventDamageCause
    /** Damage caused by direct exposure to fire */
    FIRE: EntityDamageEventDamageCause
    /** Damage caused due to burns caused by fire */
    FIRE_TICK: EntityDamageEventDamageCause
    /** Damage caused when an entity runs into a wall. */
    FLY_INTO_WALL: EntityDamageEventDamageCause
    /** Damage caused when an entity steps on Material.MAGMA_BLOCK. */
    HOT_FLOOR: EntityDamageEventDamageCause
    /** Damage caused by direct exposure to lava */
    LAVA: EntityDamageEventDamageCause
    /** Damage caused by being struck by lightning */
    LIGHTNING: EntityDamageEventDamageCause
    /** Damage caused by being hit by a damage potion or spell */
    MAGIC: EntityDamageEventDamageCause
    /** Damage caused due to a snowman melting */
    MELTING: EntityDamageEventDamageCause
    /** Damage caused due to an ongoing poison effect */
    POISON: EntityDamageEventDamageCause
    /** Damage caused when attacked by a projectile. */
    PROJECTILE: EntityDamageEventDamageCause
    /** Damage caused by starving due to having an empty hunger bar */
    STARVATION: EntityDamageEventDamageCause
    /** Damage caused by being put in a block */
    SUFFOCATION: EntityDamageEventDamageCause
    /** Damage caused by committing suicide using the command "/kill" */
    SUICIDE: EntityDamageEventDamageCause
    /** Damage caused in retaliation to another attack by the Thornsenchantment. */
    THORNS: EntityDamageEventDamageCause
    /** Damage caused by falling into the void */
    VOID: EntityDamageEventDamageCause
    /** Damage caused by Wither potion effect */
    WITHER: EntityDamageEventDamageCause
}

interface EntityDamageEventDamageCause {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EntityDamageEventDamageCause
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EntityDamageEventDamageCause[]
}

interface Java {
    type(
        type: 'org.bukkit.event.entity.EntityDamageEvent'
    ): EntityDamageEventConstructor
}

interface Java {
    type(
        type: 'org.bukkit.event.entity.EntityDamageEvent.DamageModifier'
    ): EntityDamageEventDamageModifiers
}

interface EntityDamageEventDamageModifiers {
    /** Deprecated. This represents the damage reduction caused by the absorption potioneffect. */
    ABSORPTION: EntityDamageEventDamageModifier
    /** Deprecated. This represents the damage reduction caused by wearing armor. */
    ARMOR: EntityDamageEventDamageModifier
    /** Deprecated. This represents the amount of damage being done, also known as theraw EntityDamageEvent.getDamage(). */
    BASE: EntityDamageEventDamageModifier
    /** Deprecated. This represents the damage reduction caused by blocking, only present forPlayers. */
    BLOCKING: EntityDamageEventDamageModifier
    /** Deprecated. This represents the damage reduced by a wearing a helmet when hitby a falling block. */
    HARD_HAT: EntityDamageEventDamageModifier
    /** Deprecated. This represents the damage reduction caused by the combination of:Armor enchantmentsWitch's potion resistance */
    MAGIC: EntityDamageEventDamageModifier
    /** Deprecated. This represents the damage reduction caused by the Resistance potion effect. */
    RESISTANCE: EntityDamageEventDamageModifier
}

interface EntityDamageEventDamageModifier {
    /** Deprecated. Returns the enum constant of this type with the specified name. */
    valueOf(name: string): EntityDamageEventDamageModifier
    /** Deprecated. Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): EntityDamageEventDamageModifier[]
}
interface Java {
    type(type: 'org.bukkit.event.entity.EntityEvent'): EntityEventConstructor
}

interface EntityEventConstructor {
    new (what: Entity): EntityEvent
}

interface EntityEvent extends Event {
    /**  */
    entity: Entity
    /** Returns the Entity involved in this event */
    getEntity(): Entity
    /** Gets the EntityType of the Entity involved in this event. */
    getEntityType(): EntityType
}

interface EntityDamageEventConstructor {
    new (
        damagee: Entity,
        cause: EntityDamageEventDamageCause,
        damage: number
    ): EntityDamageEvent
    new (
        damagee: Entity,
        cause: EntityDamageEventDamageCause,
        modifiers: Map<EntityDamageEventDamageModifier, number>,
        modifierFunctions: Map<EntityDamageEventDamageModifier, any>
    ): EntityDamageEvent
}

interface Cancellable {
    /** Gets the cancellation state of this event. */
    isCancelled(): boolean
    /** Sets the cancellation state of this event. */
    setCancelled(cancel: boolean): void
}

interface EntityDamageEvent extends EntityEvent, Cancellable {
    /** Gets the cause of the damage. */
    getCause(): EntityDamageEventDamageCause
    /** Gets the raw amount of damage caused by the event */
    getDamage(): number
    /** Gets the damage change for some modifier */
    getDamage(type: EntityDamageEventDamageModifier): number
    /** Gets the amount of damage caused by the event after all damagereduction is applied. */
    getFinalDamage(): number
    /**   */
    getHandlerList(): HandlerList
    /**   */
    getHandlers(): HandlerList
    /** Gets the original damage for the specified modifier, as defined at thisevent's construction. */
    getOriginalDamage(type: EntityDamageEventDamageModifier): number
    /** This checks to see if a particular modifier is valid for this event'scaller, such that, setDamage(DamageModifier, double) will notthrow an UnsupportedOperationException. */
    isApplicable(type: EntityDamageEventDamageModifier): boolean
    /** Gets the cancellation state of this event. */
    isCancelled(): boolean
    /** Sets the cancellation state of this event. */
    setCancelled(cancel: boolean): void
    /** Sets the raw amount of damage caused by the event. */
    setDamage(damage: number): void
    /** Sets the damage for the specified modifier. */
    setDamage(type: EntityDamageEventDamageModifier, damage: number): void
}

interface Vector {
    /** Adds a vector to this one */
    add(vec: Vector): Vector
    /** Gets the angle between this vector and another in radians. */
    angle(other: Vector): number
    /** Check if each component of this Vector is finite. */
    checkFinite(): void
    /** Get a new vector. */
    clone(): Vector
    /** Copies another vector */
    copy(vec: Vector): Vector
    /** Calculates the cross product of this vector with another. */
    crossProduct(o: Vector): Vector
    /**   */
    deserialize(args: { [index: string]: Object }): Vector
    /** Get the distance between this vector and another. */
    distance(o: Vector): number
    /** Get the squared distance between this vector and another. */
    distanceSquared(o: Vector): number
    /** Divides the vector by another. */
    divide(vec: Vector): Vector
    /** Calculates the dot product of this vector with another. */
    dot(other: Vector): number
    /** Checks to see if two objects are equal. */
    equals(obj: Object): boolean
    /** Gets the floored value of the X component, indicating the block thatthis vector is contained with. */
    getBlockX(): number
    /** Gets the floored value of the Y component, indicating the block thatthis vector is contained with. */
    getBlockY(): number
    /** Gets the floored value of the Z component, indicating the block thatthis vector is contained with. */
    getBlockZ(): number
    /** Calculates the cross product of this vector with another without mutatingthe original. */
    getCrossProduct(o: Vector): Vector
    /** Get the threshold used for equals(). */
    getEpsilon(): number
    /** Gets the maximum components of two vectors. */
    getMaximum(v1: Vector, v2: Vector): Vector
    /** Gets a new midpoint vector between this vector and another. */
    getMidpoint(other: Vector): Vector
    /** Gets the minimum components of two vectors. */
    getMinimum(v1: Vector, v2: Vector): Vector
    /** Gets a random vector with components having a random value between 0and 1. */
    getRandom(): Vector
    /** Gets the X component. */
    getX(): number
    /** Gets the Y component. */
    getY(): number
    /** Gets the Z component. */
    getZ(): number
    /** Returns a hash code for this vector */
    hashCode(): number
    /** Returns whether this vector is in an axis-aligned bounding box. */
    isInAABB(min: Vector, max: Vector): boolean
    /** Returns whether this vector is within a sphere. */
    isInSphere(origin: Vector, radius: number): boolean
    /** Returns if a vector is normalized */
    isNormalized(): boolean
    /** Gets the magnitude of the vector, defined as sqrt(x^2+y^2+z^2). */
    length(): number
    /** Gets the magnitude of the vector squared. */
    lengthSquared(): number
    /** Sets this vector to the midpoint between this vector and another. */
    midpoint(other: Vector): Vector
    /** Performs scalar multiplication, multiplying all components with ascalar. */
    multiply(m: number): Vector
    /** Performs scalar multiplication, multiplying all components with ascalar. */
    multiply(m: number): Vector
    /** Performs scalar multiplication, multiplying all components with ascalar. */
    multiply(m: number): Vector
    /** Multiplies the vector by another. */
    multiply(vec: Vector): Vector
    /** Converts this vector to a unit vector (a vector with length of 1). */
    normalize(): Vector
    /** Rotates the vector around a given arbitrary axis in 3 dimensional space. */
    rotateAroundAxis(axis: Vector, angle: number): Vector
    /** Rotates the vector around a given arbitrary axis in 3 dimensional space. */
    rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector
    /** Rotates the vector around the x axis. */
    rotateAroundX(angle: number): Vector
    /** Rotates the vector around the y axis. */
    rotateAroundY(angle: number): Vector
    /** Rotates the vector around the z axis */
    rotateAroundZ(angle: number): Vector
    /** Creates a Map representation of this class. */
    serialize(): { [index: string]: Object }
    /** Set the X component. */
    setX(x: number): Vector
    /** Set the X component. */
    setX(x: number): Vector
    /** Set the X component. */
    setX(x: number): Vector
    /** Set the Y component. */
    setY(y: number): Vector
    /** Set the Y component. */
    setY(y: number): Vector
    /** Set the Y component. */
    setY(y: number): Vector
    /** Set the Z component. */
    setZ(z: number): Vector
    /** Set the Z component. */
    setZ(z: number): Vector
    /** Set the Z component. */
    setZ(z: number): Vector
    /** Subtracts a vector from this one. */
    subtract(vec: Vector): Vector
    /** Get the block vector of this vector. */
    toBlockVector(): BlockVector
    /** Gets a Location version of this vector with yaw and pitch being 0. */
    toLocation(world: World): Location
    /** Gets a Location version of this vector. */
    toLocation(world: World, yaw: number, pitch: number): Location
    /** Returns this vector's components as x,y,z. */
    toString(): string
    /** Zero this vector's components. */
    zero(): Vector
}

interface Java {
    type(type: 'org.bukkit.Achievement'): Achievements
}

interface Achievements {
    /** Deprecated.   */
    ACQUIRE_IRON: Achievement
    /** Deprecated.   */
    BAKE_CAKE: Achievement
    /** Deprecated.   */
    BOOKCASE: Achievement
    /** Deprecated.   */
    BREED_COW: Achievement
    /** Deprecated.   */
    BREW_POTION: Achievement
    /** Deprecated.   */
    BUILD_BETTER_PICKAXE: Achievement
    /** Deprecated.   */
    BUILD_FURNACE: Achievement
    /** Deprecated.   */
    BUILD_HOE: Achievement
    /** Deprecated.   */
    BUILD_PICKAXE: Achievement
    /** Deprecated.   */
    BUILD_SWORD: Achievement
    /** Deprecated.   */
    BUILD_WORKBENCH: Achievement
    /** Deprecated.   */
    COOK_FISH: Achievement
    /** Deprecated.   */
    DIAMONDS_TO_YOU: Achievement
    /** Deprecated.   */
    ENCHANTMENTS: Achievement
    /** Deprecated.   */
    END_PORTAL: Achievement
    /** Deprecated.   */
    EXPLORE_ALL_BIOMES: Achievement
    /** Deprecated.   */
    FLY_PIG: Achievement
    /** Deprecated.   */
    FULL_BEACON: Achievement
    /** Deprecated.   */
    GET_BLAZE_ROD: Achievement
    /** Deprecated.   */
    GET_DIAMONDS: Achievement
    /** Deprecated.   */
    GHAST_RETURN: Achievement
    /** Deprecated.   */
    KILL_COW: Achievement
    /** Deprecated.   */
    KILL_ENEMY: Achievement
    /** Deprecated.   */
    KILL_WITHER: Achievement
    /** Deprecated.   */
    MAKE_BREAD: Achievement
    /** Deprecated.   */
    MINE_WOOD: Achievement
    /** Deprecated.   */
    NETHER_PORTAL: Achievement
    /** Deprecated.   */
    ON_A_RAIL: Achievement
    /** Deprecated.   */
    OPEN_INVENTORY: Achievement
    /** Deprecated.   */
    OVERKILL: Achievement
    /** Deprecated.   */
    OVERPOWERED: Achievement
    /** Deprecated.   */
    SNIPE_SKELETON: Achievement
    /** Deprecated.   */
    SPAWN_WITHER: Achievement
    /** Deprecated.   */
    THE_END: Achievement
}

interface Achievement {
    /** Deprecated. Returns the parent achievement of this achievement, or null if none. */
    getParent(): Achievement
    /** Deprecated. Returns whether or not this achievement has a parent achievement. */
    hasParent(): boolean
    /** Deprecated. Returns the enum constant of this type with the specified name. */
    valueOf(name: string): Achievement
    /** Deprecated. Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): Achievement[]
}

// Extend an interface with overrided methods
// https://stackoverflow.com/a/49198999
type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T]
type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U

interface Player extends Overwrite<HumanEntity, IPlayer> {}

interface IPlayer extends Conversable, OfflinePlayer, PluginMessageRecipient {
    /** Deprecated. future versions of Minecraft do not have achievements */
    awardAchievement(achievement: Achievement): void
    /** Checks to see if a player has been hidden from this player */
    canSee(player: Player): boolean
    /** Says a message (or runs a command). */
    chat(msg: string): void
    /** Decrements the given statistic for this player. */
    decrementStatistic(statistic: Statistic): void
    /** Decrements the given statistic for this player. */
    decrementStatistic(statistic: Statistic, amount: number): void
    /** Decrements the given statistic for this player for the given entity. */
    decrementStatistic(statistic: Statistic, entityType: EntityType): void
    /** Decrements the given statistic for this player for the given entity. */
    decrementStatistic(
        statistic: Statistic,
        entityType: EntityType,
        amount: number
    ): void
    /** Decrements the given statistic for this player for the given material. */
    decrementStatistic(statistic: Statistic, material: Material): void
    /** Decrements the given statistic for this player for the given material. */
    decrementStatistic(
        statistic: Statistic,
        material: Material,
        amount: number
    ): void
    /** Gets the socket address of this player */
    getAddress(): InetSocketAddress
    /** Return the player's progression on the specified advancement. */
    getAdvancementProgress(advancement: Advancement): AdvancementProgress
    /** Determines if the Player is allowed to fly via jump key double-tap likein creative mode. */
    getAllowFlight(): boolean
    /** Get the player's current client side view distance. */
    getClientViewDistance(): number
    /** Get the previously set compass target. */
    getCompassTarget(): Location
    /** Gets the "friendly" name to display of this player. */
    getDisplayName(): string
    /** Gets the players current exhaustion level. */
    getExhaustion(): number
    /** Gets the players current experience points towards the next level. */
    getExp(): number
    /** Gets the current allowed speed that a client can fly. */
    getFlySpeed(): number
    /** Gets the players current food level */
    getFoodLevel(): number
    foodLevel: number
    /** Gets the number that health is scaled to for the client. */
    getHealthScale(): number
    /** Gets the players current experience level */
    getLevel(): number
    /** Gets the player's current locale. */
    getLocale(): string
    /** Gets the currently displayed player list footer for this player. */
    getPlayerListFooter(): string
    /** Gets the currently displayed player list header for this player. */
    getPlayerListHeader(): string
    /** Gets the name that is shown on the player list. */
    getPlayerListName(): string
    /** Returns the player's current timestamp. */
    getPlayerTime(): number
    /** Returns the player's current time offset relative to server time, orthe current player's fixed time if the player's time is absolute. */
    getPlayerTimeOffset(): number
    /** Returns the type of weather the player is currently experiencing. */
    getPlayerWeather(): WeatherType
    /** Gets the players current saturation level. */
    getSaturation(): number
    /** Gets the Scoreboard displayed to this player */
    getScoreboard(): Scoreboard
    /** Gets the entity which is followed by the camera when inGameMode.SPECTATOR. */
    getSpectatorTarget(): Entity
    /** Gets the value of the given statistic for this player. */
    getStatistic(statistic: Statistic): number
    /** Gets the value of the given statistic for this player. */
    getStatistic(statistic: Statistic, entityType: EntityType): number
    /** Gets the value of the given statistic for this player. */
    getStatistic(statistic: Statistic, material: Material): number
    /** Gets the players total experience points. */
    getTotalExperience(): number
    /** Gets the current allowed speed that a client can walk. */
    getWalkSpeed(): number
    /** Gives the player the amount of experience specified. */
    giveExp(amount: number): void
    /** Gives the player the amount of experience levels specified. */
    giveExpLevels(amount: number): void
    /** Deprecated. future versions of Minecraft do not have achievements */
    hasAchievement(achievement: Achievement): boolean
    /** Deprecated. see hidePlayer(Plugin, Player) */
    hidePlayer(player: Player): void
    /** Hides a player from this player */
    hidePlayer(plugin: Plugin, player: Player): void
    /** Increments the given statistic for this player. */
    incrementStatistic(statistic: Statistic): void
    /** Increments the given statistic for this player. */
    incrementStatistic(statistic: Statistic, amount: number): void
    /** Increments the given statistic for this player for the given entity. */
    incrementStatistic(statistic: Statistic, entityType: EntityType): void
    /** Increments the given statistic for this player for the given entity. */
    incrementStatistic(
        statistic: Statistic,
        entityType: EntityType,
        amount: number
    ): void
    /** Increments the given statistic for this player for the given material. */
    incrementStatistic(statistic: Statistic, material: Material): void
    /** Increments the given statistic for this player for the given material. */
    incrementStatistic(
        statistic: Statistic,
        material: Material,
        amount: number
    ): void
    /** Checks to see if this player is currently flying or not. */
    isFlying(): boolean
    /** Gets if the client is displayed a 'scaled' health, that is, health on ascale from 0-getHealthScale(). */
    isHealthScaled(): boolean
    /** Returns true if the player's time is relative to the server time,otherwise the player's time is absolute and will not change its currenttime unless done so with setPlayerTime(). */
    isPlayerTimeRelative(): boolean
    /** Returns whether the player is sleeping ignored. */
    isSleepingIgnored(): boolean
    /** Returns if the player is in sneak mode */
    isSneaking(): boolean
    /** Gets whether the player is sprinting or not. */
    isSprinting(): boolean
    /** Kicks player with custom kick message. */
    kickPlayer(message: string): void
    /** Loads the players current location, health, inventory, motion, andother information from the username.dat file, in the world/playerfolder. */
    loadData(): void
    /** Open a Material.WRITTEN_BOOK for a Player */
    openBook(book: ItemStack): void
    /** Makes the player perform the given command */
    performCommand(command: string): boolean
    /** Deprecated. Magic value */
    playEffect(loc: Location, effect: Effect, data: number): void
    /** Plays an effect to just this player. */
    playEffect(loc: Location, effect: Effect, data: any): any
    /** Deprecated. Magic value */
    playNote(loc: Location, instrument: number, note: number): void
    /** Play a note for a player at a location. */
    playNote(loc: Location, instrument: Instrument, note: Note): void
    /** Play a sound for a player at the location. */
    playSound(
        location: Location,
        sound: string,
        volume: number,
        pitch: number
    ): void
    /** Play a sound for a player at the location. */
    playSound(
        location: Location,
        sound: string,
        category: SoundCategory,
        volume: number,
        pitch: number
    ): void
    /** Play a sound for a player at the location. */
    playSound(
        location: Location,
        sound: Sound,
        volume: number,
        pitch: number
    ): void
    /** Play a sound for a player at the location. */
    playSound(
        location: Location,
        sound: Sound,
        category: SoundCategory,
        volume: number,
        pitch: number
    ): void
    /** Deprecated. future versions of Minecraft do not have achievements */
    removeAchievement(achievement: Achievement): void
    /** Restores the normal condition where the player's time is synchronizedwith the server time. */
    resetPlayerTime(): void
    /** Restores the normal condition where the player's weather is controlledby server conditions. */
    resetPlayerWeather(): void
    /** Resets the title displayed to the player. */
    resetTitle(): void
    /** Saves the players current location, health, inventory, motion, andother information into the username.dat file, in the world/playerfolder */
    saveData(): void
    /** Send a block change. */
    sendBlockChange(loc: Location, block: BlockData): void
    /** Deprecated. Magic value */
    sendBlockChange(loc: Location, material: Material, data: number): void
    /** Deprecated. Magic value */
    sendChunkChange(
        loc: Location,
        sx: number,
        sy: number,
        sz: number,
        data: number[]
    ): boolean
    /** Render a map and send it to the player in its entirety. */
    sendMap(map: MapView): void
    /** Sends this sender a message raw */
    sendRawMessage(message: string): void
    /** Send a sign change. */
    sendSignChange(loc: Location, lines: string[]): void
    /** Send a sign change. */
    sendSignChange(loc: Location, lines: string[], dyeColor: DyeColor): void
    /** Deprecated. API behavior subject to change */
    sendTitle(title: string, subtitle: string): void
    /** Sends a title and a subtitle message to the player. */
    sendTitle(
        title: string,
        subtitle: string,
        fadeIn: number,
        stay: number,
        fadeOut: number
    ): void
    /** Sets if the Player is allowed to fly via jump key double-tap like increative mode. */
    setAllowFlight(flight: boolean): void
    /** Set the target of the player's compass. */
    setCompassTarget(loc: Location): void
    /** Sets the "friendly" name to display of this player. */
    setDisplayName(name: string): void
    /** Sets the players current exhaustion level */
    setExhaustion(value: number): void
    /** Sets the players current experience points towards the next level */
    setExp(exp: number): void
    /** Makes this player start or stop flying. */
    setFlying(value: boolean): void
    /** Sets the speed at which a client will fly. */
    setFlySpeed(value: number): void
    /** Sets the players current food level */
    setFoodLevel(value: number): void
    /** Sets the number to scale health to for the client; this will alsosetHealthScaled(true). */
    setHealthScale(scale: number): void
    /** Sets if the client is displayed a 'scaled' health, that is, health on ascale from 0-getHealthScale(). */
    setHealthScaled(scale: boolean): void
    /** Sets the players current experience level */
    setLevel(level: number): void
    /** Sets the currently displayed player list footer for this player. */
    setPlayerListFooter(footer: string): void
    /** Sets the currently displayed player list header for this player. */
    setPlayerListHeader(header: string): void
    /** Sets the currently displayed player list header and footer for thisplayer. */
    setPlayerListHeaderFooter(header: string, footer: string): void
    /** Sets the name that is shown on the in-game player list. */
    setPlayerListName(name: string): void
    /** Sets the current time on the player's client. */
    setPlayerTime(time: number, relative: boolean): void
    /** Sets the type of weather the player will see. */
    setPlayerWeather(type: WeatherType): void
    /** Request that the player's client download and switch resource packs. */
    setResourcePack(url: string): void
    /** Request that the player's client download and switch resource packs. */
    setResourcePack(url: string, hash: number[]): void
    /** Sets the players current saturation level */
    setSaturation(value: number): void
    /** Sets the player's visible Scoreboard. */
    setScoreboard(scoreboard: Scoreboard): void
    /** Sets whether the player is ignored as not sleeping. */
    setSleepingIgnored(isSleeping: boolean): void
    /** Sets the sneak mode the player */
    setSneaking(sneak: boolean): void
    /** Sets the entity which is followed by the camera when inGameMode.SPECTATOR. */
    setSpectatorTarget(entity: Entity): void
    /** Sets whether the player is sprinting or not. */
    setSprinting(sprinting: boolean): void
    /** Sets the given statistic for this player. */
    setStatistic(statistic: Statistic, newValue: number): void
    /** Sets the given statistic for this player for the given entity. */
    setStatistic(
        statistic: Statistic,
        entityType: EntityType,
        newValue: number
    ): void
    /** Sets the given statistic for this player for the given material. */
    setStatistic(
        statistic: Statistic,
        material: Material,
        newValue: number
    ): void
    /** Deprecated. Minecraft no longer uses textures packs. Instead youshould use setResourcePack(String). */
    setTexturePack(url: string): void
    /** Sets the players current experience points. */
    setTotalExperience(exp: number): void
    /** Sets the speed at which a client will walk. */
    setWalkSpeed(value: number): void
    /** Deprecated. see showPlayer(Plugin, Player) */
    showPlayer(player: Player): void
    /** Allows this player to see a player that was previously hidden. */
    showPlayer(plugin: Plugin, player: Player): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        x: number,
        y: number,
        z: number,
        count: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        x: number,
        y: number,
        z: number,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
    ): any
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
    ): any
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        x: number,
        y: number,
        z: number,
        count: number,
        data: any
    ): any
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(particle: Particle, location: Location, count: number): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        extra: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        extra: number,
        data: any
    ): any
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        data: any
    ): any
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        data: any
    ): any
    spigot(): any
    /** Stop the specified sound from playing. */
    stopSound(sound: string): void
    /** Stop the specified sound from playing. */
    stopSound(sound: string, category: SoundCategory): void
    /** Stop the specified sound from playing. */
    stopSound(sound: Sound): void
    /** Stop the specified sound from playing. */
    stopSound(sound: Sound, category: SoundCategory): void
    /** Update the list of commands sent to the client. */
    updateCommands(): void
    /** Deprecated. This method should not be relied upon as it is a temporarywork-around for a larger, more complicated issue. */
    updateInventory(): void
}

/* declare const command: (name, func, options, intercepts) => () => void; */

interface String {
    includes(substring: string): boolean
}

type callbackFn = (event: any) => void

declare const global: {
    args: any
    self: Player
    require: (filename: string) => any
    __engine_name__: string
    __engine_id__: number
    __plugin: any
    __require: any
    echo: (player: Player, message: string) => void
    refresh: () => void
    java: any
    EventEmitter: any
    setTimeout: (callbackFn, delay: number) => number
    setInterval: (callbackFn, delay: number) => number
    clearTimeout: (handle: number) => void
    clearInterval: (handle: number) => void
    engineUUID: String
    magikcraft: any
    magik: any
}

interface Java {
    type(type: 'org.bukkit.attribute.Attribute'): Attributes
}

interface Attributes {
    /** Armor bonus of an Entity. */
    GENERIC_ARMOR: Attribute
    /** Armor durability bonus of an Entity. */
    GENERIC_ARMOR_TOUGHNESS: Attribute
    /** Attack damage of an Entity. */
    GENERIC_ATTACK_DAMAGE: Attribute
    /** Attack speed of an Entity. */
    GENERIC_ATTACK_SPEED: Attribute
    /** Flying speed of an Entity. */
    GENERIC_FLYING_SPEED: Attribute
    /** Range at which an Entity will follow others. */
    GENERIC_FOLLOW_RANGE: Attribute
    /** Resistance of an Entity to knockback. */
    GENERIC_KNOCKBACK_RESISTANCE: Attribute
    /** Luck bonus of an Entity. */
    GENERIC_LUCK: Attribute
    /** Maximum health of an Entity. */
    GENERIC_MAX_HEALTH: Attribute
    /** Movement speed of an Entity. */
    GENERIC_MOVEMENT_SPEED: Attribute
    /** Strength with which a horse will jump. */
    HORSE_JUMP_STRENGTH: Attribute
    /** Chance of a zombie to spawn reinforcements. */
    ZOMBIE_SPAWN_REINFORCEMENTS: Attribute
}

interface Attribute {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): Attribute
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): Attribute[]
}

interface Cloneable<T> {
    clone(): T
}

interface MaterialData extends Cloneable<MaterialData> {
    /** Deprecated.   */
    clone(): MaterialData
    /** Deprecated.   */
    equals(obj: Object): boolean
    /** Deprecated. Magic value */
    getData(): number
    /** Deprecated. Gets the Material that this MaterialData represents */
    getItemType(): Material
    /** Deprecated.   */
    hashCode(): number
    /** Deprecated. Magic value */
    setData(data: number): void
    /** Deprecated. this method creates an ItemStack of size 0 which is notgenerally useful. Consider toItemStack(int). */
    toItemStack(): ItemStack
    /** Deprecated. Creates a new ItemStack based on this MaterialData */
    toItemStack(amount: number): ItemStack
    /** Deprecated.   */
    toString(): string
}

interface BlockState extends Metadatable {
    /** Gets the block represented by this block state. */
    getBlock(): Block
    /** Gets the data for this block state. */
    getBlockData(): BlockData
    /** Gets the chunk which contains the block represented by this block state. */
    getChunk(): Chunk
    /** Gets the metadata for this block state. */
    getData(): MaterialData
    /** Gets the current light level of the block represented by this block state. */
    getLightLevel(): number
    /** Gets the location of this block state. */
    getLocation(): Location
    /** Stores the location of this block state in the provided Location object. */
    getLocation(loc: Location): Location
    /** Deprecated. Magic value */
    getRawData(): number
    /** Gets the type of this block state. */
    getType(): Material
    /** Gets the world which contains the block represented by this block state. */
    getWorld(): World
    /** Gets the x-coordinate of this block state. */
    getX(): number
    /** Gets the y-coordinate of this block state. */
    getY(): number
    /** Gets the z-coordinate of this block state. */
    getZ(): number
    /** Returns whether this state is placed in the world. */
    isPlaced(): boolean
    /** Sets the data for this block state. */
    setBlockData(data: BlockData): void
    /** Sets the metadata for this block state. */
    setData(data: MaterialData): void
    /** Deprecated. Magic value */
    setRawData(data: number): void
    /** Sets the type of this block state. */
    setType(type: Material): void
    /** Attempts to update the block represented by this state, setting it tothe new values as defined by this state. */
    update(): boolean
    /** Attempts to update the block represented by this state, setting it tothe new values as defined by this state. */
    update(force: boolean): boolean
    /** Attempts to update the block represented by this state, setting it tothe new values as defined by this state. */
    update(force: boolean, applyPhysics: boolean): boolean
}

interface Java {
    type(type: 'org.bukkit.block.PistonMoveReaction'): PistonMoveReactions
}

interface PistonMoveReactions {
    /** Indicates that the block will resist being pushed or pulled. */
    BLOCK: PistonMoveReaction
    /** Indicates the block is fragile and will break if pushed on. */
    BREAK: PistonMoveReaction
    /** Indicates that the entity will ignore any interaction(s) withpistons. */
    IGNORE: PistonMoveReaction
    /** Indicates that the block can be pushed or pulled. */
    MOVE: PistonMoveReaction
    /** Indicates that the block can only be pushed by pistons, not pulled. */
    PUSH_ONLY: PistonMoveReaction
}

interface PistonMoveReaction {
    /** Deprecated. Magic value */
    getById(id: number): PistonMoveReaction
    /** Deprecated. Magic value */
    getId(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): PistonMoveReaction
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): PistonMoveReaction[]
}

interface Block extends Metadatable {
    /** Breaks the block and spawns items as if a player had digged it */
    breakNaturally(): boolean
    /** Breaks the block and spawns items as if a player had digged it with aspecific tool */
    breakNaturally(tool: ItemStack): boolean
    /** Returns the biome that this block resides in */
    getBiome(): Biome
    /** Gets the complete block data for this block */
    getBlockData(): BlockData
    /** Returns the redstone power being provided to this block */
    getBlockPower(): number
    /** Returns the redstone power being provided to this block face */
    getBlockPower(face: BlockFace): number
    /** Gets the approximate bounding box for this block. */
    getBoundingBox(): BoundingBox
    /** Gets the chunk which contains this block */
    getChunk(): Chunk
    /** Deprecated. Magic value */
    getData(): number
    data: number
    /** Returns a list of items which would drop by destroying this block */
    getDrops(): ItemStack[]
    /** Returns a list of items which would drop by destroying this block witha specific tool */
    getDrops(tool: ItemStack): ItemStack[]
    /** Gets the face relation of this block compared to the given block. */
    getFace(block: Block): BlockFace
    /** Gets the humidity of the biome of this block */
    getHumidity(): number
    /** Get the amount of light at this block from nearby blocks. */
    getLightFromBlocks(): number
    /** Get the amount of light at this block from the sky. */
    getLightFromSky(): number
    /** Gets the light level between 0-15 */
    getLightLevel(): number
    /** Gets the Location of the block */
    getLocation(): Location
    location: Location
    /** Stores the location of the block in the provided Location object. */
    getLocation(loc: Location): Location
    /** Returns the reaction of the block when moved by a piston */
    getPistonMoveReaction(): PistonMoveReaction
    /** Gets the block at the given offsets */
    getRelative(modX: number, modY: number, modZ: number): Block
    /** Gets the block at the given face */
    getRelative(face: BlockFace): Block
    /** Gets the block at the given distance of the given face */
    getRelative(face: BlockFace, distance: number): Block
    /** Captures the current state of this block. */
    getState(): BlockState
    /** Gets the temperature of this block. */
    getTemperature(): number
    /** Gets the type of this block */
    getType(): Material
    type: Material
    /** Gets the world which contains this Block */
    getWorld(): World
    /** Gets the x-coordinate of this block */
    getX(): number
    /** Gets the y-coordinate of this block */
    getY(): number
    /** Gets the z-coordinate of this block */
    getZ(): number
    /** Returns true if the block face is being indirectly powered by Redstone. */
    isBlockFaceIndirectlyPowered(face: BlockFace): boolean
    /** Returns true if the block face is being powered by Redstone. */
    isBlockFacePowered(face: BlockFace): boolean
    /** Returns true if the block is being indirectly powered by Redstone. */
    isBlockIndirectlyPowered(): boolean
    /** Returns true if the block is being powered by Redstone. */
    isBlockPowered(): boolean
    /** Checks if this block is empty. */
    isEmpty(): boolean
    /** Checks if this block is liquid. */
    isLiquid(): boolean
    /** Checks if this block is passable. */
    isPassable(): boolean
    /** Performs a ray trace that checks for collision with this specific blockin its current state using its precise collision shape. */
    rayTrace(
        start: Location,
        direction: Vector,
        maxDistance: number,
        fluidCollisionMode: FluidCollisionMode
    ): RayTraceResult
    /** Sets the biome that this block resides in */
    setBiome(bio: Biome): void
    /** Sets the complete data for this block */
    setBlockData(data: BlockData): void
    /** Sets the complete data for this blockNote that applyPhysics = false is not in general safe. */
    setBlockData(data: BlockData, applyPhysics: boolean): void
    /** Sets the type of this block */
    setType(type: Material): void
    /** Sets the type of this blockNote that applyPhysics = false is not in general safe. */
    setType(type: Material, applyPhysics: boolean): void
}

interface Item extends Entity {
    /** Gets the item stack associated with this item drop. */
    getItemStack(): ItemStack
    /** Gets the delay before this Item is available to be picked up by players */
    getPickupDelay(): number
    /** Sets the item stack associated with this item drop. */
    setItemStack(stack: ItemStack): void
    /** Sets the delay before this Item is available to be picked up by players */
    setPickupDelay(delay: number): void
}

interface Java {
    type(type: 'org.bukkit.TreeType'): TreeTypes
}

interface TreeTypes {
    /** Acacia tree. */
    ACACIA: TreeType
    /** Regular tree, extra tall with branches */
    BIG_TREE: TreeType
    /** Birch tree */
    BIRCH: TreeType
    /** Big brown mushroom; tall and umbrella-like */
    BROWN_MUSHROOM: TreeType
    /** Large plant native to The End */
    CHORUS_PLANT: TreeType
    /** Jungle tree with cocoa plants; 1 block wide */
    COCOA_TREE: TreeType
    /** Dark Oak tree. */
    DARK_OAK: TreeType
    /** Standard jungle tree; 4 blocks wide and tall */
    JUNGLE: TreeType
    /** Small bush that grows in the jungle */
    JUNGLE_BUSH: TreeType
    /** Mega redwood tree; 4 blocks wide and tall */
    MEGA_REDWOOD: TreeType
    /** Big red mushroom; short and fat */
    RED_MUSHROOM: TreeType
    /** Redwood tree, shaped like a pine tree */
    REDWOOD: TreeType
    /** Smaller jungle tree; 1 block wide */
    SMALL_JUNGLE: TreeType
    /** Swamp tree (regular with vines on the side) */
    SWAMP: TreeType
    /** Tall birch tree */
    TALL_BIRCH: TreeType
    /** Tall redwood tree with just a few leaves at the top */
    TALL_REDWOOD: TreeType
    /** Regular tree, no branches */
    TREE: TreeType
}

interface TreeType {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): TreeType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): TreeType[]
}

interface Java {
    type<T>(type: 'org.bukkit.GameRule'): GameRule<T>
}

interface GameRule<T> extends Object {
    /** Toggles the announcing of advancements.*/
    ANNOUNCE_ADVANCEMENTS: GameRule<boolean>
    /** Whether command blocks should notify admins when they perform commands.*/
    COMMAND_BLOCK_OUTPUT: GameRule<boolean>
    /** Whether the server should skip checking player speed when the player iswearing elytra.*/
    DISABLE_ELYTRA_MOVEMENT_CHECK: GameRule<boolean>
    /** Whether pillager raids are enabled or not.*/
    DISABLE_RAIDS: GameRule<boolean>
    /** Whether time progresses from the current moment.*/
    DO_DAYLIGHT_CYCLE: GameRule<boolean>
    /** Whether entities that are not mobs should have drops.*/
    DO_ENTITY_DROPS: GameRule<boolean>
    /** Whether fire should spread and naturally extinguish.*/
    DO_FIRE_TICK: GameRule<boolean>
    /** Whether players should only be able to craft recipes they've unlockedfirst.*/
    DO_LIMITED_CRAFTING: GameRule<boolean>
    /** Whether mobs should drop items.*/
    DO_MOB_LOOT: GameRule<boolean>
    /** Whether mobs should naturally spawn.*/
    DO_MOB_SPAWNING: GameRule<boolean>
    /** Whether blocks should have drops.*/
    DO_TILE_DROPS: GameRule<boolean>
    /** Whether the weather will change from the current moment.*/
    DO_WEATHER_CYCLE: GameRule<boolean>
    /** Whether the player should keep items in their inventory after death.*/
    KEEP_INVENTORY: GameRule<boolean>
    /** Whether to log admin commands to server log.*/
    LOG_ADMIN_COMMANDS: GameRule<boolean>
    /** Determines the number at which the chain of command blocks act as a"chain."This is the maximum amount of command blocks that can be activated in asingle tick from a single chain.*/
    MAX_COMMAND_CHAIN_LENGTH: GameRule<number>
    /** The maximum number of other pushable entities a mob or player can push,before taking suffocation damage.*/
    MAX_ENTITY_CRAMMING: GameRule<number>
    /** Whether mobs can pick up items or change blocks.*/
    MOB_GRIEFING: GameRule<boolean>
    /** Whether players can regenerate health naturally through their hunger bar.*/
    NATURAL_REGENERATION: GameRule<boolean>
    /** How often a random block tick occurs (such as plant growth, leaf decay,etc.) per chunk section per game tick.*/
    RANDOM_TICK_SPEED: GameRule<number>
    /** Whether the debug screen shows all or reduced information.*/
    REDUCED_DEBUG_INFO: GameRule<boolean>
    /** Whether the feedback from commands executed by a player should show up inchat.*/
    SEND_COMMAND_FEEDBACK: GameRule<boolean>
    /** Whether a message appears in chat when a player dies.*/
    SHOW_DEATH_MESSAGES: GameRule<boolean>
    /** The number of blocks outward from the world spawn coordinates that aplayer will spawn in when first joining a server or when dying without aspawnpoint.*/
    SPAWN_RADIUS: GameRule<number>
    /** Whether players in spectator mode can generate chunks.*/
    SPECTATORS_GENERATE_CHUNKS: GameRule<boolean>

    /**   */
    equals(obj: Object): boolean
    /** Get a GameRule by its name. */
    getByName<T>(rule: string): GameRule<T>
    /** Get the name of this GameRule. */
    getName(): string
    /** Get the type of this rule. */
    getType(): any
    /**   */
    toString(): string
    /** Get an immutable collection of GameRules. */
    values<T>(): GameRule<T>[]
}

interface Java {
    type(type: 'org.bukkit.Difficulty'): Difficultys
}

interface Difficultys {
    /** Hostile mobs spawn, enemies deal less damage than on normal difficulty,the hunger bar does deplete and starving deals up to 5 hearts ofdamage. */
    EASY: Difficulty
    /** Hostile mobs spawn, enemies deal greater damage than on normaldifficulty, the hunger bar does deplete and starving can kill players. */
    HARD: Difficulty
    /** Hostile mobs spawn, enemies deal normal amounts of damage, the hungerbar does deplete and starving deals up to 9.5 hearts of damage. */
    NORMAL: Difficulty
    /** Players regain health over time, hostile mobs don't spawn, the hungerbar does not deplete. */
    PEACEFUL: Difficulty
}

interface Difficulty {
    /** Deprecated. Magic value */
    getByValue(value: number): Difficulty
    /** Deprecated. Magic value */
    getValue(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): Difficulty
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): Difficulty[]
}

interface ChunkSnapshot {
    /** Get biome at given coordinates */
    getBiome(x: number, z: number): Biome
    /** Get block data for block at corresponding coordinate in the chunk */
    getBlockData(x: number, y: number, z: number): BlockData
    /** Get light level emitted by block at corresponding coordinate in thechunk */
    getBlockEmittedLight(x: number, y: number, z: number): number
    /** Get sky light level for block at corresponding coordinate in the chunk */
    getBlockSkyLight(x: number, y: number, z: number): number
    /** Get block type for block at corresponding coordinate in the chunk */
    getBlockType(x: number, y: number, z: number): Material
    /** Get world full time when chunk snapshot was captured */
    getCaptureFullTime(): number
    /** Deprecated. Magic value */
    getData(x: number, y: number, z: number): number
    /** Gets the highest non-air coordinate at the given coordinates */
    getHighestBlockYAt(x: number, z: number): number
    /** Get raw biome temperature (0.0-1.0) at given coordinate */
    getRawBiomeTemperature(x: number, z: number): number
    /** Gets name of the world containing this chunk */
    getWorldName(): string
    /** Gets the X-coordinate of this chunk */
    getX(): number
    /** Gets the Z-coordinate of this chunk */
    getZ(): number
    /** Test if section is empty */
    isSectionEmpty(sy: number): boolean
}

interface Java {
    type(type: 'org.bukkit.World.Environment'): WorldEnvironments
}

interface WorldEnvironments {
    /** Represents a nether based map ("hell") */
    NETHER: WorldEnvironment
    /** Represents the "normal"/"surface world" map */
    NORMAL: WorldEnvironment
    /** Represents the "end" map */
    THE_END: WorldEnvironment
}

interface WorldEnvironment {
    /** Deprecated. Magic value */
    getEnvironment(id: number): WorldEnvironment
    /** Deprecated. Magic value */
    getId(): number
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): WorldEnvironment
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): WorldEnvironment[]
}

interface BlockChangeDelegate {
    /** Get the block data at the location. */
    getBlockData(x: number, y: number, z: number): BlockData
    /** Gets the height of the world. */
    getHeight(): number
    /** Checks if the specified block is empty (air) or not. */
    isEmpty(x: number, y: number, z: number): boolean
    /** Set a block data at the specified coordinates. */
    setBlockData(x: number, y: number, z: number, blockData: BlockData): boolean
}

interface WorldBorder {
    /** Gets the current border center. */
    getCenter(): Location
    /** Gets the current border damage amount. */
    getDamageAmount(): number
    /** Gets the current border damage buffer. */
    getDamageBuffer(): number
    /** Gets the current side length of the border. */
    getSize(): number
    /** Gets the current border warning distance. */
    getWarningDistance(): number
    /** Gets the current border warning time in seconds. */
    getWarningTime(): number
    /** Check if the specified location is inside this border. */
    isInside(location: Location): boolean
    /** Resets the border to default values. */
    reset(): void
    /** Sets the new border center. */
    setCenter(x: number, z: number): void
    /** Sets the new border center. */
    setCenter(location: Location): void
    /** Sets the amount of damage a player takes when outside the border plus the border buffer. */
    setDamageAmount(damage: number): void
    /** Sets the amount of blocks a player may safely be outside the border before taking damage. */
    setDamageBuffer(blocks: number): void
    /** Sets the border to a square region with the specified side length in blocks. */
    setSize(newSize: number): void
    /** Sets the border to a square region with the specified side length in blocks. */
    setSize(newSize: number, seconds: number): void
    /** Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border. */
    setWarningDistance(distance: number): void
    /** Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time. */
    setWarningTime(seconds: number): void
}

interface FallingBlock extends Entity {
    /** Get the HurtEntities state of this block. */
    canHurtEntities(): boolean
    /** Get the data for the falling block */
    getBlockData(): BlockData
    /** Get if the falling block will break into an item if it cannot be placed */
    getDropItem(): boolean
    /** Deprecated. use getBlockData() */
    getMaterial(): Material
    /** Set if the falling block will break into an item if it cannot be placed */
    setDropItem(drop: boolean): void
    /** Set the HurtEntities state of this block. */
    setHurtEntities(hurtEntities: boolean): void
}

interface LightningStrike extends Entity {
    /** Returns whether the strike is an effect that does no damage. */
    isEffect(): boolean
}

interface Java {
    type(
        type: 'org.bukkit.entity.AbstractArrow.PickupStatus'
    ): AbstractArrowPickupStatuss
}

interface AbstractArrowPickupStatuss {
    /** The arrow can be picked up. */
    ALLOWED: AbstractArrowPickupStatus
    /** The arrow can only be picked up by players in creative mode. */
    CREATIVE_ONLY: AbstractArrowPickupStatus
    /** The arrow cannot be picked up. */
    DISALLOWED: AbstractArrowPickupStatus
}

interface AbstractArrowPickupStatus {
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): AbstractArrowPickupStatus
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): AbstractArrowPickupStatus[]
}

interface AbstractArrow extends Projectile {
    /** Gets the block to which this arrow is attached. */
    getAttachedBlock(): Block
    /** Gets the base amount of damage this arrow will do. */
    getDamage(): number
    /** Gets the knockback strength for an arrow, which is theKnockBack levelof the bow that shot it. */
    getKnockbackStrength(): number
    /** Gets the current pickup status of this arrow. */
    getPickupStatus(): AbstractArrowPickupStatus
    /** Gets the number of times this arrow can pierce through an entity. */
    getPierceLevel(): number
    /** Gets whether this arrow is critical. */
    isCritical(): boolean
    /** Gets whether this arrow is in a block or not. */
    isInBlock(): boolean
    /** Sets whether or not this arrow should be critical. */
    setCritical(critical: boolean): void
    /** Sets the base amount of damage this arrow will do. */
    setDamage(damage: number): void
    /** Sets the knockback strength for an arrow. */
    setKnockbackStrength(knockbackStrength: number): void
    /** Sets the current pickup status of this arrow. */
    setPickupStatus(status: AbstractArrowPickupStatus): void
    /** Sets the number of times this arrow can pierce through an entity. */
    setPierceLevel(pierceLevel: number): void
}

interface Java {
    type(type: 'org.bukkit.potion.PotionData'): PotionDataConstructor
}

interface Java {
    type(type: 'org.bukkit.potion.PotionType'): PotionTypes
}

interface PotionTypes {
    /**   */
    AWKWARD: PotionType
    /**   */
    FIRE_RESISTANCE: PotionType
    /**   */
    INSTANT_DAMAGE: PotionType
    /**   */
    INSTANT_HEAL: PotionType
    /**   */
    INVISIBILITY: PotionType
    /**   */
    JUMP: PotionType
    /**   */
    LUCK: PotionType
    /**   */
    MUNDANE: PotionType
    /**   */
    NIGHT_VISION: PotionType
    /**   */
    POISON: PotionType
    /**   */
    REGEN: PotionType
    /**   */
    SLOW_FALLING: PotionType
    /**   */
    SLOWNESS: PotionType
    /**   */
    SPEED: PotionType
    /**   */
    STRENGTH: PotionType
    /**   */
    THICK: PotionType
    /**   */
    TURTLE_MASTER: PotionType
    /**   */
    UNCRAFTABLE: PotionType
    /**   */
    WATER: PotionType
    /**   */
    WATER_BREATHING: PotionType
    /**   */
    WEAKNESS: PotionType
}

interface PotionType {
    /** Deprecated. Misleading */
    getByEffect(effectType: PotionEffectType): PotionType
    /**   */
    getEffectType(): PotionEffectType
    /**   */
    getMaxLevel(): number
    /** Checks if the potion type has an extended state. */
    isExtendable(): boolean
    /**   */
    isInstant(): boolean
    /** Checks if the potion type has an upgraded state. */
    isUpgradeable(): boolean
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): PotionType
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): PotionType[]
}

interface PotionDataConstructor {
    new (type: PotionType): PotionData
    new (type: PotionType, extended: boolean, upgraded: boolean): PotionData
}

interface PotionData extends Object {
    /**   */
    equals(obj: Object): boolean
    /** Gets the type of the potion, Type matches up with each kind of craftablepotion */
    getType(): PotionType
    /**   */
    hashCode(): number
    /** Checks if the potion is in an extended state. */
    isExtended(): boolean
    /** Checks if the potion is in an upgraded state. */
    isUpgraded(): boolean
}

interface Arrow extends AbstractArrow {
    /** Adds a custom potion effect to this arrow. */
    addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean
    /** Removes all custom potion effects from this arrow. */
    clearCustomEffects(): void
    /** Returns the potion data about the base potion */
    getBasePotionData(): PotionData
    /** Gets the color of this arrow. */
    getColor(): Color
    /** Gets an immutable list containing all custom potion effects applied tothis arrow. */
    getCustomEffects(): PotionEffect[]
    /** Checks for a specific custom potion effect type on this arrow. */
    hasCustomEffect(type: PotionEffectType): boolean
    /** Checks for the presence of custom potion effects. */
    hasCustomEffects(): boolean
    /** Removes a custom potion effect from this arrow. */
    removeCustomEffect(type: PotionEffectType): boolean
    /** Sets the underlying potion data */
    setBasePotionData(data: PotionData): void
    /** Sets the color of this arrow. */
    setColor(color: Color): void
}

interface World extends PluginMessageRecipient, Metadatable {
    /** Adds a plugin ticket for the specified chunk, loading the chunk if it isnot already loaded. */
    addPluginChunkTicket(x: number, z: number, plugin: Plugin): boolean
    /** Gets whether or not structures are being generated. */
    canGenerateStructures(): boolean
    /** Creates explosion at given coordinates with given power */
    createExplosion(x: number, y: number, z: number, power: number): boolean
    /** Creates explosion at given coordinates with given power and optionallysetting blocks on fire. */
    createExplosion(
        x: number,
        y: number,
        z: number,
        power: number,
        setFire: boolean
    ): boolean
    /** Creates explosion at given coordinates with given power and optionallysetting blocks on fire or breaking blocks. */
    createExplosion(
        x: number,
        y: number,
        z: number,
        power: number,
        setFire: boolean,
        breakBlocks: boolean
    ): boolean
    /** Creates explosion at given coordinates with given power */
    createExplosion(loc: Location, power: number): boolean
    /** Creates explosion at given coordinates with given power and optionallysetting blocks on fire. */
    createExplosion(loc: Location, power: number, setFire: boolean): boolean
    /** Drops an item at the specified Location */
    dropItem(location: Location, item: ItemStack): Item
    /** Drops an item at the specified Location with a random offset */
    dropItemNaturally(location: Location, item: ItemStack): Item
    /** Creates a tree at the given Location */
    generateTree(location: Location, type: TreeType): boolean
    /** Creates a tree at the given Location */
    generateTree(
        loc: Location,
        type: TreeType,
        delegate: BlockChangeDelegate
    ): boolean
    /** Gets whether animals can spawn in this world. */
    getAllowAnimals(): boolean
    /** Gets whether monsters can spawn in this world. */
    getAllowMonsters(): boolean
    /** Gets the limit for number of ambient mobs that can spawn in a chunk inthis world */
    getAmbientSpawnLimit(): number
    /** Gets the limit for number of animals that can spawn in a chunk in thisworld */
    getAnimalSpawnLimit(): number
    /** Gets the biome for the given block coordinates. */
    getBiome(x: number, z: number): Biome
    /** Gets the Block at the given coordinates */
    getBlockAt(x: number, y: number, z: number): Block
    /** Gets the Block at the given Location */
    getBlockAt(location: Location): Block
    /** Gets the Chunk at the given coordinates */
    getChunkAt(x: number, z: number): Chunk
    /** Gets the Chunk that contains the given Block */
    getChunkAt(block: Block): Chunk
    /** Gets the Chunk at the given Location */
    getChunkAt(location: Location): Chunk
    /** Gets the Difficulty of the world. */
    getDifficulty(): Difficulty
    /** Get empty chunk snapshot (equivalent to all air blocks), optionallyincluding valid biome data. */
    getEmptyChunkSnapshot(
        x: number,
        z: number,
        includeBiome: boolean,
        includeBiomeTemp: boolean
    ): ChunkSnapshot
    /** Get a list of all entities in this World */
    getEntities(): Entity[]
    entities: Entity[]
    /** Get a collection of all entities in this World matching the givenclass/interface */
    getEntitiesByClass<T extends Entity>(cls: new (...args) => T): T[]
    /** Deprecated.  */
    getEntitiesByClass<T extends Entity>(
        ...classes: (new (...args) => T)[]
    ): T[]
    /** Get a collection of all entities in this World matching any of thegiven classes/interfaces */
    getEntitiesByClasses(classes: new (...args) => Entity): Entity[]
    /** Gets the WorldEnvironment type of this world */
    getEnvironment(): WorldEnvironment
    /** Returns all force loaded chunks in this world. */
    getForceLoadedChunks(): Chunk[]
    /** Gets the full in-game time on this world */
    getFullTime(): number
    /** Get the default value for a given GameRule. */
    getGameRuleDefault<T>(rule: GameRule<T>): T
    /** Get an array containing the names of all the GameRules. */
    getGameRules(): string[]
    /** Deprecated. use getGameRuleValue(GameRule) instead */
    getGameRuleValue(rule: string): string
    /** Get the current value for a given GameRule. */
    getGameRuleValue<T>(rule: GameRule<T>): T
    /** Gets the chunk generator for this world */
    getGenerator(): ChunkGenerator
    /** Gets the lowest block at the given coordinates such that the block andall blocks above it are transparent for lighting purposes. */
    getHighestBlockAt(x: number, z: number): Block
    /** Gets the lowest block at the given Location such that the blockand all blocks above it are transparent for lighting purposes. */
    getHighestBlockAt(location: Location): Block
    /** Gets the y coordinate of the lowest block at this position such that theblock and all blocks above it are transparent for lighting purposes. */
    getHighestBlockYAt(x: number, z: number): number
    /** Gets the y coordinate of the lowest block at the given Locationsuch that the block and all blocks above it are transparent for lightingpurposes. */
    getHighestBlockYAt(location: Location): number
    /** Gets the humidity for the given block coordinates. */
    getHumidity(x: number, z: number): number
    /** Gets whether the world's spawn area should be kept loaded into memoryor not. */
    getKeepSpawnInMemory(): boolean
    /** Get a list of all living entities in this World */
    getLivingEntities(): LivingEntity[]
    /** Gets an array of all loaded Chunks */
    getLoadedChunks(): Chunk[]
    /** Gets the maximum height of this world. */
    getMaxHeight(): number
    /** Gets limit for number of monsters that can spawn in a chunk in thisworld */
    getMonsterSpawnLimit(): number
    /** Gets the unique name of this world */
    getName(): string
    name: string
    /** Returns a list of entities within a bounding box centered around aLocation. */
    getNearbyEntities(
        location: Location,
        x: number,
        y: number,
        z: number
    ): Entity[]
    /** Returns a list of entities within a bounding box centered around aLocation. */
    getNearbyEntities(
        location: Location,
        x: number,
        y: number,
        z: number,
        filter: (e: Entity) => boolean
    ): Entity[]
    /** Returns a list of entities within the given bounding box. */
    getNearbyEntities(boundingBox: BoundingBox): Entity[]
    /** Returns a list of entities within the given bounding box. */
    getNearbyEntities(
        boundingBox: BoundingBox,
        filter: (e: Entity) => boolean
    ): Entity[]
    /** Get a list of all players in this World */
    getPlayers(): Player[]
    /** Returns a map of which plugins have tickets for what chunks. */
    getPluginChunkTickets(): Map<Plugin, Chunk[]>
    /** Retrieves a collection specifying which plugins have tickets for thespecified chunk. */
    getPluginChunkTickets(x: number, z: number): Plugin[]
    /** Gets a list of all applied BlockPopulators for this World */
    getPopulators(): BlockPopulator[]
    /** Gets the current PVP setting for this world. */
    getPVP(): boolean
    /** Gets the sea level for this world. */
    getSeaLevel(): number
    /** Gets the Seed for this world. */
    getSeed(): number
    /** Gets the default spawn Location of this world */
    getSpawnLocation(): Location
    /** Gets the temperature for the given block coordinates. */
    getTemperature(x: number, z: number): number
    /** Get the thundering duration. */
    getThunderDuration(): number
    /** Gets the world's ticks per animal spawns value */
    getTicksPerAnimalSpawns(): number
    /** Gets the world's ticks per monster spawns value */
    getTicksPerMonsterSpawns(): number
    /** Gets the relative in-game time of this world. */
    getTime(): number
    /** Gets the Unique ID of this world */
    getUID(): UUID
    /** Gets the limit for number of water animals that can spawn in a chunk inthis world */
    getWaterAnimalSpawnLimit(): number
    /** Get the remaining time in ticks of the current conditions. */
    getWeatherDuration(): number
    /** Gets the world border for this world. */
    getWorldBorder(): WorldBorder
    /** Gets the folder of this world on disk. */
    getWorldFolder(): File
    /** Gets the type of this world. */
    getWorldType(): WorldType
    /** Returns whether the world has an ongoing storm. */
    hasStorm(): boolean
    /** Gets whether or not the world will automatically save */
    isAutoSave(): boolean
    /** Gets whether the chunk at the specified chunk coordinates is forceloaded. */
    isChunkForceLoaded(x: number, z: number): boolean
    /** Checks if the Chunk at the specified coordinates is generated */
    isChunkGenerated(x: number, z: number): boolean
    /** Deprecated. This method was added to facilitate chunk garbage collection.As of the current Minecraft version chunks are now strictly managed andwill not be loaded for more than 1 tick unless they are in use. */
    isChunkInUse(x: number, z: number): boolean
    /** Checks if the Chunk at the specified coordinates is loaded */
    isChunkLoaded(x: number, z: number): boolean
    /** Checks if the specified Chunk is loaded */
    isChunkLoaded(chunk: Chunk): boolean
    /** Checks if string is a valid game rule */
    isGameRule(rule: string): boolean
    /** Returns whether there is thunder. */
    isThundering(): boolean
    /** Loads the Chunk at the specified coordinates. */
    loadChunk(x: number, z: number): void
    /** Loads the Chunk at the specified coordinates. */
    loadChunk(x: number, z: number, generate: boolean): boolean
    /** Loads the specified Chunk. */
    loadChunk(chunk: Chunk): void
    /** Find the closest nearby structure of a given StructureType. */
    locateNearestStructure(
        origin: Location,
        structureType: StructureType,
        radius: number,
        findUnexplored: boolean
    ): Location
    /** Plays an effect to all players within a default radius around a givenlocation. */
    playEffect(location: Location, effect: Effect, data: number): void
    /** Plays an effect to all players within a given radius around a location. */
    playEffect(
        location: Location,
        effect: Effect,
        data: number,
        radius: number
    ): void
    /** Plays an effect to all players within a default radius around a givenlocation. */
    playEffect(location: Location, effect: Effect, data: any): void
    /** Plays an effect to all players within a given radius around a location. */
    playEffect(
        location: Location,
        effect: Effect,
        data: any,
        radius: number
    ): void
    /** Play a Sound at the provided Location in the World. */
    playSound(
        location: Location,
        sound: string,
        volume: number,
        pitch: number
    ): void
    /** Play a Sound at the provided Location in the World. */
    playSound(
        location: Location,
        sound: string,
        category: SoundCategory,
        volume: number,
        pitch: number
    ): void
    /** Play a Sound at the provided Location in the World */
    playSound(
        location: Location,
        sound: Sound,
        volume: number,
        pitch: number
    ): void
    /** Play a Sound at the provided Location in the World. */
    playSound(
        location: Location,
        sound: Sound,
        category: SoundCategory,
        volume: number,
        pitch: number
    ): void
    /** Performs a ray trace that checks for both block and entity collisions. */
    rayTrace(
        start: Location,
        direction: Vector,
        maxDistance: number,
        fluidCollisionMode: FluidCollisionMode,
        ignorePassableBlocks: boolean,
        raySize: number,
        filter: (e: Entity) => boolean
    ): RayTraceResult
    /** Performs a ray trace that checks for block collisions using the blocks'precise collision shapes. */
    rayTraceBlocks(
        start: Location,
        direction: Vector,
        maxDistance: number
    ): RayTraceResult
    /** Performs a ray trace that checks for block collisions using the blocks'precise collision shapes. */
    rayTraceBlocks(
        start: Location,
        direction: Vector,
        maxDistance: number,
        fluidCollisionMode: FluidCollisionMode
    ): RayTraceResult
    /** Performs a ray trace that checks for block collisions using the blocks'precise collision shapes. */
    rayTraceBlocks(
        start: Location,
        direction: Vector,
        maxDistance: number,
        fluidCollisionMode: FluidCollisionMode,
        ignorePassableBlocks: boolean
    ): RayTraceResult
    /** Performs a ray trace that checks for entity collisions. */
    rayTraceEntities(
        start: Location,
        direction: Vector,
        maxDistance: number
    ): RayTraceResult
    /** Performs a ray trace that checks for entity collisions. */
    rayTraceEntities(
        start: Location,
        direction: Vector,
        maxDistance: number,
        raySize: number
    ): RayTraceResult
    /** Performs a ray trace that checks for entity collisions. */
    rayTraceEntities(
        start: Location,
        direction: Vector,
        maxDistance: number,
        raySize: number,
        filter: (e: Entity) => boolean
    ): RayTraceResult
    /** Performs a ray trace that checks for entity collisions. */
    rayTraceEntities(
        start: Location,
        direction: Vector,
        maxDistance: number,
        filter: (e: Entity) => boolean
    ): RayTraceResult
    /** Deprecated. This method is not guaranteed to work suitably across all client implementations. */
    refreshChunk(x: number, z: number): boolean
    /** Deprecated. regenerating a single chunk is not likely to produce the samechunk as before as terrain decoration may be spread across chunks. Use ofthis method should be avoided as it is known to produce buggy results. */
    regenerateChunk(x: number, z: number): boolean
    /** Removes the specified plugin's ticket for the specified chunk */
    removePluginChunkTicket(x: number, z: number, plugin: Plugin): boolean
    /** Removes all plugin tickets for the specified plugin */
    removePluginChunkTickets(plugin: Plugin): void
    /** Saves world to disk */
    save(): void
    /** Sets the limit for number of ambient mobs that can spawn in a chunk inthis world */
    setAmbientSpawnLimit(limit: number): void
    /** Sets the limit for number of animals that can spawn in a chunk in thisworld */
    setAnimalSpawnLimit(limit: number): void
    /** Sets whether or not the world will automatically save */
    setAutoSave(value: boolean): void
    /** Sets the biome for the given block coordinates */
    setBiome(x: number, z: number, bio: Biome): void
    /** Sets whether the chunk at the specified chunk coordinates is forceloaded. */
    setChunkForceLoaded(x: number, z: number, forced: boolean): void
    /** Sets the Difficulty of the world. */
    setDifficulty(difficulty: Difficulty): void
    /** Sets the in-game time on the server */
    setFullTime(time: number): void
    /** Set the given GameRule's new value. */
    setGameRule<T>(rule: GameRule<T>, newValue: any): boolean
    /** Deprecated. use setGameRule(GameRule, Object) instead. */
    setGameRuleValue(rule: string, value: string): boolean
    /** Sets whether the world's spawn area should be kept loaded into memoryor not. */
    setKeepSpawnInMemory(keepLoaded: boolean): void
    /** Sets the limit for number of monsters that can spawn in a chunk in thisworld */
    setMonsterSpawnLimit(limit: number): void
    /** Sets the PVP setting for this world. */
    setPVP(pvp: boolean): void
    /** Sets the spawn flags for this. */
    setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void
    /** Sets the spawn location of the world */
    setSpawnLocation(x: number, y: number, z: number): boolean
    /** Sets the spawn location of the world. */
    setSpawnLocation(location: Location): boolean
    /** Set whether there is a storm. */
    setStorm(hasStorm: boolean): void
    /** Set the thundering duration. */
    setThunderDuration(duration: number): void
    /** Set whether it is thundering. */
    setThundering(thundering: boolean): void
    /** Sets the world's ticks per animal spawns value */
    setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number): void
    /** Sets the world's ticks per monster spawns value */
    setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void
    /** Sets the relative in-game time on the server. */
    setTime(time: number): void
    /** Sets the limit for number of water animals that can spawn in a chunk inthis world */
    setWaterAnimalSpawnLimit(limit: number): void
    /** Set the remaining time in ticks of the current conditions. */
    setWeatherDuration(duration: number): void
    /** Spawn an entity of a specific class at the given Location */
    spawn<T extends Entity>(location: Location, clazz: new (...args) => T): T
    /** Spawn an entity of a specific class at the given Location, withthe supplied function run before the entity is added to the world. */
    spawn<T extends Entity>(
        location: Location,
        clazz: new (...args) => T,
        fn: Consumer<T>
    ): T
    /** Creates an Arrow entity at the given Location */
    spawnArrow(
        location: Location,
        direction: Vector,
        speed: number,
        spread: number
    ): Arrow
    /** Creates an arrow entity of the given class at the given Location */
    spawnArrow<T extends AbstractArrow>(
        location: Location,
        direction: Vector,
        speed: number,
        spread: number,
        clazz: new (...args) => T
    ): T
    /** Creates a entity at the given Location */
    spawnEntity(loc: Location, type: EntityType): Entity
    /** Spawn a FallingBlock entity at the given Location ofthe specified Material. */
    spawnFallingBlock(location: Location, data: BlockData): FallingBlock
    /** Spawn a FallingBlock entity at the given Location ofthe specified Material. */
    spawnFallingBlock(location: Location, data: MaterialData): FallingBlock
    /** Deprecated. Magic value */
    spawnFallingBlock(
        location: Location,
        material: Material,
        data: number
    ): FallingBlock
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        x: number,
        y: number,
        z: number,
        count: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        x: number,
        y: number,
        z: number,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
        data: any,
        force: boolean
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
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
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        x: number,
        y: number,
        z: number,
        count: number,
        data: any
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(particle: Particle, location: Location, count: number): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        extra: number
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        extra: number,
        data: any
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        extra: number,
        data: any,
        force: boolean
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        offsetX: number,
        offsetY: number,
        offsetZ: number,
        data: any
    ): void
    /** Spawns the particle (the number of times specified by count)at the target location. */
    spawnParticle(
        particle: Particle,
        location: Location,
        count: number,
        data: any
    ): void
    /** Strikes lightning at the given Location */
    strikeLightning(loc: Location): LightningStrike
    /** Strikes lightning at the given Location without doing damage */
    strikeLightningEffect(loc: Location): LightningStrike
    /** Safely unloads and saves the Chunk at the specified coordinates */
    unloadChunk(x: number, z: number): boolean
    /** Safely unloads and optionally saves the Chunk at the specifiedcoordinates. */
    unloadChunk(x: number, z: number, save: boolean): boolean
    /** Safely unloads and saves the Chunk at the specified coordinates */
    unloadChunk(chunk: Chunk): boolean
    /** Safely queues the Chunk at the specified coordinates forunloading. */
    unloadChunkRequest(x: number, z: number): boolean
}

interface Chunk {
    /** Adds a plugin ticket for this chunk, loading this chunk if it is notalready loaded. */
    addPluginChunkTicket(plugin: Plugin): boolean
    /** Gets a block from this chunk */
    getBlock(x: number, y: number, z: number): Block
    /** Capture thread-safe read-only snapshot of chunk data */
    getChunkSnapshot(): ChunkSnapshot
    /** Capture thread-safe read-only snapshot of chunk data */
    getChunkSnapshot(
        includeMaxblocky: boolean,
        includeBiome: boolean,
        includeBiomeTempRain: boolean
    ): ChunkSnapshot
    /** Get a list of all entities in the chunk. */
    getEntities(): Entity[]
    /** Retrieves a collection specifying which plugins have tickets for thischunk. */
    getPluginChunkTickets(): Plugin[]
    /** Get a list of all tile entities in the chunk. */
    getTileEntities(): BlockState[]
    /** Gets the world containing this chunk */
    getWorld(): World
    /** Gets the X-coordinate of this chunk */
    getX(): number
    /** Gets the Z-coordinate of this chunk */
    getZ(): number
    /** Gets whether the chunk at the specified chunk coordinates is forceloaded. */
    isForceLoaded(): boolean
    /** Checks if the chunk is loaded. */
    isLoaded(): boolean
    /** Checks if this chunk can spawn slimes without being a swamp biome. */
    isSlimeChunk(): boolean
    /** Loads the chunk. */
    load(): boolean
    /** Loads the chunk. */
    load(generate: boolean): boolean
    /** Removes the specified plugin's ticket for this chunk */
    removePluginChunkTicket(plugin: Plugin): boolean
    /** Sets whether the chunk at the specified chunk coordinates is forceloaded. */
    setForceLoaded(forced: boolean): void
    /** Unloads and optionally saves the Chunk */
    unload(): boolean
    /** Unloads and optionally saves the Chunk */
    unload(save: boolean): boolean
}

interface Location {
    world: World
    chunk: Chunk
    x: number
    y: number
    z: number
    yaw: number
    pitch: number
    block: Block
    getBlock: () => Block
    add: (x: number, y: number, z: number) => Location
    clone: () => Location
    distance: (location: Location) => Location
    distanceSquared: (location: Location) => Location
    equals: (location: Location) => boolean
    getBlockX: () => number
    getBlockY: () => number
    getBlockZ: () => number
    getX: () => number
    getY: () => number
    getZ: () => number
    setX: (x: number) => void
    setY: (y: number) => void
    setZ: (z: number) => void
    getChunk: () => Chunk
    getDirection: () => Vector
    getPitch: () => number
    getWorld: () => World
    length: () => number
    lengthSquared: () => number
    locToBlock: () => number
    multiple: () => Location
    setDirection: () => Location
}

interface Java {
    type(type: 'org.bukkit.Material'): Materials
}

interface Materials {
    /**   */
    ACACIA_BOAT: Material
    /** BlockData: Switch */
    ACACIA_BUTTON: Material
    /** BlockData: Door */
    ACACIA_DOOR: Material
    /** BlockData: Fence */
    ACACIA_FENCE: Material
    /** BlockData: Gate */
    ACACIA_FENCE_GATE: Material
    /** BlockData: Leaves */
    ACACIA_LEAVES: Material
    /** BlockData: Orientable */
    ACACIA_LOG: Material
    /**   */
    ACACIA_PLANKS: Material
    /** BlockData: Powerable */
    ACACIA_PRESSURE_PLATE: Material
    /** BlockData: Sapling */
    ACACIA_SAPLING: Material
    /** BlockData: Sign */
    ACACIA_SIGN: Material
    /** BlockData: Slab */
    ACACIA_SLAB: Material
    /** BlockData: Stairs */
    ACACIA_STAIRS: Material
    /** BlockData: TrapDoor */
    ACACIA_TRAPDOOR: Material
    /** BlockData: WallSign */
    ACACIA_WALL_SIGN: Material
    /** BlockData: Orientable */
    ACACIA_WOOD: Material
    /** BlockData: RedstoneRail */
    ACTIVATOR_RAIL: Material
    /**   */
    AIR: Material
    /**   */
    ALLIUM: Material
    /**   */
    ANDESITE: Material
    /** BlockData: Slab */
    ANDESITE_SLAB: Material
    /** BlockData: Stairs */
    ANDESITE_STAIRS: Material
    /** BlockData: Fence */
    ANDESITE_WALL: Material
    /** BlockData: Directional */
    ANVIL: Material
    /**   */
    APPLE: Material
    /**   */
    ARMOR_STAND: Material
    /**   */
    ARROW: Material
    /** BlockData: Directional */
    ATTACHED_MELON_STEM: Material
    /** BlockData: Directional */
    ATTACHED_PUMPKIN_STEM: Material
    /**   */
    AZURE_BLUET: Material
    /**   */
    BAKED_POTATO: Material
    /** BlockData: Bamboo */
    BAMBOO: Material
    /**   */
    BAMBOO_SAPLING: Material
    /** BlockData: Directional */
    BARREL: Material
    /**   */
    BARRIER: Material
    /**   */
    BAT_SPAWN_EGG: Material
    /**   */
    BEACON: Material
    /**   */
    BEDROCK: Material
    /**   */
    BEEF: Material
    /**   */
    BEETROOT: Material
    /**   */
    BEETROOT_SEEDS: Material
    /**   */
    BEETROOT_SOUP: Material
    /** BlockData: Ageable */
    BEETROOTS: Material
    /** BlockData: Bell */
    BELL: Material
    /**   */
    BIRCH_BOAT: Material
    /** BlockData: Switch */
    BIRCH_BUTTON: Material
    /** BlockData: Door */
    BIRCH_DOOR: Material
    /** BlockData: Fence */
    BIRCH_FENCE: Material
    /** BlockData: Gate */
    BIRCH_FENCE_GATE: Material
    /** BlockData: Leaves */
    BIRCH_LEAVES: Material
    /** BlockData: Orientable */
    BIRCH_LOG: Material
    /**   */
    BIRCH_PLANKS: Material
    /** BlockData: Powerable */
    BIRCH_PRESSURE_PLATE: Material
    /** BlockData: Sapling */
    BIRCH_SAPLING: Material
    /** BlockData: Sign */
    BIRCH_SIGN: Material
    /** BlockData: Slab */
    BIRCH_SLAB: Material
    /** BlockData: Stairs */
    BIRCH_STAIRS: Material
    /** BlockData: TrapDoor */
    BIRCH_TRAPDOOR: Material
    /** BlockData: WallSign */
    BIRCH_WALL_SIGN: Material
    /** BlockData: Orientable */
    BIRCH_WOOD: Material
    /** BlockData: Rotatable */
    BLACK_BANNER: Material
    /** BlockData: Bed */
    BLACK_BED: Material
    /**   */
    BLACK_CARPET: Material
    /**   */
    BLACK_CONCRETE: Material
    /**   */
    BLACK_CONCRETE_POWDER: Material
    /**   */
    BLACK_DYE: Material
    /** BlockData: Directional */
    BLACK_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    BLACK_SHULKER_BOX: Material
    /**   */
    BLACK_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    BLACK_STAINED_GLASS_PANE: Material
    /**   */
    BLACK_TERRACOTTA: Material
    /** BlockData: Directional */
    BLACK_WALL_BANNER: Material
    /**   */
    BLACK_WOOL: Material
    /** BlockData: Furnace */
    BLAST_FURNACE: Material
    /**   */
    BLAZE_POWDER: Material
    /**   */
    BLAZE_ROD: Material
    /**   */
    BLAZE_SPAWN_EGG: Material
    /** BlockData: Rotatable */
    BLUE_BANNER: Material
    /** BlockData: Bed */
    BLUE_BED: Material
    /**   */
    BLUE_CARPET: Material
    /**   */
    BLUE_CONCRETE: Material
    /**   */
    BLUE_CONCRETE_POWDER: Material
    /**   */
    BLUE_DYE: Material
    /** BlockData: Directional */
    BLUE_GLAZED_TERRACOTTA: Material
    /**   */
    BLUE_ICE: Material
    /**   */
    BLUE_ORCHID: Material
    /** BlockData: Directional */
    BLUE_SHULKER_BOX: Material
    /**   */
    BLUE_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    BLUE_STAINED_GLASS_PANE: Material
    /**   */
    BLUE_TERRACOTTA: Material
    /** BlockData: Directional */
    BLUE_WALL_BANNER: Material
    /**   */
    BLUE_WOOL: Material
    /**   */
    BONE: Material
    /** BlockData: Orientable */
    BONE_BLOCK: Material
    /**   */
    BONE_MEAL: Material
    /**   */
    BOOK: Material
    /**   */
    BOOKSHELF: Material
    /**   */
    BOW: Material
    /**   */
    BOWL: Material
    /** BlockData: Waterlogged */
    BRAIN_CORAL: Material
    /**   */
    BRAIN_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    BRAIN_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    BRAIN_CORAL_WALL_FAN: Material
    /**   */
    BREAD: Material
    /** BlockData: BrewingStand */
    BREWING_STAND: Material
    /**   */
    BRICK: Material
    /** BlockData: Slab */
    BRICK_SLAB: Material
    /** BlockData: Stairs */
    BRICK_STAIRS: Material
    /** BlockData: Fence */
    BRICK_WALL: Material
    /**   */
    BRICKS: Material
    /** BlockData: Rotatable */
    BROWN_BANNER: Material
    /** BlockData: Bed */
    BROWN_BED: Material
    /**   */
    BROWN_CARPET: Material
    /**   */
    BROWN_CONCRETE: Material
    /**   */
    BROWN_CONCRETE_POWDER: Material
    /**   */
    BROWN_DYE: Material
    /** BlockData: Directional */
    BROWN_GLAZED_TERRACOTTA: Material
    /**   */
    BROWN_MUSHROOM: Material
    /** BlockData: MultipleFacing */
    BROWN_MUSHROOM_BLOCK: Material
    /** BlockData: Directional */
    BROWN_SHULKER_BOX: Material
    /**   */
    BROWN_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    BROWN_STAINED_GLASS_PANE: Material
    /**   */
    BROWN_TERRACOTTA: Material
    /** BlockData: Directional */
    BROWN_WALL_BANNER: Material
    /**   */
    BROWN_WOOL: Material
    /** BlockData: BubbleColumn */
    BUBBLE_COLUMN: Material
    /** BlockData: Waterlogged */
    BUBBLE_CORAL: Material
    /**   */
    BUBBLE_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    BUBBLE_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    BUBBLE_CORAL_WALL_FAN: Material
    /**   */
    BUCKET: Material
    /** BlockData: Ageable */
    CACTUS: Material
    /** BlockData: Cake */
    CAKE: Material
    /** BlockData: Campfire */
    CAMPFIRE: Material
    /**   */
    CARROT: Material
    /**   */
    CARROT_ON_A_STICK: Material
    /** BlockData: Ageable */
    CARROTS: Material
    /**   */
    CARTOGRAPHY_TABLE: Material
    /** BlockData: Directional */
    CARVED_PUMPKIN: Material
    /**   */
    CAT_SPAWN_EGG: Material
    /** BlockData: Levelled */
    CAULDRON: Material
    /**   */
    CAVE_AIR: Material
    /**   */
    CAVE_SPIDER_SPAWN_EGG: Material
    /** BlockData: CommandBlock */
    CHAIN_COMMAND_BLOCK: Material
    /**   */
    CHAINMAIL_BOOTS: Material
    /**   */
    CHAINMAIL_CHESTPLATE: Material
    /**   */
    CHAINMAIL_HELMET: Material
    /**   */
    CHAINMAIL_LEGGINGS: Material
    /**   */
    CHARCOAL: Material
    /** BlockData: Chest */
    CHEST: Material
    /**   */
    CHEST_MINECART: Material
    /**   */
    CHICKEN: Material
    /**   */
    CHICKEN_SPAWN_EGG: Material
    /** BlockData: Directional */
    CHIPPED_ANVIL: Material
    /**   */
    CHISELED_QUARTZ_BLOCK: Material
    /**   */
    CHISELED_RED_SANDSTONE: Material
    /**   */
    CHISELED_SANDSTONE: Material
    /**   */
    CHISELED_STONE_BRICKS: Material
    /** BlockData: Ageable */
    CHORUS_FLOWER: Material
    /**   */
    CHORUS_FRUIT: Material
    /** BlockData: MultipleFacing */
    CHORUS_PLANT: Material
    /**   */
    CLAY: Material
    /**   */
    CLAY_BALL: Material
    /**   */
    CLOCK: Material
    /**   */
    COAL: Material
    /**   */
    COAL_BLOCK: Material
    /**   */
    COAL_ORE: Material
    /**   */
    COARSE_DIRT: Material
    /**   */
    COBBLESTONE: Material
    /** BlockData: Slab */
    COBBLESTONE_SLAB: Material
    /** BlockData: Stairs */
    COBBLESTONE_STAIRS: Material
    /** BlockData: Fence */
    COBBLESTONE_WALL: Material
    /**   */
    COBWEB: Material
    /** BlockData: Cocoa */
    COCOA: Material
    /**   */
    COCOA_BEANS: Material
    /**   */
    COD: Material
    /**   */
    COD_BUCKET: Material
    /**   */
    COD_SPAWN_EGG: Material
    /** BlockData: CommandBlock */
    COMMAND_BLOCK: Material
    /**   */
    COMMAND_BLOCK_MINECART: Material
    /** BlockData: Comparator */
    COMPARATOR: Material
    /**   */
    COMPASS: Material
    /** BlockData: Levelled */
    COMPOSTER: Material
    /** BlockData: Waterlogged */
    CONDUIT: Material
    /**   */
    COOKED_BEEF: Material
    /**   */
    COOKED_CHICKEN: Material
    /**   */
    COOKED_COD: Material
    /**   */
    COOKED_MUTTON: Material
    /**   */
    COOKED_PORKCHOP: Material
    /**   */
    COOKED_RABBIT: Material
    /**   */
    COOKED_SALMON: Material
    /**   */
    COOKIE: Material
    /**   */
    CORNFLOWER: Material
    /**   */
    COW_SPAWN_EGG: Material
    /**   */
    CRACKED_STONE_BRICKS: Material
    /**   */
    CRAFTING_TABLE: Material
    /**   */
    CREEPER_BANNER_PATTERN: Material
    /** BlockData: Rotatable */
    CREEPER_HEAD: Material
    /**   */
    CREEPER_SPAWN_EGG: Material
    /** BlockData: Directional */
    CREEPER_WALL_HEAD: Material
    /**   */
    CROSSBOW: Material
    /**   */
    CUT_RED_SANDSTONE: Material
    /** BlockData: Slab */
    CUT_RED_SANDSTONE_SLAB: Material
    /**   */
    CUT_SANDSTONE: Material
    /** BlockData: Slab */
    CUT_SANDSTONE_SLAB: Material
    /** BlockData: Rotatable */
    CYAN_BANNER: Material
    /** BlockData: Bed */
    CYAN_BED: Material
    /**   */
    CYAN_CARPET: Material
    /**   */
    CYAN_CONCRETE: Material
    /**   */
    CYAN_CONCRETE_POWDER: Material
    /**   */
    CYAN_DYE: Material
    /** BlockData: Directional */
    CYAN_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    CYAN_SHULKER_BOX: Material
    /**   */
    CYAN_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    CYAN_STAINED_GLASS_PANE: Material
    /**   */
    CYAN_TERRACOTTA: Material
    /** BlockData: Directional */
    CYAN_WALL_BANNER: Material
    /**   */
    CYAN_WOOL: Material
    /** BlockData: Directional */
    DAMAGED_ANVIL: Material
    /**   */
    DANDELION: Material
    /**   */
    DARK_OAK_BOAT: Material
    /** BlockData: Switch */
    DARK_OAK_BUTTON: Material
    /** BlockData: Door */
    DARK_OAK_DOOR: Material
    /** BlockData: Fence */
    DARK_OAK_FENCE: Material
    /** BlockData: Gate */
    DARK_OAK_FENCE_GATE: Material
    /** BlockData: Leaves */
    DARK_OAK_LEAVES: Material
    /** BlockData: Orientable */
    DARK_OAK_LOG: Material
    /**   */
    DARK_OAK_PLANKS: Material
    /** BlockData: Powerable */
    DARK_OAK_PRESSURE_PLATE: Material
    /** BlockData: Sapling */
    DARK_OAK_SAPLING: Material
    /** BlockData: Sign */
    DARK_OAK_SIGN: Material
    /** BlockData: Slab */
    DARK_OAK_SLAB: Material
    /** BlockData: Stairs */
    DARK_OAK_STAIRS: Material
    /** BlockData: TrapDoor */
    DARK_OAK_TRAPDOOR: Material
    /** BlockData: WallSign */
    DARK_OAK_WALL_SIGN: Material
    /** BlockData: Orientable */
    DARK_OAK_WOOD: Material
    /**   */
    DARK_PRISMARINE: Material
    /** BlockData: Slab */
    DARK_PRISMARINE_SLAB: Material
    /** BlockData: Stairs */
    DARK_PRISMARINE_STAIRS: Material
    /** BlockData: DaylightDetector */
    DAYLIGHT_DETECTOR: Material
    /** BlockData: Waterlogged */
    DEAD_BRAIN_CORAL: Material
    /**   */
    DEAD_BRAIN_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    DEAD_BRAIN_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    DEAD_BRAIN_CORAL_WALL_FAN: Material
    /** BlockData: Waterlogged */
    DEAD_BUBBLE_CORAL: Material
    /**   */
    DEAD_BUBBLE_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    DEAD_BUBBLE_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    DEAD_BUBBLE_CORAL_WALL_FAN: Material
    /**   */
    DEAD_BUSH: Material
    /** BlockData: Waterlogged */
    DEAD_FIRE_CORAL: Material
    /**   */
    DEAD_FIRE_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    DEAD_FIRE_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    DEAD_FIRE_CORAL_WALL_FAN: Material
    /** BlockData: Waterlogged */
    DEAD_HORN_CORAL: Material
    /**   */
    DEAD_HORN_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    DEAD_HORN_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    DEAD_HORN_CORAL_WALL_FAN: Material
    /** BlockData: Waterlogged */
    DEAD_TUBE_CORAL: Material
    /**   */
    DEAD_TUBE_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    DEAD_TUBE_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    DEAD_TUBE_CORAL_WALL_FAN: Material
    /**   */
    DEBUG_STICK: Material
    /** BlockData: RedstoneRail */
    DETECTOR_RAIL: Material
    /**   */
    DIAMOND: Material
    /**   */
    DIAMOND_AXE: Material
    /**   */
    DIAMOND_BLOCK: Material
    /**   */
    DIAMOND_BOOTS: Material
    /**   */
    DIAMOND_CHESTPLATE: Material
    /**   */
    DIAMOND_HELMET: Material
    /**   */
    DIAMOND_HOE: Material
    /**   */
    DIAMOND_HORSE_ARMOR: Material
    /**   */
    DIAMOND_LEGGINGS: Material
    /**   */
    DIAMOND_ORE: Material
    /**   */
    DIAMOND_PICKAXE: Material
    /**   */
    DIAMOND_SHOVEL: Material
    /**   */
    DIAMOND_SWORD: Material
    /**   */
    DIORITE: Material
    /** BlockData: Slab */
    DIORITE_SLAB: Material
    /** BlockData: Stairs */
    DIORITE_STAIRS: Material
    /** BlockData: Fence */
    DIORITE_WALL: Material
    /**   */
    DIRT: Material
    /** BlockData: Dispenser */
    DISPENSER: Material
    /**   */
    DOLPHIN_SPAWN_EGG: Material
    /**   */
    DONKEY_SPAWN_EGG: Material
    /**   */
    DRAGON_BREATH: Material
    /**   */
    DRAGON_EGG: Material
    /** BlockData: Rotatable */
    DRAGON_HEAD: Material
    /** BlockData: Directional */
    DRAGON_WALL_HEAD: Material
    /**   */
    DRIED_KELP: Material
    /**   */
    DRIED_KELP_BLOCK: Material
    /** BlockData: Dispenser */
    DROPPER: Material
    /**   */
    DROWNED_SPAWN_EGG: Material
    /**   */
    EGG: Material
    /**   */
    ELDER_GUARDIAN_SPAWN_EGG: Material
    /**   */
    ELYTRA: Material
    /**   */
    EMERALD: Material
    /**   */
    EMERALD_BLOCK: Material
    /**   */
    EMERALD_ORE: Material
    /**   */
    ENCHANTED_BOOK: Material
    /**   */
    ENCHANTED_GOLDEN_APPLE: Material
    /**   */
    ENCHANTING_TABLE: Material
    /**   */
    END_CRYSTAL: Material
    /**   */
    END_GATEWAY: Material
    /**   */
    END_PORTAL: Material
    /** BlockData: EndPortalFrame */
    END_PORTAL_FRAME: Material
    /** BlockData: Directional */
    END_ROD: Material
    /**   */
    END_STONE: Material
    /** BlockData: Slab */
    END_STONE_BRICK_SLAB: Material
    /** BlockData: Stairs */
    END_STONE_BRICK_STAIRS: Material
    /** BlockData: Fence */
    END_STONE_BRICK_WALL: Material
    /**   */
    END_STONE_BRICKS: Material
    /** BlockData: EnderChest */
    ENDER_CHEST: Material
    /**   */
    ENDER_EYE: Material
    /**   */
    ENDER_PEARL: Material
    /**   */
    ENDERMAN_SPAWN_EGG: Material
    /**   */
    ENDERMITE_SPAWN_EGG: Material
    /**   */
    EVOKER_SPAWN_EGG: Material
    /**   */
    EXPERIENCE_BOTTLE: Material
    /** BlockData: Farmland */
    FARMLAND: Material
    /**   */
    FEATHER: Material
    /**   */
    FERMENTED_SPIDER_EYE: Material
    /**   */
    FERN: Material
    /**   */
    FILLED_MAP: Material
    /** BlockData: Fire */
    FIRE: Material
    /**   */
    FIRE_CHARGE: Material
    /** BlockData: Waterlogged */
    FIRE_CORAL: Material
    /**   */
    FIRE_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    FIRE_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    FIRE_CORAL_WALL_FAN: Material
    /**   */
    FIREWORK_ROCKET: Material
    /**   */
    FIREWORK_STAR: Material
    /**   */
    FISHING_ROD: Material
    /**   */
    FLETCHING_TABLE: Material
    /**   */
    FLINT: Material
    /**   */
    FLINT_AND_STEEL: Material
    /**   */
    FLOWER_BANNER_PATTERN: Material
    /**   */
    FLOWER_POT: Material
    /**   */
    FOX_SPAWN_EGG: Material
    /** BlockData: Ageable */
    FROSTED_ICE: Material
    /** BlockData: Furnace */
    FURNACE: Material
    /**   */
    FURNACE_MINECART: Material
    /**   */
    GHAST_SPAWN_EGG: Material
    /**   */
    GHAST_TEAR: Material
    /**   */
    GLASS: Material
    /**   */
    GLASS_BOTTLE: Material
    /** BlockData: Fence */
    GLASS_PANE: Material
    /**   */
    GLISTERING_MELON_SLICE: Material
    /**   */
    GLOBE_BANNER_PATTERN: Material
    /**   */
    GLOWSTONE: Material
    /**   */
    GLOWSTONE_DUST: Material
    /**   */
    GOLD_BLOCK: Material
    /**   */
    GOLD_INGOT: Material
    /**   */
    GOLD_NUGGET: Material
    /**   */
    GOLD_ORE: Material
    /**   */
    GOLDEN_APPLE: Material
    /**   */
    GOLDEN_AXE: Material
    /**   */
    GOLDEN_BOOTS: Material
    /**   */
    GOLDEN_CARROT: Material
    /**   */
    GOLDEN_CHESTPLATE: Material
    /**   */
    GOLDEN_HELMET: Material
    /**   */
    GOLDEN_HOE: Material
    /**   */
    GOLDEN_HORSE_ARMOR: Material
    /**   */
    GOLDEN_LEGGINGS: Material
    /**   */
    GOLDEN_PICKAXE: Material
    /**   */
    GOLDEN_SHOVEL: Material
    /**   */
    GOLDEN_SWORD: Material
    /**   */
    GRANITE: Material
    /** BlockData: Slab */
    GRANITE_SLAB: Material
    /** BlockData: Stairs */
    GRANITE_STAIRS: Material
    /** BlockData: Fence */
    GRANITE_WALL: Material
    /**   */
    GRASS: Material
    /** BlockData: Snowable */
    GRASS_BLOCK: Material
    /**   */
    GRASS_PATH: Material
    /**   */
    GRAVEL: Material
    /** BlockData: Rotatable */
    GRAY_BANNER: Material
    /** BlockData: Bed */
    GRAY_BED: Material
    /**   */
    GRAY_CARPET: Material
    /**   */
    GRAY_CONCRETE: Material
    /**   */
    GRAY_CONCRETE_POWDER: Material
    /**   */
    GRAY_DYE: Material
    /** BlockData: Directional */
    GRAY_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    GRAY_SHULKER_BOX: Material
    /**   */
    GRAY_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    GRAY_STAINED_GLASS_PANE: Material
    /**   */
    GRAY_TERRACOTTA: Material
    /** BlockData: Directional */
    GRAY_WALL_BANNER: Material
    /**   */
    GRAY_WOOL: Material
    /** BlockData: Rotatable */
    GREEN_BANNER: Material
    /** BlockData: Bed */
    GREEN_BED: Material
    /**   */
    GREEN_CARPET: Material
    /**   */
    GREEN_CONCRETE: Material
    /**   */
    GREEN_CONCRETE_POWDER: Material
    /**   */
    GREEN_DYE: Material
    /** BlockData: Directional */
    GREEN_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    GREEN_SHULKER_BOX: Material
    /**   */
    GREEN_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    GREEN_STAINED_GLASS_PANE: Material
    /**   */
    GREEN_TERRACOTTA: Material
    /** BlockData: Directional */
    GREEN_WALL_BANNER: Material
    /**   */
    GREEN_WOOL: Material
    /** BlockData: Directional */
    GRINDSTONE: Material
    /**   */
    GUARDIAN_SPAWN_EGG: Material
    /**   */
    GUNPOWDER: Material
    /** BlockData: Orientable */
    HAY_BLOCK: Material
    /**   */
    HEART_OF_THE_SEA: Material
    /** BlockData: AnaloguePowerable */
    HEAVY_WEIGHTED_PRESSURE_PLATE: Material
    /** BlockData: Hopper */
    HOPPER: Material
    /**   */
    HOPPER_MINECART: Material
    /** BlockData: Waterlogged */
    HORN_CORAL: Material
    /**   */
    HORN_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    HORN_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    HORN_CORAL_WALL_FAN: Material
    /**   */
    HORSE_SPAWN_EGG: Material
    /**   */
    HUSK_SPAWN_EGG: Material
    /**   */
    ICE: Material
    /**   */
    INFESTED_CHISELED_STONE_BRICKS: Material
    /**   */
    INFESTED_COBBLESTONE: Material
    /**   */
    INFESTED_CRACKED_STONE_BRICKS: Material
    /**   */
    INFESTED_MOSSY_STONE_BRICKS: Material
    /**   */
    INFESTED_STONE: Material
    /**   */
    INFESTED_STONE_BRICKS: Material
    /**   */
    INK_SAC: Material
    /**   */
    IRON_AXE: Material
    /** BlockData: Fence */
    IRON_BARS: Material
    /**   */
    IRON_BLOCK: Material
    /**   */
    IRON_BOOTS: Material
    /**   */
    IRON_CHESTPLATE: Material
    /** BlockData: Door */
    IRON_DOOR: Material
    /**   */
    IRON_HELMET: Material
    /**   */
    IRON_HOE: Material
    /**   */
    IRON_HORSE_ARMOR: Material
    /**   */
    IRON_INGOT: Material
    /**   */
    IRON_LEGGINGS: Material
    /**   */
    IRON_NUGGET: Material
    /**   */
    IRON_ORE: Material
    /**   */
    IRON_PICKAXE: Material
    /**   */
    IRON_SHOVEL: Material
    /**   */
    IRON_SWORD: Material
    /** BlockData: TrapDoor */
    IRON_TRAPDOOR: Material
    /**   */
    ITEM_FRAME: Material
    /** BlockData: Directional */
    JACK_O_LANTERN: Material
    /** BlockData: Directional */
    JIGSAW: Material
    /** BlockData: Jukebox */
    JUKEBOX: Material
    /**   */
    JUNGLE_BOAT: Material
    /** BlockData: Switch */
    JUNGLE_BUTTON: Material
    /** BlockData: Door */
    JUNGLE_DOOR: Material
    /** BlockData: Fence */
    JUNGLE_FENCE: Material
    /** BlockData: Gate */
    JUNGLE_FENCE_GATE: Material
    /** BlockData: Leaves */
    JUNGLE_LEAVES: Material
    /** BlockData: Orientable */
    JUNGLE_LOG: Material
    /**   */
    JUNGLE_PLANKS: Material
    /** BlockData: Powerable */
    JUNGLE_PRESSURE_PLATE: Material
    /** BlockData: Sapling */
    JUNGLE_SAPLING: Material
    /** BlockData: Sign */
    JUNGLE_SIGN: Material
    /** BlockData: Slab */
    JUNGLE_SLAB: Material
    /** BlockData: Stairs */
    JUNGLE_STAIRS: Material
    /** BlockData: TrapDoor */
    JUNGLE_TRAPDOOR: Material
    /** BlockData: WallSign */
    JUNGLE_WALL_SIGN: Material
    /** BlockData: Orientable */
    JUNGLE_WOOD: Material
    /** BlockData: Ageable */
    KELP: Material
    /**   */
    KELP_PLANT: Material
    /**   */
    KNOWLEDGE_BOOK: Material
    /** BlockData: Ladder */
    LADDER: Material
    /** BlockData: Lantern */
    LANTERN: Material
    /**   */
    LAPIS_BLOCK: Material
    /**   */
    LAPIS_LAZULI: Material
    /**   */
    LAPIS_ORE: Material
    /** BlockData: Bisected */
    LARGE_FERN: Material
    /** BlockData: Levelled */
    LAVA: Material
    /**   */
    LAVA_BUCKET: Material
    /**   */
    LEAD: Material
    /**   */
    LEATHER: Material
    /**   */
    LEATHER_BOOTS: Material
    /**   */
    LEATHER_CHESTPLATE: Material
    /**   */
    LEATHER_HELMET: Material
    /**   */
    LEATHER_HORSE_ARMOR: Material
    /**   */
    LEATHER_LEGGINGS: Material
    /** BlockData: Lectern */
    LECTERN: Material
    /** Deprecated.  */
    LEGACY_ACACIA_DOOR: Material
    /** Deprecated.  */
    LEGACY_ACACIA_DOOR_ITEM: Material
    /** Deprecated.  */
    LEGACY_ACACIA_FENCE: Material
    /** Deprecated.  */
    LEGACY_ACACIA_FENCE_GATE: Material
    /** Deprecated.  */
    LEGACY_ACACIA_STAIRS: Material
    /** Deprecated.  */
    LEGACY_ACTIVATOR_RAIL: Material
    /** Deprecated.  */
    LEGACY_AIR: Material
    /** Deprecated.  */
    LEGACY_ANVIL: Material
    /** Deprecated.  */
    LEGACY_APPLE: Material
    /** Deprecated.  */
    LEGACY_ARMOR_STAND: Material
    /** Deprecated.  */
    LEGACY_ARROW: Material
    /** Deprecated.  */
    LEGACY_BAKED_POTATO: Material
    /** Deprecated.  */
    LEGACY_BANNER: Material
    /** Deprecated.  */
    LEGACY_BARRIER: Material
    /** Deprecated.  */
    LEGACY_BEACON: Material
    /** Deprecated.  */
    LEGACY_BED: Material
    /** Deprecated.  */
    LEGACY_BED_BLOCK: Material
    /** Deprecated.  */
    LEGACY_BEDROCK: Material
    /** Deprecated.  */
    LEGACY_BEETROOT: Material
    /** Deprecated.  */
    LEGACY_BEETROOT_BLOCK: Material
    /** Deprecated.  */
    LEGACY_BEETROOT_SEEDS: Material
    /** Deprecated.  */
    LEGACY_BEETROOT_SOUP: Material
    /** Deprecated.  */
    LEGACY_BIRCH_DOOR: Material
    /** Deprecated.  */
    LEGACY_BIRCH_DOOR_ITEM: Material
    /** Deprecated.  */
    LEGACY_BIRCH_FENCE: Material
    /** Deprecated.  */
    LEGACY_BIRCH_FENCE_GATE: Material
    /** Deprecated.  */
    LEGACY_BIRCH_WOOD_STAIRS: Material
    /** Deprecated.  */
    LEGACY_BLACK_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_BLACK_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_BLAZE_POWDER: Material
    /** Deprecated.  */
    LEGACY_BLAZE_ROD: Material
    /** Deprecated.  */
    LEGACY_BLUE_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_BLUE_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_BOAT: Material
    /** Deprecated.  */
    LEGACY_BOAT_ACACIA: Material
    /** Deprecated.  */
    LEGACY_BOAT_BIRCH: Material
    /** Deprecated.  */
    LEGACY_BOAT_DARK_OAK: Material
    /** Deprecated.  */
    LEGACY_BOAT_JUNGLE: Material
    /** Deprecated.  */
    LEGACY_BOAT_SPRUCE: Material
    /** Deprecated.  */
    LEGACY_BONE: Material
    /** Deprecated.  */
    LEGACY_BONE_BLOCK: Material
    /** Deprecated.  */
    LEGACY_BOOK: Material
    /** Deprecated.  */
    LEGACY_BOOK_AND_QUILL: Material
    /** Deprecated.  */
    LEGACY_BOOKSHELF: Material
    /** Deprecated.  */
    LEGACY_BOW: Material
    /** Deprecated.  */
    LEGACY_BOWL: Material
    /** Deprecated.  */
    LEGACY_BREAD: Material
    /** Deprecated.  */
    LEGACY_BREWING_STAND: Material
    /** Deprecated.  */
    LEGACY_BREWING_STAND_ITEM: Material
    /** Deprecated.  */
    LEGACY_BRICK: Material
    /** Deprecated.  */
    LEGACY_BRICK_STAIRS: Material
    /** Deprecated.  */
    LEGACY_BROWN_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_BROWN_MUSHROOM: Material
    /** Deprecated.  */
    LEGACY_BROWN_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_BUCKET: Material
    /** Deprecated.  */
    LEGACY_BURNING_FURNACE: Material
    /** Deprecated.  */
    LEGACY_CACTUS: Material
    /** Deprecated.  */
    LEGACY_CAKE: Material
    /** Deprecated.  */
    LEGACY_CAKE_BLOCK: Material
    /** Deprecated.  */
    LEGACY_CARPET: Material
    /** Deprecated.  */
    LEGACY_CARROT: Material
    /** Deprecated.  */
    LEGACY_CARROT_ITEM: Material
    /** Deprecated.  */
    LEGACY_CARROT_STICK: Material
    /** Deprecated.  */
    LEGACY_CAULDRON: Material
    /** Deprecated.  */
    LEGACY_CAULDRON_ITEM: Material
    /** Deprecated.  */
    LEGACY_CHAINMAIL_BOOTS: Material
    /** Deprecated.  */
    LEGACY_CHAINMAIL_CHESTPLATE: Material
    /** Deprecated.  */
    LEGACY_CHAINMAIL_HELMET: Material
    /** Deprecated.  */
    LEGACY_CHAINMAIL_LEGGINGS: Material
    /** Deprecated.  */
    LEGACY_CHEST: Material
    /** Deprecated.  */
    LEGACY_CHORUS_FLOWER: Material
    /** Deprecated.  */
    LEGACY_CHORUS_FRUIT: Material
    /** Deprecated.  */
    LEGACY_CHORUS_FRUIT_POPPED: Material
    /** Deprecated.  */
    LEGACY_CHORUS_PLANT: Material
    /** Deprecated.  */
    LEGACY_CLAY: Material
    /** Deprecated.  */
    LEGACY_CLAY_BALL: Material
    /** Deprecated.  */
    LEGACY_CLAY_BRICK: Material
    /** Deprecated.  */
    LEGACY_COAL: Material
    /** Deprecated.  */
    LEGACY_COAL_BLOCK: Material
    /** Deprecated.  */
    LEGACY_COAL_ORE: Material
    /** Deprecated.  */
    LEGACY_COBBLE_WALL: Material
    /** Deprecated.  */
    LEGACY_COBBLESTONE: Material
    /** Deprecated.  */
    LEGACY_COBBLESTONE_STAIRS: Material
    /** Deprecated.  */
    LEGACY_COCOA: Material
    /** Deprecated.  */
    LEGACY_COMMAND: Material
    /** Deprecated.  */
    LEGACY_COMMAND_CHAIN: Material
    /** Deprecated.  */
    LEGACY_COMMAND_MINECART: Material
    /** Deprecated.  */
    LEGACY_COMMAND_REPEATING: Material
    /** Deprecated.  */
    LEGACY_COMPASS: Material
    /** Deprecated.  */
    LEGACY_CONCRETE: Material
    /** Deprecated.  */
    LEGACY_CONCRETE_POWDER: Material
    /** Deprecated.  */
    LEGACY_COOKED_BEEF: Material
    /** Deprecated.  */
    LEGACY_COOKED_CHICKEN: Material
    /** Deprecated.  */
    LEGACY_COOKED_FISH: Material
    /** Deprecated.  */
    LEGACY_COOKED_MUTTON: Material
    /** Deprecated.  */
    LEGACY_COOKED_RABBIT: Material
    /** Deprecated.  */
    LEGACY_COOKIE: Material
    /** Deprecated.  */
    LEGACY_CROPS: Material
    /** Deprecated.  */
    LEGACY_CYAN_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_CYAN_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_DARK_OAK_DOOR: Material
    /** Deprecated.  */
    LEGACY_DARK_OAK_DOOR_ITEM: Material
    /** Deprecated.  */
    LEGACY_DARK_OAK_FENCE: Material
    /** Deprecated.  */
    LEGACY_DARK_OAK_FENCE_GATE: Material
    /** Deprecated.  */
    LEGACY_DARK_OAK_STAIRS: Material
    /** Deprecated.  */
    LEGACY_DAYLIGHT_DETECTOR: Material
    /** Deprecated.  */
    LEGACY_DAYLIGHT_DETECTOR_INVERTED: Material
    /** Deprecated.  */
    LEGACY_DEAD_BUSH: Material
    /** Deprecated.  */
    LEGACY_DETECTOR_RAIL: Material
    /** Deprecated.  */
    LEGACY_DIAMOND: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_AXE: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_BARDING: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_BLOCK: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_BOOTS: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_CHESTPLATE: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_HELMET: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_HOE: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_LEGGINGS: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_ORE: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_PICKAXE: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_SPADE: Material
    /** Deprecated.  */
    LEGACY_DIAMOND_SWORD: Material
    /** Deprecated.  */
    LEGACY_DIODE: Material
    /** Deprecated.  */
    LEGACY_DIODE_BLOCK_OFF: Material
    /** Deprecated.  */
    LEGACY_DIODE_BLOCK_ON: Material
    /** Deprecated.  */
    LEGACY_DIRT: Material
    /** Deprecated.  */
    LEGACY_DISPENSER: Material
    /** Deprecated.  */
    LEGACY_DOUBLE_PLANT: Material
    /** Deprecated.  */
    LEGACY_DOUBLE_STEP: Material
    /** Deprecated.  */
    LEGACY_DOUBLE_STONE_SLAB2: Material
    /** Deprecated.  */
    LEGACY_DRAGON_EGG: Material
    /** Deprecated.  */
    LEGACY_DRAGONS_BREATH: Material
    /** Deprecated.  */
    LEGACY_DROPPER: Material
    /** Deprecated.  */
    LEGACY_EGG: Material
    /** Deprecated.  */
    LEGACY_ELYTRA: Material
    /** Deprecated.  */
    LEGACY_EMERALD: Material
    /** Deprecated.  */
    LEGACY_EMERALD_BLOCK: Material
    /** Deprecated.  */
    LEGACY_EMERALD_ORE: Material
    /** Deprecated.  */
    LEGACY_EMPTY_MAP: Material
    /** Deprecated.  */
    LEGACY_ENCHANTED_BOOK: Material
    /** Deprecated.  */
    LEGACY_ENCHANTMENT_TABLE: Material
    /** Deprecated.  */
    LEGACY_END_BRICKS: Material
    /** Deprecated.  */
    LEGACY_END_CRYSTAL: Material
    /** Deprecated.  */
    LEGACY_END_GATEWAY: Material
    /** Deprecated.  */
    LEGACY_END_ROD: Material
    /** Deprecated.  */
    LEGACY_ENDER_CHEST: Material
    /** Deprecated.  */
    LEGACY_ENDER_PEARL: Material
    /** Deprecated.  */
    LEGACY_ENDER_PORTAL: Material
    /** Deprecated.  */
    LEGACY_ENDER_PORTAL_FRAME: Material
    /** Deprecated.  */
    LEGACY_ENDER_STONE: Material
    /** Deprecated.  */
    LEGACY_EXP_BOTTLE: Material
    /** Deprecated.  */
    LEGACY_EXPLOSIVE_MINECART: Material
    /** Deprecated.  */
    LEGACY_EYE_OF_ENDER: Material
    /** Deprecated.  */
    LEGACY_FEATHER: Material
    /** Deprecated.  */
    LEGACY_FENCE: Material
    /** Deprecated.  */
    LEGACY_FENCE_GATE: Material
    /** Deprecated.  */
    LEGACY_FERMENTED_SPIDER_EYE: Material
    /** Deprecated.  */
    LEGACY_FIRE: Material
    /** Deprecated.  */
    LEGACY_FIREBALL: Material
    /** Deprecated.  */
    LEGACY_FIREWORK: Material
    /** Deprecated.  */
    LEGACY_FIREWORK_CHARGE: Material
    /** Deprecated.  */
    LEGACY_FISHING_ROD: Material
    /** Deprecated.  */
    LEGACY_FLINT: Material
    /** Deprecated.  */
    LEGACY_FLINT_AND_STEEL: Material
    /** Deprecated.  */
    LEGACY_FLOWER_POT: Material
    /** Deprecated.  */
    LEGACY_FLOWER_POT_ITEM: Material
    /** Deprecated.  */
    LEGACY_FROSTED_ICE: Material
    /** Deprecated.  */
    LEGACY_FURNACE: Material
    /** Deprecated.  */
    LEGACY_GHAST_TEAR: Material
    /** Deprecated.  */
    LEGACY_GLASS: Material
    /** Deprecated.  */
    LEGACY_GLASS_BOTTLE: Material
    /** Deprecated.  */
    LEGACY_GLOWING_REDSTONE_ORE: Material
    /** Deprecated.  */
    LEGACY_GLOWSTONE: Material
    /** Deprecated.  */
    LEGACY_GLOWSTONE_DUST: Material
    /** Deprecated.  */
    LEGACY_GOLD_AXE: Material
    /** Deprecated.  */
    LEGACY_GOLD_BARDING: Material
    /** Deprecated.  */
    LEGACY_GOLD_BLOCK: Material
    /** Deprecated.  */
    LEGACY_GOLD_BOOTS: Material
    /** Deprecated.  */
    LEGACY_GOLD_CHESTPLATE: Material
    /** Deprecated.  */
    LEGACY_GOLD_HELMET: Material
    /** Deprecated.  */
    LEGACY_GOLD_HOE: Material
    /** Deprecated.  */
    LEGACY_GOLD_INGOT: Material
    /** Deprecated.  */
    LEGACY_GOLD_LEGGINGS: Material
    /** Deprecated.  */
    LEGACY_GOLD_NUGGET: Material
    /** Deprecated.  */
    LEGACY_GOLD_ORE: Material
    /** Deprecated.  */
    LEGACY_GOLD_PICKAXE: Material
    /** Deprecated.  */
    LEGACY_GOLD_PLATE: Material
    /** Deprecated.  */
    LEGACY_GOLD_RECORD: Material
    /** Deprecated.  */
    LEGACY_GOLD_SPADE: Material
    /** Deprecated.  */
    LEGACY_GOLD_SWORD: Material
    /** Deprecated.  */
    LEGACY_GOLDEN_APPLE: Material
    /** Deprecated.  */
    LEGACY_GOLDEN_CARROT: Material
    /** Deprecated.  */
    LEGACY_GRASS: Material
    /** Deprecated.  */
    LEGACY_GRASS_PATH: Material
    /** Deprecated.  */
    LEGACY_GRAVEL: Material
    /** Deprecated.  */
    LEGACY_GRAY_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_GRAY_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_GREEN_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_GREEN_RECORD: Material
    /** Deprecated.  */
    LEGACY_GREEN_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_GRILLED_PORK: Material
    /** Deprecated.  */
    LEGACY_HARD_CLAY: Material
    /** Deprecated.  */
    LEGACY_HAY_BLOCK: Material
    /** Deprecated.  */
    LEGACY_HOPPER: Material
    /** Deprecated.  */
    LEGACY_HOPPER_MINECART: Material
    /** Deprecated.  */
    LEGACY_HUGE_MUSHROOM_1: Material
    /** Deprecated.  */
    LEGACY_HUGE_MUSHROOM_2: Material
    /** Deprecated.  */
    LEGACY_ICE: Material
    /** Deprecated.  */
    LEGACY_INK_SACK: Material
    /** Deprecated.  */
    LEGACY_IRON_AXE: Material
    /** Deprecated.  */
    LEGACY_IRON_BARDING: Material
    /** Deprecated.  */
    LEGACY_IRON_BLOCK: Material
    /** Deprecated.  */
    LEGACY_IRON_BOOTS: Material
    /** Deprecated.  */
    LEGACY_IRON_CHESTPLATE: Material
    /** Deprecated.  */
    LEGACY_IRON_DOOR: Material
    /** Deprecated.  */
    LEGACY_IRON_DOOR_BLOCK: Material
    /** Deprecated.  */
    LEGACY_IRON_FENCE: Material
    /** Deprecated.  */
    LEGACY_IRON_HELMET: Material
    /** Deprecated.  */
    LEGACY_IRON_HOE: Material
    /** Deprecated.  */
    LEGACY_IRON_INGOT: Material
    /** Deprecated.  */
    LEGACY_IRON_LEGGINGS: Material
    /** Deprecated.  */
    LEGACY_IRON_NUGGET: Material
    /** Deprecated.  */
    LEGACY_IRON_ORE: Material
    /** Deprecated.  */
    LEGACY_IRON_PICKAXE: Material
    /** Deprecated.  */
    LEGACY_IRON_PLATE: Material
    /** Deprecated.  */
    LEGACY_IRON_SPADE: Material
    /** Deprecated.  */
    LEGACY_IRON_SWORD: Material
    /** Deprecated.  */
    LEGACY_IRON_TRAPDOOR: Material
    /** Deprecated.  */
    LEGACY_ITEM_FRAME: Material
    /** Deprecated.  */
    LEGACY_JACK_O_LANTERN: Material
    /** Deprecated.  */
    LEGACY_JUKEBOX: Material
    /** Deprecated.  */
    LEGACY_JUNGLE_DOOR: Material
    /** Deprecated.  */
    LEGACY_JUNGLE_DOOR_ITEM: Material
    /** Deprecated.  */
    LEGACY_JUNGLE_FENCE: Material
    /** Deprecated.  */
    LEGACY_JUNGLE_FENCE_GATE: Material
    /** Deprecated.  */
    LEGACY_JUNGLE_WOOD_STAIRS: Material
    /** Deprecated.  */
    LEGACY_KNOWLEDGE_BOOK: Material
    /** Deprecated.  */
    LEGACY_LADDER: Material
    /** Deprecated.  */
    LEGACY_LAPIS_BLOCK: Material
    /** Deprecated.  */
    LEGACY_LAPIS_ORE: Material
    /** Deprecated.  */
    LEGACY_LAVA: Material
    /** Deprecated.  */
    LEGACY_LAVA_BUCKET: Material
    /** Deprecated.  */
    LEGACY_LEASH: Material
    /** Deprecated.  */
    LEGACY_LEATHER: Material
    /** Deprecated.  */
    LEGACY_LEATHER_BOOTS: Material
    /** Deprecated.  */
    LEGACY_LEATHER_CHESTPLATE: Material
    /** Deprecated.  */
    LEGACY_LEATHER_HELMET: Material
    /** Deprecated.  */
    LEGACY_LEATHER_LEGGINGS: Material
    /** Deprecated.  */
    LEGACY_LEAVES: Material
    /** Deprecated.  */
    LEGACY_LEAVES_2: Material
    /** Deprecated.  */
    LEGACY_LEVER: Material
    /** Deprecated.  */
    LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_LIGHT_BLUE_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_LIME_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_LIME_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_LINGERING_POTION: Material
    /** Deprecated.  */
    LEGACY_LOG: Material
    /** Deprecated.  */
    LEGACY_LOG_2: Material
    /** Deprecated.  */
    LEGACY_LONG_GRASS: Material
    /** Deprecated.  */
    LEGACY_MAGENTA_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_MAGENTA_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_MAGMA: Material
    /** Deprecated.  */
    LEGACY_MAGMA_CREAM: Material
    /** Deprecated.  */
    LEGACY_MAP: Material
    /** Deprecated.  */
    LEGACY_MELON: Material
    /** Deprecated.  */
    LEGACY_MELON_BLOCK: Material
    /** Deprecated.  */
    LEGACY_MELON_SEEDS: Material
    /** Deprecated.  */
    LEGACY_MELON_STEM: Material
    /** Deprecated.  */
    LEGACY_MILK_BUCKET: Material
    /** Deprecated.  */
    LEGACY_MINECART: Material
    /** Deprecated.  */
    LEGACY_MOB_SPAWNER: Material
    /** Deprecated.  */
    LEGACY_MONSTER_EGG: Material
    /** Deprecated.  */
    LEGACY_MONSTER_EGGS: Material
    /** Deprecated.  */
    LEGACY_MOSSY_COBBLESTONE: Material
    /** Deprecated.  */
    LEGACY_MUSHROOM_SOUP: Material
    /** Deprecated.  */
    LEGACY_MUTTON: Material
    /** Deprecated.  */
    LEGACY_MYCEL: Material
    /** Deprecated.  */
    LEGACY_NAME_TAG: Material
    /** Deprecated.  */
    LEGACY_NETHER_BRICK: Material
    /** Deprecated.  */
    LEGACY_NETHER_BRICK_ITEM: Material
    /** Deprecated.  */
    LEGACY_NETHER_BRICK_STAIRS: Material
    /** Deprecated.  */
    LEGACY_NETHER_FENCE: Material
    /** Deprecated.  */
    LEGACY_NETHER_STALK: Material
    /** Deprecated.  */
    LEGACY_NETHER_STAR: Material
    /** Deprecated.  */
    LEGACY_NETHER_WART_BLOCK: Material
    /** Deprecated.  */
    LEGACY_NETHER_WARTS: Material
    /** Deprecated.  */
    LEGACY_NETHERRACK: Material
    /** Deprecated.  */
    LEGACY_NOTE_BLOCK: Material
    /** Deprecated.  */
    LEGACY_OBSERVER: Material
    /** Deprecated.  */
    LEGACY_OBSIDIAN: Material
    /** Deprecated.  */
    LEGACY_ORANGE_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_ORANGE_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_PACKED_ICE: Material
    /** Deprecated.  */
    LEGACY_PAINTING: Material
    /** Deprecated.  */
    LEGACY_PAPER: Material
    /** Deprecated.  */
    LEGACY_PINK_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_PINK_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_PISTON_BASE: Material
    /** Deprecated.  */
    LEGACY_PISTON_EXTENSION: Material
    /** Deprecated.  */
    LEGACY_PISTON_MOVING_PIECE: Material
    /** Deprecated.  */
    LEGACY_PISTON_STICKY_BASE: Material
    /** Deprecated.  */
    LEGACY_POISONOUS_POTATO: Material
    /** Deprecated.  */
    LEGACY_PORK: Material
    /** Deprecated.  */
    LEGACY_PORTAL: Material
    /** Deprecated.  */
    LEGACY_POTATO: Material
    /** Deprecated.  */
    LEGACY_POTATO_ITEM: Material
    /** Deprecated.  */
    LEGACY_POTION: Material
    /** Deprecated.  */
    LEGACY_POWERED_MINECART: Material
    /** Deprecated.  */
    LEGACY_POWERED_RAIL: Material
    /** Deprecated.  */
    LEGACY_PRISMARINE: Material
    /** Deprecated.  */
    LEGACY_PRISMARINE_CRYSTALS: Material
    /** Deprecated.  */
    LEGACY_PRISMARINE_SHARD: Material
    /** Deprecated.  */
    LEGACY_PUMPKIN: Material
    /** Deprecated.  */
    LEGACY_PUMPKIN_PIE: Material
    /** Deprecated.  */
    LEGACY_PUMPKIN_SEEDS: Material
    /** Deprecated.  */
    LEGACY_PUMPKIN_STEM: Material
    /** Deprecated.  */
    LEGACY_PURPLE_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_PURPLE_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_PURPUR_BLOCK: Material
    /** Deprecated.  */
    LEGACY_PURPUR_DOUBLE_SLAB: Material
    /** Deprecated.  */
    LEGACY_PURPUR_PILLAR: Material
    /** Deprecated.  */
    LEGACY_PURPUR_SLAB: Material
    /** Deprecated.  */
    LEGACY_PURPUR_STAIRS: Material
    /** Deprecated.  */
    LEGACY_QUARTZ: Material
    /** Deprecated.  */
    LEGACY_QUARTZ_BLOCK: Material
    /** Deprecated.  */
    LEGACY_QUARTZ_ORE: Material
    /** Deprecated.  */
    LEGACY_QUARTZ_STAIRS: Material
    /** Deprecated.  */
    LEGACY_RABBIT: Material
    /** Deprecated.  */
    LEGACY_RABBIT_FOOT: Material
    /** Deprecated.  */
    LEGACY_RABBIT_HIDE: Material
    /** Deprecated.  */
    LEGACY_RABBIT_STEW: Material
    /** Deprecated.  */
    LEGACY_RAILS: Material
    /** Deprecated.  */
    LEGACY_RAW_BEEF: Material
    /** Deprecated.  */
    LEGACY_RAW_CHICKEN: Material
    /** Deprecated.  */
    LEGACY_RAW_FISH: Material
    /** Deprecated.  */
    LEGACY_RECORD_10: Material
    /** Deprecated.  */
    LEGACY_RECORD_11: Material
    /** Deprecated.  */
    LEGACY_RECORD_12: Material
    /** Deprecated.  */
    LEGACY_RECORD_3: Material
    /** Deprecated.  */
    LEGACY_RECORD_4: Material
    /** Deprecated.  */
    LEGACY_RECORD_5: Material
    /** Deprecated.  */
    LEGACY_RECORD_6: Material
    /** Deprecated.  */
    LEGACY_RECORD_7: Material
    /** Deprecated.  */
    LEGACY_RECORD_8: Material
    /** Deprecated.  */
    LEGACY_RECORD_9: Material
    /** Deprecated.  */
    LEGACY_RED_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_RED_MUSHROOM: Material
    /** Deprecated.  */
    LEGACY_RED_NETHER_BRICK: Material
    /** Deprecated.  */
    LEGACY_RED_ROSE: Material
    /** Deprecated.  */
    LEGACY_RED_SANDSTONE: Material
    /** Deprecated.  */
    LEGACY_RED_SANDSTONE_STAIRS: Material
    /** Deprecated.  */
    LEGACY_RED_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_REDSTONE: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_BLOCK: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_COMPARATOR: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_COMPARATOR_OFF: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_COMPARATOR_ON: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_LAMP_OFF: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_LAMP_ON: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_ORE: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_TORCH_OFF: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_TORCH_ON: Material
    /** Deprecated.  */
    LEGACY_REDSTONE_WIRE: Material
    /** Deprecated.  */
    LEGACY_ROTTEN_FLESH: Material
    /** Deprecated.  */
    LEGACY_SADDLE: Material
    /** Deprecated.  */
    LEGACY_SAND: Material
    /** Deprecated.  */
    LEGACY_SANDSTONE: Material
    /** Deprecated.  */
    LEGACY_SANDSTONE_STAIRS: Material
    /** Deprecated.  */
    LEGACY_SAPLING: Material
    /** Deprecated.  */
    LEGACY_SEA_LANTERN: Material
    /** Deprecated.  */
    LEGACY_SEEDS: Material
    /** Deprecated.  */
    LEGACY_SHEARS: Material
    /** Deprecated.  */
    LEGACY_SHIELD: Material
    /** Deprecated.  */
    LEGACY_SHULKER_SHELL: Material
    /** Deprecated.  */
    LEGACY_SIGN: Material
    /** Deprecated.  */
    LEGACY_SIGN_POST: Material
    /** Deprecated.  */
    LEGACY_SILVER_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_SILVER_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_SKULL: Material
    /** Deprecated.  */
    LEGACY_SKULL_ITEM: Material
    /** Deprecated.  */
    LEGACY_SLIME_BALL: Material
    /** Deprecated.  */
    LEGACY_SLIME_BLOCK: Material
    /** Deprecated.  */
    LEGACY_SMOOTH_BRICK: Material
    /** Deprecated.  */
    LEGACY_SMOOTH_STAIRS: Material
    /** Deprecated.  */
    LEGACY_SNOW: Material
    /** Deprecated.  */
    LEGACY_SNOW_BALL: Material
    /** Deprecated.  */
    LEGACY_SNOW_BLOCK: Material
    /** Deprecated.  */
    LEGACY_SOIL: Material
    /** Deprecated.  */
    LEGACY_SOUL_SAND: Material
    /** Deprecated.  */
    LEGACY_SPECKLED_MELON: Material
    /** Deprecated.  */
    LEGACY_SPECTRAL_ARROW: Material
    /** Deprecated.  */
    LEGACY_SPIDER_EYE: Material
    /** Deprecated.  */
    LEGACY_SPLASH_POTION: Material
    /** Deprecated.  */
    LEGACY_SPONGE: Material
    /** Deprecated.  */
    LEGACY_SPRUCE_DOOR: Material
    /** Deprecated.  */
    LEGACY_SPRUCE_DOOR_ITEM: Material
    /** Deprecated.  */
    LEGACY_SPRUCE_FENCE: Material
    /** Deprecated.  */
    LEGACY_SPRUCE_FENCE_GATE: Material
    /** Deprecated.  */
    LEGACY_SPRUCE_WOOD_STAIRS: Material
    /** Deprecated.  */
    LEGACY_STAINED_CLAY: Material
    /** Deprecated.  */
    LEGACY_STAINED_GLASS: Material
    /** Deprecated.  */
    LEGACY_STAINED_GLASS_PANE: Material
    /** Deprecated.  */
    LEGACY_STANDING_BANNER: Material
    /** Deprecated.  */
    LEGACY_STATIONARY_LAVA: Material
    /** Deprecated.  */
    LEGACY_STATIONARY_WATER: Material
    /** Deprecated.  */
    LEGACY_STEP: Material
    /** Deprecated.  */
    LEGACY_STICK: Material
    /** Deprecated.  */
    LEGACY_STONE: Material
    /** Deprecated.  */
    LEGACY_STONE_AXE: Material
    /** Deprecated.  */
    LEGACY_STONE_BUTTON: Material
    /** Deprecated.  */
    LEGACY_STONE_HOE: Material
    /** Deprecated.  */
    LEGACY_STONE_PICKAXE: Material
    /** Deprecated.  */
    LEGACY_STONE_PLATE: Material
    /** Deprecated.  */
    LEGACY_STONE_SLAB2: Material
    /** Deprecated.  */
    LEGACY_STONE_SPADE: Material
    /** Deprecated.  */
    LEGACY_STONE_SWORD: Material
    /** Deprecated.  */
    LEGACY_STORAGE_MINECART: Material
    /** Deprecated.  */
    LEGACY_STRING: Material
    /** Deprecated.  */
    LEGACY_STRUCTURE_BLOCK: Material
    /** Deprecated.  */
    LEGACY_STRUCTURE_VOID: Material
    /** Deprecated.  */
    LEGACY_SUGAR: Material
    /** Deprecated.  */
    LEGACY_SUGAR_CANE: Material
    /** Deprecated.  */
    LEGACY_SUGAR_CANE_BLOCK: Material
    /** Deprecated.  */
    LEGACY_SULPHUR: Material
    /** Deprecated.  */
    LEGACY_THIN_GLASS: Material
    /** Deprecated.  */
    LEGACY_TIPPED_ARROW: Material
    /** Deprecated.  */
    LEGACY_TNT: Material
    /** Deprecated.  */
    LEGACY_TORCH: Material
    /** Deprecated.  */
    LEGACY_TOTEM: Material
    /** Deprecated.  */
    LEGACY_TRAP_DOOR: Material
    /** Deprecated.  */
    LEGACY_TRAPPED_CHEST: Material
    /** Deprecated.  */
    LEGACY_TRIPWIRE: Material
    /** Deprecated.  */
    LEGACY_TRIPWIRE_HOOK: Material
    /** Deprecated.  */
    LEGACY_VINE: Material
    /** Deprecated.  */
    LEGACY_WALL_BANNER: Material
    /** Deprecated.  */
    LEGACY_WALL_SIGN: Material
    /** Deprecated.  */
    LEGACY_WATCH: Material
    /** Deprecated.  */
    LEGACY_WATER: Material
    /** Deprecated.  */
    LEGACY_WATER_BUCKET: Material
    /** Deprecated.  */
    LEGACY_WATER_LILY: Material
    /** Deprecated.  */
    LEGACY_WEB: Material
    /** Deprecated.  */
    LEGACY_WHEAT: Material
    /** Deprecated.  */
    LEGACY_WHITE_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_WHITE_SHULKER_BOX: Material
    /** Deprecated.  */
    LEGACY_WOOD: Material
    /** Deprecated.  */
    LEGACY_WOOD_AXE: Material
    /** Deprecated.  */
    LEGACY_WOOD_BUTTON: Material
    /** Deprecated.  */
    LEGACY_WOOD_DOOR: Material
    /** Deprecated.  */
    LEGACY_WOOD_DOUBLE_STEP: Material
    /** Deprecated.  */
    LEGACY_WOOD_HOE: Material
    /** Deprecated.  */
    LEGACY_WOOD_PICKAXE: Material
    /** Deprecated.  */
    LEGACY_WOOD_PLATE: Material
    /** Deprecated.  */
    LEGACY_WOOD_SPADE: Material
    /** Deprecated.  */
    LEGACY_WOOD_STAIRS: Material
    /** Deprecated.  */
    LEGACY_WOOD_STEP: Material
    /** Deprecated.  */
    LEGACY_WOOD_SWORD: Material
    /** Deprecated.  */
    LEGACY_WOODEN_DOOR: Material
    /** Deprecated.  */
    LEGACY_WOOL: Material
    /** Deprecated.  */
    LEGACY_WORKBENCH: Material
    /** Deprecated.  */
    LEGACY_WRITTEN_BOOK: Material
    /** Deprecated.  */
    LEGACY_YELLOW_FLOWER: Material
    /** Deprecated.  */
    LEGACY_YELLOW_GLAZED_TERRACOTTA: Material
    /** Deprecated.  */
    LEGACY_YELLOW_SHULKER_BOX: Material
    /** BlockData: Switch */
    LEVER: Material
    /** BlockData: Rotatable */
    LIGHT_BLUE_BANNER: Material
    /** BlockData: Bed */
    LIGHT_BLUE_BED: Material
    /**   */
    LIGHT_BLUE_CARPET: Material
    /**   */
    LIGHT_BLUE_CONCRETE: Material
    /**   */
    LIGHT_BLUE_CONCRETE_POWDER: Material
    /**   */
    LIGHT_BLUE_DYE: Material
    /** BlockData: Directional */
    LIGHT_BLUE_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    LIGHT_BLUE_SHULKER_BOX: Material
    /**   */
    LIGHT_BLUE_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    LIGHT_BLUE_STAINED_GLASS_PANE: Material
    /**   */
    LIGHT_BLUE_TERRACOTTA: Material
    /** BlockData: Directional */
    LIGHT_BLUE_WALL_BANNER: Material
    /**   */
    LIGHT_BLUE_WOOL: Material
    /** BlockData: Rotatable */
    LIGHT_GRAY_BANNER: Material
    /** BlockData: Bed */
    LIGHT_GRAY_BED: Material
    /**   */
    LIGHT_GRAY_CARPET: Material
    /**   */
    LIGHT_GRAY_CONCRETE: Material
    /**   */
    LIGHT_GRAY_CONCRETE_POWDER: Material
    /**   */
    LIGHT_GRAY_DYE: Material
    /** BlockData: Directional */
    LIGHT_GRAY_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    LIGHT_GRAY_SHULKER_BOX: Material
    /**   */
    LIGHT_GRAY_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    LIGHT_GRAY_STAINED_GLASS_PANE: Material
    /**   */
    LIGHT_GRAY_TERRACOTTA: Material
    /** BlockData: Directional */
    LIGHT_GRAY_WALL_BANNER: Material
    /**   */
    LIGHT_GRAY_WOOL: Material
    /** BlockData: AnaloguePowerable */
    LIGHT_WEIGHTED_PRESSURE_PLATE: Material
    /** BlockData: Bisected */
    LILAC: Material
    /**   */
    LILY_OF_THE_VALLEY: Material
    /**   */
    LILY_PAD: Material
    /** BlockData: Rotatable */
    LIME_BANNER: Material
    /** BlockData: Bed */
    LIME_BED: Material
    /**   */
    LIME_CARPET: Material
    /**   */
    LIME_CONCRETE: Material
    /**   */
    LIME_CONCRETE_POWDER: Material
    /**   */
    LIME_DYE: Material
    /** BlockData: Directional */
    LIME_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    LIME_SHULKER_BOX: Material
    /**   */
    LIME_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    LIME_STAINED_GLASS_PANE: Material
    /**   */
    LIME_TERRACOTTA: Material
    /** BlockData: Directional */
    LIME_WALL_BANNER: Material
    /**   */
    LIME_WOOL: Material
    /**   */
    LINGERING_POTION: Material
    /**   */
    LLAMA_SPAWN_EGG: Material
    /** BlockData: Directional */
    LOOM: Material
    /** BlockData: Rotatable */
    MAGENTA_BANNER: Material
    /** BlockData: Bed */
    MAGENTA_BED: Material
    /**   */
    MAGENTA_CARPET: Material
    /**   */
    MAGENTA_CONCRETE: Material
    /**   */
    MAGENTA_CONCRETE_POWDER: Material
    /**   */
    MAGENTA_DYE: Material
    /** BlockData: Directional */
    MAGENTA_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    MAGENTA_SHULKER_BOX: Material
    /**   */
    MAGENTA_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    MAGENTA_STAINED_GLASS_PANE: Material
    /**   */
    MAGENTA_TERRACOTTA: Material
    /** BlockData: Directional */
    MAGENTA_WALL_BANNER: Material
    /**   */
    MAGENTA_WOOL: Material
    /**   */
    MAGMA_BLOCK: Material
    /**   */
    MAGMA_CREAM: Material
    /**   */
    MAGMA_CUBE_SPAWN_EGG: Material
    /**   */
    MAP: Material
    /**   */
    MELON: Material
    /**   */
    MELON_SEEDS: Material
    /**   */
    MELON_SLICE: Material
    /** BlockData: Ageable */
    MELON_STEM: Material
    /**   */
    MILK_BUCKET: Material
    /**   */
    MINECART: Material
    /**   */
    MOJANG_BANNER_PATTERN: Material
    /**   */
    MOOSHROOM_SPAWN_EGG: Material
    /** BlockData: MultipleFacing */
    MOSSY_COBBLESTONE: Material
    /** BlockData: Slab */
    MOSSY_COBBLESTONE_SLAB: Material
    /** BlockData: Stairs */
    MOSSY_COBBLESTONE_STAIRS: Material
    /** BlockData: Fence */
    MOSSY_COBBLESTONE_WALL: Material
    /** BlockData: Slab */
    MOSSY_STONE_BRICK_SLAB: Material
    /** BlockData: Stairs */
    MOSSY_STONE_BRICK_STAIRS: Material
    /** BlockData: Fence */
    MOSSY_STONE_BRICK_WALL: Material
    /**   */
    MOSSY_STONE_BRICKS: Material
    /** BlockData: TechnicalPiston */
    MOVING_PISTON: Material
    /**   */
    MULE_SPAWN_EGG: Material
    /** BlockData: MultipleFacing */
    MUSHROOM_STEM: Material
    /**   */
    MUSHROOM_STEW: Material
    /**   */
    MUSIC_DISC_11: Material
    /**   */
    MUSIC_DISC_13: Material
    /**   */
    MUSIC_DISC_BLOCKS: Material
    /**   */
    MUSIC_DISC_CAT: Material
    /**   */
    MUSIC_DISC_CHIRP: Material
    /**   */
    MUSIC_DISC_FAR: Material
    /**   */
    MUSIC_DISC_MALL: Material
    /**   */
    MUSIC_DISC_MELLOHI: Material
    /**   */
    MUSIC_DISC_STAL: Material
    /**   */
    MUSIC_DISC_STRAD: Material
    /**   */
    MUSIC_DISC_WAIT: Material
    /**   */
    MUSIC_DISC_WARD: Material
    /**   */
    MUTTON: Material
    /** BlockData: Snowable */
    MYCELIUM: Material
    /**   */
    NAME_TAG: Material
    /**   */
    NAUTILUS_SHELL: Material
    /**   */
    NETHER_BRICK: Material
    /** BlockData: Fence */
    NETHER_BRICK_FENCE: Material
    /** BlockData: Slab */
    NETHER_BRICK_SLAB: Material
    /** BlockData: Stairs */
    NETHER_BRICK_STAIRS: Material
    /** BlockData: Fence */
    NETHER_BRICK_WALL: Material
    /**   */
    NETHER_BRICKS: Material
    /** BlockData: Orientable */
    NETHER_PORTAL: Material
    /**   */
    NETHER_QUARTZ_ORE: Material
    /**   */
    NETHER_STAR: Material
    /** BlockData: Ageable */
    NETHER_WART: Material
    /**   */
    NETHER_WART_BLOCK: Material
    /**   */
    NETHERRACK: Material
    /** BlockData: NoteBlock */
    NOTE_BLOCK: Material
    /**   */
    OAK_BOAT: Material
    /** BlockData: Switch */
    OAK_BUTTON: Material
    /** BlockData: Door */
    OAK_DOOR: Material
    /** BlockData: Fence */
    OAK_FENCE: Material
    /** BlockData: Gate */
    OAK_FENCE_GATE: Material
    /** BlockData: Leaves */
    OAK_LEAVES: Material
    /** BlockData: Orientable */
    OAK_LOG: Material
    /**   */
    OAK_PLANKS: Material
    /** BlockData: Powerable */
    OAK_PRESSURE_PLATE: Material
    /** BlockData: Sapling */
    OAK_SAPLING: Material
    /** BlockData: Sign */
    OAK_SIGN: Material
    /** BlockData: Slab */
    OAK_SLAB: Material
    /** BlockData: Stairs */
    OAK_STAIRS: Material
    /** BlockData: TrapDoor */
    OAK_TRAPDOOR: Material
    /** BlockData: WallSign */
    OAK_WALL_SIGN: Material
    /** BlockData: Orientable */
    OAK_WOOD: Material
    /** BlockData: Observer */
    OBSERVER: Material
    /**   */
    OBSIDIAN: Material
    /**   */
    OCELOT_SPAWN_EGG: Material
    /** BlockData: Rotatable */
    ORANGE_BANNER: Material
    /** BlockData: Bed */
    ORANGE_BED: Material
    /**   */
    ORANGE_CARPET: Material
    /**   */
    ORANGE_CONCRETE: Material
    /**   */
    ORANGE_CONCRETE_POWDER: Material
    /**   */
    ORANGE_DYE: Material
    /** BlockData: Directional */
    ORANGE_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    ORANGE_SHULKER_BOX: Material
    /**   */
    ORANGE_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    ORANGE_STAINED_GLASS_PANE: Material
    /**   */
    ORANGE_TERRACOTTA: Material
    /**   */
    ORANGE_TULIP: Material
    /** BlockData: Directional */
    ORANGE_WALL_BANNER: Material
    /**   */
    ORANGE_WOOL: Material
    /**   */
    OXEYE_DAISY: Material
    /**   */
    PACKED_ICE: Material
    /**   */
    PAINTING: Material
    /**   */
    PANDA_SPAWN_EGG: Material
    /**   */
    PAPER: Material
    /**   */
    PARROT_SPAWN_EGG: Material
    /** BlockData: Bisected */
    PEONY: Material
    /** BlockData: Slab */
    PETRIFIED_OAK_SLAB: Material
    /**   */
    PHANTOM_MEMBRANE: Material
    /**   */
    PHANTOM_SPAWN_EGG: Material
    /**   */
    PIG_SPAWN_EGG: Material
    /**   */
    PILLAGER_SPAWN_EGG: Material
    /** BlockData: Rotatable */
    PINK_BANNER: Material
    /** BlockData: Bed */
    PINK_BED: Material
    /**   */
    PINK_CARPET: Material
    /**   */
    PINK_CONCRETE: Material
    /**   */
    PINK_CONCRETE_POWDER: Material
    /**   */
    PINK_DYE: Material
    /** BlockData: Directional */
    PINK_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    PINK_SHULKER_BOX: Material
    /**   */
    PINK_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    PINK_STAINED_GLASS_PANE: Material
    /**   */
    PINK_TERRACOTTA: Material
    /**   */
    PINK_TULIP: Material
    /** BlockData: Directional */
    PINK_WALL_BANNER: Material
    /**   */
    PINK_WOOL: Material
    /** BlockData: Piston */
    PISTON: Material
    /** BlockData: PistonHead */
    PISTON_HEAD: Material
    /** BlockData: Rotatable */
    PLAYER_HEAD: Material
    /** BlockData: Directional */
    PLAYER_WALL_HEAD: Material
    /** BlockData: Snowable */
    PODZOL: Material
    /**   */
    POISONOUS_POTATO: Material
    /**   */
    POLAR_BEAR_SPAWN_EGG: Material
    /**   */
    POLISHED_ANDESITE: Material
    /** BlockData: Slab */
    POLISHED_ANDESITE_SLAB: Material
    /** BlockData: Stairs */
    POLISHED_ANDESITE_STAIRS: Material
    /**   */
    POLISHED_DIORITE: Material
    /** BlockData: Slab */
    POLISHED_DIORITE_SLAB: Material
    /** BlockData: Stairs */
    POLISHED_DIORITE_STAIRS: Material
    /**   */
    POLISHED_GRANITE: Material
    /** BlockData: Slab */
    POLISHED_GRANITE_SLAB: Material
    /** BlockData: Stairs */
    POLISHED_GRANITE_STAIRS: Material
    /**   */
    POPPED_CHORUS_FRUIT: Material
    /**   */
    POPPY: Material
    /**   */
    PORKCHOP: Material
    /**   */
    POTATO: Material
    /** BlockData: Ageable */
    POTATOES: Material
    /**   */
    POTION: Material
    /**   */
    POTTED_ACACIA_SAPLING: Material
    /**   */
    POTTED_ALLIUM: Material
    /**   */
    POTTED_AZURE_BLUET: Material
    /**   */
    POTTED_BAMBOO: Material
    /**   */
    POTTED_BIRCH_SAPLING: Material
    /**   */
    POTTED_BLUE_ORCHID: Material
    /**   */
    POTTED_BROWN_MUSHROOM: Material
    /**   */
    POTTED_CACTUS: Material
    /**   */
    POTTED_CORNFLOWER: Material
    /**   */
    POTTED_DANDELION: Material
    /**   */
    POTTED_DARK_OAK_SAPLING: Material
    /**   */
    POTTED_DEAD_BUSH: Material
    /**   */
    POTTED_FERN: Material
    /**   */
    POTTED_JUNGLE_SAPLING: Material
    /**   */
    POTTED_LILY_OF_THE_VALLEY: Material
    /**   */
    POTTED_OAK_SAPLING: Material
    /**   */
    POTTED_ORANGE_TULIP: Material
    /**   */
    POTTED_OXEYE_DAISY: Material
    /**   */
    POTTED_PINK_TULIP: Material
    /**   */
    POTTED_POPPY: Material
    /**   */
    POTTED_RED_MUSHROOM: Material
    /**   */
    POTTED_RED_TULIP: Material
    /**   */
    POTTED_SPRUCE_SAPLING: Material
    /**   */
    POTTED_WHITE_TULIP: Material
    /**   */
    POTTED_WITHER_ROSE: Material
    /** BlockData: RedstoneRail */
    POWERED_RAIL: Material
    /**   */
    PRISMARINE: Material
    /** BlockData: Slab */
    PRISMARINE_BRICK_SLAB: Material
    /** BlockData: Stairs */
    PRISMARINE_BRICK_STAIRS: Material
    /**   */
    PRISMARINE_BRICKS: Material
    /**   */
    PRISMARINE_CRYSTALS: Material
    /**   */
    PRISMARINE_SHARD: Material
    /** BlockData: Slab */
    PRISMARINE_SLAB: Material
    /** BlockData: Stairs */
    PRISMARINE_STAIRS: Material
    /** BlockData: Fence */
    PRISMARINE_WALL: Material
    /**   */
    PUFFERFISH: Material
    /**   */
    PUFFERFISH_BUCKET: Material
    /**   */
    PUFFERFISH_SPAWN_EGG: Material
    /**   */
    PUMPKIN: Material
    /**   */
    PUMPKIN_PIE: Material
    /**   */
    PUMPKIN_SEEDS: Material
    /** BlockData: Ageable */
    PUMPKIN_STEM: Material
    /** BlockData: Rotatable */
    PURPLE_BANNER: Material
    /** BlockData: Bed */
    PURPLE_BED: Material
    /**   */
    PURPLE_CARPET: Material
    /**   */
    PURPLE_CONCRETE: Material
    /**   */
    PURPLE_CONCRETE_POWDER: Material
    /**   */
    PURPLE_DYE: Material
    /** BlockData: Directional */
    PURPLE_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    PURPLE_SHULKER_BOX: Material
    /**   */
    PURPLE_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    PURPLE_STAINED_GLASS_PANE: Material
    /**   */
    PURPLE_TERRACOTTA: Material
    /** BlockData: Directional */
    PURPLE_WALL_BANNER: Material
    /**   */
    PURPLE_WOOL: Material
    /**   */
    PURPUR_BLOCK: Material
    /** BlockData: Orientable */
    PURPUR_PILLAR: Material
    /** BlockData: Slab */
    PURPUR_SLAB: Material
    /** BlockData: Stairs */
    PURPUR_STAIRS: Material
    /**   */
    QUARTZ: Material
    /**   */
    QUARTZ_BLOCK: Material
    /** BlockData: Orientable */
    QUARTZ_PILLAR: Material
    /** BlockData: Slab */
    QUARTZ_SLAB: Material
    /** BlockData: Stairs */
    QUARTZ_STAIRS: Material
    /**   */
    RABBIT: Material
    /**   */
    RABBIT_FOOT: Material
    /**   */
    RABBIT_HIDE: Material
    /**   */
    RABBIT_SPAWN_EGG: Material
    /**   */
    RABBIT_STEW: Material
    /** BlockData: Rail */
    RAIL: Material
    /**   */
    RAVAGER_SPAWN_EGG: Material
    /** BlockData: Rotatable */
    RED_BANNER: Material
    /** BlockData: Bed */
    RED_BED: Material
    /**   */
    RED_CARPET: Material
    /**   */
    RED_CONCRETE: Material
    /**   */
    RED_CONCRETE_POWDER: Material
    /**   */
    RED_DYE: Material
    /** BlockData: Directional */
    RED_GLAZED_TERRACOTTA: Material
    /**   */
    RED_MUSHROOM: Material
    /** BlockData: MultipleFacing */
    RED_MUSHROOM_BLOCK: Material
    /** BlockData: Slab */
    RED_NETHER_BRICK_SLAB: Material
    /** BlockData: Stairs */
    RED_NETHER_BRICK_STAIRS: Material
    /** BlockData: Fence */
    RED_NETHER_BRICK_WALL: Material
    /**   */
    RED_NETHER_BRICKS: Material
    /**   */
    RED_SAND: Material
    /**   */
    RED_SANDSTONE: Material
    /** BlockData: Slab */
    RED_SANDSTONE_SLAB: Material
    /** BlockData: Stairs */
    RED_SANDSTONE_STAIRS: Material
    /** BlockData: Fence */
    RED_SANDSTONE_WALL: Material
    /** BlockData: Directional */
    RED_SHULKER_BOX: Material
    /**   */
    RED_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    RED_STAINED_GLASS_PANE: Material
    /**   */
    RED_TERRACOTTA: Material
    /**   */
    RED_TULIP: Material
    /** BlockData: Directional */
    RED_WALL_BANNER: Material
    /**   */
    RED_WOOL: Material
    /**   */
    REDSTONE: Material
    /**   */
    REDSTONE_BLOCK: Material
    /** BlockData: Lightable */
    REDSTONE_LAMP: Material
    /** BlockData: Lightable */
    REDSTONE_ORE: Material
    /** BlockData: Lightable */
    REDSTONE_TORCH: Material
    /** BlockData: RedstoneWallTorch */
    REDSTONE_WALL_TORCH: Material
    /** BlockData: RedstoneWire */
    REDSTONE_WIRE: Material
    /** BlockData: Repeater */
    REPEATER: Material
    /** BlockData: CommandBlock */
    REPEATING_COMMAND_BLOCK: Material
    /** BlockData: Bisected */
    ROSE_BUSH: Material
    /**   */
    ROTTEN_FLESH: Material
    /**   */
    SADDLE: Material
    /**   */
    SALMON: Material
    /**   */
    SALMON_BUCKET: Material
    /**   */
    SALMON_SPAWN_EGG: Material
    /**   */
    SAND: Material
    /**   */
    SANDSTONE: Material
    /** BlockData: Slab */
    SANDSTONE_SLAB: Material
    /** BlockData: Stairs */
    SANDSTONE_STAIRS: Material
    /** BlockData: Fence */
    SANDSTONE_WALL: Material
    /** BlockData: Scaffolding */
    SCAFFOLDING: Material
    /**   */
    SCUTE: Material
    /**   */
    SEA_LANTERN: Material
    /** BlockData: SeaPickle */
    SEA_PICKLE: Material
    /**   */
    SEAGRASS: Material
    /**   */
    SHEARS: Material
    /**   */
    SHEEP_SPAWN_EGG: Material
    /**   */
    SHIELD: Material
    /** BlockData: Directional */
    SHULKER_BOX: Material
    /**   */
    SHULKER_SHELL: Material
    /**   */
    SHULKER_SPAWN_EGG: Material
    /**   */
    SILVERFISH_SPAWN_EGG: Material
    /**   */
    SKELETON_HORSE_SPAWN_EGG: Material
    /** BlockData: Rotatable */
    SKELETON_SKULL: Material
    /**   */
    SKELETON_SPAWN_EGG: Material
    /** BlockData: Directional */
    SKELETON_WALL_SKULL: Material
    /**   */
    SKULL_BANNER_PATTERN: Material
    /**   */
    SLIME_BALL: Material
    /**   */
    SLIME_BLOCK: Material
    /**   */
    SLIME_SPAWN_EGG: Material
    /**   */
    SMITHING_TABLE: Material
    /** BlockData: Furnace */
    SMOKER: Material
    /**   */
    SMOOTH_QUARTZ: Material
    /** BlockData: Slab */
    SMOOTH_QUARTZ_SLAB: Material
    /** BlockData: Stairs */
    SMOOTH_QUARTZ_STAIRS: Material
    /**   */
    SMOOTH_RED_SANDSTONE: Material
    /** BlockData: Slab */
    SMOOTH_RED_SANDSTONE_SLAB: Material
    /** BlockData: Stairs */
    SMOOTH_RED_SANDSTONE_STAIRS: Material
    /**   */
    SMOOTH_SANDSTONE: Material
    /** BlockData: Slab */
    SMOOTH_SANDSTONE_SLAB: Material
    /** BlockData: Stairs */
    SMOOTH_SANDSTONE_STAIRS: Material
    /**   */
    SMOOTH_STONE: Material
    /** BlockData: Slab */
    SMOOTH_STONE_SLAB: Material
    /** BlockData: Snow */
    SNOW: Material
    /**   */
    SNOW_BLOCK: Material
    /**   */
    SNOWBALL: Material
    /**   */
    SOUL_SAND: Material
    /**   */
    SPAWNER: Material
    /**   */
    SPECTRAL_ARROW: Material
    /**   */
    SPIDER_EYE: Material
    /**   */
    SPIDER_SPAWN_EGG: Material
    /**   */
    SPLASH_POTION: Material
    /**   */
    SPONGE: Material
    /**   */
    SPRUCE_BOAT: Material
    /** BlockData: Switch */
    SPRUCE_BUTTON: Material
    /** BlockData: Door */
    SPRUCE_DOOR: Material
    /** BlockData: Fence */
    SPRUCE_FENCE: Material
    /** BlockData: Gate */
    SPRUCE_FENCE_GATE: Material
    /** BlockData: Leaves */
    SPRUCE_LEAVES: Material
    /** BlockData: Orientable */
    SPRUCE_LOG: Material
    /**   */
    SPRUCE_PLANKS: Material
    /** BlockData: Powerable */
    SPRUCE_PRESSURE_PLATE: Material
    /** BlockData: Sapling */
    SPRUCE_SAPLING: Material
    /** BlockData: Sign */
    SPRUCE_SIGN: Material
    /** BlockData: Slab */
    SPRUCE_SLAB: Material
    /** BlockData: Stairs */
    SPRUCE_STAIRS: Material
    /** BlockData: TrapDoor */
    SPRUCE_TRAPDOOR: Material
    /** BlockData: WallSign */
    SPRUCE_WALL_SIGN: Material
    /** BlockData: Orientable */
    SPRUCE_WOOD: Material
    /**   */
    SQUID_SPAWN_EGG: Material
    /**   */
    STICK: Material
    /** BlockData: Piston */
    STICKY_PISTON: Material
    /**   */
    STONE: Material
    /**   */
    STONE_AXE: Material
    /** BlockData: Slab */
    STONE_BRICK_SLAB: Material
    /** BlockData: Stairs */
    STONE_BRICK_STAIRS: Material
    /** BlockData: Fence */
    STONE_BRICK_WALL: Material
    /**   */
    STONE_BRICKS: Material
    /** BlockData: Switch */
    STONE_BUTTON: Material
    /**   */
    STONE_HOE: Material
    /**   */
    STONE_PICKAXE: Material
    /** BlockData: Powerable */
    STONE_PRESSURE_PLATE: Material
    /**   */
    STONE_SHOVEL: Material
    /** BlockData: Slab */
    STONE_SLAB: Material
    /** BlockData: Stairs */
    STONE_STAIRS: Material
    /**   */
    STONE_SWORD: Material
    /** BlockData: Directional */
    STONECUTTER: Material
    /**   */
    STRAY_SPAWN_EGG: Material
    /**   */
    STRING: Material
    /** BlockData: Orientable */
    STRIPPED_ACACIA_LOG: Material
    /** BlockData: Orientable */
    STRIPPED_ACACIA_WOOD: Material
    /** BlockData: Orientable */
    STRIPPED_BIRCH_LOG: Material
    /** BlockData: Orientable */
    STRIPPED_BIRCH_WOOD: Material
    /** BlockData: Orientable */
    STRIPPED_DARK_OAK_LOG: Material
    /** BlockData: Orientable */
    STRIPPED_DARK_OAK_WOOD: Material
    /** BlockData: Orientable */
    STRIPPED_JUNGLE_LOG: Material
    /** BlockData: Orientable */
    STRIPPED_JUNGLE_WOOD: Material
    /** BlockData: Orientable */
    STRIPPED_OAK_LOG: Material
    /** BlockData: Orientable */
    STRIPPED_OAK_WOOD: Material
    /** BlockData: Orientable */
    STRIPPED_SPRUCE_LOG: Material
    /** BlockData: Orientable */
    STRIPPED_SPRUCE_WOOD: Material
    /** BlockData: StructureBlock */
    STRUCTURE_BLOCK: Material
    /**   */
    STRUCTURE_VOID: Material
    /**   */
    SUGAR: Material
    /** BlockData: Ageable */
    SUGAR_CANE: Material
    /** BlockData: Bisected */
    SUNFLOWER: Material
    /**   */
    SUSPICIOUS_STEW: Material
    /**   */
    SWEET_BERRIES: Material
    /** BlockData: Ageable */
    SWEET_BERRY_BUSH: Material
    /** BlockData: Bisected */
    TALL_GRASS: Material
    /** BlockData: Bisected */
    TALL_SEAGRASS: Material
    /**   */
    TERRACOTTA: Material
    /**   */
    TIPPED_ARROW: Material
    /** BlockData: TNT */
    TNT: Material
    /**   */
    TNT_MINECART: Material
    /**   */
    TORCH: Material
    /**   */
    TOTEM_OF_UNDYING: Material
    /**   */
    TRADER_LLAMA_SPAWN_EGG: Material
    /** BlockData: Chest */
    TRAPPED_CHEST: Material
    /**   */
    TRIDENT: Material
    /** BlockData: Tripwire */
    TRIPWIRE: Material
    /** BlockData: TripwireHook */
    TRIPWIRE_HOOK: Material
    /**   */
    TROPICAL_FISH: Material
    /**   */
    TROPICAL_FISH_BUCKET: Material
    /**   */
    TROPICAL_FISH_SPAWN_EGG: Material
    /** BlockData: Waterlogged */
    TUBE_CORAL: Material
    /**   */
    TUBE_CORAL_BLOCK: Material
    /** BlockData: Waterlogged */
    TUBE_CORAL_FAN: Material
    /** BlockData: CoralWallFan */
    TUBE_CORAL_WALL_FAN: Material
    /** BlockData: TurtleEgg */
    TURTLE_EGG: Material
    /**   */
    TURTLE_HELMET: Material
    /**   */
    TURTLE_SPAWN_EGG: Material
    /**   */
    VEX_SPAWN_EGG: Material
    /**   */
    VILLAGER_SPAWN_EGG: Material
    /**   */
    VINDICATOR_SPAWN_EGG: Material
    /** BlockData: MultipleFacing */
    VINE: Material
    /**   */
    VOID_AIR: Material
    /** BlockData: Directional */
    WALL_TORCH: Material
    /**   */
    WANDERING_TRADER_SPAWN_EGG: Material
    /** BlockData: Levelled */
    WATER: Material
    /**   */
    WATER_BUCKET: Material
    /**   */
    WET_SPONGE: Material
    /** BlockData: Ageable */
    WHEAT: Material
    /**   */
    WHEAT_SEEDS: Material
    /** BlockData: Rotatable */
    WHITE_BANNER: Material
    /** BlockData: Bed */
    WHITE_BED: Material
    /**   */
    WHITE_CARPET: Material
    /**   */
    WHITE_CONCRETE: Material
    /**   */
    WHITE_CONCRETE_POWDER: Material
    /**   */
    WHITE_DYE: Material
    /** BlockData: Directional */
    WHITE_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    WHITE_SHULKER_BOX: Material
    /**   */
    WHITE_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    WHITE_STAINED_GLASS_PANE: Material
    /**   */
    WHITE_TERRACOTTA: Material
    /**   */
    WHITE_TULIP: Material
    /** BlockData: Directional */
    WHITE_WALL_BANNER: Material
    /**   */
    WHITE_WOOL: Material
    /**   */
    WITCH_SPAWN_EGG: Material
    /**   */
    WITHER_ROSE: Material
    /** BlockData: Rotatable */
    WITHER_SKELETON_SKULL: Material
    /**   */
    WITHER_SKELETON_SPAWN_EGG: Material
    /** BlockData: Directional */
    WITHER_SKELETON_WALL_SKULL: Material
    /**   */
    WOLF_SPAWN_EGG: Material
    /**   */
    WOODEN_AXE: Material
    /**   */
    WOODEN_HOE: Material
    /**   */
    WOODEN_PICKAXE: Material
    /**   */
    WOODEN_SHOVEL: Material
    /**   */
    WOODEN_SWORD: Material
    /**   */
    WRITABLE_BOOK: Material
    /**   */
    WRITTEN_BOOK: Material
    /** BlockData: Rotatable */
    YELLOW_BANNER: Material
    /** BlockData: Bed */
    YELLOW_BED: Material
    /**   */
    YELLOW_CARPET: Material
    /**   */
    YELLOW_CONCRETE: Material
    /**   */
    YELLOW_CONCRETE_POWDER: Material
    /**   */
    YELLOW_DYE: Material
    /** BlockData: Directional */
    YELLOW_GLAZED_TERRACOTTA: Material
    /** BlockData: Directional */
    YELLOW_SHULKER_BOX: Material
    /**   */
    YELLOW_STAINED_GLASS: Material
    /** BlockData: GlassPane */
    YELLOW_STAINED_GLASS_PANE: Material
    /**   */
    YELLOW_TERRACOTTA: Material
    /** BlockData: Directional */
    YELLOW_WALL_BANNER: Material
    /**   */
    YELLOW_WOOL: Material
    /** BlockData: Rotatable */
    ZOMBIE_HEAD: Material
    /**   */
    ZOMBIE_HORSE_SPAWN_EGG: Material
    /**   */
    ZOMBIE_PIGMAN_SPAWN_EGG: Material
    /**   */
    ZOMBIE_SPAWN_EGG: Material
    /**   */
    ZOMBIE_VILLAGER_SPAWN_EGG: Material
    /** BlockData: Directional */
    ZOMBIE_WALL_HEAD: Material
}

interface Material extends Keyed {
    /**  */
    data: new (...args: any[]) => any
    /** Deprecated. */
    LEGACY_PREFIX: string

    /** Creates a new BlockData instance for this Material, with allproperties initialized to unspecified defaults. */
    createBlockData(): BlockData
    /** Creates a new BlockData instance for this Material, with allproperties initialized to unspecified defaults, except for those providedin data. */
    createBlockData(data: string): BlockData
    /** Creates a new BlockData instance for this Material, withall properties initialized to unspecified defaults. */
    createBlockData(consumer: Consumer<BlockData>): BlockData
    /** Obtains the blast resistance value (also known as block "durability"). */
    getBlastResistance(): number
    /** Gets the MaterialData class associated with this Material */
    getData<T extends MaterialData>(): new (...args: any[]) => T
    /** Obtains the block's hardness level (also known as "strength"). */
    getHardness(): number
    /** Deprecated. Magic value */
    getId(): number
    /** Return the namespaced identifier for this object. */
    getKey(): NamespacedKey
    /** Attempts to get the Material with the given name. */
    getMaterial(name: string): Material
    /** Attempts to get the Material with the given name. */
    getMaterial(name: string, legacyName: boolean): Material
    /** Gets the maximum durability of this material */
    getMaxDurability(): number
    /** Gets the maximum amount of this material that can be held in a stack */
    getMaxStackSize(): number
    /** Deprecated. Magic value */
    getNewData(raw: number): MaterialData
    /**   */
    hasGravity(): boolean
    /** Checks if this Material is a placable block */
    isBlock(): boolean
    /** Check if the material is a block and can burn away */
    isBurnable(): boolean
    /** Checks if this Material is edible. */
    isEdible(): boolean
    /** Check if the material is a block and can catch fire */
    isFlammable(): boolean
    /** Checks if this Material can be used as fuel in a Furnace */
    isFuel(): boolean
    /** Checks if this Material can be interacted with. */
    isInteractable(): boolean
    /** Checks if this Material is an obtainable item. */
    isItem(): boolean
    /** Deprecated.  */
    isLegacy(): boolean
    /** Check if the material is a block and completely blocks vision */
    isOccluding(): boolean
    /**   */
    isRecord(): boolean
    /** Check if the material is a block and solid (can be built upon) */
    isSolid(): boolean
    /** Deprecated. currently does not have an implementation which is welllinked to the underlying server. Contributions welcome. */
    isTransparent(): boolean
    /** Attempts to match the Material with the given name. */
    matchMaterial(name: string): Material
    /** Attempts to match the Material with the given name. */
    matchMaterial(name: string, legacyName: boolean): Material
    /** Returns the enum constant of this type with the specified name. */
    valueOf(name: string): Material
    /** Returns an array containing the constants of this enum type, inthe order they are declared. */
    values(): Material[]
}

/*
  GETTEXT
*/

interface ILocaleStrings {
    [key: string]: (string | null)[]
}

type msgarg = number | string

/**
 * Items
 */
declare module 'items'

/**
 * utils
 */

interface JSONLoc {
    x: number
    y: number
    z: number
    yaw: number
    pitch: number
    world: string
}
declare module 'utils' {
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
    function player(name: string | Player): Player
    function players(fn?: any): Player[]
    function getWorld(world: any): World
    /*************************************************************************
  ### utils.world( worldName ) function

  Returns a World object matching the given name. Returns the same object if passed a world.

  ***/
    function world(worldName: string | World): World
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
    function locationToJSON(location: Location): JSONLoc
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
    function locationToString(location: Location): string
    /*************************************************************************
  ### utils.locationFromJSON() function

  This function reconstructs an [Location][cmloc] object from
  a JSON representation. This is the counterpart to the
  `locationToJSON()` function. It takes a JSON object of the form
  returned by locationToJSON() and reconstructs and returns a bukkit
  Location object.

  ***/
    function locationFromJSON(location: JSONLoc): Location
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
    function getPlayerPos(player: Player): Location

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
    function getMousePos(player: Player)

    function worlds(): World[]
    /*************************************************************************
  ### utils.blockAt( Location ) function

  Returns the Block at the given location.

  ***/
    function blockAt(location: Location): Block
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
    )
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
    ): void
    /*************************************************************************
  ### utils.time( world ) function

  Returns the timeofday (in minecraft ticks) for the given world. This function is necessary because
  canarymod and bukkit differ in how the timeofday is calculated.

  See http://minecraft.gamepedia.com/Day-night_cycle#Conversions

  ***/
    function getTime(world: World): number
    /*************************************************************************
 ### utils.time24( world ) function

 Returns the timeofday for the given world using 24 hour notation. (number of minutes)

 See http://minecraft.gamepedia.com/Day-night_cycle#Conversions

 #### Parameters

  * world : the name of the world or world object for which you want to get time

 ***/
    function getTime24(world: World): number
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
    function players(): string[]
}

/**
 * teleport
 */

declare module 'teleport'

/**
 * inventory
 */

declare module 'inventory'

/**
 * http
 */
declare module 'http' {
    type HttpVerb = 'GET' | 'POST' | 'PUT' | 'DELETE'
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
            url: string
            method: HttpVerb
            params: { [name: string]: string | number }
        },
        callback: (responseCode: number, responseBody: string | object) => void
    ): void
}

/**
 * events
 */
// Based on lib/events-helper-bukkit

// tslint:disable

declare module 'events' {
    function blockBreak(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockBurn()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBurnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockBurn(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockCanBuild()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockCanBuildEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockCanBuildEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockCanBuild(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockDamage()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockDamage(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockDispense()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockDispenseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDispenseEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockDispense(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockExp()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockExpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExpEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockExp(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockExplode()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExplodeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockExplode(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockFade()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockFadeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFadeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockFade(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockForm()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFormEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockForm(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockFromTo()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockFromToEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFromToEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockFromTo(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockGrow()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockGrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockGrow(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockIgnite()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockIgniteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockIgniteEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockIgnite(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockMultiPlace()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockMultiPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockMultiPlaceEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockMultiPlace(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockPhysics()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPhysicsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPhysicsEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockPhysics(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockPistonExtend()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPistonExtendEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonExtendEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockPistonExtend(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockPistonRetract()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPistonRetractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonRetractEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockPistonRetract(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockPlace()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPlaceEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockPlace(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockRedstone()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockRedstoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockRedstoneEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockRedstone(callback: callbackFn, priority?: any)

    /*********************
     ### events.blockSpread()

     #### Parameters

      * callback - A function which is called whenever the [block.BlockSpreadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockSpreadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function blockSpread(callback: callbackFn, priority?: any)

    /*********************
     ### events.cauldronLevelChange()

     #### Parameters

      * callback - A function which is called whenever the [block.CauldronLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/CauldronLevelChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function cauldronLevelChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityBlockForm()

     #### Parameters

      * callback - A function which is called whenever the [block.EntityBlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/EntityBlockFormEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityBlockForm(callback: callbackFn, priority?: any)

    /*********************
     ### events.leavesDecay()

     #### Parameters

      * callback - A function which is called whenever the [block.LeavesDecayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/LeavesDecayEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function leavesDecay(callback: callbackFn, priority?: any)

    /*********************
     ### events.notePlay()

     #### Parameters

      * callback - A function which is called whenever the [block.NotePlayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/NotePlayEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function notePlay(callback: callbackFn, priority?: any)

    /*********************
     ### events.signChange()

     #### Parameters

      * callback - A function which is called whenever the [block.SignChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/SignChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function signChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.enchantItem()

     #### Parameters

      * callback - A function which is called whenever the [enchantment.EnchantItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/EnchantItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function enchantItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.prepareItemEnchant()

     #### Parameters

      * callback - A function which is called whenever the [enchantment.PrepareItemEnchantEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/PrepareItemEnchantEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function prepareItemEnchant(callback: callbackFn, priority?: any)

    /*********************
     ### events.areaEffectCloudApply()

     #### Parameters

      * callback - A function which is called whenever the [entity.AreaEffectCloudApplyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/AreaEffectCloudApplyEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function areaEffectCloudApply(callback: callbackFn, priority?: any)

    /*********************
     ### events.creatureSpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.CreatureSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreatureSpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function creatureSpawn(callback: callbackFn, priority?: any)

    /*********************
     ### events.creeperPower()

     #### Parameters

      * callback - A function which is called whenever the [entity.CreeperPowerEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreeperPowerEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function creeperPower(callback: callbackFn, priority?: any)

    /*********************
     ### events.enderDragonChangePhase()

     #### Parameters

      * callback - A function which is called whenever the [entity.EnderDragonChangePhaseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EnderDragonChangePhaseEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function enderDragonChangePhase(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityAirChange()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityAirChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityAirChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityAirChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityBreakDoor()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityBreakDoorEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreakDoorEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityBreakDoor(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityBreed()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityBreedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreedEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityBreed(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityChangeBlock()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityChangeBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityChangeBlockEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityChangeBlock(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityCombustByBlock()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCombustByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByBlockEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityCombustByBlock(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityCombustByEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCombustByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityCombustByEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityCombust()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCombustEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityCombust(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityCreatePortal()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityCreatePortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCreatePortalEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityCreatePortal(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityDamageByBlock()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDamageByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByBlockEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityDamageByBlock(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityDamageByEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDamageByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityDamageByEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityDamage()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityDamage(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityDeath()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDeathEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityDeath(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityExplode()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityExplodeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityExplode(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityInteract()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityInteractEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityInteract(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityPickupItem()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPickupItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityPickupItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityPortalEnter()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPortalEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEnterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityPortalEnter(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityPortal()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityPortal(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityPortalExit()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityPortalExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalExitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityPortalExit(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityRegainHealth()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityRegainHealthEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityRegainHealthEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityRegainHealth(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityResurrect()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityResurrectEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityResurrectEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityResurrect(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityShootBow()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityShootBowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityShootBowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityShootBow(callback: callbackFn, priority?: any)

    /*********************
     ### events.entitySpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntitySpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntitySpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entitySpawn(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityTame()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTameEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTameEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityTame(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityTarget()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTargetEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityTarget(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityTargetLivingEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTargetLivingEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetLivingEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityTargetLivingEntity(callback: callbackFn, priority?: any)
    /*********************
     ### events.entityTeleport()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTeleportEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityTeleport(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityToggleGlide()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityToggleGlideEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityToggleGlideEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityToggleGlide(callback: callbackFn, priority?: any)

    /*********************
     ### events.entityUnleash()

     #### Parameters

      * callback - A function which is called whenever the [entity.EntityUnleashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityUnleashEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function entityUnleash(callback: callbackFn, priority?: any)

    /*********************
     ### events.expBottle()

     #### Parameters

      * callback - A function which is called whenever the [entity.ExpBottleEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExpBottleEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function expBottle(callback: callbackFn, priority?: any)

    /*********************
     ### events.explosionPrime()

     #### Parameters

      * callback - A function which is called whenever the [entity.ExplosionPrimeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExplosionPrimeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function explosionPrime(callback: callbackFn, priority?: any)

    /*********************
     ### events.fireworkExplode()

     #### Parameters

      * callback - A function which is called whenever the [entity.FireworkExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FireworkExplodeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function fireworkExplode(callback: callbackFn, priority?: any)

    /*********************
     ### events.foodLevelChange()

     #### Parameters

      * callback - A function which is called whenever the [entity.FoodLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FoodLevelChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function foodLevelChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.horseJump()

     #### Parameters

      * callback - A function which is called whenever the [entity.HorseJumpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/HorseJumpEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function horseJump(callback: callbackFn, priority?: any)

    /*********************
     ### events.itemDespawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.ItemDespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemDespawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function itemDespawn(callback: callbackFn, priority?: any)

    /*********************
     ### events.itemMerge()

     #### Parameters

      * callback - A function which is called whenever the [entity.ItemMergeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemMergeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function itemMerge(callback: callbackFn, priority?: any)

    /*********************
     ### events.itemSpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.ItemSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemSpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function itemSpawn(callback: callbackFn, priority?: any)

    /*********************
     ### events.lingeringPotionSplash()

     #### Parameters

      * callback - A function which is called whenever the [entity.LingeringPotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/LingeringPotionSplashEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function lingeringPotionSplash(callback: callbackFn, priority?: any)

    /*********************
     ### events.pigZap()

     #### Parameters

      * callback - A function which is called whenever the [entity.PigZapEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PigZapEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function pigZap(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerDeath()

     #### Parameters

      * callback - A function which is called whenever the [entity.PlayerDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerDeathEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerDeath(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerLeashEntity()

     #### Parameters

      * callback - A function which is called whenever the [entity.PlayerLeashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerLeashEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerLeashEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.potionSplash()

     #### Parameters

      * callback - A function which is called whenever the [entity.PotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PotionSplashEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function potionSplash(callback: callbackFn, priority?: any)

    /*********************
     ### events.projectileHit()

     #### Parameters

      * callback - A function which is called whenever the [entity.ProjectileHitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileHitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function projectileHit(callback: callbackFn, priority?: any)

    /*********************
     ### events.projectileLaunch()

     #### Parameters

      * callback - A function which is called whenever the [entity.ProjectileLaunchEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileLaunchEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function projectileLaunch(callback: callbackFn, priority?: any)

    /*********************
     ### events.sheepDyeWool()

     #### Parameters

      * callback - A function which is called whenever the [entity.SheepDyeWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepDyeWoolEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function sheepDyeWool(callback: callbackFn, priority?: any)

    /*********************
     ### events.sheepRegrowWool()

     #### Parameters

      * callback - A function which is called whenever the [entity.SheepRegrowWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepRegrowWoolEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function sheepRegrowWool(callback: callbackFn, priority?: any)

    /*********************
     ### events.slimeSplit()

     #### Parameters

      * callback - A function which is called whenever the [entity.SlimeSplitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SlimeSplitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function slimeSplit(callback: callbackFn, priority?: any)

    /*********************
     ### events.spawnerSpawn()

     #### Parameters

      * callback - A function which is called whenever the [entity.SpawnerSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SpawnerSpawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function spawnerSpawn(callback: callbackFn, priority?: any)

    /*********************
     ### events.villagerAcquireTrade()

     #### Parameters

      * callback - A function which is called whenever the [entity.VillagerAcquireTradeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/VillagerAcquireTradeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function villagerAcquireTrade(callback: callbackFn, priority?: any)

    /*********************
     ### events.villagerReplenishTrade()

     #### Parameters

      * callback - A function which is called whenever the [entity.VillagerReplenishTradeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/VillagerReplenishTradeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function villagerReplenishTrade(callback: callbackFn, priority?: any)

    /*********************
     ### events.hangingBreakByEntity()

     #### Parameters

      * callback - A function which is called whenever the [hanging.HangingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakByEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function hangingBreakByEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.hangingBreak()

     #### Parameters

      * callback - A function which is called whenever the [hanging.HangingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function hangingBreak(callback: callbackFn, priority?: any)

    /*********************
     ### events.hangingPlace()

     #### Parameters

      * callback - A function which is called whenever the [hanging.HangingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingPlaceEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function hangingPlace(callback: callbackFn, priority?: any)

    /*********************
     ### events.brew()

     #### Parameters

      * callback - A function which is called whenever the [inventory.BrewEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function brew(callback: callbackFn, priority?: any)

    /*********************
     ### events.brewingStandFuel()

     #### Parameters

      * callback - A function which is called whenever the [inventory.BrewingStandFuelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewingStandFuelEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function brewingStandFuel(callback: callbackFn, priority?: any)

    /*********************
     ### events.craftItem()

     #### Parameters

      * callback - A function which is called whenever the [inventory.CraftItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/CraftItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function craftItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.furnaceBurn()

     #### Parameters

      * callback - A function which is called whenever the [inventory.FurnaceBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceBurnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function furnaceBurn(callback: callbackFn, priority?: any)

    /*********************
     ### events.furnaceExtract()

     #### Parameters

      * callback - A function which is called whenever the [inventory.FurnaceExtractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceExtractEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function furnaceExtract(callback: callbackFn, priority?: any)

    /*********************
     ### events.furnaceSmelt()

     #### Parameters

      * callback - A function which is called whenever the [inventory.FurnaceSmeltEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceSmeltEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function furnaceSmelt(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryClick()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryClickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryClickEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryClick(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryClose()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryCloseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCloseEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryClose(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryCreative()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryCreativeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCreativeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryCreative(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryDrag()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryDragEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryDragEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryDrag(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventory()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventory(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryMoveItem()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryMoveItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryMoveItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryMoveItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryOpen()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryOpenEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryOpenEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryOpen(callback: callbackFn, priority?: any)

    /*********************
     ### events.inventoryPickupItem()

     #### Parameters

      * callback - A function which is called whenever the [inventory.InventoryPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryPickupItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function inventoryPickupItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.prepareAnvil()

     #### Parameters

      * callback - A function which is called whenever the [inventory.PrepareAnvilEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareAnvilEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function prepareAnvil(callback: callbackFn, priority?: any)

    /*********************
     ### events.prepareItemCraft()

     #### Parameters

      * callback - A function which is called whenever the [inventory.PrepareItemCraftEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareItemCraftEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function prepareItemCraft(callback: callbackFn, priority?: any)

    /*********************
     ### events.asyncPlayerChat()

     #### Parameters

      * callback - A function which is called whenever the [player.AsyncPlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerChatEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function asyncPlayerChat(callback: callbackFn, priority?: any)

    /*********************
     ### events.asyncPlayerPreLogin()

     #### Parameters

      * callback - A function which is called whenever the [player.AsyncPlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerPreLoginEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function asyncPlayerPreLogin(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerAchievementAwarded()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerAchievementAwardedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAchievementAwardedEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerAchievementAwarded(callback: callbackFn, priority?: any)
    /*********************
     ### events.playerAdvancementDone()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerAdvancementDoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAdvancementDoneEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerAdvancementDone(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerAnimation()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerAnimationEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAnimationEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerAnimation(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerArmorStandManipulate()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerArmorStandManipulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerArmorStandManipulateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerArmorStandManipulate(callback: callbackFn, priority?: any)
    /*********************
     ### events.playerBedEnter()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBedEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedEnterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerBedEnter(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerBedLeave()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBedLeaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedLeaveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerBedLeave(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerBucketEmpty()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBucketEmptyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketEmptyEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerBucketEmpty(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerBucketFill()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerBucketFillEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketFillEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerBucketFill(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerChangedMainHand()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChangedMainHandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedMainHandEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerChangedMainHand(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerChangedWorld()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChangedWorldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedWorldEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerChangedWorld(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerChat()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerChat(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerChatTabComplete()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerChatTabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatTabCompleteEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerChatTabComplete(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerCommandPreprocess()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerCommandPreprocessEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerCommandPreprocessEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerCommandPreprocess(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerDropItem()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerDropItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerDropItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerDropItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerEditBook()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerEditBookEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEditBookEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerEditBook(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerEggThrow()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerEggThrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEggThrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerEggThrow(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerExpChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerExpChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerExpChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerExpChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerFish()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerFishEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerFishEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerFish(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerGameModeChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerGameModeChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerGameModeChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerGameModeChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerInteractAtEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerInteractAtEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractAtEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerInteractAtEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerInteractEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerInteractEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerInteractEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerInteract()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEvent.html) is fired

      * priority - optional -bi see events.on() for more information.

     ***/
    function playerInteract(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerItemBreak()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemBreakEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerItemBreak(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerItemConsume()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemConsumeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemConsumeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerItemConsume(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerItemDamage()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerItemDamage(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerItemHeld()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerItemHeldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemHeldEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerItemHeld(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerJoin()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerJoinEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerJoinEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerJoin(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerKick()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerKickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerKickEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerKick(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerLevelChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLevelChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerLevelChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerLocaleChange()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerLocaleChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLocaleChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerLocaleChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerLogin()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLoginEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerLogin(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerMove()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerMoveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerMove(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerPickupArrow()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPickupArrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupArrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerPickupArrow(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerPickupItem()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupItemEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerPickupItem(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerPortal()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPortalEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerPortal(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerPreLogin()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPreLoginEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerPreLogin(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerQuit()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerQuitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerQuitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerQuit(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerRegisterChannel()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerRegisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRegisterChannelEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerRegisterChannel(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerResourcePackStatus()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerResourcePackStatusEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerResourcePackStatusEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerResourcePackStatus(callback: callbackFn, priority?: any)
    /*********************
     ### events.playerRespawn()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerRespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRespawnEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerRespawn(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerShearEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerShearEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerShearEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerShearEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerStatisticIncrement()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerStatisticIncrementEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerStatisticIncrementEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerStatisticIncrement(callback: callbackFn, priority?: any)
    /*********************
     ### events.playerSwapHandItems()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerSwapHandItemsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerSwapHandItemsEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerSwapHandItems(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerTeleport()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerTeleportEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerTeleport(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerToggleFlight()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerToggleFlightEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleFlightEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerToggleFlight(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerToggleSneak()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerToggleSneakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSneakEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerToggleSneak(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerToggleSprint()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerToggleSprintEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSprintEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerToggleSprint(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerUnleashEntity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerUnleashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnleashEntityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerUnleashEntity(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerUnregisterChannel()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerUnregisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnregisterChannelEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerUnregisterChannel(callback: callbackFn, priority?: any)

    /*********************
     ### events.playerVelocity()

     #### Parameters

      * callback - A function which is called whenever the [player.PlayerVelocityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerVelocityEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function playerVelocity(callback: callbackFn, priority?: any)

    /*********************
     ### events.broadcastMessage()

     #### Parameters

      * callback - A function which is called whenever the [server.BroadcastMessageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/BroadcastMessageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function broadcastMessage(callback: callbackFn, priority?: any)

    /*********************
     ### events.mapInitialize()

     #### Parameters

      * callback - A function which is called whenever the [server.MapInitializeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/MapInitializeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function mapInitialize(callback: callbackFn, priority?: any)

    /*********************
     ### events.pluginDisable()

     #### Parameters

      * callback - A function which is called whenever the [server.PluginDisableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginDisableEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function pluginDisable(callback: callbackFn, priority?: any)

    /*********************
     ### events.pluginEnable()

     #### Parameters

      * callback - A function which is called whenever the [server.PluginEnableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginEnableEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function pluginEnable(callback: callbackFn, priority?: any)

    /*********************
     ### events.remoteServerCommand()

     #### Parameters

      * callback - A function which is called whenever the [server.RemoteServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/RemoteServerCommandEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function remoteServerCommand(callback: callbackFn, priority?: any)

    /*********************
     ### events.serverCommand()

     #### Parameters

      * callback - A function which is called whenever the [server.ServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerCommandEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function serverCommand(callback: callbackFn, priority?: any)

    /*********************
     ### events.serverListPing()

     #### Parameters

      * callback - A function which is called whenever the [server.ServerListPingEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerListPingEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function serverListPing(callback: callbackFn, priority?: any)

    /*********************
     ### events.serviceRegister()

     #### Parameters

      * callback - A function which is called whenever the [server.ServiceRegisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function serviceRegister(callback: callbackFn, priority?: any)

    /*********************
     ### events.serviceUnregister()

     #### Parameters

      * callback - A function which is called whenever the [server.ServiceUnregisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function serviceUnregister(callback: callbackFn, priority?: any)

    /*********************
     ### events.tabComplete()

     #### Parameters

      * callback - A function which is called whenever the [server.TabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/TabCompleteEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function tabComplete(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleBlockCollision()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleBlockCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleBlockCollisionEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleBlockCollision(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleCreate()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleCreateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleCreate(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleDamage()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDamageEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleDamage(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleDestroy()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleDestroyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDestroyEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleDestroy(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleEnter()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEnterEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleEnter(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleEntityCollision()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleEntityCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEntityCollisionEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleEntityCollision(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleExit()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleExitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleExit(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleMove()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleMoveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleMove(callback: callbackFn, priority?: any)

    /*********************
     ### events.vehicleUpdate()

     #### Parameters

      * callback - A function which is called whenever the [vehicle.VehicleUpdateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleUpdateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function vehicleUpdate(callback: callbackFn, priority?: any)

    /*********************
     ### events.lightningStrike()

     #### Parameters

      * callback - A function which is called whenever the [weather.LightningStrikeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/LightningStrikeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function lightningStrike(callback: callbackFn, priority?: any)

    /*********************
     ### events.thunderChange()

     #### Parameters

      * callback - A function which is called whenever the [weather.ThunderChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/ThunderChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function thunderChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.weatherChange()

     #### Parameters

      * callback - A function which is called whenever the [weather.WeatherChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/WeatherChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function weatherChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.chunkLoad()

     #### Parameters

      * callback - A function which is called whenever the [world.ChunkLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkLoadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function chunkLoad(callback: callbackFn, priority?: any)

    /*********************
     ### events.chunkPopulate()

     #### Parameters

      * callback - A function which is called whenever the [world.ChunkPopulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkPopulateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function chunkPopulate(callback: callbackFn, priority?: any)

    /*********************
     ### events.chunkUnload()

     #### Parameters

      * callback - A function which is called whenever the [world.ChunkUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkUnloadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function chunkUnload(callback: callbackFn, priority?: any)

    /*********************
     ### events.portalCreate()

     #### Parameters

      * callback - A function which is called whenever the [world.PortalCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/PortalCreateEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function portalCreate(callback: callbackFn, priority?: any)

    /*********************
     ### events.spawnChange()

     #### Parameters

      * callback - A function which is called whenever the [world.SpawnChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/SpawnChangeEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function spawnChange(callback: callbackFn, priority?: any)

    /*********************
     ### events.structureGrow()

     #### Parameters

      * callback - A function which is called whenever the [world.StructureGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/StructureGrowEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function structureGrow(callback: callbackFn, priority?: any)

    /*********************
     ### events.worldInit()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldInitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldInitEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function worldInit(callback: callbackFn, priority?: any)

    /*********************
     ### events.worldLoad()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldLoadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function worldLoad(callback: callbackFn, priority?: any)

    /*********************
     ### events.worldSave()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldSaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldSaveEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function worldSave(callback: callbackFn, priority?: any)

    /*********************
     ### events.worldUnload()

     #### Parameters

      * callback - A function which is called whenever the [world.WorldUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldUnloadEvent.html) is fired

      * priority - optional - see events.on() for more information.

     ***/
    function worldUnload(callback: callbackFn, priority?: any)
}

/**
 * entities
 */

declare module 'entities'

/**
 * blocks
 */
declare module 'blocks'
