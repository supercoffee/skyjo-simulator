export declare enum Actions {
    Draw = 0,
    Swap = 1,
    Discard = 2,
    Flip = 3
}
export type CardValue = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GameBoardCard = '?' | CardValue;
export type GameBoardColumn = [GameBoardCard, GameBoardCard, GameBoardCard];
export interface GameBoard {
    columns: [GameBoardColumn, GameBoardColumn, GameBoardColumn, GameBoardColumn];
}
export interface GameState {
    boards: GameBoard[];
    drawPile: [];
    discardPile: [];
}
