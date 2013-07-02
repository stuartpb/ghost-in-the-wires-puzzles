var puzzles = [
null, // make the indices line up

// 1 Rough Start
"Yjcv ku vjg pcog qh vjg uauvgo wugf da jco qrgtcvqtu\
 vq ocmg htgg rjqpg ecnnu?",

// 2 Just Visiting
"Wbth lal voe htat oy voe wxbirtn vfzbqt wagye C poh aeovsn vojgav?",

// 3 Original Sin
"Nyrk grjjnfiu uzu Z xzmv kf jvk lg re rttflek fe Kyv Rib?",

// 4 Escape Artist
'Flle ujw esc wexp mo xsp kjr hsm hiwwcm, "Wplpll\
 stq lec qma e wzerg mzkk!"?',

// 5 All Your Phone Lines Belong To Me
"Bmfy ytbs ini N mnij tzy ns zsynq ymj Ozajsnqj Htzwy\
 qtxy ozwnxinhynts tajw rj?",

// 6 Will Hack For Love
"Kyoo olxi rzr Niyovo Cohjpcx ojy dn T apopsy?",

// 7 Hitched in Haste
"Kvoh wg hvs boas ct hvs Doqwtwq Pszz sadzcmss kvc fsor hvs wbhsfboz\
 asac opcih am voqywbu oqhwjwhwsg cjsf hvs voa forwc?" ,

// 8 Lex Luthor
"Iwh xwqv wpvpj fwr Vfvyj qks wf nzc ncgsoo\
 esg psd gwc ntoqujvr ejs rypz nzfs?",

// 9 The Kevin Mitnick Discount Plan
"Hsle td esp epcx qzc dzqehlcp mfcypo zy esp\
 nsta esle Yzglepw dpye xp?",

// 10 Mystery Hacker
"Bprf cup esanqneu xmm gtknv amme U biiwy krxheu Iwqt Taied?",

// 11 Foul Play
"Lwpi idlc sxs bn upiwtg axkt xc lwtc X bdkts xc lxiw wxb?",

// 12 You Can Never Hide
"Yhlt xak tzg iytfrfad RanBfld squtpm uhst uquwd ce mswf tz wjrwtsr a\
 wioe lhsv Ecid mwnlkoyee bmt oquwdo't ledn mp acomt?",

// 13 The Wiretapper
"Zkdw lv wkh qdph ri wkh SL ilup wkdw zdv zluhwdsshg eb Sdflilf Ehoo?",

// 14 You Tap Me, I Tap You
"Plpki ytw eai rtc aaspx M llogw qj wef ms rh xq?",

// 15 "How the Fuck Did You Get That?"
"Ituot oaybmzk ymwqe ftq pqhuoq ftmf Xqiue geqp fa\
 buow gb mzk dmpua eusmxe zqmd Qduo?",

// 16 Crashing Eric's Private Party
"Kwth qzrva rbq lcq rxw Svtg vxcz zm vzs lbfieerl\
 nsem rmh dg ac oef'l cwamu?",

// 17 Pulling Back the Curtain
"Epib qa bpm vium wn bpm ixizbumvb kwuxtmf\
 epmzm Q bziksml lwev Mzqk Pmqvh?",

// 18 Traffic Analysis
"Khkp wg wve kyfcqmm yb hvh TBS oeidr trwh Yhb\
 MmCiwus Wko ogvwgxar hr?",

// 19 Revelations
"Rcvo dn ivhz ja ocz omvinvxodji oj adiy v kzmnji'n njxdvg nzxpmdot\
 iphwzm pndib oczdm ivhz viy yvoz ja wdmoc?",

// 20 Reverse Sting
'Wspa wdw gae ypte rj gae dilan lbnsp loeui V tndllrhh gae\
 awvnh "HZO, hzl jaq M uxla nvu?"',

// 21 Cat and Mouse
"4A 75 6E 67 20 6A 6E 66 20 62 68 65 20 61 76 70 78 61 6E 7A 72 20 74\
 76 69 72 61 20 67 62 20 47 72 65 65 6C 20 55 6E 65 71 6C 3F",

// 22 Detective Work
"Gsig cof dsm fkqeoe vnss jo farj tbb epr Csyvd\
 Nnxub mzlr ut grp lne?",

// 23 Raided
"Fqjc nunlcaxwrl mnerln mrm cqn OKR rwcnwcrxwjuuh\
 kanjt fqnw cqnh bnjalqnm vh jyjacvnwc rw Ljujkjbjb?",

// 24 Vanishing Act
"Xvof jg qis bmns lg hvq thlss ktffb J cifsok EAJ uojbthwsbhlsg?",

// 25 Harry Houdini
"Cngz zuct ngy znk grsg sgzkx lux znk xkgr Kxoi Ckoyy?",

// 26 Private Investigator
"Aslx jst nyk rlxi bx ns wgzzcmgw UP jnsh hlrjf nyk TT\
 seq s cojorpdw pssx gxmyeie ao bzy glc?",

// 27 Here Comes the Sun
"85 102 121 114 32 103 113 32 114 102 99 32 108 121 107 99 32 109 100 32\
 114 102 99 32 122 109 105 113 114 109 112 99 32 71 32 100 112 99 111\
 115 99 108 114 99 98 32 103 108 32 66 99 108 116 99 112 63",

// 28 Trophy Hunter
"Phtm zvvvkci sw mhx Fmtvr VOX Ycmrt Emki\
 vqimgv vowx hzh L cgf Ecbst ysi?",

// 29 Departure
"126 147 172 163 040 166 172 162 040 154 170 040 157 172 162 162 166\
 156 161 143 040 145 156 161 040 163 147 144 040 115 156 165 144 153 153\
 040 163 144 161 154 150 155 172 153 040 162 144 161 165 144 161 040\
 150 155 040 122 172 155 040 111 156 162 144 077",

// 30 Blindsided
"Ouop lqeg gs zkds ulv V deds zq lus DS urqstsn't wwiaps?",

// 31 Eyes in the Sky
"Alex B25 rixasvo hmh M ywi xs gsrrigx xs xli HQZ qemrjveqi?",

// 32 Sleepless in Seattle
"Caem alw Ymek Xptq'd tnwlchvw xz lrv lkkzxv?",

// 33 Hacking the Samurai
"Ozg ojglw lzw hshwj gf AH Khggxafy lzsl BKR skcwv ew stgml?",

// 34 Hiding in the Bible Belt
"Nvbx nte hyv bqgs pj gaabv jmjmwdi whd hyv UVT'g\
 Giuxdoc Gctcwd Hvyqbuvz hycoij?",

// 35 Game Over
"2B 2T W 2X 2Z 36 36 2P 36 2V 3C W 3A 32 39 38 2Z W 3D 33 31 38\
 2V 36 3D W 2R 2Z 3C 2Z W 3E 3C 2V 2X 2Z 2Y W 3E 39 W 2R 32 2V\
 3E W 2V 3A 2V 3C 3E 37 2Z 38 3E W 2X 39 37 3A 36 2Z 2S 1R",

// 36 An FBI Valentine
"Lsar JSA cryoi ergiu lq wipz tnrs dq dccfunaqi zf oj\
 uqpctkiel dpzpgp I jstcgo cu dy hgq?",

// 37 Winning the Scapegoat Sweepstakes
"V2hhdCBGQkkgYWdlbnQgYXNrZWQgU3VuIE1pY3Jvc3lzdGVtcyB0\
byBjbGFpbSB0aGV5IGxvc3QgODAgbWlsbGlvbiBkb2xsYXJzPw==",

// 38 Aftermath: A Reversal of Fortune
"100-1111-10-0 011-000-1-111 00-0100 1101-10-1110-000-101-11-0-1\
 0111-110-00-1001-1-101 111-0-11-0101-010-1-101 111-10-0100 11-00-11"
];