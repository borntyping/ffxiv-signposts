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

export interface Tag extends Required<PartialTag>, Signposts {}

export interface Category extends Required<PartialCategory>, Signposts {
  readonly tags: Tag[];
}

export class Signpost {
  readonly domain: string;
  constructor(
    readonly name: string,
    readonly link: string,
    readonly desc: string[] = [],
    readonly tags: string[] = [],
    readonly complexity: Complexity = "unknown"
  ) {
    this.domain = new URL(this.link).hostname;
  }

  toString(): string {
    return this.name;
  }

  hasAnyTag(tags: Pick<PartialTag, "id">[]): boolean {
    return tags.filter((tag) => this.tags.includes(tag.id)).length > 0;
  }

  hasTag(tag: Pick<PartialTag, "id">): boolean {
    return this.tags.includes(tag.id);
  }
}
