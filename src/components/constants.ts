
export const restrictions = {
  gladkaya_detal: {
    width: {
      max: 2480,
      min: 100,
    },
    height: {
      max: 2480,
      min: 100,
    },
  },
  radiusnaya_detal: {
    height: {
      max: 2000,
      min: 100,
    },
    width: {
      max: 474,
      min: 474,
    },
  },
  pilyastra: {
    height: {
      max: 2222,
      min: 100,
    },
    width: {
      max: 100,
      min: 200,
    },
  },
}

export const paletteKeys = ["manufacturer", "veneerItem"];


const getImgUrl = (url: string) => new URL(`../${url}`, import.meta.url).href

export const veneerList = {
  1: {
    title: "Венге амаретто WEAM-Y40 DP",
    id: "1",
    asd: new URL(`./dir/${name}.png`, import.meta.url).href,
    src: getImgUrl('assets/veneer/01.jpg'),
  },
  2: {
    title: "Венге класичний WECL-X13 SP",
    id: "2",
    src: getImgUrl('assets/veneer/02.jpg'),
  },
  3: {
    title: "Венге луізіана WEL-X17 SP",
    id: "3",
    src: getImgUrl('assets/veneer/03.jpg'),
  },
  4: {
    title: "Горіх балтимор ORB-Y65",
    id: "4",
    src: getImgUrl('assets/veneer/04.jpg'),
  },
  5: {
    title: "Дерево сандалове DS-X04 SP",
    id: "5",
    src: getImgUrl('assets/veneer/05.jpg'),
  },
  6: {
    title: "Дуб вибілений DAB-X05SP",
    id: "6",
    src: getImgUrl('assets/veneer/06.jpg'),
  },
  7: {
    title: "Дуб графіт DAG-Y47SP",
    id: "7",
    src: getImgUrl('assets/veneer/07.jpg'),
  },
  8: {
    title: "Дуб кардинал DACA-X35SP",
    id: "8",
    src: getImgUrl('assets/veneer/08.jpg'),
  },
  9: {
    title: "Дуб класичний DACP-X07SP",
    id: "9",
    src: getImgUrl('assets/veneer/09.jpg'),
  },
  10: {
    title: "Дуб пастельний DAPS-Y29SP",
    id: "10",
    src: getImgUrl('assets/veneer/10.jpg'),
  },
  11: {
    title: "Дуб сільвер DAS-Y54RP",
    id: "11",
    src: getImgUrl('assets/veneer/11.jpg'),
  },
  12: {
    title: "Дуб сільвер флайдер DASF 63 S3F",
    id: "12",
    src: getImgUrl('assets/veneer/12.jpg'),
  },
  13: {
    title: "Зебрано капучино ZEC-X18 SP",
    id: "13",
    src: getImgUrl('assets/veneer/13.jpg'),
  },
  14: {
    title: "Зебрано чорне ZECZ-Y19 SP",
    id: "14",
    src: getImgUrl('assets/veneer/14.jpg'),
  },
  15: {
    title: "Оливка ардженто OLA-Y33 SP",
    id: "15",
    src: getImgUrl('assets/veneer/15.jpg'),
  },
  16: {
    title: "Оливка Болівія OLB-Y01 SP",
    id: "16",
    src: getImgUrl('assets/veneer/16.jpg'),
  },
  17: {
    title: "Оливка малага OLM-Y52 HP",
    id: "17",
    src: getImgUrl('assets/veneer/17.jpg'),
  },
  18: {
    title: "Оливка прима OLP-X28HP",
    id: "18",
    src: getImgUrl('assets/veneer/18.jpg'),
  },
  19: {
    title: "Оливка севілья OLS-X26 HP",
    id: "19",
    src: getImgUrl('assets/veneer/19.jpg'),
  },
  20: {
    title: "Палісандр бразильський PB-Y45 SF",
    id: "20",
    src: getImgUrl('assets/veneer/20.jpg'),
  },
  21: {
    title: "Палісандр ріо PR-Y02 SF",
    id: "21",
    src: getImgUrl('assets/veneer/21.jpg'),
  },
  22: {
    title: "Тік TK-Y39 DP",
    id: "22",
    src: getImgUrl('assets/veneer/22.jpg'),
  },
  23: {
    title: "Хебан амароне HEA-Y36 DP",
    id: "23",
    src: getImgUrl('assets/veneer/23.jpg'),
  },
  24: {
    title: "Хебан макасар HEM-X21SP",
    id: "24",
    src: getImgUrl('assets/veneer/24.jpg'),
  },
  25: {
    title: "Хебан макасар люкс HEML-Y60 SP",
    id: "25",
    src: getImgUrl('assets/veneer/25.jpg'),
  },
  26: {
    title: "Хебан цейлон HEC-Y30 SP",
    id: "26",
    src: getImgUrl('assets/veneer/26.jpg'),
  },
  27: {
    title: "Черешня американська CZA-Y44 D4F",
    id: "27",
    src: getImgUrl('assets/veneer/27.jpg'),
  },
}

export const palettes = {
  manufacturer: {
    ral: [
      {
        "id": "RAL_1000",
        "hex": "#CCC58F",
        "rgb": {
          "red": 204,
          "green": 197,
          "blue": 143,
        },
      },
      {
        "id": "RAL_1001",
        "hex": "#D1BC8A",
        "rgb": {
          "red": 209,
          "green": 188,
          "blue": 138,
        },
      },
      {
        "id": "RAL_1002",
        "hex": "#D2B773",
        "rgb": {
          "red": 210,
          "green": 183,
          "blue": 115,
        },
      },
      {
        "id": "RAL_1003",
        "hex": "#F7BA0B",
        "rgb": {
          "red": 247,
          "green": 186,
          "blue": 11,
        },
      },
      {
        "id": "RAL_1004",
        "hex": "#E2B007",
        "rgb": {
          "red": 226,
          "green": 176,
          "blue": 7,
        },
      },
      {
        "id": "RAL_1005",
        "hex": "#C89F04",
        "rgb": {
          "red": 200,
          "green": 159,
          "blue": 4,
        },
      },
      {
        "id": "RAL_1006",
        "hex": "#E1A100",
        "rgb": {
          "red": 225,
          "green": 161,
          "blue": 0,
        },
      },
      {
        "id": "RAL_1007",
        "hex": "#E79C00",
        "rgb": {
          "red": 231,
          "green": 156,
          "blue": 0,
        },
      },
      {
        "id": "RAL_1011",
        "hex": "#AF8A54",
        "rgb": {
          "red": 175,
          "green": 138,
          "blue": 84,
        },
      },
      {
        "id": "RAL_1012",
        "hex": "#D9C022",
        "rgb": {
          "red": 217,
          "green": 192,
          "blue": 34,
        },
      },
      {
        "id": "RAL_1013",
        "hex": "#E9E5CE",
        "rgb": {
          "red": 233,
          "green": 229,
          "blue": 206,
        },
      },
      {
        "id": "RAL_1014",
        "hex": "#DED09F",
        "rgb": {
          "red": 222,
          "green": 208,
          "blue": 159,
        },
      },
      {
        "id": "RAL_1015",
        "hex": "#EADEBD",
        "rgb": {
          "red": 234,
          "green": 222,
          "blue": 189,
        },
      },
      {
        "id": "RAL_1016",
        "hex": "#EAF044",
        "rgb": {
          "red": 234,
          "green": 240,
          "blue": 68,
        },
      },
      {
        "id": "RAL_1017",
        "hex": "#F4B752",
        "rgb": {
          "red": 244,
          "green": 183,
          "blue": 82,
        },
      },
      {
        "id": "RAL_1018",
        "hex": "#F3E03B",
        "rgb": {
          "red": 243,
          "green": 224,
          "blue": 59,
        },
      },
      {
        "id": "RAL_1019",
        "hex": "#A4957D",
        "rgb": {
          "red": 164,
          "green": 149,
          "blue": 125,
        },
      },
      {
        "id": "RAL_1020",
        "hex": "#9A9464",
        "rgb": {
          "red": 154,
          "green": 148,
          "blue": 100,
        },
      },
      {
        "id": "RAL_1021",
        "hex": "#EEC900",
        "rgb": {
          "red": 238,
          "green": 201,
          "blue": 0,
        },
      },
      {
        "id": "RAL_1023",
        "hex": "#F0CA00",
        "rgb": {
          "red": 240,
          "green": 202,
          "blue": 0,
        },
      },
      {
        "id": "RAL_1024",
        "hex": "#B89C50",
        "rgb": {
          "red": 184,
          "green": 156,
          "blue": 80,
        },
      },
      {
        "id": "RAL_1026",
        "hex": "#F5FF00",
        "rgb": {
          "red": 245,
          "green": 255,
          "blue": 0,
        },
      },
      {
        "id": "RAL_1027",
        "hex": "#A38C15",
        "rgb": {
          "red": 163,
          "green": 140,
          "blue": 21,
        },
      },
      {
        "id": "RAL_1028",
        "hex": "#FFAB00",
        "rgb": {
          "red": 255,
          "green": 171,
          "blue": 0,
        },
      },
      {
        "id": "RAL_1032",
        "hex": "#DDB20F",
        "rgb": {
          "red": 221,
          "green": 178,
          "blue": 15,
        },
      },
      {
        "id": "RAL_1033",
        "hex": "#FAAB21",
        "rgb": {
          "red": 250,
          "green": 171,
          "blue": 33,
        },
      },
      {
        "id": "RAL_1034",
        "hex": "#EDAB56",
        "rgb": {
          "red": 237,
          "green": 171,
          "blue": 86,
        },
      },
      {
        "id": "RAL_1035",
        "hex": "#A29985",
        "rgb": {
          "red": 162,
          "green": 153,
          "blue": 133,
        },
      },
      {
        "id": "RAL_1036",
        "hex": "#927549",
        "rgb": {
          "red": 146,
          "green": 117,
          "blue": 73,
        },
      },
      {
        "id": "RAL_1037",
        "hex": "#EEA205",
        "rgb": {
          "red": 238,
          "green": 162,
          "blue": 5,
        },
      },
      {
        "id": "RAL_2000",
        "hex": "#DD7907",
        "rgb": {
          "red": 221,
          "green": 121,
          "blue": 7,
        },
      },
      {
        "id": "RAL_2001",
        "hex": "#BE4E24",
        "rgb": {
          "red": 190,
          "green": 78,
          "blue": 36,
        },
      },
      {
        "id": "RAL_2002",
        "hex": "#C63927",
        "rgb": {
          "red": 198,
          "green": 57,
          "blue": 39,
        },
      },
      {
        "id": "RAL_2003",
        "hex": "#FA842B",
        "rgb": {
          "red": 250,
          "green": 132,
          "blue": 43,
        },
      },
      {
        "id": "RAL_2004",
        "hex": "#E75B12",
        "rgb": {
          "red": 231,
          "green": 91,
          "blue": 18,
        },
      },
      {
        "id": "RAL_2005",
        "hex": "#FF2300",
        "rgb": {
          "red": 255,
          "green": 35,
          "blue": 0,
        },
      },
      {
        "id": "RAL_2007",
        "hex": "#FFA421",
        "rgb": {
          "red": 255,
          "green": 164,
          "blue": 33,
        },
      },
      {
        "id": "RAL_2008",
        "hex": "#F3752C",
        "rgb": {
          "red": 243,
          "green": 117,
          "blue": 44,
        },
      },
      {
        "id": "RAL_2009",
        "hex": "#E15501",
        "rgb": {
          "red": 225,
          "green": 85,
          "blue": 1,
        },
      },
      {
        "id": "RAL_2010",
        "hex": "#D4652F",
        "rgb": {
          "red": 212,
          "green": 101,
          "blue": 47,
        },
      },
      {
        "id": "RAL_2011",
        "hex": "#EC7C25",
        "rgb": {
          "red": 236,
          "green": 124,
          "blue": 37,
        },
      },
      {
        "id": "RAL_2012",
        "hex": "#DB6A50",
        "rgb": {
          "red": 219,
          "green": 106,
          "blue": 80,
        },
      },
      {
        "id": "RAL_2013",
        "hex": "#954527",
        "rgb": {
          "red": 149,
          "green": 69,
          "blue": 39,
        },
      },
      {
        "id": "RAL_3000",
        "hex": "#AB2524",
        "rgb": {
          "red": 171,
          "green": 37,
          "blue": 36,
        },
      },
      {
        "id": "RAL_3001",
        "hex": "#A02128",
        "rgb": {
          "red": 160,
          "green": 33,
          "blue": 40,
        },
      },
      {
        "id": "RAL_3002",
        "hex": "#A1232B",
        "rgb": {
          "red": 161,
          "green": 35,
          "blue": 43,
        },
      },
      {
        "id": "RAL_3003",
        "hex": "#8D1D2C",
        "rgb": {
          "red": 141,
          "green": 29,
          "blue": 44,
        },
      },
      {
        "id": "RAL_3004",
        "hex": "#701F29",
        "rgb": {
          "red": 112,
          "green": 31,
          "blue": 41,
        },
      },
      {
        "id": "RAL_3005",
        "hex": "#5E2028",
        "rgb": {
          "red": 94,
          "green": 32,
          "blue": 40,
        },
      },
      {
        "id": "RAL_3007",
        "hex": "#402225",
        "rgb": {
          "red": 64,
          "green": 34,
          "blue": 37,
        },
      },
      {
        "id": "RAL_3009",
        "hex": "#703731",
        "rgb": {
          "red": 112,
          "green": 55,
          "blue": 49,
        },
      },
      {
        "id": "RAL_3011",
        "hex": "#7E292C",
        "rgb": {
          "red": 126,
          "green": 41,
          "blue": 44,
        },
      },
      {
        "id": "RAL_3012",
        "hex": "#CB8D73",
        "rgb": {
          "red": 203,
          "green": 141,
          "blue": 115,
        },
      },
      {
        "id": "RAL_3013",
        "hex": "#9C322E",
        "rgb": {
          "red": 156,
          "green": 50,
          "blue": 46,
        },
      },
      {
        "id": "RAL_3014",
        "hex": "#D47479",
        "rgb": {
          "red": 212,
          "green": 116,
          "blue": 121,
        },
      },
      {
        "id": "RAL_3015",
        "hex": "#E1A6AD",
        "rgb": {
          "red": 225,
          "green": 166,
          "blue": 173,
        },
      },
      {
        "id": "RAL_3016",
        "hex": "#AC4034",
        "rgb": {
          "red": 172,
          "green": 64,
          "blue": 52,
        },
      },
      {
        "id": "RAL_3017",
        "hex": "#D3545F",
        "rgb": {
          "red": 211,
          "green": 84,
          "blue": 95,
        },
      },
      {
        "id": "RAL_3018",
        "hex": "#D14152",
        "rgb": {
          "red": 209,
          "green": 65,
          "blue": 82,
        },
      },
      {
        "id": "RAL_3020",
        "hex": "#C1121C",
        "rgb": {
          "red": 193,
          "green": 18,
          "blue": 28,
        },
      },
      {
        "id": "RAL_3022",
        "hex": "#D56D56",
        "rgb": {
          "red": 213,
          "green": 109,
          "blue": 86,
        },
      },
      {
        "id": "RAL_3024",
        "hex": "#F70000",
        "rgb": {
          "red": 247,
          "green": 0,
          "blue": 0,
        },
      },
      {
        "id": "RAL_3026",
        "hex": "#FF0000",
        "rgb": {
          "red": 255,
          "green": 0,
          "blue": 0,
        },
      },
      {
        "id": "RAL_3027",
        "hex": "#B42041",
        "rgb": {
          "red": 180,
          "green": 32,
          "blue": 65,
        },
      },
      {
        "id": "RAL_3028",
        "hex": "#CB3334",
        "rgb": {
          "red": 203,
          "green": 51,
          "blue": 52,
        },
      },
      {
        "id": "RAL_3031",
        "hex": "#AC323B",
        "rgb": {
          "red": 172,
          "green": 50,
          "blue": 59,
        },
      },
      {
        "id": "RAL_3032",
        "hex": "#711521",
        "rgb": {
          "red": 113,
          "green": 21,
          "blue": 33,
        },
      },
      {
        "id": "RAL_3033",
        "hex": "#B24C43",
        "rgb": {
          "red": 178,
          "green": 76,
          "blue": 67,
        },
      },
      {
        "id": "RAL_4001",
        "hex": "#8A5A83",
        "rgb": {
          "red": 138,
          "green": 90,
          "blue": 131,
        },
      },
      {
        "id": "RAL_4002",
        "hex": "#933D50",
        "rgb": {
          "red": 147,
          "green": 61,
          "blue": 80,
        },
      },
      {
        "id": "RAL_4003",
        "hex": "#D15B8F",
        "rgb": {
          "red": 209,
          "green": 91,
          "blue": 143,
        },
      },
      {
        "id": "RAL_4004",
        "hex": "#691639",
        "rgb": {
          "red": 105,
          "green": 22,
          "blue": 57,
        },
      },
      {
        "id": "RAL_4005",
        "hex": "#83639D",
        "rgb": {
          "red": 131,
          "green": 99,
          "blue": 157,
        },
      },
      {
        "id": "RAL_4006",
        "hex": "#992572",
        "rgb": {
          "red": 153,
          "green": 37,
          "blue": 114,
        },
      },
      {
        "id": "RAL_4007",
        "hex": "#4A203B",
        "rgb": {
          "red": 74,
          "green": 32,
          "blue": 59,
        },
      },
      {
        "id": "RAL_4008",
        "hex": "#904684",
        "rgb": {
          "red": 144,
          "green": 70,
          "blue": 132,
        },
      },
      {
        "id": "RAL_4009",
        "hex": "#A38995",
        "rgb": {
          "red": 163,
          "green": 137,
          "blue": 149,
        },
      },
      {
        "id": "RAL_4010",
        "hex": "#C63678",
        "rgb": {
          "red": 198,
          "green": 54,
          "blue": 120,
        },
      },
      {
        "id": "RAL_4011",
        "hex": "#8773A1",
        "rgb": {
          "red": 135,
          "green": 115,
          "blue": 161,
        },
      },
      {
        "id": "RAL_4012",
        "hex": "#6B6880",
        "rgb": {
          "red": 107,
          "green": 104,
          "blue": 128,
        },
      },
      {
        "id": "RAL_5000",
        "hex": "#384C70",
        "rgb": {
          "red": 56,
          "green": 76,
          "blue": 112,
        },
      },
      {
        "id": "RAL_5001",
        "hex": "#1F4764",
        "rgb": {
          "red": 31,
          "green": 71,
          "blue": 100,
        },
      },
      {
        "id": "RAL_5002",
        "hex": "#2B2C7C",
        "rgb": {
          "red": 43,
          "green": 44,
          "blue": 124,
        },
      },
      {
        "id": "RAL_5003",
        "hex": "#2A3756",
        "rgb": {
          "red": 42,
          "green": 55,
          "blue": 86,
        },
      },
      {
        "id": "RAL_5004",
        "hex": "#1D1F2A",
        "rgb": {
          "red": 29,
          "green": 31,
          "blue": 42,
        },
      },
      {
        "id": "RAL_5005",
        "hex": "#154889",
        "rgb": {
          "red": 21,
          "green": 72,
          "blue": 137,
        },
      },
      {
        "id": "RAL_5007",
        "hex": "#41678D",
        "rgb": {
          "red": 65,
          "green": 103,
          "blue": 141,
        },
      },
      {
        "id": "RAL_5008",
        "hex": "#313C48",
        "rgb": {
          "red": 49,
          "green": 60,
          "blue": 72,
        },
      },
      {
        "id": "RAL_5009",
        "hex": "#2E5978",
        "rgb": {
          "red": 46,
          "green": 89,
          "blue": 120,
        },
      },
      {
        "id": "RAL_5010",
        "hex": "#13447C",
        "rgb": {
          "red": 19,
          "green": 68,
          "blue": 124,
        },
      },
      {
        "id": "RAL_5011",
        "hex": "#232C3F",
        "rgb": {
          "red": 35,
          "green": 44,
          "blue": 63,
        },
      },
      {
        "id": "RAL_5012",
        "hex": "#3481B8",
        "rgb": {
          "red": 52,
          "green": 129,
          "blue": 184,
        },
      },
      {
        "id": "RAL_5013",
        "hex": "#232D53",
        "rgb": {
          "red": 35,
          "green": 45,
          "blue": 83,
        },
      },
      {
        "id": "RAL_5014",
        "hex": "#6C7C98",
        "rgb": {
          "red": 108,
          "green": 124,
          "blue": 152,
        },
      },
      {
        "id": "RAL_5015",
        "hex": "#2874B2",
        "rgb": {
          "red": 40,
          "green": 116,
          "blue": 178,
        },
      },
      {
        "id": "RAL_5017",
        "hex": "#0E518D",
        "rgb": {
          "red": 14,
          "green": 81,
          "blue": 141,
        },
      },
      {
        "id": "RAL_5018",
        "hex": "#21888F",
        "rgb": {
          "red": 33,
          "green": 136,
          "blue": 143,
        },
      },
      {
        "id": "RAL_5019",
        "hex": "#1A5784",
        "rgb": {
          "red": 26,
          "green": 87,
          "blue": 132,
        },
      },
      {
        "id": "RAL_5020",
        "hex": "#0B4151",
        "rgb": {
          "red": 11,
          "green": 65,
          "blue": 81,
        },
      },
      {
        "id": "RAL_5021",
        "hex": "#07737A",
        "rgb": {
          "red": 7,
          "green": 115,
          "blue": 122,
        },
      },
      {
        "id": "RAL_5022",
        "hex": "#2F2A5A",
        "rgb": {
          "red": 47,
          "green": 42,
          "blue": 90,
        },
      },
      {
        "id": "RAL_5023",
        "hex": "#4D668E",
        "rgb": {
          "red": 77,
          "green": 102,
          "blue": 142,
        },
      },
      {
        "id": "RAL_5024",
        "hex": "#6A93B0",
        "rgb": {
          "red": 106,
          "green": 147,
          "blue": 176,
        },
      },
      {
        "id": "RAL_5025",
        "hex": "#296478",
        "rgb": {
          "red": 41,
          "green": 100,
          "blue": 120,
        },
      },
      {
        "id": "RAL_5026",
        "hex": "#102C54",
        "rgb": {
          "red": 16,
          "green": 44,
          "blue": 84,
        },
      },
      {
        "id": "RAL_6000",
        "hex": "#327662",
        "rgb": {
          "red": 50,
          "green": 118,
          "blue": 98,
        },
      },
      {
        "id": "RAL_6001",
        "hex": "#28713E",
        "rgb": {
          "red": 40,
          "green": 113,
          "blue": 62,
        },
      },
      {
        "id": "RAL_6002",
        "hex": "#276235",
        "rgb": {
          "red": 39,
          "green": 98,
          "blue": 53,
        },
      },
      {
        "id": "RAL_6003",
        "hex": "#4B573E",
        "rgb": {
          "red": 75,
          "green": 87,
          "blue": 62,
        },
      },
      {
        "id": "RAL_6004",
        "hex": "#0E4243",
        "rgb": {
          "red": 14,
          "green": 66,
          "blue": 67,
        },
      },
      {
        "id": "RAL_6005",
        "hex": "#0F4336",
        "rgb": {
          "red": 15,
          "green": 67,
          "blue": 54,
        },
      },
      {
        "id": "RAL_6006",
        "hex": "#40433B",
        "rgb": {
          "red": 64,
          "green": 67,
          "blue": 59,
        },
      },
      {
        "id": "RAL_6007",
        "hex": "#283424",
        "rgb": {
          "red": 40,
          "green": 52,
          "blue": 36,
        },
      },
      {
        "id": "RAL_6008",
        "hex": "#35382E",
        "rgb": {
          "red": 53,
          "green": 56,
          "blue": 46,
        },
      },
      {
        "id": "RAL_6009",
        "hex": "#26392F",
        "rgb": {
          "red": 38,
          "green": 57,
          "blue": 47,
        },
      },
      {
        "id": "RAL_6010",
        "hex": "#3E753B",
        "rgb": {
          "red": 62,
          "green": 117,
          "blue": 59,
        },
      },
      {
        "id": "RAL_6011",
        "hex": "#66825B",
        "rgb": {
          "red": 102,
          "green": 130,
          "blue": 91,
        },
      },
      {
        "id": "RAL_6012",
        "hex": "#31403D",
        "rgb": {
          "red": 49,
          "green": 64,
          "blue": 61,
        },
      },
      {
        "id": "RAL_6013",
        "hex": "#797C5A",
        "rgb": {
          "red": 121,
          "green": 124,
          "blue": 90,
        },
      },
      {
        "id": "RAL_6014",
        "hex": "#444337",
        "rgb": {
          "red": 68,
          "green": 67,
          "blue": 55,
        },
      },
      {
        "id": "RAL_6015",
        "hex": "#3D403A",
        "rgb": {
          "red": 61,
          "green": 64,
          "blue": 58,
        },
      },
      {
        "id": "RAL_6016",
        "hex": "#026A52",
        "rgb": {
          "red": 2,
          "green": 106,
          "blue": 82,
        },
      },
      {
        "id": "RAL_6017",
        "hex": "#468641",
        "rgb": {
          "red": 70,
          "green": 134,
          "blue": 65,
        },
      },
      {
        "id": "RAL_6018",
        "hex": "#48A43F",
        "rgb": {
          "red": 72,
          "green": 164,
          "blue": 63,
        },
      },
      {
        "id": "RAL_6019",
        "hex": "#B7D9B1",
        "rgb": {
          "red": 183,
          "green": 217,
          "blue": 177,
        },
      },
      {
        "id": "RAL_6020",
        "hex": "#354733",
        "rgb": {
          "red": 53,
          "green": 71,
          "blue": 51,
        },
      },
      {
        "id": "RAL_6021",
        "hex": "#86A47C",
        "rgb": {
          "red": 134,
          "green": 164,
          "blue": 124,
        },
      },
      {
        "id": "RAL_6022",
        "hex": "#3E3C32",
        "rgb": {
          "red": 62,
          "green": 60,
          "blue": 50,
        },
      },
      {
        "id": "RAL_6024",
        "hex": "#008754",
        "rgb": {
          "red": 0,
          "green": 135,
          "blue": 84,
        },
      },
      {
        "id": "RAL_6025",
        "hex": "#53753C",
        "rgb": {
          "red": 83,
          "green": 117,
          "blue": 60,
        },
      },
      {
        "id": "RAL_6026",
        "hex": "#005D52",
        "rgb": {
          "red": 0,
          "green": 93,
          "blue": 82,
        },
      },
      {
        "id": "RAL_6027",
        "hex": "#81C0BB",
        "rgb": {
          "red": 129,
          "green": 192,
          "blue": 187,
        },
      },
      {
        "id": "RAL_6028",
        "hex": "#2D5546",
        "rgb": {
          "red": 45,
          "green": 85,
          "blue": 70,
        },
      },
      {
        "id": "RAL_6029",
        "hex": "#007243",
        "rgb": {
          "red": 0,
          "green": 114,
          "blue": 67,
        },
      },
      {
        "id": "RAL_6032",
        "hex": "#0F8558",
        "rgb": {
          "red": 15,
          "green": 133,
          "blue": 88,
        },
      },
      {
        "id": "RAL_6033",
        "hex": "#478A84",
        "rgb": {
          "red": 71,
          "green": 138,
          "blue": 132,
        },
      },
      {
        "id": "RAL_6034",
        "hex": "#7FB0B2",
        "rgb": {
          "red": 127,
          "green": 176,
          "blue": 178,
        },
      },
      {
        "id": "RAL_6035",
        "hex": "#1B542C",
        "rgb": {
          "red": 27,
          "green": 84,
          "blue": 44,
        },
      },
      {
        "id": "RAL_6036",
        "hex": "#005D4C",
        "rgb": {
          "red": 0,
          "green": 93,
          "blue": 76,
        },
      },
      {
        "id": "RAL_6037",
        "hex": "#008F39",
        "rgb": {
          "red": 0,
          "green": 143,
          "blue": 57,
        },
      },
      {
        "id": "RAL_6038",
        "hex": "#00BB2E",
        "rgb": {
          "red": 0,
          "green": 187,
          "blue": 46,
        },
      },
      {
        "id": "RAL_7000",
        "hex": "#7E8B92",
        "rgb": {
          "red": 126,
          "green": 139,
          "blue": 146,
        },
      },
      {
        "id": "RAL_7001",
        "hex": "#8F999F",
        "rgb": {
          "red": 143,
          "green": 153,
          "blue": 159,
        },
      },
      {
        "id": "RAL_7002",
        "hex": "#817F68",
        "rgb": {
          "red": 129,
          "green": 127,
          "blue": 104,
        },
      },
      {
        "id": "RAL_7003",
        "hex": "#7A7B6D",
        "rgb": {
          "red": 122,
          "green": 123,
          "blue": 109,
        },
      },
      {
        "id": "RAL_7004",
        "hex": "#9EA0A1",
        "rgb": {
          "red": 158,
          "green": 160,
          "blue": 161,
        },
      },
      {
        "id": "RAL_7005",
        "hex": "#6B716F",
        "rgb": {
          "red": 107,
          "green": 113,
          "blue": 111,
        },
      },
      {
        "id": "RAL_7006",
        "hex": "#756F61",
        "rgb": {
          "red": 117,
          "green": 111,
          "blue": 97,
        },
      },
      {
        "id": "RAL_7008",
        "hex": "#746643",
        "rgb": {
          "red": 116,
          "green": 102,
          "blue": 67,
        },
      },
      {
        "id": "RAL_7009",
        "hex": "#5B6259",
        "rgb": {
          "red": 91,
          "green": 98,
          "blue": 89,
        },
      },
      {
        "id": "RAL_7010",
        "hex": "#575D57",
        "rgb": {
          "red": 87,
          "green": 93,
          "blue": 87,
        },
      },
      {
        "id": "RAL_7011",
        "hex": "#555D61",
        "rgb": {
          "red": 85,
          "green": 93,
          "blue": 97,
        },
      },
      {
        "id": "RAL_7012",
        "hex": "#596163",
        "rgb": {
          "red": 89,
          "green": 97,
          "blue": 99,
        },
      },
      {
        "id": "RAL_7013",
        "hex": "#555548",
        "rgb": {
          "red": 85,
          "green": 85,
          "blue": 72,
        },
      },
      {
        "id": "RAL_7015",
        "hex": "#51565C",
        "rgb": {
          "red": 81,
          "green": 86,
          "blue": 92,
        },
      },
      {
        "id": "RAL_7016",
        "hex": "#373F43",
        "rgb": {
          "red": 55,
          "green": 63,
          "blue": 67,
        },
      },
      {
        "id": "RAL_7021",
        "hex": "#2E3234",
        "rgb": {
          "red": 46,
          "green": 50,
          "blue": 52,
        },
      },
      {
        "id": "RAL_7022",
        "hex": "#4B4D46",
        "rgb": {
          "red": 75,
          "green": 77,
          "blue": 70,
        },
      },
      {
        "id": "RAL_7023",
        "hex": "#818479",
        "rgb": {
          "red": 129,
          "green": 132,
          "blue": 121,
        },
      },
      {
        "id": "RAL_7024",
        "hex": "#474A50",
        "rgb": {
          "red": 71,
          "green": 74,
          "blue": 80,
        },
      },
      {
        "id": "RAL_7026",
        "hex": "#374447",
        "rgb": {
          "red": 55,
          "green": 68,
          "blue": 71,
        },
      },
      {
        "id": "RAL_7030",
        "hex": "#939388",
        "rgb": {
          "red": 147,
          "green": 147,
          "blue": 136,
        },
      },
      {
        "id": "RAL_7031",
        "hex": "#5D6970",
        "rgb": {
          "red": 93,
          "green": 105,
          "blue": 112,
        },
      },
      {
        "id": "RAL_7032",
        "hex": "#B9B9A8",
        "rgb": {
          "red": 185,
          "green": 185,
          "blue": 168,
        },
      },
      {
        "id": "RAL_7033",
        "hex": "#818979",
        "rgb": {
          "red": 129,
          "green": 137,
          "blue": 121,
        },
      },
      {
        "id": "RAL_7034",
        "hex": "#939176",
        "rgb": {
          "red": 147,
          "green": 145,
          "blue": 118,
        },
      },
      {
        "id": "RAL_7035",
        "hex": "#CBD0CC",
        "rgb": {
          "red": 203,
          "green": 208,
          "blue": 204,
        },
      },
      {
        "id": "RAL_7036",
        "hex": "#9A9697",
        "rgb": {
          "red": 154,
          "green": 150,
          "blue": 151,
        },
      },
      {
        "id": "RAL_7037",
        "hex": "#7C7F7E",
        "rgb": {
          "red": 124,
          "green": 127,
          "blue": 126,
        },
      },
      {
        "id": "RAL_7038",
        "hex": "#B4B8B0",
        "rgb": {
          "red": 180,
          "green": 184,
          "blue": 176,
        },
      },
      {
        "id": "RAL_7039",
        "hex": "#6B695F",
        "rgb": {
          "red": 107,
          "green": 105,
          "blue": 95,
        },
      },
      {
        "id": "RAL_7040",
        "hex": "#9DA3A6",
        "rgb": {
          "red": 157,
          "green": 163,
          "blue": 166,
        },
      },
      {
        "id": "RAL_7042",
        "hex": "#8F9695",
        "rgb": {
          "red": 143,
          "green": 150,
          "blue": 149,
        },
      },
      {
        "id": "RAL_7043",
        "hex": "#4E5451",
        "rgb": {
          "red": 78,
          "green": 84,
          "blue": 81,
        },
      },
      {
        "id": "RAL_7044",
        "hex": "#BDBDB2",
        "rgb": {
          "red": 189,
          "green": 189,
          "blue": 178,
        },
      },
      {
        "id": "RAL_7045",
        "hex": "#91969A",
        "rgb": {
          "red": 145,
          "green": 150,
          "blue": 154,
        },
      },
      {
        "id": "RAL_7046",
        "hex": "#82898E",
        "rgb": {
          "red": 130,
          "green": 137,
          "blue": 142,
        },
      },
      {
        "id": "RAL_7047",
        "hex": "#CFD0CF",
        "rgb": {
          "red": 207,
          "green": 208,
          "blue": 207,
        },
      },
      {
        "id": "RAL_7048",
        "hex": "#888175",
        "rgb": {
          "red": 136,
          "green": 129,
          "blue": 117,
        },
      },
      {
        "id": "RAL_8000",
        "hex": "#887142",
        "rgb": {
          "red": 136,
          "green": 113,
          "blue": 66,
        },
      },
      {
        "id": "RAL_8001",
        "hex": "#9C6B30",
        "rgb": {
          "red": 156,
          "green": 107,
          "blue": 48,
        },
      },
      {
        "id": "RAL_8002",
        "hex": "#7B5141",
        "rgb": {
          "red": 123,
          "green": 81,
          "blue": 65,
        },
      },
      {
        "id": "RAL_8003",
        "hex": "#80542F",
        "rgb": {
          "red": 128,
          "green": 84,
          "blue": 47,
        },
      },
      {
        "id": "RAL_8004",
        "hex": "#8F4E35",
        "rgb": {
          "red": 143,
          "green": 78,
          "blue": 53,
        },
      },
      {
        "id": "RAL_8007",
        "hex": "#6F4A2F",
        "rgb": {
          "red": 111,
          "green": 74,
          "blue": 47,
        },
      },
      {
        "id": "RAL_8008",
        "hex": "#6F4F28",
        "rgb": {
          "red": 111,
          "green": 79,
          "blue": 40,
        },
      },
      {
        "id": "RAL_8011",
        "hex": "#5A3A29",
        "rgb": {
          "red": 90,
          "green": 58,
          "blue": 41,
        },
      },
      {
        "id": "RAL_8012",
        "hex": "#673831",
        "rgb": {
          "red": 103,
          "green": 56,
          "blue": 49,
        },
      },
      {
        "id": "RAL_8014",
        "hex": "#49392D",
        "rgb": {
          "red": 73,
          "green": 57,
          "blue": 45,
        },
      },
      {
        "id": "RAL_8015",
        "hex": "#633A34",
        "rgb": {
          "red": 99,
          "green": 58,
          "blue": 52,
        },
      },
      {
        "id": "RAL_8016",
        "hex": "#4C2F26",
        "rgb": {
          "red": 76,
          "green": 47,
          "blue": 38,
        },
      },
      {
        "id": "RAL_8017",
        "hex": "#44322D",
        "rgb": {
          "red": 68,
          "green": 50,
          "blue": 45,
        },
      },
      {
        "id": "RAL_8019",
        "hex": "#3F3A3A",
        "rgb": {
          "red": 63,
          "green": 58,
          "blue": 58,
        },
      },
      {
        "id": "RAL_8022",
        "hex": "#211F20",
        "rgb": {
          "red": 33,
          "green": 31,
          "blue": 32,
        },
      },
      {
        "id": "RAL_8023",
        "hex": "#A65E2F",
        "rgb": {
          "red": 166,
          "green": 94,
          "blue": 47,
        },
      },
      {
        "id": "RAL_8024",
        "hex": "#79553C",
        "rgb": {
          "red": 121,
          "green": 85,
          "blue": 60,
        },
      },
      {
        "id": "RAL_8025",
        "hex": "#755C49",
        "rgb": {
          "red": 117,
          "green": 92,
          "blue": 73,
        },
      },
      {
        "id": "RAL_8028",
        "hex": "#4E3B2B",
        "rgb": {
          "red": 78,
          "green": 59,
          "blue": 43,
        },
      },
      {
        "id": "RAL_8029",
        "hex": "#773C27",
        "rgb": {
          "red": 119,
          "green": 60,
          "blue": 39,
        },
      },
      {
        "id": "RAL_9001",
        "hex": "#EFEBDC",
        "rgb": {
          "red": 239,
          "green": 235,
          "blue": 220,
        },
      },
      {
        "id": "RAL_9002",
        "hex": "#DDDED4",
        "rgb": {
          "red": 221,
          "green": 222,
          "blue": 212,
        },
      },
      {
        "id": "RAL_9003",
        "hex": "#F4F8F4",
        "rgb": {
          "red": 244,
          "green": 248,
          "blue": 244,
        },
      },
      {
        "id": "RAL_9004",
        "hex": "#2E3032",
        "rgb": {
          "red": 46,
          "green": 48,
          "blue": 50,
        },
      },
      {
        "id": "RAL_9005",
        "hex": "#0A0A0D",
        "rgb": {
          "red": 10,
          "green": 10,
          "blue": 13,
        },
      },
      {
        "id": "RAL_9006",
        "hex": "#A5A8A6",
        "rgb": {
          "red": 165,
          "green": 168,
          "blue": 166,
        },
      },
      {
        "id": "RAL_9007",
        "hex": "#8F8F8C",
        "rgb": {
          "red": 143,
          "green": 143,
          "blue": 140,
        },
      },
      {
        "id": "RAL_9010",
        "hex": "#F7F9EF",
        "rgb": {
          "red": 247,
          "green": 249,
          "blue": 239,
        },
      },
      {
        "id": "RAL_9011",
        "hex": "#292C2F",
        "rgb": {
          "red": 41,
          "green": 44,
          "blue": 47,
        },
      },
      {
        "id": "RAL_9016",
        "hex": "#F7FBF5",
        "rgb": {
          "red": 247,
          "green": 251,
          "blue": 245,
        },
      },
      {
        "id": "RAL_9017",
        "hex": "#2A2D2F",
        "rgb": {
          "red": 42,
          "green": 45,
          "blue": 47,
        },
      },
      {
        "id": "RAL_9018",
        "hex": "#CFD3CD",
        "rgb": {
          "red": 207,
          "green": 211,
          "blue": 205,
        },
      },
      {
        "id": "RAL_9022",
        "hex": "#9C9C9C",
        "rgb": {
          "red": 156,
          "green": 156,
          "blue": 156,
        },
      },
      {
        "id": "RAL_9023",
        "hex": "#7E8182",
        "rgb": {
          "red": 126,
          "green": 129,
          "blue": 130,
        },
      },
    ],
    wcp: [
      {
        "id": "Woodcolor WCP-10",
        "hex": "#d5e7f2",
        "rgb": {
          "red": 213,
          "green": 231,
          "blue": 242,
        },
      },
      {
        "id": "Woodcolor WCP-100",
        "hex": "#b2d0f3",
        "rgb": {
          "red": 178,
          "green": 208,
          "blue": 243,
        },
      },
      {
        "id": "Woodcolor WCP-101",
        "hex": "#a2c5f0",
        "rgb": {
          "red": 162,
          "green": 197,
          "blue": 240,
        },
      },
      {
        "id": "Woodcolor WCP-102",
        "hex": "#a3c6f2",
        "rgb": {
          "red": 163,
          "green": 198,
          "blue": 242,
        },
      },
      {
        "id": "Woodcolor WCP-103",
        "hex": "#d3e5f6",
        "rgb": {
          "red": 211,
          "green": 229,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-104",
        "hex": "#cdddf5",
        "rgb": {
          "red": 205,
          "green": 221,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-105",
        "hex": "#cbd9f3",
        "rgb": {
          "red": 203,
          "green": 217,
          "blue": 243,
        },
      },
      {
        "id": "Woodcolor WCP-106",
        "hex": "#b9c7ec",
        "rgb": {
          "red": 185,
          "green": 199,
          "blue": 236,
        },
      },
      {
        "id": "Woodcolor WCP-107",
        "hex": "#abb4d9",
        "rgb": {
          "red": 171,
          "green": 180,
          "blue": 217,
        },
      },
      {
        "id": "Woodcolor WCP-108",
        "hex": "#9eb3e8",
        "rgb": {
          "red": 158,
          "green": 179,
          "blue": 232,
        },
      },
      {
        "id": "Woodcolor WCP-109",
        "hex": "#c8ddf7",
        "rgb": {
          "red": 200,
          "green": 221,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-11",
        "hex": "#d8e9f2",
        "rgb": {
          "red": 216,
          "green": 233,
          "blue": 242,
        },
      },
      {
        "id": "Woodcolor WCP-110",
        "hex": "#c0d4f7",
        "rgb": {
          "red": 192,
          "green": 212,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-111",
        "hex": "#b5c8e7",
        "rgb": {
          "red": 181,
          "green": 200,
          "blue": 231,
        },
      },
      {
        "id": "Woodcolor WCP-112",
        "hex": "#b2cbf7",
        "rgb": {
          "red": 178,
          "green": 203,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-113",
        "hex": "#95c0f9",
        "rgb": {
          "red": 149,
          "green": 192,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-114",
        "hex": "#95b9f9",
        "rgb": {
          "red": 149,
          "green": 185,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-115",
        "hex": "#e2eaf3",
        "rgb": {
          "red": 226,
          "green": 234,
          "blue": 243,
        },
      },
      {
        "id": "Woodcolor WCP-116",
        "hex": "#c9cfce",
        "rgb": {
          "red": 201,
          "green": 207,
          "blue": 206,
        },
      },
      {
        "id": "Woodcolor WCP-117",
        "hex": "#cec7bf",
        "rgb": {
          "red": 206,
          "green": 199,
          "blue": 191,
        },
      },
      {
        "id": "Woodcolor WCP-118",
        "hex": "#cec2c0",
        "rgb": {
          "red": 206,
          "green": 194,
          "blue": 192,
        },
      },
      {
        "id": "Woodcolor WCP-119",
        "hex": "#c8bbb4",
        "rgb": {
          "red": 200,
          "green": 187,
          "blue": 180,
        },
      },
      {
        "id": "Woodcolor WCP-12",
        "hex": "#d8e9f2",
        "rgb": {
          "red": 216,
          "green": 233,
          "blue": 242,
        },
      },
      {
        "id": "Woodcolor WCP-120",
        "hex": "#d0c8be",
        "rgb": {
          "red": 208,
          "green": 200,
          "blue": 190,
        },
      },
      {
        "id": "Woodcolor WCP-121",
        "hex": "#c6b8b0",
        "rgb": {
          "red": 198,
          "green": 184,
          "blue": 176,
        },
      },
      {
        "id": "Woodcolor WCP-122",
        "hex": "#c6b7ad",
        "rgb": {
          "red": 198,
          "green": 183,
          "blue": 173,
        },
      },
      {
        "id": "Woodcolor WCP-123",
        "hex": "#c7b9b2",
        "rgb": {
          "red": 199,
          "green": 185,
          "blue": 178,
        },
      },
      {
        "id": "Woodcolor WCP-124",
        "hex": "#cdc3bb",
        "rgb": {
          "red": 205,
          "green": 195,
          "blue": 187,
        },
      },
      {
        "id": "Woodcolor WCP-125",
        "hex": "#c9c0b9",
        "rgb": {
          "red": 201,
          "green": 192,
          "blue": 185,
        },
      },
      {
        "id": "Woodcolor WCP-126",
        "hex": "#c3bcb3",
        "rgb": {
          "red": 195,
          "green": 188,
          "blue": 179,
        },
      },
      {
        "id": "Woodcolor WCP-127",
        "hex": "#cdc2bf",
        "rgb": {
          "red": 205,
          "green": 194,
          "blue": 191,
        },
      },
      {
        "id": "Woodcolor WCP-128",
        "hex": "#c5bdb6",
        "rgb": {
          "red": 197,
          "green": 189,
          "blue": 182,
        },
      },
      {
        "id": "Woodcolor WCP-129",
        "hex": "#a0938f",
        "rgb": {
          "red": 160,
          "green": 147,
          "blue": 143,
        },
      },
      {
        "id": "Woodcolor WCP-13",
        "hex": "#dfedf3",
        "rgb": {
          "red": 223,
          "green": 237,
          "blue": 243,
        },
      },
      {
        "id": "Woodcolor WCP-130",
        "hex": "#918384",
        "rgb": {
          "red": 145,
          "green": 131,
          "blue": 132,
        },
      },
      {
        "id": "Woodcolor WCP-131",
        "hex": "#998487",
        "rgb": {
          "red": 153,
          "green": 132,
          "blue": 135,
        },
      },
      {
        "id": "Woodcolor WCP-132",
        "hex": "#847375",
        "rgb": {
          "red": 132,
          "green": 115,
          "blue": 117,
        },
      },
      {
        "id": "Woodcolor WCP-133",
        "hex": "#c0bcbc",
        "rgb": {
          "red": 192,
          "green": 188,
          "blue": 188,
        },
      },
      {
        "id": "Woodcolor WCP-134",
        "hex": "#9c9491",
        "rgb": {
          "red": 156,
          "green": 148,
          "blue": 145,
        },
      },
      {
        "id": "Woodcolor WCP-135",
        "hex": "#979093",
        "rgb": {
          "red": 151,
          "green": 144,
          "blue": 147,
        },
      },
      {
        "id": "Woodcolor WCP-136",
        "hex": "#8f8d8d",
        "rgb": {
          "red": 143,
          "green": 141,
          "blue": 141,
        },
      },
      {
        "id": "Woodcolor WCP-137",
        "hex": "#949498",
        "rgb": {
          "red": 148,
          "green": 148,
          "blue": 152,
        },
      },
      {
        "id": "Woodcolor WCP-138",
        "hex": "#968c8b",
        "rgb": {
          "red": 150,
          "green": 140,
          "blue": 139,
        },
      },
      {
        "id": "Woodcolor WCP-139",
        "hex": "#9f8f8d",
        "rgb": {
          "red": 159,
          "green": 143,
          "blue": 141,
        },
      },
      {
        "id": "Woodcolor WCP-14",
        "hex": "#e0eff2",
        "rgb": {
          "red": 224,
          "green": 239,
          "blue": 242,
        },
      },
      {
        "id": "Woodcolor WCP-140",
        "hex": "#968483",
        "rgb": {
          "red": 150,
          "green": 132,
          "blue": 131,
        },
      },
      {
        "id": "Woodcolor WCP-141",
        "hex": "#887d7e",
        "rgb": {
          "red": 136,
          "green": 125,
          "blue": 126,
        },
      },
      {
        "id": "Woodcolor WCP-142",
        "hex": "#827676",
        "rgb": {
          "red": 130,
          "green": 118,
          "blue": 118,
        },
      },
      {
        "id": "Woodcolor WCP-143",
        "hex": "#8a7877",
        "rgb": {
          "red": 138,
          "green": 120,
          "blue": 119,
        },
      },
      {
        "id": "Woodcolor WCP-144",
        "hex": "#867377",
        "rgb": {
          "red": 134,
          "green": 115,
          "blue": 119,
        },
      },
      {
        "id": "Woodcolor WCP-145",
        "hex": "#c7beba",
        "rgb": {
          "red": 199,
          "green": 190,
          "blue": 186,
        },
      },
      {
        "id": "Woodcolor WCP-146",
        "hex": "#c6c0b9",
        "rgb": {
          "red": 198,
          "green": 192,
          "blue": 185,
        },
      },
      {
        "id": "Woodcolor WCP-147",
        "hex": "#d3d1f5",
        "rgb": {
          "red": 211,
          "green": 209,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-148",
        "hex": "#bdb3cc",
        "rgb": {
          "red": 189,
          "green": 179,
          "blue": 204,
        },
      },
      {
        "id": "Woodcolor WCP-149",
        "hex": "#b09fb4",
        "rgb": {
          "red": 176,
          "green": 159,
          "blue": 180,
        },
      },
      {
        "id": "Woodcolor WCP-15",
        "hex": "#dbebf6",
        "rgb": {
          "red": 219,
          "green": 235,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-150",
        "hex": "#91768e",
        "rgb": {
          "red": 145,
          "green": 118,
          "blue": 142,
        },
      },
      {
        "id": "Woodcolor WCP-151",
        "hex": "#d7cbeb",
        "rgb": {
          "red": 215,
          "green": 203,
          "blue": 235,
        },
      },
      {
        "id": "Woodcolor WCP-152",
        "hex": "#d2b1d4",
        "rgb": {
          "red": 210,
          "green": 177,
          "blue": 212,
        },
      },
      {
        "id": "Woodcolor WCP-153",
        "hex": "#c7a6e2",
        "rgb": {
          "red": 199,
          "green": 166,
          "blue": 226,
        },
      },
      {
        "id": "Woodcolor WCP-154",
        "hex": "#ae90c4",
        "rgb": {
          "red": 174,
          "green": 144,
          "blue": 196,
        },
      },
      {
        "id": "Woodcolor WCP-155",
        "hex": "#937aa0",
        "rgb": {
          "red": 147,
          "green": 122,
          "blue": 160,
        },
      },
      {
        "id": "Woodcolor WCP-156",
        "hex": "#90729b",
        "rgb": {
          "red": 144,
          "green": 114,
          "blue": 155,
        },
      },
      {
        "id": "Woodcolor WCP-157",
        "hex": "#bfb7e7",
        "rgb": {
          "red": 191,
          "green": 183,
          "blue": 231,
        },
      },
      {
        "id": "Woodcolor WCP-158",
        "hex": "#ada3df",
        "rgb": {
          "red": 173,
          "green": 163,
          "blue": 223,
        },
      },
      {
        "id": "Woodcolor WCP-159",
        "hex": "#9184c7",
        "rgb": {
          "red": 145,
          "green": 132,
          "blue": 199,
        },
      },
      {
        "id": "Woodcolor WCP-16",
        "hex": "#dfeaf4",
        "rgb": {
          "red": 223,
          "green": 234,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-160",
        "hex": "#8c88cd",
        "rgb": {
          "red": 140,
          "green": 136,
          "blue": 205,
        },
      },
      {
        "id": "Woodcolor WCP-161",
        "hex": "#8e82b7",
        "rgb": {
          "red": 142,
          "green": 130,
          "blue": 183,
        },
      },
      {
        "id": "Woodcolor WCP-162",
        "hex": "#9385af",
        "rgb": {
          "red": 147,
          "green": 133,
          "blue": 175,
        },
      },
      {
        "id": "Woodcolor WCP-163",
        "hex": "#b1a5f8",
        "rgb": {
          "red": 177,
          "green": 165,
          "blue": 248,
        },
      },
      {
        "id": "Woodcolor WCP-164",
        "hex": "#917bd5",
        "rgb": {
          "red": 145,
          "green": 123,
          "blue": 213,
        },
      },
      {
        "id": "Woodcolor WCP-165",
        "hex": "#937ab8",
        "rgb": {
          "red": 147,
          "green": 122,
          "blue": 184,
        },
      },
      {
        "id": "Woodcolor WCP-166",
        "hex": "#8f6fc4",
        "rgb": {
          "red": 143,
          "green": 111,
          "blue": 196,
        },
      },
      {
        "id": "Woodcolor WCP-167",
        "hex": "#b890d7",
        "rgb": {
          "red": 184,
          "green": 144,
          "blue": 215,
        },
      },
      {
        "id": "Woodcolor WCP-168",
        "hex": "#a479ce",
        "rgb": {
          "red": 164,
          "green": 121,
          "blue": 206,
        },
      },
      {
        "id": "Woodcolor WCP-169",
        "hex": "#865dc5",
        "rgb": {
          "red": 134,
          "green": 93,
          "blue": 197,
        },
      },
      {
        "id": "Woodcolor WCP-17",
        "hex": "#d9e9f5",
        "rgb": {
          "red": 217,
          "green": 233,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-170",
        "hex": "#6f3cba",
        "rgb": {
          "red": 111,
          "green": 60,
          "blue": 186,
        },
      },
      {
        "id": "Woodcolor WCP-171",
        "hex": "#4e3c93",
        "rgb": {
          "red": 78,
          "green": 60,
          "blue": 147,
        },
      },
      {
        "id": "Woodcolor WCP-172",
        "hex": "#c5b7f9",
        "rgb": {
          "red": 197,
          "green": 183,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-173",
        "hex": "#b99ff4",
        "rgb": {
          "red": 185,
          "green": 159,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-174",
        "hex": "#b9aae9",
        "rgb": {
          "red": 185,
          "green": 170,
          "blue": 233,
        },
      },
      {
        "id": "Woodcolor WCP-175",
        "hex": "#c7e2f7",
        "rgb": {
          "red": 199,
          "green": 226,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-176",
        "hex": "#cfd9ea",
        "rgb": {
          "red": 207,
          "green": 217,
          "blue": 234,
        },
      },
      {
        "id": "Woodcolor WCP-177",
        "hex": "#cacff6",
        "rgb": {
          "red": 202,
          "green": 207,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-178",
        "hex": "#b2c1f6",
        "rgb": {
          "red": 178,
          "green": 193,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-179",
        "hex": "#a38bf6",
        "rgb": {
          "red": 163,
          "green": 139,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-18",
        "hex": "#d3e5f6",
        "rgb": {
          "red": 211,
          "green": 229,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-180",
        "hex": "#8e70f0",
        "rgb": {
          "red": 142,
          "green": 112,
          "blue": 240,
        },
      },
      {
        "id": "Woodcolor WCP-181",
        "hex": "#d1bee7",
        "rgb": {
          "red": 209,
          "green": 190,
          "blue": 231,
        },
      },
      {
        "id": "Woodcolor WCP-182",
        "hex": "#bd9de4",
        "rgb": {
          "red": 189,
          "green": 157,
          "blue": 228,
        },
      },
      {
        "id": "Woodcolor WCP-183",
        "hex": "#b185b3",
        "rgb": {
          "red": 177,
          "green": 133,
          "blue": 179,
        },
      },
      {
        "id": "Woodcolor WCP-184",
        "hex": "#8961a6",
        "rgb": {
          "red": 137,
          "green": 97,
          "blue": 166,
        },
      },
      {
        "id": "Woodcolor WCP-185",
        "hex": "#603f7b",
        "rgb": {
          "red": 96,
          "green": 63,
          "blue": 123,
        },
      },
      {
        "id": "Woodcolor WCP-186",
        "hex": "#543d6c",
        "rgb": {
          "red": 84,
          "green": 61,
          "blue": 108,
        },
      },
      {
        "id": "Woodcolor WCP-187",
        "hex": "#716ff0",
        "rgb": {
          "red": 113,
          "green": 111,
          "blue": 240,
        },
      },
      {
        "id": "Woodcolor WCP-188",
        "hex": "#422bc4",
        "rgb": {
          "red": 66,
          "green": 43,
          "blue": 196,
        },
      },
      {
        "id": "Woodcolor WCP-189",
        "hex": "#3c2fca",
        "rgb": {
          "red": 60,
          "green": 47,
          "blue": 202,
        },
      },
      {
        "id": "Woodcolor WCP-19",
        "hex": "#cce4f5",
        "rgb": {
          "red": 204,
          "green": 228,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-190",
        "hex": "#3d2ec1",
        "rgb": {
          "red": 61,
          "green": 46,
          "blue": 193,
        },
      },
      {
        "id": "Woodcolor WCP-191",
        "hex": "#3f31b3",
        "rgb": {
          "red": 63,
          "green": 49,
          "blue": 179,
        },
      },
      {
        "id": "Woodcolor WCP-192",
        "hex": "#4439a2",
        "rgb": {
          "red": 68,
          "green": 57,
          "blue": 162,
        },
      },
      {
        "id": "Woodcolor WCP-193",
        "hex": "#3d32c8",
        "rgb": {
          "red": 61,
          "green": 50,
          "blue": 200,
        },
      },
      {
        "id": "Woodcolor WCP-194",
        "hex": "#4234b5",
        "rgb": {
          "red": 66,
          "green": 52,
          "blue": 181,
        },
      },
      {
        "id": "Woodcolor WCP-195",
        "hex": "#463b7e",
        "rgb": {
          "red": 70,
          "green": 59,
          "blue": 126,
        },
      },
      {
        "id": "Woodcolor WCP-196",
        "hex": "#3f385a",
        "rgb": {
          "red": 63,
          "green": 56,
          "blue": 90,
        },
      },
      {
        "id": "Woodcolor WCP-197",
        "hex": "#454183",
        "rgb": {
          "red": 69,
          "green": 65,
          "blue": 131,
        },
      },
      {
        "id": "Woodcolor WCP-198",
        "hex": "#3f3968",
        "rgb": {
          "red": 63,
          "green": 57,
          "blue": 104,
        },
      },
      {
        "id": "Woodcolor WCP-199",
        "hex": "#c5f0f9",
        "rgb": {
          "red": 197,
          "green": 240,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-20",
        "hex": "#cde3ef",
        "rgb": {
          "red": 205,
          "green": 227,
          "blue": 239,
        },
      },
      {
        "id": "Woodcolor WCP-200",
        "hex": "#c9f3f7",
        "rgb": {
          "red": 201,
          "green": 243,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-201",
        "hex": "#575feb",
        "rgb": {
          "red": 87,
          "green": 95,
          "blue": 235,
        },
      },
      {
        "id": "Woodcolor WCP-202",
        "hex": "#3c44e2",
        "rgb": {
          "red": 60,
          "green": 68,
          "blue": 226,
        },
      },
      {
        "id": "Woodcolor WCP-203",
        "hex": "#423be0",
        "rgb": {
          "red": 66,
          "green": 59,
          "blue": 224,
        },
      },
      {
        "id": "Woodcolor WCP-204",
        "hex": "#3b4aec",
        "rgb": {
          "red": 59,
          "green": 74,
          "blue": 236,
        },
      },
      {
        "id": "Woodcolor WCP-205",
        "hex": "#6aecff",
        "rgb": {
          "red": 106,
          "green": 236,
          "blue": 255,
        },
      },
      {
        "id": "Woodcolor WCP-206",
        "hex": "#25e7ff",
        "rgb": {
          "red": 37,
          "green": 231,
          "blue": 255,
        },
      },
      {
        "id": "Woodcolor WCP-207",
        "hex": "#2abdff",
        "rgb": {
          "red": 42,
          "green": 189,
          "blue": 255,
        },
      },
      {
        "id": "Woodcolor WCP-208",
        "hex": "#07b7ff",
        "rgb": {
          "red": 7,
          "green": 183,
          "blue": 255,
        },
      },
      {
        "id": "Woodcolor WCP-209",
        "hex": "#5baaec",
        "rgb": {
          "red": 91,
          "green": 170,
          "blue": 236,
        },
      },
      {
        "id": "Woodcolor WCP-21",
        "hex": "#d3e1e9",
        "rgb": {
          "red": 211,
          "green": 225,
          "blue": 233,
        },
      },
      {
        "id": "Woodcolor WCP-210",
        "hex": "#5098d6",
        "rgb": {
          "red": 80,
          "green": 152,
          "blue": 214,
        },
      },
      {
        "id": "Woodcolor WCP-211",
        "hex": "#689ed7",
        "rgb": {
          "red": 104,
          "green": 158,
          "blue": 215,
        },
      },
      {
        "id": "Woodcolor WCP-212",
        "hex": "#6e90cf",
        "rgb": {
          "red": 110,
          "green": 144,
          "blue": 207,
        },
      },
      {
        "id": "Woodcolor WCP-213",
        "hex": "#5884c1",
        "rgb": {
          "red": 88,
          "green": 132,
          "blue": 193,
        },
      },
      {
        "id": "Woodcolor WCP-214",
        "hex": "#4b72b1",
        "rgb": {
          "red": 75,
          "green": 114,
          "blue": 177,
        },
      },
      {
        "id": "Woodcolor WCP-215",
        "hex": "#4f79bc",
        "rgb": {
          "red": 79,
          "green": 121,
          "blue": 188,
        },
      },
      {
        "id": "Woodcolor WCP-216",
        "hex": "#4b5596",
        "rgb": {
          "red": 75,
          "green": 85,
          "blue": 150,
        },
      },
      {
        "id": "Woodcolor WCP-217",
        "hex": "#7796ba",
        "rgb": {
          "red": 119,
          "green": 150,
          "blue": 186,
        },
      },
      {
        "id": "Woodcolor WCP-218",
        "hex": "#6e82a6",
        "rgb": {
          "red": 110,
          "green": 130,
          "blue": 166,
        },
      },
      {
        "id": "Woodcolor WCP-219",
        "hex": "#607184",
        "rgb": {
          "red": 96,
          "green": 113,
          "blue": 132,
        },
      },
      {
        "id": "Woodcolor WCP-22",
        "hex": "#c9d2d2",
        "rgb": {
          "red": 201,
          "green": 210,
          "blue": 210,
        },
      },
      {
        "id": "Woodcolor WCP-220",
        "hex": "#485a7b",
        "rgb": {
          "red": 72,
          "green": 90,
          "blue": 123,
        },
      },
      {
        "id": "Woodcolor WCP-221",
        "hex": "#524f66",
        "rgb": {
          "red": 82,
          "green": 79,
          "blue": 102,
        },
      },
      {
        "id": "Woodcolor WCP-222",
        "hex": "#433c44",
        "rgb": {
          "red": 67,
          "green": 60,
          "blue": 68,
        },
      },
      {
        "id": "Woodcolor WCP-223",
        "hex": "#586485",
        "rgb": {
          "red": 88,
          "green": 100,
          "blue": 133,
        },
      },
      {
        "id": "Woodcolor WCP-224",
        "hex": "#484764",
        "rgb": {
          "red": 72,
          "green": 71,
          "blue": 100,
        },
      },
      {
        "id": "Woodcolor WCP-225",
        "hex": "#454464",
        "rgb": {
          "red": 69,
          "green": 68,
          "blue": 100,
        },
      },
      {
        "id": "Woodcolor WCP-226",
        "hex": "#45435d",
        "rgb": {
          "red": 69,
          "green": 67,
          "blue": 93,
        },
      },
      {
        "id": "Woodcolor WCP-227",
        "hex": "#453e4f",
        "rgb": {
          "red": 69,
          "green": 62,
          "blue": 79,
        },
      },
      {
        "id": "Woodcolor WCP-228",
        "hex": "#433a44",
        "rgb": {
          "red": 67,
          "green": 58,
          "blue": 68,
        },
      },
      {
        "id": "Woodcolor WCP-229",
        "hex": "#5976b5",
        "rgb": {
          "red": 89,
          "green": 118,
          "blue": 181,
        },
      },
      {
        "id": "Woodcolor WCP-23",
        "hex": "#dceef5",
        "rgb": {
          "red": 220,
          "green": 238,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-230",
        "hex": "#475fba",
        "rgb": {
          "red": 71,
          "green": 95,
          "blue": 186,
        },
      },
      {
        "id": "Woodcolor WCP-231",
        "hex": "#4f519c",
        "rgb": {
          "red": 79,
          "green": 81,
          "blue": 156,
        },
      },
      {
        "id": "Woodcolor WCP-232",
        "hex": "#4c458c",
        "rgb": {
          "red": 76,
          "green": 69,
          "blue": 140,
        },
      },
      {
        "id": "Woodcolor WCP-233",
        "hex": "#48436e",
        "rgb": {
          "red": 72,
          "green": 67,
          "blue": 110,
        },
      },
      {
        "id": "Woodcolor WCP-234",
        "hex": "#4b3e4d",
        "rgb": {
          "red": 75,
          "green": 62,
          "blue": 77,
        },
      },
      {
        "id": "Woodcolor WCP-235",
        "hex": "#cde0dd",
        "rgb": {
          "red": 205,
          "green": 224,
          "blue": 221,
        },
      },
      {
        "id": "Woodcolor WCP-236",
        "hex": "#bde2c8",
        "rgb": {
          "red": 189,
          "green": 226,
          "blue": 200,
        },
      },
      {
        "id": "Woodcolor WCP-237",
        "hex": "#c1e1be",
        "rgb": {
          "red": 193,
          "green": 225,
          "blue": 190,
        },
      },
      {
        "id": "Woodcolor WCP-238",
        "hex": "#bfd4b3",
        "rgb": {
          "red": 191,
          "green": 212,
          "blue": 179,
        },
      },
      {
        "id": "Woodcolor WCP-239",
        "hex": "#d3ddb0",
        "rgb": {
          "red": 211,
          "green": 221,
          "blue": 176,
        },
      },
      {
        "id": "Woodcolor WCP-24",
        "hex": "#d8ebf6",
        "rgb": {
          "red": 216,
          "green": 235,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-240",
        "hex": "#d9e494",
        "rgb": {
          "red": 217,
          "green": 228,
          "blue": 148,
        },
      },
      {
        "id": "Woodcolor WCP-241",
        "hex": "#bcd3be",
        "rgb": {
          "red": 188,
          "green": 211,
          "blue": 190,
        },
      },
      {
        "id": "Woodcolor WCP-242",
        "hex": "#c8dcb6",
        "rgb": {
          "red": 200,
          "green": 220,
          "blue": 182,
        },
      },
      {
        "id": "Woodcolor WCP-243",
        "hex": "#cce7b2",
        "rgb": {
          "red": 204,
          "green": 231,
          "blue": 178,
        },
      },
      {
        "id": "Woodcolor WCP-244",
        "hex": "#bfdfa5",
        "rgb": {
          "red": 191,
          "green": 223,
          "blue": 165,
        },
      },
      {
        "id": "Woodcolor WCP-245",
        "hex": "#c8ddb0",
        "rgb": {
          "red": 200,
          "green": 221,
          "blue": 176,
        },
      },
      {
        "id": "Woodcolor WCP-246",
        "hex": "#cfdfa9",
        "rgb": {
          "red": 207,
          "green": 223,
          "blue": 169,
        },
      },
      {
        "id": "Woodcolor WCP-247",
        "hex": "#d8ebba",
        "rgb": {
          "red": 216,
          "green": 235,
          "blue": 186,
        },
      },
      {
        "id": "Woodcolor WCP-248",
        "hex": "#d3e1b5",
        "rgb": {
          "red": 211,
          "green": 225,
          "blue": 181,
        },
      },
      {
        "id": "Woodcolor WCP-249",
        "hex": "#cedb7b",
        "rgb": {
          "red": 206,
          "green": 219,
          "blue": 123,
        },
      },
      {
        "id": "Woodcolor WCP-25",
        "hex": "#dce8f4",
        "rgb": {
          "red": 220,
          "green": 232,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-250",
        "hex": "#c5d56a",
        "rgb": {
          "red": 197,
          "green": 213,
          "blue": 106,
        },
      },
      {
        "id": "Woodcolor WCP-251",
        "hex": "#c0cb74",
        "rgb": {
          "red": 192,
          "green": 203,
          "blue": 116,
        },
      },
      {
        "id": "Woodcolor WCP-252",
        "hex": "#b9cf80",
        "rgb": {
          "red": 185,
          "green": 207,
          "blue": 128,
        },
      },
      {
        "id": "Woodcolor WCP-253",
        "hex": "#d5e2aa",
        "rgb": {
          "red": 213,
          "green": 226,
          "blue": 170,
        },
      },
      {
        "id": "Woodcolor WCP-254",
        "hex": "#d7e9a4",
        "rgb": {
          "red": 215,
          "green": 233,
          "blue": 164,
        },
      },
      {
        "id": "Woodcolor WCP-255",
        "hex": "#cce59c",
        "rgb": {
          "red": 204,
          "green": 229,
          "blue": 156,
        },
      },
      {
        "id": "Woodcolor WCP-256",
        "hex": "#c1d56d",
        "rgb": {
          "red": 193,
          "green": 213,
          "blue": 109,
        },
      },
      {
        "id": "Woodcolor WCP-257",
        "hex": "#a8bb42",
        "rgb": {
          "red": 168,
          "green": 187,
          "blue": 66,
        },
      },
      {
        "id": "Woodcolor WCP-258",
        "hex": "#96aa19",
        "rgb": {
          "red": 150,
          "green": 170,
          "blue": 25,
        },
      },
      {
        "id": "Woodcolor WCP-259",
        "hex": "#468350",
        "rgb": {
          "red": 70,
          "green": 131,
          "blue": 80,
        },
      },
      {
        "id": "Woodcolor WCP-26",
        "hex": "#d2e5f4",
        "rgb": {
          "red": 210,
          "green": 229,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-260",
        "hex": "#486c4e",
        "rgb": {
          "red": 72,
          "green": 108,
          "blue": 78,
        },
      },
      {
        "id": "Woodcolor WCP-261",
        "hex": "#486646",
        "rgb": {
          "red": 72,
          "green": 102,
          "blue": 70,
        },
      },
      {
        "id": "Woodcolor WCP-262",
        "hex": "#435245",
        "rgb": {
          "red": 67,
          "green": 82,
          "blue": 69,
        },
      },
      {
        "id": "Woodcolor WCP-263",
        "hex": "#403c3e",
        "rgb": {
          "red": 64,
          "green": 60,
          "blue": 62,
        },
      },
      {
        "id": "Woodcolor WCP-264",
        "hex": "#484140",
        "rgb": {
          "red": 72,
          "green": 65,
          "blue": 64,
        },
      },
      {
        "id": "Woodcolor WCP-265",
        "hex": "#588a36",
        "rgb": {
          "red": 88,
          "green": 138,
          "blue": 54,
        },
      },
      {
        "id": "Woodcolor WCP-266",
        "hex": "#5a7b3b",
        "rgb": {
          "red": 90,
          "green": 123,
          "blue": 59,
        },
      },
      {
        "id": "Woodcolor WCP-267",
        "hex": "#51683d",
        "rgb": {
          "red": 81,
          "green": 104,
          "blue": 61,
        },
      },
      {
        "id": "Woodcolor WCP-268",
        "hex": "#575745",
        "rgb": {
          "red": 87,
          "green": 87,
          "blue": 69,
        },
      },
      {
        "id": "Woodcolor WCP-269",
        "hex": "#6c653f",
        "rgb": {
          "red": 108,
          "green": 101,
          "blue": 63,
        },
      },
      {
        "id": "Woodcolor WCP-27",
        "hex": "#c7dcf7",
        "rgb": {
          "red": 199,
          "green": 220,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-270",
        "hex": "#7d772d",
        "rgb": {
          "red": 125,
          "green": 119,
          "blue": 45,
        },
      },
      {
        "id": "Woodcolor WCP-271",
        "hex": "#dfc184",
        "rgb": {
          "red": 223,
          "green": 193,
          "blue": 132,
        },
      },
      {
        "id": "Woodcolor WCP-272",
        "hex": "#d6b896",
        "rgb": {
          "red": 214,
          "green": 184,
          "blue": 150,
        },
      },
      {
        "id": "Woodcolor WCP-273",
        "hex": "#e4b868",
        "rgb": {
          "red": 228,
          "green": 184,
          "blue": 104,
        },
      },
      {
        "id": "Woodcolor WCP-274",
        "hex": "#dcb364",
        "rgb": {
          "red": 220,
          "green": 179,
          "blue": 100,
        },
      },
      {
        "id": "Woodcolor WCP-275",
        "hex": "#d8b65e",
        "rgb": {
          "red": 216,
          "green": 182,
          "blue": 94,
        },
      },
      {
        "id": "Woodcolor WCP-276",
        "hex": "#d7b260",
        "rgb": {
          "red": 215,
          "green": 178,
          "blue": 96,
        },
      },
      {
        "id": "Woodcolor WCP-277",
        "hex": "#e4d5a2",
        "rgb": {
          "red": 228,
          "green": 213,
          "blue": 162,
        },
      },
      {
        "id": "Woodcolor WCP-278",
        "hex": "#e5c890",
        "rgb": {
          "red": 229,
          "green": 200,
          "blue": 144,
        },
      },
      {
        "id": "Woodcolor WCP-279",
        "hex": "#e4bf6f",
        "rgb": {
          "red": 228,
          "green": 191,
          "blue": 111,
        },
      },
      {
        "id": "Woodcolor WCP-28",
        "hex": "#c2d8f3",
        "rgb": {
          "red": 194,
          "green": 216,
          "blue": 243,
        },
      },
      {
        "id": "Woodcolor WCP-280",
        "hex": "#dbb86d",
        "rgb": {
          "red": 219,
          "green": 184,
          "blue": 109,
        },
      },
      {
        "id": "Woodcolor WCP-281",
        "hex": "#deb151",
        "rgb": {
          "red": 222,
          "green": 177,
          "blue": 81,
        },
      },
      {
        "id": "Woodcolor WCP-283",
        "hex": "#dad079",
        "rgb": {
          "red": 218,
          "green": 208,
          "blue": 121,
        },
      },
      {
        "id": "Woodcolor WCP-284",
        "hex": "#d1d597",
        "rgb": {
          "red": 209,
          "green": 213,
          "blue": 151,
        },
      },
      {
        "id": "Woodcolor WCP-285",
        "hex": "#bcb07c",
        "rgb": {
          "red": 188,
          "green": 176,
          "blue": 124,
        },
      },
      {
        "id": "Woodcolor WCP-286",
        "hex": "#cab462",
        "rgb": {
          "red": 202,
          "green": 180,
          "blue": 98,
        },
      },
      {
        "id": "Woodcolor WCP-287",
        "hex": "#74643e",
        "rgb": {
          "red": 116,
          "green": 100,
          "blue": 62,
        },
      },
      {
        "id": "Woodcolor WCP-288",
        "hex": "#705c44",
        "rgb": {
          "red": 112,
          "green": 92,
          "blue": 68,
        },
      },
      {
        "id": "Woodcolor WCP-289",
        "hex": "#cfa277",
        "rgb": {
          "red": 207,
          "green": 162,
          "blue": 119,
        },
      },
      {
        "id": "Woodcolor WCP-29",
        "hex": "#b9d0e6",
        "rgb": {
          "red": 185,
          "green": 208,
          "blue": 230,
        },
      },
      {
        "id": "Woodcolor WCP-290",
        "hex": "#cfa776",
        "rgb": {
          "red": 207,
          "green": 167,
          "blue": 118,
        },
      },
      {
        "id": "Woodcolor WCP-291",
        "hex": "#794b43",
        "rgb": {
          "red": 121,
          "green": 75,
          "blue": 67,
        },
      },
      {
        "id": "Woodcolor WCP-292",
        "hex": "#663e3f",
        "rgb": {
          "red": 102,
          "green": 62,
          "blue": 63,
        },
      },
      {
        "id": "Woodcolor WCP-293",
        "hex": "#45373d",
        "rgb": {
          "red": 69,
          "green": 55,
          "blue": 61,
        },
      },
      {
        "id": "Woodcolor WCP-294",
        "hex": "#ddc9aa",
        "rgb": {
          "red": 221,
          "green": 201,
          "blue": 170,
        },
      },
      {
        "id": "Woodcolor WCP-295",
        "hex": "#544343",
        "rgb": {
          "red": 84,
          "green": 67,
          "blue": 67,
        },
      },
      {
        "id": "Woodcolor WCP-296",
        "hex": "#d28f35",
        "rgb": {
          "red": 210,
          "green": 143,
          "blue": 53,
        },
      },
      {
        "id": "Woodcolor WCP-297",
        "hex": "#c47d22",
        "rgb": {
          "red": 196,
          "green": 125,
          "blue": 34,
        },
      },
      {
        "id": "Woodcolor WCP-298",
        "hex": "#894a3f",
        "rgb": {
          "red": 137,
          "green": 74,
          "blue": 63,
        },
      },
      {
        "id": "Woodcolor WCP-299",
        "hex": "#7b403c",
        "rgb": {
          "red": 123,
          "green": 64,
          "blue": 60,
        },
      },
      {
        "id": "Woodcolor WCP-30",
        "hex": "#a8bcdb",
        "rgb": {
          "red": 168,
          "green": 188,
          "blue": 219,
        },
      },
      {
        "id": "Woodcolor WCP-300",
        "hex": "#43363d",
        "rgb": {
          "red": 67,
          "green": 54,
          "blue": 61,
        },
      },
      {
        "id": "Woodcolor WCP-31",
        "hex": "#c4e3f5",
        "rgb": {
          "red": 196,
          "green": 227,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-32",
        "hex": "#bcdce9",
        "rgb": {
          "red": 188,
          "green": 220,
          "blue": 233,
        },
      },
      {
        "id": "Woodcolor WCP-33",
        "hex": "#c8eff7",
        "rgb": {
          "red": 200,
          "green": 239,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-34",
        "hex": "#b7ddef",
        "rgb": {
          "red": 183,
          "green": 221,
          "blue": 239,
        },
      },
      {
        "id": "Woodcolor WCP-35",
        "hex": "#acd3df",
        "rgb": {
          "red": 172,
          "green": 211,
          "blue": 223,
        },
      },
      {
        "id": "Woodcolor WCP-36",
        "hex": "#aad0d4",
        "rgb": {
          "red": 170,
          "green": 208,
          "blue": 212,
        },
      },
      {
        "id": "Woodcolor WCP-37",
        "hex": "#b7d2e8",
        "rgb": {
          "red": 183,
          "green": 210,
          "blue": 232,
        },
      },
      {
        "id": "Woodcolor WCP-38",
        "hex": "#b0cfe5",
        "rgb": {
          "red": 176,
          "green": 207,
          "blue": 229,
        },
      },
      {
        "id": "Woodcolor WCP-39",
        "hex": "#aecae3",
        "rgb": {
          "red": 174,
          "green": 202,
          "blue": 227,
        },
      },
      {
        "id": "Woodcolor WCP-40",
        "hex": "#adc8d8",
        "rgb": {
          "red": 173,
          "green": 200,
          "blue": 216,
        },
      },
      {
        "id": "Woodcolor WCP-41",
        "hex": "#accad9",
        "rgb": {
          "red": 172,
          "green": 202,
          "blue": 217,
        },
      },
      {
        "id": "Woodcolor WCP-42",
        "hex": "#afcad9",
        "rgb": {
          "red": 175,
          "green": 202,
          "blue": 217,
        },
      },
      {
        "id": "Woodcolor WCP-43",
        "hex": "#ddeff4",
        "rgb": {
          "red": 221,
          "green": 239,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-44",
        "hex": "#dfeff5",
        "rgb": {
          "red": 223,
          "green": 239,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-45",
        "hex": "#d3e6ec",
        "rgb": {
          "red": 211,
          "green": 230,
          "blue": 236,
        },
      },
      {
        "id": "Woodcolor WCP-46",
        "hex": "#d2eaed",
        "rgb": {
          "red": 210,
          "green": 234,
          "blue": 237,
        },
      },
      {
        "id": "Woodcolor WCP-47",
        "hex": "#b7d6d9",
        "rgb": {
          "red": 183,
          "green": 214,
          "blue": 217,
        },
      },
      {
        "id": "Woodcolor WCP-48",
        "hex": "#abc8d7",
        "rgb": {
          "red": 171,
          "green": 200,
          "blue": 215,
        },
      },
      {
        "id": "Woodcolor WCP-49",
        "hex": "#c6e8f8",
        "rgb": {
          "red": 198,
          "green": 232,
          "blue": 248,
        },
      },
      {
        "id": "Woodcolor WCP-50",
        "hex": "#c0e7f8",
        "rgb": {
          "red": 192,
          "green": 231,
          "blue": 248,
        },
      },
      {
        "id": "Woodcolor WCP-51",
        "hex": "#b4e4fa",
        "rgb": {
          "red": 180,
          "green": 228,
          "blue": 250,
        },
      },
      {
        "id": "Woodcolor WCP-52",
        "hex": "#b1e1f9",
        "rgb": {
          "red": 177,
          "green": 225,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-53",
        "hex": "#aad5f5",
        "rgb": {
          "red": 170,
          "green": 213,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-54",
        "hex": "#a0d0f7",
        "rgb": {
          "red": 160,
          "green": 208,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-55",
        "hex": "#aae0fb",
        "rgb": {
          "red": 170,
          "green": 224,
          "blue": 251,
        },
      },
      {
        "id": "Woodcolor WCP-56",
        "hex": "#acdefa",
        "rgb": {
          "red": 172,
          "green": 222,
          "blue": 250,
        },
      },
      {
        "id": "Woodcolor WCP-57",
        "hex": "#9ad1f6",
        "rgb": {
          "red": 154,
          "green": 209,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-58",
        "hex": "#a7cded",
        "rgb": {
          "red": 167,
          "green": 205,
          "blue": 237,
        },
      },
      {
        "id": "Woodcolor WCP-59",
        "hex": "#a2c6e0",
        "rgb": {
          "red": 162,
          "green": 198,
          "blue": 224,
        },
      },
      {
        "id": "Woodcolor WCP-60",
        "hex": "#9ec0de",
        "rgb": {
          "red": 158,
          "green": 192,
          "blue": 222,
        },
      },
      {
        "id": "Woodcolor WCP-61",
        "hex": "#c3dff4",
        "rgb": {
          "red": 195,
          "green": 223,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-62",
        "hex": "#bdd7f6",
        "rgb": {
          "red": 189,
          "green": 215,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-63",
        "hex": "#b3d9f9",
        "rgb": {
          "red": 179,
          "green": 217,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-64",
        "hex": "#bcd8f8",
        "rgb": {
          "red": 188,
          "green": 216,
          "blue": 248,
        },
      },
      {
        "id": "Woodcolor WCP-65",
        "hex": "#a4c1e3",
        "rgb": {
          "red": 164,
          "green": 193,
          "blue": 227,
        },
      },
      {
        "id": "Woodcolor WCP-66",
        "hex": "#9bb5dc",
        "rgb": {
          "red": 155,
          "green": 181,
          "blue": 220,
        },
      },
      {
        "id": "Woodcolor WCP-67",
        "hex": "#c8d9ee",
        "rgb": {
          "red": 200,
          "green": 217,
          "blue": 238,
        },
      },
      {
        "id": "Woodcolor WCP-68",
        "hex": "#adbdd1",
        "rgb": {
          "red": 173,
          "green": 189,
          "blue": 209,
        },
      },
      {
        "id": "Woodcolor WCP-69",
        "hex": "#9fb7ce",
        "rgb": {
          "red": 159,
          "green": 183,
          "blue": 206,
        },
      },
      {
        "id": "Woodcolor WCP-7",
        "hex": "#d5e4f4",
        "rgb": {
          "red": 213,
          "green": 228,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-70",
        "hex": "#95b1ca",
        "rgb": {
          "red": 149,
          "green": 177,
          "blue": 202,
        },
      },
      {
        "id": "Woodcolor WCP-71",
        "hex": "#90a4c3",
        "rgb": {
          "red": 144,
          "green": 164,
          "blue": 195,
        },
      },
      {
        "id": "Woodcolor WCP-72",
        "hex": "#88a1c9",
        "rgb": {
          "red": 136,
          "green": 161,
          "blue": 201,
        },
      },
      {
        "id": "Woodcolor WCP-73",
        "hex": "#9dd5fc",
        "rgb": {
          "red": 157,
          "green": 213,
          "blue": 252,
        },
      },
      {
        "id": "Woodcolor WCP-74",
        "hex": "#9acaf1",
        "rgb": {
          "red": 154,
          "green": 202,
          "blue": 241,
        },
      },
      {
        "id": "Woodcolor WCP-75",
        "hex": "#9bc5e6",
        "rgb": {
          "red": 155,
          "green": 197,
          "blue": 230,
        },
      },
      {
        "id": "Woodcolor WCP-76",
        "hex": "#99c2e9",
        "rgb": {
          "red": 153,
          "green": 194,
          "blue": 233,
        },
      },
      {
        "id": "Woodcolor WCP-77",
        "hex": "#8cb8dd",
        "rgb": {
          "red": 140,
          "green": 184,
          "blue": 221,
        },
      },
      {
        "id": "Woodcolor WCP-78",
        "hex": "#85aedb",
        "rgb": {
          "red": 133,
          "green": 174,
          "blue": 219,
        },
      },
      {
        "id": "Woodcolor WCP-79",
        "hex": "#cfe4f6",
        "rgb": {
          "red": 207,
          "green": 228,
          "blue": 246,
        },
      },
      {
        "id": "Woodcolor WCP-8",
        "hex": "#d6e9f1",
        "rgb": {
          "red": 214,
          "green": 233,
          "blue": 241,
        },
      },
      {
        "id": "Woodcolor WCP-80",
        "hex": "#c3e0f8",
        "rgb": {
          "red": 195,
          "green": 224,
          "blue": 248,
        },
      },
      {
        "id": "Woodcolor WCP-81",
        "hex": "#b4dbf9",
        "rgb": {
          "red": 180,
          "green": 219,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-82",
        "hex": "#b9d5ee",
        "rgb": {
          "red": 185,
          "green": 213,
          "blue": 238,
        },
      },
      {
        "id": "Woodcolor WCP-83",
        "hex": "#c6d0e1",
        "rgb": {
          "red": 198,
          "green": 208,
          "blue": 225,
        },
      },
      {
        "id": "Woodcolor WCP-84",
        "hex": "#99caf9",
        "rgb": {
          "red": 153,
          "green": 202,
          "blue": 249,
        },
      },
      {
        "id": "Woodcolor WCP-85",
        "hex": "#badef8",
        "rgb": {
          "red": 186,
          "green": 222,
          "blue": 248,
        },
      },
      {
        "id": "Woodcolor WCP-86",
        "hex": "#94ddfd",
        "rgb": {
          "red": 148,
          "green": 221,
          "blue": 253,
        },
      },
      {
        "id": "Woodcolor WCP-87",
        "hex": "#9ad9fb",
        "rgb": {
          "red": 154,
          "green": 217,
          "blue": 251,
        },
      },
      {
        "id": "Woodcolor WCP-88",
        "hex": "#a8d4f4",
        "rgb": {
          "red": 168,
          "green": 212,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-89",
        "hex": "#80b6e4",
        "rgb": {
          "red": 128,
          "green": 182,
          "blue": 228,
        },
      },
      {
        "id": "Woodcolor WCP-9",
        "hex": "#d6e7f4",
        "rgb": {
          "red": 214,
          "green": 231,
          "blue": 244,
        },
      },
      {
        "id": "Woodcolor WCP-90",
        "hex": "#76b4e7",
        "rgb": {
          "red": 118,
          "green": 180,
          "blue": 231,
        },
      },
      {
        "id": "Woodcolor WCP-91",
        "hex": "#abddf3",
        "rgb": {
          "red": 171,
          "green": 221,
          "blue": 243,
        },
      },
      {
        "id": "Woodcolor WCP-92",
        "hex": "#95c2d7",
        "rgb": {
          "red": 149,
          "green": 194,
          "blue": 215,
        },
      },
      {
        "id": "Woodcolor WCP-93",
        "hex": "#7ca8bc",
        "rgb": {
          "red": 124,
          "green": 168,
          "blue": 188,
        },
      },
      {
        "id": "Woodcolor WCP-94",
        "hex": "#80a0c1",
        "rgb": {
          "red": 128,
          "green": 160,
          "blue": 193,
        },
      },
      {
        "id": "Woodcolor WCP-95",
        "hex": "#5089b6",
        "rgb": {
          "red": 80,
          "green": 137,
          "blue": 182,
        },
      },
      {
        "id": "Woodcolor WCP-96",
        "hex": "#447390",
        "rgb": {
          "red": 68,
          "green": 115,
          "blue": 144,
        },
      },
      {
        "id": "Woodcolor WCP-97",
        "hex": "#bfdaf5",
        "rgb": {
          "red": 191,
          "green": 218,
          "blue": 245,
        },
      },
      {
        "id": "Woodcolor WCP-98",
        "hex": "#b4d9f7",
        "rgb": {
          "red": 180,
          "green": 217,
          "blue": 247,
        },
      },
      {
        "id": "Woodcolor WCP-99",
        "hex": "#afd1f1",
        "rgb": {
          "red": 175,
          "green": 209,
          "blue": 241,
        },
      },
      {
        "id": "Woodcolor WCP282",
        "hex": "#d7a24c",
        "rgb": {
          "red": 215,
          "green": 162,
          "blue": 76,
        },
      },
    ],
    ncs: [
      {
        "id": "NCS S 0300-N",
        "hex": "#FFFFFF",
        "rgb": {
          "red": 255,
          "green": 255,
          "blue": 255,
        },
      },
      {
        "id": "NCS S 0500-N",
        "hex": "#FCFCFB",
        "rgb": {
          "red": 252,
          "green": 252,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 1000-N",
        "hex": "#F2F2F0",
        "rgb": {
          "red": 242,
          "green": 242,
          "blue": 240,
        },
      },
      {
        "id": "NCS S 1500-N",
        "hex": "#E0DFDE",
        "rgb": {
          "red": 224,
          "green": 223,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 2000-N",
        "hex": "#D8D8D7",
        "rgb": {
          "red": 216,
          "green": 216,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 2500-N",
        "hex": "#CECDCC",
        "rgb": {
          "red": 206,
          "green": 205,
          "blue": 204,
        },
      },
      {
        "id": "NCS S 3000-N",
        "hex": "#C0BFBE",
        "rgb": {
          "red": 192,
          "green": 191,
          "blue": 190,
        },
      },
      {
        "id": "NCS S 3500-N",
        "hex": "#B0B0AF",
        "rgb": {
          "red": 176,
          "green": 176,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 4000-N",
        "hex": "#A5A5A4",
        "rgb": {
          "red": 165,
          "green": 165,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 4500-N",
        "hex": "#979796",
        "rgb": {
          "red": 151,
          "green": 151,
          "blue": 150,
        },
      },
      {
        "id": "NCS S 5000-N",
        "hex": "#8E8E8D",
        "rgb": {
          "red": 142,
          "green": 142,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 5500-N",
        "hex": "#858583",
        "rgb": {
          "red": 133,
          "green": 133,
          "blue": 131,
        },
      },
      {
        "id": "NCS S 6000-N",
        "hex": "#7A7977",
        "rgb": {
          "red": 122,
          "green": 121,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 6500-N",
        "hex": "#6D6D6B",
        "rgb": {
          "red": 109,
          "green": 109,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 7000-N",
        "hex": "#60605E",
        "rgb": {
          "red": 96,
          "green": 96,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 7500-N",
        "hex": "#545452",
        "rgb": {
          "red": 84,
          "green": 84,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 8000-N",
        "hex": "#434241",
        "rgb": {
          "red": 67,
          "green": 66,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 8500-N",
        "hex": "#262824",
        "rgb": {
          "red": 38,
          "green": 40,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 9000-N",
        "hex": "#111410",
        "rgb": {
          "red": 17,
          "green": 20,
          "blue": 16,
        },
      },
      {
        "id": "NCS S 0502-Y",
        "hex": "#FFFDF2",
        "rgb": {
          "red": 255,
          "green": 253,
          "blue": 242,
        },
      },
      {
        "id": "NCS S 1002-Y",
        "hex": "#EAE8DB",
        "rgb": {
          "red": 234,
          "green": 232,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 1502-Y",
        "hex": "#D5D3C7",
        "rgb": {
          "red": 213,
          "green": 211,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2002-Y",
        "hex": "#C9C8BD",
        "rgb": {
          "red": 201,
          "green": 200,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 2502-Y",
        "hex": "#B8B7AD",
        "rgb": {
          "red": 184,
          "green": 183,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 3502-Y",
        "hex": "#9A9B92",
        "rgb": {
          "red": 154,
          "green": 155,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 4502-Y",
        "hex": "#86867E",
        "rgb": {
          "red": 134,
          "green": 134,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 5502-Y",
        "hex": "#6D6D66",
        "rgb": {
          "red": 109,
          "green": 109,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 6502-Y",
        "hex": "#55554F",
        "rgb": {
          "red": 85,
          "green": 85,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 7502-Y",
        "hex": "#353430",
        "rgb": {
          "red": 53,
          "green": 52,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 8502-Y",
        "hex": "#151311",
        "rgb": {
          "red": 21,
          "green": 19,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 0502-Y50R",
        "hex": "#FFFAED",
        "rgb": {
          "red": 255,
          "green": 250,
          "blue": 237,
        },
      },
      {
        "id": "NCS S 1002-Y50R",
        "hex": "#F0E9DD",
        "rgb": {
          "red": 240,
          "green": 233,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 1502-Y50R",
        "hex": "#DAD4CA",
        "rgb": {
          "red": 218,
          "green": 212,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 2002-Y50R",
        "hex": "#C8C1B9",
        "rgb": {
          "red": 200,
          "green": 193,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 0502-R",
        "hex": "#FFFBF8",
        "rgb": {
          "red": 255,
          "green": 251,
          "blue": 248,
        },
      },
      {
        "id": "NCS S 1002-R",
        "hex": "#E9E4DF",
        "rgb": {
          "red": 233,
          "green": 228,
          "blue": 223,
        },
      },
      {
        "id": "NCS S 1502-R",
        "hex": "#D4CFCC",
        "rgb": {
          "red": 212,
          "green": 207,
          "blue": 204,
        },
      },
      {
        "id": "NCS S 2002-R",
        "hex": "#C3BEBC",
        "rgb": {
          "red": 195,
          "green": 190,
          "blue": 188,
        },
      },
      {
        "id": "NCS S 2502-R",
        "hex": "#B9B4B2",
        "rgb": {
          "red": 185,
          "green": 180,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 3502-R",
        "hex": "#918D8D",
        "rgb": {
          "red": 145,
          "green": 141,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 4502-R",
        "hex": "#7A7776",
        "rgb": {
          "red": 122,
          "green": 119,
          "blue": 118,
        },
      },
      {
        "id": "NCS S 5502-R",
        "hex": "#6C6965",
        "rgb": {
          "red": 108,
          "green": 105,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 6502-R",
        "hex": "#54504D",
        "rgb": {
          "red": 84,
          "green": 80,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 7502-R",
        "hex": "#2F2C2A",
        "rgb": {
          "red": 47,
          "green": 44,
          "blue": 42,
        },
      },
      {
        "id": "NCS S 8502-R",
        "hex": "#161212",
        "rgb": {
          "red": 22,
          "green": 18,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 0502-R50B",
        "hex": "#FCFBFD",
        "rgb": {
          "red": 252,
          "green": 251,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 1002-R50B",
        "hex": "#E1E2E5",
        "rgb": {
          "red": 225,
          "green": 226,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 1502-R50B",
        "hex": "#D1D1D6",
        "rgb": {
          "red": 209,
          "green": 209,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 2002-R50B",
        "hex": "#BCBDC2",
        "rgb": {
          "red": 188,
          "green": 189,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 0502-B",
        "hex": "#FAFDFF",
        "rgb": {
          "red": 250,
          "green": 253,
          "blue": 255,
        },
      },
      {
        "id": "NCS S 1002-B",
        "hex": "#E3E8EA",
        "rgb": {
          "red": 227,
          "green": 232,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 1502-B",
        "hex": "#D2D7DA",
        "rgb": {
          "red": 210,
          "green": 215,
          "blue": 218,
        },
      },
      {
        "id": "NCS S 2002-B",
        "hex": "#BFC4C7",
        "rgb": {
          "red": 191,
          "green": 196,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2502-B",
        "hex": "#AEB3B6",
        "rgb": {
          "red": 174,
          "green": 179,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 3502-B",
        "hex": "#8D9194",
        "rgb": {
          "red": 141,
          "green": 145,
          "blue": 148,
        },
      },
      {
        "id": "NCS S 4502-B",
        "hex": "#767A7C",
        "rgb": {
          "red": 118,
          "green": 122,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 5502-B",
        "hex": "#5B5F61",
        "rgb": {
          "red": 91,
          "green": 95,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 6502-B",
        "hex": "#434749",
        "rgb": {
          "red": 67,
          "green": 71,
          "blue": 73,
        },
      },
      {
        "id": "NCS S 7502-B",
        "hex": "#292D2F",
        "rgb": {
          "red": 41,
          "green": 45,
          "blue": 47,
        },
      },
      {
        "id": "NCS S 8502-B",
        "hex": "#091115",
        "rgb": {
          "red": 9,
          "green": 17,
          "blue": 21,
        },
      },
      {
        "id": "NCS S 0502-B50G",
        "hex": "#FAFDF8",
        "rgb": {
          "red": 250,
          "green": 253,
          "blue": 248,
        },
      },
      {
        "id": "NCS S 1002-B50G",
        "hex": "#E7EBE6",
        "rgb": {
          "red": 231,
          "green": 235,
          "blue": 230,
        },
      },
      {
        "id": "NCS S 1502-B50G",
        "hex": "#CBD3D0",
        "rgb": {
          "red": 203,
          "green": 211,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 2002-B50G",
        "hex": "#B6BFBD",
        "rgb": {
          "red": 182,
          "green": 191,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 0502-G",
        "hex": "#FAFDF7",
        "rgb": {
          "red": 250,
          "green": 253,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 1002-G",
        "hex": "#EBF0E7",
        "rgb": {
          "red": 235,
          "green": 240,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 1502-G",
        "hex": "#D6DBD3",
        "rgb": {
          "red": 214,
          "green": 219,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 2002-G",
        "hex": "#C1C6BF",
        "rgb": {
          "red": 193,
          "green": 198,
          "blue": 191,
        },
      },
      {
        "id": "NCS S 2502-G",
        "hex": "#B0B5B0",
        "rgb": {
          "red": 176,
          "green": 181,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 3502-G",
        "hex": "#919692",
        "rgb": {
          "red": 145,
          "green": 150,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 4502-G",
        "hex": "#808481",
        "rgb": {
          "red": 128,
          "green": 132,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 5502-G",
        "hex": "#5C5F5C",
        "rgb": {
          "red": 92,
          "green": 95,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 6502-G",
        "hex": "#464845",
        "rgb": {
          "red": 70,
          "green": 72,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 7502-G",
        "hex": "#2B2E2C",
        "rgb": {
          "red": 43,
          "green": 46,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 8502-G",
        "hex": "#131411",
        "rgb": {
          "red": 19,
          "green": 20,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 0502-G50Y",
        "hex": "#FCFDF7",
        "rgb": {
          "red": 252,
          "green": 253,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 1002-G50Y",
        "hex": "#F0F2EB",
        "rgb": {
          "red": 240,
          "green": 242,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 1502-G50Y",
        "hex": "#DADCD0",
        "rgb": {
          "red": 218,
          "green": 220,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 2002-G50Y",
        "hex": "#C4C7BD",
        "rgb": {
          "red": 196,
          "green": 199,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 0505-Y",
        "hex": "#FFFBE7",
        "rgb": {
          "red": 255,
          "green": 251,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0507-Y",
        "hex": "#FFF9D6",
        "rgb": {
          "red": 255,
          "green": 249,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 0510-Y",
        "hex": "#FFF8CA",
        "rgb": {
          "red": 255,
          "green": 248,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 0515-Y",
        "hex": "#FFF6BE",
        "rgb": {
          "red": 255,
          "green": 246,
          "blue": 190,
        },
      },
      {
        "id": "NCS S 0520-Y",
        "hex": "#FFEEA7",
        "rgb": {
          "red": 255,
          "green": 238,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 0530-Y",
        "hex": "#FFEB92",
        "rgb": {
          "red": 255,
          "green": 235,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 0540-Y",
        "hex": "#FEE66B",
        "rgb": {
          "red": 254,
          "green": 230,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 0550-Y",
        "hex": "#FDDD4E",
        "rgb": {
          "red": 253,
          "green": 221,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 0560-Y",
        "hex": "#FDD72C",
        "rgb": {
          "red": 253,
          "green": 215,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 0570-Y",
        "hex": "#FAD500",
        "rgb": {
          "red": 250,
          "green": 213,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0580-Y",
        "hex": "#F9CF00",
        "rgb": {
          "red": 249,
          "green": 207,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1005-Y",
        "hex": "#F5F0D3",
        "rgb": {
          "red": 245,
          "green": 240,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1010-Y",
        "hex": "#F4EAB5",
        "rgb": {
          "red": 244,
          "green": 234,
          "blue": 181,
        },
      },
      {
        "id": "NCS S 1015-Y",
        "hex": "#F6E9B0",
        "rgb": {
          "red": 246,
          "green": 233,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 1020-Y",
        "hex": "#F4E5A3",
        "rgb": {
          "red": 244,
          "green": 229,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 1030-Y",
        "hex": "#F6DE8A",
        "rgb": {
          "red": 246,
          "green": 222,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 1040-Y",
        "hex": "#F9DD80",
        "rgb": {
          "red": 249,
          "green": 221,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 1050-Y",
        "hex": "#FED74C",
        "rgb": {
          "red": 254,
          "green": 215,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 1060-Y",
        "hex": "#FCD32B",
        "rgb": {
          "red": 252,
          "green": 211,
          "blue": 43,
        },
      },
      {
        "id": "NCS S 1070-Y",
        "hex": "#F7CA27",
        "rgb": {
          "red": 247,
          "green": 202,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 1080-Y",
        "hex": "#ECBC00",
        "rgb": {
          "red": 236,
          "green": 188,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y",
        "hex": "#E5DFC4",
        "rgb": {
          "red": 229,
          "green": 223,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 1510-Y",
        "hex": "#DED5A5",
        "rgb": {
          "red": 222,
          "green": 213,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 1515-Y",
        "hex": "#DDD19A",
        "rgb": {
          "red": 221,
          "green": 209,
          "blue": 154,
        },
      },
      {
        "id": "NCS S 2005-Y",
        "hex": "#C8C4AD",
        "rgb": {
          "red": 200,
          "green": 196,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 2010-Y",
        "hex": "#C6BE9E",
        "rgb": {
          "red": 198,
          "green": 190,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 2020-Y",
        "hex": "#C8BB86",
        "rgb": {
          "red": 200,
          "green": 187,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 2030-Y",
        "hex": "#CDB867",
        "rgb": {
          "red": 205,
          "green": 184,
          "blue": 103,
        },
      },
      {
        "id": "NCS S 2040-Y",
        "hex": "#D0B353",
        "rgb": {
          "red": 208,
          "green": 179,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 2050-Y",
        "hex": "#CEA926",
        "rgb": {
          "red": 206,
          "green": 169,
          "blue": 38,
        },
      },
      {
        "id": "NCS S 2060-Y",
        "hex": "#C7A300",
        "rgb": {
          "red": 199,
          "green": 163,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2070-Y",
        "hex": "#C19F00",
        "rgb": {
          "red": 193,
          "green": 159,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-Y",
        "hex": "#AFA580",
        "rgb": {
          "red": 175,
          "green": 165,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 3020-Y",
        "hex": "#B1A16D",
        "rgb": {
          "red": 177,
          "green": 161,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 3030-Y",
        "hex": "#AF9B58",
        "rgb": {
          "red": 175,
          "green": 155,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 3040-Y",
        "hex": "#A88A36",
        "rgb": {
          "red": 168,
          "green": 138,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 3050-Y",
        "hex": "#9C7A19",
        "rgb": {
          "red": 156,
          "green": 122,
          "blue": 25,
        },
      },
      {
        "id": "NCS S 3060-Y",
        "hex": "#9C7900",
        "rgb": {
          "red": 156,
          "green": 121,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-Y",
        "hex": "#987400",
        "rgb": {
          "red": 152,
          "green": 116,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4020-Y",
        "hex": "#907E47",
        "rgb": {
          "red": 144,
          "green": 126,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 4030-Y",
        "hex": "#93792E",
        "rgb": {
          "red": 147,
          "green": 121,
          "blue": 46,
        },
      },
      {
        "id": "NCS S 4040-Y",
        "hex": "#8B6E13",
        "rgb": {
          "red": 139,
          "green": 110,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 4050-Y",
        "hex": "#866800",
        "rgb": {
          "red": 134,
          "green": 104,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4550-Y",
        "hex": "#816300",
        "rgb": {
          "red": 129,
          "green": 99,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5020-Y",
        "hex": "#746438",
        "rgb": {
          "red": 116,
          "green": 100,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 5030-Y",
        "hex": "#765B14",
        "rgb": {
          "red": 118,
          "green": 91,
          "blue": 20,
        },
      },
      {
        "id": "NCS S 5040-Y",
        "hex": "#6A4F00",
        "rgb": {
          "red": 106,
          "green": 79,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6020-Y",
        "hex": "#624F2C",
        "rgb": {
          "red": 98,
          "green": 79,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 6030-Y",
        "hex": "#3E3000",
        "rgb": {
          "red": 62,
          "green": 48,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 7020-Y",
        "hex": "#433212",
        "rgb": {
          "red": 67,
          "green": 50,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 0505-Y10R",
        "hex": "#FFF9E5",
        "rgb": {
          "red": 255,
          "green": 249,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 0510-Y10R",
        "hex": "#FFF4C8",
        "rgb": {
          "red": 255,
          "green": 244,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 0515-Y10R",
        "hex": "#FFEFB3",
        "rgb": {
          "red": 255,
          "green": 239,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 0520-Y10R",
        "hex": "#FFEBA5",
        "rgb": {
          "red": 255,
          "green": 235,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 0530-Y10R",
        "hex": "#FFE292",
        "rgb": {
          "red": 255,
          "green": 226,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 0540-Y10R",
        "hex": "#FFDC7A",
        "rgb": {
          "red": 255,
          "green": 220,
          "blue": 122,
        },
      },
      {
        "id": "NCS S 0550-Y10R",
        "hex": "#FFD562",
        "rgb": {
          "red": 255,
          "green": 213,
          "blue": 98,
        },
      },
      {
        "id": "NCS S 0560-Y10R",
        "hex": "#FDC336",
        "rgb": {
          "red": 253,
          "green": 195,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 0570-Y10R",
        "hex": "#FBBB22",
        "rgb": {
          "red": 251,
          "green": 187,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 0580-Y10R",
        "hex": "#F8AF00",
        "rgb": {
          "red": 248,
          "green": 175,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0804-Y10R",
        "hex": "#FDF9EF",
        "rgb": {
          "red": 253,
          "green": 249,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0907-Y10R",
        "hex": "#F9EECB",
        "rgb": {
          "red": 249,
          "green": 238,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 1005-Y10R",
        "hex": "#F3EACE",
        "rgb": {
          "red": 243,
          "green": 234,
          "blue": 206,
        },
      },
      {
        "id": "NCS S 1010-Y10R",
        "hex": "#F3E5B4",
        "rgb": {
          "red": 243,
          "green": 229,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 1015-Y10R",
        "hex": "#F2E0A8",
        "rgb": {
          "red": 242,
          "green": 224,
          "blue": 168,
        },
      },
      {
        "id": "NCS S 1020-Y10R",
        "hex": "#F5E09F",
        "rgb": {
          "red": 245,
          "green": 224,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 1030-Y10R",
        "hex": "#FADB8A",
        "rgb": {
          "red": 250,
          "green": 219,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 1040-Y10R",
        "hex": "#FFD566",
        "rgb": {
          "red": 255,
          "green": 213,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 1050-Y10R",
        "hex": "#FFCD4E",
        "rgb": {
          "red": 255,
          "green": 205,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 1060-Y10R",
        "hex": "#FBC028",
        "rgb": {
          "red": 251,
          "green": 192,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 1070-Y10R",
        "hex": "#F9BC00",
        "rgb": {
          "red": 249,
          "green": 188,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1080-Y10R",
        "hex": "#F8B500",
        "rgb": {
          "red": 248,
          "green": 181,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y10R",
        "hex": "#DED4B4",
        "rgb": {
          "red": 222,
          "green": 212,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 1510-Y10R",
        "hex": "#E8DBAB",
        "rgb": {
          "red": 232,
          "green": 219,
          "blue": 171,
        },
      },
      {
        "id": "NCS S 1515-Y10R",
        "hex": "#E7D59F",
        "rgb": {
          "red": 231,
          "green": 213,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 2005-Y10R",
        "hex": "#CBC1A5",
        "rgb": {
          "red": 203,
          "green": 193,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 2010-Y10R",
        "hex": "#C8BD97",
        "rgb": {
          "red": 200,
          "green": 189,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 2020-Y10R",
        "hex": "#D2BB7D",
        "rgb": {
          "red": 210,
          "green": 187,
          "blue": 125,
        },
      },
      {
        "id": "NCS S 2030-Y10R",
        "hex": "#D8B364",
        "rgb": {
          "red": 216,
          "green": 179,
          "blue": 100,
        },
      },
      {
        "id": "NCS S 2040-Y10R",
        "hex": "#E1AF55",
        "rgb": {
          "red": 225,
          "green": 175,
          "blue": 85,
        },
      },
      {
        "id": "NCS S 2050-Y10R",
        "hex": "#DEA73D",
        "rgb": {
          "red": 222,
          "green": 167,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 2060-Y10R",
        "hex": "#D19518",
        "rgb": {
          "red": 209,
          "green": 149,
          "blue": 24,
        },
      },
      {
        "id": "NCS S 2070-Y10R",
        "hex": "#E19D00",
        "rgb": {
          "red": 225,
          "green": 157,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-Y10R",
        "hex": "#A79973",
        "rgb": {
          "red": 167,
          "green": 153,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 3020-Y10R",
        "hex": "#B69F6B",
        "rgb": {
          "red": 182,
          "green": 159,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 3030-Y10R",
        "hex": "#B49653",
        "rgb": {
          "red": 180,
          "green": 150,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 3040-Y10R",
        "hex": "#B08538",
        "rgb": {
          "red": 176,
          "green": 133,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 3050-Y10R",
        "hex": "#AF7812",
        "rgb": {
          "red": 175,
          "green": 120,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 3060-Y10R",
        "hex": "#B57E00",
        "rgb": {
          "red": 181,
          "green": 126,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4010-Y10R",
        "hex": "#968560",
        "rgb": {
          "red": 150,
          "green": 133,
          "blue": 96,
        },
      },
      {
        "id": "NCS S 4020-Y10R",
        "hex": "#927645",
        "rgb": {
          "red": 146,
          "green": 118,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 4030-Y10R",
        "hex": "#9C7736",
        "rgb": {
          "red": 156,
          "green": 119,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 4040-Y10R",
        "hex": "#916623",
        "rgb": {
          "red": 145,
          "green": 102,
          "blue": 35,
        },
      },
      {
        "id": "NCS S 4050-Y10R",
        "hex": "#915C00",
        "rgb": {
          "red": 145,
          "green": 92,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4055-Y10R",
        "hex": "#955F00",
        "rgb": {
          "red": 149,
          "green": 95,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5010-Y10R",
        "hex": "#75684A",
        "rgb": {
          "red": 117,
          "green": 104,
          "blue": 74,
        },
      },
      {
        "id": "NCS S 5020-Y10R",
        "hex": "#7F623A",
        "rgb": {
          "red": 127,
          "green": 98,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 5030-Y10R",
        "hex": "#825F2B",
        "rgb": {
          "red": 130,
          "green": 95,
          "blue": 43,
        },
      },
      {
        "id": "NCS S 5040-Y10R",
        "hex": "#714702",
        "rgb": {
          "red": 113,
          "green": 71,
          "blue": 2,
        },
      },
      {
        "id": "NCS S 6010-Y10R",
        "hex": "#6A5A41",
        "rgb": {
          "red": 106,
          "green": 90,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 6020-Y10R",
        "hex": "#725330",
        "rgb": {
          "red": 114,
          "green": 83,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 6030-Y10R",
        "hex": "#53330B",
        "rgb": {
          "red": 83,
          "green": 51,
          "blue": 11,
        },
      },
      {
        "id": "NCS S 7010-Y10R",
        "hex": "#5A4833",
        "rgb": {
          "red": 90,
          "green": 72,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 7020-Y10R",
        "hex": "#442900",
        "rgb": {
          "red": 68,
          "green": 41,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 8010-Y10R",
        "hex": "#2E2112",
        "rgb": {
          "red": 46,
          "green": 33,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 0505-Y20R",
        "hex": "#FFF8E1",
        "rgb": {
          "red": 255,
          "green": 248,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0507-Y20R",
        "hex": "#FFF5D3",
        "rgb": {
          "red": 255,
          "green": 245,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 0510-Y20R",
        "hex": "#FFF0BD",
        "rgb": {
          "red": 255,
          "green": 240,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 0515-Y20R",
        "hex": "#FFEAB1",
        "rgb": {
          "red": 255,
          "green": 234,
          "blue": 177,
        },
      },
      {
        "id": "NCS S 0520-Y20R",
        "hex": "#FFE4A3",
        "rgb": {
          "red": 255,
          "green": 228,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 0530-Y20R",
        "hex": "#FFD17A",
        "rgb": {
          "red": 255,
          "green": 209,
          "blue": 122,
        },
      },
      {
        "id": "NCS S 0540-Y20R",
        "hex": "#FFC05F",
        "rgb": {
          "red": 255,
          "green": 192,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 0550-Y20R",
        "hex": "#FBB343",
        "rgb": {
          "red": 251,
          "green": 179,
          "blue": 67,
        },
      },
      {
        "id": "NCS S 0560-Y20R",
        "hex": "#F8A622",
        "rgb": {
          "red": 248,
          "green": 166,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 0570-Y20R",
        "hex": "#F49A0A",
        "rgb": {
          "red": 244,
          "green": 154,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 0580-Y20R",
        "hex": "#F49A00",
        "rgb": {
          "red": 244,
          "green": 154,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0585-Y20R",
        "hex": "#F49900",
        "rgb": {
          "red": 244,
          "green": 153,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0603-Y20R",
        "hex": "#FFFAEA",
        "rgb": {
          "red": 255,
          "green": 250,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 1005-Y20R",
        "hex": "#F4EACC",
        "rgb": {
          "red": 244,
          "green": 234,
          "blue": 204,
        },
      },
      {
        "id": "NCS S 1010-Y20R",
        "hex": "#F4E7BD",
        "rgb": {
          "red": 244,
          "green": 231,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 1015-Y20R",
        "hex": "#FFE7AF",
        "rgb": {
          "red": 255,
          "green": 231,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 1020-Y20R",
        "hex": "#FFDE9F",
        "rgb": {
          "red": 255,
          "green": 222,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 1030-Y20R",
        "hex": "#FFCB78",
        "rgb": {
          "red": 255,
          "green": 203,
          "blue": 120,
        },
      },
      {
        "id": "NCS S 1040-Y20R",
        "hex": "#FFC05E",
        "rgb": {
          "red": 255,
          "green": 192,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 1050-Y20R",
        "hex": "#FAAC42",
        "rgb": {
          "red": 250,
          "green": 172,
          "blue": 66,
        },
      },
      {
        "id": "NCS S 1060-Y20R",
        "hex": "#F8A722",
        "rgb": {
          "red": 248,
          "green": 167,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 1070-Y20R",
        "hex": "#F5A300",
        "rgb": {
          "red": 245,
          "green": 163,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1080-Y20R",
        "hex": "#F49900",
        "rgb": {
          "red": 244,
          "green": 153,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y20R",
        "hex": "#E4D9B9",
        "rgb": {
          "red": 228,
          "green": 217,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 1510-Y20R",
        "hex": "#E7D4A8",
        "rgb": {
          "red": 231,
          "green": 212,
          "blue": 168,
        },
      },
      {
        "id": "NCS S 1515-Y20R",
        "hex": "#E7CF9C",
        "rgb": {
          "red": 231,
          "green": 207,
          "blue": 156,
        },
      },
      {
        "id": "NCS S 2005-Y20R",
        "hex": "#D4C9AD",
        "rgb": {
          "red": 212,
          "green": 201,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 2010-Y20R",
        "hex": "#C9B892",
        "rgb": {
          "red": 201,
          "green": 184,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 2020-Y20R",
        "hex": "#D6B47A",
        "rgb": {
          "red": 214,
          "green": 180,
          "blue": 122,
        },
      },
      {
        "id": "NCS S 2030-Y20R",
        "hex": "#D6A965",
        "rgb": {
          "red": 214,
          "green": 169,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 2040-Y20R",
        "hex": "#EBAB57",
        "rgb": {
          "red": 235,
          "green": 171,
          "blue": 87,
        },
      },
      {
        "id": "NCS S 2050-Y20R",
        "hex": "#DB993D",
        "rgb": {
          "red": 219,
          "green": 153,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 2060-Y20R",
        "hex": "#D78921",
        "rgb": {
          "red": 215,
          "green": 137,
          "blue": 33,
        },
      },
      {
        "id": "NCS S 2070-Y20R",
        "hex": "#DD8300",
        "rgb": {
          "red": 221,
          "green": 131,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3005-Y20R",
        "hex": "#A49B81",
        "rgb": {
          "red": 164,
          "green": 155,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 3010-Y20R",
        "hex": "#A69371",
        "rgb": {
          "red": 166,
          "green": 147,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 3020-Y20R",
        "hex": "#B59668",
        "rgb": {
          "red": 181,
          "green": 150,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 3030-Y20R",
        "hex": "#B0884F",
        "rgb": {
          "red": 176,
          "green": 136,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 3040-Y20R",
        "hex": "#AD7730",
        "rgb": {
          "red": 173,
          "green": 119,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 3050-Y20R",
        "hex": "#B27014",
        "rgb": {
          "red": 178,
          "green": 112,
          "blue": 20,
        },
      },
      {
        "id": "NCS S 3060-Y20R",
        "hex": "#AF6600",
        "rgb": {
          "red": 175,
          "green": 102,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3065-Y20R",
        "hex": "#B36500",
        "rgb": {
          "red": 179,
          "green": 101,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-Y20R",
        "hex": "#A45D00",
        "rgb": {
          "red": 164,
          "green": 93,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4005-Y20R",
        "hex": "#8E846F",
        "rgb": {
          "red": 142,
          "green": 132,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 4020-Y20R",
        "hex": "#957345",
        "rgb": {
          "red": 149,
          "green": 115,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 4030-Y20R",
        "hex": "#9A6D37",
        "rgb": {
          "red": 154,
          "green": 109,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 4040-Y20R",
        "hex": "#8F5E22",
        "rgb": {
          "red": 143,
          "green": 94,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 4050-Y20R",
        "hex": "#8F4B00",
        "rgb": {
          "red": 143,
          "green": 75,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5005-Y20R",
        "hex": "#776D5C",
        "rgb": {
          "red": 119,
          "green": 109,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 5020-Y20R",
        "hex": "#7D5C38",
        "rgb": {
          "red": 125,
          "green": 92,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 5030-Y20R",
        "hex": "#8B602E",
        "rgb": {
          "red": 139,
          "green": 96,
          "blue": 46,
        },
      },
      {
        "id": "NCS S 5040-Y20R",
        "hex": "#7B4710",
        "rgb": {
          "red": 123,
          "green": 71,
          "blue": 16,
        },
      },
      {
        "id": "NCS S 6005-Y20R",
        "hex": "#5F5648",
        "rgb": {
          "red": 95,
          "green": 86,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 6020-Y20R",
        "hex": "#714824",
        "rgb": {
          "red": 113,
          "green": 72,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 6030-Y20R",
        "hex": "#592F0F",
        "rgb": {
          "red": 89,
          "green": 47,
          "blue": 15,
        },
      },
      {
        "id": "NCS S 7005-Y20R",
        "hex": "#3C352B",
        "rgb": {
          "red": 60,
          "green": 53,
          "blue": 43,
        },
      },
      {
        "id": "NCS S 7020-Y20R",
        "hex": "#4E3013",
        "rgb": {
          "red": 78,
          "green": 48,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 8005-Y20R",
        "hex": "#30281D",
        "rgb": {
          "red": 48,
          "green": 40,
          "blue": 29,
        },
      },
      {
        "id": "NCS S 8505-Y20R",
        "hex": "#2F2317",
        "rgb": {
          "red": 47,
          "green": 35,
          "blue": 23,
        },
      },
      {
        "id": "NCS S 0505-Y30R",
        "hex": "#FFF5DC",
        "rgb": {
          "red": 255,
          "green": 245,
          "blue": 220,
        },
      },
      {
        "id": "NCS S 0510-Y30R",
        "hex": "#FFEFC6",
        "rgb": {
          "red": 255,
          "green": 239,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 0515-Y30R",
        "hex": "#FFE1AA",
        "rgb": {
          "red": 255,
          "green": 225,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 0520-Y30R",
        "hex": "#FFD89E",
        "rgb": {
          "red": 255,
          "green": 216,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 0530-Y30R",
        "hex": "#FFCE90",
        "rgb": {
          "red": 255,
          "green": 206,
          "blue": 144,
        },
      },
      {
        "id": "NCS S 0540-Y30R",
        "hex": "#FEB25F",
        "rgb": {
          "red": 254,
          "green": 178,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 0550-Y30R",
        "hex": "#F7993B",
        "rgb": {
          "red": 247,
          "green": 153,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 0560-Y30R",
        "hex": "#F4941E",
        "rgb": {
          "red": 244,
          "green": 148,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 0570-Y30R",
        "hex": "#F38F1B",
        "rgb": {
          "red": 243,
          "green": 143,
          "blue": 27,
        },
      },
      {
        "id": "NCS S 0580-Y30R",
        "hex": "#F08400",
        "rgb": {
          "red": 240,
          "green": 132,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0585-Y30R",
        "hex": "#F07E00",
        "rgb": {
          "red": 240,
          "green": 126,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0804-Y30R",
        "hex": "#FFF6E2",
        "rgb": {
          "red": 255,
          "green": 246,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 0907-Y30R",
        "hex": "#F9ECD2",
        "rgb": {
          "red": 249,
          "green": 236,
          "blue": 210,
        },
      },
      {
        "id": "NCS S 1005-Y30R",
        "hex": "#F5EBD6",
        "rgb": {
          "red": 245,
          "green": 235,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 1010-Y30R",
        "hex": "#FBE4B6",
        "rgb": {
          "red": 251,
          "green": 228,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 1015-Y30R",
        "hex": "#FFE0AE",
        "rgb": {
          "red": 255,
          "green": 224,
          "blue": 174,
        },
      },
      {
        "id": "NCS S 1020-Y30R",
        "hex": "#FFD69F",
        "rgb": {
          "red": 255,
          "green": 214,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 1030-Y30R",
        "hex": "#FFCB8A",
        "rgb": {
          "red": 255,
          "green": 203,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 1040-Y30R",
        "hex": "#FEBA6F",
        "rgb": {
          "red": 254,
          "green": 186,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 1050-Y30R",
        "hex": "#FDA951",
        "rgb": {
          "red": 253,
          "green": 169,
          "blue": 81,
        },
      },
      {
        "id": "NCS S 1060-Y30R",
        "hex": "#F7953A",
        "rgb": {
          "red": 247,
          "green": 149,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 1070-Y30R",
        "hex": "#F3871C",
        "rgb": {
          "red": 243,
          "green": 135,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 1080-Y30R",
        "hex": "#EF7900",
        "rgb": {
          "red": 239,
          "green": 121,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y30R",
        "hex": "#E9DEC4",
        "rgb": {
          "red": 233,
          "green": 222,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 1510-Y30R",
        "hex": "#E7D3A7",
        "rgb": {
          "red": 231,
          "green": 211,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 1515-Y30R",
        "hex": "#F1CB93",
        "rgb": {
          "red": 241,
          "green": 203,
          "blue": 147,
        },
      },
      {
        "id": "NCS S 2005-Y30R",
        "hex": "#D6CBB5",
        "rgb": {
          "red": 214,
          "green": 203,
          "blue": 181,
        },
      },
      {
        "id": "NCS S 2010-Y30R",
        "hex": "#CAB38D",
        "rgb": {
          "red": 202,
          "green": 179,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 2020-Y30R",
        "hex": "#DDB27E",
        "rgb": {
          "red": 221,
          "green": 178,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 2030-Y30R",
        "hex": "#DFA463",
        "rgb": {
          "red": 223,
          "green": 164,
          "blue": 99,
        },
      },
      {
        "id": "NCS S 2040-Y30R",
        "hex": "#E99E53",
        "rgb": {
          "red": 233,
          "green": 158,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 2050-Y30R",
        "hex": "#E1873C",
        "rgb": {
          "red": 225,
          "green": 135,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 2060-Y30R",
        "hex": "#E07D20",
        "rgb": {
          "red": 224,
          "green": 125,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 2070-Y30R",
        "hex": "#DE7100",
        "rgb": {
          "red": 222,
          "green": 113,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2570-Y30R",
        "hex": "#CE6800",
        "rgb": {
          "red": 206,
          "green": 104,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-Y30R",
        "hex": "#B3A081",
        "rgb": {
          "red": 179,
          "green": 160,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 3020-Y30R",
        "hex": "#B99368",
        "rgb": {
          "red": 185,
          "green": 147,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 3030-Y30R",
        "hex": "#B88047",
        "rgb": {
          "red": 184,
          "green": 128,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 3040-Y30R",
        "hex": "#B46D30",
        "rgb": {
          "red": 180,
          "green": 109,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 3050-Y30R",
        "hex": "#BC6923",
        "rgb": {
          "red": 188,
          "green": 105,
          "blue": 35,
        },
      },
      {
        "id": "NCS S 3060-Y30R",
        "hex": "#C06000",
        "rgb": {
          "red": 192,
          "green": 96,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-Y30R",
        "hex": "#A65200",
        "rgb": {
          "red": 166,
          "green": 82,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4010-Y30R",
        "hex": "#947C5C",
        "rgb": {
          "red": 148,
          "green": 124,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 4020-Y30R",
        "hex": "#966D44",
        "rgb": {
          "red": 150,
          "green": 109,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 4030-Y30R",
        "hex": "#A26837",
        "rgb": {
          "red": 162,
          "green": 104,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 4040-Y30R",
        "hex": "#97551E",
        "rgb": {
          "red": 151,
          "green": 85,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 4050-Y30R",
        "hex": "#9B4800",
        "rgb": {
          "red": 155,
          "green": 72,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4550-Y30R",
        "hex": "#883F00",
        "rgb": {
          "red": 136,
          "green": 63,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5010-Y30R",
        "hex": "#7E6245",
        "rgb": {
          "red": 126,
          "green": 98,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 5020-Y30R",
        "hex": "#7F5937",
        "rgb": {
          "red": 127,
          "green": 89,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 5030-Y30R",
        "hex": "#885229",
        "rgb": {
          "red": 136,
          "green": 82,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 5040-Y30R",
        "hex": "#7A3801",
        "rgb": {
          "red": 122,
          "green": 56,
          "blue": 1,
        },
      },
      {
        "id": "NCS S 6010-Y30R",
        "hex": "#6F533C",
        "rgb": {
          "red": 111,
          "green": 83,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 6020-Y30R",
        "hex": "#704325",
        "rgb": {
          "red": 112,
          "green": 67,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 6030-Y30R",
        "hex": "#592904",
        "rgb": {
          "red": 89,
          "green": 41,
          "blue": 4,
        },
      },
      {
        "id": "NCS S 7010-Y30R",
        "hex": "#584025",
        "rgb": {
          "red": 88,
          "green": 64,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 7020-Y30R",
        "hex": "#4C2C15",
        "rgb": {
          "red": 76,
          "green": 44,
          "blue": 21,
        },
      },
      {
        "id": "NCS S 8010-Y30R",
        "hex": "#2D1B03",
        "rgb": {
          "red": 45,
          "green": 27,
          "blue": 3,
        },
      },
      {
        "id": "NCS S 0505-Y40R",
        "hex": "#FFF3D7",
        "rgb": {
          "red": 255,
          "green": 243,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 0507-Y40R",
        "hex": "#FFF2D3",
        "rgb": {
          "red": 255,
          "green": 242,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 0510-Y40R",
        "hex": "#FFEBC7",
        "rgb": {
          "red": 255,
          "green": 235,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 0515-Y40R",
        "hex": "#FFE6B8",
        "rgb": {
          "red": 255,
          "green": 230,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 0520-Y40R",
        "hex": "#FFD7A5",
        "rgb": {
          "red": 255,
          "green": 215,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 0530-Y40R",
        "hex": "#FFC388",
        "rgb": {
          "red": 255,
          "green": 195,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 0540-Y40R",
        "hex": "#FEAF6D",
        "rgb": {
          "red": 254,
          "green": 175,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 0550-Y40R",
        "hex": "#FB974D",
        "rgb": {
          "red": 251,
          "green": 151,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 0560-Y40R",
        "hex": "#F48032",
        "rgb": {
          "red": 244,
          "green": 128,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 0570-Y40R",
        "hex": "#F27A1A",
        "rgb": {
          "red": 242,
          "green": 122,
          "blue": 26,
        },
      },
      {
        "id": "NCS S 0580-Y40R",
        "hex": "#EC6D00",
        "rgb": {
          "red": 236,
          "green": 109,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0585-Y40R",
        "hex": "#EC6D00",
        "rgb": {
          "red": 236,
          "green": 109,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0603-Y40R",
        "hex": "#FFF9E9",
        "rgb": {
          "red": 255,
          "green": 249,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1005-Y40R",
        "hex": "#F4E9D6",
        "rgb": {
          "red": 244,
          "green": 233,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 1010-Y40R",
        "hex": "#F8DFC2",
        "rgb": {
          "red": 248,
          "green": 223,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 1015-Y40R",
        "hex": "#FFDBAB",
        "rgb": {
          "red": 255,
          "green": 219,
          "blue": 171,
        },
      },
      {
        "id": "NCS S 1020-Y40R",
        "hex": "#FFCD9C",
        "rgb": {
          "red": 255,
          "green": 205,
          "blue": 156,
        },
      },
      {
        "id": "NCS S 1030-Y40R",
        "hex": "#FFBF84",
        "rgb": {
          "red": 255,
          "green": 191,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 1040-Y40R",
        "hex": "#FEAF6D",
        "rgb": {
          "red": 254,
          "green": 175,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 1050-Y40R",
        "hex": "#FC9E50",
        "rgb": {
          "red": 252,
          "green": 158,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 1060-Y40R",
        "hex": "#F4802A",
        "rgb": {
          "red": 244,
          "green": 128,
          "blue": 42,
        },
      },
      {
        "id": "NCS S 1070-Y40R",
        "hex": "#F07800",
        "rgb": {
          "red": 240,
          "green": 120,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1080-Y40R",
        "hex": "#EC6200",
        "rgb": {
          "red": 236,
          "green": 98,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y40R",
        "hex": "#E6DAC2",
        "rgb": {
          "red": 230,
          "green": 218,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 1510-Y40R",
        "hex": "#E7CDAC",
        "rgb": {
          "red": 231,
          "green": 205,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 1515-Y40R",
        "hex": "#F1CC9D",
        "rgb": {
          "red": 241,
          "green": 204,
          "blue": 157,
        },
      },
      {
        "id": "NCS S 2005-Y40R",
        "hex": "#D2C4B0",
        "rgb": {
          "red": 210,
          "green": 196,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 2010-Y40R",
        "hex": "#CDB089",
        "rgb": {
          "red": 205,
          "green": 176,
          "blue": 137,
        },
      },
      {
        "id": "NCS S 2020-Y40R",
        "hex": "#D5A576",
        "rgb": {
          "red": 213,
          "green": 165,
          "blue": 118,
        },
      },
      {
        "id": "NCS S 2030-Y40R",
        "hex": "#DC985F",
        "rgb": {
          "red": 220,
          "green": 152,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 2040-Y40R",
        "hex": "#E68D4D",
        "rgb": {
          "red": 230,
          "green": 141,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 2050-Y40R",
        "hex": "#E28037",
        "rgb": {
          "red": 226,
          "green": 128,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 2060-Y40R",
        "hex": "#D1641A",
        "rgb": {
          "red": 209,
          "green": 100,
          "blue": 26,
        },
      },
      {
        "id": "NCS S 2070-Y40R",
        "hex": "#D65800",
        "rgb": {
          "red": 214,
          "green": 88,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2570-Y40R",
        "hex": "#C65100",
        "rgb": {
          "red": 198,
          "green": 81,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-Y40R",
        "hex": "#B8A183",
        "rgb": {
          "red": 184,
          "green": 161,
          "blue": 131,
        },
      },
      {
        "id": "NCS S 3020-Y40R",
        "hex": "#B88F66",
        "rgb": {
          "red": 184,
          "green": 143,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 3030-Y40R",
        "hex": "#B57747",
        "rgb": {
          "red": 181,
          "green": 119,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 3040-Y40R",
        "hex": "#BA6A37",
        "rgb": {
          "red": 186,
          "green": 106,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 3050-Y40R",
        "hex": "#B9602C",
        "rgb": {
          "red": 185,
          "green": 96,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 3060-Y40R",
        "hex": "#BD4C00",
        "rgb": {
          "red": 189,
          "green": 76,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-Y40R",
        "hex": "#A34000",
        "rgb": {
          "red": 163,
          "green": 64,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4020-Y40R",
        "hex": "#996B44",
        "rgb": {
          "red": 153,
          "green": 107,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 4030-Y40R",
        "hex": "#9F5D34",
        "rgb": {
          "red": 159,
          "green": 93,
          "blue": 52,
        },
      },
      {
        "id": "NCS S 4040-Y40R",
        "hex": "#944B1F",
        "rgb": {
          "red": 148,
          "green": 75,
          "blue": 31,
        },
      },
      {
        "id": "NCS S 4050-Y40R",
        "hex": "#943804",
        "rgb": {
          "red": 148,
          "green": 56,
          "blue": 4,
        },
      },
      {
        "id": "NCS S 4550-Y40R",
        "hex": "#853000",
        "rgb": {
          "red": 133,
          "green": 48,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5020-Y40R",
        "hex": "#85573B",
        "rgb": {
          "red": 133,
          "green": 87,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 5030-Y40R",
        "hex": "#834D28",
        "rgb": {
          "red": 131,
          "green": 77,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 5040-Y40R",
        "hex": "#7A2B00",
        "rgb": {
          "red": 122,
          "green": 43,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6020-Y40R",
        "hex": "#703D21",
        "rgb": {
          "red": 112,
          "green": 61,
          "blue": 33,
        },
      },
      {
        "id": "NCS S 6030-Y40R",
        "hex": "#5E280E",
        "rgb": {
          "red": 94,
          "green": 40,
          "blue": 14,
        },
      },
      {
        "id": "NCS S 7020-Y40R",
        "hex": "#441E06",
        "rgb": {
          "red": 68,
          "green": 30,
          "blue": 6,
        },
      },
      {
        "id": "NCS S 0505-Y50R",
        "hex": "#FFF3DB",
        "rgb": {
          "red": 255,
          "green": 243,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 0510-Y50R",
        "hex": "#FFECD4",
        "rgb": {
          "red": 255,
          "green": 236,
          "blue": 212,
        },
      },
      {
        "id": "NCS S 0515-Y50R",
        "hex": "#FFE2BA",
        "rgb": {
          "red": 255,
          "green": 226,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 0520-Y50R",
        "hex": "#FFD0A5",
        "rgb": {
          "red": 255,
          "green": 208,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 0530-Y50R",
        "hex": "#FFBB86",
        "rgb": {
          "red": 255,
          "green": 187,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 0540-Y50R",
        "hex": "#FEA66A",
        "rgb": {
          "red": 254,
          "green": 166,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 0550-Y50R",
        "hex": "#FA8D4C",
        "rgb": {
          "red": 250,
          "green": 141,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 0560-Y50R",
        "hex": "#F67E3D",
        "rgb": {
          "red": 246,
          "green": 126,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 0570-Y50R",
        "hex": "#F17024",
        "rgb": {
          "red": 241,
          "green": 112,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 0580-Y50R",
        "hex": "#EC6202",
        "rgb": {
          "red": 236,
          "green": 98,
          "blue": 2,
        },
      },
      {
        "id": "NCS S 0585-Y50R",
        "hex": "#EC6100",
        "rgb": {
          "red": 236,
          "green": 97,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0804-Y50R",
        "hex": "#F8EFDB",
        "rgb": {
          "red": 248,
          "green": 239,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 0907-Y50R",
        "hex": "#F9E9D3",
        "rgb": {
          "red": 249,
          "green": 233,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1005-Y50R",
        "hex": "#F4E9D7",
        "rgb": {
          "red": 244,
          "green": 233,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 1010-Y50R",
        "hex": "#FFE4C7",
        "rgb": {
          "red": 255,
          "green": 228,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 1015-Y50R",
        "hex": "#FFD8AF",
        "rgb": {
          "red": 255,
          "green": 216,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 1020-Y50R",
        "hex": "#FFCEA1",
        "rgb": {
          "red": 255,
          "green": 206,
          "blue": 161,
        },
      },
      {
        "id": "NCS S 1030-Y50R",
        "hex": "#FFB780",
        "rgb": {
          "red": 255,
          "green": 183,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 1040-Y50R",
        "hex": "#FEA163",
        "rgb": {
          "red": 254,
          "green": 161,
          "blue": 99,
        },
      },
      {
        "id": "NCS S 1050-Y50R",
        "hex": "#F88847",
        "rgb": {
          "red": 248,
          "green": 136,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 1060-Y50R",
        "hex": "#F47D32",
        "rgb": {
          "red": 244,
          "green": 125,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 1070-Y50R",
        "hex": "#EE6316",
        "rgb": {
          "red": 238,
          "green": 99,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 1080-Y50R",
        "hex": "#EB6100",
        "rgb": {
          "red": 235,
          "green": 97,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y50R",
        "hex": "#E9DBCB",
        "rgb": {
          "red": 233,
          "green": 219,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 1510-Y50R",
        "hex": "#EBD1B3",
        "rgb": {
          "red": 235,
          "green": 209,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 1515-Y50R",
        "hex": "#EFC39E",
        "rgb": {
          "red": 239,
          "green": 195,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 2005-Y50R",
        "hex": "#D1C3B7",
        "rgb": {
          "red": 209,
          "green": 195,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 2010-Y50R",
        "hex": "#CDB191",
        "rgb": {
          "red": 205,
          "green": 177,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 2020-Y50R",
        "hex": "#DAA47D",
        "rgb": {
          "red": 218,
          "green": 164,
          "blue": 125,
        },
      },
      {
        "id": "NCS S 2030-Y50R",
        "hex": "#E99561",
        "rgb": {
          "red": 233,
          "green": 149,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 2040-Y50R",
        "hex": "#E48249",
        "rgb": {
          "red": 228,
          "green": 130,
          "blue": 73,
        },
      },
      {
        "id": "NCS S 2050-Y50R",
        "hex": "#DF7133",
        "rgb": {
          "red": 223,
          "green": 113,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 2060-Y50R",
        "hex": "#CB5017",
        "rgb": {
          "red": 203,
          "green": 80,
          "blue": 23,
        },
      },
      {
        "id": "NCS S 2070-Y50R",
        "hex": "#CB4900",
        "rgb": {
          "red": 203,
          "green": 73,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2570-Y50R",
        "hex": "#C53C00",
        "rgb": {
          "red": 197,
          "green": 60,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3005-Y50R",
        "hex": "#A59B8D",
        "rgb": {
          "red": 165,
          "green": 155,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 3010-Y50R",
        "hex": "#B69A7E",
        "rgb": {
          "red": 182,
          "green": 154,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 3020-Y50R",
        "hex": "#BB886B",
        "rgb": {
          "red": 187,
          "green": 136,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 3030-Y50R",
        "hex": "#B4704C",
        "rgb": {
          "red": 180,
          "green": 112,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 3040-Y50R",
        "hex": "#BA663D",
        "rgb": {
          "red": 186,
          "green": 102,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 3050-Y50R",
        "hex": "#AE5227",
        "rgb": {
          "red": 174,
          "green": 82,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 3060-Y50R",
        "hex": "#AB4000",
        "rgb": {
          "red": 171,
          "green": 64,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-Y50R",
        "hex": "#9C2D00",
        "rgb": {
          "red": 156,
          "green": 45,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4005-Y50R",
        "hex": "#887D73",
        "rgb": {
          "red": 136,
          "green": 125,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 4010-Y50R",
        "hex": "#947B66",
        "rgb": {
          "red": 148,
          "green": 123,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 4020-Y50R",
        "hex": "#976042",
        "rgb": {
          "red": 151,
          "green": 96,
          "blue": 66,
        },
      },
      {
        "id": "NCS S 4030-Y50R",
        "hex": "#9E5638",
        "rgb": {
          "red": 158,
          "green": 86,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 4040-Y50R",
        "hex": "#93431E",
        "rgb": {
          "red": 147,
          "green": 67,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 4050-Y50R",
        "hex": "#973400",
        "rgb": {
          "red": 151,
          "green": 52,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4550-Y50R",
        "hex": "#842500",
        "rgb": {
          "red": 132,
          "green": 37,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5005-Y50R",
        "hex": "#776D65",
        "rgb": {
          "red": 119,
          "green": 109,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 5010-Y50R",
        "hex": "#745E4B",
        "rgb": {
          "red": 116,
          "green": 94,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 5020-Y50R",
        "hex": "#85583F",
        "rgb": {
          "red": 133,
          "green": 88,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 5030-Y50R",
        "hex": "#814428",
        "rgb": {
          "red": 129,
          "green": 68,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 5040-Y50R",
        "hex": "#7C2B0A",
        "rgb": {
          "red": 124,
          "green": 43,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 6005-Y50R",
        "hex": "#645953",
        "rgb": {
          "red": 100,
          "green": 89,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 6010-Y50R",
        "hex": "#624A3D",
        "rgb": {
          "red": 98,
          "green": 74,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 6020-Y50R",
        "hex": "#6C3E28",
        "rgb": {
          "red": 108,
          "green": 62,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 6030-Y50R",
        "hex": "#622100",
        "rgb": {
          "red": 98,
          "green": 33,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 7005-Y50R",
        "hex": "#2F2925",
        "rgb": {
          "red": 47,
          "green": 41,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 7010-Y50R",
        "hex": "#513522",
        "rgb": {
          "red": 81,
          "green": 53,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 7020-Y50R",
        "hex": "#431B00",
        "rgb": {
          "red": 67,
          "green": 27,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 8005-Y50R",
        "hex": "#2F2620",
        "rgb": {
          "red": 47,
          "green": 38,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 8010-Y50R",
        "hex": "#30251E",
        "rgb": {
          "red": 48,
          "green": 37,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 0505-Y60R",
        "hex": "#FFF3E0",
        "rgb": {
          "red": 255,
          "green": 243,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 0507-Y60R",
        "hex": "#FFF0D6",
        "rgb": {
          "red": 255,
          "green": 240,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 0510-Y60R",
        "hex": "#FFEAD0",
        "rgb": {
          "red": 255,
          "green": 234,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 0515-Y60R",
        "hex": "#FFE3C4",
        "rgb": {
          "red": 255,
          "green": 227,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 0520-Y60R",
        "hex": "#FFD7B6",
        "rgb": {
          "red": 255,
          "green": 215,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 0530-Y60R",
        "hex": "#FFBA92",
        "rgb": {
          "red": 255,
          "green": 186,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 0540-Y60R",
        "hex": "#FDA276",
        "rgb": {
          "red": 253,
          "green": 162,
          "blue": 118,
        },
      },
      {
        "id": "NCS S 0550-Y60R",
        "hex": "#FB8C5B",
        "rgb": {
          "red": 251,
          "green": 140,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 0560-Y60R",
        "hex": "#F77F44",
        "rgb": {
          "red": 247,
          "green": 127,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 0570-Y60R",
        "hex": "#F0642C",
        "rgb": {
          "red": 240,
          "green": 100,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 0580-Y60R",
        "hex": "#EB5716",
        "rgb": {
          "red": 235,
          "green": 87,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 0585-Y60R",
        "hex": "#E74800",
        "rgb": {
          "red": 231,
          "green": 72,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0603-Y60R",
        "hex": "#FFF8EC",
        "rgb": {
          "red": 255,
          "green": 248,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 1005-Y60R",
        "hex": "#F4E7D5",
        "rgb": {
          "red": 244,
          "green": 231,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 1010-Y60R",
        "hex": "#FFE2C6",
        "rgb": {
          "red": 255,
          "green": 226,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 1015-Y60R",
        "hex": "#FFD5B1",
        "rgb": {
          "red": 255,
          "green": 213,
          "blue": 177,
        },
      },
      {
        "id": "NCS S 1020-Y60R",
        "hex": "#FFC49D",
        "rgb": {
          "red": 255,
          "green": 196,
          "blue": 157,
        },
      },
      {
        "id": "NCS S 1030-Y60R",
        "hex": "#FDAE86",
        "rgb": {
          "red": 253,
          "green": 174,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 1040-Y60R",
        "hex": "#FC9562",
        "rgb": {
          "red": 252,
          "green": 149,
          "blue": 98,
        },
      },
      {
        "id": "NCS S 1050-Y60R",
        "hex": "#F87F46",
        "rgb": {
          "red": 248,
          "green": 127,
          "blue": 70,
        },
      },
      {
        "id": "NCS S 1060-Y60R",
        "hex": "#F0642C",
        "rgb": {
          "red": 240,
          "green": 100,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 1070-Y60R",
        "hex": "#EE6119",
        "rgb": {
          "red": 238,
          "green": 97,
          "blue": 25,
        },
      },
      {
        "id": "NCS S 1080-Y60R",
        "hex": "#E74800",
        "rgb": {
          "red": 231,
          "green": 72,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-Y60R",
        "hex": "#E8D8C9",
        "rgb": {
          "red": 232,
          "green": 216,
          "blue": 201,
        },
      },
      {
        "id": "NCS S 1510-Y60R",
        "hex": "#E5C4A7",
        "rgb": {
          "red": 229,
          "green": 196,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 1515-Y60R",
        "hex": "#F0C4A3",
        "rgb": {
          "red": 240,
          "green": 196,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 2005-Y60R",
        "hex": "#CDBEB2",
        "rgb": {
          "red": 205,
          "green": 190,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2010-Y60R",
        "hex": "#D1B094",
        "rgb": {
          "red": 209,
          "green": 176,
          "blue": 148,
        },
      },
      {
        "id": "NCS S 2020-Y60R",
        "hex": "#D49F81",
        "rgb": {
          "red": 212,
          "green": 159,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 2030-Y60R",
        "hex": "#EA9571",
        "rgb": {
          "red": 234,
          "green": 149,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 2040-Y60R",
        "hex": "#E47C56",
        "rgb": {
          "red": 228,
          "green": 124,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 2050-Y60R",
        "hex": "#DF6B3A",
        "rgb": {
          "red": 223,
          "green": 107,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 2060-Y60R",
        "hex": "#CD4D18",
        "rgb": {
          "red": 205,
          "green": 77,
          "blue": 24,
        },
      },
      {
        "id": "NCS S 2070-Y60R",
        "hex": "#C33706",
        "rgb": {
          "red": 195,
          "green": 55,
          "blue": 6,
        },
      },
      {
        "id": "NCS S 2075-Y60R",
        "hex": "#D03200",
        "rgb": {
          "red": 208,
          "green": 50,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2570-Y60R",
        "hex": "#BF3A00",
        "rgb": {
          "red": 191,
          "green": 58,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-Y60R",
        "hex": "#B59684",
        "rgb": {
          "red": 181,
          "green": 150,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 3020-Y60R",
        "hex": "#B78A6E",
        "rgb": {
          "red": 183,
          "green": 138,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 3030-Y60R",
        "hex": "#B46D4F",
        "rgb": {
          "red": 180,
          "green": 109,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 3040-Y60R",
        "hex": "#B35D3C",
        "rgb": {
          "red": 179,
          "green": 93,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 3050-Y60R",
        "hex": "#AF400B",
        "rgb": {
          "red": 175,
          "green": 64,
          "blue": 11,
        },
      },
      {
        "id": "NCS S 3060-Y60R",
        "hex": "#B33200",
        "rgb": {
          "red": 179,
          "green": 50,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-Y60R",
        "hex": "#962300",
        "rgb": {
          "red": 150,
          "green": 35,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4020-Y60R",
        "hex": "#95644D",
        "rgb": {
          "red": 149,
          "green": 100,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 4030-Y60R",
        "hex": "#934D33",
        "rgb": {
          "red": 147,
          "green": 77,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 4040-Y60R",
        "hex": "#923C1C",
        "rgb": {
          "red": 146,
          "green": 60,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 4050-Y60R",
        "hex": "#922705",
        "rgb": {
          "red": 146,
          "green": 39,
          "blue": 5,
        },
      },
      {
        "id": "NCS S 4550-Y60R",
        "hex": "#7D1D03",
        "rgb": {
          "red": 125,
          "green": 29,
          "blue": 3,
        },
      },
      {
        "id": "NCS S 5020-Y60R",
        "hex": "#845341",
        "rgb": {
          "red": 132,
          "green": 83,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 5030-Y60R",
        "hex": "#803C24",
        "rgb": {
          "red": 128,
          "green": 60,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 5040-Y60R",
        "hex": "#6E1B00",
        "rgb": {
          "red": 110,
          "green": 27,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6020-Y60R",
        "hex": "#6F381F",
        "rgb": {
          "red": 111,
          "green": 56,
          "blue": 31,
        },
      },
      {
        "id": "NCS S 6030-Y60R",
        "hex": "#5F1800",
        "rgb": {
          "red": 95,
          "green": 24,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 7020-Y60R",
        "hex": "#441904",
        "rgb": {
          "red": 68,
          "green": 25,
          "blue": 4,
        },
      },
      {
        "id": "NCS S 0505-Y70R",
        "hex": "#FFF2E2",
        "rgb": {
          "red": 255,
          "green": 242,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 0510-Y70R",
        "hex": "#FFF0DB",
        "rgb": {
          "red": 255,
          "green": 240,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 0515-Y70R",
        "hex": "#FFE4CA",
        "rgb": {
          "red": 255,
          "green": 228,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 0520-Y70R",
        "hex": "#FFD0B8",
        "rgb": {
          "red": 255,
          "green": 208,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 0530-Y70R",
        "hex": "#FEAE91",
        "rgb": {
          "red": 254,
          "green": 174,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 0540-Y70R",
        "hex": "#FE9978",
        "rgb": {
          "red": 254,
          "green": 153,
          "blue": 120,
        },
      },
      {
        "id": "NCS S 0550-Y70R",
        "hex": "#FB835C",
        "rgb": {
          "red": 251,
          "green": 131,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 0560-Y70R",
        "hex": "#F56A44",
        "rgb": {
          "red": 245,
          "green": 106,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 0570-Y70R",
        "hex": "#ED4E29",
        "rgb": {
          "red": 237,
          "green": 78,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 0580-Y70R",
        "hex": "#E94815",
        "rgb": {
          "red": 233,
          "green": 72,
          "blue": 21,
        },
      },
      {
        "id": "NCS S 0585-Y70R",
        "hex": "#E02F07",
        "rgb": {
          "red": 224,
          "green": 47,
          "blue": 7,
        },
      },
      {
        "id": "NCS S 0804-Y70R",
        "hex": "#FFF5EC",
        "rgb": {
          "red": 255,
          "green": 245,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 0907-Y70R",
        "hex": "#F7E4D1",
        "rgb": {
          "red": 247,
          "green": 228,
          "blue": 209,
        },
      },
      {
        "id": "NCS S 1005-Y70R",
        "hex": "#F4E7D5",
        "rgb": {
          "red": 244,
          "green": 231,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 1010-Y70R",
        "hex": "#FFDDCA",
        "rgb": {
          "red": 255,
          "green": 221,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 1015-Y70R",
        "hex": "#FFD2BB",
        "rgb": {
          "red": 255,
          "green": 210,
          "blue": 187,
        },
      },
      {
        "id": "NCS S 1020-Y70R",
        "hex": "#FFC1A6",
        "rgb": {
          "red": 255,
          "green": 193,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 1030-Y70R",
        "hex": "#FFA88B",
        "rgb": {
          "red": 255,
          "green": 168,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 1040-Y70R",
        "hex": "#FF977C",
        "rgb": {
          "red": 255,
          "green": 151,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 1050-Y70R",
        "hex": "#F98050",
        "rgb": {
          "red": 249,
          "green": 128,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 1060-Y70R",
        "hex": "#F4653F",
        "rgb": {
          "red": 244,
          "green": 101,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 1070-Y70R",
        "hex": "#EC4B30",
        "rgb": {
          "red": 236,
          "green": 75,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 1080-Y70R",
        "hex": "#E23403",
        "rgb": {
          "red": 226,
          "green": 52,
          "blue": 3,
        },
      },
      {
        "id": "NCS S 1505-Y70R",
        "hex": "#E7D4C7",
        "rgb": {
          "red": 231,
          "green": 212,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 1510-Y70R",
        "hex": "#E5C5B0",
        "rgb": {
          "red": 229,
          "green": 197,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 1515-Y70R",
        "hex": "#F0C4AA",
        "rgb": {
          "red": 240,
          "green": 196,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 2005-Y70R",
        "hex": "#C6B6AC",
        "rgb": {
          "red": 198,
          "green": 182,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 2010-Y70R",
        "hex": "#D1AF9E",
        "rgb": {
          "red": 209,
          "green": 175,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 2020-Y70R",
        "hex": "#DEA187",
        "rgb": {
          "red": 222,
          "green": 161,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 2030-Y70R",
        "hex": "#E98C6F",
        "rgb": {
          "red": 233,
          "green": 140,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 2040-Y70R",
        "hex": "#DE7758",
        "rgb": {
          "red": 222,
          "green": 119,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 2050-Y70R",
        "hex": "#DF6241",
        "rgb": {
          "red": 223,
          "green": 98,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 2060-Y70R",
        "hex": "#CB401E",
        "rgb": {
          "red": 203,
          "green": 64,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 2070-Y70R",
        "hex": "#CD2A03",
        "rgb": {
          "red": 205,
          "green": 42,
          "blue": 3,
        },
      },
      {
        "id": "NCS S 2075-Y70R",
        "hex": "#C22308",
        "rgb": {
          "red": 194,
          "green": 35,
          "blue": 8,
        },
      },
      {
        "id": "NCS S 2570-Y70R",
        "hex": "#B12304",
        "rgb": {
          "red": 177,
          "green": 35,
          "blue": 4,
        },
      },
      {
        "id": "NCS S 3010-Y70R",
        "hex": "#AC9385",
        "rgb": {
          "red": 172,
          "green": 147,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 3020-Y70R",
        "hex": "#B7836F",
        "rgb": {
          "red": 183,
          "green": 131,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 3030-Y70R",
        "hex": "#B46E56",
        "rgb": {
          "red": 180,
          "green": 110,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 3040-Y70R",
        "hex": "#B75E45",
        "rgb": {
          "red": 183,
          "green": 94,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 3050-Y70R",
        "hex": "#B74030",
        "rgb": {
          "red": 183,
          "green": 64,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 3060-Y70R",
        "hex": "#A0270B",
        "rgb": {
          "red": 160,
          "green": 39,
          "blue": 11,
        },
      },
      {
        "id": "NCS S 3560-Y70R",
        "hex": "#921A0E",
        "rgb": {
          "red": 146,
          "green": 26,
          "blue": 14,
        },
      },
      {
        "id": "NCS S 4010-Y70R",
        "hex": "#90776E",
        "rgb": {
          "red": 144,
          "green": 119,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 4020-Y70R",
        "hex": "#925F4A",
        "rgb": {
          "red": 146,
          "green": 95,
          "blue": 74,
        },
      },
      {
        "id": "NCS S 4030-Y70R",
        "hex": "#98503B",
        "rgb": {
          "red": 152,
          "green": 80,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 4040-Y70R",
        "hex": "#963E29",
        "rgb": {
          "red": 150,
          "green": 62,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 4050-Y70R",
        "hex": "#8A1F07",
        "rgb": {
          "red": 138,
          "green": 31,
          "blue": 7,
        },
      },
      {
        "id": "NCS S 4550-Y70R",
        "hex": "#81220F",
        "rgb": {
          "red": 129,
          "green": 34,
          "blue": 15,
        },
      },
      {
        "id": "NCS S 5010-Y70R",
        "hex": "#745B53",
        "rgb": {
          "red": 116,
          "green": 91,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5020-Y70R",
        "hex": "#834E3F",
        "rgb": {
          "red": 131,
          "green": 78,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 5030-Y70R",
        "hex": "#81402F",
        "rgb": {
          "red": 129,
          "green": 64,
          "blue": 47,
        },
      },
      {
        "id": "NCS S 5040-Y70R",
        "hex": "#721C0B",
        "rgb": {
          "red": 114,
          "green": 28,
          "blue": 11,
        },
      },
      {
        "id": "NCS S 6010-Y70R",
        "hex": "#634E43",
        "rgb": {
          "red": 99,
          "green": 78,
          "blue": 67,
        },
      },
      {
        "id": "NCS S 6020-Y70R",
        "hex": "#6B3728",
        "rgb": {
          "red": 107,
          "green": 55,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 6030-Y70R",
        "hex": "#682519",
        "rgb": {
          "red": 104,
          "green": 37,
          "blue": 25,
        },
      },
      {
        "id": "NCS S 7010-Y70R",
        "hex": "#4F342A",
        "rgb": {
          "red": 79,
          "green": 52,
          "blue": 42,
        },
      },
      {
        "id": "NCS S 7020-Y70R",
        "hex": "#441C13",
        "rgb": {
          "red": 68,
          "green": 28,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 8010-Y70R",
        "hex": "#2E1410",
        "rgb": {
          "red": 46,
          "green": 20,
          "blue": 16,
        },
      },
      {
        "id": "NCS S 0505-Y80R",
        "hex": "#FFF2E7",
        "rgb": {
          "red": 255,
          "green": 242,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0507-Y80R",
        "hex": "#FFF1E3",
        "rgb": {
          "red": 255,
          "green": 241,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 0510-Y80R",
        "hex": "#FFEEE1",
        "rgb": {
          "red": 255,
          "green": 238,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0515-Y80R",
        "hex": "#FFE2D2",
        "rgb": {
          "red": 255,
          "green": 226,
          "blue": 210,
        },
      },
      {
        "id": "NCS S 0520-Y80R",
        "hex": "#FFD3C0",
        "rgb": {
          "red": 255,
          "green": 211,
          "blue": 192,
        },
      },
      {
        "id": "NCS S 0530-Y80R",
        "hex": "#FFB9A2",
        "rgb": {
          "red": 255,
          "green": 185,
          "blue": 162,
        },
      },
      {
        "id": "NCS S 0540-Y80R",
        "hex": "#FFA499",
        "rgb": {
          "red": 255,
          "green": 164,
          "blue": 153,
        },
      },
      {
        "id": "NCS S 0550-Y80R",
        "hex": "#FA7871",
        "rgb": {
          "red": 250,
          "green": 120,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 0560-Y80R",
        "hex": "#F25A59",
        "rgb": {
          "red": 242,
          "green": 90,
          "blue": 89,
        },
      },
      {
        "id": "NCS S 0570-Y80R",
        "hex": "#E9473C",
        "rgb": {
          "red": 233,
          "green": 71,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 0580-Y80R",
        "hex": "#E23420",
        "rgb": {
          "red": 226,
          "green": 52,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 0585-Y80R",
        "hex": "#E33832",
        "rgb": {
          "red": 227,
          "green": 56,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 0603-Y80R",
        "hex": "#FFFAF4",
        "rgb": {
          "red": 255,
          "green": 250,
          "blue": 244,
        },
      },
      {
        "id": "NCS S 1005-Y80R",
        "hex": "#F3E7DD",
        "rgb": {
          "red": 243,
          "green": 231,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 1010-Y80R",
        "hex": "#FBDFD3",
        "rgb": {
          "red": 251,
          "green": 223,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1015-Y80R",
        "hex": "#FFD4C6",
        "rgb": {
          "red": 255,
          "green": 212,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 1020-Y80R",
        "hex": "#FFC8B3",
        "rgb": {
          "red": 255,
          "green": 200,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 1030-Y80R",
        "hex": "#FFAB97",
        "rgb": {
          "red": 255,
          "green": 171,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 1040-Y80R",
        "hex": "#FF9689",
        "rgb": {
          "red": 255,
          "green": 150,
          "blue": 137,
        },
      },
      {
        "id": "NCS S 1050-Y80R",
        "hex": "#FB806B",
        "rgb": {
          "red": 251,
          "green": 128,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 1060-Y80R",
        "hex": "#F4665B",
        "rgb": {
          "red": 244,
          "green": 102,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 1070-Y80R",
        "hex": "#EB4B44",
        "rgb": {
          "red": 235,
          "green": 75,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 1080-Y80R",
        "hex": "#DE2A19",
        "rgb": {
          "red": 222,
          "green": 42,
          "blue": 25,
        },
      },
      {
        "id": "NCS S 1085-Y80R",
        "hex": "#DA1D16",
        "rgb": {
          "red": 218,
          "green": 29,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 1505-Y80R",
        "hex": "#DED3CB",
        "rgb": {
          "red": 222,
          "green": 211,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 1510-Y80R",
        "hex": "#E6CBBB",
        "rgb": {
          "red": 230,
          "green": 203,
          "blue": 187,
        },
      },
      {
        "id": "NCS S 1515-Y80R",
        "hex": "#F0C5B3",
        "rgb": {
          "red": 240,
          "green": 197,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 1580-Y80R",
        "hex": "#C6121A",
        "rgb": {
          "red": 198,
          "green": 18,
          "blue": 26,
        },
      },
      {
        "id": "NCS S 2005-Y80R",
        "hex": "#C6B6AC",
        "rgb": {
          "red": 198,
          "green": 182,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 2010-Y80R",
        "hex": "#CEAFA5",
        "rgb": {
          "red": 206,
          "green": 175,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 2020-Y80R",
        "hex": "#D5A190",
        "rgb": {
          "red": 213,
          "green": 161,
          "blue": 144,
        },
      },
      {
        "id": "NCS S 2030-Y80R",
        "hex": "#DE8875",
        "rgb": {
          "red": 222,
          "green": 136,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 2040-Y80R",
        "hex": "#EA7E6D",
        "rgb": {
          "red": 234,
          "green": 126,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 2050-Y80R",
        "hex": "#E46757",
        "rgb": {
          "red": 228,
          "green": 103,
          "blue": 87,
        },
      },
      {
        "id": "NCS S 2060-Y80R",
        "hex": "#CE463D",
        "rgb": {
          "red": 206,
          "green": 70,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 2070-Y80R",
        "hex": "#BF302B",
        "rgb": {
          "red": 191,
          "green": 48,
          "blue": 43,
        },
      },
      {
        "id": "NCS S 2570-Y80R",
        "hex": "#9E170B",
        "rgb": {
          "red": 158,
          "green": 23,
          "blue": 11,
        },
      },
      {
        "id": "NCS S 3005-Y80R",
        "hex": "#A5968F",
        "rgb": {
          "red": 165,
          "green": 150,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3010-Y80R",
        "hex": "#AD958C",
        "rgb": {
          "red": 173,
          "green": 149,
          "blue": 140,
        },
      },
      {
        "id": "NCS S 3020-Y80R",
        "hex": "#B17F72",
        "rgb": {
          "red": 177,
          "green": 127,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 3030-Y80R",
        "hex": "#B16C60",
        "rgb": {
          "red": 177,
          "green": 108,
          "blue": 96,
        },
      },
      {
        "id": "NCS S 3040-Y80R",
        "hex": "#B05343",
        "rgb": {
          "red": 176,
          "green": 83,
          "blue": 67,
        },
      },
      {
        "id": "NCS S 3050-Y80R",
        "hex": "#A44130",
        "rgb": {
          "red": 164,
          "green": 65,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 3060-Y80R",
        "hex": "#9B1D10",
        "rgb": {
          "red": 155,
          "green": 29,
          "blue": 16,
        },
      },
      {
        "id": "NCS S 3560-Y80R",
        "hex": "#7E0E0F",
        "rgb": {
          "red": 126,
          "green": 14,
          "blue": 15,
        },
      },
      {
        "id": "NCS S 4005-Y80R",
        "hex": "#8D817C",
        "rgb": {
          "red": 141,
          "green": 129,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 4020-Y80R",
        "hex": "#8E5A50",
        "rgb": {
          "red": 142,
          "green": 90,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 4030-Y80R",
        "hex": "#965146",
        "rgb": {
          "red": 150,
          "green": 81,
          "blue": 70,
        },
      },
      {
        "id": "NCS S 4040-Y80R",
        "hex": "#953C36",
        "rgb": {
          "red": 149,
          "green": 60,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 4050-Y80R",
        "hex": "#892725",
        "rgb": {
          "red": 137,
          "green": 39,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 4550-Y80R",
        "hex": "#6B0B0A",
        "rgb": {
          "red": 107,
          "green": 11,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 5005-Y80R",
        "hex": "#776C64",
        "rgb": {
          "red": 119,
          "green": 108,
          "blue": 100,
        },
      },
      {
        "id": "NCS S 5020-Y80R",
        "hex": "#7B473F",
        "rgb": {
          "red": 123,
          "green": 71,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 5030-Y80R",
        "hex": "#82392F",
        "rgb": {
          "red": 130,
          "green": 57,
          "blue": 47,
        },
      },
      {
        "id": "NCS S 5040-Y80R",
        "hex": "#6C1311",
        "rgb": {
          "red": 108,
          "green": 19,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 6005-Y80R",
        "hex": "#645952",
        "rgb": {
          "red": 100,
          "green": 89,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 6020-Y80R",
        "hex": "#6D3A32",
        "rgb": {
          "red": 109,
          "green": 58,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 6030-Y80R",
        "hex": "#5E1E1B",
        "rgb": {
          "red": 94,
          "green": 30,
          "blue": 27,
        },
      },
      {
        "id": "NCS S 7005-Y80R",
        "hex": "#493E3A",
        "rgb": {
          "red": 73,
          "green": 62,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 7020-Y80R",
        "hex": "#431813",
        "rgb": {
          "red": 67,
          "green": 24,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 8005-Y80R",
        "hex": "#231616",
        "rgb": {
          "red": 35,
          "green": 22,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 8505-Y80R",
        "hex": "#231715",
        "rgb": {
          "red": 35,
          "green": 23,
          "blue": 21,
        },
      },
      {
        "id": "NCS S 0505-Y90R",
        "hex": "#FFF5EC",
        "rgb": {
          "red": 255,
          "green": 245,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 0510-Y90R",
        "hex": "#FFE9E2",
        "rgb": {
          "red": 255,
          "green": 233,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 0515-Y90R",
        "hex": "#FFE0D5",
        "rgb": {
          "red": 255,
          "green": 224,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 0520-Y90R",
        "hex": "#FFCFC5",
        "rgb": {
          "red": 255,
          "green": 207,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 0530-Y90R",
        "hex": "#FFBEB2",
        "rgb": {
          "red": 255,
          "green": 190,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 0540-Y90R",
        "hex": "#FFA19D",
        "rgb": {
          "red": 255,
          "green": 161,
          "blue": 157,
        },
      },
      {
        "id": "NCS S 0550-Y90R",
        "hex": "#FA7870",
        "rgb": {
          "red": 250,
          "green": 120,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 0560-Y90R",
        "hex": "#F05554",
        "rgb": {
          "red": 240,
          "green": 85,
          "blue": 84,
        },
      },
      {
        "id": "NCS S 0570-Y90R",
        "hex": "#E6373F",
        "rgb": {
          "red": 230,
          "green": 55,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 0580-Y90R",
        "hex": "#D91023",
        "rgb": {
          "red": 217,
          "green": 16,
          "blue": 35,
        },
      },
      {
        "id": "NCS S 0804-Y90R",
        "hex": "#FBF1E5",
        "rgb": {
          "red": 251,
          "green": 241,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 0907-Y90R",
        "hex": "#FCEDE3",
        "rgb": {
          "red": 252,
          "green": 237,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 1005-Y90R",
        "hex": "#F3E5DC",
        "rgb": {
          "red": 243,
          "green": 229,
          "blue": 220,
        },
      },
      {
        "id": "NCS S 1010-Y90R",
        "hex": "#FCE0D3",
        "rgb": {
          "red": 252,
          "green": 224,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1015-Y90R",
        "hex": "#FFD1C4",
        "rgb": {
          "red": 255,
          "green": 209,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 1020-Y90R",
        "hex": "#FFC7B9",
        "rgb": {
          "red": 255,
          "green": 199,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 1030-Y90R",
        "hex": "#FFABA4",
        "rgb": {
          "red": 255,
          "green": 171,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 1040-Y90R",
        "hex": "#FF9B95",
        "rgb": {
          "red": 255,
          "green": 155,
          "blue": 149,
        },
      },
      {
        "id": "NCS S 1050-Y90R",
        "hex": "#FC7F73",
        "rgb": {
          "red": 252,
          "green": 127,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 1060-Y90R",
        "hex": "#F36359",
        "rgb": {
          "red": 243,
          "green": 99,
          "blue": 89,
        },
      },
      {
        "id": "NCS S 1070-Y90R",
        "hex": "#E83F41",
        "rgb": {
          "red": 232,
          "green": 63,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 1080-Y90R",
        "hex": "#CF1021",
        "rgb": {
          "red": 207,
          "green": 16,
          "blue": 33,
        },
      },
      {
        "id": "NCS S 1085-Y90R",
        "hex": "#D00B25",
        "rgb": {
          "red": 208,
          "green": 11,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 1505-Y90R",
        "hex": "#DDCFC8",
        "rgb": {
          "red": 221,
          "green": 207,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 1510-Y90R",
        "hex": "#E5C5B7",
        "rgb": {
          "red": 229,
          "green": 197,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 1515-Y90R",
        "hex": "#EFC0B0",
        "rgb": {
          "red": 239,
          "green": 192,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 1580-Y90R",
        "hex": "#BD0721",
        "rgb": {
          "red": 189,
          "green": 7,
          "blue": 33,
        },
      },
      {
        "id": "NCS S 2005-Y90R",
        "hex": "#C5B3AB",
        "rgb": {
          "red": 197,
          "green": 179,
          "blue": 171,
        },
      },
      {
        "id": "NCS S 2010-Y90R",
        "hex": "#CEB0A8",
        "rgb": {
          "red": 206,
          "green": 176,
          "blue": 168,
        },
      },
      {
        "id": "NCS S 2020-Y90R",
        "hex": "#D69990",
        "rgb": {
          "red": 214,
          "green": 153,
          "blue": 144,
        },
      },
      {
        "id": "NCS S 2030-Y90R",
        "hex": "#D38277",
        "rgb": {
          "red": 211,
          "green": 130,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 2040-Y90R",
        "hex": "#D1736A",
        "rgb": {
          "red": 209,
          "green": 115,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 2050-Y90R",
        "hex": "#C9584E",
        "rgb": {
          "red": 201,
          "green": 88,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 2060-Y90R",
        "hex": "#BE453F",
        "rgb": {
          "red": 190,
          "green": 69,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 2070-Y90R",
        "hex": "#B51F27",
        "rgb": {
          "red": 181,
          "green": 31,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 2570-Y90R",
        "hex": "#960A18",
        "rgb": {
          "red": 150,
          "green": 10,
          "blue": 24,
        },
      },
      {
        "id": "NCS S 3010-Y90R",
        "hex": "#A68D86",
        "rgb": {
          "red": 166,
          "green": 141,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 3020-Y90R",
        "hex": "#A6766C",
        "rgb": {
          "red": 166,
          "green": 118,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 3030-Y90R",
        "hex": "#AD6360",
        "rgb": {
          "red": 173,
          "green": 99,
          "blue": 96,
        },
      },
      {
        "id": "NCS S 3040-Y90R",
        "hex": "#B3514F",
        "rgb": {
          "red": 179,
          "green": 81,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 3050-Y90R",
        "hex": "#B03F3E",
        "rgb": {
          "red": 176,
          "green": 63,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 3060-Y90R",
        "hex": "#9B2428",
        "rgb": {
          "red": 155,
          "green": 36,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 3560-Y90R",
        "hex": "#7E1118",
        "rgb": {
          "red": 126,
          "green": 17,
          "blue": 24,
        },
      },
      {
        "id": "NCS S 4010-Y90R",
        "hex": "#8B746B",
        "rgb": {
          "red": 139,
          "green": 116,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 4020-Y90R",
        "hex": "#8B5954",
        "rgb": {
          "red": 139,
          "green": 89,
          "blue": 84,
        },
      },
      {
        "id": "NCS S 4030-Y90R",
        "hex": "#904741",
        "rgb": {
          "red": 144,
          "green": 71,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 4040-Y90R",
        "hex": "#8C3431",
        "rgb": {
          "red": 140,
          "green": 52,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 4050-Y90R",
        "hex": "#841D22",
        "rgb": {
          "red": 132,
          "green": 29,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 4550-Y90R",
        "hex": "#6B0E12",
        "rgb": {
          "red": 107,
          "green": 14,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 5010-Y90R",
        "hex": "#755D58",
        "rgb": {
          "red": 117,
          "green": 93,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 5020-Y90R",
        "hex": "#764944",
        "rgb": {
          "red": 118,
          "green": 73,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 5030-Y90R",
        "hex": "#743331",
        "rgb": {
          "red": 116,
          "green": 51,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 5040-Y90R",
        "hex": "#530C07",
        "rgb": {
          "red": 83,
          "green": 12,
          "blue": 7,
        },
      },
      {
        "id": "NCS S 5540-Y90R",
        "hex": "#460304",
        "rgb": {
          "red": 70,
          "green": 3,
          "blue": 4,
        },
      },
      {
        "id": "NCS S 6010-Y90R",
        "hex": "#5D4644",
        "rgb": {
          "red": 93,
          "green": 70,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 6020-Y90R",
        "hex": "#5C3233",
        "rgb": {
          "red": 92,
          "green": 50,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 6030-Y90R",
        "hex": "#450B00",
        "rgb": {
          "red": 69,
          "green": 11,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 7010-Y90R",
        "hex": "#4C3230",
        "rgb": {
          "red": 76,
          "green": 50,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 7020-Y90R",
        "hex": "#39100C",
        "rgb": {
          "red": 57,
          "green": 16,
          "blue": 12,
        },
      },
      {
        "id": "NCS S 8010-Y90R",
        "hex": "#291214",
        "rgb": {
          "red": 41,
          "green": 18,
          "blue": 20,
        },
      },
      {
        "id": "NCS S 0505-R",
        "hex": "#FFF4EF",
        "rgb": {
          "red": 255,
          "green": 244,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0507-R",
        "hex": "#FFEEE8",
        "rgb": {
          "red": 255,
          "green": 238,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 0510-R",
        "hex": "#FFE7E2",
        "rgb": {
          "red": 255,
          "green": 231,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 0515-R",
        "hex": "#FFDCD5",
        "rgb": {
          "red": 255,
          "green": 220,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 0520-R",
        "hex": "#FFD3CF",
        "rgb": {
          "red": 255,
          "green": 211,
          "blue": 207,
        },
      },
      {
        "id": "NCS S 0530-R",
        "hex": "#FFC1B9",
        "rgb": {
          "red": 255,
          "green": 193,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 0540-R",
        "hex": "#FFA7A2",
        "rgb": {
          "red": 255,
          "green": 167,
          "blue": 162,
        },
      },
      {
        "id": "NCS S 0550-R",
        "hex": "#FE8784",
        "rgb": {
          "red": 254,
          "green": 135,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 0560-R",
        "hex": "#F15268",
        "rgb": {
          "red": 241,
          "green": 82,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 0565-R",
        "hex": "#F15361",
        "rgb": {
          "red": 241,
          "green": 83,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 1005-R",
        "hex": "#F4E3DE",
        "rgb": {
          "red": 244,
          "green": 227,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1010-R",
        "hex": "#F1D9D5",
        "rgb": {
          "red": 241,
          "green": 217,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 1015-R",
        "hex": "#FFD5D1",
        "rgb": {
          "red": 255,
          "green": 213,
          "blue": 209,
        },
      },
      {
        "id": "NCS S 1020-R",
        "hex": "#FCC8C9",
        "rgb": {
          "red": 252,
          "green": 200,
          "blue": 201,
        },
      },
      {
        "id": "NCS S 1030-R",
        "hex": "#FFB2B8",
        "rgb": {
          "red": 255,
          "green": 178,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 1040-R",
        "hex": "#FF9FA7",
        "rgb": {
          "red": 255,
          "green": 159,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 1050-R",
        "hex": "#FD7D86",
        "rgb": {
          "red": 253,
          "green": 125,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 1060-R",
        "hex": "#F15267",
        "rgb": {
          "red": 241,
          "green": 82,
          "blue": 103,
        },
      },
      {
        "id": "NCS S 1070-R",
        "hex": "#E7344A",
        "rgb": {
          "red": 231,
          "green": 52,
          "blue": 74,
        },
      },
      {
        "id": "NCS S 1080-R",
        "hex": "#BF002A",
        "rgb": {
          "red": 191,
          "green": 0,
          "blue": 42,
        },
      },
      {
        "id": "NCS S 1510-R",
        "hex": "#E4BDB3",
        "rgb": {
          "red": 228,
          "green": 189,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 1515-R",
        "hex": "#F0BCAE",
        "rgb": {
          "red": 240,
          "green": 188,
          "blue": 174,
        },
      },
      {
        "id": "NCS S 1580-R",
        "hex": "#9B0025",
        "rgb": {
          "red": 155,
          "green": 0,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 2005-R",
        "hex": "#C6B7B0",
        "rgb": {
          "red": 198,
          "green": 183,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 2010-R",
        "hex": "#C5B2AA",
        "rgb": {
          "red": 197,
          "green": 178,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 2020-R",
        "hex": "#D99C99",
        "rgb": {
          "red": 217,
          "green": 156,
          "blue": 153,
        },
      },
      {
        "id": "NCS S 2030-R",
        "hex": "#D68486",
        "rgb": {
          "red": 214,
          "green": 132,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 2040-R",
        "hex": "#D27070",
        "rgb": {
          "red": 210,
          "green": 112,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 2050-R",
        "hex": "#C94C59",
        "rgb": {
          "red": 201,
          "green": 76,
          "blue": 89,
        },
      },
      {
        "id": "NCS S 2060-R",
        "hex": "#BC2D3E",
        "rgb": {
          "red": 188,
          "green": 45,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 2070-R",
        "hex": "#A30024",
        "rgb": {
          "red": 163,
          "green": 0,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 2570-R",
        "hex": "#920022",
        "rgb": {
          "red": 146,
          "green": 0,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 3010-R",
        "hex": "#A18586",
        "rgb": {
          "red": 161,
          "green": 133,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 3020-R",
        "hex": "#A6736D",
        "rgb": {
          "red": 166,
          "green": 115,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 3030-R",
        "hex": "#A36563",
        "rgb": {
          "red": 163,
          "green": 101,
          "blue": 99,
        },
      },
      {
        "id": "NCS S 3040-R",
        "hex": "#A54E54",
        "rgb": {
          "red": 165,
          "green": 78,
          "blue": 84,
        },
      },
      {
        "id": "NCS S 3050-R",
        "hex": "#A43942",
        "rgb": {
          "red": 164,
          "green": 57,
          "blue": 66,
        },
      },
      {
        "id": "NCS S 3060-R",
        "hex": "#890023",
        "rgb": {
          "red": 137,
          "green": 0,
          "blue": 35,
        },
      },
      {
        "id": "NCS S 3560-R",
        "hex": "#6D001A",
        "rgb": {
          "red": 109,
          "green": 0,
          "blue": 26,
        },
      },
      {
        "id": "NCS S 4020-R",
        "hex": "#8B5A58",
        "rgb": {
          "red": 139,
          "green": 90,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 4030-R",
        "hex": "#874747",
        "rgb": {
          "red": 135,
          "green": 71,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 4040-R",
        "hex": "#8C3138",
        "rgb": {
          "red": 140,
          "green": 49,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 4050-R",
        "hex": "#811C27",
        "rgb": {
          "red": 129,
          "green": 28,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 5020-R",
        "hex": "#754A47",
        "rgb": {
          "red": 117,
          "green": 74,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 5030-R",
        "hex": "#6F2F35",
        "rgb": {
          "red": 111,
          "green": 47,
          "blue": 53,
        },
      },
      {
        "id": "NCS S 5040-R",
        "hex": "#6D001C",
        "rgb": {
          "red": 109,
          "green": 0,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 6020-R",
        "hex": "#5D2C31",
        "rgb": {
          "red": 93,
          "green": 44,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 6030-R",
        "hex": "#3B030A",
        "rgb": {
          "red": 59,
          "green": 3,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 7020-R",
        "hex": "#3B030A",
        "rgb": {
          "red": 59,
          "green": 3,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 0505-R10B",
        "hex": "#FFF3EF",
        "rgb": {
          "red": 255,
          "green": 243,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0510-R10B",
        "hex": "#FFEAEA",
        "rgb": {
          "red": 255,
          "green": 234,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 0515-R10B",
        "hex": "#FFE4E9",
        "rgb": {
          "red": 255,
          "green": 228,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 0520-R10B",
        "hex": "#FFD7DC",
        "rgb": {
          "red": 255,
          "green": 215,
          "blue": 220,
        },
      },
      {
        "id": "NCS S 0530-R10B",
        "hex": "#FFC7CF",
        "rgb": {
          "red": 255,
          "green": 199,
          "blue": 207,
        },
      },
      {
        "id": "NCS S 0540-R10B",
        "hex": "#FFACB7",
        "rgb": {
          "red": 255,
          "green": 172,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 0550-R10B",
        "hex": "#FF96A4",
        "rgb": {
          "red": 255,
          "green": 150,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 0804-R10B",
        "hex": "#FFF5F1",
        "rgb": {
          "red": 255,
          "green": 245,
          "blue": 241,
        },
      },
      {
        "id": "NCS S 0907-R10B",
        "hex": "#F4E4E0",
        "rgb": {
          "red": 244,
          "green": 228,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1005-R10B",
        "hex": "#EFE4DE",
        "rgb": {
          "red": 239,
          "green": 228,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1010-R10B",
        "hex": "#F4DBD7",
        "rgb": {
          "red": 244,
          "green": 219,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 1015-R10B",
        "hex": "#F4D3D3",
        "rgb": {
          "red": 244,
          "green": 211,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1020-R10B",
        "hex": "#F4C5C6",
        "rgb": {
          "red": 244,
          "green": 197,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 1030-R10B",
        "hex": "#FFB4C2",
        "rgb": {
          "red": 255,
          "green": 180,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 1040-R10B",
        "hex": "#FF97AC",
        "rgb": {
          "red": 255,
          "green": 151,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 1050-R10B",
        "hex": "#FC758C",
        "rgb": {
          "red": 252,
          "green": 117,
          "blue": 140,
        },
      },
      {
        "id": "NCS S 1060-R10B",
        "hex": "#F25072",
        "rgb": {
          "red": 242,
          "green": 80,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 1070-R10B",
        "hex": "#D9315A",
        "rgb": {
          "red": 217,
          "green": 49,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 1510-R10B",
        "hex": "#E8CECC",
        "rgb": {
          "red": 232,
          "green": 206,
          "blue": 204,
        },
      },
      {
        "id": "NCS S 1515-R10B",
        "hex": "#DBB6B7",
        "rgb": {
          "red": 219,
          "green": 182,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 1575-R10B",
        "hex": "#B0003E",
        "rgb": {
          "red": 176,
          "green": 0,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 2005-R10B",
        "hex": "#C6B8B4",
        "rgb": {
          "red": 198,
          "green": 184,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 2010-R10B",
        "hex": "#C4ABA9",
        "rgb": {
          "red": 196,
          "green": 171,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 2020-R10B",
        "hex": "#CDA0A7",
        "rgb": {
          "red": 205,
          "green": 160,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 2030-R10B",
        "hex": "#D78996",
        "rgb": {
          "red": 215,
          "green": 137,
          "blue": 150,
        },
      },
      {
        "id": "NCS S 2040-R10B",
        "hex": "#D26F7F",
        "rgb": {
          "red": 210,
          "green": 111,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 2050-R10B",
        "hex": "#CC586A",
        "rgb": {
          "red": 204,
          "green": 88,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 2060-R10B",
        "hex": "#B82750",
        "rgb": {
          "red": 184,
          "green": 39,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 2070-R10B",
        "hex": "#950036",
        "rgb": {
          "red": 149,
          "green": 0,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 3010-R10B",
        "hex": "#A69093",
        "rgb": {
          "red": 166,
          "green": 144,
          "blue": 147,
        },
      },
      {
        "id": "NCS S 3020-R10B",
        "hex": "#A77A81",
        "rgb": {
          "red": 167,
          "green": 122,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 3030-R10B",
        "hex": "#A46674",
        "rgb": {
          "red": 164,
          "green": 102,
          "blue": 116,
        },
      },
      {
        "id": "NCS S 3040-R10B",
        "hex": "#A04852",
        "rgb": {
          "red": 160,
          "green": 72,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 3050-R10B",
        "hex": "#952941",
        "rgb": {
          "red": 149,
          "green": 41,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 3060-R10B",
        "hex": "#8B0029",
        "rgb": {
          "red": 139,
          "green": 0,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 4010-R10B",
        "hex": "#8B7374",
        "rgb": {
          "red": 139,
          "green": 115,
          "blue": 116,
        },
      },
      {
        "id": "NCS S 4020-R10B",
        "hex": "#876169",
        "rgb": {
          "red": 135,
          "green": 97,
          "blue": 105,
        },
      },
      {
        "id": "NCS S 4030-R10B",
        "hex": "#884754",
        "rgb": {
          "red": 136,
          "green": 71,
          "blue": 84,
        },
      },
      {
        "id": "NCS S 4040-R10B",
        "hex": "#84303F",
        "rgb": {
          "red": 132,
          "green": 48,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 4050-R10B",
        "hex": "#6F0022",
        "rgb": {
          "red": 111,
          "green": 0,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 5010-R10B",
        "hex": "#756161",
        "rgb": {
          "red": 117,
          "green": 97,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 5020-R10B",
        "hex": "#724B51",
        "rgb": {
          "red": 114,
          "green": 75,
          "blue": 81,
        },
      },
      {
        "id": "NCS S 5030-R10B",
        "hex": "#6F3139",
        "rgb": {
          "red": 111,
          "green": 49,
          "blue": 57,
        },
      },
      {
        "id": "NCS S 5040-R10B",
        "hex": "#52071C",
        "rgb": {
          "red": 82,
          "green": 7,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 6010-R10B",
        "hex": "#624D4F",
        "rgb": {
          "red": 98,
          "green": 77,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 6020-R10B",
        "hex": "#5C2F3B",
        "rgb": {
          "red": 92,
          "green": 47,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 6030-R10B",
        "hex": "#3B0A13",
        "rgb": {
          "red": 59,
          "green": 10,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 7010-R10B",
        "hex": "#42282C",
        "rgb": {
          "red": 66,
          "green": 40,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 7020-R10B",
        "hex": "#2D060E",
        "rgb": {
          "red": 45,
          "green": 6,
          "blue": 14,
        },
      },
      {
        "id": "NCS S 8010-R10B",
        "hex": "#1D0106",
        "rgb": {
          "red": 29,
          "green": 1,
          "blue": 6,
        },
      },
      {
        "id": "NCS S 0505-R20B",
        "hex": "#FFF5F3",
        "rgb": {
          "red": 255,
          "green": 245,
          "blue": 243,
        },
      },
      {
        "id": "NCS S 0507-R20B",
        "hex": "#FFF3F2",
        "rgb": {
          "red": 255,
          "green": 243,
          "blue": 242,
        },
      },
      {
        "id": "NCS S 0510-R20B",
        "hex": "#FFEFF1",
        "rgb": {
          "red": 255,
          "green": 239,
          "blue": 241,
        },
      },
      {
        "id": "NCS S 0515-R20B",
        "hex": "#FFE3EB",
        "rgb": {
          "red": 255,
          "green": 227,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0520-R20B",
        "hex": "#FFDBE3",
        "rgb": {
          "red": 255,
          "green": 219,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 0530-R20B",
        "hex": "#FDC1D4",
        "rgb": {
          "red": 253,
          "green": 193,
          "blue": 212,
        },
      },
      {
        "id": "NCS S 0540-R20B",
        "hex": "#F8A8C4",
        "rgb": {
          "red": 248,
          "green": 168,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 0603-R20B",
        "hex": "#FFF9F8",
        "rgb": {
          "red": 255,
          "green": 249,
          "blue": 248,
        },
      },
      {
        "id": "NCS S 1005-R20B",
        "hex": "#EDE3E0",
        "rgb": {
          "red": 237,
          "green": 227,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1010-R20B",
        "hex": "#F4DCDC",
        "rgb": {
          "red": 244,
          "green": 220,
          "blue": 220,
        },
      },
      {
        "id": "NCS S 1015-R20B",
        "hex": "#F4D3D8",
        "rgb": {
          "red": 244,
          "green": 211,
          "blue": 216,
        },
      },
      {
        "id": "NCS S 1020-R20B",
        "hex": "#F3C9D1",
        "rgb": {
          "red": 243,
          "green": 201,
          "blue": 209,
        },
      },
      {
        "id": "NCS S 1030-R20B",
        "hex": "#FBAEC7",
        "rgb": {
          "red": 251,
          "green": 174,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 1040-R20B",
        "hex": "#F893B6",
        "rgb": {
          "red": 248,
          "green": 147,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 1050-R20B",
        "hex": "#F26C9F",
        "rgb": {
          "red": 242,
          "green": 108,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 1060-R20B",
        "hex": "#EF538E",
        "rgb": {
          "red": 239,
          "green": 83,
          "blue": 142,
        },
      },
      {
        "id": "NCS S 1070-R20B",
        "hex": "#D82E71",
        "rgb": {
          "red": 216,
          "green": 46,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 1510-R20B",
        "hex": "#DDCCCD",
        "rgb": {
          "red": 221,
          "green": 204,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 1515-R20B",
        "hex": "#DAB6BA",
        "rgb": {
          "red": 218,
          "green": 182,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 2005-R20B",
        "hex": "#C6BBB9",
        "rgb": {
          "red": 198,
          "green": 187,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 2010-R20B",
        "hex": "#C4ABAC",
        "rgb": {
          "red": 196,
          "green": 171,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 2020-R20B",
        "hex": "#C598A6",
        "rgb": {
          "red": 197,
          "green": 152,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 2030-R20B",
        "hex": "#CC859C",
        "rgb": {
          "red": 204,
          "green": 133,
          "blue": 156,
        },
      },
      {
        "id": "NCS S 2040-R20B",
        "hex": "#C66E88",
        "rgb": {
          "red": 198,
          "green": 110,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 2050-R20B",
        "hex": "#C64475",
        "rgb": {
          "red": 198,
          "green": 68,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 2060-R20B",
        "hex": "#B82360",
        "rgb": {
          "red": 184,
          "green": 35,
          "blue": 96,
        },
      },
      {
        "id": "NCS S 2065-R20B",
        "hex": "#9C004B",
        "rgb": {
          "red": 156,
          "green": 0,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 3005-R20B",
        "hex": "#A69D9B",
        "rgb": {
          "red": 166,
          "green": 157,
          "blue": 155,
        },
      },
      {
        "id": "NCS S 3010-R20B",
        "hex": "#9B8A8F",
        "rgb": {
          "red": 155,
          "green": 138,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3020-R20B",
        "hex": "#9B737F",
        "rgb": {
          "red": 155,
          "green": 115,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 3030-R20B",
        "hex": "#9A5D73",
        "rgb": {
          "red": 154,
          "green": 93,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 3040-R20B",
        "hex": "#96435F",
        "rgb": {
          "red": 150,
          "green": 67,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 3050-R20B",
        "hex": "#8B1C44",
        "rgb": {
          "red": 139,
          "green": 28,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 3060-R20B",
        "hex": "#81023D",
        "rgb": {
          "red": 129,
          "green": 2,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 4005-R20B",
        "hex": "#847D7E",
        "rgb": {
          "red": 132,
          "green": 125,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 4020-R20B",
        "hex": "#8A6671",
        "rgb": {
          "red": 138,
          "green": 102,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 4030-R20B",
        "hex": "#84475A",
        "rgb": {
          "red": 132,
          "green": 71,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 4040-R20B",
        "hex": "#7F2444",
        "rgb": {
          "red": 127,
          "green": 36,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 4050-R20B",
        "hex": "#720038",
        "rgb": {
          "red": 114,
          "green": 0,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 5005-R20B",
        "hex": "#786F75",
        "rgb": {
          "red": 120,
          "green": 111,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 5020-R20B",
        "hex": "#724853",
        "rgb": {
          "red": 114,
          "green": 72,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5030-R20B",
        "hex": "#6D2841",
        "rgb": {
          "red": 109,
          "green": 40,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 5040-R20B",
        "hex": "#5F002F",
        "rgb": {
          "red": 95,
          "green": 0,
          "blue": 47,
        },
      },
      {
        "id": "NCS S 6005-R20B",
        "hex": "#5F575C",
        "rgb": {
          "red": 95,
          "green": 87,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 6020-R20B",
        "hex": "#5C253A",
        "rgb": {
          "red": 92,
          "green": 37,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 6030-R20B",
        "hex": "#3E001C",
        "rgb": {
          "red": 62,
          "green": 0,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 7005-R20B",
        "hex": "#483F44",
        "rgb": {
          "red": 72,
          "green": 63,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 7020-R20B",
        "hex": "#2C0214",
        "rgb": {
          "red": 44,
          "green": 2,
          "blue": 20,
        },
      },
      {
        "id": "NCS S 8005-R20B",
        "hex": "#2A1F24",
        "rgb": {
          "red": 42,
          "green": 31,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 8505-R20B",
        "hex": "#15010A",
        "rgb": {
          "red": 21,
          "green": 1,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 0505-R30B",
        "hex": "#FFF6F7",
        "rgb": {
          "red": 255,
          "green": 246,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 0510-R30B",
        "hex": "#FFF2F4",
        "rgb": {
          "red": 255,
          "green": 242,
          "blue": 244,
        },
      },
      {
        "id": "NCS S 0520-R30B",
        "hex": "#FEDCE9",
        "rgb": {
          "red": 254,
          "green": 220,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 0530-R30B",
        "hex": "#FAC0D9",
        "rgb": {
          "red": 250,
          "green": 192,
          "blue": 217,
        },
      },
      {
        "id": "NCS S 0540-R30B",
        "hex": "#F6AECD",
        "rgb": {
          "red": 246,
          "green": 174,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 0804-R30B",
        "hex": "#F6F0F0",
        "rgb": {
          "red": 246,
          "green": 240,
          "blue": 240,
        },
      },
      {
        "id": "NCS S 0907-R30B",
        "hex": "#F3E8E5",
        "rgb": {
          "red": 243,
          "green": 232,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 1005-R30B",
        "hex": "#F1E8E8",
        "rgb": {
          "red": 241,
          "green": 232,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1010-R30B",
        "hex": "#F3DFE0",
        "rgb": {
          "red": 243,
          "green": 223,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1020-R30B",
        "hex": "#F0C8D5",
        "rgb": {
          "red": 240,
          "green": 200,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 1030-R30B",
        "hex": "#E8AAC4",
        "rgb": {
          "red": 232,
          "green": 170,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 1040-R30B",
        "hex": "#E997C5",
        "rgb": {
          "red": 233,
          "green": 151,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 1050-R30B",
        "hex": "#DD64A4",
        "rgb": {
          "red": 221,
          "green": 100,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 1060-R30B",
        "hex": "#D94997",
        "rgb": {
          "red": 217,
          "green": 73,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 2005-R30B",
        "hex": "#C7BBBC",
        "rgb": {
          "red": 199,
          "green": 187,
          "blue": 188,
        },
      },
      {
        "id": "NCS S 2010-R30B",
        "hex": "#C3ABB2",
        "rgb": {
          "red": 195,
          "green": 171,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2020-R30B",
        "hex": "#C699AA",
        "rgb": {
          "red": 198,
          "green": 153,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 2030-R30B",
        "hex": "#CA85A3",
        "rgb": {
          "red": 202,
          "green": 133,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 2040-R30B",
        "hex": "#BD6F95",
        "rgb": {
          "red": 189,
          "green": 111,
          "blue": 149,
        },
      },
      {
        "id": "NCS S 2050-R30B",
        "hex": "#B94F82",
        "rgb": {
          "red": 185,
          "green": 79,
          "blue": 130,
        },
      },
      {
        "id": "NCS S 2060-R30B",
        "hex": "#A9206E",
        "rgb": {
          "red": 169,
          "green": 32,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 3010-R30B",
        "hex": "#A1909A",
        "rgb": {
          "red": 161,
          "green": 144,
          "blue": 154,
        },
      },
      {
        "id": "NCS S 3020-R30B",
        "hex": "#9C7589",
        "rgb": {
          "red": 156,
          "green": 117,
          "blue": 137,
        },
      },
      {
        "id": "NCS S 3030-R30B",
        "hex": "#9F6280",
        "rgb": {
          "red": 159,
          "green": 98,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 3040-R30B",
        "hex": "#95446B",
        "rgb": {
          "red": 149,
          "green": 68,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 3050-R30B",
        "hex": "#912761",
        "rgb": {
          "red": 145,
          "green": 39,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 3055-R30B",
        "hex": "#87005A",
        "rgb": {
          "red": 135,
          "green": 0,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 4010-R30B",
        "hex": "#8C7884",
        "rgb": {
          "red": 140,
          "green": 120,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 4020-R30B",
        "hex": "#886577",
        "rgb": {
          "red": 136,
          "green": 101,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 4030-R30B",
        "hex": "#844966",
        "rgb": {
          "red": 132,
          "green": 73,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 4040-R30B",
        "hex": "#7C2B58",
        "rgb": {
          "red": 124,
          "green": 43,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 4050-R30B",
        "hex": "#74004B",
        "rgb": {
          "red": 116,
          "green": 0,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 5010-R30B",
        "hex": "#75606C",
        "rgb": {
          "red": 117,
          "green": 96,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 5020-R30B",
        "hex": "#71495D",
        "rgb": {
          "red": 113,
          "green": 73,
          "blue": 93,
        },
      },
      {
        "id": "NCS S 5030-R30B",
        "hex": "#6D3150",
        "rgb": {
          "red": 109,
          "green": 49,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 5040-R30B",
        "hex": "#510035",
        "rgb": {
          "red": 81,
          "green": 0,
          "blue": 53,
        },
      },
      {
        "id": "NCS S 6010-R30B",
        "hex": "#5D4852",
        "rgb": {
          "red": 93,
          "green": 72,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 6020-R30B",
        "hex": "#58233B",
        "rgb": {
          "red": 88,
          "green": 35,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 6030-R30B",
        "hex": "#3A0023",
        "rgb": {
          "red": 58,
          "green": 0,
          "blue": 35,
        },
      },
      {
        "id": "NCS S 7010-R30B",
        "hex": "#48333C",
        "rgb": {
          "red": 72,
          "green": 51,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 7020-R30B",
        "hex": "#260117",
        "rgb": {
          "red": 38,
          "green": 1,
          "blue": 23,
        },
      },
      {
        "id": "NCS S 8010-R30B",
        "hex": "#15010A",
        "rgb": {
          "red": 21,
          "green": 1,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 0505-R40B",
        "hex": "#FFF6FA",
        "rgb": {
          "red": 255,
          "green": 246,
          "blue": 250,
        },
      },
      {
        "id": "NCS S 0507-R40B",
        "hex": "#FFF6FA",
        "rgb": {
          "red": 255,
          "green": 246,
          "blue": 250,
        },
      },
      {
        "id": "NCS S 0510-R40B",
        "hex": "#FFF2F8",
        "rgb": {
          "red": 255,
          "green": 242,
          "blue": 248,
        },
      },
      {
        "id": "NCS S 0515-R40B",
        "hex": "#FFEDF5",
        "rgb": {
          "red": 255,
          "green": 237,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 0520-R40B",
        "hex": "#FDDCEC",
        "rgb": {
          "red": 253,
          "green": 220,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 0530-R40B",
        "hex": "#F5C4E3",
        "rgb": {
          "red": 245,
          "green": 196,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 0603-R40B",
        "hex": "#FBF6F9",
        "rgb": {
          "red": 251,
          "green": 246,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 1005-R40B",
        "hex": "#E8E2E6",
        "rgb": {
          "red": 232,
          "green": 226,
          "blue": 230,
        },
      },
      {
        "id": "NCS S 1010-R40B",
        "hex": "#E7DBE1",
        "rgb": {
          "red": 231,
          "green": 219,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 1015-R40B",
        "hex": "#E5D2DC",
        "rgb": {
          "red": 229,
          "green": 210,
          "blue": 220,
        },
      },
      {
        "id": "NCS S 1020-R40B",
        "hex": "#EACFE2",
        "rgb": {
          "red": 234,
          "green": 207,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 1030-R40B",
        "hex": "#EFB9E1",
        "rgb": {
          "red": 239,
          "green": 185,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 1040-R40B",
        "hex": "#E6A0D3",
        "rgb": {
          "red": 230,
          "green": 160,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1050-R40B",
        "hex": "#D777B9",
        "rgb": {
          "red": 215,
          "green": 119,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 1510-R40B",
        "hex": "#D6CBD1",
        "rgb": {
          "red": 214,
          "green": 203,
          "blue": 209,
        },
      },
      {
        "id": "NCS S 1515-R40B",
        "hex": "#D5BECD",
        "rgb": {
          "red": 213,
          "green": 190,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 2005-R40B",
        "hex": "#C2BEC2",
        "rgb": {
          "red": 194,
          "green": 190,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 2010-R40B",
        "hex": "#C5B7BF",
        "rgb": {
          "red": 197,
          "green": 183,
          "blue": 191,
        },
      },
      {
        "id": "NCS S 2020-R40B",
        "hex": "#C4A4B9",
        "rgb": {
          "red": 196,
          "green": 164,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 2030-R40B",
        "hex": "#C78BB8",
        "rgb": {
          "red": 199,
          "green": 139,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 2040-R40B",
        "hex": "#CA77C8",
        "rgb": {
          "red": 202,
          "green": 119,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 2050-R40B",
        "hex": "#B853B7",
        "rgb": {
          "red": 184,
          "green": 83,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 2060-R40B",
        "hex": "#AC30A3",
        "rgb": {
          "red": 172,
          "green": 48,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 3010-R40B",
        "hex": "#A3929C",
        "rgb": {
          "red": 163,
          "green": 146,
          "blue": 156,
        },
      },
      {
        "id": "NCS S 3020-R40B",
        "hex": "#997C8F",
        "rgb": {
          "red": 153,
          "green": 124,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3030-R40B",
        "hex": "#9E7298",
        "rgb": {
          "red": 158,
          "green": 114,
          "blue": 152,
        },
      },
      {
        "id": "NCS S 3040-R40B",
        "hex": "#984E86",
        "rgb": {
          "red": 152,
          "green": 78,
          "blue": 134,
        },
      },
      {
        "id": "NCS S 3050-R40B",
        "hex": "#8D2C7D",
        "rgb": {
          "red": 141,
          "green": 44,
          "blue": 125,
        },
      },
      {
        "id": "NCS S 3055-R40B",
        "hex": "#8B057F",
        "rgb": {
          "red": 139,
          "green": 5,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 4020-R40B",
        "hex": "#7F6377",
        "rgb": {
          "red": 127,
          "green": 99,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 4030-R40B",
        "hex": "#7B496D",
        "rgb": {
          "red": 123,
          "green": 73,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 4040-R40B",
        "hex": "#7A2F6E",
        "rgb": {
          "red": 122,
          "green": 47,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 4050-R40B",
        "hex": "#6D0168",
        "rgb": {
          "red": 109,
          "green": 1,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 5020-R40B",
        "hex": "#6C4E61",
        "rgb": {
          "red": 108,
          "green": 78,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 5030-R40B",
        "hex": "#623258",
        "rgb": {
          "red": 98,
          "green": 50,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 5040-R40B",
        "hex": "#540053",
        "rgb": {
          "red": 84,
          "green": 0,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 6020-R40B",
        "hex": "#53324B",
        "rgb": {
          "red": 83,
          "green": 50,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 6030-R40B",
        "hex": "#3B0041",
        "rgb": {
          "red": 59,
          "green": 0,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 7020-R40B",
        "hex": "#25021D",
        "rgb": {
          "red": 37,
          "green": 2,
          "blue": 29,
        },
      },
      {
        "id": "NCS S 0505-R50B",
        "hex": "#FFFAFD",
        "rgb": {
          "red": 255,
          "green": 250,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 0510-R50B",
        "hex": "#FCF5FA",
        "rgb": {
          "red": 252,
          "green": 245,
          "blue": 250,
        },
      },
      {
        "id": "NCS S 0520-R50B",
        "hex": "#F8E3F7",
        "rgb": {
          "red": 248,
          "green": 227,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 0530-R50B",
        "hex": "#EEC7EF",
        "rgb": {
          "red": 238,
          "green": 199,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0804-R50B",
        "hex": "#F6F6F9",
        "rgb": {
          "red": 246,
          "green": 246,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 0907-R50B",
        "hex": "#EFEBEF",
        "rgb": {
          "red": 239,
          "green": 235,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 1005-R50B",
        "hex": "#E7E2E6",
        "rgb": {
          "red": 231,
          "green": 226,
          "blue": 230,
        },
      },
      {
        "id": "NCS S 1010-R50B",
        "hex": "#E8DFE9",
        "rgb": {
          "red": 232,
          "green": 223,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1020-R50B",
        "hex": "#ECD1F5",
        "rgb": {
          "red": 236,
          "green": 209,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 1030-R50B",
        "hex": "#EAC1ED",
        "rgb": {
          "red": 234,
          "green": 193,
          "blue": 237,
        },
      },
      {
        "id": "NCS S 1040-R50B",
        "hex": "#DDAAE7",
        "rgb": {
          "red": 221,
          "green": 170,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 2005-R50B",
        "hex": "#BDB9BD",
        "rgb": {
          "red": 189,
          "green": 185,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 2010-R50B",
        "hex": "#BFB4BF",
        "rgb": {
          "red": 191,
          "green": 180,
          "blue": 191,
        },
      },
      {
        "id": "NCS S 2020-R50B",
        "hex": "#C4A5CD",
        "rgb": {
          "red": 196,
          "green": 165,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 2030-R50B",
        "hex": "#C89ED7",
        "rgb": {
          "red": 200,
          "green": 158,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 2040-R50B",
        "hex": "#C180D5",
        "rgb": {
          "red": 193,
          "green": 128,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 2050-R50B",
        "hex": "#A957C1",
        "rgb": {
          "red": 169,
          "green": 87,
          "blue": 193,
        },
      },
      {
        "id": "NCS S 3005-R50B",
        "hex": "#A09CA4",
        "rgb": {
          "red": 160,
          "green": 156,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 3010-R50B",
        "hex": "#A196A1",
        "rgb": {
          "red": 161,
          "green": 150,
          "blue": 161,
        },
      },
      {
        "id": "NCS S 3020-R50B",
        "hex": "#9F8AA6",
        "rgb": {
          "red": 159,
          "green": 138,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 3030-R50B",
        "hex": "#A075AF",
        "rgb": {
          "red": 160,
          "green": 117,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 3040-R50B",
        "hex": "#9B54A9",
        "rgb": {
          "red": 155,
          "green": 84,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 3050-R50B",
        "hex": "#943BA9",
        "rgb": {
          "red": 148,
          "green": 59,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 3055-R50B",
        "hex": "#8126A3",
        "rgb": {
          "red": 129,
          "green": 38,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 4005-R50B",
        "hex": "#7E7F8A",
        "rgb": {
          "red": 126,
          "green": 127,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 4010-R50B",
        "hex": "#817C8D",
        "rgb": {
          "red": 129,
          "green": 124,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 4020-R50B",
        "hex": "#7E6A85",
        "rgb": {
          "red": 126,
          "green": 106,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 4030-R50B",
        "hex": "#704D79",
        "rgb": {
          "red": 112,
          "green": 77,
          "blue": 121,
        },
      },
      {
        "id": "NCS S 4040-R50B",
        "hex": "#773982",
        "rgb": {
          "red": 119,
          "green": 57,
          "blue": 130,
        },
      },
      {
        "id": "NCS S 4050-R50B",
        "hex": "#56007C",
        "rgb": {
          "red": 86,
          "green": 0,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 5005-R50B",
        "hex": "#757479",
        "rgb": {
          "red": 117,
          "green": 116,
          "blue": 121,
        },
      },
      {
        "id": "NCS S 5010-R50B",
        "hex": "#6E6671",
        "rgb": {
          "red": 110,
          "green": 102,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 5020-R50B",
        "hex": "#684F6E",
        "rgb": {
          "red": 104,
          "green": 79,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 5030-R50B",
        "hex": "#5E3664",
        "rgb": {
          "red": 94,
          "green": 54,
          "blue": 100,
        },
      },
      {
        "id": "NCS S 5040-R50B",
        "hex": "#4D1063",
        "rgb": {
          "red": 77,
          "green": 16,
          "blue": 99,
        },
      },
      {
        "id": "NCS S 6005-R50B",
        "hex": "#5D595E",
        "rgb": {
          "red": 93,
          "green": 89,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 6010-R50B",
        "hex": "#584C56",
        "rgb": {
          "red": 88,
          "green": 76,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 6020-R50B",
        "hex": "#4D374F",
        "rgb": {
          "red": 77,
          "green": 55,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 6030-R50B",
        "hex": "#3A004B",
        "rgb": {
          "red": 58,
          "green": 0,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 7005-R50B",
        "hex": "#3E3A3F",
        "rgb": {
          "red": 62,
          "green": 58,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 7010-R50B",
        "hex": "#3D3640",
        "rgb": {
          "red": 61,
          "green": 54,
          "blue": 64,
        },
      },
      {
        "id": "NCS S 7020-R50B",
        "hex": "#27002D",
        "rgb": {
          "red": 39,
          "green": 0,
          "blue": 45,
        },
      },
      {
        "id": "NCS S 8005-R50B",
        "hex": "#121820",
        "rgb": {
          "red": 18,
          "green": 24,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 8010-R50B",
        "hex": "#1D0724",
        "rgb": {
          "red": 29,
          "green": 7,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 0505-R60B",
        "hex": "#FCFAFD",
        "rgb": {
          "red": 252,
          "green": 250,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 0507-R60B",
        "hex": "#F9F6FB",
        "rgb": {
          "red": 249,
          "green": 246,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0510-R60B",
        "hex": "#F4F1FB",
        "rgb": {
          "red": 244,
          "green": 241,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0515-R60B",
        "hex": "#EEEAFA",
        "rgb": {
          "red": 238,
          "green": 234,
          "blue": 250,
        },
      },
      {
        "id": "NCS S 0520-R60B",
        "hex": "#E9E6F9",
        "rgb": {
          "red": 233,
          "green": 230,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 0525-R60B",
        "hex": "#DFDCF5",
        "rgb": {
          "red": 223,
          "green": 220,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 0603-R60B",
        "hex": "#F7F6F9",
        "rgb": {
          "red": 247,
          "green": 246,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 1005-R60B",
        "hex": "#ECEBF0",
        "rgb": {
          "red": 236,
          "green": 235,
          "blue": 240,
        },
      },
      {
        "id": "NCS S 1010-R60B",
        "hex": "#E5E3EE",
        "rgb": {
          "red": 229,
          "green": 227,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1015-R60B",
        "hex": "#DDD9EA",
        "rgb": {
          "red": 221,
          "green": 217,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 1020-R60B",
        "hex": "#DDD5F4",
        "rgb": {
          "red": 221,
          "green": 213,
          "blue": 244,
        },
      },
      {
        "id": "NCS S 1030-R60B",
        "hex": "#CBBFEC",
        "rgb": {
          "red": 203,
          "green": 191,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 1040-R60B",
        "hex": "#C6AFE8",
        "rgb": {
          "red": 198,
          "green": 175,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1510-R60B",
        "hex": "#D1CFD9",
        "rgb": {
          "red": 209,
          "green": 207,
          "blue": 217,
        },
      },
      {
        "id": "NCS S 1515-R60B",
        "hex": "#CAC5DA",
        "rgb": {
          "red": 202,
          "green": 197,
          "blue": 218,
        },
      },
      {
        "id": "NCS S 2005-R60B",
        "hex": "#C1C0C7",
        "rgb": {
          "red": 193,
          "green": 192,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2010-R60B",
        "hex": "#C0BFC9",
        "rgb": {
          "red": 192,
          "green": 191,
          "blue": 201,
        },
      },
      {
        "id": "NCS S 2020-R60B",
        "hex": "#ABA2C6",
        "rgb": {
          "red": 171,
          "green": 162,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 2030-R60B",
        "hex": "#BAADE5",
        "rgb": {
          "red": 186,
          "green": 173,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 2040-R60B",
        "hex": "#B294DD",
        "rgb": {
          "red": 178,
          "green": 148,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 2050-R60B",
        "hex": "#925FC2",
        "rgb": {
          "red": 146,
          "green": 95,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 3010-R60B",
        "hex": "#9D9BA9",
        "rgb": {
          "red": 157,
          "green": 155,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 3020-R60B",
        "hex": "#9993AF",
        "rgb": {
          "red": 153,
          "green": 147,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 3030-R60B",
        "hex": "#8573AA",
        "rgb": {
          "red": 133,
          "green": 115,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 3040-R60B",
        "hex": "#8065B6",
        "rgb": {
          "red": 128,
          "green": 101,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 3050-R60B",
        "hex": "#6F44AF",
        "rgb": {
          "red": 111,
          "green": 68,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 3555-R60B",
        "hex": "#462193",
        "rgb": {
          "red": 70,
          "green": 33,
          "blue": 147,
        },
      },
      {
        "id": "NCS S 4020-R60B",
        "hex": "#716D8A",
        "rgb": {
          "red": 113,
          "green": 109,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 4030-R60B",
        "hex": "#5F5180",
        "rgb": {
          "red": 95,
          "green": 81,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 4040-R60B",
        "hex": "#593B7B",
        "rgb": {
          "red": 89,
          "green": 59,
          "blue": 123,
        },
      },
      {
        "id": "NCS S 4050-R60B",
        "hex": "#49277F",
        "rgb": {
          "red": 73,
          "green": 39,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 5020-R60B",
        "hex": "#564E6F",
        "rgb": {
          "red": 86,
          "green": 78,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 5030-R60B",
        "hex": "#4B3E67",
        "rgb": {
          "red": 75,
          "green": 62,
          "blue": 103,
        },
      },
      {
        "id": "NCS S 5040-R60B",
        "hex": "#381067",
        "rgb": {
          "red": 56,
          "green": 16,
          "blue": 103,
        },
      },
      {
        "id": "NCS S 6020-R60B",
        "hex": "#453A5B",
        "rgb": {
          "red": 69,
          "green": 58,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 6030-R60B",
        "hex": "#2C1153",
        "rgb": {
          "red": 44,
          "green": 17,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 7020-R60B",
        "hex": "#14042D",
        "rgb": {
          "red": 20,
          "green": 4,
          "blue": 45,
        },
      },
      {
        "id": "NCS S 0505-R70B",
        "hex": "#F8F9FD",
        "rgb": {
          "red": 248,
          "green": 249,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 0510-R70B",
        "hex": "#F2F4FC",
        "rgb": {
          "red": 242,
          "green": 244,
          "blue": 252,
        },
      },
      {
        "id": "NCS S 0520-R70B",
        "hex": "#E3E6F8",
        "rgb": {
          "red": 227,
          "green": 230,
          "blue": 248,
        },
      },
      {
        "id": "NCS S 0525-R70B",
        "hex": "#D7E0F5",
        "rgb": {
          "red": 215,
          "green": 224,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 0804-R70B",
        "hex": "#EEEFF3",
        "rgb": {
          "red": 238,
          "green": 239,
          "blue": 243,
        },
      },
      {
        "id": "NCS S 0907-R70B",
        "hex": "#EBECF1",
        "rgb": {
          "red": 235,
          "green": 236,
          "blue": 241,
        },
      },
      {
        "id": "NCS S 1005-R70B",
        "hex": "#E5E8ED",
        "rgb": {
          "red": 229,
          "green": 232,
          "blue": 237,
        },
      },
      {
        "id": "NCS S 1010-R70B",
        "hex": "#DBDFE9",
        "rgb": {
          "red": 219,
          "green": 223,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1020-R70B",
        "hex": "#D0DDF3",
        "rgb": {
          "red": 208,
          "green": 221,
          "blue": 243,
        },
      },
      {
        "id": "NCS S 1030-R70B",
        "hex": "#C1D1EE",
        "rgb": {
          "red": 193,
          "green": 209,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1040-R70B",
        "hex": "#B1BEE5",
        "rgb": {
          "red": 177,
          "green": 190,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 1550-R70B",
        "hex": "#949CD4",
        "rgb": {
          "red": 148,
          "green": 156,
          "blue": 212,
        },
      },
      {
        "id": "NCS S 1555-R70B",
        "hex": "#7D83C5",
        "rgb": {
          "red": 125,
          "green": 131,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 2005-R70B",
        "hex": "#BDBFC6",
        "rgb": {
          "red": 189,
          "green": 191,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 2010-R70B",
        "hex": "#AFB8C7",
        "rgb": {
          "red": 175,
          "green": 184,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2020-R70B",
        "hex": "#A3AAC8",
        "rgb": {
          "red": 163,
          "green": 170,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 2030-R70B",
        "hex": "#989EC7",
        "rgb": {
          "red": 152,
          "green": 158,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2040-R70B",
        "hex": "#8795CE",
        "rgb": {
          "red": 135,
          "green": 149,
          "blue": 206,
        },
      },
      {
        "id": "NCS S 2050-R70B",
        "hex": "#7D83C5",
        "rgb": {
          "red": 125,
          "green": 131,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 2060-R70B",
        "hex": "#5757A9",
        "rgb": {
          "red": 87,
          "green": 87,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 3010-R70B",
        "hex": "#969AA5",
        "rgb": {
          "red": 150,
          "green": 154,
          "blue": 165,
        },
      },
      {
        "id": "NCS S 3020-R70B",
        "hex": "#8691A9",
        "rgb": {
          "red": 134,
          "green": 145,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 3030-R70B",
        "hex": "#8287AF",
        "rgb": {
          "red": 130,
          "green": 135,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 3040-R70B",
        "hex": "#6E71B4",
        "rgb": {
          "red": 110,
          "green": 113,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 3050-R70B",
        "hex": "#5158A7",
        "rgb": {
          "red": 81,
          "green": 88,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 3060-R70B",
        "hex": "#403F9A",
        "rgb": {
          "red": 64,
          "green": 63,
          "blue": 154,
        },
      },
      {
        "id": "NCS S 4010-R70B",
        "hex": "#787D89",
        "rgb": {
          "red": 120,
          "green": 125,
          "blue": 137,
        },
      },
      {
        "id": "NCS S 4020-R70B",
        "hex": "#6A6D8B",
        "rgb": {
          "red": 106,
          "green": 109,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 4030-R70B",
        "hex": "#64618E",
        "rgb": {
          "red": 100,
          "green": 97,
          "blue": 142,
        },
      },
      {
        "id": "NCS S 4040-R70B",
        "hex": "#51518B",
        "rgb": {
          "red": 81,
          "green": 81,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 4050-R70B",
        "hex": "#343589",
        "rgb": {
          "red": 52,
          "green": 53,
          "blue": 137,
        },
      },
      {
        "id": "NCS S 4055-R70B",
        "hex": "#2D2E8C",
        "rgb": {
          "red": 45,
          "green": 46,
          "blue": 140,
        },
      },
      {
        "id": "NCS S 4550-R70B",
        "hex": "#27277C",
        "rgb": {
          "red": 39,
          "green": 39,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 5010-R70B",
        "hex": "#646B75",
        "rgb": {
          "red": 100,
          "green": 107,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 5020-R70B",
        "hex": "#545671",
        "rgb": {
          "red": 84,
          "green": 86,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 5030-R70B",
        "hex": "#42416F",
        "rgb": {
          "red": 66,
          "green": 65,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 5040-R70B",
        "hex": "#2C2A69",
        "rgb": {
          "red": 44,
          "green": 42,
          "blue": 105,
        },
      },
      {
        "id": "NCS S 5540-R70B",
        "hex": "#192263",
        "rgb": {
          "red": 25,
          "green": 34,
          "blue": 99,
        },
      },
      {
        "id": "NCS S 6010-R70B",
        "hex": "#636571",
        "rgb": {
          "red": 99,
          "green": 101,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 6020-R70B",
        "hex": "#3C3A5B",
        "rgb": {
          "red": 60,
          "green": 58,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 6030-R70B",
        "hex": "#0F1E53",
        "rgb": {
          "red": 15,
          "green": 30,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 7010-R70B",
        "hex": "#31323F",
        "rgb": {
          "red": 49,
          "green": 50,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 7020-R70B",
        "hex": "#0C0A28",
        "rgb": {
          "red": 12,
          "green": 10,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 8010-R70B",
        "hex": "#131620",
        "rgb": {
          "red": 19,
          "green": 22,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 0505-R80B",
        "hex": "#F6F9FD",
        "rgb": {
          "red": 246,
          "green": 249,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 0507-R80B",
        "hex": "#F4F9FD",
        "rgb": {
          "red": 244,
          "green": 249,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 0510-R80B",
        "hex": "#EEF7FC",
        "rgb": {
          "red": 238,
          "green": 247,
          "blue": 252,
        },
      },
      {
        "id": "NCS S 0515-R80B",
        "hex": "#E4F2FA",
        "rgb": {
          "red": 228,
          "green": 242,
          "blue": 250,
        },
      },
      {
        "id": "NCS S 0520-R80B",
        "hex": "#DAEDF9",
        "rgb": {
          "red": 218,
          "green": 237,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 0530-R80B",
        "hex": "#C2DFF2",
        "rgb": {
          "red": 194,
          "green": 223,
          "blue": 242,
        },
      },
      {
        "id": "NCS S 0603-R80B",
        "hex": "#F7F9FA",
        "rgb": {
          "red": 247,
          "green": 249,
          "blue": 250,
        },
      },
      {
        "id": "NCS S 1005-R80B",
        "hex": "#E1E5E9",
        "rgb": {
          "red": 225,
          "green": 229,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1010-R80B",
        "hex": "#D9E2E9",
        "rgb": {
          "red": 217,
          "green": 226,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1015-R80B",
        "hex": "#D8E9F7",
        "rgb": {
          "red": 216,
          "green": 233,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 1020-R80B",
        "hex": "#CDE2F5",
        "rgb": {
          "red": 205,
          "green": 226,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 1030-R80B",
        "hex": "#B6D4ED",
        "rgb": {
          "red": 182,
          "green": 212,
          "blue": 237,
        },
      },
      {
        "id": "NCS S 1040-R80B",
        "hex": "#9CC4E4",
        "rgb": {
          "red": 156,
          "green": 196,
          "blue": 228,
        },
      },
      {
        "id": "NCS S 1510-R80B",
        "hex": "#C5D1DB",
        "rgb": {
          "red": 197,
          "green": 209,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 1515-R80B",
        "hex": "#BBCCD9",
        "rgb": {
          "red": 187,
          "green": 204,
          "blue": 217,
        },
      },
      {
        "id": "NCS S 1550-R80B",
        "hex": "#74A5D3",
        "rgb": {
          "red": 116,
          "green": 165,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1555-R80B",
        "hex": "#5597C9",
        "rgb": {
          "red": 85,
          "green": 151,
          "blue": 201,
        },
      },
      {
        "id": "NCS S 2005-R80B",
        "hex": "#BBC1C4",
        "rgb": {
          "red": 187,
          "green": 193,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 2010-R80B",
        "hex": "#B7C2CD",
        "rgb": {
          "red": 183,
          "green": 194,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 2020-R80B",
        "hex": "#99B1CA",
        "rgb": {
          "red": 153,
          "green": 177,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 2030-R80B",
        "hex": "#80ABD1",
        "rgb": {
          "red": 128,
          "green": 171,
          "blue": 209,
        },
      },
      {
        "id": "NCS S 2040-R80B",
        "hex": "#709FCD",
        "rgb": {
          "red": 112,
          "green": 159,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 2050-R80B",
        "hex": "#5990C6",
        "rgb": {
          "red": 89,
          "green": 144,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 2060-R80B",
        "hex": "#3F7CB9",
        "rgb": {
          "red": 63,
          "green": 124,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 2565-R80B",
        "hex": "#00569E",
        "rgb": {
          "red": 0,
          "green": 86,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 3005-R80B",
        "hex": "#969C9F",
        "rgb": {
          "red": 150,
          "green": 156,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 3010-R80B",
        "hex": "#8D989F",
        "rgb": {
          "red": 141,
          "green": 152,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 3020-R80B",
        "hex": "#7A8DA8",
        "rgb": {
          "red": 122,
          "green": 141,
          "blue": 168,
        },
      },
      {
        "id": "NCS S 3030-R80B",
        "hex": "#6A85A6",
        "rgb": {
          "red": 106,
          "green": 133,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 3040-R80B",
        "hex": "#5173AD",
        "rgb": {
          "red": 81,
          "green": 115,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 3050-R80B",
        "hex": "#2564A6",
        "rgb": {
          "red": 37,
          "green": 100,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 3060-R80B",
        "hex": "#134A98",
        "rgb": {
          "red": 19,
          "green": 74,
          "blue": 152,
        },
      },
      {
        "id": "NCS S 3560-R80B",
        "hex": "#103D82",
        "rgb": {
          "red": 16,
          "green": 61,
          "blue": 130,
        },
      },
      {
        "id": "NCS S 4005-R80B",
        "hex": "#80848A",
        "rgb": {
          "red": 128,
          "green": 132,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 4020-R80B",
        "hex": "#5A7088",
        "rgb": {
          "red": 90,
          "green": 112,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 4030-R80B",
        "hex": "#4E688E",
        "rgb": {
          "red": 78,
          "green": 104,
          "blue": 142,
        },
      },
      {
        "id": "NCS S 4040-R80B",
        "hex": "#385B94",
        "rgb": {
          "red": 56,
          "green": 91,
          "blue": 148,
        },
      },
      {
        "id": "NCS S 4050-R80B",
        "hex": "#113D83",
        "rgb": {
          "red": 17,
          "green": 61,
          "blue": 131,
        },
      },
      {
        "id": "NCS S 4550-R80B",
        "hex": "#0B2F6B",
        "rgb": {
          "red": 11,
          "green": 47,
          "blue": 107,
        },
      },
      {
        "id": "NCS S 5005-R80B",
        "hex": "#6B6E74",
        "rgb": {
          "red": 107,
          "green": 110,
          "blue": 116,
        },
      },
      {
        "id": "NCS S 5020-R80B",
        "hex": "#475A72",
        "rgb": {
          "red": 71,
          "green": 90,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 5030-R80B",
        "hex": "#2D4A6D",
        "rgb": {
          "red": 45,
          "green": 74,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 5040-R80B",
        "hex": "#053665",
        "rgb": {
          "red": 5,
          "green": 54,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 6005-R80B",
        "hex": "#50585E",
        "rgb": {
          "red": 80,
          "green": 88,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 6020-R80B",
        "hex": "#274161",
        "rgb": {
          "red": 39,
          "green": 65,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 6030-R80B",
        "hex": "#032352",
        "rgb": {
          "red": 3,
          "green": 35,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 7005-R80B",
        "hex": "#383E45",
        "rgb": {
          "red": 56,
          "green": 62,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 7020-R80B",
        "hex": "#031531",
        "rgb": {
          "red": 3,
          "green": 21,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 8005-R80B",
        "hex": "#1A2127",
        "rgb": {
          "red": 26,
          "green": 33,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 8505-R80B",
        "hex": "#000C15",
        "rgb": {
          "red": 0,
          "green": 12,
          "blue": 21,
        },
      },
      {
        "id": "NCS S 0505-R90B",
        "hex": "#F6FBFD",
        "rgb": {
          "red": 246,
          "green": 251,
          "blue": 253,
        },
      },
      {
        "id": "NCS S 0510-R90B",
        "hex": "#ECF7FC",
        "rgb": {
          "red": 236,
          "green": 247,
          "blue": 252,
        },
      },
      {
        "id": "NCS S 0515-R90B",
        "hex": "#E2F2FB",
        "rgb": {
          "red": 226,
          "green": 242,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0520-R90B",
        "hex": "#D4EDF9",
        "rgb": {
          "red": 212,
          "green": 237,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 0530-R90B",
        "hex": "#BAE2F3",
        "rgb": {
          "red": 186,
          "green": 226,
          "blue": 243,
        },
      },
      {
        "id": "NCS S 0540-R90B",
        "hex": "#9ED4EB",
        "rgb": {
          "red": 158,
          "green": 212,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0804-R90B",
        "hex": "#EBF1F4",
        "rgb": {
          "red": 235,
          "green": 241,
          "blue": 244,
        },
      },
      {
        "id": "NCS S 0907-R90B",
        "hex": "#E5EBEE",
        "rgb": {
          "red": 229,
          "green": 235,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1005-R90B",
        "hex": "#E1E7EB",
        "rgb": {
          "red": 225,
          "green": 231,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 1010-R90B",
        "hex": "#D5E2E9",
        "rgb": {
          "red": 213,
          "green": 226,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1015-R90B",
        "hex": "#CDDEE8",
        "rgb": {
          "red": 205,
          "green": 222,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1020-R90B",
        "hex": "#BCD8E5",
        "rgb": {
          "red": 188,
          "green": 216,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 1030-R90B",
        "hex": "#A7CBDF",
        "rgb": {
          "red": 167,
          "green": 203,
          "blue": 223,
        },
      },
      {
        "id": "NCS S 1040-R90B",
        "hex": "#88C3E2",
        "rgb": {
          "red": 136,
          "green": 195,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 1050-R90B",
        "hex": "#6DB7DB",
        "rgb": {
          "red": 109,
          "green": 183,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 1510-R90B",
        "hex": "#BEC8CE",
        "rgb": {
          "red": 190,
          "green": 200,
          "blue": 206,
        },
      },
      {
        "id": "NCS S 1515-R90B",
        "hex": "#B6CCD6",
        "rgb": {
          "red": 182,
          "green": 204,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 1560-R90B",
        "hex": "#2B95C7",
        "rgb": {
          "red": 43,
          "green": 149,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2005-R90B",
        "hex": "#BEC6CA",
        "rgb": {
          "red": 190,
          "green": 198,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 2010-R90B",
        "hex": "#AFBFC6",
        "rgb": {
          "red": 175,
          "green": 191,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 2020-R90B",
        "hex": "#99B4C5",
        "rgb": {
          "red": 153,
          "green": 180,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 2030-R90B",
        "hex": "#7DA9BF",
        "rgb": {
          "red": 125,
          "green": 169,
          "blue": 191,
        },
      },
      {
        "id": "NCS S 2040-R90B",
        "hex": "#639BC0",
        "rgb": {
          "red": 99,
          "green": 155,
          "blue": 192,
        },
      },
      {
        "id": "NCS S 2050-R90B",
        "hex": "#2F8CBB",
        "rgb": {
          "red": 47,
          "green": 140,
          "blue": 187,
        },
      },
      {
        "id": "NCS S 2060-R90B",
        "hex": "#0083BC",
        "rgb": {
          "red": 0,
          "green": 131,
          "blue": 188,
        },
      },
      {
        "id": "NCS S 2065-R90B",
        "hex": "#0075B3",
        "rgb": {
          "red": 0,
          "green": 117,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 3010-R90B",
        "hex": "#8696A2",
        "rgb": {
          "red": 134,
          "green": 150,
          "blue": 162,
        },
      },
      {
        "id": "NCS S 3020-R90B",
        "hex": "#6C8D9E",
        "rgb": {
          "red": 108,
          "green": 141,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 3030-R90B",
        "hex": "#618AA7",
        "rgb": {
          "red": 97,
          "green": 138,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 3040-R90B",
        "hex": "#3C80A6",
        "rgb": {
          "red": 60,
          "green": 128,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 3050-R90B",
        "hex": "#156E9C",
        "rgb": {
          "red": 21,
          "green": 110,
          "blue": 156,
        },
      },
      {
        "id": "NCS S 3060-R90B",
        "hex": "#005998",
        "rgb": {
          "red": 0,
          "green": 89,
          "blue": 152,
        },
      },
      {
        "id": "NCS S 3065-R90B",
        "hex": "#005592",
        "rgb": {
          "red": 0,
          "green": 85,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 3560-R90B",
        "hex": "#004C85",
        "rgb": {
          "red": 0,
          "green": 76,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 4010-R90B",
        "hex": "#6D7C87",
        "rgb": {
          "red": 109,
          "green": 124,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 4020-R90B",
        "hex": "#5C7384",
        "rgb": {
          "red": 92,
          "green": 115,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 4030-R90B",
        "hex": "#406C87",
        "rgb": {
          "red": 64,
          "green": 108,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 4040-R90B",
        "hex": "#1C5882",
        "rgb": {
          "red": 28,
          "green": 88,
          "blue": 130,
        },
      },
      {
        "id": "NCS S 4050-R90B",
        "hex": "#004378",
        "rgb": {
          "red": 0,
          "green": 67,
          "blue": 120,
        },
      },
      {
        "id": "NCS S 4550-R90B",
        "hex": "#003C69",
        "rgb": {
          "red": 0,
          "green": 60,
          "blue": 105,
        },
      },
      {
        "id": "NCS S 5010-R90B",
        "hex": "#606D76",
        "rgb": {
          "red": 96,
          "green": 109,
          "blue": 118,
        },
      },
      {
        "id": "NCS S 5020-R90B",
        "hex": "#466070",
        "rgb": {
          "red": 70,
          "green": 96,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 5030-R90B",
        "hex": "#24526E",
        "rgb": {
          "red": 36,
          "green": 82,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 5040-R90B",
        "hex": "#003A69",
        "rgb": {
          "red": 0,
          "green": 58,
          "blue": 105,
        },
      },
      {
        "id": "NCS S 5540-R90B",
        "hex": "#00305A",
        "rgb": {
          "red": 0,
          "green": 48,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 6010-R90B",
        "hex": "#47555D",
        "rgb": {
          "red": 71,
          "green": 85,
          "blue": 93,
        },
      },
      {
        "id": "NCS S 6020-R90B",
        "hex": "#294C5E",
        "rgb": {
          "red": 41,
          "green": 76,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 6030-R90B",
        "hex": "#003351",
        "rgb": {
          "red": 0,
          "green": 51,
          "blue": 81,
        },
      },
      {
        "id": "NCS S 7010-R90B",
        "hex": "#2D3B45",
        "rgb": {
          "red": 45,
          "green": 59,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 7020-R90B",
        "hex": "#001829",
        "rgb": {
          "red": 0,
          "green": 24,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 8010-R90B",
        "hex": "#00070D",
        "rgb": {
          "red": 0,
          "green": 7,
          "blue": 13,
        },
      },
      {
        "id": "NCS S 0505-B",
        "hex": "#F7FCFB",
        "rgb": {
          "red": 247,
          "green": 252,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0507-B",
        "hex": "#F4FBFB",
        "rgb": {
          "red": 244,
          "green": 251,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0510-B",
        "hex": "#EBF8FB",
        "rgb": {
          "red": 235,
          "green": 248,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0515-B",
        "hex": "#E2F5FB",
        "rgb": {
          "red": 226,
          "green": 245,
          "blue": 251,
        },
      },
      {
        "id": "NCS S 0520-B",
        "hex": "#D8F1F9",
        "rgb": {
          "red": 216,
          "green": 241,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 0530-B",
        "hex": "#C2E8F4",
        "rgb": {
          "red": 194,
          "green": 232,
          "blue": 244,
        },
      },
      {
        "id": "NCS S 0540-B",
        "hex": "#A2DDEE",
        "rgb": {
          "red": 162,
          "green": 221,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1005-B",
        "hex": "#E1E7E9",
        "rgb": {
          "red": 225,
          "green": 231,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1010-B",
        "hex": "#D4E2E7",
        "rgb": {
          "red": 212,
          "green": 226,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 1015-B",
        "hex": "#CADFE7",
        "rgb": {
          "red": 202,
          "green": 223,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 1020-B",
        "hex": "#BDDAE5",
        "rgb": {
          "red": 189,
          "green": 218,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 1030-B",
        "hex": "#9DCEDF",
        "rgb": {
          "red": 157,
          "green": 206,
          "blue": 223,
        },
      },
      {
        "id": "NCS S 1040-B",
        "hex": "#7FC3D8",
        "rgb": {
          "red": 127,
          "green": 195,
          "blue": 216,
        },
      },
      {
        "id": "NCS S 1050-B",
        "hex": "#47B0CF",
        "rgb": {
          "red": 71,
          "green": 176,
          "blue": 207,
        },
      },
      {
        "id": "NCS S 1060-B",
        "hex": "#07A6CB",
        "rgb": {
          "red": 7,
          "green": 166,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 1510-B",
        "hex": "#D7E4E8",
        "rgb": {
          "red": 215,
          "green": 228,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1515-B",
        "hex": "#D0E1E8",
        "rgb": {
          "red": 208,
          "green": 225,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1565-B",
        "hex": "#0087B2",
        "rgb": {
          "red": 0,
          "green": 135,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2005-B",
        "hex": "#BAC4C8",
        "rgb": {
          "red": 186,
          "green": 196,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 2010-B",
        "hex": "#ABC0C8",
        "rgb": {
          "red": 171,
          "green": 192,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 2020-B",
        "hex": "#97B8C4",
        "rgb": {
          "red": 151,
          "green": 184,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 2030-B",
        "hex": "#74A9BC",
        "rgb": {
          "red": 116,
          "green": 169,
          "blue": 188,
        },
      },
      {
        "id": "NCS S 2040-B",
        "hex": "#579EB8",
        "rgb": {
          "red": 87,
          "green": 158,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 2050-B",
        "hex": "#008BAE",
        "rgb": {
          "red": 0,
          "green": 139,
          "blue": 174,
        },
      },
      {
        "id": "NCS S 2060-B",
        "hex": "#0082AA",
        "rgb": {
          "red": 0,
          "green": 130,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 2065-B",
        "hex": "#0074A2",
        "rgb": {
          "red": 0,
          "green": 116,
          "blue": 162,
        },
      },
      {
        "id": "NCS S 3010-B",
        "hex": "#889AA2",
        "rgb": {
          "red": 136,
          "green": 154,
          "blue": 162,
        },
      },
      {
        "id": "NCS S 3020-B",
        "hex": "#6C90A0",
        "rgb": {
          "red": 108,
          "green": 144,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 3030-B",
        "hex": "#54859A",
        "rgb": {
          "red": 84,
          "green": 133,
          "blue": 154,
        },
      },
      {
        "id": "NCS S 3040-B",
        "hex": "#257A96",
        "rgb": {
          "red": 37,
          "green": 122,
          "blue": 150,
        },
      },
      {
        "id": "NCS S 3050-B",
        "hex": "#007192",
        "rgb": {
          "red": 0,
          "green": 113,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 3060-B",
        "hex": "#005D84",
        "rgb": {
          "red": 0,
          "green": 93,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 4020-B",
        "hex": "#547687",
        "rgb": {
          "red": 84,
          "green": 118,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 4030-B",
        "hex": "#366573",
        "rgb": {
          "red": 54,
          "green": 101,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 4040-B",
        "hex": "#00607C",
        "rgb": {
          "red": 0,
          "green": 96,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 4050-B",
        "hex": "#005676",
        "rgb": {
          "red": 0,
          "green": 86,
          "blue": 118,
        },
      },
      {
        "id": "NCS S 4055-B",
        "hex": "#005271",
        "rgb": {
          "red": 0,
          "green": 82,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 4550-B",
        "hex": "#00465F",
        "rgb": {
          "red": 0,
          "green": 70,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 5020-B",
        "hex": "#466774",
        "rgb": {
          "red": 70,
          "green": 103,
          "blue": 116,
        },
      },
      {
        "id": "NCS S 5030-B",
        "hex": "#1C546A",
        "rgb": {
          "red": 28,
          "green": 84,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 5040-B",
        "hex": "#00475F",
        "rgb": {
          "red": 0,
          "green": 71,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 5540-B",
        "hex": "#002D40",
        "rgb": {
          "red": 0,
          "green": 45,
          "blue": 64,
        },
      },
      {
        "id": "NCS S 6020-B",
        "hex": "#1D3F4B",
        "rgb": {
          "red": 29,
          "green": 63,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 6030-B",
        "hex": "#002E42",
        "rgb": {
          "red": 0,
          "green": 46,
          "blue": 66,
        },
      },
      {
        "id": "NCS S 7020-B",
        "hex": "#001A28",
        "rgb": {
          "red": 0,
          "green": 26,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 0510-B10G",
        "hex": "#E9F9F9",
        "rgb": {
          "red": 233,
          "green": 249,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 0520-B10G",
        "hex": "#D3F2F7",
        "rgb": {
          "red": 211,
          "green": 242,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 0530-B10G",
        "hex": "#B4E6F0",
        "rgb": {
          "red": 180,
          "green": 230,
          "blue": 240,
        },
      },
      {
        "id": "NCS S 0540-B10G",
        "hex": "#97DCE8",
        "rgb": {
          "red": 151,
          "green": 220,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1010-B10G",
        "hex": "#D4E7E8",
        "rgb": {
          "red": 212,
          "green": 231,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1020-B10G",
        "hex": "#BCEBF0",
        "rgb": {
          "red": 188,
          "green": 235,
          "blue": 240,
        },
      },
      {
        "id": "NCS S 1030-B10G",
        "hex": "#9DDFE9",
        "rgb": {
          "red": 157,
          "green": 223,
          "blue": 233,
        },
      },
      {
        "id": "NCS S 1040-B10G",
        "hex": "#80D6DF",
        "rgb": {
          "red": 128,
          "green": 214,
          "blue": 223,
        },
      },
      {
        "id": "NCS S 1050-B10G",
        "hex": "#45C3D4",
        "rgb": {
          "red": 69,
          "green": 195,
          "blue": 212,
        },
      },
      {
        "id": "NCS S 1555-B10G",
        "hex": "#00A6BA",
        "rgb": {
          "red": 0,
          "green": 166,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 2010-B10G",
        "hex": "#AAC0C4",
        "rgb": {
          "red": 170,
          "green": 192,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 2020-B10G",
        "hex": "#90C1C8",
        "rgb": {
          "red": 144,
          "green": 193,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 2030-B10G",
        "hex": "#78BAC6",
        "rgb": {
          "red": 120,
          "green": 186,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 2040-B10G",
        "hex": "#53A7B5",
        "rgb": {
          "red": 83,
          "green": 167,
          "blue": 181,
        },
      },
      {
        "id": "NCS S 2050-B10G",
        "hex": "#0098AC",
        "rgb": {
          "red": 0,
          "green": 152,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 2055-B10G",
        "hex": "#0091A4",
        "rgb": {
          "red": 0,
          "green": 145,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 3010-B10G",
        "hex": "#869799",
        "rgb": {
          "red": 134,
          "green": 151,
          "blue": 153,
        },
      },
      {
        "id": "NCS S 3020-B10G",
        "hex": "#6E9CA4",
        "rgb": {
          "red": 110,
          "green": 156,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 3030-B10G",
        "hex": "#508E99",
        "rgb": {
          "red": 80,
          "green": 142,
          "blue": 153,
        },
      },
      {
        "id": "NCS S 3040-B10G",
        "hex": "#248291",
        "rgb": {
          "red": 36,
          "green": 130,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 3050-B10G",
        "hex": "#007288",
        "rgb": {
          "red": 0,
          "green": 114,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 3060-B10G",
        "hex": "#00677F",
        "rgb": {
          "red": 0,
          "green": 103,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 4010-B10G",
        "hex": "#717F82",
        "rgb": {
          "red": 113,
          "green": 127,
          "blue": 130,
        },
      },
      {
        "id": "NCS S 4020-B10G",
        "hex": "#587B82",
        "rgb": {
          "red": 88,
          "green": 123,
          "blue": 130,
        },
      },
      {
        "id": "NCS S 4030-B10G",
        "hex": "#3B727E",
        "rgb": {
          "red": 59,
          "green": 114,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 4040-B10G",
        "hex": "#006372",
        "rgb": {
          "red": 0,
          "green": 99,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 4050-B10G",
        "hex": "#00556A",
        "rgb": {
          "red": 0,
          "green": 85,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 5010-B10G",
        "hex": "#5A6E70",
        "rgb": {
          "red": 90,
          "green": 110,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 5020-B10G",
        "hex": "#436971",
        "rgb": {
          "red": 67,
          "green": 105,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 5030-B10G",
        "hex": "#1C5E6D",
        "rgb": {
          "red": 28,
          "green": 94,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 5040-B10G",
        "hex": "#004655",
        "rgb": {
          "red": 0,
          "green": 70,
          "blue": 85,
        },
      },
      {
        "id": "NCS S 5045-B10G",
        "hex": "#004452",
        "rgb": {
          "red": 0,
          "green": 68,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 5540-B10G",
        "hex": "#003A46",
        "rgb": {
          "red": 0,
          "green": 58,
          "blue": 70,
        },
      },
      {
        "id": "NCS S 6010-B10G",
        "hex": "#485D60",
        "rgb": {
          "red": 72,
          "green": 93,
          "blue": 96,
        },
      },
      {
        "id": "NCS S 6020-B10G",
        "hex": "#234A53",
        "rgb": {
          "red": 35,
          "green": 74,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 6030-B10G",
        "hex": "#003140",
        "rgb": {
          "red": 0,
          "green": 49,
          "blue": 64,
        },
      },
      {
        "id": "NCS S 7010-B10G",
        "hex": "#27393B",
        "rgb": {
          "red": 39,
          "green": 57,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 7020-B10G",
        "hex": "#002832",
        "rgb": {
          "red": 0,
          "green": 40,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 8010-B10G",
        "hex": "#001318",
        "rgb": {
          "red": 0,
          "green": 19,
          "blue": 24,
        },
      },
      {
        "id": "NCS S 0505-B20G",
        "hex": "#F3FCF6",
        "rgb": {
          "red": 243,
          "green": 252,
          "blue": 246,
        },
      },
      {
        "id": "NCS S 0507-B20G",
        "hex": "#F2FBF6",
        "rgb": {
          "red": 242,
          "green": 251,
          "blue": 246,
        },
      },
      {
        "id": "NCS S 0515-B20G",
        "hex": "#DFF7F7",
        "rgb": {
          "red": 223,
          "green": 247,
          "blue": 247,
        },
      },
      {
        "id": "NCS S 0907-B20G",
        "hex": "#E8FAF9",
        "rgb": {
          "red": 232,
          "green": 250,
          "blue": 249,
        },
      },
      {
        "id": "NCS S 1005-B20G",
        "hex": "#DFEBE8",
        "rgb": {
          "red": 223,
          "green": 235,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1015-B20G",
        "hex": "#CEF2F2",
        "rgb": {
          "red": 206,
          "green": 242,
          "blue": 242,
        },
      },
      {
        "id": "NCS S 1040-B20G",
        "hex": "#7AD5DB",
        "rgb": {
          "red": 122,
          "green": 213,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 1050-B20G",
        "hex": "#4EC8CC",
        "rgb": {
          "red": 78,
          "green": 200,
          "blue": 204,
        },
      },
      {
        "id": "NCS S 1510-B20G",
        "hex": "#BDDCDD",
        "rgb": {
          "red": 189,
          "green": 220,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 1515-B20G",
        "hex": "#B4D9DB",
        "rgb": {
          "red": 180,
          "green": 217,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 2005-B20G",
        "hex": "#B9C4C3",
        "rgb": {
          "red": 185,
          "green": 196,
          "blue": 195,
        },
      },
      {
        "id": "NCS S 2040-B20G",
        "hex": "#4AB6BA",
        "rgb": {
          "red": 74,
          "green": 182,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 2050-B20G",
        "hex": "#00A8AD",
        "rgb": {
          "red": 0,
          "green": 168,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 2555-B20G",
        "hex": "#008993",
        "rgb": {
          "red": 0,
          "green": 137,
          "blue": 147,
        },
      },
      {
        "id": "NCS S 3005-B20G",
        "hex": "#97A4A1",
        "rgb": {
          "red": 151,
          "green": 164,
          "blue": 161,
        },
      },
      {
        "id": "NCS S 3040-B20G",
        "hex": "#008690",
        "rgb": {
          "red": 0,
          "green": 134,
          "blue": 144,
        },
      },
      {
        "id": "NCS S 3050-B20G",
        "hex": "#00828B",
        "rgb": {
          "red": 0,
          "green": 130,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 3060-B20G",
        "hex": "#007278",
        "rgb": {
          "red": 0,
          "green": 114,
          "blue": 120,
        },
      },
      {
        "id": "NCS S 4005-B20G",
        "hex": "#808B88",
        "rgb": {
          "red": 128,
          "green": 139,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 4040-B20G",
        "hex": "#006B70",
        "rgb": {
          "red": 0,
          "green": 107,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 4050-B20G",
        "hex": "#006165",
        "rgb": {
          "red": 0,
          "green": 97,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 4550-B20G",
        "hex": "#00575D",
        "rgb": {
          "red": 0,
          "green": 87,
          "blue": 93,
        },
      },
      {
        "id": "NCS S 5005-B20G",
        "hex": "#6F7977",
        "rgb": {
          "red": 111,
          "green": 121,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 5040-B20G",
        "hex": "#00575C",
        "rgb": {
          "red": 0,
          "green": 87,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 5540-B20G",
        "hex": "#004447",
        "rgb": {
          "red": 0,
          "green": 68,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 6005-B20G",
        "hex": "#55605F",
        "rgb": {
          "red": 85,
          "green": 96,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 7005-B20G",
        "hex": "#313D3E",
        "rgb": {
          "red": 49,
          "green": 61,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 8005-B20G",
        "hex": "#192426",
        "rgb": {
          "red": 25,
          "green": 36,
          "blue": 38,
        },
      },
      {
        "id": "NCS S 8505-B20G",
        "hex": "#011014",
        "rgb": {
          "red": 1,
          "green": 16,
          "blue": 20,
        },
      },
      {
        "id": "NCS S 0510-B30G",
        "hex": "#E7FAF6",
        "rgb": {
          "red": 231,
          "green": 250,
          "blue": 246,
        },
      },
      {
        "id": "NCS S 0520-B30G",
        "hex": "#D9F6F3",
        "rgb": {
          "red": 217,
          "green": 246,
          "blue": 243,
        },
      },
      {
        "id": "NCS S 0530-B30G",
        "hex": "#BEEEEC",
        "rgb": {
          "red": 190,
          "green": 238,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 0540-B30G",
        "hex": "#A2E5E2",
        "rgb": {
          "red": 162,
          "green": 229,
          "blue": 226,
        },
      },
      {
        "id": "NCS S 1010-B30G",
        "hex": "#DAF5F4",
        "rgb": {
          "red": 218,
          "green": 245,
          "blue": 244,
        },
      },
      {
        "id": "NCS S 1020-B30G",
        "hex": "#BEEEEC",
        "rgb": {
          "red": 190,
          "green": 238,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 1030-B30G",
        "hex": "#9BE2E0",
        "rgb": {
          "red": 155,
          "green": 226,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1040-B30G",
        "hex": "#88DDD7",
        "rgb": {
          "red": 136,
          "green": 221,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 1050-B30G",
        "hex": "#43C6C6",
        "rgb": {
          "red": 67,
          "green": 198,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 2010-B30G",
        "hex": "#A8C5C5",
        "rgb": {
          "red": 168,
          "green": 197,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 2020-B30G",
        "hex": "#9FD3D0",
        "rgb": {
          "red": 159,
          "green": 211,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 2030-B30G",
        "hex": "#7BD9D3",
        "rgb": {
          "red": 123,
          "green": 217,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 2040-B30G",
        "hex": "#4FC5BE",
        "rgb": {
          "red": 79,
          "green": 197,
          "blue": 190,
        },
      },
      {
        "id": "NCS S 2050-B30G",
        "hex": "#00B8B4",
        "rgb": {
          "red": 0,
          "green": 184,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 2555-B30G",
        "hex": "#00908E",
        "rgb": {
          "red": 0,
          "green": 144,
          "blue": 142,
        },
      },
      {
        "id": "NCS S 3010-B30G",
        "hex": "#86A2A3",
        "rgb": {
          "red": 134,
          "green": 162,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 3020-B30G",
        "hex": "#72A1A4",
        "rgb": {
          "red": 114,
          "green": 161,
          "blue": 164,
        },
      },
      {
        "id": "NCS S 3030-B30G",
        "hex": "#549B97",
        "rgb": {
          "red": 84,
          "green": 155,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 3040-B30G",
        "hex": "#00908E",
        "rgb": {
          "red": 0,
          "green": 144,
          "blue": 142,
        },
      },
      {
        "id": "NCS S 3050-B30G",
        "hex": "#008383",
        "rgb": {
          "red": 0,
          "green": 131,
          "blue": 131,
        },
      },
      {
        "id": "NCS S 3060-B30G",
        "hex": "#00787B",
        "rgb": {
          "red": 0,
          "green": 120,
          "blue": 123,
        },
      },
      {
        "id": "NCS S 4010-B30G",
        "hex": "#708481",
        "rgb": {
          "red": 112,
          "green": 132,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 4020-B30G",
        "hex": "#54807C",
        "rgb": {
          "red": 84,
          "green": 128,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 4030-B30G",
        "hex": "#357875",
        "rgb": {
          "red": 53,
          "green": 120,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 4040-B30G",
        "hex": "#007371",
        "rgb": {
          "red": 0,
          "green": 115,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 4050-B30G",
        "hex": "#006465",
        "rgb": {
          "red": 0,
          "green": 100,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 4550-B30G",
        "hex": "#005658",
        "rgb": {
          "red": 0,
          "green": 86,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 5010-B30G",
        "hex": "#5A6D6C",
        "rgb": {
          "red": 90,
          "green": 109,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 5020-B30G",
        "hex": "#436865",
        "rgb": {
          "red": 67,
          "green": 104,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 5030-B30G",
        "hex": "#1F6262",
        "rgb": {
          "red": 31,
          "green": 98,
          "blue": 98,
        },
      },
      {
        "id": "NCS S 5040-B30G",
        "hex": "#005658",
        "rgb": {
          "red": 0,
          "green": 86,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 5540-B30G",
        "hex": "#004345",
        "rgb": {
          "red": 0,
          "green": 67,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 6010-B30G",
        "hex": "#475B5B",
        "rgb": {
          "red": 71,
          "green": 91,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 6020-B30G",
        "hex": "#264F4F",
        "rgb": {
          "red": 38,
          "green": 79,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 6030-B30G",
        "hex": "#004645",
        "rgb": {
          "red": 0,
          "green": 70,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 6530-B30G",
        "hex": "#003032",
        "rgb": {
          "red": 0,
          "green": 48,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 7010-B30G",
        "hex": "#2A3B3C",
        "rgb": {
          "red": 42,
          "green": 59,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 7020-B30G",
        "hex": "#002627",
        "rgb": {
          "red": 0,
          "green": 38,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 8010-B30G",
        "hex": "#0F1E1A",
        "rgb": {
          "red": 15,
          "green": 30,
          "blue": 26,
        },
      },
      {
        "id": "NCS S 0520-B40G",
        "hex": "#CAF2ED",
        "rgb": {
          "red": 202,
          "green": 242,
          "blue": 237,
        },
      },
      {
        "id": "NCS S 0530-B40G",
        "hex": "#A7E7E4",
        "rgb": {
          "red": 167,
          "green": 231,
          "blue": 228,
        },
      },
      {
        "id": "NCS S 1020-B40G",
        "hex": "#C1EFEC",
        "rgb": {
          "red": 193,
          "green": 239,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 1030-B40G",
        "hex": "#A8E8E1",
        "rgb": {
          "red": 168,
          "green": 232,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 1040-B40G",
        "hex": "#7BD9D0",
        "rgb": {
          "red": 123,
          "green": 217,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 1050-B40G",
        "hex": "#3BC7BF",
        "rgb": {
          "red": 59,
          "green": 199,
          "blue": 191,
        },
      },
      {
        "id": "NCS S 2020-B40G",
        "hex": "#A3D5CD",
        "rgb": {
          "red": 163,
          "green": 213,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 2030-B40G",
        "hex": "#6DCBC1",
        "rgb": {
          "red": 109,
          "green": 203,
          "blue": 193,
        },
      },
      {
        "id": "NCS S 2040-B40G",
        "hex": "#43BFB6",
        "rgb": {
          "red": 67,
          "green": 191,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 2050-B40G",
        "hex": "#00BAAF",
        "rgb": {
          "red": 0,
          "green": 186,
          "blue": 175,
        },
      },
      {
        "id": "NCS S 2555-B40G",
        "hex": "#00907E",
        "rgb": {
          "red": 0,
          "green": 144,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 3020-B40G",
        "hex": "#79A39E",
        "rgb": {
          "red": 121,
          "green": 163,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 3030-B40G",
        "hex": "#43A398",
        "rgb": {
          "red": 67,
          "green": 163,
          "blue": 152,
        },
      },
      {
        "id": "NCS S 3040-B40G",
        "hex": "#00978F",
        "rgb": {
          "red": 0,
          "green": 151,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3050-B40G",
        "hex": "#008D7F",
        "rgb": {
          "red": 0,
          "green": 141,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 3060-B40G",
        "hex": "#007D77",
        "rgb": {
          "red": 0,
          "green": 125,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 4040-B40G",
        "hex": "#006F6C",
        "rgb": {
          "red": 0,
          "green": 111,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 4050-B40G",
        "hex": "#006A63",
        "rgb": {
          "red": 0,
          "green": 106,
          "blue": 99,
        },
      },
      {
        "id": "NCS S 4055-B40G",
        "hex": "#00635A",
        "rgb": {
          "red": 0,
          "green": 99,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 4550-B40G",
        "hex": "#005953",
        "rgb": {
          "red": 0,
          "green": 89,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5040-B40G",
        "hex": "#00554F",
        "rgb": {
          "red": 0,
          "green": 85,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 5540-B40G",
        "hex": "#004D47",
        "rgb": {
          "red": 0,
          "green": 77,
          "blue": 71,
        },
      },
      {
        "id": "NCS S 0505-B50G",
        "hex": "#F3FCF5",
        "rgb": {
          "red": 243,
          "green": 252,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 0510-B50G",
        "hex": "#E7FAF2",
        "rgb": {
          "red": 231,
          "green": 250,
          "blue": 242,
        },
      },
      {
        "id": "NCS S 0515-B50G",
        "hex": "#D2F5EF",
        "rgb": {
          "red": 210,
          "green": 245,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0520-B50G",
        "hex": "#C5F1EA",
        "rgb": {
          "red": 197,
          "green": 241,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 0530-B50G",
        "hex": "#B8EEE3",
        "rgb": {
          "red": 184,
          "green": 238,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 0804-B50G",
        "hex": "#F0FCF5",
        "rgb": {
          "red": 240,
          "green": 252,
          "blue": 245,
        },
      },
      {
        "id": "NCS S 1005-B50G",
        "hex": "#E3EFEB",
        "rgb": {
          "red": 227,
          "green": 239,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 1010-B50G",
        "hex": "#DFF8F1",
        "rgb": {
          "red": 223,
          "green": 248,
          "blue": 241,
        },
      },
      {
        "id": "NCS S 1015-B50G",
        "hex": "#CDF3EE",
        "rgb": {
          "red": 205,
          "green": 243,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1020-B50G",
        "hex": "#C1F1E8",
        "rgb": {
          "red": 193,
          "green": 241,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1030-B50G",
        "hex": "#A7E8DE",
        "rgb": {
          "red": 167,
          "green": 232,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1040-B50G",
        "hex": "#7AD9CE",
        "rgb": {
          "red": 122,
          "green": 217,
          "blue": 206,
        },
      },
      {
        "id": "NCS S 1050-B50G",
        "hex": "#17C1B6",
        "rgb": {
          "red": 23,
          "green": 193,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 1510-B50G",
        "hex": "#BEDDD7",
        "rgb": {
          "red": 190,
          "green": 221,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 1515-B50G",
        "hex": "#B9E4E0",
        "rgb": {
          "red": 185,
          "green": 228,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 2005-B50G",
        "hex": "#BACBC7",
        "rgb": {
          "red": 186,
          "green": 203,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2010-B50G",
        "hex": "#A8C5C0",
        "rgb": {
          "red": 168,
          "green": 197,
          "blue": 192,
        },
      },
      {
        "id": "NCS S 2020-B50G",
        "hex": "#96D1C5",
        "rgb": {
          "red": 150,
          "green": 209,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 2030-B50G",
        "hex": "#70CDBD",
        "rgb": {
          "red": 112,
          "green": 205,
          "blue": 189,
        },
      },
      {
        "id": "NCS S 2040-B50G",
        "hex": "#40BEAE",
        "rgb": {
          "red": 64,
          "green": 190,
          "blue": 174,
        },
      },
      {
        "id": "NCS S 2050-B50G",
        "hex": "#00B1A0",
        "rgb": {
          "red": 0,
          "green": 177,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 2060-B50G",
        "hex": "#00A28F",
        "rgb": {
          "red": 0,
          "green": 162,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3010-B50G",
        "hex": "#8AA4A0",
        "rgb": {
          "red": 138,
          "green": 164,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 3020-B50G",
        "hex": "#72A29A",
        "rgb": {
          "red": 114,
          "green": 162,
          "blue": 154,
        },
      },
      {
        "id": "NCS S 3030-B50G",
        "hex": "#40A598",
        "rgb": {
          "red": 64,
          "green": 165,
          "blue": 152,
        },
      },
      {
        "id": "NCS S 3040-B50G",
        "hex": "#009284",
        "rgb": {
          "red": 0,
          "green": 146,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 3050-B50G",
        "hex": "#008E7F",
        "rgb": {
          "red": 0,
          "green": 142,
          "blue": 127,
        },
      },
      {
        "id": "NCS S 3055-B50G",
        "hex": "#00826E",
        "rgb": {
          "red": 0,
          "green": 130,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 4010-B50G",
        "hex": "#728581",
        "rgb": {
          "red": 114,
          "green": 133,
          "blue": 129,
        },
      },
      {
        "id": "NCS S 4020-B50G",
        "hex": "#547F76",
        "rgb": {
          "red": 84,
          "green": 127,
          "blue": 118,
        },
      },
      {
        "id": "NCS S 4030-B50G",
        "hex": "#00796F",
        "rgb": {
          "red": 0,
          "green": 121,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 4040-B50G",
        "hex": "#007468",
        "rgb": {
          "red": 0,
          "green": 116,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 4050-B50G",
        "hex": "#006858",
        "rgb": {
          "red": 0,
          "green": 104,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 4550-B50G",
        "hex": "#005C4D",
        "rgb": {
          "red": 0,
          "green": 92,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 5010-B50G",
        "hex": "#5A6D68",
        "rgb": {
          "red": 90,
          "green": 109,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 5020-B50G",
        "hex": "#386C5E",
        "rgb": {
          "red": 56,
          "green": 108,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 5030-B50G",
        "hex": "#005D53",
        "rgb": {
          "red": 0,
          "green": 93,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5040-B50G",
        "hex": "#005849",
        "rgb": {
          "red": 0,
          "green": 88,
          "blue": 73,
        },
      },
      {
        "id": "NCS S 5540-B50G",
        "hex": "#004237",
        "rgb": {
          "red": 0,
          "green": 66,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 6010-B50G",
        "hex": "#465E58",
        "rgb": {
          "red": 70,
          "green": 94,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 6020-B50G",
        "hex": "#165850",
        "rgb": {
          "red": 22,
          "green": 88,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 6030-B50G",
        "hex": "#00443E",
        "rgb": {
          "red": 0,
          "green": 68,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 6530-B50G",
        "hex": "#004039",
        "rgb": {
          "red": 0,
          "green": 64,
          "blue": 57,
        },
      },
      {
        "id": "NCS S 7010-B50G",
        "hex": "#253E39",
        "rgb": {
          "red": 37,
          "green": 62,
          "blue": 57,
        },
      },
      {
        "id": "NCS S 7020-B50G",
        "hex": "#00322C",
        "rgb": {
          "red": 0,
          "green": 50,
          "blue": 44,
        },
      },
      {
        "id": "NCS S 8010-B50G",
        "hex": "#0C2622",
        "rgb": {
          "red": 12,
          "green": 38,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 0520-B60G",
        "hex": "#D1F5EC",
        "rgb": {
          "red": 209,
          "green": 245,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 0530-B60G",
        "hex": "#BEF0E0",
        "rgb": {
          "red": 190,
          "green": 240,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1020-B60G",
        "hex": "#CBF3EB",
        "rgb": {
          "red": 203,
          "green": 243,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 1030-B60G",
        "hex": "#B7EEDE",
        "rgb": {
          "red": 183,
          "green": 238,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1040-B60G",
        "hex": "#95E4D0",
        "rgb": {
          "red": 149,
          "green": 228,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 1050-B60G",
        "hex": "#48CBB6",
        "rgb": {
          "red": 72,
          "green": 203,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 2020-B60G",
        "hex": "#9EDAC7",
        "rgb": {
          "red": 158,
          "green": 218,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 2030-B60G",
        "hex": "#7BDBC8",
        "rgb": {
          "red": 123,
          "green": 219,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 2040-B60G",
        "hex": "#52CEB9",
        "rgb": {
          "red": 82,
          "green": 206,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 2050-B60G",
        "hex": "#00BCA9",
        "rgb": {
          "red": 0,
          "green": 188,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 2555-B60G",
        "hex": "#00A38B",
        "rgb": {
          "red": 0,
          "green": 163,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 3020-B60G",
        "hex": "#72AA9C",
        "rgb": {
          "red": 114,
          "green": 170,
          "blue": 156,
        },
      },
      {
        "id": "NCS S 3030-B60G",
        "hex": "#419F90",
        "rgb": {
          "red": 65,
          "green": 159,
          "blue": 144,
        },
      },
      {
        "id": "NCS S 3040-B60G",
        "hex": "#009E89",
        "rgb": {
          "red": 0,
          "green": 158,
          "blue": 137,
        },
      },
      {
        "id": "NCS S 3050-B60G",
        "hex": "#00876D",
        "rgb": {
          "red": 0,
          "green": 135,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 3555-B60G",
        "hex": "#007764",
        "rgb": {
          "red": 0,
          "green": 119,
          "blue": 100,
        },
      },
      {
        "id": "NCS S 4040-B60G",
        "hex": "#007361",
        "rgb": {
          "red": 0,
          "green": 115,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 4050-B60G",
        "hex": "#006855",
        "rgb": {
          "red": 0,
          "green": 104,
          "blue": 85,
        },
      },
      {
        "id": "NCS S 5040-B60G",
        "hex": "#005546",
        "rgb": {
          "red": 0,
          "green": 85,
          "blue": 70,
        },
      },
      {
        "id": "NCS S 6035-B60G",
        "hex": "#002F27",
        "rgb": {
          "red": 0,
          "green": 47,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 0510-B70G",
        "hex": "#DFF9EB",
        "rgb": {
          "red": 223,
          "green": 249,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0520-B70G",
        "hex": "#CCF4E1",
        "rgb": {
          "red": 204,
          "green": 244,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0530-B70G",
        "hex": "#C3F2DF",
        "rgb": {
          "red": 195,
          "green": 242,
          "blue": 223,
        },
      },
      {
        "id": "NCS S 1010-B70G",
        "hex": "#D2ECE1",
        "rgb": {
          "red": 210,
          "green": 236,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 1020-B70G",
        "hex": "#C6F3E6",
        "rgb": {
          "red": 198,
          "green": 243,
          "blue": 230,
        },
      },
      {
        "id": "NCS S 1030-B70G",
        "hex": "#AFEBD6",
        "rgb": {
          "red": 175,
          "green": 235,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 1040-B70G",
        "hex": "#81DCC3",
        "rgb": {
          "red": 129,
          "green": 220,
          "blue": 195,
        },
      },
      {
        "id": "NCS S 1050-B70G",
        "hex": "#54CEB2",
        "rgb": {
          "red": 84,
          "green": 206,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2010-B70G",
        "hex": "#A9C5BF",
        "rgb": {
          "red": 169,
          "green": 197,
          "blue": 191,
        },
      },
      {
        "id": "NCS S 2020-B70G",
        "hex": "#94D8BC",
        "rgb": {
          "red": 148,
          "green": 216,
          "blue": 188,
        },
      },
      {
        "id": "NCS S 2030-B70G",
        "hex": "#73CEB4",
        "rgb": {
          "red": 115,
          "green": 206,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 2040-B70G",
        "hex": "#4ACCB2",
        "rgb": {
          "red": 74,
          "green": 204,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2050-B70G",
        "hex": "#00BEA3",
        "rgb": {
          "red": 0,
          "green": 190,
          "blue": 163,
        },
      },
      {
        "id": "NCS S 2060-B70G",
        "hex": "#00A287",
        "rgb": {
          "red": 0,
          "green": 162,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 3010-B70G",
        "hex": "#8EA5A0",
        "rgb": {
          "red": 142,
          "green": 165,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 3020-B70G",
        "hex": "#75A591",
        "rgb": {
          "red": 117,
          "green": 165,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 3030-B70G",
        "hex": "#3AA08D",
        "rgb": {
          "red": 58,
          "green": 160,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 3040-B70G",
        "hex": "#00A085",
        "rgb": {
          "red": 0,
          "green": 160,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 3050-B70G",
        "hex": "#008C6F",
        "rgb": {
          "red": 0,
          "green": 140,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 3060-B70G",
        "hex": "#007860",
        "rgb": {
          "red": 0,
          "green": 120,
          "blue": 96,
        },
      },
      {
        "id": "NCS S 4010-B70G",
        "hex": "#6C877D",
        "rgb": {
          "red": 108,
          "green": 135,
          "blue": 125,
        },
      },
      {
        "id": "NCS S 4020-B70G",
        "hex": "#507C6C",
        "rgb": {
          "red": 80,
          "green": 124,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 4030-B70G",
        "hex": "#2C806D",
        "rgb": {
          "red": 44,
          "green": 128,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 4040-B70G",
        "hex": "#00725A",
        "rgb": {
          "red": 0,
          "green": 114,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 4050-B70G",
        "hex": "#00674F",
        "rgb": {
          "red": 0,
          "green": 103,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 5010-B70G",
        "hex": "#63766C",
        "rgb": {
          "red": 99,
          "green": 118,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 5020-B70G",
        "hex": "#367062",
        "rgb": {
          "red": 54,
          "green": 112,
          "blue": 98,
        },
      },
      {
        "id": "NCS S 5030-B70G",
        "hex": "#006856",
        "rgb": {
          "red": 0,
          "green": 104,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 5040-B70G",
        "hex": "#005341",
        "rgb": {
          "red": 0,
          "green": 83,
          "blue": 65,
        },
      },
      {
        "id": "NCS S 6010-B70G",
        "hex": "#475A4F",
        "rgb": {
          "red": 71,
          "green": 90,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 6020-B70G",
        "hex": "#195A48",
        "rgb": {
          "red": 25,
          "green": 90,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 6030-B70G",
        "hex": "#004031",
        "rgb": {
          "red": 0,
          "green": 64,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 7010-B70G",
        "hex": "#263F34",
        "rgb": {
          "red": 38,
          "green": 63,
          "blue": 52,
        },
      },
      {
        "id": "NCS S 7020-B70G",
        "hex": "#002F22",
        "rgb": {
          "red": 0,
          "green": 47,
          "blue": 34,
        },
      },
      {
        "id": "NCS S 8010-B70G",
        "hex": "#022216",
        "rgb": {
          "red": 2,
          "green": 34,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 0505-B80G",
        "hex": "#F3FDF3",
        "rgb": {
          "red": 243,
          "green": 253,
          "blue": 243,
        },
      },
      {
        "id": "NCS S 0507-B80G",
        "hex": "#F0FBF0",
        "rgb": {
          "red": 240,
          "green": 251,
          "blue": 240,
        },
      },
      {
        "id": "NCS S 0515-B80G",
        "hex": "#DFF9EB",
        "rgb": {
          "red": 223,
          "green": 249,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0907-B80G",
        "hex": "#E9FBF2",
        "rgb": {
          "red": 233,
          "green": 251,
          "blue": 242,
        },
      },
      {
        "id": "NCS S 1005-B80G",
        "hex": "#E4EFE5",
        "rgb": {
          "red": 228,
          "green": 239,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 1015-B80G",
        "hex": "#D3F5E6",
        "rgb": {
          "red": 211,
          "green": 245,
          "blue": 230,
        },
      },
      {
        "id": "NCS S 1040-B80G",
        "hex": "#91E1C2",
        "rgb": {
          "red": 145,
          "green": 225,
          "blue": 194,
        },
      },
      {
        "id": "NCS S 1050-B80G",
        "hex": "#82DBB8",
        "rgb": {
          "red": 130,
          "green": 219,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 1510-B80G",
        "hex": "#C6E7DE",
        "rgb": {
          "red": 198,
          "green": 231,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1515-B80G",
        "hex": "#C2F2E3",
        "rgb": {
          "red": 194,
          "green": 242,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 2005-B80G",
        "hex": "#B9CABE",
        "rgb": {
          "red": 185,
          "green": 202,
          "blue": 190,
        },
      },
      {
        "id": "NCS S 2040-B80G",
        "hex": "#59CEAB",
        "rgb": {
          "red": 89,
          "green": 206,
          "blue": 171,
        },
      },
      {
        "id": "NCS S 2050-B80G",
        "hex": "#1EC097",
        "rgb": {
          "red": 30,
          "green": 192,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 2555-B80G",
        "hex": "#009B77",
        "rgb": {
          "red": 0,
          "green": 155,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 3005-B80G",
        "hex": "#93A097",
        "rgb": {
          "red": 147,
          "green": 160,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 3040-B80G",
        "hex": "#009D7C",
        "rgb": {
          "red": 0,
          "green": 157,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 3050-B80G",
        "hex": "#008E6E",
        "rgb": {
          "red": 0,
          "green": 142,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 3555-B80G",
        "hex": "#007558",
        "rgb": {
          "red": 0,
          "green": 117,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 4005-B80G",
        "hex": "#7F8A83",
        "rgb": {
          "red": 127,
          "green": 138,
          "blue": 131,
        },
      },
      {
        "id": "NCS S 4040-B80G",
        "hex": "#007356",
        "rgb": {
          "red": 0,
          "green": 115,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 4050-B80G",
        "hex": "#00674D",
        "rgb": {
          "red": 0,
          "green": 103,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 4550-B80G",
        "hex": "#005740",
        "rgb": {
          "red": 0,
          "green": 87,
          "blue": 64,
        },
      },
      {
        "id": "NCS S 5005-B80G",
        "hex": "#69736E",
        "rgb": {
          "red": 105,
          "green": 115,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 5040-B80G",
        "hex": "#00523E",
        "rgb": {
          "red": 0,
          "green": 82,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 5540-B80G",
        "hex": "#004633",
        "rgb": {
          "red": 0,
          "green": 70,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 6005-B80G",
        "hex": "#556058",
        "rgb": {
          "red": 85,
          "green": 96,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 7005-B80G",
        "hex": "#35423E",
        "rgb": {
          "red": 53,
          "green": 66,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 8005-B80G",
        "hex": "#15281E",
        "rgb": {
          "red": 21,
          "green": 40,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 8505-B80G",
        "hex": "#001209",
        "rgb": {
          "red": 0,
          "green": 18,
          "blue": 9,
        },
      },
      {
        "id": "NCS S 0510-B90G",
        "hex": "#E7FAE7",
        "rgb": {
          "red": 231,
          "green": 250,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0520-B90G",
        "hex": "#DDF9DD",
        "rgb": {
          "red": 221,
          "green": 249,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 0530-B90G",
        "hex": "#CCF4D0",
        "rgb": {
          "red": 204,
          "green": 244,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 1010-B90G",
        "hex": "#DFF9E8",
        "rgb": {
          "red": 223,
          "green": 249,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 1020-B90G",
        "hex": "#C2F1D0",
        "rgb": {
          "red": 194,
          "green": 241,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 1030-B90G",
        "hex": "#AAEAC6",
        "rgb": {
          "red": 170,
          "green": 234,
          "blue": 198,
        },
      },
      {
        "id": "NCS S 1040-B90G",
        "hex": "#9FE5C1",
        "rgb": {
          "red": 159,
          "green": 229,
          "blue": 193,
        },
      },
      {
        "id": "NCS S 1050-B90G",
        "hex": "#90E0B8",
        "rgb": {
          "red": 144,
          "green": 224,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 1055-B90G",
        "hex": "#83DBB2",
        "rgb": {
          "red": 131,
          "green": 219,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2010-B90G",
        "hex": "#B7D9C4",
        "rgb": {
          "red": 183,
          "green": 217,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 2020-B90G",
        "hex": "#94CDAC",
        "rgb": {
          "red": 148,
          "green": 205,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 2030-B90G",
        "hex": "#85DDBA",
        "rgb": {
          "red": 133,
          "green": 221,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 2040-B90G",
        "hex": "#5DCEA6",
        "rgb": {
          "red": 93,
          "green": 206,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 2050-B90G",
        "hex": "#29C091",
        "rgb": {
          "red": 41,
          "green": 192,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 2060-B90G",
        "hex": "#00AB79",
        "rgb": {
          "red": 0,
          "green": 171,
          "blue": 121,
        },
      },
      {
        "id": "NCS S 3010-B90G",
        "hex": "#92A99E",
        "rgb": {
          "red": 146,
          "green": 169,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 3020-B90G",
        "hex": "#73A58A",
        "rgb": {
          "red": 115,
          "green": 165,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 3030-B90G",
        "hex": "#3F9D77",
        "rgb": {
          "red": 63,
          "green": 157,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 3040-B90G",
        "hex": "#1A9F77",
        "rgb": {
          "red": 26,
          "green": 159,
          "blue": 119,
        },
      },
      {
        "id": "NCS S 3050-B90G",
        "hex": "#009268",
        "rgb": {
          "red": 0,
          "green": 146,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 3060-B90G",
        "hex": "#00875C",
        "rgb": {
          "red": 0,
          "green": 135,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 4010-B90G",
        "hex": "#6F8473",
        "rgb": {
          "red": 111,
          "green": 132,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 4020-B90G",
        "hex": "#547D67",
        "rgb": {
          "red": 84,
          "green": 125,
          "blue": 103,
        },
      },
      {
        "id": "NCS S 4030-B90G",
        "hex": "#2B7D5C",
        "rgb": {
          "red": 43,
          "green": 125,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 4040-B90G",
        "hex": "#00764F",
        "rgb": {
          "red": 0,
          "green": 118,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 4050-B90G",
        "hex": "#006C48",
        "rgb": {
          "red": 0,
          "green": 108,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 4550-B90G",
        "hex": "#005839",
        "rgb": {
          "red": 0,
          "green": 88,
          "blue": 57,
        },
      },
      {
        "id": "NCS S 5010-B90G",
        "hex": "#567161",
        "rgb": {
          "red": 86,
          "green": 113,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 5020-B90G",
        "hex": "#396C53",
        "rgb": {
          "red": 57,
          "green": 108,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5030-B90G",
        "hex": "#216645",
        "rgb": {
          "red": 33,
          "green": 102,
          "blue": 69,
        },
      },
      {
        "id": "NCS S 5040-B90G",
        "hex": "#005134",
        "rgb": {
          "red": 0,
          "green": 81,
          "blue": 52,
        },
      },
      {
        "id": "NCS S 5540-B90G",
        "hex": "#003E27",
        "rgb": {
          "red": 0,
          "green": 62,
          "blue": 39,
        },
      },
      {
        "id": "NCS S 6010-B90G",
        "hex": "#435F4E",
        "rgb": {
          "red": 67,
          "green": 95,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 6020-B90G",
        "hex": "#124A35",
        "rgb": {
          "red": 18,
          "green": 74,
          "blue": 53,
        },
      },
      {
        "id": "NCS S 6030-B90G",
        "hex": "#00462E",
        "rgb": {
          "red": 0,
          "green": 70,
          "blue": 46,
        },
      },
      {
        "id": "NCS S 7010-B90G",
        "hex": "#31483A",
        "rgb": {
          "red": 49,
          "green": 72,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 7020-B90G",
        "hex": "#002E1D",
        "rgb": {
          "red": 0,
          "green": 46,
          "blue": 29,
        },
      },
      {
        "id": "NCS S 8010-B90G",
        "hex": "#0C2517",
        "rgb": {
          "red": 12,
          "green": 37,
          "blue": 23,
        },
      },
      {
        "id": "NCS S 0505-G",
        "hex": "#F4FCEF",
        "rgb": {
          "red": 244,
          "green": 252,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0507-G",
        "hex": "#F5FCEC",
        "rgb": {
          "red": 245,
          "green": 252,
          "blue": 236,
        },
      },
      {
        "id": "NCS S 0510-G",
        "hex": "#F0FBEB",
        "rgb": {
          "red": 240,
          "green": 251,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0515-G",
        "hex": "#EDFBE7",
        "rgb": {
          "red": 237,
          "green": 251,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0520-G",
        "hex": "#E8FAE8",
        "rgb": {
          "red": 232,
          "green": 250,
          "blue": 232,
        },
      },
      {
        "id": "NCS S 0530-G",
        "hex": "#D6F7D6",
        "rgb": {
          "red": 214,
          "green": 247,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 0540-G",
        "hex": "#B4EEB6",
        "rgb": {
          "red": 180,
          "green": 238,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 1005-G",
        "hex": "#EAF2E7",
        "rgb": {
          "red": 234,
          "green": 242,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 1010-G",
        "hex": "#DBF8E0",
        "rgb": {
          "red": 219,
          "green": 248,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1015-G",
        "hex": "#D6F7DB",
        "rgb": {
          "red": 214,
          "green": 247,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 1020-G",
        "hex": "#CCF4D3",
        "rgb": {
          "red": 204,
          "green": 244,
          "blue": 211,
        },
      },
      {
        "id": "NCS S 1030-G",
        "hex": "#A9E9B9",
        "rgb": {
          "red": 169,
          "green": 233,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 1040-G",
        "hex": "#9DE5B7",
        "rgb": {
          "red": 157,
          "green": 229,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 1050-G",
        "hex": "#89DEA0",
        "rgb": {
          "red": 137,
          "green": 222,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 1060-G",
        "hex": "#46C37C",
        "rgb": {
          "red": 70,
          "green": 195,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 1510-G",
        "hex": "#CCDEC8",
        "rgb": {
          "red": 204,
          "green": 222,
          "blue": 200,
        },
      },
      {
        "id": "NCS S 1515-G",
        "hex": "#B6E2C4",
        "rgb": {
          "red": 182,
          "green": 226,
          "blue": 196,
        },
      },
      {
        "id": "NCS S 1565-G",
        "hex": "#00AF72",
        "rgb": {
          "red": 0,
          "green": 175,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 2005-G",
        "hex": "#B4C2B6",
        "rgb": {
          "red": 180,
          "green": 194,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 2010-G",
        "hex": "#B3CDB6",
        "rgb": {
          "red": 179,
          "green": 205,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 2020-G",
        "hex": "#9FD5AA",
        "rgb": {
          "red": 159,
          "green": 213,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 2030-G",
        "hex": "#82DA99",
        "rgb": {
          "red": 130,
          "green": 218,
          "blue": 153,
        },
      },
      {
        "id": "NCS S 2040-G",
        "hex": "#67CF93",
        "rgb": {
          "red": 103,
          "green": 207,
          "blue": 147,
        },
      },
      {
        "id": "NCS S 2050-G",
        "hex": "#32BD7E",
        "rgb": {
          "red": 50,
          "green": 189,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 2060-G",
        "hex": "#00B270",
        "rgb": {
          "red": 0,
          "green": 178,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 2565-G",
        "hex": "#009250",
        "rgb": {
          "red": 0,
          "green": 146,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 3010-G",
        "hex": "#8EA595",
        "rgb": {
          "red": 142,
          "green": 165,
          "blue": 149,
        },
      },
      {
        "id": "NCS S 3020-G",
        "hex": "#789E80",
        "rgb": {
          "red": 120,
          "green": 158,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 3030-G",
        "hex": "#5B9E6D",
        "rgb": {
          "red": 91,
          "green": 158,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 3040-G",
        "hex": "#2AA06E",
        "rgb": {
          "red": 42,
          "green": 160,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 3050-G",
        "hex": "#00935E",
        "rgb": {
          "red": 0,
          "green": 147,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 3060-G",
        "hex": "#007D44",
        "rgb": {
          "red": 0,
          "green": 125,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 3560-G",
        "hex": "#00723E",
        "rgb": {
          "red": 0,
          "green": 114,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 4020-G",
        "hex": "#487D64",
        "rgb": {
          "red": 72,
          "green": 125,
          "blue": 100,
        },
      },
      {
        "id": "NCS S 4030-G",
        "hex": "#388257",
        "rgb": {
          "red": 56,
          "green": 130,
          "blue": 87,
        },
      },
      {
        "id": "NCS S 4040-G",
        "hex": "#007144",
        "rgb": {
          "red": 0,
          "green": 113,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 4050-G",
        "hex": "#005D30",
        "rgb": {
          "red": 0,
          "green": 93,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 4550-G",
        "hex": "#00552E",
        "rgb": {
          "red": 0,
          "green": 85,
          "blue": 46,
        },
      },
      {
        "id": "NCS S 5020-G",
        "hex": "#436E53",
        "rgb": {
          "red": 67,
          "green": 110,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5030-G",
        "hex": "#00623E",
        "rgb": {
          "red": 0,
          "green": 98,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 5040-G",
        "hex": "#005026",
        "rgb": {
          "red": 0,
          "green": 80,
          "blue": 38,
        },
      },
      {
        "id": "NCS S 5540-G",
        "hex": "#003C1C",
        "rgb": {
          "red": 0,
          "green": 60,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 6020-G",
        "hex": "#124933",
        "rgb": {
          "red": 18,
          "green": 73,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 6030-G",
        "hex": "#003B16",
        "rgb": {
          "red": 0,
          "green": 59,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 7020-G",
        "hex": "#002C0F",
        "rgb": {
          "red": 0,
          "green": 44,
          "blue": 15,
        },
      },
      {
        "id": "NCS S 0505-G10Y",
        "hex": "#F6FDEF",
        "rgb": {
          "red": 246,
          "green": 253,
          "blue": 239,
        },
      },
      {
        "id": "NCS S 0510-G10Y",
        "hex": "#F1FBEA",
        "rgb": {
          "red": 241,
          "green": 251,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 0520-G10Y",
        "hex": "#E7F9D7",
        "rgb": {
          "red": 231,
          "green": 249,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 0530-G10Y",
        "hex": "#D5F4C3",
        "rgb": {
          "red": 213,
          "green": 244,
          "blue": 195,
        },
      },
      {
        "id": "NCS S 0540-G10Y",
        "hex": "#B6EDAC",
        "rgb": {
          "red": 182,
          "green": 237,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 0550-G10Y",
        "hex": "#A9EAA0",
        "rgb": {
          "red": 169,
          "green": 234,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 0560-G10Y",
        "hex": "#8ADE97",
        "rgb": {
          "red": 138,
          "green": 222,
          "blue": 151,
        },
      },
      {
        "id": "NCS S 0565-G10Y",
        "hex": "#78D588",
        "rgb": {
          "red": 120,
          "green": 213,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 1005-G10Y",
        "hex": "#E6EFE0",
        "rgb": {
          "red": 230,
          "green": 239,
          "blue": 224,
        },
      },
      {
        "id": "NCS S 1010-G10Y",
        "hex": "#E5F9DD",
        "rgb": {
          "red": 229,
          "green": 249,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 1020-G10Y",
        "hex": "#D2F5CB",
        "rgb": {
          "red": 210,
          "green": 245,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 1030-G10Y",
        "hex": "#BDF0B6",
        "rgb": {
          "red": 189,
          "green": 240,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 1040-G10Y",
        "hex": "#B7EDA9",
        "rgb": {
          "red": 183,
          "green": 237,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 1050-G10Y",
        "hex": "#9CE492",
        "rgb": {
          "red": 156,
          "green": 228,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 1060-G10Y",
        "hex": "#67CE7D",
        "rgb": {
          "red": 103,
          "green": 206,
          "blue": 125,
        },
      },
      {
        "id": "NCS S 1070-G10Y",
        "hex": "#41C06C",
        "rgb": {
          "red": 65,
          "green": 192,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 2005-G10Y",
        "hex": "#B9C5B8",
        "rgb": {
          "red": 185,
          "green": 197,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 2010-G10Y",
        "hex": "#B3CBB4",
        "rgb": {
          "red": 179,
          "green": 203,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 2020-G10Y",
        "hex": "#9FCD9D",
        "rgb": {
          "red": 159,
          "green": 205,
          "blue": 157,
        },
      },
      {
        "id": "NCS S 2030-G10Y",
        "hex": "#88CF92",
        "rgb": {
          "red": 136,
          "green": 207,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 2040-G10Y",
        "hex": "#73D384",
        "rgb": {
          "red": 115,
          "green": 211,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 2050-G10Y",
        "hex": "#4DC471",
        "rgb": {
          "red": 77,
          "green": 196,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 2060-G10Y",
        "hex": "#00B15D",
        "rgb": {
          "red": 0,
          "green": 177,
          "blue": 93,
        },
      },
      {
        "id": "NCS S 2070-G10Y",
        "hex": "#00984A",
        "rgb": {
          "red": 0,
          "green": 152,
          "blue": 74,
        },
      },
      {
        "id": "NCS S 3010-G10Y",
        "hex": "#92A78F",
        "rgb": {
          "red": 146,
          "green": 167,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3020-G10Y",
        "hex": "#79A580",
        "rgb": {
          "red": 121,
          "green": 165,
          "blue": 128,
        },
      },
      {
        "id": "NCS S 3030-G10Y",
        "hex": "#5F9E6C",
        "rgb": {
          "red": 95,
          "green": 158,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 3040-G10Y",
        "hex": "#439F64",
        "rgb": {
          "red": 67,
          "green": 159,
          "blue": 100,
        },
      },
      {
        "id": "NCS S 3050-G10Y",
        "hex": "#0E9155",
        "rgb": {
          "red": 14,
          "green": 145,
          "blue": 85,
        },
      },
      {
        "id": "NCS S 3060-G10Y",
        "hex": "#008240",
        "rgb": {
          "red": 0,
          "green": 130,
          "blue": 64,
        },
      },
      {
        "id": "NCS S 3065-G10Y",
        "hex": "#007C3F",
        "rgb": {
          "red": 0,
          "green": 124,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 3560-G10Y",
        "hex": "#006331",
        "rgb": {
          "red": 0,
          "green": 99,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 4010-G10Y",
        "hex": "#71856F",
        "rgb": {
          "red": 113,
          "green": 133,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 4020-G10Y",
        "hex": "#58805C",
        "rgb": {
          "red": 88,
          "green": 128,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 4030-G10Y",
        "hex": "#40794D",
        "rgb": {
          "red": 64,
          "green": 121,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 4040-G10Y",
        "hex": "#00743B",
        "rgb": {
          "red": 0,
          "green": 116,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 4050-G10Y",
        "hex": "#006E35",
        "rgb": {
          "red": 0,
          "green": 110,
          "blue": 53,
        },
      },
      {
        "id": "NCS S 4550-G10Y",
        "hex": "#005529",
        "rgb": {
          "red": 0,
          "green": 85,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 5010-G10Y",
        "hex": "#5E6F58",
        "rgb": {
          "red": 94,
          "green": 111,
          "blue": 88,
        },
      },
      {
        "id": "NCS S 5020-G10Y",
        "hex": "#3D6E48",
        "rgb": {
          "red": 61,
          "green": 110,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 5030-G10Y",
        "hex": "#22663C",
        "rgb": {
          "red": 34,
          "green": 102,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 5040-G10Y",
        "hex": "#00541E",
        "rgb": {
          "red": 0,
          "green": 84,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 5540-G10Y",
        "hex": "#00441C",
        "rgb": {
          "red": 0,
          "green": 68,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 6010-G10Y",
        "hex": "#4C5F4C",
        "rgb": {
          "red": 76,
          "green": 95,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 6020-G10Y",
        "hex": "#2E4F32",
        "rgb": {
          "red": 46,
          "green": 79,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 6030-G10Y",
        "hex": "#004414",
        "rgb": {
          "red": 0,
          "green": 68,
          "blue": 20,
        },
      },
      {
        "id": "NCS S 6530-G10Y",
        "hex": "#00300D",
        "rgb": {
          "red": 0,
          "green": 48,
          "blue": 13,
        },
      },
      {
        "id": "NCS S 7010-G10Y",
        "hex": "#39513A",
        "rgb": {
          "red": 57,
          "green": 81,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 7020-G10Y",
        "hex": "#00341A",
        "rgb": {
          "red": 0,
          "green": 52,
          "blue": 26,
        },
      },
      {
        "id": "NCS S 8010-G10Y",
        "hex": "#13280F",
        "rgb": {
          "red": 19,
          "green": 40,
          "blue": 15,
        },
      },
      {
        "id": "NCS S 0505-G20Y",
        "hex": "#F8FCEE",
        "rgb": {
          "red": 248,
          "green": 252,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 0510-G20Y",
        "hex": "#F4FCE5",
        "rgb": {
          "red": 244,
          "green": 252,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 0515-G20Y",
        "hex": "#EBFADD",
        "rgb": {
          "red": 235,
          "green": 250,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 0520-G20Y",
        "hex": "#E6F8CF",
        "rgb": {
          "red": 230,
          "green": 248,
          "blue": 207,
        },
      },
      {
        "id": "NCS S 0530-G20Y",
        "hex": "#D3F2B6",
        "rgb": {
          "red": 211,
          "green": 242,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 0540-G20Y",
        "hex": "#BEED9E",
        "rgb": {
          "red": 190,
          "green": 237,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 0550-G20Y",
        "hex": "#B0E891",
        "rgb": {
          "red": 176,
          "green": 232,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 0560-G20Y",
        "hex": "#9FDE75",
        "rgb": {
          "red": 159,
          "green": 222,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 0570-G20Y",
        "hex": "#7AD366",
        "rgb": {
          "red": 122,
          "green": 211,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 0575-G20Y",
        "hex": "#34B733",
        "rgb": {
          "red": 52,
          "green": 183,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 0804-G20Y",
        "hex": "#F4F8EB",
        "rgb": {
          "red": 244,
          "green": 248,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0907-G20Y",
        "hex": "#E7F1DE",
        "rgb": {
          "red": 231,
          "green": 241,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1005-G20Y",
        "hex": "#E8EFDF",
        "rgb": {
          "red": 232,
          "green": 239,
          "blue": 223,
        },
      },
      {
        "id": "NCS S 1010-G20Y",
        "hex": "#E3F0CD",
        "rgb": {
          "red": 227,
          "green": 240,
          "blue": 205,
        },
      },
      {
        "id": "NCS S 1015-G20Y",
        "hex": "#DEF6CA",
        "rgb": {
          "red": 222,
          "green": 246,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 1020-G20Y",
        "hex": "#D2F3B9",
        "rgb": {
          "red": 210,
          "green": 243,
          "blue": 185,
        },
      },
      {
        "id": "NCS S 1030-G20Y",
        "hex": "#C8F0AE",
        "rgb": {
          "red": 200,
          "green": 240,
          "blue": 174,
        },
      },
      {
        "id": "NCS S 1040-G20Y",
        "hex": "#BBEC9B",
        "rgb": {
          "red": 187,
          "green": 236,
          "blue": 155,
        },
      },
      {
        "id": "NCS S 1050-G20Y",
        "hex": "#A0DD70",
        "rgb": {
          "red": 160,
          "green": 221,
          "blue": 112,
        },
      },
      {
        "id": "NCS S 1060-G20Y",
        "hex": "#7DCD4B",
        "rgb": {
          "red": 125,
          "green": 205,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 1070-G20Y",
        "hex": "#4FBD2D",
        "rgb": {
          "red": 79,
          "green": 189,
          "blue": 45,
        },
      },
      {
        "id": "NCS S 1075-G20Y",
        "hex": "#00AD10",
        "rgb": {
          "red": 0,
          "green": 173,
          "blue": 16,
        },
      },
      {
        "id": "NCS S 1510-G20Y",
        "hex": "#C8DABA",
        "rgb": {
          "red": 200,
          "green": 218,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 1515-G20Y",
        "hex": "#C4E3B6",
        "rgb": {
          "red": 196,
          "green": 227,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 2005-G20Y",
        "hex": "#BAC2B5",
        "rgb": {
          "red": 186,
          "green": 194,
          "blue": 181,
        },
      },
      {
        "id": "NCS S 2010-G20Y",
        "hex": "#B1C6AA",
        "rgb": {
          "red": 177,
          "green": 198,
          "blue": 170,
        },
      },
      {
        "id": "NCS S 2020-G20Y",
        "hex": "#A6D29B",
        "rgb": {
          "red": 166,
          "green": 210,
          "blue": 155,
        },
      },
      {
        "id": "NCS S 2030-G20Y",
        "hex": "#90CF7C",
        "rgb": {
          "red": 144,
          "green": 207,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 2040-G20Y",
        "hex": "#75C268",
        "rgb": {
          "red": 117,
          "green": 194,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 2050-G20Y",
        "hex": "#58C053",
        "rgb": {
          "red": 88,
          "green": 192,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 2060-G20Y",
        "hex": "#20AF3D",
        "rgb": {
          "red": 32,
          "green": 175,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 2070-G20Y",
        "hex": "#00A51D",
        "rgb": {
          "red": 0,
          "green": 165,
          "blue": 29,
        },
      },
      {
        "id": "NCS S 2075-G20Y",
        "hex": "#00A134",
        "rgb": {
          "red": 0,
          "green": 161,
          "blue": 52,
        },
      },
      {
        "id": "NCS S 2570-G20Y",
        "hex": "#008C32",
        "rgb": {
          "red": 0,
          "green": 140,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 3005-G20Y",
        "hex": "#99A191",
        "rgb": {
          "red": 153,
          "green": 161,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 3010-G20Y",
        "hex": "#9BAA8F",
        "rgb": {
          "red": 155,
          "green": 170,
          "blue": 143,
        },
      },
      {
        "id": "NCS S 3020-G20Y",
        "hex": "#85A77D",
        "rgb": {
          "red": 133,
          "green": 167,
          "blue": 125,
        },
      },
      {
        "id": "NCS S 3030-G20Y",
        "hex": "#6B9761",
        "rgb": {
          "red": 107,
          "green": 151,
          "blue": 97,
        },
      },
      {
        "id": "NCS S 3040-G20Y",
        "hex": "#599651",
        "rgb": {
          "red": 89,
          "green": 150,
          "blue": 81,
        },
      },
      {
        "id": "NCS S 3050-G20Y",
        "hex": "#38934B",
        "rgb": {
          "red": 56,
          "green": 147,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 3060-G20Y",
        "hex": "#008730",
        "rgb": {
          "red": 0,
          "green": 135,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 3560-G20Y",
        "hex": "#007529",
        "rgb": {
          "red": 0,
          "green": 117,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 4005-G20Y",
        "hex": "#7B8479",
        "rgb": {
          "red": 123,
          "green": 132,
          "blue": 121,
        },
      },
      {
        "id": "NCS S 4040-G20Y",
        "hex": "#2A7833",
        "rgb": {
          "red": 42,
          "green": 120,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 4050-G20Y",
        "hex": "#006A20",
        "rgb": {
          "red": 0,
          "green": 106,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 4550-G20Y",
        "hex": "#00591E",
        "rgb": {
          "red": 0,
          "green": 89,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 5005-G20Y",
        "hex": "#68715F",
        "rgb": {
          "red": 104,
          "green": 113,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 5040-G20Y",
        "hex": "#005916",
        "rgb": {
          "red": 0,
          "green": 89,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 5540-G20Y",
        "hex": "#00480A",
        "rgb": {
          "red": 0,
          "green": 72,
          "blue": 10,
        },
      },
      {
        "id": "NCS S 6005-G20Y",
        "hex": "#535C4E",
        "rgb": {
          "red": 83,
          "green": 92,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 7005-G20Y",
        "hex": "#3A4436",
        "rgb": {
          "red": 58,
          "green": 68,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 8005-G20Y",
        "hex": "#222C20",
        "rgb": {
          "red": 34,
          "green": 44,
          "blue": 32,
        },
      },
      {
        "id": "NCS S 8505-G20Y",
        "hex": "#172016",
        "rgb": {
          "red": 23,
          "green": 32,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 0505-G30Y",
        "hex": "#F9FCEA",
        "rgb": {
          "red": 249,
          "green": 252,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 0510-G30Y",
        "hex": "#F6FBE1",
        "rgb": {
          "red": 246,
          "green": 251,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0520-G30Y",
        "hex": "#EDF9CF",
        "rgb": {
          "red": 237,
          "green": 249,
          "blue": 207,
        },
      },
      {
        "id": "NCS S 0530-G30Y",
        "hex": "#DDF4B7",
        "rgb": {
          "red": 221,
          "green": 244,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 0540-G30Y",
        "hex": "#D0EF9F",
        "rgb": {
          "red": 208,
          "green": 239,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 0550-G30Y",
        "hex": "#BDE785",
        "rgb": {
          "red": 189,
          "green": 231,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 0560-G30Y",
        "hex": "#B0DE6A",
        "rgb": {
          "red": 176,
          "green": 222,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 0570-G30Y",
        "hex": "#A1D54E",
        "rgb": {
          "red": 161,
          "green": 213,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 0580-G30Y",
        "hex": "#7CC72A",
        "rgb": {
          "red": 124,
          "green": 199,
          "blue": 42,
        },
      },
      {
        "id": "NCS S 1005-G30Y",
        "hex": "#ECF0E4",
        "rgb": {
          "red": 236,
          "green": 240,
          "blue": 228,
        },
      },
      {
        "id": "NCS S 1010-G30Y",
        "hex": "#E6EFD0",
        "rgb": {
          "red": 230,
          "green": 239,
          "blue": 208,
        },
      },
      {
        "id": "NCS S 1020-G30Y",
        "hex": "#DBF4BA",
        "rgb": {
          "red": 219,
          "green": 244,
          "blue": 186,
        },
      },
      {
        "id": "NCS S 1030-G30Y",
        "hex": "#C9EE9F",
        "rgb": {
          "red": 201,
          "green": 238,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 1040-G30Y",
        "hex": "#BDE785",
        "rgb": {
          "red": 189,
          "green": 231,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 1050-G30Y",
        "hex": "#AFDE6A",
        "rgb": {
          "red": 175,
          "green": 222,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 1060-G30Y",
        "hex": "#A1D54E",
        "rgb": {
          "red": 161,
          "green": 213,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 1070-G30Y",
        "hex": "#7CC729",
        "rgb": {
          "red": 124,
          "green": 199,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 1080-G30Y",
        "hex": "#4FB800",
        "rgb": {
          "red": 79,
          "green": 184,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2005-G30Y",
        "hex": "#B9C2B4",
        "rgb": {
          "red": 185,
          "green": 194,
          "blue": 180,
        },
      },
      {
        "id": "NCS S 2010-G30Y",
        "hex": "#BCC8AD",
        "rgb": {
          "red": 188,
          "green": 200,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 2020-G30Y",
        "hex": "#A7C18E",
        "rgb": {
          "red": 167,
          "green": 193,
          "blue": 142,
        },
      },
      {
        "id": "NCS S 2030-G30Y",
        "hex": "#9ABC73",
        "rgb": {
          "red": 154,
          "green": 188,
          "blue": 115,
        },
      },
      {
        "id": "NCS S 2040-G30Y",
        "hex": "#88BD65",
        "rgb": {
          "red": 136,
          "green": 189,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 2050-G30Y",
        "hex": "#6DB32D",
        "rgb": {
          "red": 109,
          "green": 179,
          "blue": 45,
        },
      },
      {
        "id": "NCS S 2060-G30Y",
        "hex": "#50B100",
        "rgb": {
          "red": 80,
          "green": 177,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2070-G30Y",
        "hex": "#3EA400",
        "rgb": {
          "red": 62,
          "green": 164,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2075-G30Y",
        "hex": "#009F11",
        "rgb": {
          "red": 0,
          "green": 159,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 2570-G30Y",
        "hex": "#308C00",
        "rgb": {
          "red": 48,
          "green": 140,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-G30Y",
        "hex": "#A3AD91",
        "rgb": {
          "red": 163,
          "green": 173,
          "blue": 145,
        },
      },
      {
        "id": "NCS S 3020-G30Y",
        "hex": "#8EA47A",
        "rgb": {
          "red": 142,
          "green": 164,
          "blue": 122,
        },
      },
      {
        "id": "NCS S 3030-G30Y",
        "hex": "#78985C",
        "rgb": {
          "red": 120,
          "green": 152,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 3040-G30Y",
        "hex": "#6A913F",
        "rgb": {
          "red": 106,
          "green": 145,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 3050-G30Y",
        "hex": "#4A8617",
        "rgb": {
          "red": 74,
          "green": 134,
          "blue": 23,
        },
      },
      {
        "id": "NCS S 3060-G30Y",
        "hex": "#2C8500",
        "rgb": {
          "red": 44,
          "green": 133,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-G30Y",
        "hex": "#016C00",
        "rgb": {
          "red": 1,
          "green": 108,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4010-G30Y",
        "hex": "#768265",
        "rgb": {
          "red": 118,
          "green": 130,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 4020-G30Y",
        "hex": "#70845A",
        "rgb": {
          "red": 112,
          "green": 132,
          "blue": 90,
        },
      },
      {
        "id": "NCS S 4030-G30Y",
        "hex": "#55793F",
        "rgb": {
          "red": 85,
          "green": 121,
          "blue": 63,
        },
      },
      {
        "id": "NCS S 4040-G30Y",
        "hex": "#2A7916",
        "rgb": {
          "red": 42,
          "green": 121,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 4050-G30Y",
        "hex": "#026C00",
        "rgb": {
          "red": 2,
          "green": 108,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4550-G30Y",
        "hex": "#075D00",
        "rgb": {
          "red": 7,
          "green": 93,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5010-G30Y",
        "hex": "#5E6C4F",
        "rgb": {
          "red": 94,
          "green": 108,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 5020-G30Y",
        "hex": "#4F6C43",
        "rgb": {
          "red": 79,
          "green": 108,
          "blue": 67,
        },
      },
      {
        "id": "NCS S 5030-G30Y",
        "hex": "#416224",
        "rgb": {
          "red": 65,
          "green": 98,
          "blue": 36,
        },
      },
      {
        "id": "NCS S 5040-G30Y",
        "hex": "#295E02",
        "rgb": {
          "red": 41,
          "green": 94,
          "blue": 2,
        },
      },
      {
        "id": "NCS S 5540-G30Y",
        "hex": "#184800",
        "rgb": {
          "red": 24,
          "green": 72,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6010-G30Y",
        "hex": "#56624C",
        "rgb": {
          "red": 86,
          "green": 98,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 6020-G30Y",
        "hex": "#3C5528",
        "rgb": {
          "red": 60,
          "green": 85,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 6030-G30Y",
        "hex": "#2B4912",
        "rgb": {
          "red": 43,
          "green": 73,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 7010-G30Y",
        "hex": "#45553E",
        "rgb": {
          "red": 69,
          "green": 85,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 7020-G30Y",
        "hex": "#1D3909",
        "rgb": {
          "red": 29,
          "green": 57,
          "blue": 9,
        },
      },
      {
        "id": "NCS S 8010-G30Y",
        "hex": "#1A290C",
        "rgb": {
          "red": 26,
          "green": 41,
          "blue": 12,
        },
      },
      {
        "id": "NCS S 0505-G40Y",
        "hex": "#FAFCE7",
        "rgb": {
          "red": 250,
          "green": 252,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0507-G40Y",
        "hex": "#F9FCE5",
        "rgb": {
          "red": 249,
          "green": 252,
          "blue": 229,
        },
      },
      {
        "id": "NCS S 0510-G40Y",
        "hex": "#F6FBE1",
        "rgb": {
          "red": 246,
          "green": 251,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0515-G40Y",
        "hex": "#F0FAD5",
        "rgb": {
          "red": 240,
          "green": 250,
          "blue": 213,
        },
      },
      {
        "id": "NCS S 0520-G40Y",
        "hex": "#F1F8CB",
        "rgb": {
          "red": 241,
          "green": 248,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 0530-G40Y",
        "hex": "#E7F5B6",
        "rgb": {
          "red": 231,
          "green": 245,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 0540-G40Y",
        "hex": "#E0F2A1",
        "rgb": {
          "red": 224,
          "green": 242,
          "blue": 161,
        },
      },
      {
        "id": "NCS S 0550-G40Y",
        "hex": "#D6EC87",
        "rgb": {
          "red": 214,
          "green": 236,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 0560-G40Y",
        "hex": "#CDE66F",
        "rgb": {
          "red": 205,
          "green": 230,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 0570-G40Y",
        "hex": "#BEDD50",
        "rgb": {
          "red": 190,
          "green": 221,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 0575-G40Y",
        "hex": "#A0D02D",
        "rgb": {
          "red": 160,
          "green": 208,
          "blue": 45,
        },
      },
      {
        "id": "NCS S 0603-G40Y",
        "hex": "#F6F8EE",
        "rgb": {
          "red": 246,
          "green": 248,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1005-G40Y",
        "hex": "#EDEFDB",
        "rgb": {
          "red": 237,
          "green": 239,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 1010-G40Y",
        "hex": "#E7ECCA",
        "rgb": {
          "red": 231,
          "green": 236,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 1015-G40Y",
        "hex": "#EAF6C1",
        "rgb": {
          "red": 234,
          "green": 246,
          "blue": 193,
        },
      },
      {
        "id": "NCS S 1020-G40Y",
        "hex": "#E2F3AC",
        "rgb": {
          "red": 226,
          "green": 243,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 1030-G40Y",
        "hex": "#DAEE93",
        "rgb": {
          "red": 218,
          "green": 238,
          "blue": 147,
        },
      },
      {
        "id": "NCS S 1040-G40Y",
        "hex": "#CBE77A",
        "rgb": {
          "red": 203,
          "green": 231,
          "blue": 122,
        },
      },
      {
        "id": "NCS S 1050-G40Y",
        "hex": "#C0E268",
        "rgb": {
          "red": 192,
          "green": 226,
          "blue": 104,
        },
      },
      {
        "id": "NCS S 1060-G40Y",
        "hex": "#AAD32F",
        "rgb": {
          "red": 170,
          "green": 211,
          "blue": 47,
        },
      },
      {
        "id": "NCS S 1070-G40Y",
        "hex": "#9FCE12",
        "rgb": {
          "red": 159,
          "green": 206,
          "blue": 18,
        },
      },
      {
        "id": "NCS S 1075-G40Y",
        "hex": "#8EC800",
        "rgb": {
          "red": 142,
          "green": 200,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1510-G40Y",
        "hex": "#D6DFC0",
        "rgb": {
          "red": 214,
          "green": 223,
          "blue": 192,
        },
      },
      {
        "id": "NCS S 1515-G40Y",
        "hex": "#CFDBA9",
        "rgb": {
          "red": 207,
          "green": 219,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 2005-G40Y",
        "hex": "#BEC3B5",
        "rgb": {
          "red": 190,
          "green": 195,
          "blue": 181,
        },
      },
      {
        "id": "NCS S 2010-G40Y",
        "hex": "#BFC9AD",
        "rgb": {
          "red": 191,
          "green": 201,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 2020-G40Y",
        "hex": "#B4C28B",
        "rgb": {
          "red": 180,
          "green": 194,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 2030-G40Y",
        "hex": "#A4BE6F",
        "rgb": {
          "red": 164,
          "green": 190,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 2040-G40Y",
        "hex": "#99B75E",
        "rgb": {
          "red": 153,
          "green": 183,
          "blue": 94,
        },
      },
      {
        "id": "NCS S 2050-G40Y",
        "hex": "#8DB048",
        "rgb": {
          "red": 141,
          "green": 176,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 2060-G40Y",
        "hex": "#73B400",
        "rgb": {
          "red": 115,
          "green": 180,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2070-G40Y",
        "hex": "#68AD00",
        "rgb": {
          "red": 104,
          "green": 173,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-G40Y",
        "hex": "#9EA88C",
        "rgb": {
          "red": 158,
          "green": 168,
          "blue": 140,
        },
      },
      {
        "id": "NCS S 3020-G40Y",
        "hex": "#8EA372",
        "rgb": {
          "red": 142,
          "green": 163,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 3030-G40Y",
        "hex": "#869D5D",
        "rgb": {
          "red": 134,
          "green": 157,
          "blue": 93,
        },
      },
      {
        "id": "NCS S 3040-G40Y",
        "hex": "#7B9444",
        "rgb": {
          "red": 123,
          "green": 148,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 3050-G40Y",
        "hex": "#628611",
        "rgb": {
          "red": 98,
          "green": 134,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 3060-G40Y",
        "hex": "#508600",
        "rgb": {
          "red": 80,
          "green": 134,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3065-G40Y",
        "hex": "#467F00",
        "rgb": {
          "red": 70,
          "green": 127,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-G40Y",
        "hex": "#2F7100",
        "rgb": {
          "red": 47,
          "green": 113,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4040-G40Y",
        "hex": "#4B7005",
        "rgb": {
          "red": 75,
          "green": 112,
          "blue": 5,
        },
      },
      {
        "id": "NCS S 4050-G40Y",
        "hex": "#376B00",
        "rgb": {
          "red": 55,
          "green": 107,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4550-G40Y",
        "hex": "#336600",
        "rgb": {
          "red": 51,
          "green": 102,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5040-G40Y",
        "hex": "#395C00",
        "rgb": {
          "red": 57,
          "green": 92,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5540-G40Y",
        "hex": "#244E00",
        "rgb": {
          "red": 36,
          "green": 78,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0505-G50Y",
        "hex": "#FCFCE7",
        "rgb": {
          "red": 252,
          "green": 252,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0510-G50Y",
        "hex": "#FBFBE3",
        "rgb": {
          "red": 251,
          "green": 251,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 0520-G50Y",
        "hex": "#F6F9CB",
        "rgb": {
          "red": 246,
          "green": 249,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 0530-G50Y",
        "hex": "#EFF5B7",
        "rgb": {
          "red": 239,
          "green": 245,
          "blue": 183,
        },
      },
      {
        "id": "NCS S 0540-G50Y",
        "hex": "#EAF39D",
        "rgb": {
          "red": 234,
          "green": 243,
          "blue": 157,
        },
      },
      {
        "id": "NCS S 0550-G50Y",
        "hex": "#E2EF84",
        "rgb": {
          "red": 226,
          "green": 239,
          "blue": 132,
        },
      },
      {
        "id": "NCS S 0560-G50Y",
        "hex": "#D7E86A",
        "rgb": {
          "red": 215,
          "green": 232,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 0565-G50Y",
        "hex": "#CBE04C",
        "rgb": {
          "red": 203,
          "green": 224,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 1005-G50Y",
        "hex": "#EDEFD8",
        "rgb": {
          "red": 237,
          "green": 239,
          "blue": 216,
        },
      },
      {
        "id": "NCS S 1010-G50Y",
        "hex": "#EBEDCA",
        "rgb": {
          "red": 235,
          "green": 237,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 1020-G50Y",
        "hex": "#F0F6B3",
        "rgb": {
          "red": 240,
          "green": 246,
          "blue": 179,
        },
      },
      {
        "id": "NCS S 1030-G50Y",
        "hex": "#E1EE88",
        "rgb": {
          "red": 225,
          "green": 238,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 1040-G50Y",
        "hex": "#DCEA6E",
        "rgb": {
          "red": 220,
          "green": 234,
          "blue": 110,
        },
      },
      {
        "id": "NCS S 1050-G50Y",
        "hex": "#D2E351",
        "rgb": {
          "red": 210,
          "green": 227,
          "blue": 81,
        },
      },
      {
        "id": "NCS S 1060-G50Y",
        "hex": "#C5DA31",
        "rgb": {
          "red": 197,
          "green": 218,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 1070-G50Y",
        "hex": "#ADCF00",
        "rgb": {
          "red": 173,
          "green": 207,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1075-G50Y",
        "hex": "#9AC800",
        "rgb": {
          "red": 154,
          "green": 200,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2005-G50Y",
        "hex": "#C1C4B2",
        "rgb": {
          "red": 193,
          "green": 196,
          "blue": 178,
        },
      },
      {
        "id": "NCS S 2010-G50Y",
        "hex": "#C3C9AC",
        "rgb": {
          "red": 195,
          "green": 201,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 2020-G50Y",
        "hex": "#B1BF8A",
        "rgb": {
          "red": 177,
          "green": 191,
          "blue": 138,
        },
      },
      {
        "id": "NCS S 2030-G50Y",
        "hex": "#AEBD71",
        "rgb": {
          "red": 174,
          "green": 189,
          "blue": 113,
        },
      },
      {
        "id": "NCS S 2040-G50Y",
        "hex": "#A6B65B",
        "rgb": {
          "red": 166,
          "green": 182,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 2050-G50Y",
        "hex": "#91B02A",
        "rgb": {
          "red": 145,
          "green": 176,
          "blue": 42,
        },
      },
      {
        "id": "NCS S 2060-G50Y",
        "hex": "#8CB311",
        "rgb": {
          "red": 140,
          "green": 179,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 2070-G50Y",
        "hex": "#79B100",
        "rgb": {
          "red": 121,
          "green": 177,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3005-G50Y",
        "hex": "#A0A492",
        "rgb": {
          "red": 160,
          "green": 164,
          "blue": 146,
        },
      },
      {
        "id": "NCS S 3010-G50Y",
        "hex": "#9CA17E",
        "rgb": {
          "red": 156,
          "green": 161,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 3020-G50Y",
        "hex": "#9AA574",
        "rgb": {
          "red": 154,
          "green": 165,
          "blue": 116,
        },
      },
      {
        "id": "NCS S 3030-G50Y",
        "hex": "#8B984A",
        "rgb": {
          "red": 139,
          "green": 152,
          "blue": 74,
        },
      },
      {
        "id": "NCS S 3040-G50Y",
        "hex": "#86983A",
        "rgb": {
          "red": 134,
          "green": 152,
          "blue": 58,
        },
      },
      {
        "id": "NCS S 3050-G50Y",
        "hex": "#778C13",
        "rgb": {
          "red": 119,
          "green": 140,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 3060-G50Y",
        "hex": "#698C00",
        "rgb": {
          "red": 105,
          "green": 140,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3065-G50Y",
        "hex": "#5F8A00",
        "rgb": {
          "red": 95,
          "green": 138,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-G50Y",
        "hex": "#517400",
        "rgb": {
          "red": 81,
          "green": 116,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4005-G50Y",
        "hex": "#85887A",
        "rgb": {
          "red": 133,
          "green": 136,
          "blue": 122,
        },
      },
      {
        "id": "NCS S 4010-G50Y",
        "hex": "#81876C",
        "rgb": {
          "red": 129,
          "green": 135,
          "blue": 108,
        },
      },
      {
        "id": "NCS S 4020-G50Y",
        "hex": "#7C865B",
        "rgb": {
          "red": 124,
          "green": 134,
          "blue": 91,
        },
      },
      {
        "id": "NCS S 4030-G50Y",
        "hex": "#6C7E3B",
        "rgb": {
          "red": 108,
          "green": 126,
          "blue": 59,
        },
      },
      {
        "id": "NCS S 4040-G50Y",
        "hex": "#607725",
        "rgb": {
          "red": 96,
          "green": 119,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 4050-G50Y",
        "hex": "#486D00",
        "rgb": {
          "red": 72,
          "green": 109,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4550-G50Y",
        "hex": "#486A00",
        "rgb": {
          "red": 72,
          "green": 106,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5005-G50Y",
        "hex": "#757766",
        "rgb": {
          "red": 117,
          "green": 119,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 5010-G50Y",
        "hex": "#70745C",
        "rgb": {
          "red": 112,
          "green": 116,
          "blue": 92,
        },
      },
      {
        "id": "NCS S 5020-G50Y",
        "hex": "#666D3E",
        "rgb": {
          "red": 102,
          "green": 109,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 5030-G50Y",
        "hex": "#5C6931",
        "rgb": {
          "red": 92,
          "green": 105,
          "blue": 49,
        },
      },
      {
        "id": "NCS S 5040-G50Y",
        "hex": "#446100",
        "rgb": {
          "red": 68,
          "green": 97,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5540-G50Y",
        "hex": "#3A5000",
        "rgb": {
          "red": 58,
          "green": 80,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6005-G50Y",
        "hex": "#5B5E51",
        "rgb": {
          "red": 91,
          "green": 94,
          "blue": 81,
        },
      },
      {
        "id": "NCS S 6010-G50Y",
        "hex": "#5A5D48",
        "rgb": {
          "red": 90,
          "green": 93,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 6020-G50Y",
        "hex": "#52592B",
        "rgb": {
          "red": 82,
          "green": 89,
          "blue": 43,
        },
      },
      {
        "id": "NCS S 6030-G50Y",
        "hex": "#3D4D11",
        "rgb": {
          "red": 61,
          "green": 77,
          "blue": 17,
        },
      },
      {
        "id": "NCS S 6530-G50Y",
        "hex": "#213800",
        "rgb": {
          "red": 33,
          "green": 56,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 7005-G50Y",
        "hex": "#3F4232",
        "rgb": {
          "red": 63,
          "green": 66,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 7010-G50Y",
        "hex": "#51573C",
        "rgb": {
          "red": 81,
          "green": 87,
          "blue": 60,
        },
      },
      {
        "id": "NCS S 7020-G50Y",
        "hex": "#303B16",
        "rgb": {
          "red": 48,
          "green": 59,
          "blue": 22,
        },
      },
      {
        "id": "NCS S 8005-G50Y",
        "hex": "#2A2D1B",
        "rgb": {
          "red": 42,
          "green": 45,
          "blue": 27,
        },
      },
      {
        "id": "NCS S 8010-G50Y",
        "hex": "#252C0E",
        "rgb": {
          "red": 37,
          "green": 44,
          "blue": 14,
        },
      },
      {
        "id": "NCS S 0505-G60Y",
        "hex": "#FDFBE6",
        "rgb": {
          "red": 253,
          "green": 251,
          "blue": 230,
        },
      },
      {
        "id": "NCS S 0510-G60Y",
        "hex": "#FCFBE1",
        "rgb": {
          "red": 252,
          "green": 251,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0515-G60Y",
        "hex": "#FAF9D8",
        "rgb": {
          "red": 250,
          "green": 249,
          "blue": 216,
        },
      },
      {
        "id": "NCS S 0520-G60Y",
        "hex": "#F8F8CB",
        "rgb": {
          "red": 248,
          "green": 248,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 0530-G60Y",
        "hex": "#F0F4AC",
        "rgb": {
          "red": 240,
          "green": 244,
          "blue": 172,
        },
      },
      {
        "id": "NCS S 0540-G60Y",
        "hex": "#EBF187",
        "rgb": {
          "red": 235,
          "green": 241,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 0550-G60Y",
        "hex": "#E8EA6A",
        "rgb": {
          "red": 232,
          "green": 234,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 0560-G60Y",
        "hex": "#DFE550",
        "rgb": {
          "red": 223,
          "green": 229,
          "blue": 80,
        },
      },
      {
        "id": "NCS S 0570-G60Y",
        "hex": "#D3DD2F",
        "rgb": {
          "red": 211,
          "green": 221,
          "blue": 47,
        },
      },
      {
        "id": "NCS S 0575-G60Y",
        "hex": "#C6D600",
        "rgb": {
          "red": 198,
          "green": 214,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0804-G60Y",
        "hex": "#F8F8EB",
        "rgb": {
          "red": 248,
          "green": 248,
          "blue": 235,
        },
      },
      {
        "id": "NCS S 0907-G60Y",
        "hex": "#F2F4DE",
        "rgb": {
          "red": 242,
          "green": 244,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 1005-G60Y",
        "hex": "#EFF0DD",
        "rgb": {
          "red": 239,
          "green": 240,
          "blue": 221,
        },
      },
      {
        "id": "NCS S 1010-G60Y",
        "hex": "#F2F3C1",
        "rgb": {
          "red": 242,
          "green": 243,
          "blue": 193,
        },
      },
      {
        "id": "NCS S 1015-G60Y",
        "hex": "#EEEEB1",
        "rgb": {
          "red": 238,
          "green": 238,
          "blue": 177,
        },
      },
      {
        "id": "NCS S 1020-G60Y",
        "hex": "#F0F2AD",
        "rgb": {
          "red": 240,
          "green": 242,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 1030-G60Y",
        "hex": "#EBF28D",
        "rgb": {
          "red": 235,
          "green": 242,
          "blue": 141,
        },
      },
      {
        "id": "NCS S 1040-G60Y",
        "hex": "#E1EB6D",
        "rgb": {
          "red": 225,
          "green": 235,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 1050-G60Y",
        "hex": "#DFE656",
        "rgb": {
          "red": 223,
          "green": 230,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 1060-G60Y",
        "hex": "#D2DD30",
        "rgb": {
          "red": 210,
          "green": 221,
          "blue": 48,
        },
      },
      {
        "id": "NCS S 1070-G60Y",
        "hex": "#C8D700",
        "rgb": {
          "red": 200,
          "green": 215,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1075-G60Y",
        "hex": "#C2D500",
        "rgb": {
          "red": 194,
          "green": 213,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1510-G60Y",
        "hex": "#DCE0B8",
        "rgb": {
          "red": 220,
          "green": 224,
          "blue": 184,
        },
      },
      {
        "id": "NCS S 1515-G60Y",
        "hex": "#D5DDA6",
        "rgb": {
          "red": 213,
          "green": 221,
          "blue": 166,
        },
      },
      {
        "id": "NCS S 2005-G60Y",
        "hex": "#C0C3AD",
        "rgb": {
          "red": 192,
          "green": 195,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 2010-G60Y",
        "hex": "#BDC29F",
        "rgb": {
          "red": 189,
          "green": 194,
          "blue": 159,
        },
      },
      {
        "id": "NCS S 2020-G60Y",
        "hex": "#B9C38B",
        "rgb": {
          "red": 185,
          "green": 195,
          "blue": 139,
        },
      },
      {
        "id": "NCS S 2030-G60Y",
        "hex": "#B7BF6F",
        "rgb": {
          "red": 183,
          "green": 191,
          "blue": 111,
        },
      },
      {
        "id": "NCS S 2040-G60Y",
        "hex": "#A8B656",
        "rgb": {
          "red": 168,
          "green": 182,
          "blue": 86,
        },
      },
      {
        "id": "NCS S 2050-G60Y",
        "hex": "#A8B344",
        "rgb": {
          "red": 168,
          "green": 179,
          "blue": 68,
        },
      },
      {
        "id": "NCS S 2060-G60Y",
        "hex": "#A1B126",
        "rgb": {
          "red": 161,
          "green": 177,
          "blue": 38,
        },
      },
      {
        "id": "NCS S 2070-G60Y",
        "hex": "#9CB500",
        "rgb": {
          "red": 156,
          "green": 181,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-G60Y",
        "hex": "#9FA583",
        "rgb": {
          "red": 159,
          "green": 165,
          "blue": 131,
        },
      },
      {
        "id": "NCS S 3020-G60Y",
        "hex": "#9AA26D",
        "rgb": {
          "red": 154,
          "green": 162,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 3030-G60Y",
        "hex": "#909A4B",
        "rgb": {
          "red": 144,
          "green": 154,
          "blue": 75,
        },
      },
      {
        "id": "NCS S 3040-G60Y",
        "hex": "#8C9837",
        "rgb": {
          "red": 140,
          "green": 152,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 3050-G60Y",
        "hex": "#829013",
        "rgb": {
          "red": 130,
          "green": 144,
          "blue": 19,
        },
      },
      {
        "id": "NCS S 3060-G60Y",
        "hex": "#798C00",
        "rgb": {
          "red": 121,
          "green": 140,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3065-G60Y",
        "hex": "#798A00",
        "rgb": {
          "red": 121,
          "green": 138,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-G60Y",
        "hex": "#647B00",
        "rgb": {
          "red": 100,
          "green": 123,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4040-G60Y",
        "hex": "#707A32",
        "rgb": {
          "red": 112,
          "green": 122,
          "blue": 50,
        },
      },
      {
        "id": "NCS S 4050-G60Y",
        "hex": "#6B7206",
        "rgb": {
          "red": 107,
          "green": 114,
          "blue": 6,
        },
      },
      {
        "id": "NCS S 4550-G60Y",
        "hex": "#657200",
        "rgb": {
          "red": 101,
          "green": 114,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5040-G60Y",
        "hex": "#565D00",
        "rgb": {
          "red": 86,
          "green": 93,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5540-G60Y",
        "hex": "#494E00",
        "rgb": {
          "red": 73,
          "green": 78,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 0505-G70Y",
        "hex": "#FDFBE3",
        "rgb": {
          "red": 253,
          "green": 251,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 0510-G70Y",
        "hex": "#FEFBDE",
        "rgb": {
          "red": 254,
          "green": 251,
          "blue": 222,
        },
      },
      {
        "id": "NCS S 0520-G70Y",
        "hex": "#FBF9CB",
        "rgb": {
          "red": 251,
          "green": 249,
          "blue": 203,
        },
      },
      {
        "id": "NCS S 0530-G70Y",
        "hex": "#F7F39E",
        "rgb": {
          "red": 247,
          "green": 243,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 0540-G70Y",
        "hex": "#F4EF87",
        "rgb": {
          "red": 244,
          "green": 239,
          "blue": 135,
        },
      },
      {
        "id": "NCS S 0550-G70Y",
        "hex": "#EFEB69",
        "rgb": {
          "red": 239,
          "green": 235,
          "blue": 105,
        },
      },
      {
        "id": "NCS S 0560-G70Y",
        "hex": "#E7E44D",
        "rgb": {
          "red": 231,
          "green": 228,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 0570-G70Y",
        "hex": "#E0E029",
        "rgb": {
          "red": 224,
          "green": 224,
          "blue": 41,
        },
      },
      {
        "id": "NCS S 0575-G70Y",
        "hex": "#D9DA00",
        "rgb": {
          "red": 217,
          "green": 218,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1005-G70Y",
        "hex": "#F5F4E3",
        "rgb": {
          "red": 245,
          "green": 244,
          "blue": 227,
        },
      },
      {
        "id": "NCS S 1010-G70Y",
        "hex": "#F4F3C5",
        "rgb": {
          "red": 244,
          "green": 243,
          "blue": 197,
        },
      },
      {
        "id": "NCS S 1020-G70Y",
        "hex": "#F1F0A7",
        "rgb": {
          "red": 241,
          "green": 240,
          "blue": 167,
        },
      },
      {
        "id": "NCS S 1030-G70Y",
        "hex": "#E9EB85",
        "rgb": {
          "red": 233,
          "green": 235,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 1040-G70Y",
        "hex": "#E3E669",
        "rgb": {
          "red": 227,
          "green": 230,
          "blue": 105,
        },
      },
      {
        "id": "NCS S 1050-G70Y",
        "hex": "#E5E44D",
        "rgb": {
          "red": 229,
          "green": 228,
          "blue": 77,
        },
      },
      {
        "id": "NCS S 1060-G70Y",
        "hex": "#CFD42D",
        "rgb": {
          "red": 207,
          "green": 212,
          "blue": 45,
        },
      },
      {
        "id": "NCS S 1070-G70Y",
        "hex": "#CDD30F",
        "rgb": {
          "red": 205,
          "green": 211,
          "blue": 15,
        },
      },
      {
        "id": "NCS S 1075-G70Y",
        "hex": "#CDD400",
        "rgb": {
          "red": 205,
          "green": 212,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2005-G70Y",
        "hex": "#C4C6B5",
        "rgb": {
          "red": 196,
          "green": 198,
          "blue": 181,
        },
      },
      {
        "id": "NCS S 2010-G70Y",
        "hex": "#BFC19E",
        "rgb": {
          "red": 191,
          "green": 193,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 2020-G70Y",
        "hex": "#C0C188",
        "rgb": {
          "red": 192,
          "green": 193,
          "blue": 136,
        },
      },
      {
        "id": "NCS S 2030-G70Y",
        "hex": "#BBBE6D",
        "rgb": {
          "red": 187,
          "green": 190,
          "blue": 109,
        },
      },
      {
        "id": "NCS S 2040-G70Y",
        "hex": "#B8B94E",
        "rgb": {
          "red": 184,
          "green": 185,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 2050-G70Y",
        "hex": "#A8AF34",
        "rgb": {
          "red": 168,
          "green": 175,
          "blue": 52,
        },
      },
      {
        "id": "NCS S 2060-G70Y",
        "hex": "#AEB400",
        "rgb": {
          "red": 174,
          "green": 180,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2070-G70Y",
        "hex": "#A6AA00",
        "rgb": {
          "red": 166,
          "green": 170,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3010-G70Y",
        "hex": "#A5A685",
        "rgb": {
          "red": 165,
          "green": 166,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 3020-G70Y",
        "hex": "#A4A672",
        "rgb": {
          "red": 164,
          "green": 166,
          "blue": 114,
        },
      },
      {
        "id": "NCS S 3030-G70Y",
        "hex": "#9A9C48",
        "rgb": {
          "red": 154,
          "green": 156,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 3040-G70Y",
        "hex": "#8E9336",
        "rgb": {
          "red": 142,
          "green": 147,
          "blue": 54,
        },
      },
      {
        "id": "NCS S 3050-G70Y",
        "hex": "#828700",
        "rgb": {
          "red": 130,
          "green": 135,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3060-G70Y",
        "hex": "#838B00",
        "rgb": {
          "red": 131,
          "green": 139,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3560-G70Y",
        "hex": "#6F7E00",
        "rgb": {
          "red": 111,
          "green": 126,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4010-G70Y",
        "hex": "#888A6A",
        "rgb": {
          "red": 136,
          "green": 138,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 4020-G70Y",
        "hex": "#808252",
        "rgb": {
          "red": 128,
          "green": 130,
          "blue": 82,
        },
      },
      {
        "id": "NCS S 4030-G70Y",
        "hex": "#83843E",
        "rgb": {
          "red": 131,
          "green": 132,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 4040-G70Y",
        "hex": "#6F7525",
        "rgb": {
          "red": 111,
          "green": 117,
          "blue": 37,
        },
      },
      {
        "id": "NCS S 4050-G70Y",
        "hex": "#707107",
        "rgb": {
          "red": 112,
          "green": 113,
          "blue": 7,
        },
      },
      {
        "id": "NCS S 4550-G70Y",
        "hex": "#686900",
        "rgb": {
          "red": 104,
          "green": 105,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5010-G70Y",
        "hex": "#707153",
        "rgb": {
          "red": 112,
          "green": 113,
          "blue": 83,
        },
      },
      {
        "id": "NCS S 5020-G70Y",
        "hex": "#71723E",
        "rgb": {
          "red": 113,
          "green": 114,
          "blue": 62,
        },
      },
      {
        "id": "NCS S 5030-G70Y",
        "hex": "#6D6D2E",
        "rgb": {
          "red": 109,
          "green": 109,
          "blue": 46,
        },
      },
      {
        "id": "NCS S 5040-G70Y",
        "hex": "#5F5F00",
        "rgb": {
          "red": 95,
          "green": 95,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5540-G70Y",
        "hex": "#3D4100",
        "rgb": {
          "red": 61,
          "green": 65,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6010-G70Y",
        "hex": "#626348",
        "rgb": {
          "red": 98,
          "green": 99,
          "blue": 72,
        },
      },
      {
        "id": "NCS S 6020-G70Y",
        "hex": "#5D5D38",
        "rgb": {
          "red": 93,
          "green": 93,
          "blue": 56,
        },
      },
      {
        "id": "NCS S 6030-G70Y",
        "hex": "#535421",
        "rgb": {
          "red": 83,
          "green": 84,
          "blue": 33,
        },
      },
      {
        "id": "NCS S 7010-G70Y",
        "hex": "#474833",
        "rgb": {
          "red": 71,
          "green": 72,
          "blue": 51,
        },
      },
      {
        "id": "NCS S 7020-G70Y",
        "hex": "#2A2C00",
        "rgb": {
          "red": 42,
          "green": 44,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 8010-G70Y",
        "hex": "#2D2E1C",
        "rgb": {
          "red": 45,
          "green": 46,
          "blue": 28,
        },
      },
      {
        "id": "NCS S 0505-G80Y",
        "hex": "#FEFCE7",
        "rgb": {
          "red": 254,
          "green": 252,
          "blue": 231,
        },
      },
      {
        "id": "NCS S 0507-G80Y",
        "hex": "#FEFAE1",
        "rgb": {
          "red": 254,
          "green": 250,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0510-G80Y",
        "hex": "#FEFADB",
        "rgb": {
          "red": 254,
          "green": 250,
          "blue": 219,
        },
      },
      {
        "id": "NCS S 0515-G80Y",
        "hex": "#FDFAD7",
        "rgb": {
          "red": 253,
          "green": 250,
          "blue": 215,
        },
      },
      {
        "id": "NCS S 0520-G80Y",
        "hex": "#FCF8CA",
        "rgb": {
          "red": 252,
          "green": 248,
          "blue": 202,
        },
      },
      {
        "id": "NCS S 0530-G80Y",
        "hex": "#FBF4A9",
        "rgb": {
          "red": 251,
          "green": 244,
          "blue": 169,
        },
      },
      {
        "id": "NCS S 0540-G80Y",
        "hex": "#F8EF85",
        "rgb": {
          "red": 248,
          "green": 239,
          "blue": 133,
        },
      },
      {
        "id": "NCS S 0550-G80Y",
        "hex": "#F8EB6A",
        "rgb": {
          "red": 248,
          "green": 235,
          "blue": 106,
        },
      },
      {
        "id": "NCS S 0560-G80Y",
        "hex": "#F5E64E",
        "rgb": {
          "red": 245,
          "green": 230,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 0570-G80Y",
        "hex": "#F3E228",
        "rgb": {
          "red": 243,
          "green": 226,
          "blue": 40,
        },
      },
      {
        "id": "NCS S 0603-G80Y",
        "hex": "#FBF9EE",
        "rgb": {
          "red": 251,
          "green": 249,
          "blue": 238,
        },
      },
      {
        "id": "NCS S 1005-G80Y",
        "hex": "#F5F1D8",
        "rgb": {
          "red": 245,
          "green": 241,
          "blue": 216,
        },
      },
      {
        "id": "NCS S 1010-G80Y",
        "hex": "#F3ECB6",
        "rgb": {
          "red": 243,
          "green": 236,
          "blue": 182,
        },
      },
      {
        "id": "NCS S 1015-G80Y",
        "hex": "#F2EEB0",
        "rgb": {
          "red": 242,
          "green": 238,
          "blue": 176,
        },
      },
      {
        "id": "NCS S 1020-G80Y",
        "hex": "#EEE9A0",
        "rgb": {
          "red": 238,
          "green": 233,
          "blue": 160,
        },
      },
      {
        "id": "NCS S 1030-G80Y",
        "hex": "#EBE27C",
        "rgb": {
          "red": 235,
          "green": 226,
          "blue": 124,
        },
      },
      {
        "id": "NCS S 1040-G80Y",
        "hex": "#EAE265",
        "rgb": {
          "red": 234,
          "green": 226,
          "blue": 101,
        },
      },
      {
        "id": "NCS S 1050-G80Y",
        "hex": "#E3DC4A",
        "rgb": {
          "red": 227,
          "green": 220,
          "blue": 74,
        },
      },
      {
        "id": "NCS S 1060-G80Y",
        "hex": "#E0D926",
        "rgb": {
          "red": 224,
          "green": 217,
          "blue": 38,
        },
      },
      {
        "id": "NCS S 1070-G80Y",
        "hex": "#DDD702",
        "rgb": {
          "red": 221,
          "green": 215,
          "blue": 2,
        },
      },
      {
        "id": "NCS S 1075-G80Y",
        "hex": "#D7D600",
        "rgb": {
          "red": 215,
          "green": 214,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 1505-G80Y",
        "hex": "#DFDDC7",
        "rgb": {
          "red": 223,
          "green": 221,
          "blue": 199,
        },
      },
      {
        "id": "NCS S 1510-G80Y",
        "hex": "#E1DFAD",
        "rgb": {
          "red": 225,
          "green": 223,
          "blue": 173,
        },
      },
      {
        "id": "NCS S 1515-G80Y",
        "hex": "#D9D79E",
        "rgb": {
          "red": 217,
          "green": 215,
          "blue": 158,
        },
      },
      {
        "id": "NCS S 2005-G80Y",
        "hex": "#C7C6AE",
        "rgb": {
          "red": 199,
          "green": 198,
          "blue": 174,
        },
      },
      {
        "id": "NCS S 2010-G80Y",
        "hex": "#C3C196",
        "rgb": {
          "red": 195,
          "green": 193,
          "blue": 150,
        },
      },
      {
        "id": "NCS S 2020-G80Y",
        "hex": "#C1BE7B",
        "rgb": {
          "red": 193,
          "green": 190,
          "blue": 123,
        },
      },
      {
        "id": "NCS S 2030-G80Y",
        "hex": "#BFB75F",
        "rgb": {
          "red": 191,
          "green": 183,
          "blue": 95,
        },
      },
      {
        "id": "NCS S 2040-G80Y",
        "hex": "#BBB44E",
        "rgb": {
          "red": 187,
          "green": 180,
          "blue": 78,
        },
      },
      {
        "id": "NCS S 2050-G80Y",
        "hex": "#AEA934",
        "rgb": {
          "red": 174,
          "green": 169,
          "blue": 52,
        },
      },
      {
        "id": "NCS S 2060-G80Y",
        "hex": "#ACA500",
        "rgb": {
          "red": 172,
          "green": 165,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 2070-G80Y",
        "hex": "#AEA700",
        "rgb": {
          "red": 174,
          "green": 167,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 3005-G80Y",
        "hex": "#A8A68C",
        "rgb": {
          "red": 168,
          "green": 166,
          "blue": 140,
        },
      },
      {
        "id": "NCS S 3010-G80Y",
        "hex": "#A2A17E",
        "rgb": {
          "red": 162,
          "green": 161,
          "blue": 126,
        },
      },
      {
        "id": "NCS S 3020-G80Y",
        "hex": "#A39F67",
        "rgb": {
          "red": 163,
          "green": 159,
          "blue": 103,
        },
      },
      {
        "id": "NCS S 3030-G80Y",
        "hex": "#9E984F",
        "rgb": {
          "red": 158,
          "green": 152,
          "blue": 79,
        },
      },
      {
        "id": "NCS S 3040-G80Y",
        "hex": "#A39B3D",
        "rgb": {
          "red": 163,
          "green": 155,
          "blue": 61,
        },
      },
      {
        "id": "NCS S 3050-G80Y",
        "hex": "#8C851B",
        "rgb": {
          "red": 140,
          "green": 133,
          "blue": 27,
        },
      },
      {
        "id": "NCS S 3060-G80Y",
        "hex": "#848000",
        "rgb": {
          "red": 132,
          "green": 128,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4005-G80Y",
        "hex": "#8B8A75",
        "rgb": {
          "red": 139,
          "green": 138,
          "blue": 117,
        },
      },
      {
        "id": "NCS S 4040-G80Y",
        "hex": "#7C7500",
        "rgb": {
          "red": 124,
          "green": 117,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 4050-G80Y",
        "hex": "#746D00",
        "rgb": {
          "red": 116,
          "green": 109,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 5005-G80Y",
        "hex": "#797866",
        "rgb": {
          "red": 121,
          "green": 120,
          "blue": 102,
        },
      },
      {
        "id": "NCS S 5040-G80Y",
        "hex": "#595500",
        "rgb": {
          "red": 89,
          "green": 85,
          "blue": 0,
        },
      },
      {
        "id": "NCS S 6005-G80Y",
        "hex": "#5C5B4C",
        "rgb": {
          "red": 92,
          "green": 91,
          "blue": 76,
        },
      },
      {
        "id": "NCS S 7005-G80Y",
        "hex": "#444437",
        "rgb": {
          "red": 68,
          "green": 68,
          "blue": 55,
        },
      },
      {
        "id": "NCS S 8005-G80Y",
        "hex": "#27271E",
        "rgb": {
          "red": 39,
          "green": 39,
          "blue": 30,
        },
      },
      {
        "id": "NCS S 8505-G80Y",
        "hex": "#1F1F18",
        "rgb": {
          "red": 31,
          "green": 31,
          "blue": 24,
        },
      },
      {
        "id": "NCS S 0505-G90Y",
        "hex": "#FFFCEA",
        "rgb": {
          "red": 255,
          "green": 252,
          "blue": 234,
        },
      },
      {
        "id": "NCS S 0510-G90Y",
        "hex": "#FFFAE1",
        "rgb": {
          "red": 255,
          "green": 250,
          "blue": 225,
        },
      },
      {
        "id": "NCS S 0515-G90Y",
        "hex": "#FFF9D6",
        "rgb": {
          "red": 255,
          "green": 249,
          "blue": 214,
        },
      },
      {
        "id": "NCS S 0520-G90Y",
        "hex": "#FFF6BE",
        "rgb": {
          "red": 255,
          "green": 246,
          "blue": 190,
        },
      },
    ],
    mobihel: [
      {
        "id": "276 Приз",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-276-priz-mobihel-1-0l-b60.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "277 Антилопа",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-277-antilopa-mobihel-1-0l-bc4.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "277L Антилопа Люкс",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-277l-antilopa-ljuks-mobihel-1-0l-c27.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "270 Нефертити",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-270-nefertiti-mobihel-1-0l-6e2.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "Антика",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-antika-mobihel-1-0l-7c6.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "H01 Летний Песок",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-h01-letnij-pesok-mobihel-1-0l-13c.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "239 Невада",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-239-nevada-mobihel-1-0l-9fa.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "257 Звездная Пыль",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-257-zvezdnaya-pyl-mobihel-1-0l-9f7.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "383 Ниагара",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-383-niagara-mobihel-1-0l-d96.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "620 Мускат",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-620-muskat-mobihel-1-0l-a59.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "Лас Вегас",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-las-vegas-mobihel-1-0l-5f2.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "92L Daewoo",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-92l-daewoo-mobihel-1-0l-a0f.jpg"),
        "tags": [
          "beige",
        ],
      },
      {
        "id": "240 Белое облако UNI",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-240-beloe-oblako-uni-mobihel-1-0l-b4e.jpg"),
        "tags": [
          "white",
        ],
      },
      {
        "id": "Айсберг Uni",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-ajsberg-uni-mobihel-1-0l-bdd.jpg"),
        "tags": [
          "white",
        ],
      },
      {
        "id": "221 Ледниковый Uni",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-221-lednikovyj-uni-mobihel-1-0l-847.jpg"),
        "tags": [
          "white",
        ],
      },
      {
        "id": "419 Опал",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-419-opal-mobihel-1-0l-2b1.jpg"),
        "tags": [
          "light-blue",
        ],
      },
      {
        "id": "473 Юпитер",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-473-jupiter-mobihel-1-0l-5f4.jpg"),
        "tags": [
          "light-blue",
        ],
      },
      {
        "id": "245 Золотая нива",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-245-zolotaya-niva-mobihel-1-0l-097.jpg"),
        "tags": [
          "yellow",
        ],
      },
      {
        "id": "310 Валюта",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-310-valjuta-mobihel-1-0l-351.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "Морано",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-morano-mobihel-1-0l-af5.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "311 Игуана",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-311-iguana-mobihel-1-0l-d74.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "963 Зеленая",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-963-zelenaya-mobihel-1-0l-98e.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "Посейдон",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-posejdon-mobihel-1-0l-fbd.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "345 Оливковая",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-345-olivkovaya-mobihel-1-0l-044.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "385 Изумруд",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-385-izumrud-mobihel-1-0l-29c.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "387 Папирус",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-387-papirus-mobihel-1-0l-c20.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "421 Афалина",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-421-afalina-mobihel-1-0l-4a1.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "Ангара",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-angara-mobihel-1-0l-9e5.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "03049 Зеленая",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-03049-zelenaya-mobihel-1-0l-98f.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "308 Осока",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-308-osoka-mobihel-1-0l-c34.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "391 Робин гуд",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-391-robin-gud-mobihel-1-0l-2ab.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "650 Совиньон",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-650-sovinon-mobihel-1-0l-327.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "301 Серебристая Ива",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-301-serebristaya-iva-mobihel-1-0l-0f0.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "6M1 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-6m1-toyota-mobihel-1-0l-d1b.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "Скат",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-skat-mobihel-1-0l-089.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "347 Золото инков",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-347-zoloto-inkov-mobihel-1-0l-048.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "328 Ницца",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-328-nicca-mobihel-1-0l-2f2.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "360 Сочи",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-360-sochi-mobihel-29f.jpg"),
        "tags": [
          "green",
          "silver",
        ],
      },
      {
        "id": "371 Амулет",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-371-amulet-mobihel-778.jpg"),
        "tags": [
          "green",
        ],
      },
      {
        "id": "399 Табак",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-399-tabak-mobihel-1-0l-0bc.jpg"),
        "tags": [
          "brown",
        ],
      },
      {
        "id": "670 Сандаловый",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-670-sandalovyj-mobihel-1-0l-dff.jpg"),
        "tags": [
          "brown",
        ],
      },
      {
        "id": "795 Пиран",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-795-piran-mobihel-1-0l-364.jpg"),
        "tags": [
          "brown",
        ],
      },
      {
        "id": "790 Кориандр",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-790-koriandr-mobihel-1-0l-570.jpg"),
        "tags": [
          "brown",
        ],
      },
      {
        "id": "246 Ангкор",
        "image": getImgUrl("assets/mobihel/default.jpg"),
        "tags": [
          "brown",
        ],
      },
      {
        "id": "217 Миндаль",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-217-mindal-mobihel-1-0l-177.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "70U Daewoo",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-70u-daewoo-mobihel-1-0l-ed1.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "74U Daewoo",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-74u-daewoo-mobihel-1-0l-da5.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "813594 Красный рубин",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-813594-krasnyj-rubin-mobihel-1-0l-2d3.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "R01 Малина",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-r01-malina-mobihel-1-0l-945.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "3K1 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-3k1-toyota-mobihel-1-0l-ddd.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "100 Триумф",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-100-triumf-mobihel-1-0l-da7.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "105 Франкония",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-105-frankoniya-mobihel-1-0l-8bb.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "125 Антарес",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-125-antares-mobihel-1-0l-d0d.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "128 Искра",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-128-iskra-mobihel-1-0l-343.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "129 Виктория",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-129-viktoriya-mobihel-1-0l-9e4.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "132 Вишня",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-132-vishnya-mobihel-1-0l-cd8.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "190 Калифорнийский мак",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-190-kalifornijskij-mak-mobihel-1-0l-7ee.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "192 Портвейн",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-192-portvejn-mobihel-1-0l-e36.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "191 Венера",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-191-venera-mobihel-1-0l-ffa.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "104 Калина",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-104-kalina-mobihel-1-0l-8ff.jpg"),
        "tags": [
          "red",
        ],
      },
      {
        "id": "286 Опатия",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-286-opatiya-mobihel-1-0l-67a.jpg"),
        "tags": [
          "orange",
        ],
      },
      {
        "id": "102 Абрикос",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-102-abrikos-mobihel-1-0l-cdc.jpg"),
        "tags": [
          "orange",
        ],
      },
      {
        "id": "119 Магма",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-119-magma-mobihel-1-0l-27b.jpg"),
        "tags": [
          "orange",
        ],
      },
      {
        "id": "626 Мокрый асфальт",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-626-mokryj-asfalt-mobihel-1-0l-8ea.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "415 Электрон",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-415-elektron-mobihel-1-0l-7b7.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "503 Аккорд",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-503-akkord-mobihel-1-0l-2df.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "513 Черный жемчуг",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-513-chernyj-zhemchug-mobihel-1-0l-753.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "451 Боровница",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-451-borovnica-mobihel-1-0l-ffa.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "242 Серый Базальт",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-242-seryj-bazalt-mobihel-1-0l-51d.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "483 Сириус",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-483-sirius-mobihel-1-0l-0d5.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "1E3 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-1e3-toyota-mobihel-1-0l-e0e.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "627 Жимолость",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-627-zhimolost-mobihel-1-0l-491.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "B66 Logan",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-b66-logan-mobihel-1-0l-ee4.jpg"),
        "tags": [
          "grey",
        ],
      },
      {
        "id": "630 Кварц",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-630-kvarc-mobihel-f23.jpg"),
        "tags": [
          "grey",
          "silver",
        ],
      },
      {
        "id": "363 Цунами",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-363-cunami-mobihel-1-0l-44b.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "460 Аквамарин",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-460-akvamarin-mobihel-1-0l-0cc.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "460L Аквамарин Люкс",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-460l-akvamarin-ljuks-mobihel-1-0l-868.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "498 Лазурно синяя",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-498-lazurno-sinyaya-mobihel-1-0l-3a4.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "446 Сапфир",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-446-sapfir-mobihel-1-0l-7f2.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "628 Нептун",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-628-neptun-mobihel-1-0l-bbe.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "487 Лагуна",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-487-laguna-mobihel-1-0l-d7f.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "189 Mercedes",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-189-mercedes-mobihel-1-0l-a08.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "199 Mercedes",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-199-mercedes-mobihel-1-0l-2d9.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "499 Ривьера",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-499-rivera-mobihel-1-0l-745.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "50343 Синяя",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-50343-sinyaya-mobihel-1-0l-964.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "412 Регата",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-412-regata-mobihel-1-0l-1b2.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "453 Капри",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-453-kapri-mobihel-1-0l-19e.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "61G Logan",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-61g-logan-mobihel-1-0l-0cf.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "742 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-742-toyota-mobihel-1-0l-d19.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "478 Слива",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-478-sliva-mobihel-1-0l-585.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "50411 Тайфун UNI",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-50411-tajfun-uni-mobihel-1-0l-7c0.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "426 Мускари",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-426-muskari-mobihel-1-0l-31e.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "482 Черника",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-482-chernika-mobihel-1-0l-109.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "97K Daewoo",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-97k-daewoo-mobihel-1-0l-12b.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "429 Персей",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-429-persej-mobihel-1-0l-9a7.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "682 Гранта",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-682-granta-mobihel-1-0l-9e3.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "434 Голубая Молния",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-434-golubaya-molniya-mobihel-1-0l-4ac.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "Наутилус",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-nautilus-mobihel-1-0l-54f.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "424 Дипломат",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-424-diplomat-mobihel-1-0l-037.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "448 Рапсодия",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-448-rapsodiya-mobihel-181.jpg"),
        "tags": [
          "blue",
        ],
      },
      {
        "id": "408 Чароит",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-408-charoit-mobihel-1-0l-7b0.jpg"),
        "tags": [
          "purple",
        ],
      },
      {
        "id": "416 Фея",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-416-feya-mobihel-1-0l-660.jpg"),
        "tags": [
          "purple",
        ],
      },
      {
        "id": "515 Изабелла",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-515-izabella-mobihel-1-0l-58b.jpg"),
        "tags": [
          "purple",
        ],
      },
      {
        "id": "145 Аметист",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-145-ametist-mobihel-1-0l-ddc.jpg"),
        "tags": [
          "purple",
        ],
      },
      {
        "id": "602 Авантюрин",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-602-avantjurin-mobihel-1-0l-ba2.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "303 BMW",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-303-bmw-mobihel-1-0l-f1d.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "LC9Z Audi",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-lc9z-audi-mobihel-1-0l-237.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "181 BMW",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-181-bmw-mobihel-1-0l-504.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "635 Черный шоколад",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-635-chernyj-shokolad-mobihel-1-0l-d47.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "651 Черный трюфель",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-651-chernyj-trjufel-mobihel-1-0l-d77.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "600 Черная Uni",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-600-chernaya-uni-mobihel-1-0l-802.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "606 Млечный Путь",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-606-mlechnyj-put-mobihel-c6c.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "665 Космос",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-665-kosmos-mobihel-cf0.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "D01 Черная",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-d01-chernaya-mobihel-1-0l-15f.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "TOYOTA 209 BLACK",
        "image": getImgUrl("assets/mobihel/default.jpg"),
        "tags": [
          "black",
        ],
      },
      {
        "id": "95U Daewoo",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-95u-daewoo-mobihel-1-0l-84d.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "Сильвер",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-silver-mobihel-1-0l-530.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "640 Серебряная",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-640-serebryanaya-mobihel-1-0l-aa2.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "70201 Серебряная",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-70201-serebryanaya-mobihel-1-0l-595.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "Буран",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-buran-mobihel-1-0l-083.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "Циклон",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-ciklon-mobihel-1-0l-574.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "1C8 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-1c8-toyota-mobihel-1-0l-d7d.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "199 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-199-toyota-mobihel-1-0l-b61.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "280 Мираж",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-280-mirazh-mobihel-1-0l-a89.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "KLO Nissan",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-klo-nissan-mobihel-1-0l-19a.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "1C0 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-1c0-toyota-mobihel-1-0l-5d8.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "1F7 Toyota",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-1f7-toyota-mobihel-1-0l-fb2_002.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "230 Жемчуг",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-230-zhemchug-mobihel-1-0l-e72.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "281 Кристал",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-281-kristal-mobihel-1-0l-150.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "495 Лунный свет",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-495-lunnyj-svet-mobihel-1-0l-d9d.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "610 Рислинг",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-610-risling-mobihel-1-0l-807.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "632 Logan",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-632-logan-mobihel-1-0l-da9.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "80201 Серебряная",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-80201-serebryanaya-mobihel-1-0l-795.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "877052 Сильвер Серебристая",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-877052-silver-serebristaya-mobihel-1-0l-6e.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "92U Daewoo",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-92u-daewoo-mobihel-1-0l-b4e.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "A19 Mitsubishi",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-a19-mitsubishi-mobihel-1-0l-447.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "H81 Mitsubishi",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-h81-mitsubishi-mobihel-1-0l-2ec.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "LB7Z Audi",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-lb7z-audi-mobihel-1-0l-3d7.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "660 Альтаир",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-660-altair-mobihel-1-0l-617.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "691 Платина",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-691-platina-mobihel-1-0l-fab.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "871167 Паннакота",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-871167-pannakota-mobihel-1-0l-1f6.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "LY7P Audi",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-ly7p-audi-mobihel-1-0l-ffc.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "Омега",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-omega-mobihel-1-0l-c07.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "062 Toyota 1слой",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-062-toyota-1sloj-mobihel-1-0l-7cb.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "062 Toyota 2слой",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-062-toyota-2sloj-mobihel-1-0l-b16.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "206 Талая вода",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-206-talaya-voda-mobihel-1-0l-4eb.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "630 Кварц",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-630-kvarc-mobihel-f23.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "690 Снежная Королева",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-690-snezhnaya-koroleva-mobihel-eea.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "360 Сочи",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-360-sochi-mobihel-29f.jpg"),
        "tags": [
          "silver",
        ],
      },
      {
        "id": "744 Mercedes",
        "image": getImgUrl("assets/mobihel/avtoemal-metallik-744-mercedes-mobihel-85a.jpg"),
        "tags": [
          "silver",
        ],
      },
    ],
  },
}
