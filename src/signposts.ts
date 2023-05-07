import data from "@/assets/signposts.json";
import {Signpost} from "@/types";

export default data.map((obj) => new Signpost(obj.name, obj.link, obj.desc, obj.tags))
