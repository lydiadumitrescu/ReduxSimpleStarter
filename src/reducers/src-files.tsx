export type SrcFilesTypePart = { src: string, description: string, type: "image" | "video" };
export type SrcFilesType = { do: SrcFilesTypePart[], doNot: SrcFilesTypePart[] }

const srcFiles: SrcFilesType = {
  "do": [
    {
      "src": "https://2.bp.blogspot.com/-wA3udToDOKU/WcS_P-iAoQI/AAAAAAAAXr0/nPkFzQdg9fQoIZyAMnemXO2FUfV4UfTsACLcBGAs/s1600/DSC-071.jpg",
      "description": "limini necesare pentru poze cromate ca in 'CLAUDIA & ALEXANDRU ~ IASI  http://www.andreienea.ro/2017/09/claudia-alexandru-iasi_22.html'",
      "type": "image"
    },
    {
      "src": "https://4.bp.blogspot.com/-T72mfFEqiyc/WcS_JgA_5GI/AAAAAAAAXpg/Nymu3V_KpMknenduCyxM_gdBodj2ptcLwCLcBGAs/s1600/DSC-034.jpg",
      "description": "Imaginile din biserica as prefera sa fie alb negru sau fara prea multe din decoratiunile de aur",
      "type": "image"
    },
    {
      "src": "https://3.bp.blogspot.com/-rZ3akoQZFPU/WcS_J8io-wI/AAAAAAAAXpo/2IVcTo2gW7kY4mgC7eY0WXdZCn8t51oBQCLcBGAs/s1600/DSC-035.jpg",
      "description": "Poze cu miri in plan secundar",
      "type": "image"
    },
    {
      "src": "https://4.bp.blogspot.com/-gGdfLcL57ZE/WcS_KRV1LYI/AAAAAAAAXp0/yO1FfoK2jLIz8XbR9Vd_4jZVxBh55ZkNQCLcBGAs/s1600/DSC-038.jpg",
      "description": "Poze cu perspectiva",
      "type": "image"
    },
    {
      "src": "https://3.bp.blogspot.com/-wpj6rDgS3NA/WcS_KidJ-ZI/AAAAAAAAXp4/H2mqacYI17AMo_K9KCcsMSa-cIq8t3-ygCLcBGAs/s1600/DSC-040.jpg",
      "description": "Poze colorate",
      "type": "image"
    },
    {
      "src": "https://4.bp.blogspot.com/-bCwtWDk2_rI/WcS_K2GQGRI/AAAAAAAAXqA/r86PjvueX8cvaoV1uIwg6aMLRJcPDUSpQCLcBGAs/s1600/DSC-042.jpg",
      "description": "Focus - love :)",
      "type": "image"
    },
    {
      "src": "https://4.bp.blogspot.com/-24A5h37LPN4/WcS_LUFt0jI/AAAAAAAAXqM/YQGNFREcGSMlqhIIP_WkOLmMKQkzkEjnQCLcBGAs/s1600/DSC-044.jpg",
      "description": "Natural, spotan",
      "type": "image"
    },
    {
      "src": "https://3.bp.blogspot.com/-YWyvltJWvnI/WaAk4OOs3ZI/AAAAAAAAXYc/torg4neTCs0RllHvlSpHug-s_uqaoaRsgCLcBGAs/s1600/DSC-000.jpg",
      "description": "Imagini de tablou - in care miri sunt in  planul secundar",
      "type": "image"
    },
    {
      "src": "https://1.bp.blogspot.com/-qXwZ8dKhnbk/WaAk827cSsI/AAAAAAAAXa0/B-BP-Qp5JfEeqv-XrhngeXNbTpp1RJUJwCLcBGAs/s1600/DSC-038.jpg",
      "description": "idei indraznete :)",
      "type": "image"
    },
    {
      "src": "https://www.youtube.com/embed/ljYtmcCMok0",
      "description": "culoarea (filtru) videoclipului",
      "type": "video"
    },
    {
      "src": "https://player.vimeo.com/video/194504364",
      "description": "idei, colorat (nu vintage), foarte dinamic, prea multa biserica (prea colorata)",
      "type": "video"
    },
    {
      "src": "https://www.youtube.com/embed/fVcyxdK7AIo",
      "description": "alta sursa: ????",
      "type": "video"
    }

  ],


  "doNot": [
    {
      "src": "https://1.bp.blogspot.com/-tGTDbzDkVbs/WcS_Kdto0ZI/AAAAAAAAXpw/YscVrR3yvyk4PNzSIXy4ILY6vJsIJGH3gCLcBGAs/s1600/DSC-039.jpg",
      "description": "Nu sunt cea mai fotogenica persoana :p",
      "type": "image"
    },
    {
      "src": "https://4.bp.blogspot.com/-aMBqpE3T1Gg/WaAk5sR-YhI/AAAAAAAAXZQ/ez9PJ5e9TgklfTtfXCd-TdmFgGeHaeh1QCLcBGAs/s1600/DSC-013.jpg",
      "description": "Poza in biserica cu aur - nu imi place , nu imi place nici covorul ",
      "type": "image"
    },
    {
      "src": "http://4.bp.blogspot.com/-l38IJgP9fQ4/U5GGjWaPoaI/AAAAAAAARdk/qcvjEE7Ytvc/s1600/079.jpg",
      "description": "nu imi plac filtrele de old, vintage ... nu prea .. merge 1 2",
      "type": "image"
    },
    {
      "src": "https://player.vimeo.com/video/138231168",
      "description": "imaginea stearsa ca un filtru vintage",
      "type": "video"
    },
  ]
}

export default () => {
  return srcFiles;
}
