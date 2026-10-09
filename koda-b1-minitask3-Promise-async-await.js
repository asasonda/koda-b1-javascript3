function antrean(nama, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(nama){
        resolve(`anteran bernama: ${nama} silakan masukk`);
      }else{
        reject('tidak ada nama diantrean')
      }

    }, time);
  });
}

async function cek() {
  try {
    const cetak1 = await antrean("Jane", 500);
    console.log(cetak1);

    const cetak2 = await antrean("John", 1500);
    console.log(cetak2);

    const cetak3 = await antrean("Ed", 500);
    console.log(cetak3);
  } catch (err) {
    console.error(err);
  }
}

cek();
