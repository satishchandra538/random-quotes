const quotes = [
    {
        author: '-Edith Wharton',
        quote: 'There are two ways of spreading light: to be the candle or the mirror that reflects it.',
    }, {
        author: '-Margaret Mead',
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    }, {
        author: '-Bruce Lee',
        quote: 'Adapt what is useful, reject what is useless, and add what is specifically your own.'
    }, {
        author: '-Albert Einstein',
        quote: 'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.'
    }, {
        author: '-Allen Ginsberg',
        quote: 'Follow your inner moonlight; don\'t hide the madness.'
    }, {
        author: '-Henry Ford',
        quote: 'Cut your own firewood. It will heat you twice.'
    }, {
        author: '-Mark Twain',
        quote: 'Twenty years from now you you will be more disappointed by the things that you didn\'t do than by the ones you did do.So throw off the bowlines.Sail away from the safe harbor.Catch the trade winds in your sails.'
    }, {
        author: '-Colette',
        quote: 'You will do foolish things, but do them with enthusiasm.'
    }, {
        author: '-Thomas Alva Edison',
        quote: 'Opportunity is missed by people because it is dressed in overalls and looks like work.'
    },
]

const quotebtn = document.querySelector('#quotebtn');
const quoteauthor = document.querySelector('.quoteauthor');
const quote = document.querySelector('#quote');

quotebtn.addEventListener('click',display);

function display(){
    let num = Math.floor(Math.random()*quotes.length);
    console.log(num);
    quoteauthor.innerHTML = quotes[num].author;
    quote.innerHTML = quotes[num].quote;
}