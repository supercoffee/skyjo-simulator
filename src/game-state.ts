export enum Actions {
    Draw,
    Swap,
    Discard,
    Flip,
}

// export type CardValue =
//   | -2
//   | -1
//   | 0
//   | 1
//   | 2
//   | 3
//   | 4
//   | 5
//   | 6
//   | 7
//   | 8
//   | 9
//   | 10
//   | 11
//   | 12;

export enum CardValue {
    MinusTwo = -2,
    MinusOne = -1,
    Zero = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12,
}

export type GameBoardCard = '?' | CardValue;

export type GameBoardColumn = [GameBoardCard, GameBoardCard, GameBoardCard];
export interface GameBoard {
    columns: [
        GameBoardColumn,
        GameBoardColumn,
        GameBoardColumn,
        GameBoardColumn,
    ];
}

export interface GameState {
    boards: GameBoard[];
    drawPile: [];
    discardPile: [];
}

export function cardDistribution(value: CardValue): number {
    switch (value) {
        case CardValue.MinusTwo:
            return 5;
        case CardValue.Zero:
            return 15;
    }
    return 10;
}

export function deck() {
    const cards: CardValue[] = [];
    for (let value = -2; value <= 12; value++) {
        const count = cardDistribution(value);
        cards.push(...Array(count).fill(value));
    }
    return cards
        .map(value => {
            return {
                value,
                order: Math.random(),
            };
        })
        .sort((a, b) => a.order - b.order)
        .map(item => item.value);
}
