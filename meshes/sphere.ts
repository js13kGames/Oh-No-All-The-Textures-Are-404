import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_sphere(gl: WebGLRenderingContext): Mesh {
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
    0, -0.5, 0,
    0.424873, -0.223607, 0.139561,
    -0.001438, -0.223607, 0.447205,
    0.424873, -0.223607, 0.139561,
    0, -0.5, 0,
    0.264028, -0.223607, -0.360949,
    0, -0.5, 0,
    -0.001438, -0.223607, 0.447205,
    -0.425767, -0.223607, 0.136826,
    0, -0.5, 0,
    -0.425767, -0.223607, 0.136826,
    -0.261694, -0.223607, -0.362644,
    0, -0.5, 0,
    -0.261694, -0.223607, -0.362644,
    0.264028, -0.223607, -0.360949,
    0.424873, -0.223607, 0.139561,
    0.264028, -0.223607, -0.360949,
    0.425767, 0.223607, -0.136826,
    -0.001438, -0.223607, 0.447205,
    0.424873, -0.223607, 0.139561,
    0.261694, 0.223607, 0.362644,
    -0.425767, -0.223607, 0.136826,
    -0.001438, -0.223607, 0.447205,
    -0.264028, 0.223607, 0.360949,
    -0.261694, -0.223607, -0.362644,
    -0.425767, -0.223607, 0.136826,
    -0.424873, 0.223607, -0.139561,
    0.264028, -0.223607, -0.360949,
    -0.261694, -0.223607, -0.362644,
    0.001438, 0.223607, -0.447205,
    0.424873, -0.223607, 0.139561,
    0.425767, 0.223607, -0.136826,
    0.261694, 0.223607, 0.362644,
    -0.001438, -0.223607, 0.447205,
    0.261694, 0.223607, 0.362644,
    -0.264028, 0.223607, 0.360949,
    -0.425767, -0.223607, 0.136826,
    -0.264028, 0.223607, 0.360949,
    -0.424873, 0.223607, -0.139561,
    -0.261694, -0.223607, -0.362644,
    -0.424873, 0.223607, -0.139561,
    0.001438, 0.223607, -0.447205,
    0.264028, -0.223607, -0.360949,
    0.001438, 0.223607, -0.447205,
    0.425767, 0.223607, -0.136826,
    0.261694, 0.223607, 0.362644,
    0.425767, 0.223607, -0.136826,
    0, 0.5, 0,
    -0.264028, 0.223607, 0.360949,
    0.261694, 0.223607, 0.362644,
    0, 0.5, 0,
    -0.424873, 0.223607, -0.139561,
    -0.264028, 0.223607, 0.360949,
    0, 0.5, 0,
    0.001438, 0.223607, -0.447205,
    -0.424873, 0.223607, -0.139561,
    0, 0.5, 0,
    0.425767, 0.223607, -0.136826,
    0.001438, 0.223607, -0.447205,
    0, 0.5, 0
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    0, -1, 0,
    0.8497, -0.4472, 0.2791,
    -0.0029, -0.4472, 0.8944,
    0.8497, -0.4472, 0.2791,
    0, -1, 0,
    0.528, -0.4472, -0.7219,
    0, -1, 0,
    -0.0029, -0.4472, 0.8944,
    -0.8515, -0.4472, 0.2736,
    0, -1, 0,
    -0.8515, -0.4472, 0.2736,
    -0.5234, -0.4472, -0.7253,
    0, -1, 0,
    -0.5234, -0.4472, -0.7253,
    0.528, -0.4472, -0.7219,
    0.8497, -0.4472, 0.2791,
    0.528, -0.4472, -0.7219,
    0.8515, 0.4472, -0.2736,
    -0.0029, -0.4472, 0.8944,
    0.8497, -0.4472, 0.2791,
    0.5234, 0.4472, 0.7253,
    -0.8515, -0.4472, 0.2736,
    -0.0029, -0.4472, 0.8944,
    -0.528, 0.4472, 0.7219,
    -0.5234, -0.4472, -0.7253,
    -0.8515, -0.4472, 0.2736,
    -0.8497, 0.4472, -0.2791,
    0.528, -0.4472, -0.7219,
    -0.5234, -0.4472, -0.7253,
    0.0029, 0.4472, -0.8944,
    0.8497, -0.4472, 0.2791,
    0.8515, 0.4472, -0.2736,
    0.5234, 0.4472, 0.7253,
    -0.0029, -0.4472, 0.8944,
    0.5234, 0.4472, 0.7253,
    -0.528, 0.4472, 0.7219,
    -0.8515, -0.4472, 0.2736,
    -0.528, 0.4472, 0.7219,
    -0.8497, 0.4472, -0.2791,
    -0.5234, -0.4472, -0.7253,
    -0.8497, 0.4472, -0.2791,
    0.0029, 0.4472, -0.8944,
    0.528, -0.4472, -0.7219,
    0.0029, 0.4472, -0.8944,
    0.8515, 0.4472, -0.2736,
    0.5234, 0.4472, 0.7253,
    0.8515, 0.4472, -0.2736,
    0, 1, 0,
    -0.528, 0.4472, 0.7219,
    0.5234, 0.4472, 0.7253,
    0, 1, 0,
    -0.8497, 0.4472, -0.2791,
    -0.528, 0.4472, 0.7219,
    0, 1, 0,
    0.0029, 0.4472, -0.8944,
    -0.8497, 0.4472, -0.2791,
    0, 1, 0,
    0.8515, 0.4472, -0.2736,
    0.0029, 0.4472, -0.8944,
    0, 1, 0
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0, 1.00001,
    0, 1.00001,
    0, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0.999999, 0,
    0.999998, 0.999997,
    0, 1.00001,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0,
    0.999999, 0,
    0, 1.00001,
    0, 0
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    59, 58, 57,
    56, 55, 54,
    53, 52, 51,
    50, 49, 48,
    47, 46, 45,
    44, 43, 42,
    41, 40, 39,
    38, 37, 36,
    35, 34, 33,
    32, 31, 30,
    29, 28, 27,
    26, 25, 24,
    23, 22, 21,
    20, 19, 18,
    17, 16, 15,
    14, 13, 12,
    11, 10, 9,
    8, 7, 6,
    5, 4, 3,
    2, 1, 0
]);