import {from_euler} from "../../common/quat.js";
import {float, set_seed} from "../../common/random.js";
import {blueprint_box} from "../blueprints/blu_box.js";
import {blueprint_camera_follow} from "../blueprints/blu_camera_follow.js";
import {blueprint_ground} from "../blueprints/blu_ground.js";
import {control_rotate} from "../components/com_control_rotate.js";
import {light_directional} from "../components/com_light.js";
import {move} from "../components/com_move.js";
import {named} from "../components/com_named.js";
import {render_textured_diffuse} from "../components/com_render_textured_diffuse.js";
import {instantiate} from "../core.js";
import {Game} from "../game.js";
import {World} from "../world.js";

export function scene_title(game: Game) {
    game.CurrentScene = scene_title;
    game.World = new World();
    game.Cameras = [];
    game.MapSize = 11;

    set_seed(Date.now());

    // Ground with holes.
    for (let z = 0; z < game.MapSize; z++) {
        for (let x = 0; x < game.MapSize; x++) {
            let ground = blueprint_ground(game);
            if (x === 0 || z === 0 || x === game.MapSize - 1 || z === game.MapSize - 1) {
                instantiate(game, {
                    Translation: [x - game.MapSize / 2 + 0.5, 0, z - game.MapSize / 2 + 0.5],
                    ...ground,
                });
                ground.Using?.push(
                    render_textured_diffuse(
                        game.MaterialTexturedDiffuse,
                        game.MeshCube,
                        game.Textures["404"]
                    )
                );
                instantiate(game, {
                    Translation: [x - game.MapSize / 2 + 0.5, 1, z - game.MapSize / 2 + 0.5],
                    ...ground,
                });
            } else if (Math.random() < 0.05) {
                // Lava
                instantiate(game, {
                    Translation: [x - game.MapSize / 2 + 0.5, -1, z - game.MapSize / 2 + 0.5],
                    ...blueprint_ground(game),
                });
            } else {
                instantiate(game, {
                    Translation: [x - game.MapSize / 2 + 0.5, 0, z - game.MapSize / 2 + 0.5],
                    ...blueprint_ground(game),
                });
            }
        }
    }

    // Directional light.
    instantiate(game, {
        Translation: [1, 1, -1],
        Using: [light_directional([1, 1, 1], 0.8)],
    });
    instantiate(game, {
        Translation: [1, 1, 1],
        Using: [light_directional([1, 1, 1], 0.5)],
    });

    // Camera Anchor
    instantiate(game, {
        Translation: [0, 5, 0],
        Rotation: [0, 1, 0, 0],
        Using: [named("camera anchor"), control_rotate(), move(0, 0.1)],
    });

    // Main Camera.
    instantiate(game, {
        ...blueprint_camera_follow(game),
        Translation: [float(-20, 20), float(10, 20), float(10, 20)],
        Rotation: from_euler([0, 0, 0, 0], 0, float(-135, -225), 0),
    });

    // Boxes.
    instantiate(game, {
        ...blueprint_box(game),
        Translation: [2, 10, 2],
    });

    instantiate(game, {
        ...blueprint_box(game),
        Translation: [-2, 20, 0],
    });
}