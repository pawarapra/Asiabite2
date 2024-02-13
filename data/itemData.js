export function getAllBoxs(){
    return ItemData;
}

export function getBoxById(id){

    return ItemData.find(item => item.id === id);    
}



export default ItemData = [
    {
        id:0,
        boxname: 'SweetBite Box',
        description: 'Satisfy your sweet tooth with our delightful SweetBite box! Indulge in a tempting array of candies, jellies, gums, pies, cookies, chocolates, bakery, and juices treats. A perfect box for those who crave the blissful world of sweet flavors.',
        pickImgPath: [
            require('../assets/haribo.gif'),
            require('../assets/meiji-almond.gif'),
            require('../assets/white-rabbit.gif'),
            require('../assets/choco-pie.gif'),
            require('../assets/murrang.gif'),
            require('../assets/calpico.gif'),
            require('../assets/bubble-gum.gif')
        ],
        img: require('../assets/sweet_box.png'),
        thumbimg: require('../assets/Thumbnail-sweetbite.png')
    },
    {
        id:1,
        boxname: 'SavoryBite Box',
        description: 'Immerse yourself in the delectable world of our SavoryBite box! Filled with a tantalizing array of salty and savory snacks, this box is a delight for those who savor the satisfying crunch and bold flavors of savory treats.',
        pickImgPath: [
            require('../assets/haribo.gif'),
            require('../assets/meiji-almond.gif'),
            require('../assets/white-rabbit.gif'),
            require('../assets/choco-pie.gif'),
            require('../assets/murrang.gif'),
            require('../assets/calpico.gif'),
            require('../assets/bubble-gum.gif')
        ],
        img: require('../assets/savory_box.png'),
        thumbimg: require('../assets/Thumbnail-svorybite.png')         
    },
    {
        id:2,
        boxname: 'SpiceBite Box',
        description: 'Spice up your snack time with our SpiceBite box! This box features a selection of snacks and instant noodles with a kick of spice. Perfect for those who crave the thrill of bold and spicy flavors in every bite.',
        pickImgPath: [
            require('../assets/haribo.gif'),
            require('../assets/meiji-almond.gif'),
            require('../assets/white-rabbit.gif'),
            require('../assets/choco-pie.gif'),
            require('../assets/murrang.gif'),
            require('../assets/calpico.gif'),
            require('../assets/bubble-gum.gif')
        ],
        img: require('../assets/spicy_box.png'),
        thumbimg: require('../assets/Thumbnail-spicebite.png')         
    },
    {
        id:3,
        boxname: 'HealthyBite Box',
        description: 'Nourish your cravings with our HealthyBite box! Filled with wholesome snacks like nuts, dried fruit chips, rice crackers, and gluten-free or dye-free options, this box is designed for those who prioritize health without compromising on taste.',
        pickImgPath: [
            require('../assets/haribo.gif'),
            require('../assets/meiji-almond.gif'),
            require('../assets/white-rabbit.gif'),
            require('../assets/choco-pie.gif'),
            require('../assets/murrang.gif'),
            require('../assets/calpico.gif'),
            require('../assets/bubble-gum.gif')
        ],
        img: require('../assets/healthy_box.png'),
        thumbimg: require('../assets/Thumbnail-healthybite.png')         
    },
    {
        id:4,
        boxname: 'Triple AssortedBite Box',
        description: 'Customize your snack experience with our Triple AssortedBite box! Choose three out of the four delightful flavors—Sweet, Savory, Spice, and Healthy—to create your personalized snacking adventure.',
        pickImgPath: [
            require('../assets/haribo.gif'),
            require('../assets/meiji-almond.gif'),
            require('../assets/white-rabbit.gif'),
            require('../assets/choco-pie.gif'),
            require('../assets/murrang.gif'),
            require('../assets/calpico.gif'),
            require('../assets/bubble-gum.gif')
        ],
        img: require('../assets/triple_assorted_box.png'),
        thumbimg: require('../assets/Thumbnail-triple.png')          
    },
    {
        id:5,
        boxname: 'Quad AssortedBite Box',
        description: 'Experience the best of all worlds with our Quad AssortedBite box! Enjoy a diverse mix of Sweet, Savory, Spice, and Healthy snacks, perfectly curated for those who love variety in every bite.',
        pickImgPath: [
            require('../assets/haribo.gif'),
            require('../assets/meiji-almond.gif'),
            require('../assets/white-rabbit.gif'),
            require('../assets/choco-pie.gif'),
            require('../assets/murrang.gif'),
            require('../assets/calpico.gif'),
            require('../assets/bubble-gum.gif')
        ],
        img: require('../assets/quad_assorted_box.png'),
        thumbimg: require('../assets/Thumbnail-quad.png')       
    },

];

