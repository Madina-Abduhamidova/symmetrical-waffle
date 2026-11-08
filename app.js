////// chiqmadi.
// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matem
// atik ifodani bajarib natijani qaytarsin.
//
// function calc(str) {
//   return ;
// }
// console.log(calc("23+4"));
//
//=========================================================
//
// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on
//
// function teng10(x, y) {
//   if (x == 10 || y == 10 || x + y == 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(teng10(9, 10));
// console.log(teng10(9, 9));
// console.log(teng10(1, 9));
//========================================================
//
// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu ma
// sofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin
//
// function benzin(km) {
//   if (km <= 10) {
//     return 100;
//   } else {
//     return km * 10;
//   }
// }
// console.log(benzin(15));
// console.log(benzin(23.5));
// console.log(benzin(3));
//==============================================================
//
// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3,7) 7
// fun(-1,0) 0
// fun(1000,400) 1000
//
// function katta(num1, num2) {
//   return Math.max(num1, num2);
// }
// console.log(katta(3, 7));
// console.log(katta(-1, 0));
// console.log(katta(1000, 400));
//=================================================================
//
// 35.Funksiya 2ta argument berilsa, funksiya ana shu 2ta argu
// mentdan iborat massiv qaytarsin
//
// function massiv(x, y) {
//   return [x, y];
// }
// console.log(massiv(1, 2));
// console.log(massiv(51, 21));
// console.log(massiv(512124, 215));
//===============================================================
//
// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lu
// motlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks holda
// yolg’on
// function tengstring(str1, str2) {
//   if (str1.length == str2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(tengstring("AB", "CD"));
// console.log(tengstring("ABC", "DE"));
// console.log(tengstring("hello", "edabit"));
//====================================================================
//
// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiy true aytaradi,
// aks holda false.
// function boshStr(str) {
//   return !Boolean(str);
// }
// console.log(boshStr(``));
// console.log(boshStr(` `));
// console.log(boshStr(`a`));
//====================================================================
//
// 38.Shunday funksiya yasang. Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5 ga bo’linsa, funksiya true
// qaytarsin, aks holda false
// function bolinsin5(son) {
//   if (son % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin5(5));
// console.log(bolinsin5(-55));
// console.log(bolinsin5(37));
//===============================================================
//
// 39.Shunday funksiya yasang. Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100 ga bo’linsa, funksiya true
// qaytarsin, aks holda false
// function bolinsin100(son) {
//   if (son % 100 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin100(1));
// console.log(bolinsin100(1000));
// console.log(bolinsin100(100));
//====================================================================
//
//  40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
// nechta belgi borligini aytsin. Bunda length propertisidan foydalan
// mang va rekursiv funksiya ishlating
// function uzunlik(str) {
//   let uzunstr = 0;
//   for (let i of str) {
//     uzunstr++;
//   }
//   return uzunstr;
// }
// console.log(uzunlik(`apple`));
// console.log(uzunlik(`make`));
// console.log(uzunlik(`a`));
// console.log(uzunlik(``));
// console.log(uzunlik(`  `));
//====================================================================
//
// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// function bolinsin(y, x) {
//   if (y % x == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin(98, 7));
// console.log(bolinsin(85, 4));
//===================================================================
//
// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.
// function raqam(str) {
//   return Number(str);
// }
// console.log(raqam("6"));
// console.log(raqam("1000"));
// console.log(raqam("12"));
//=================================================================
//
// 43.To’rtburchakningyuzini hisoblaydigan funksiyayasang.
// Bundafunksiyagato’rtburchakning(ya’nito’g’riturtburchak)
// tomonlariberiladi. Funksiyauningyuziniqaytarishikerak,
// agartomonlarxatokiritilganbo’lsafunksiya-1qaytarsin.
// function tortyuzi(a, b) {
//   if (a <= 0 || b <= 0) {
//     return -1;
//   } else {
//     return a * b;
//   }
// }
// console.log(tortyuzi(3, 4));
// console.log(tortyuzi(10, 11));
// console.log(tortyuzi(-1, 5));
// console.log(tortyuzi(0, 2));
//=========================================================
//
// 44.Funksiyagaismvafamiliyaargumentqilibberilsa,funksiya
// “ism,familiya”formatdagistringqaytarsin.
// function ismFam(ism, familiya) {
//   return familiya + `, ` + ism;
// }
// console.log(ismFam("First", "Last"));
// console.log(ismFam("John", "Doe"));
//=========================================================
//
//////////Chiqmadi
// 46.Shundayfunksiyayasangki,ushbufunksiya2taargument
// qabulqiladi. Birinchiargumentmassive, ikkinchiargument
// ushbumassivniboshidanboshlabnechtaelementnitushurib
// qoldirish. Tushiribqoldirilgandanso’ng funksiyanatijani
// qaytarsin.
// function tushirMassiv(arr,tushirishSoni)
//=========================================================
//
// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// sonivaovozberibqo’llamaganlarsoniniqabulqiladi.Funksiya
// natijaniqaytarsin.
// function ovozlar(ovozObj) {
//   ovozObj = ovozObj.upvotes - ovozObj.downvotes;
//   return ovozObj;
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));
// console.log(ovozlar({ upvotes: 132, downvotes: 132 }));
//==============================================================
//
// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
// function negativ(son) {
//   return son - 2 * son;
// }
// console.log(negativ(4));
// console.log(negativ(15));
// console.log(negativ(-4));
// console.log(negativ(0));
//==============================================================
//
// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang
// function almash(arr) {
//   return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]));
// console.log(almash([9, 9, 2, 3, 4]));
// console.log(almash([]));
//==========================================================
// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.
function kinogaKirish(yosh, otaOna) {
  if (yosh >= 15 && otaOna == true) {
    return true;
  } else {
    return false;
  }
}
console.log(kinogaKirish(14, true));
console.log(kinogaKirish(14, false));
console.log(kinogaKirish(16, true));
