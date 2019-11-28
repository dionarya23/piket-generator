const moment = require("moment");
moment.locale("id");

class GeneratePiket {
  jadwalPiket(anggota, numOfDay, monthYear) {
      const copyArray = arr => arr.map(el => el);
      const getRandom = (jenis_piket, tgl) => {
        if (orangBelumPiket.length === 0) orangBelumPiket = copyArray(anggota);
        const randomIndex = Math.floor(Math.random() * orangBelumPiket.length);

        const namaOrang = {
          nim : orangBelumPiket[randomIndex].nim,
          nama_anggota : orangBelumPiket[randomIndex].nama_anggota,
          tanggal_piket : tgl,
          jenis_piket : jenis_piket,
          status : 'Belum',
          diperiksa_oleh : ''
        }

        orangBelumPiket.splice(randomIndex, 1);
        return namaOrang;
  };

        let orangBelumPiket = copyArray(anggota);
        const jadwalPiket = [];
        for (let i = 1; i <= numOfDay; i++) {
          let tgl = moment(`${i}-${monthYear}`, 'D-MM-YYYY').format('YYYY-MM-DD');
          let day = moment(`${i}-${monthYear}`, 'D-MM-YYYY').format('dddd');

          
            if (day !== 'Minggu') {
              for (let y=0; y<5;y++) {
            let peoples = []
              if (y<2) {
                let orang = getRandom("Cuci Piring", tgl)
                    if (!peoples.includes(orang.nama_anggota)) {
                        peoples.push(orang.nama_anggota)
                        jadwalPiket.push(orang)
                    } else {
                        let orang2 = getRandom("Cuci Piring", tgl)
                        peoples.push(orang2.nama_anggota)
                        jadwalPiket.push(orang2)
                      }

              } else if (y < 3) {
                let orang = getRandom("Sedot Debu", tgl)
                    if (!peoples.includes(orang.nama_anggota)) {
                      peoples.push(orang.nama_anggota)
                      jadwalPiket.push(orang)
                  } else {
                      let orang2 = getRandom("Sedot Debu", tgl)
                      peoples.push(orang2.nama_anggota)
                      jadwalPiket.push(orang2)
                    }

              } else {
                let orang = getRandom("Bersih Meja", tgl)
                    if (!peoples.includes(orang.nama_anggota)) {
                      peoples.push(orang.nama_anggota)
                      jadwalPiket.push(orang)
                  } else {
                      let orang2 = getRandom("Bersih Meja", tgl)
                      peoples.push(orang2.nama_anggota)
                      jadwalPiket.push(orang2)
                    }

              }
            }
          }
        }

        return jadwalPiket;
      
      }
    }


module.exports = GeneratePiket;