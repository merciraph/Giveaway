import type { PreviousWinner } from '../models/PreviousWinner';
import winners from '../../data/winners.txt?raw';

export const ServicePreviousWinner = {
    loadPreviousWinners(): PreviousWinner[] {
        try {
            let previousWinner = winners;
            const answer: PreviousWinner[] = [];
            previousWinner.split('\n').forEach((line: string) => {
                const [year, month, winner ] = line.split(',');
                if (year && month && winner) {
                    answer.push({
                        year: year.trim(),
                        month: month.trim(),
                        winner: winner.trim()});
                }
            });
                return answer;
            } catch (error) {
                console.error("Error loading data:", error);
                return [];
        }
    },
    getPreviousWinners(): Promise<PreviousWinner[]> {
        return Promise.resolve(this.loadPreviousWinners());
    },
}