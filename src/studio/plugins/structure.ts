import {structureTool} from "sanity/structure";
import type {ListItemBuilder, StructureBuilder} from "sanity/structure";
import {RiPagesLine, RiUserSmileLine, RiArticleLine, RiSettings5Line} from "react-icons/ri";

const singleton = (S: StructureBuilder, id: string, title: string): ListItemBuilder =>
  S.listItem().id(id).title(title).child(S.editor().id(id).schemaType(id).documentId(id));

export const structure = structureTool({
  structure: (S) =>
    S.list()
      .title("Content")
      .items([
        singleton(S, "siteSettings", "Site Settings").icon(RiSettings5Line),
        S.divider(),
        S.documentTypeListItem("page").title("Pages").icon(RiPagesLine),
        S.divider(),
        S.documentTypeListItem("post").title("Posts").icon(RiArticleLine),
        S.divider(),
        S.documentTypeListItem("person").title("People").icon(RiUserSmileLine),
      ]),
});
