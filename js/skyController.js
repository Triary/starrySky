function GenerateNewStarCord()
{
    let row = Math.round(Math.random() * 20);
    let column = Math.round(Math.random() * 20);
    return [row, column];
}

function GenerateStarCount()
{
    return Math.round(Math.random() * 25);
}

let starArray = [];

function GenerateStarsInTable()
{
    let startCount = GenerateStarCount();

    for(let i = 0; i < startCount; i++)
    {
        let currentCord = GenerateNewStarCord();
        let currentCellID = '#cell_' + currentCord[0] + '_' + currentCord[1];
        starArray.push(currentCellID);

        $(currentCellID).append('<img src="' + (Math.round(Math.random() * 2)+1) + 'starImg.png" id="imgStar" alt="star">');
        $(currentCellID).children().css("rotate", Math.round(Math.random() * 100) + "deg")
    }
}
function ClearTable()
{
    starArray.forEach(element => {
        $(element).empty();
    });
}