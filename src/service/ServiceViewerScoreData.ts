import type { ViewerScore } from "../models/ViewerScore";
import data from '../../data/test.csv?raw';

export const ServiceViewerScoreData = {
     loadViewerScoreData(): ViewerScore[] {
        try {
            const answer: ViewerScore[] = [];
            let response = data;
            response.split('\n').forEach((line: string) => {
                const [username, score ] = line.split(',');
                if (username && score) {
                    answer.push({
                        username: username.trim(),
                        score: score.trim()});
                }
            }
            );
            return answer;
        } catch (error) {
            console.error("Error loading data:", error);
            return [];
        }
    }
}