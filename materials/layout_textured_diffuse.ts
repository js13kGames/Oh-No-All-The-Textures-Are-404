export interface TexturedDiffuseLayout {
    // Uniforms
    Pv: WebGLUniformLocation;
    World: WebGLUniformLocation;
    Self: WebGLUniformLocation;
    Color: WebGLUniformLocation;
    Sampler: WebGLUniformLocation;
    TexScale: WebGLUniformLocation;
    TexOffset: WebGLUniformLocation;
    // Attributes
    VertexPosition: GLint;
    VertexTexCoord: GLint;
    VertexNormal: GLint;
}
