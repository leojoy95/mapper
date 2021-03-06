import { Constructible, Mapping } from '../types';

/**
 * Internal MappingStorage class
 * @private
 */
export class MappingStorage {
  private mappings: WeakMap<Constructible, WeakMap<Constructible, Mapping>>;

  constructor() {
    this.mappings = new WeakMap<
      Constructible,
      WeakMap<Constructible, Mapping>
    >();
  }

  set(
    source: Constructible,
    destination: Constructible,
    mapping: Mapping
  ): void {
    if (!this.mappings.has(source)) {
      this.mappings.set(
        source,
        new WeakMap<Constructible, Mapping>().set(destination, mapping)
      );
      return;
    }

    if (!this.has(source, destination)) {
      this.mappings.get(source)?.set(destination, mapping);
    }
  }

  get(source: Constructible, destination: Constructible): Mapping | undefined {
    return this.mappings.get(source)?.get(destination);
  }

  has(source: Constructible, destination: Constructible): boolean {
    return this.mappings.get(source)?.has(destination) || false;
  }

  dispose(): void {
    this.mappings = new WeakMap<
      Constructible,
      WeakMap<Constructible, Mapping>
    >();
  }
}
