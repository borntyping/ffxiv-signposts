export class Tag {
  readonly id: string;
  readonly name: string;
  readonly cssClasses: string[];

  constructor(id: string, name: string, cssClasses: string[] = ["is-light"]) {
    this.id = id,
    this.name = name;
    this.cssClasses = cssClasses;
  }
}

export class Signpost {
  readonly name: string;
  readonly link: string;

  readonly domain: string;
  readonly desc: string;
  readonly tags: Tag[];


  constructor(obj: {
    name: string;
    desc: string;
    link: string;
    tags: Tag[];
  }) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.link = obj.link;
    this.tags = obj.tags;

    this.domain = new URL(this.link).hostname;
  }
}
