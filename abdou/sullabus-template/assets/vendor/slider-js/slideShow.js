//animation list: flip, slice, box3D, pixel, fade, glide, card

$(document).ready(function () {

    $('#slideWiz').slideWiz({
        auto: true,
        speed: 5000,
        row: 12,
        col: 35,
        animation: [
            'flip',
            'slice',
            'box3D',
           
            'fade',
            'glide',
            'card'
        ],
        file: [
            {
                src: {
                    main: "assets/image/silder/slider-2.jpg",
                    cover: "assets/image/silder/slider-1.jpg"
                },
                title: 'SCORING',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                descLength: 220,
                button: {
                    text: 'En savoir plus',
                    url: '#',
                    class: 'btn btn-medium btn-primary'
                }
            },
            {
                src: {
                    main: "assets/image/silder/slider-1.jpg",
                    cover: "assets/image/silder/slider-2.jpg"
                },
                title: 'CV RANKING',
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                button: {
                    text: 'En savoir plus',
                    url: '#',
                    class: 'btn btn-medium btn-primary'
                }
            }
        ]

    });

});
