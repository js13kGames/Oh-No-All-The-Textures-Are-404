import {create, ortho, perspective} from "../../common/mat4.js";
import {Mat4, Vec4} from "../../common/math.js";
import {
    GL_COLOR_ATTACHMENT0,
    GL_DEPTH_ATTACHMENT,
    GL_FRAMEBUFFER,
    GL_RENDERBUFFER,
    GL_TEXTURE_2D,
} from "../../common/webgl.js";
import {Entity, Game} from "../game.js";
import {Has} from "../world.js";

export interface CameraFramebuffer {
    Target: WebGLFramebuffer;
    RenderTexture: WebGLTexture;
    DepthBuffer: WebGLRenderbuffer;
    FovY: number;
    Near: number;
    Far: number;
    Projection: Mat4;
    Pv: Mat4;
    ClearColor: Vec4;
}

export function camera_framebuffer_perspective(
    fovy: number,
    near: number,
    far: number,
    render_texture: WebGLTexture,
    depth_buffer: WebGLRenderbuffer,
    clear_color: Vec4
) {
    return (game: Game, entity: Entity) => {
        let projection = create();
        perspective(projection, fovy, 1, near, far);

        let target = game.Gl.createFramebuffer()!;
        game.Gl.bindFramebuffer(GL_FRAMEBUFFER, target);
        game.Gl.framebufferTexture2D(
            GL_FRAMEBUFFER,
            GL_COLOR_ATTACHMENT0,
            GL_TEXTURE_2D,
            render_texture,
            0
        );
        game.Gl.framebufferRenderbuffer(
            GL_FRAMEBUFFER,
            GL_DEPTH_ATTACHMENT,
            GL_RENDERBUFFER,
            depth_buffer
        );
        game.World.Signature[entity] |= Has.Camera;
        game.World.Camera[entity] = {
            Target: target,
            RenderTexture: render_texture,
            DepthBuffer: depth_buffer,
            FovY: fovy,
            Near: near,
            Far: far,
            Projection: projection,
            Pv: create(),
            ClearColor: clear_color,
        };
    };
}

export function camera_framebuffer_ortho(
    fovy: number,
    near: number,
    far: number,
    render_texture: WebGLTexture,
    depth_buffer: WebGLRenderbuffer,
    clear_color: Vec4
) {
    return (game: Game, entity: Entity) => {
        let projection = create();
        ortho(projection, fovy, fovy, -fovy, -fovy, near, far);

        let target = game.Gl.createFramebuffer()!;
        game.Gl.bindFramebuffer(GL_FRAMEBUFFER, target);
        game.Gl.framebufferTexture2D(
            GL_FRAMEBUFFER,
            GL_COLOR_ATTACHMENT0,
            GL_TEXTURE_2D,
            render_texture,
            0
        );
        game.Gl.framebufferRenderbuffer(
            GL_FRAMEBUFFER,
            GL_DEPTH_ATTACHMENT,
            GL_RENDERBUFFER,
            depth_buffer
        );
        game.World.Signature[entity] |= Has.Camera;
        game.World.Camera[entity] = {
            Target: target,
            RenderTexture: render_texture,
            DepthBuffer: depth_buffer,
            FovY: fovy,
            Near: near,
            Far: far,
            Projection: projection,
            Pv: create(),
            ClearColor: clear_color,
        };
    };
}
