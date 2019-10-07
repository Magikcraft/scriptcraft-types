// Extend an interface with overrided methods
// https://stackoverflow.com/a/49198999
// type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } &
//     { [P in U]: never } & { [x: string]: never })[T]
// type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U

interface Player extends Overwrite<HumanEntity, IPlayer> {}

const Collectors = java.util.stream.Collectors

const world: World = self.world

const target = world
    .getLivingEntities()
    .stream()
    .filter(entity => entity.getName() == 'arst')
    .collect(Collectors.toList())

const a = target[0]
