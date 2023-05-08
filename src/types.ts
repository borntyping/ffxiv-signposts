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

export interface SignpostTags {
  readonly tags: string[];
  readonly text: string;
}

export class Signpost {
  readonly domain: string;
  constructor(
    readonly name: string,
    readonly link: string,
    readonly desc: Array<SignpostTags> = [],
    readonly complexity: Complexity = "unknown",
    readonly official: boolean = false
  ) {
    this.domain = new URL(this.link).hostname;
  }

  static create(object: {
    name: string;
    link: string;
    desc?: Array<SignpostTags>;
    complexity?: Complexity;
    official?: boolean;
  }): Signpost {
    return new Signpost(
      object.name,
      object.link,
      object.desc ?? [],
      object.complexity ?? null,
      object.official ?? false
    );
  }

  get tags(): string[] {
    return this.desc.map(({ tags }) => tags).flat();
  }

  toString(): string {
    return this.name;
  }

  hasAnyTag(tags: Pick<PartialTag, "id">[]): boolean {
    return tags.filter((tag) => this.hasTag(tag)).length > 0;
  }

  hasTag(tag: Pick<PartialTag, "id">): boolean {
    return this.tags.includes(tag.id);
  }
}
