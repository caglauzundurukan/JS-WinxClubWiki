const menu = [
    {
      id: 1,
      title: "Bloom",
      category: "Periler",
      price: "Ejder Ateşi Gücü",
      img:
        "https://i.pinimg.com/564x/e6/c1/83/e6c183c381786a6e01f66c1175ca48af.jpg",
      desc: `Serinin başlarında 16 yaşındadır. Winx Club'ın ana karakteri baş oyuncusudur. Ejder Ateşi gücüne sahiptir. Dünya'dan geldiği sanılsa da aslında Domino'nun prensesidir. Sky, erkek arkadaşıdır. Annesini ve babasını ise 'Winx Kayıp Krallığın Sırrı've sihirli macera adlarda sinema filminde bulmuştur. Bloomun, Daphne adlı birde ablası vardır. Ablası Daphne su perisidir, Bloom ise Magic boyutunun en güçlü sihiri olan Ejder Ateşi'ne sahiptir. Kiko, onun evcil hayvanıdır. Lockette ise pixie'sidir. En iyi arkadaşı ise Stella'dır. En sevdiği renk kırmızıdır. Doğum günü 10 Aralıktır. Sihirli burcu dragondur.`,
    },

    {
      id: 2,
      title: "Daphne",
      category: "Periler",
      price: "Su Gücü",
      img:
        "https://static.wikia.nocookie.net/winx-club-it/images/f/f5/Daphne_in_624.jpg/revision/latest?cb=20160117110459&path-prefix=it",
      desc: `Daphne, Bloom'un lanetli kız kardeşidir. Su gücünü kullanır. Domino prensesidir. Dizinin bütün sezonlarında görülmüştür. 5. sezonda Sirenix Gardiyanı Tritannus'u yendikleri için ödül olarak laneti kaldırmıştır. 6. sezonda da Winx Club'a görevlerde yardım etmiştir. Alfea Periler Okulunda, Sihir Tarihi dersi vermektedir. `,
    },
    {
      id: 3,
      title: "Techna",
      category: "Periler",
      price: "Teknoloji Gücü",
      img:
        "https://www.winxclub.com/sites/default/files/pop-up-3_8.jpg",
      desc: `Teknoloji gücüne hakimdir. Bilgisayarı ve cep telefonunu çok sever. Bu nedenle mantıklı ve rasyonel bir kişiliğe sahiptir. Timmy'e aşıktır. Zenith gezegeninden gelmektedir. En sevdiği arkadaşı ise Miusa'dır. Pixie'si Digit idi fakat 6. sezonda bilinmeyen bir nedenle Pixie'si Caramel olarak değiştirilmilştir. En sevdiği renk açık mavidir. Doğum günü 16 Aralıktır. Sihirli burcu tritondur.`,
    },
    {
      id: 4,
      title: "Stella",
      category: "Periler",
      price: "Güneş ve Ay Gücü",
      img:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7fd215d-4b39-4c62-8593-1f98d500b4a0/d8y5eww-019ced6d-b056-41b2-877a-e2b3bf8f1668.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3ZmQyMTVkLTRiMzktNGM2Mi04NTkzLTFmOThkNTAwYjRhMFwvZDh5NWV3dy0wMTljZWQ2ZC1iMDU2LTQxYjItODc3YS1lMmIzYmY4ZjE2NjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Qonf2PsjWBqFKS9wQyUd8Sv8Wa97TAqBd6cxm9rY5UQ",
      desc: `Güneş'in ve Ay'ın gücünü kullanır. Parlak Güneş Perisidir. Brandon'a aşıktır. Konuşkandır ve modayı çok sever. Sihirli Boyut'un merkezi olan Solaria'dan gelmektedir. Ebeveyinleri Kraliçe Luna ve Kral Radius'dur. Stella yıldızları, annesi Ay'ı, babası ise Güneş'i temsil etmektedir. En sevdiği arkadaşı Bloom'dur. Pixie'si Amore'dir. En sevdiği renk yeşildir. Doğum günü 18 Ağustostur. Sihirli burcu denizkızıdır.`,
    },
    {
      id: 5,
      title: "Prens Sky",
      category: "Uzmanlar",
      price: "Uzman",
      img:
        "https://i.pinimg.com/originals/90/8d/80/908d805c7446639b9ee8d26c6c7e8bcd.jpg",
      desc: `Eraklyon prensidir. Romantiktir. Çok güçlüdür. Bloom'a çok aşıktır. Brandon en yakın arkadaşıdır.`,
    },
    {
      id: 6,
      title: "Brandon",
      category: "Uzmanlar",
      price: "Uzman",
      img:
        "https://i.pinimg.com/originals/4d/1a/84/4d1a847649a28964f6b43a038b708750.jpg",
      desc: `Sky'ın en yakın arkadaşıdır. Stella'ya aşıktır.`,
    },
    {
      id: 7,
      title: "Flora",
      category: "Periler",
      price: "Doğa Gücü",
      img:
        "https://i.pinimg.com/originals/4a/8a/d5/4a8ad5eba27d3166a976321ed7193aef.jpg",
      desc: `Doğa gücünü kullanır. Oldukça sakin, iyi kalpli ve romantiktir. Helia'ya aşıktır. Linphea koruyucusudur.En sevdiği arkadaşı Layla'dır. Pixie'si Chatta'dır. En sevdiği renk pembedir. Doğum günü 1 Marttır. Sihirli burcu orman perisidir`,
    },
    {
      id: 8,
      title: "Helia",
      category: "Uzmanlar",
      price: "Uzman",
      img:
        "https://img.wattpad.com/96ff0653caef5f6a367378cd3c63ea5877988473/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f425635437a727435745a436b33773d3d2d33322e313632383133383563303731343433393337373533363032353333332e6a7067",
      desc: `Timmy'nin en yakın arkadaşıdır. Romantiktir ve şiir yazar. Flora'ya aşıktır.`,
    },
    {
      id: 9,
      title: "Muisa",
      category: "Periler",
      price: "Müzik Gücü",
      img:
        "https://www.winxclub.com/sites/default/files/galleria/body-image-2_4.jpg",
      desc: `Müzik gücünü kullanır. Müziği çok sever. Karamsar olmasına rağmen iyi bir arkadaştır. Riven'dan hoşlanır. Melody gezegeninden gelmektedir. En sevdiği arkadaşı ise Tecna'dır. Pixie'si Tune idi fakat 6. sezonda bilinmeyen bir nedenle Pixie'si Cherie olarak değiştirilmiştir.En sevdiği renk sarıdır. Doğum günü 30 Mayıstır. Sihirli burcu elftir.`,
    },
    {
        id: 10,
        title: "Layla",
        category: "Periler",
        price: "Morfix Sıvısı ve Dalgaların Gücü",
        img:
          "https://i.pinimg.com/originals/18/1c/aa/181caa562314f2e18d86d823b5631559.jpg",
        desc: `Diziye 2. sezonda katılmıştır. Morfix sıvısı ve dalgaların gücünü kullanır. Sporu çok sever. Nabu ile nişanlıydı fakat Nabu 4. sezonda Karaçember Büyücüleri'nin açtığı geçidi kapatırken ölmüştür. Daha sonra Roy ile aralarında bir şey olmuştur ve Nex de ona aşıktır. Andros gezegeninin prensesidir. En sevdiği arkadaşı ise Flora'dır. Pixie'si Piff'dir. En sevdiği renk turuncudur. Doğum günü 15 Hazirandır. Sihirli burcu khimairadır.`,
      },
      {
        id: 11,
        title: "Icy",
        category: "Cadilar",
        price: "Buz ve Kar Gücü",
        img:
          "https://www.meme-arsenal.com/memes/6e2cf6e9bb0b3a5fead5de70405ce946.jpg",
        desc: `Buz ve kar gücüne sahiptir. Trix'in lideridir.`,
      },
      {
        id: 12,
        title: "Darcy",
        category: "Cadilar",
        price: "İllüzyon ve Karanlık Gücü",
        img:
          "https://i.ytimg.com/vi/ieCisDGdlKc/maxresdefault.jpg",
        desc: `İllüzyon ve karanlık gücüne sahiptir..`,
      },
      {
        id: 13,
        title: "Stormy",
        category: "Cadilar",
        price: "Fırtına ve Elektrik Gücü",
        img:
          "https://static.wikia.nocookie.net/winx/images/8/80/Stormyy.jpg/revision/latest?cb=20211027135605&path-prefix=pl",
        desc: `Fırtına ve elektrik gücüne sahiptir`,
      },
  ];
  

  //Button and Menu Selection
  const buttonSection = document.querySelector(".btn-container");
  const menuSection = document.querySelector(".section-center");
  

  //Button Creation
  const createButtons = () => {
    let allButtons = `
      <button id="Hepsi" class="btn btn-outline-dark btn-item" type="button">
        Hepsi
      </button>
      <button id="Periler" class="btn btn-outline-dark btn-item" type="button">
        Periler
      </button>
      <button id="Uzmanlar" class="btn btn-outline-dark btn-item" type="button">
        Uzmanlar
      </button>
      <button id="Cadilar" class="btn btn-outline-dark btn-item" type="button">
        Cadılar
      </button>
    `
    buttonSection.innerHTML = allButtons;
  }
  createButtons();
  

  //Create Person
  const createPerson = (person) => {
    let html = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img class="photo" src="${person.img}" alt="${person.title}">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${person.title}</h4>
            <h4 class="price">${person.price}</h4>
          </div>
          <div class="menu-text">${person.desc}</div>
        </div>
      </div>  
    `
    return html;
  }
  
  //List All Person
  const listAllPerson = () => {
    let allPerson="";
  
    menu.map(item => {
      allPerson += createPerson(item)
    })
    menuSection.innerHTML = allPerson;
  }

  //Show All Person on Homepage
  document.addEventListener("DOMContentLoaded",listAllPerson);
  
  //List Periler
  const listPeriler = () => {
    let Periler="";
  
    menu.map(item => {
      if(item.category === "Periler"){
        Periler += createPerson(item)
      }
    })
    menuSection.innerHTML = Periler;
  }
  document.querySelector("#Periler").addEventListener("click",listPeriler);
  

  //List Uzmanlar
  const listUzmanlar = () => {
    let Uzmanlar="";
  
    menu.map(item => {
      if(item.category === "Uzmanlar"){
        Uzmanlar += createPerson(item)
      }
    })
    menuSection.innerHTML = Uzmanlar;
  }
  document.querySelector("#Uzmanlar").addEventListener("click",listUzmanlar);
  

  //List Cadilar
  const listCadilar = () => {
    let Cadilar="";
  
    menu.map(item => {
      if(item.category === "Cadilar"){
        Cadilar += createPerson(item)
      }
    })
    menuSection.innerHTML = Cadilar;
  }
  document.querySelector("#Cadilar").addEventListener("click",listCadilar);
  
  //List All When Hepsi Button is Clicked
  document.querySelector("#Hepsi").addEventListener("click",listAllPerson);