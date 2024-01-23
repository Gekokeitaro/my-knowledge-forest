import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TendingWidget(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({

      folderClickBehavior: "link",
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.children.length > b.children.length ? -1 : 1;
        }
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
      mapFn: (node) => {

        const CONTENT = "content/";
        const MD = ".md";

        if (node.name !== "") return;

        const rootNodes: FileNode[] = [];

        node.children.forEach(child => {

          if (!child.file || !child.file.filePath) return;

          let parent: FileNode | undefined = undefined;
          let childDepth = child.file.filePath.split('/').pop()?.split('.').slice(0, -1);

          if (typeof childDepth !== "undefined" && childDepth.length > 1) {

            child.depth = childDepth.length;

            while (childDepth.length > 1) {

              childDepth.pop();
              const parentPath = CONTENT + childDepth.join('.') + MD;
              parent = node.children.find((parent) => {
                return parent.file && parent.file.filePath === parentPath;
              });

              if (typeof parent !== "undefined") {
                parent.children.push(child);
                return;
              }
            }
          }

          if (!parent) rootNodes.push(child);
        })

        node.children = rootNodes;
      }
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
