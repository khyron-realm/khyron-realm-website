---
sidebar_position: 3
---

# Spaceship

## Modules

| Module                | Type     | Description                                                               | Number |
|-----------------------|----------|---------------------------------------------------------------------------|--------|
| **Main Core**         | Core     | The main core of the starship contains the intelligence and in enforced   | 1      |
| **Robot factory**     | Core     | Build new robots with the resources from the planet                       | 4      |
| **Robot storage**     | Core     | Store robots in cryo-pods to protect them from the environment            | 4      |
| **Pressing machine**  | Core     | Converts resources to energy                                              | 5      |
| **Resource deposit**  | Core     | Store resources in a specially designed deposit to prevent damage         | 3      |
| **Power plant**       | Core     | Generate energy periodically from the sun and the earth movement          | 4      |
| **Energy power wall** | Core     | Store energy into surge protected power walls                             | 3      |
| **Robot research**    | Optional | Upgrade robot manufacturing process to improve the performance            | 1      |
| **Scrap-yard**        | Optional | Salvage and repairs some robots using the parts from the destroyed robots | 1      |

---

## Robots

| Class           | Name                   | Description                                                                                         | Image                               |
|-----------------|------------------------|-----------------------------------------------------------------------------------------------------|-------------------------------------|
| **Miners**      | **Worker**             | Mines randomly in a given area and needs vision to extract minerals.                                | ![Worker](/img/robots/worker.png)   |
|                 | **Crusher**            | Moves slowly, simultaneously breaks all blocks in a given radius and collects the resources.        | ![Crusher](/img/robots/crusher.png) |
|                 | **Reaper**             | Detonates itself after 5 seconds, destroys everything on its radius. 50% of resources are gathered. |                                     |
|                 | **Breaker**            | Has a large lifespan and slow speed and mines 3 blocks at a time.                                   |                                     |
|                 |                        |                                                                                                     |                                     |
| **Specialists** | **Silicon finder**     | Mine only silicon and can find multiple resources on a block. It blows when destroyed.              |                                     |
|                 | **Lithium discoverer** | Mine only lithium and can find multiple resources on a block. It blows when destroyed.              |                                     |
|                 | **Titanium expert**    | Mine only titanium and can find multiple resources on a block. It blows when destroyed.             |                                     |
|                 |                        |                                                                                                     |                                     |
| **Support**     | **Probe**              | Does not move and increases the number of resources found by other robots.                          | ![Probe](/img/robots/probe.png)     |
|                 | **Engineer**           | Repairs all the robots on its radius.                                                               |                                     |

---

## Specifications

| Stage            | Characteristic           | value               |
|------------------|--------------------------|---------------------|
| **Spaceship**    | Height                   | 120 m / 394 ft      |
|                  | Diameter                 | 9 m / 30 ft         |
|                  | Payload to orbit         | 100+ t / 220+ klb   |
|                  |                          |                     |
| **First stage**  | Height                   | 70 m / 230 ft       |
|                  | Diameter                 | 9 m / 30 ft         |
|                  | Propellant capacity      | 3400 t / 6.8 Mlb    |
|                  | Thrust                   | 72 MN / 16 Mlbf     |
|                  | Engines                  | 6x TraTium engine   |
|                  |                          |                     |
| **Second stage** | Height                   | 50 m / 160 ft       |
|                  | Diameter                 | 9 m / 30 ft         |
|                  | Propellant capacity      | 1200 t / 2.6 Mlb    |
|                  | Payload capacity         | 100+ t / 220+ klb   |
|                  | Engines                  | 30x TraTium engine  |
|                  |                          |                     |
| **Payload**      | Payload volume height    | 18 m / 59 ft        |
|                  | Payload fairing diameter | 9 m / 30 ft         |
|                  | Payload volume           | 1100 m3 / 38800 ft3 |
|                  | Useful mass              | 100+ t / 220+ klb   |
