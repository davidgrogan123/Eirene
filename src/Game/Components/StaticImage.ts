/**
 * Identifies a renderable static image component as a named resource.
 *
 */
class StaticImage implements Component {
  constructor(imageName: string) {
    this.imageName = imageName;
  }

  readonly imageName: string;
}
