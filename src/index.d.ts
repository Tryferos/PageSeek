import {ShaderMaterialProps} from '@react-three/fiber';

declare global {
  module '*.glsl' {
    const value: string;
    export default value;
  }
  interface ThreeElements {
    bookMaterial: ShaderMaterialProps;
    // * New extend types go here !
  }
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
}
