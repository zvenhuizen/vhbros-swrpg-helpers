const netResults = {
    0: [22,0,0],
    1: [21,1,0],
    2: [20,2,0],
    3: [19,3,0],
    4: [18,4,0],
    5: [17,5,0],
    6: [16,6,0],
    7: [15,7,0],
    8: [14,8,0],
    9: [13,9,0],
    10: [12,10,0],
    11: [11,11,0],
    12: [10,12,0],
    13: [9,13,0],
    14: [8,14,0],
    15: [7,15,0],
    16: [6,16,0],
    17: [5,17,0],
    18: [4,18,0],
    19: [3,19,0],
    20: [2,20,0],
    21: [1,21,0],
    22: [0,22,0],
    23: [21,0,0],
    24: [20,1,0],
    25: [19,2,0],
    26: [18,3,0],
    27: [17,4,0],
    28: [16,5,0],
    29: [15,6,0],
    30: [14,7,0],
    31: [13,8,0],
    32: [12,9,0],
    33: [11,10,0],
    34: [10,11,0],
    35: [9,12,0],
    36: [8,13,0],
    37: [7,14,0],
    38: [6,15,0],
    39: [5,16,0],
    40: [4,17,0],
    41: [3,18,0],
    42: [2,19,0],
    43: [1,20,0],
    44: [0,21,0],
    45: [20,0,0],
    46: [19,1,0],
    47: [18,2,0],
    48: [17,3,0],
    49: [16,4,0],
    50: [15,5,0],
    51: [14,6,0],
    52: [13,7,0],
    53: [12,8,0],
    54: [11,9,0],
    55: [10,10,0],
    56: [9,11,0],
    57: [8,12,0],
    58: [7,13,0],
    59: [6,14,0],
    60: [5,15,0],
    61: [4,16,0],
    62: [3,17,0],
    63: [2,18,0],
    64: [1,19,0],
    65: [0,20,0],
    66: [19,0,0],
    67: [18,1,0],
    68: [17,2,0],
    69: [16,3,0],
    70: [15,4,0],
    71: [14,5,0],
    72: [13,6,0],
    73: [12,7,0],
    74: [11,8,0],
    75: [10,9,0],
    76: [9,10,0],
    77: [8,11,0],
    78: [7,12,0],
    79: [6,13,0],
    80: [5,14,0],
    81: [4,15,0],
    82: [3,16,0],
    83: [2,17,0],
    84: [1,18,0],
    85: [0,19,0],
    86: [18,0,0],
    87: [17,1,0],
    88: [16,2,0],
    89: [15,3,0],
    90: [14,4,0],
    91: [13,5,0],
    92: [12,6,0],
    93: [11,7,0],
    94: [10,8,0],
    95: [9,9,0],
    96: [8,10,0],
    97: [7,11,0],
    98: [6,12,0],
    99: [5,13,0],
    100: [4,14,0],
    101: [3,15,0],
    102: [2,16,0],
    103: [1,17,0],
    104: [0,18,0],
    105: [17,0,0],
    106: [16,1,0],
    107: [15,2,0],
    108: [14,3,0],
    109: [13,4,0],
    110: [12,5,0],
    111: [11,6,0],
    112: [10,7,0],
    113: [9,8,0],
    114: [8,9,0],
    115: [7,10,0],
    116: [6,11,0],
    117: [5,12,0],
    118: [4,13,0],
    119: [3,14,0],
    120: [2,15,0],
    121: [1,16,0],
    122: [0,17,0],
    123: [16,0,0],
    124: [15,1,0],
    125: [14,2,0],
    126: [13,3,0],
    127: [12,4,0],
    128: [11,5,0],
    129: [10,6,0],
    130: [9,7,0],
    131: [8,8,0],
    132: [7,9,0],
    133: [6,10,0],
    134: [5,11,0],
    135: [4,12,0],
    136: [3,13,0],
    137: [2,14,0],
    138: [1,15,0],
    139: [0,16,0],
    140: [15,0,0],
    141: [14,1,0],
    142: [13,2,0],
    143: [12,3,0],
    144: [11,4,0],
    145: [10,5,0],
    146: [9,6,0],
    147: [8,7,0],
    148: [7,8,0],
    149: [6,9,0],
    150: [5,10,0],
    151: [4,11,0],
    152: [3,12,0],
    153: [2,13,0],
    154: [1,14,0],
    155: [0,15,0],
    156: [14,0,0],
    157: [13,1,0],
    158: [12,2,0],
    159: [11,3,0],
    160: [10,4,0],
    161: [9,5,0],
    162: [8,6,0],
    163: [7,7,0],
    164: [6,8,0],
    165: [5,9,0],
    166: [4,10,0],
    167: [3,11,0],
    168: [2,12,0],
    169: [1,13,0],
    170: [0,14,0],
    171: [13,0,0],
    172: [12,1,0],
    173: [11,2,0],
    174: [10,3,0],
    175: [9,4,0],
    176: [8,5,0],
    177: [7,6,0],
    178: [6,7,0],
    179: [5,8,0],
    180: [4,9,0],
    181: [3,10,0],
    182: [2,11,0],
    183: [1,12,0],
    184: [0,13,0],
    185: [12,0,0],
    186: [11,1,0],
    187: [10,2,0],
    188: [9,3,0],
    189: [8,4,0],
    190: [7,5,0],
    191: [6,6,0],
    192: [5,7,0],
    193: [4,8,0],
    194: [3,9,0],
    195: [2,10,0],
    196: [1,11,0],
    197: [0,12,0],
    198: [11,0,0],
    199: [10,1,0],
    200: [9,2,0],
    201: [8,3,0],
    202: [7,4,0],
    203: [6,5,0],
    204: [5,6,0],
    205: [4,7,0],
    206: [3,8,0],
    207: [2,9,0],
    208: [1,10,0],
    209: [0,11,0],
    210: [10,0,0],
    211: [9,1,0],
    212: [8,2,0],
    213: [7,3,0],
    214: [6,4,0],
    215: [5,5,0],
    216: [4,6,0],
    217: [3,7,0],
    218: [2,8,0],
    219: [1,9,0],
    220: [0,10,0],
    221: [9,0,0],
    222: [8,1,0],
    223: [7,2,0],
    224: [6,3,0],
    225: [5,4,0],
    226: [4,5,0],
    227: [3,6,0],
    228: [2,7,0],
    229: [1,8,0],
    230: [0,9,0],
    231: [8,0,0],
    232: [7,1,0],
    233: [6,2,0],
    234: [5,3,0],
    235: [4,4,0],
    236: [3,5,0],
    237: [2,6,0],
    238: [1,7,0],
    239: [0,8,0],
    240: [7,0,0],
    241: [6,1,0],
    242: [5,2,0],
    243: [4,3,0],
    244: [3,4,0],
    245: [2,5,0],
    246: [1,6,0],
    247: [0,7,0],
    248: [6,0,0],
    249: [5,1,0],
    250: [4,2,0],
    251: [3,3,0],
    252: [2,4,0],
    253: [1,5,0],
    254: [0,6,0],
    255: [5,0,0],
    256: [4,1,0],
    257: [3,2,0],
    258: [2,3,0],
    259: [1,4,0],
    260: [0,5,0],
    261: [4,0,0],
    262: [3,1,0],
    263: [2,2,0],
    264: [1,3,0],
    265: [0,4,0],
    266: [3,0,0],
    267: [2,1,0],
    268: [1,2,0],
    269: [0,3,0],
    270: [2,0,0],
    271: [1,1,0],
    272: [0,2,0],
    273: [1,0,0],
    274: [0,1,0],
    275: [0,0,0],
    276: [21,0,1],
    277: [20,1,1],
    278: [19,2,1],
    279: [18,3,1],
    280: [17,4,1],
    281: [16,5,1],
    282: [15,6,1],
    283: [14,7,1],
    284: [13,8,1],
    285: [12,9,1],
    286: [11,10,1],
    287: [10,11,1],
    288: [9,12,1],
    289: [8,13,1],
    290: [7,14,1],
    291: [6,15,1],
    292: [5,16,1],
    293: [4,17,1],
    294: [3,18,1],
    295: [2,19,1],
    296: [1,20,1],
    297: [20,0,1],
    298: [19,1,1],
    299: [18,2,1],
    300: [17,3,1],
    301: [16,4,1],
    302: [15,5,1],
    303: [14,6,1],
    304: [13,7,1],
    305: [12,8,1],
    306: [11,9,1],
    307: [10,10,1],
    308: [9,11,1],
    309: [8,12,1],
    310: [7,13,1],
    311: [6,14,1],
    312: [5,15,1],
    313: [4,16,1],
    314: [3,17,1],
    315: [2,18,1],
    316: [1,19,1],
    317: [19,0,1],
    318: [18,1,1],
    319: [17,2,1],
    320: [16,3,1],
    321: [15,4,1],
    322: [14,5,1],
    323: [13,6,1],
    324: [12,7,1],
    325: [11,8,1],
    326: [10,9,1],
    327: [9,10,1],
    328: [8,11,1],
    329: [7,12,1],
    330: [6,13,1],
    331: [5,14,1],
    332: [4,15,1],
    333: [3,16,1],
    334: [2,17,1],
    335: [1,18,1],
    336: [18,0,1],
    337: [17,1,1],
    338: [16,2,1],
    339: [15,3,1],
    340: [14,4,1],
    341: [13,5,1],
    342: [12,6,1],
    343: [11,7,1],
    344: [10,8,1],
    345: [9,9,1],
    346: [8,10,1],
    347: [7,11,1],
    348: [6,12,1],
    349: [5,13,1],
    350: [4,14,1],
    351: [3,15,1],
    352: [2,16,1],
    353: [1,17,1],
    354: [17,0,1],
    355: [16,1,1],
    356: [15,2,1],
    357: [14,3,1],
    358: [13,4,1],
    359: [12,5,1],
    360: [11,6,1],
    361: [10,7,1],
    362: [9,8,1],
    363: [8,9,1],
    364: [7,10,1],
    365: [6,11,1],
    366: [5,12,1],
    367: [4,13,1],
    368: [3,14,1],
    369: [2,15,1],
    370: [1,16,1],
    371: [16,0,1],
    372: [15,1,1],
    373: [14,2,1],
    374: [13,3,1],
    375: [12,4,1],
    376: [11,5,1],
    377: [10,6,1],
    378: [9,7,1],
    379: [8,8,1],
    380: [7,9,1],
    381: [6,10,1],
    382: [5,11,1],
    383: [4,12,1],
    384: [3,13,1],
    385: [2,14,1],
    386: [1,15,1],
    387: [15,0,1],
    388: [14,1,1],
    389: [13,2,1],
    390: [12,3,1],
    391: [11,4,1],
    392: [10,5,1],
    393: [9,6,1],
    394: [8,7,1],
    395: [7,8,1],
    396: [6,9,1],
    397: [5,10,1],
    398: [4,11,1],
    399: [3,12,1],
    400: [2,13,1],
    401: [1,14,1],
    402: [14,0,1],
    403: [13,1,1],
    404: [12,2,1],
    405: [11,3,1],
    406: [10,4,1],
    407: [9,5,1],
    408: [8,6,1],
    409: [7,7,1],
    410: [6,8,1],
    411: [5,9,1],
    412: [4,10,1],
    413: [3,11,1],
    414: [2,12,1],
    415: [1,13,1],
    416: [13,0,1],
    417: [12,1,1],
    418: [11,2,1],
    419: [10,3,1],
    420: [9,4,1],
    421: [8,5,1],
    422: [7,6,1],
    423: [6,7,1],
    424: [5,8,1],
    425: [4,9,1],
    426: [3,10,1],
    427: [2,11,1],
    428: [1,12,1],
    429: [12,0,1],
    430: [11,1,1],
    431: [10,2,1],
    432: [9,3,1],
    433: [8,4,1],
    434: [7,5,1],
    435: [6,6,1],
    436: [5,7,1],
    437: [4,8,1],
    438: [3,9,1],
    439: [2,10,1],
    440: [1,11,1],
    441: [11,0,1],
    442: [10,1,1],
    443: [9,2,1],
    444: [8,3,1],
    445: [7,4,1],
    446: [6,5,1],
    447: [5,6,1],
    448: [4,7,1],
    449: [3,8,1],
    450: [2,9,1],
    451: [1,10,1],
    452: [10,0,1],
    453: [9,1,1],
    454: [8,2,1],
    455: [7,3,1],
    456: [6,4,1],
    457: [5,5,1],
    458: [4,6,1],
    459: [3,7,1],
    460: [2,8,1],
    461: [1,9,1],
    462: [9,0,1],
    463: [8,1,1],
    464: [7,2,1],
    465: [6,3,1],
    466: [5,4,1],
    467: [4,5,1],
    468: [3,6,1],
    469: [2,7,1],
    470: [1,8,1],
    471: [8,0,1],
    472: [7,1,1],
    473: [6,2,1],
    474: [5,3,1],
    475: [4,4,1],
    476: [3,5,1],
    477: [2,6,1],
    478: [1,7,1],
    479: [7,0,1],
    480: [6,1,1],
    481: [5,2,1],
    482: [4,3,1],
    483: [3,4,1],
    484: [2,5,1],
    485: [1,6,1],
    486: [6,0,1],
    487: [5,1,1],
    488: [4,2,1],
    489: [3,3,1],
    490: [2,4,1],
    491: [1,5,1],
    492: [5,0,1],
    493: [4,1,1],
    494: [3,2,1],
    495: [2,3,1],
    496: [1,4,1],
    497: [4,0,1],
    498: [3,1,1],
    499: [2,2,1],
    500: [1,3,1],
    501: [3,0,1],
    502: [2,1,1],
    503: [1,2,1],
    504: [2,0,1],
    505: [1,1,1],
    506: [1,0,1],
    507: [20,0,2],
    508: [19,1,2],
    509: [18,2,2],
    510: [17,3,2],
    511: [16,4,2],
    512: [15,5,2],
    513: [14,6,2],
    514: [13,7,2],
    515: [12,8,2],
    516: [11,9,2],
    517: [10,10,2],
    518: [9,11,2],
    519: [8,12,2],
    520: [7,13,2],
    521: [6,14,2],
    522: [5,15,2],
    523: [4,16,2],
    524: [3,17,2],
    525: [2,18,2],
    526: [19,0,2],
    527: [18,1,2],
    528: [17,2,2],
    529: [16,3,2],
    530: [15,4,2],
    531: [14,5,2],
    532: [13,6,2],
    533: [12,7,2],
    534: [11,8,2],
    535: [10,9,2],
    536: [9,10,2],
    537: [8,11,2],
    538: [7,12,2],
    539: [6,13,2],
    540: [5,14,2],
    541: [4,15,2],
    542: [3,16,2],
    543: [2,17,2],
    544: [18,0,2],
    545: [17,1,2],
    546: [16,2,2],
    547: [15,3,2],
    548: [14,4,2],
    549: [13,5,2],
    550: [12,6,2],
    551: [11,7,2],
    552: [10,8,2],
    553: [9,9,2],
    554: [8,10,2],
    555: [7,11,2],
    556: [6,12,2],
    557: [5,13,2],
    558: [4,14,2],
    559: [3,15,2],
    560: [2,16,2],
    561: [17,0,2],
    562: [16,1,2],
    563: [15,2,2],
    564: [14,3,2],
    565: [13,4,2],
    566: [12,5,2],
    567: [11,6,2],
    568: [10,7,2],
    569: [9,8,2],
    570: [8,9,2],
    571: [7,10,2],
    572: [6,11,2],
    573: [5,12,2],
    574: [4,13,2],
    575: [3,14,2],
    576: [2,15,2],
    577: [16,0,2],
    578: [15,1,2],
    579: [14,2,2],
    580: [13,3,2],
    581: [12,4,2],
    582: [11,5,2],
    583: [10,6,2],
    584: [9,7,2],
    585: [8,8,2],
    586: [7,9,2],
    587: [6,10,2],
    588: [5,11,2],
    589: [4,12,2],
    590: [3,13,2],
    591: [2,14,2],
    592: [15,0,2],
    593: [14,1,2],
    594: [13,2,2],
    595: [12,3,2],
    596: [11,4,2],
    597: [10,5,2],
    598: [9,6,2],
    599: [8,7,2],
    600: [7,8,2],
    601: [6,9,2],
    602: [5,10,2],
    603: [4,11,2],
    604: [3,12,2],
    605: [2,13,2],
    606: [14,0,2],
    607: [13,1,2],
    608: [12,2,2],
    609: [11,3,2],
    610: [10,4,2],
    611: [9,5,2],
    612: [8,6,2],
    613: [7,7,2],
    614: [6,8,2],
    615: [5,9,2],
    616: [4,10,2],
    617: [3,11,2],
    618: [2,12,2],
    619: [13,0,2],
    620: [12,1,2],
    621: [11,2,2],
    622: [10,3,2],
    623: [9,4,2],
    624: [8,5,2],
    625: [7,6,2],
    626: [6,7,2],
    627: [5,8,2],
    628: [4,9,2],
    629: [3,10,2],
    630: [2,11,2],
    631: [12,0,2],
    632: [11,1,2],
    633: [10,2,2],
    634: [9,3,2],
    635: [8,4,2],
    636: [7,5,2],
    637: [6,6,2],
    638: [5,7,2],
    639: [4,8,2],
    640: [3,9,2],
    641: [2,10,2],
    642: [11,0,2],
    643: [10,1,2],
    644: [9,2,2],
    645: [8,3,2],
    646: [7,4,2],
    647: [6,5,2],
    648: [5,6,2],
    649: [4,7,2],
    650: [3,8,2],
    651: [2,9,2],
    652: [10,0,2],
    653: [9,1,2],
    654: [8,2,2],
    655: [7,3,2],
    656: [6,4,2],
    657: [5,5,2],
    658: [4,6,2],
    659: [3,7,2],
    660: [2,8,2],
    661: [9,0,2],
    662: [8,1,2],
    663: [7,2,2],
    664: [6,3,2],
    665: [5,4,2],
    666: [4,5,2],
    667: [3,6,2],
    668: [2,7,2],
    669: [8,0,2],
    670: [7,1,2],
    671: [6,2,2],
    672: [5,3,2],
    673: [4,4,2],
    674: [3,5,2],
    675: [2,6,2],
    676: [7,0,2],
    677: [6,1,2],
    678: [5,2,2],
    679: [4,3,2],
    680: [3,4,2],
    681: [2,5,2],
    682: [6,0,2],
    683: [5,1,2],
    684: [4,2,2],
    685: [3,3,2],
    686: [2,4,2],
    687: [5,0,2],
    688: [4,1,2],
    689: [3,2,2],
    690: [2,3,2],
    691: [4,0,2],
    692: [3,1,2],
    693: [2,2,2],
    694: [3,0,2],
    695: [2,1,2],
    696: [2,0,2],
    697: [19,0,3],
    698: [18,1,3],
    699: [17,2,3],
    700: [16,3,3],
    701: [15,4,3],
    702: [14,5,3],
    703: [13,6,3],
    704: [12,7,3],
    705: [11,8,3],
    706: [10,9,3],
    707: [9,10,3],
    708: [8,11,3],
    709: [7,12,3],
    710: [6,13,3],
    711: [5,14,3],
    712: [4,15,3],
    713: [3,16,3],
    714: [18,0,3],
    715: [17,1,3],
    716: [16,2,3],
    717: [15,3,3],
    718: [14,4,3],
    719: [13,5,3],
    720: [12,6,3],
    721: [11,7,3],
    722: [10,8,3],
    723: [9,9,3],
    724: [8,10,3],
    725: [7,11,3],
    726: [6,12,3],
    727: [5,13,3],
    728: [4,14,3],
    729: [3,15,3],
    730: [17,0,3],
    731: [16,1,3],
    732: [15,2,3],
    733: [14,3,3],
    734: [13,4,3],
    735: [12,5,3],
    736: [11,6,3],
    737: [10,7,3],
    738: [9,8,3],
    739: [8,9,3],
    740: [7,10,3],
    741: [6,11,3],
    742: [5,12,3],
    743: [4,13,3],
    744: [3,14,3],
    745: [16,0,3],
    746: [15,1,3],
    747: [14,2,3],
    748: [13,3,3],
    749: [12,4,3],
    750: [11,5,3],
    751: [10,6,3],
    752: [9,7,3],
    753: [8,8,3],
    754: [7,9,3],
    755: [6,10,3],
    756: [5,11,3],
    757: [4,12,3],
    758: [3,13,3],
    759: [15,0,3],
    760: [14,1,3],
    761: [13,2,3],
    762: [12,3,3],
    763: [11,4,3],
    764: [10,5,3],
    765: [9,6,3],
    766: [8,7,3],
    767: [7,8,3],
    768: [6,9,3],
    769: [5,10,3],
    770: [4,11,3],
    771: [3,12,3],
    772: [14,0,3],
    773: [13,1,3],
    774: [12,2,3],
    775: [11,3,3],
    776: [10,4,3],
    777: [9,5,3],
    778: [8,6,3],
    779: [7,7,3],
    780: [6,8,3],
    781: [5,9,3],
    782: [4,10,3],
    783: [3,11,3],
    784: [13,0,3],
    785: [12,1,3],
    786: [11,2,3],
    787: [10,3,3],
    788: [9,4,3],
    789: [8,5,3],
    790: [7,6,3],
    791: [6,7,3],
    792: [5,8,3],
    793: [4,9,3],
    794: [3,10,3],
    795: [12,0,3],
    796: [11,1,3],
    797: [10,2,3],
    798: [9,3,3],
    799: [8,4,3],
    800: [7,5,3],
    801: [6,6,3],
    802: [5,7,3],
    803: [4,8,3],
    804: [3,9,3],
    805: [11,0,3],
    806: [10,1,3],
    807: [9,2,3],
    808: [8,3,3],
    809: [7,4,3],
    810: [6,5,3],
    811: [5,6,3],
    812: [4,7,3],
    813: [3,8,3],
    814: [10,0,3],
    815: [9,1,3],
    816: [8,2,3],
    817: [7,3,3],
    818: [6,4,3],
    819: [5,5,3],
    820: [4,6,3],
    821: [3,7,3],
    822: [9,0,3],
    823: [8,1,3],
    824: [7,2,3],
    825: [6,3,3],
    826: [5,4,3],
    827: [4,5,3],
    828: [3,6,3],
    829: [8,0,3],
    830: [7,1,3],
    831: [6,2,3],
    832: [5,3,3],
    833: [4,4,3],
    834: [3,5,3],
    835: [7,0,3],
    836: [6,1,3],
    837: [5,2,3],
    838: [4,3,3],
    839: [3,4,3],
    840: [6,0,3],
    841: [5,1,3],
    842: [4,2,3],
    843: [3,3,3],
    844: [5,0,3],
    845: [4,1,3],
    846: [3,2,3],
    847: [4,0,3],
    848: [3,1,3],
    849: [3,0,3],
    850: [18,0,4],
    851: [17,1,4],
    852: [16,2,4],
    853: [15,3,4],
    854: [14,4,4],
    855: [13,5,4],
    856: [12,6,4],
    857: [11,7,4],
    858: [10,8,4],
    859: [9,9,4],
    860: [8,10,4],
    861: [7,11,4],
    862: [6,12,4],
    863: [5,13,4],
    864: [4,14,4],
    865: [17,0,4],
    866: [16,1,4],
    867: [15,2,4],
    868: [14,3,4],
    869: [13,4,4],
    870: [12,5,4],
    871: [11,6,4],
    872: [10,7,4],
    873: [9,8,4],
    874: [8,9,4],
    875: [7,10,4],
    876: [6,11,4],
    877: [5,12,4],
    878: [4,13,4],
    879: [16,0,4],
    880: [15,1,4],
    881: [14,2,4],
    882: [13,3,4],
    883: [12,4,4],
    884: [11,5,4],
    885: [10,6,4],
    886: [9,7,4],
    887: [8,8,4],
    888: [7,9,4],
    889: [6,10,4],
    890: [5,11,4],
    891: [4,12,4],
    892: [15,0,4],
    893: [14,1,4],
    894: [13,2,4],
    895: [12,3,4],
    896: [11,4,4],
    897: [10,5,4],
    898: [9,6,4],
    899: [8,7,4],
    900: [7,8,4],
    901: [6,9,4],
    902: [5,10,4],
    903: [4,11,4],
    904: [14,0,4],
    905: [13,1,4],
    906: [12,2,4],
    907: [11,3,4],
    908: [10,4,4],
    909: [9,5,4],
    910: [8,6,4],
    911: [7,7,4],
    912: [6,8,4],
    913: [5,9,4],
    914: [4,10,4],
    915: [13,0,4],
    916: [12,1,4],
    917: [11,2,4],
    918: [10,3,4],
    919: [9,4,4],
    920: [8,5,4],
    921: [7,6,4],
    922: [6,7,4],
    923: [5,8,4],
    924: [4,9,4],
    925: [12,0,4],
    926: [11,1,4],
    927: [10,2,4],
    928: [9,3,4],
    929: [8,4,4],
    930: [7,5,4],
    931: [6,6,4],
    932: [5,7,4],
    933: [4,8,4],
    934: [11,0,4],
    935: [10,1,4],
    936: [9,2,4],
    937: [8,3,4],
    938: [7,4,4],
    939: [6,5,4],
    940: [5,6,4],
    941: [4,7,4],
    942: [10,0,4],
    943: [9,1,4],
    944: [8,2,4],
    945: [7,3,4],
    946: [6,4,4],
    947: [5,5,4],
    948: [4,6,4],
    949: [9,0,4],
    950: [8,1,4],
    951: [7,2,4],
    952: [6,3,4],
    953: [5,4,4],
    954: [4,5,4],
    955: [8,0,4],
    956: [7,1,4],
    957: [6,2,4],
    958: [5,3,4],
    959: [4,4,4],
    960: [7,0,4],
    961: [6,1,4],
    962: [5,2,4],
    963: [4,3,4],
    964: [6,0,4],
    965: [5,1,4],
    966: [4,2,4],
    967: [5,0,4],
    968: [4,1,4],
    969: [4,0,4]
}

exports.netResults = netResults