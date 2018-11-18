
<script>
"use strict";
class ChessPiece {
    constructor(pieceColor,pieceName,piecePoint,pieceImage)   {
        this.pieceColor = pieceColor;
        this.pieceName = pieceName;
        this.piecePoint = piecePoint;
        this.pieceImage = pieceImage;
        this.initialPosition = "";
    }
};

const chessPieceColor = {
    "White": "White",
    "Black": "Black"
};

const chessPieceName = {
    "Pawn": "Pawn",
    "Rook": "Rook",
    "Knight": "Knight",
    "Bishop": "Bishop",
    "Queen": "Queen",
    "King": "King"
};

const chessPieceImage = {
    "Pawn": "PawnImg",
    "Rook": "RookImg",
    "Knight": "KnightImg",
    "Bishop": "BishopImg",
    "Queen": "QueenImg",
    "King": "KingImg"
};

let chessPieceImageCreation = function(PieceName, PieceColor) {
    return  chessPieceColor[PieceColor] + chessPieceImage[PieceName];
}
//console.log(typeof chessPieceImageCreation);

const chessPiecePoints = {
    PAWN: 1,
    ROOK: 5,
    KNIGHT: 3,
    BISHOP: 3,
    QUEEN: 9,
    KING: "Most_important"
};

const chess_File = "12345678";

const chess_Rank = "abcdefgh";

class chess_Knight extends ChessPiece {
    constructor(Color)   {
        super(Color,
            chessPieceName["Knight"],
            chessPiecePoints.KNIGHT,
            chessPieceImageCreation("Knight", Color));
    }
}

class chess_Rook extends ChessPiece {
    constructor(Color)   {
        super(Color,
            chessPieceName["Rook"],
            chessPiecePoints.ROOK,
            chessPieceImageCreation("Rook", Color));
    }
}

class chess_Bishop extends ChessPiece {
    constructor(Color)   {
        super(Color,
            chessPieceName["Bishop"],
            chessPiecePoints.BISHOP,
            chessPieceImageCreation("Bishop", Color));
    }
}

class chess_Queen extends ChessPiece {
    constructor(Color)   {
        super(Color,
            chessPieceName["Queen"],
            chessPiecePoints.QUEEN,
            chessPieceImageCreation("Queen", Color));
    }
}

class chess_King extends ChessPiece {
    constructor(Color)   {
        super(Color,
            chessPieceName["King"],
            chessPiecePoints.KING,
            chessPieceImageCreation("King", Color));
    }
}

class chess_Pawn extends ChessPiece {
    constructor(Color)   {
        super(Color,
            chessPieceName["Pawn"],
            chessPiecePoints.PAWN,
            chessPieceImageCreation("Pawn", Color));
    }
}

let createKnight = function(Color) {
    if (Color === "White") {
        let whiteKnight1 = new chess_Knight(Color);
        let whiteKnight2 = new chess_Knight(Color);
        Object.preventExtensions(whiteKnight1);
        Object.preventExtensions(whiteKnight2);
        let whiteKnightArray = [whiteKnight1, whiteKnight2];
        whiteKnightArray[0].initialPosition = chess_Rank[1] + chess_File[0];
        whiteKnightArray[1].initialPosition = chess_Rank[6] + chess_File[0];
        return whiteKnightArray;
    } else {
        let blackKnight1 = new chess_Knight(Color);
        let blackKnight2 = new chess_Knight(Color);
        Object.preventExtensions(blackKnight1);
        Object.preventExtensions(blackKnight2);
        let blackKnightArray = [blackKnight1, blackKnight2];
        blackKnightArray[0].initialPosition = chess_Rank[1] + chess_File[7];
        blackKnightArray[1].initialPosition = chess_Rank[6] + chess_File[7];
        return blackKnightArray;
    }
}

let createBishop = function(Color) {
    if (Color === "White") {
        let whiteBishop1 = new chess_Bishop(Color);
        let whiteBishop2 = new chess_Bishop(Color);
        Object.preventExtensions(whiteBishop1);
        Object.preventExtensions(whiteBishop2);
        let whiteBishopArray = [whiteBishop1, whiteBishop2];
        whiteBishopArray[0].initialPosition = chess_Rank[2] + chess_File[0];
        whiteBishopArray[1].initialPosition = chess_Rank[5] + chess_File[0];
        return whiteBishopArray;
    } else {
        let blackBishop1 = new chess_Bishop(Color);
        let blackBishop2 = new chess_Bishop(Color);
        Object.preventExtensions(blackBishop1);
        Object.preventExtensions(blackBishop2);
        let blackBishopArray = [blackBishop1, blackBishop2];
        blackBishopArray[0].initialPosition = chess_Rank[2] + chess_File[7];
        blackBishopArray[1].initialPosition = chess_Rank[5] + chess_File[7];
        return blackBishopArray;
    }
}

let createRook = function(Color) {
    if (Color === "White") {
        let whiteRook1 = new chess_Rook(Color);
        let whiteRook2 = new chess_Rook(Color);
        Object.preventExtensions(whiteRook1);
        Object.preventExtensions(whiteRook2);
        let whiteRookArray = [whiteRook1, whiteRook2];
        whiteRookArray[0].initialPosition = chess_Rank[0] + chess_File[0];
        whiteRookArray[1].initialPosition = chess_Rank[7] + chess_File[0];
        return whiteRookArray;
    }

    else {
        let blackRook1 = new chess_Rook(Color);
        let blackRook2 = new chess_Rook(Color);
        Object.preventExtensions(blackRook1);
        Object.preventExtensions(blackRook2);
        let blackRookArray = [blackRook1, blackRook2];
        blackRookArray[0].initialPosition = chess_Rank[0] + chess_File[7];
        blackRookArray[1].initialPosition = chess_Rank[7] + chess_File[7];
        return blackRookArray;
    }
}

let createPawn = function(Color) {
    if (Color === "White") {
        let whitePawnArray = new Array();
        for (let i = 0; i < 8; i++) {
            let pawn = new chess_Pawn(Color);
            pawn.initialPosition = chess_Rank[i] + chess_File[1];
            Object.preventExtensions(pawn);
            whitePawnArray.push(pawn);
        }
        return whitePawnArray;
    } else {
        let blackPawnArray = new Array();
        for (let i = 0; i < 8; i++) {
            let pawn = new chess_Pawn(Color);
            pawn.initialPosition = chess_Rank[i] + chess_File[6];
            Object.preventExtensions(pawn);
            blackPawnArray.push(pawn);
        }
        return blackPawnArray;
    }

}

let createQueen = function(Color){
    let queen = new chess_Queen(Color);
    if (Color === "White") {
        queen.initialPosition = chess_Rank[3] + chess_File[0];
    } else {
        queen.initialPosition = chess_Rank[3] + chess_File[7];
    }
    Object.preventExtensions(queen);
    return queen;
}

let createKing = function(Color){
    let king = new chess_King(Color);
    if (Color === "White") {
        king.initialPosition = chess_Rank[4] + chess_File[0];
    } else {
        king.initialPosition = chess_Rank[4] + chess_File[7];
    }
    Object.preventExtensions(king);
    return king;
}

let InitializePieces = function(Color) {
    let queen = createQueen(Color);
    let king = createKing(Color);
    let pawn = createPawn(Color);
    let rook = createRook(Color);
    let knight = createKnight(Color);
    let bishop = createBishop(Color);
    return {
        queen,
        king,
        pawn,
        rook,
        knight,
        bishop
    };
}

let createBoard = function() {
    let chessBoard = [];
    for ( let i = 0; i < 8; i++ ) {
        for ( let j = 0; j < 8; j++ ) {
            if ( i % 2 === 0 ) {
                if ( j % 2 === 0 ) {
                    chessBoard.push({
                        "color" : "black",
                        "position" : chess_Rank[j] + chess_File[i]
                    });
                } else {
                    chessBoard.push({
                        "color" : "white",
                        "position" : chess_Rank[j] + chess_File[i]
                    });
                }
            } else {
                if ( j % 2 === 1 ) {
                    chessBoard.push({
                        "color" : "black",
                        "position" : chess_Rank[j] + chess_File[i]
                    });
                } else {
                    chessBoard.push({
                        "color" : "white",
                        "position" : chess_Rank[j] + chess_File[i]
                    });
                }
            }
        }
    }

    return chessBoard;
}

let InitializeBoard = function() {
    let whitePieces = InitializePieces("White");
    let blackPieces = InitializePieces("Black");
    let chessBoard = createBoard();

    return { chessBoard,
        whitePieces,
        blackPieces };
}
console.dir(InitializeBoard());

 </script> 

