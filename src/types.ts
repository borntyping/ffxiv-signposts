export class Tag {
  constructor(
    readonly id: string,
    readonly name: string,
  ) {}
}

export class Category {
  constructor(
    readonly name: string,
    readonly tags: Tag[],
    readonly cssClasses: string[] = [],
    readonly display: boolean = true,
    readonly all: boolean = false,
  ) {}
}

export class Signpost {
  readonly domain: string;
  constructor(
    readonly name: string,
    readonly link: string,
    readonly desc: string,
    readonly tags: string[]
  ) {
    this.domain = new URL(this.link).hostname;
  }

  hasAnyTag(tags: Tag[]): boolean {
    return tags.filter((tag) => this.tags.includes(tag.id)).length > 0;
  }

  hasTag(tag: Tag): boolean {
    return this.tags.includes(tag.id);
  }
}
