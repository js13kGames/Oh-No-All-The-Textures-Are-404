import {create_texture_from} from "../common/texture.js";
import {dispatch} from "./actions.js";
import {loop_start} from "./core.js";
import {Game} from "./game.js";
import {scene_title} from "./scenes/sce_title.js";

let game = new Game();

// @ts-ignore
window.$ = (...args) => dispatch(game, ...args);

// @ts-ignore
window.game = game;

let textures = document.querySelectorAll("img");
for (let i = 0; i < textures.length; i++) {
    game.Textures[textures[i].id] = create_texture_from(game.Gl, textures[i]);
}

// Skip splash for faster dev feedback.
scene_title(game);

loop_start(game);
