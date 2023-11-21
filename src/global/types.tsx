export type PinnedItem = {
  node: {
    name: string;
    description: string | null;
    forkCount: number;
    stargazers: {
      totalCount: number;
    };
    url: string;
    id: string;
    diskUsage: number;
    primaryLanguage: {
      name: string;
      color: string;
    };
  };
}

export type PinnedItems = {
  totalCount: number;
  edges: PinnedItem[];
}

type User = {
  name: string;
  bio: string;
  avatarUrl: string;
  location: string;
  pinnedItems: PinnedItems;
}

export type Data = {
  user: User;
}

export type JsonResponse = {
  data: Data;
}