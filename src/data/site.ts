import ayamBumbuKuning from '../assets/images/menu-ayam-bumbu-kuning.jpg';
import ayamRempahLaos from '../assets/images/menu-ayam-rempah-laos.jpg';
import ayamBakarKlaten from '../assets/images/menu-ayam-bakar-klaten.jpg';
import bebekBumbuKuning from '../assets/images/menu-bebek-bumbu-kuning.jpg';
import ayamBumbuRujak from '../assets/images/menu-ayam-bumbu-rujak.jpg';
import nasiBox from '../assets/images/menu-nasi-box.jpg';
import ayamUtuh from '../assets/images/menu-ayam-utuh.jpg';
import type { ImageMetadata } from 'astro';

export const SITE_URL = 'https://ayammbakrina.my.id';
export const WA_NUMBER = '6282229302678';
export const WA_DISPLAY = '0822-2930-2678';
export const PHONE_E164 = '+6282229302678';
export const FOUNDED = '2021';

export const waLink = (text?: string) =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export type Tag = { label: string; tone: 'yellow' | 'red' | 'brown' | 'green' | 'cream' };

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  unit: string;
  pricePrefix?: string;
  priceNumber: number;
  description: string;
  image?: ImageMetadata;
  imageAlt: string;
  imagePosition?: string;
  tag: Tag;
  chip: string;
  perk: string;
};

export const menu: MenuItem[] = [
  {
    id: 'ayam-bumbu-kuning',
    name: 'Ayam Bumbu Kuning',
    price: 'Rp 17.000',
    unit: '/potong',
    priceNumber: 17000,
    description:
      'Goreng gurih kuning rempah meresap sampai ke serat daging terdalam, tekstur empuk, lezat dan beraroma wangi rempah asli.',
    image: ayamBumbuKuning,
    imageAlt: 'Potongan ayam bumbu kuning Mbak Rina di wadah',
    tag: { label: 'Favorit Keluarga', tone: 'yellow' },
    chip: 'Bumbu Kuning',
    perk: 'Free Sambal & Lalap',
  },
  {
    id: 'ayam-rempah-laos',
    name: 'Ayam Rempah Laos',
    price: 'Rp 17.000',
    unit: '/potong',
    priceNumber: 17000,
    description:
      'Ayam ungkep rempah dengan taburan serundeng laos gurih kriuk berlimpah khas nusantara. Sangat gurih disantap dengan nasi hangat.',
    image: ayamRempahLaos,
    imageAlt: 'Ayam rempah laos dengan serundeng, lalapan, dan timun',
    tag: { label: 'Ayam Ungkep', tone: 'red' },
    chip: 'Serundeng Laos',
    perk: 'Free Sambal & Lalap',
  },
  {
    id: 'ayam-bumbu-klaten',
    name: 'Ayam Bumbu Klaten',
    price: 'Rp 17.000',
    unit: '/potong',
    priceNumber: 17000,
    description:
      'Cita rasa manis gurih khas Klaten dengan baluran kecap rempah pilihan, dibakar karamel harum menggugah selera santap Anda.',
    image: ayamBakarKlaten,
    imageAlt: 'Ayam bumbu Klaten berwarna cokelat karamel',
    tag: { label: 'Khas Panggang', tone: 'brown' },
    chip: 'Manis Gurih',
    perk: 'Free Sambal & Lalap',
  },
  {
    id: 'bebek-bumbu-kuning',
    name: 'Bebek Bumbu Kuning',
    price: 'Rp 30.000',
    unit: '/potong',
    priceNumber: 30000,
    description:
      'Daging bebek empuk pulen tanpa bau prengus, diungkep lama bersama rempah kuning kunyit jahe ketumbar yang pekat meresap.',
    image: bebekBumbuKuning,
    imageAlt: 'Potongan bebek bumbu kuning ungkep',
    tag: { label: 'Spesial Bebek', tone: 'red' },
    chip: 'Empuk Lembut',
    perk: 'Free Sambal & Lalap',
  },
  {
    id: 'ayam-bumbu-rujak',
    name: 'Ayam Bumbu Rujak Pedas',
    price: 'Rp 20.000',
    unit: '/potong',
    priceNumber: 20000,
    description:
      'Paduan bumbu pedas manis gurih berempah cabai merah segar dan santan kental, meresap lezat sampai ke serat tulang.',
    image: ayamBumbuRujak,
    imageAlt: 'Ayam bumbu rujak pedas dengan daun kemangi',
    tag: { label: 'Pedas Segar', tone: 'red' },
    chip: 'Level Mantap',
    perk: 'Free Sambal & Lalap',
  },
  {
    id: 'nasi-box',
    name: 'Nasi Box / Nasi Besek',
    price: 'Rp 30.000',
    unit: '/box',
    pricePrefix: 'Mulai',
    priceNumber: 30000,
    description:
      'Cocok untuk konsumsi rapat kantor, arisan keluarga, syukuran, pengajian, dan hajatan. Lengkap nasi, ayam/bebek, lauk pelengkap & sambal.',
    image: nasiBox,
    imageAlt: 'Nasi box mika berisi ayam, lalapan, dan sambal',
    tag: { label: 'Paket Acara & Kantor', tone: 'green' },
    chip: 'Mika / Besek',
    perk: 'Box Eksklusif',
  },
  {
    id: 'ayam-utuh',
    name: 'Ayam Utuh Ekor (Kuning / Laos / Klaten)',
    price: 'Rp 75.000 – 80.000',
    unit: '/ekor',
    priceNumber: 75000,
    description:
      'Satu ekor ayam utuh dimasak rempah komplit. Pilihan terbaik untuk hantaran mertua, syukuran, kenduri, dan makan bersama di rumah.',
    image: ayamUtuh,
    imageAlt: 'Satu ekor ayam utuh bumbu kuning dalam besek',
    tag: { label: '1 Ekor Utuh', tone: 'cream' },
    chip: 'Porsi 4–5 Orang',
    perk: 'Besek & Sambal',
  },
  {
    id: 'bebek-utuh',
    name: 'Bebek Utuh 1 Ekor',
    price: 'Rp 100.000',
    unit: '/ekor',
    priceNumber: 100000,
    description:
      'Satu ekor bebek utuh gurih empuk bumbu rempah kuning atau goreng laos, lengkap dengan bumbu serundeng, lalapan segar & sambal botolan.',
    imageAlt: 'Foto bebek utuh menyusul',
    tag: { label: 'Spesial Bebek Utuh', tone: 'red' },
    chip: 'Jumbo Ekor',
    perk: 'Pilihan Premium',
  },
];

export const addons = [
  { name: 'Kepala Ayam / Bebek', note: 'Bumbu Kuning Gurih', price: 'Rp 5.000', unit: '/potong' },
  { name: 'Ati Ampela Ayam / Bebek', note: 'Bumbu Kuning & Rempah', price: 'Rp 5.000', unit: '/potong' },
];

export type Branch = {
  id: string;
  label: string;
  name: string;
  street: string;
  address: string;
  locality: string;
  hours: string;
  opens: string;
  closes: string;
};

export const branches: Branch[] = [
  {
    id: 'gang-baru',
    label: 'Cabang 1',
    name: 'Pasar Gang Baru',
    street: 'Pasar Gang Baru No. 78, Kranggan',
    address: 'Pasar Gang Baru No. 78, Kranggan, Kec. Semarang Tengah, Kota Semarang',
    locality: 'Kranggan',
    hours: '06.00 – 14.00 WIB',
    opens: '06:00',
    closes: '14:00',
  },
  {
    id: 'prembaen',
    label: 'Cabang 2',
    name: 'Pasar Prembaen',
    street: 'Pasar Prembaen No. 1046, Jl. Depok, Kembangsari',
    address: 'Pasar Prembaen No. 1046, Jl. Depok, Kembangsari, Kec. Semarang Tengah',
    locality: 'Kembangsari',
    hours: '06.30 – 15.00 WIB',
    opens: '06:30',
    closes: '15:00',
  },
];
