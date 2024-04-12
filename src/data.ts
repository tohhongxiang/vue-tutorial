export interface Page {
  pageTitle: string;
  content: string;
  published: boolean;
  link: { text: string; url: string };
}

const pagesKey = "pages";

const pagesStore = JSON.parse(localStorage.getItem(pagesKey) ?? "[]") as Page[];

export default {
  getAllPages() {
    return pagesStore;
  },
  getSinglePage(index: number) {
    return pagesStore[index];
  },
};
