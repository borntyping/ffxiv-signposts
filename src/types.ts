type Complexity = null | "unknown" | "low" | "medium" | "high";

export interface PartialTab {
  readonly name: string;
  readonly cssClasses?: string[];
  readonly all?: boolean;
  readonly hide?: boolean;
}

export interface PartialTag extends PartialTab {
  readonly id: string;
}

export interface PartialCategory extends PartialTab {
  readonly tags?: PartialTag[];
}

export interface Signposts {
  readonly signposts: Signpost[];
}

export interface Tab extends Required<PartialTab>, Signposts {}
export interface Tag extends Required<PartialTag>, Signposts {}
export interface Category extends Required<PartialCategory>, Signposts {
  readonly tags: Tag[];
}

export class Signpost {
  readonly domain: string;
  constructor(
    readonly name: string,
    readonly link: string,
    readonly tags: Array<[string[], string]> = [],
    readonly complexity: Complexity = "unknown",
    readonly official: boolean = false
  ) {
    this.domain = new URL(this.link).hostname;
  }

  static create(object: {
    name: string;
    link: string;
    tags?: Array<[string[], string]>;
    complexity?: Complexity;
    official?: boolean;
  }): Signpost {
    return new Signpost(
      object.name,
      object.link,
      object.tags ?? [],
      object.complexity ?? null,
      object.official ?? false
    );
  }

  get allTags(): string[] {
    return [...this.tags, ...this.tags.map(([tags, _]) => tags).flat()];
  }

  toString(): string {
    return this.name;
  }

  hasAnyTag(tags: Pick<PartialTag, "id">[]): boolean {
    return tags.filter((tag) => this.hasTag(tag)).length > 0;
  }

  hasTag(tag: Pick<PartialTag, "id">): boolean {
    return this.allTags.includes(tag.id);
  }
}
