---
sidebar_position: 5
---

# Mines

Mines are randomly generated with different sizes and resources distributions.

Due to Khyron seismic activity, robots are forced to excavate a certain time inside the mine, before they get destroyed by the environment.

The mining time is usually between 3 and 5 minutes.

![Mine](/img/wiki/mine_blocks.png)

#### Mine classes

| Class | Size   |
|-------|--------|
| A     | 5 x 4  |
| B     | 6 x 5  |
| C     | 7 x 5  |
| D     | 8 x 6  |
| E     | 9 x 6  |
| F     | 10 x 7 |

#### Mine types

| Type | Composition                            |
|------|----------------------------------------|
| S    | 80% Silicon                            |
| L    | 80% Lithium                            |
| T    | 80% Titanium                           |
| N    | 33% lithium, 33% silicon, 33% titanium |

#### Resource distribution

| Rarity    | Description                             |
|-----------|-----------------------------------------|
| rare      | There are a few resources               |
| scattered | There is a balanced number of resources |
| common    | There are a lot resources               |

#### Mine blocks

|          | Soft block                                                      | Hard block                                                      |
|----------|-----------------------------------------------------------------|-----------------------------------------------------------------|
| Surface  | <img src={"/img/resources/soft_block.png"} width={"300px"}/>    | <img src={"/img/resources/hard_block.png"} width={"300px"}/>    |
| Silicon  | <img src={"/img/resources/silicon_soft.png"} width={"300px"}/>  | <img src={"/img/resources/silicon_hard.png"} width={"300px"}/>  |
| Lithium  | <img src={"/img/resources/lithium_soft.png"} width={"300px"}/>  | <img src={"/img/resources/lithium_hard.png"} width={"300px"}/>  |
| Titanium | <img src={"/img/resources/titanium_soft.png"} width={"300px"}/> | <img src={"/img/resources/titanium_hard.png"} width={"300px"}/> |

#### Environment

| Element    | Description                                                                                      |
|------------|--------------------------------------------------------------------------------------------------|
| Holes      | There are big empty holes in the mine                                                            |
| Explosives | Some blocks have materials that are causing explosions when mines and damages surrounding robots |
| Lava       | Lava can be found on some blocks and damage the mining robots                                    |

#### Power-ups

Hidden chests in the mine are located behind the blocks and the user has to double-tap to collect them.

#### Assigned mine

Have a default assigned mine that generates a few resources every 24h.