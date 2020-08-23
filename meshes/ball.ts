import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_ball(gl: WebGLRenderingContext): Mesh {
    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    return {
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        TexCoordBuffer: texcoord_buf,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    0, 0.353553, -0.353553,
    0, 0.5, 0,
    0.306186, 0.353553, -0.176777,
    0, -0.5, 0,
    0, -0.353553, -0.353553,
    0.306186, -0.353553, -0.176777,
    0, 0, -0.5,
    0.433013, 0, -0.25,
    0, -0.5, 0,
    0.306186, -0.353553, -0.176777,
    0.306186, -0.353553, 0.176777,
    0.306186, 0.353553, 0.176777,
    0.433013, 0, 0.25,
    0.306186, 0.353553, -0.176777,
    0, 0.5, 0,
    0, -0.5, 0,
    0.306186, -0.353553, 0.176777,
    0, -0.353553, 0.353553,
    0, 0.353553, 0.353553,
    0, 0, 0.5,
    0, 0.5, 0,
    0, 0.5, 0,
    -0.306186, 0.353553, 0.176777,
    0, -0.5, 0,
    0, -0.353553, 0.353553,
    -0.306186, -0.353553, 0.176777,
    -0.433013, 0, 0.25,
    -0.306186, -0.353553, 0.176777,
    -0.433013, 0, 0.25,
    -0.433013, 0, -0.25,
    -0.306186, -0.353553, -0.176777,
    -0.306186, 0.353553, 0.176777,
    0, 0.5, 0,
    -0.306186, 0.353553, -0.176777,
    0, -0.5, 0,
    -0.306186, 0.353553, 0.176777,
    -0.306186, 0.353553, -0.176777,
    0, 0.5, 0,
    0, 0.353553, -0.353553,
    0, -0.5, 0,
    0, -0.353553, -0.353553
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0, 0.6503, -0.7597,
    0, 1, 0,
    0.6579, 0.6503, -0.3798,
    0, -1, 0,
    0, -0.6503, -0.7597,
    0.6579, -0.6503, -0.3798,
    0, 0, -1,
    0.866, 0, -0.5,
    0, -1, 0,
    0.6579, -0.6503, -0.3798,
    0.6579, -0.6503, 0.3798,
    0.6579, 0.6503, 0.3798,
    0.866, 0, 0.5,
    0.6579, 0.6503, -0.3798,
    0, 1, 0,
    0, -1, 0,
    0.6579, -0.6503, 0.3798,
    0, -0.6503, 0.7597,
    0, 0.6503, 0.7597,
    0, 0, 1,
    0, 1, 0,
    0, 1, 0,
    -0.6579, 0.6503, 0.3798,
    0, -1, 0,
    0, -0.6503, 0.7597,
    -0.6579, -0.6503, 0.3798,
    -0.866, 0, 0.5,
    -0.6579, -0.6503, 0.3798,
    -0.866, 0, 0.5,
    -0.866, 0, -0.5,
    -0.6579, -0.6503, -0.3798,
    -0.6579, 0.6503, 0.3798,
    0, 1, 0,
    -0.6579, 0.6503, -0.3798,
    0, -1, 0,
    -0.6579, 0.6503, 0.3798,
    -0.6579, 0.6503, -0.3798,
    0, 1, 0,
    0, 0.6503, -0.7597,
    0, -1, 0,
    0, -0.6503, -0.7597
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.666667, 0.75,
    0.583333, 1,
    0.5, 0.75,
    0.583333, 0,
    0.666667, 0.25,
    0.5, 0.25,
    0.666667, 0.5,
    0.5, 0.5,
    0.416667, 0,
    0.5, 0.25,
    0.333333, 0.25,
    0.333333, 0.75,
    0.333333, 0.5,
    0.5, 0.75,
    0.416667, 1,
    0.25, 0,
    0.333333, 0.25,
    0.166667, 0.25,
    0.166667, 0.75,
    0.166667, 0.5,
    0.25, 1,
    0.083333, 1,
    0, 0.75,
    0.083333, 0,
    0.166667, 0.25,
    0, 0.25,
    0, 0.5,
    1, 0.25,
    1, 0.5,
    0.833333, 0.5,
    0.833333, 0.25,
    1, 0.75,
    0.916667, 1,
    0.833333, 0.75,
    0.916667, 0,
    1, 0.75,
    0.833333, 0.75,
    0.75, 1,
    0.666667, 0.75,
    0.75, 0,
    0.666667, 0.25
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    38, 37, 36,
    17, 16, 15,
    25, 24, 23,
    25, 26, 24,
    22, 21, 18,
    26, 19, 24,
    26, 22, 19,
    22, 18, 19,
    17, 19, 16,
    10, 9, 8,
    19, 12, 16,
    19, 18, 12,
    10, 12, 9,
    18, 20, 11,
    18, 11, 12,
    11, 14, 13,
    12, 7, 9,
    12, 11, 7,
    5, 7, 4,
    5, 4, 3,
    40, 30, 39,
    30, 27, 34,
    33, 35, 28,
    33, 32, 31,
    29, 33, 28,
    30, 29, 27,
    29, 28, 27,
    4, 6, 30,
    6, 29, 30,
    7, 6, 4,
    11, 2, 7,
    7, 2, 6,
    6, 0, 29,
    0, 33, 29,
    2, 0, 6,
    2, 1, 0
]);