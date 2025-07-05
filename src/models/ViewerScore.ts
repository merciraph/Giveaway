export type ViewerScore = {
    username: string;
    score: string;
};

export type ViewerScoreWithRank = ViewerScore & {
    id: number;
    rank: number;
};
