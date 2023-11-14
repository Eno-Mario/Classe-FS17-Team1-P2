/* -----------------------
    FASE DI PREPARAZIONE
-------------------------- */

const cardContainer = document.querySelector(".container-store-card");

const cardData = [
  {
    title: "Calendario dell’Avvento 2023 LEGO® Star Wars",
    price: 37.99,
    rating: 4.0,
    pieces: 320,
    age: 6,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt8345f6a8fc46d84b/75366_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltff8d93722741aaec/75366.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/bltc80782a9abb9d13e/75366_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/bltf7f8b2ce7961b9de/75366_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt6a6a2202ddc3c309/75366_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },

  {
    title: "Titanic LEGO®",
    price: 679.99,
    rating: 4.6,
    pieces: 9090,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltb94632aeb971eb91/10294.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt4970f39471f38330/10294_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt106cc94abfc29747/10294_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blte2a2360888017d69/10294_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt31ad7a24060bc1f8/10294_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt26b206b09edcbc0b/10294_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltbb9bc2c8fa5f5f3a/10294_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt3c7bc7c49bce90d9/10294_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Baita alpina",
    price: 99.99,
    rating: 4.7,
    pieces: 1517,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt2069f4aa0d3bb63a/10325.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt476547efc6c46393/10325_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt293729cad317017b/10325_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt0b1d21d210bb34e6/10325_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltda6a600fc3e6ff2c/10325_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt5ffbad599e42d9cb/10325_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt3cffc4a5936374fb/10325_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt984515879600d5fc/10325_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Mamma ho perso l'aereo LEGO® Ideas",
    price: 299.99,
    rating: 4.8,
    pieces: 3955,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt9c69d4a46c794509/21330_box1.jpg?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt758788523f96138b/21330_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt33395590760cfb8e/21330_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltda8c79f512f688ff/21330_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/bltb5a663dd115605cd/21330_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltdefeaac575b10c65/21330_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/bltcdee6511375f7f15/21330_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Volo su Londra di Peter Pan e Wendy",
    price: 64.99,
    rating: 4.7,
    pieces: 466,
    age: 10,
    img1: "https://www.lego.com/cdn/cs/set/assets/blta9cf728f7ec432e6/43232.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltd196340d0f239d16/43232_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt7470bafd19a26ad7/43232_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt28b53285cec055b5/43232_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt0fba5cb10b7c05e7/43232_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blta443e6700dcc6c6a/43232_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt16000198565a6af7/43232_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/bltaa12293981b53677/43232_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Villaggio vichingo",
    price: 139.99,
    rating: 5.0,
    pieces: 2103,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt331198c8f34e2d7a/21343.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt0f02b0cd97117394/21343_alt1.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img3: "https://www.lego.com/cdn/cs/set/assets/bltd3734359d5eaab89/21343_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt39fec5119b34b029/21343_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blteac6c44051894a87/21343_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt9232ddd20240d8ed/21343_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltf4871e3d6901ce02/21343_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt662498e776508601/21343_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Icone dei cattivi Disney",
    price: 139.99,
    rating: 4.9,
    pieces: 1540,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltb0a3100b328dfcb0/43227.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt4d1db96a8eaf5e22/43227_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt6a7e870aa27d422f/43227_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt86086006bff28b1b/43227_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt0213500d9432584a/43227_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/bltb7a7ad4615afb413/43227_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt5a7b7f84207ed58a/43227_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/bltf9cf8b13ab4df635/43227_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Ghost e Phantom II",
    price: 169.99,
    rating: 4.6,
    pieces: 1394,
    age: 10,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt743223623ed6a485/75357.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltd1ab1e6e34719af9/75357_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt6871fb6aeaad8cea/75357_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt95e25d64852971b6/75357_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt0e5b86677e5c34ab/75357_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blte1cf2aad7573af90/75357_alt9.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt20a751b605c83b38/75357_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt36d8729132a568ad/75357_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Giardino botanico",
    price: 84.99,
    rating: 5.0,
    pieces: 1072,
    age: 12,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt58d360250a7d0739/41757.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt2b1afe8e4740e27a/41757_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt89e882f601678843/41757_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt85099645adc501e3/41757_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt3c09b87e14d8a67a/41757_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt69a6984faf4c97d1/41757_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltbbc4e0e01aed3b29/41757_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt4e49e8b73e53cbfa/41757_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Colosseo",
    price: 549.99,
    rating: 4.8,
    pieces: 9036,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt7c4044f7aa529af3/10276_alt2.jpg?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt26cc4dd7f5cf656e/10276_alt1.jpg?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt5040546f8d1c4614/10276_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blte647fb88e2bb38a8/10276_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt8008b5e0e006456f/10276_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt01997186cd4a3b00/10276_alt6.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt18442ec27e84b3bf/10276_alt7.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt61eba9a1c5d85895/10276_alt20.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Incrociatore d'attacco della Repubblica classe Venator",
    price: 649.99,
    rating: 4.7,
    pieces: 5374,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt06c6593d8e8d1c13/75367.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt266b40dfb46ff5de/75367_alt1.png?format=webply&fit=bounds&quality=70&width=640&height=640&dpr=1.5",
    img3: "https://www.lego.com/cdn/cs/set/assets/bltcfe4c209d7b5b7d2/75367_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blta6d35cf64688bd7e/75367_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltb2ff00084c4d3cd7/75367_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt27eb167889485630/75367_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt2128bb47bc840972/75367_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/bltcd81a6934554cb94/75367_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Minifigure LEGO® a grandezza naturale",
    price: 49.99,
    rating: 5.0,
    pieces: 654,
    age: 10,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt742e8599eb5e8931/40649.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt78b39f5757ec88eb/40649_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt0d2ef6fe545c3593/40649_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/bltccebe33614fe17e1/40649_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt1081a8ad4ef0e935/40649_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt0c23adbc9d96a693/40649_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",

  },
  {
    title: "Concorde",
    price: 199.99,
    rating: 4.9,
    pieces: 2083,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltdc7097183ba14c89/10318.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltd56ac1c273e08f9f/10318_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/bltfb105dece8087036/10318_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt80185e5c2d763534/10318_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltc368de600d3a8e3e/10318_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt8833c7dec6caac85/10318_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltfef4e2596c70f6ba/10318_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt8787c9d7d348f41c/10318_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Stazione di Polizia",
    price: 99.99,
    rating: 4.8,
    pieces: 811,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt22867b1f8fba50b3/10278_Prod.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt9f8f222b4d6ddf9b/10278_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt9cb3c82fe7c9edda/10278_alt2.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4 : "https://www.lego.com/cdn/cs/set/assets/bltf3813c12f623b335/10278_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltfb27bf8272014d75/10278_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blta351bc0ea28e0103/10278_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blte3cea45d1d5b6091/10278_alt6.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8:"https://www.lego.com/cdn/cs/set/assets/bltd329aa3485c8d454/10278_alt7.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",

  },
  {
    title: "IL SIGNORE DEGLI ANELLI: GRAN BURRONE",
    price: 499.99,
    rating: 4.8,
    pieces: 6167,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltec012c948c003fba/10316_alt16.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt33d693d46b4b5858/10316_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1s",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt0a0c82506f8bd960/10316.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/bltf60debbc5b62ec15/10316_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltf6c63e58e6201b11/10316_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt7cda2452018985c3/10316_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltd90e31a939a87d8e/10316_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blta9a57450a2f6820c/10316_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Fortezza di Eldorado",
    price: 214.99,
    rating: 4.5,
    pieces: 2509,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltde348ae9bd9b3de2/10320.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltbd0d2797d43ad684/10320_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt1909ea1188745ab8/10320_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/bltb92a0205d6c58747/10320_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt176bdc3fa37a39a3/10320_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt2caec37ddfd56167/10320_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltc5923c0f14725c70/10320_alt10.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt77e7f44388885031/10320_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Banca dei Maghi Gringott™ – Edizione del Collezionista",
    price: 429.99,
    rating: 4.8,
    pieces: 4803,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltfbd377eafb67041a/76417.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt3db77dbc731f5eeb/76417_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt5ea33eb6eb515925/76417_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt8b282234ad44638e/76417_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltb06c34f4bda992f4/76417_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/bltb0fd43c41129ac09/76417_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/bltfc8f664168673602/76417_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt80ec055086a3919e/76417_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "Castello e parco di Hogwarts™",
    price: 169.99,
    rating: 4.6,
    pieces: 2660,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt5a988358a6267b58/76419_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt5b733a63c312a4bf/76419_alt4.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt784b4fd602b82f77/76419_alt5.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltba664ed2c46ac574/76419_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt82938990cc9e4385/76419_alt7.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt4046fec53a66c3ab/76419_alt8.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/bltdca84860ceac737c/76419_alt9.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "La visita di Babbo Natale",
    price: 99.99,
    rating: 4.8,
    pieces: 1445,
    age: 18,
    img1: "https://www.lego.com/cdn/cs/set/assets/bltb148945c2bb2f149/10293.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/blt00f50f1154bdd4a9/10293_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt59ebc420cdbc4ed8/10293_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/blt06d96795199f4be3/10293_alt3.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/blt29187c9488cf3bdc/10293_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt097b217d1d989782/10293_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img7: "https://www.lego.com/cdn/cs/set/assets/blt13645451aff30e1e/10293_alt6.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img8: "https://www.lego.com/cdn/cs/set/assets/blt8a026fe8a152d6dc/10293_alt7.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
  {
    title: "LEGO® House ",
    price: 49.99,
    rating: 4.0,
    pieces: 774,
    age: 12,
    img1: "https://www.lego.com/cdn/cs/set/assets/blt4ec90da36b68ebcf/21037.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img2: "https://www.lego.com/cdn/cs/set/assets/bltc5d88a7042c458d2/21037_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img3: "https://www.lego.com/cdn/cs/set/assets/blt23af934c5c312577/21037_alt2.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img4: "https://www.lego.com/cdn/cs/set/assets/bltfddbc2e5e2ac86ce/21037_alt3.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img5: "https://www.lego.com/cdn/cs/set/assets/bltc165bf5bf61f94eb/21037_alt4.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
    img6: "https://www.lego.com/cdn/cs/set/assets/blt44d99dc3775b2b75/21037_alt5.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  },
];

let prevButtonCard = document.querySelectorAll("#prevButton");
let nextButtonCard = document.querySelectorAll("#nextButton");
let imagesContainer = document.querySelectorAll(".images-store-card");
let currentPosition = 0;

/* -----------------------
        LOGICA
--------------------------*/

createCard(cardData);

for (let i = 0; i < prevButtonCard.length; i++) {
  prevButtonCard[i].addEventListener("click", function () {
    const imageWidth = imagesContainer[i].clientWidth;
    currentPosition += imageWidth;
    if (currentPosition > 0) {
      currentPosition = 0;
    }
    imagesContainer[i].style.transform = `translateX(${currentPosition}px)`;
  });

  nextButtonCard[i].addEventListener("click", function () {
    const imageWidth = imagesContainer[i].clientWidth;
    currentPosition -= imageWidth;
    const maxPosition = -(
      imagesContainer[i].scrollWidth - imagesContainer[i].offsetWidth
    );
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
    }
    imagesContainer[i].style.transform = `translateX(${currentPosition}px)`;
  });
}

/* ----------------------
        FUNZIONI
-------------------------*/

function createCard(arr) {
  const ul = document.createElement("ul");
  arr.forEach((el) => {
    const li = document.createElement("li");
    const card = document.createElement("article");
    card.classList.add("store-card");

    card.innerHTML = `
        <div class="container-img-store-card">
          <div class="images-store-card">
          <div class="store-card-image">
            <img
              src="${el.img1}"
              alt=""
             />
          </div>
          <div class="store-card-image">
            <img
              src="${el.img2}"
              alt=""
            />
          </div>
    </div>
          
    <button id="prevButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path
                d="M26.643 2.413 9.799 18.716A2.489 2.489 0 0 0 9 20.527c0 .679.287 1.33.798 1.811L26.74 37.627c.257.24.604.374.967.374.362 0 .71-.134.967-.374l1.92-1.837c.129-.12.23-.261.3-.418a1.215 1.215 0 0 0 0-.988 1.283 1.283 0 0 0-.3-.418L15.642 20.411l14.952-14.44c.256-.24.4-.566.4-.905 0-.34-.144-.665-.4-.906L28.62 2.374a1.383 1.383 0 0 0-.458-.282 1.454 1.454 0 0 0-1.073.021c-.168.071-.32.173-.445.3Z"
              ></path>
            </svg>
          </button>
          <button id="nextButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path
                d="M26.643 2.413 9.799 18.716A2.489 2.489 0 0 0 9 20.527c0 .679.287 1.33.798 1.811L26.74 37.627c.257.24.604.374.967.374.362 0 .71-.134.967-.374l1.92-1.837c.129-.12.23-.261.3-.418a1.215 1.215 0 0 0 0-.988 1.283 1.283 0 0 0-.3-.418L15.642 20.411l14.952-14.44c.256-.24.4-.566.4-.905 0-.34-.144-.665-.4-.906L28.62 2.374a1.383 1.383 0 0 0-.458-.282 1.454 1.454 0 0 0-1.073.021c-.168.071-.32.173-.445.3Z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="product-atributes-card">
          <span class="product-attribute" data-test="product-age-label"
            ><div class="icon-store-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="M36.972 26.744c-.135-3.129-.322-7.406-5.725-7.406h-7.441V14.89a1.257 1.257 0 0 0 .926-.502c2.947-4.005 0-7.075-3.16-10.315l-.671-.697a1.308 1.308 0 0 0-1.835 0l-.671.697c-3.143 3.24-6.108 6.31-3.16 10.315a1.258 1.258 0 0 0 .926.502v4.465H8.753c-5.402 0-5.59 4.252-5.725 7.406v.68a3.175 3.175 0 0 0 2.242 3.462c.098.029.197.048.298.06v4.761A1.276 1.276 0 0 0 6.816 37H33.15a1.273 1.273 0 0 0 1.274-1.276v-4.77c.1-.018.2-.04.297-.068a3.169 3.169 0 0 0 2.252-3.461v-.68ZM19.983 6.08c2.999 3.113 4.018 4.482 3.033 6.25H16.95c-.986-1.768.034-3.137 3.032-6.25Zm-1.274 8.81h2.548v4.448H18.71V14.89ZM5.542 26.855c.162-3.682.459-4.966 3.177-4.966h22.494c2.718 0 3.016 1.284 3.177 4.966v.697c0 .749-.246.85-.416.85a2.207 2.207 0 0 1-2.098-.756 3.681 3.681 0 0 0-3.169-1.956 3.7 3.7 0 0 0-3.185 2.007 1.088 1.088 0 0 1-.91.646 1.213 1.213 0 0 1-1.019-.672 4.393 4.393 0 0 0-3.448-2.143h-.289a4.388 4.388 0 0 0-3.466 2.118 1.215 1.215 0 0 1-1.02.672 1.07 1.07 0 0 1-.908-.647 3.706 3.706 0 0 0-3.186-2.007 3.676 3.676 0 0 0-3.185 1.982 2.2 2.2 0 0 1-2.124.8c-.17-.052-.45-.137-.416-.851l-.009-.74Zm2.549 7.594v-3.742a4.248 4.248 0 0 0 2.2-1.794 1.14 1.14 0 0 1 .96-.672 1.188 1.188 0 0 1 .976.689 3.562 3.562 0 0 0 3.135 1.956 3.726 3.726 0 0 0 3.245-1.999 1.861 1.861 0 0 1 1.36-.85 1.858 1.858 0 0 1 1.358.85 3.732 3.732 0 0 0 3.245 1.999 3.557 3.557 0 0 0 3.135-1.956 1.19 1.19 0 0 1 .977-.689 1.138 1.138 0 0 1 .96.672 4.248 4.248 0 0 0 2.234 1.794v3.742H8.09Z"
                ></path>
              </svg>
            </div>
            ${el.age}
          </span>

          <span class="product-attribute" data-test="product-piece-label">
            <div class="icon-store-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="m8.18 11.486-.03.014c-.15.141-.15.775-.15.775v17.79c0 .38.21.733.571.916l10.956 5.892c.15.085.33.127.51.127s.361-.042.527-.127l10.865-5.892c.36-.183.571-.536.571-.916V12.26s0-.634-.18-.747l-.166-.127-.796-.437-4.043-2.199-.18-.084V6.919C26.635 4.692 23.87 3 20.038 3c-3.833 0-6.583 1.706-6.583 3.933V8.61m6.583-3.481c2.675 0 4.373 1.07 4.373 1.818 0 .747-1.698 1.818-4.373 1.818-2.675 0-4.374-1.071-4.374-1.818 0-.747 1.729-1.818 4.374-1.818Zm-4.374 4.778a9.916 9.916 0 0 0 4.374.959 9.542 9.542 0 0 0 4.373-.959v.212c0 .76-1.698 1.832-4.373 1.832-2.675 0-4.374-1.071-4.374-1.818v-.226Zm3.277 8.726v15.52l-8.717-4.709V14.01l8.716 4.567v.07-.013Zm1.112-1.819-7.65-4.045-.992-.494-.12-.056 2.3-1.269c.6 1.819 3.17 3.101 6.462 3.101 3.29 0 5.77-1.24 6.432-3.016l2.164 1.198h.015l-8.581 4.595-.03-.014Zm9.783 12.616-8.656 4.737v-15.52l8.656-4.652V29.43Z"
                ></path>
              </svg>
            </div>
            ${el.pieces}
          </span>

          <span class="product-attribute" data-test="product-rating-label">
            <div class="icon-store-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path
                  d="M10.485 36c-.332 0-.66-.102-.942-.304a1.56 1.56 0 0 1-.638-1.546l1.674-9.612-7.093-6.811a1.554 1.554 0 0 1-.406-1.62c.19-.576.686-.988 1.295-1.075l9.8-1.403 4.386-8.748A1.597 1.597 0 0 1 20 4c.616 0 1.167.338 1.439.881l4.383 8.746 9.803 1.404c.609.087 1.106.5 1.295 1.076.19.576.035 1.197-.406 1.62l-7.091 6.808 1.673 9.615a1.56 1.56 0 0 1-.64 1.546 1.614 1.614 0 0 1-1.69.12l-8.764-4.538-8.77 4.539a1.624 1.624 0 0 1-.747.183Z"
                ></path>
              </svg>
            </div>
            ${el.rating}
          </span>
        </div>

        <h3 class="product-title-card" data-test="product-title-row">
          <a href="">${el.title}</a>
        </h3>

        <div class="product-price-card">${el.price} €</div>

        <button class="standard-button standard-button-round button-orange">
          <div class="spinner-container hidden">
            <svg class="spinner" viewBox="0 0 66 66">
              <circle cx="33" cy="33" r="20" fill="none" stroke="#000000" class="spinner-circle"></circle>
            </svg>
          </div>
          <div class="container-content-standard-button">
            <img class="bag-icon" src="/assets/icons/bag.svg" alt="bag-icon">
            <div class="testo">Aggiungi al Carrello</div>
          </div>
        </button>`;

    li.append(card);

    ul.append(li);
  });

  cardContainer.append(ul);

  prevButtonCard = document.querySelectorAll("#prevButton");
  nextButtonCard = document.querySelectorAll("#nextButton");
  imagesContainer = document.querySelectorAll(".images-store-card");
}

/* ---------------------
        EVENTI
-----------------------*/
