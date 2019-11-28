# Jadwal Pikel Generator
Jadwal Piket untuk Codelabs

## Cara Install

```shell
npm install piket-cl
```

## Cara penggunaan

```javascript

const jadwalPiket = require('jadwal-piket')
const generate = new jadwalPiket()


const anggota = [{
    nama_anggota: 'Lukmannudin',
    nim: '10517081'
},
{
    nama_anggota: 'Suyatna',
    nim: '10517081'
}
]

const jumlahHariDalamBulan = 30
const monthYear = '12-2019' //Desember 2019
const result = jadwalPiket(anggota, jumlahHariDalamBulan, monthYear)

```