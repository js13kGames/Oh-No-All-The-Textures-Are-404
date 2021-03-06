import {from_euler} from "../../common/quat.js";
import {collide} from "../components/com_collide.js";
import {render_textured_diffuse} from "../components/com_render_textured_diffuse.js";
import {rigid_body} from "../components/com_rigid_body.js";
import {Blueprint} from "../core.js";
import {Game, Layer} from "../game.js";

export function blueprint_palm(game: Game, textured = false): Blueprint {
    let texture = "palm";
    textured = game.UnlockedTextures.has(texture) ? true : textured;
    return {
        Using: [collide(false, Layer.Terrain, Layer.None), rigid_body(false)],
        Children: [
            {
                Translation: [0, 0.5, 0],
                Scale: [0.5, 1, 0.5],
                Rotation: from_euler([0, 0, 0, 0], -15, 0, 0),
                Using: [
                    render_textured_diffuse(
                        game.MaterialTexturedDiffuse,
                        game.MeshQuad,
                        game.Textures[textured ? texture : "404"],
                        [1, 1, 1, 1],
                        1,
                        texture
                    ),
                ],
            },
            {
                // Shadow
                Rotation: from_euler([0, 0, 0, 0], -90, 0, 0),
                Scale: [0.3, 0.1, 1],
                Translation: [0, -0.49, 0.2],
                Using: [
                    render_textured_diffuse(
                        game.MaterialTexturedDiffuse,
                        game.MeshQuad,
                        game.Textures["shadow"]
                    ),
                ],
            },
        ],
    };
}
